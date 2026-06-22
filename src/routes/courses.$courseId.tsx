import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  Award,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  Clock,
  GraduationCap,
  PlayCircle,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { courses, type Course } from "@/data/courses";
import { CourseCard } from "@/components/courses/CourseCard";

function findCourse(idParam: string): Course | undefined {
  const id = idParam.toLowerCase();
  return (
    courses.find((c) => c.id.toLowerCase() === id) ||
    courses.find((c) => c.slug.toLowerCase() === id) ||
    courses.find((c) => {
      // accept "c1" matching "c01"
      const m = id.match(/^c(\d+)$/);
      if (!m) return false;
      const n = parseInt(m[1], 10);
      return c.id.toLowerCase() === `c${String(n).padStart(2, "0")}`;
    })
  );
}

export const Route = createFileRoute("/courses/$courseId")({
  loader: ({ params }) => {
    const course = findCourse(params.courseId);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.course.title} — LBC` },
          { name: "description", content: loaderData.course.description },
          { property: "og:title", content: `${loaderData.course.title} — LBC` },
          { property: "og:description", content: loaderData.course.description },
          { property: "og:image", content: loaderData.course.image },
        ]
      : [{ title: "Course — LBC" }],
  }),
  notFoundComponent: () => (
    <div className="container-page py-20 text-center">
      <h1 className="font-display text-3xl font-bold text-primary">Course not found</h1>
      <p className="mt-3 text-muted-foreground">
        We couldn't find that course. Browse our full catalogue instead.
      </p>
      <Button asChild className="mt-6">
        <Link to="/courses">Back to all courses</Link>
      </Button>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-page py-20 text-center">
      <h1 className="font-display text-2xl font-bold text-primary">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: CourseDetailPage,
});

function CourseDetailPage() {
  const { course } = Route.useLoaderData();

  const relatedCourses = courses
    .filter((c) => c.category === course.category && c.id !== course.id)
    .slice(0, 4);
    
  if (relatedCourses.length < 4) {
    const otherCourses = courses.filter((c) => c.id !== course.id && !relatedCourses.includes(c));
    relatedCourses.push(...otherCourses.slice(0, 4 - relatedCourses.length));
  }

  const modules = course.units || [
    { title: "Orientation & Programme Overview", weeks: "Week 1" },
    { title: "Core Foundations", weeks: "Weeks 2–4" },
    { title: "Applied Practice & Case Studies", weeks: "Weeks 5–8" },
    { title: "Advanced Topics & Industry Tools", weeks: "Weeks 9–11" },
    { title: "Capstone Project & Assessment", weeks: "Weeks 12–14" },
  ];

  const outcomes = [
    "Develop industry-ready skills aligned with UK awarding body standards.",
    "Build a portfolio of assignments, projects and presentations.",
    "Gain mentorship from qualified academic and industry practitioners.",
    "Pathway to further study or career progression on completion.",
  ];

  const facts = [
    { icon: Clock, label: "Duration", value: "12–18 months" },
    { icon: CalendarDays, label: "Next intake", value: "Rolling intakes" },
    { icon: Users, label: "Mode", value: "On-campus & Blended" },
    { icon: Award, label: "Awarding Body", value: course.awardingBody },
  ];

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-10 md:py-14">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" /> Back to courses
          </Link>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-accent text-accent-foreground hover:bg-accent">
                  {course.category}
                </Badge>
                <Badge variant="outline" className="border-primary-foreground/40 text-primary-foreground">
                  {course.level}
                </Badge>
                <Badge variant="outline" className="border-primary-foreground/40 text-primary-foreground">
                  {course.group}
                </Badge>
              </div>
              <h1 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
                {course.title}
              </h1>
              <p className="mt-4 max-w-2xl text-primary-foreground/85 md:text-lg">
                {course.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center gap-2 text-sm">
                  <BadgeCheck className="h-4 w-4 text-accent" /> {course.awardingBody}
                </div>
                <div className="inline-flex items-center gap-2 text-sm">
                  <GraduationCap className="h-4 w-4 text-accent" /> UK Accredited
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 shadow-xl">
              <img
                src={course.image}
                alt={course.title}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="container-page grid gap-10 py-12 lg:grid-cols-[1fr_360px] lg:py-16">
        <div className="space-y-10">
          {/* Facts */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {facts.map((f) => (
              <div
                key={f.label}
                className="rounded-xl border border-border bg-card p-4"
              >
                <f.icon className="h-5 w-5 text-accent" />
                <div className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">
                  {f.label}
                </div>
                <div className="text-sm font-semibold text-foreground">{f.value}</div>
              </div>
            ))}
          </div>

          {/* About */}
          <div>
            <h2 className="font-display text-2xl font-bold text-primary">About this programme</h2>
            <p className="mt-3 text-muted-foreground">
              The {course.title} at London Business Campus is designed to combine rigorous
              academic content with practical, industry-relevant skills. Delivered by experienced
              lecturers and accredited by {course.awardingBody}, the programme equips students
              with the confidence and competence to excel in their chosen field.
            </p>
          </div>

          {/* Outcomes */}
          <div>
            <h2 className="font-display text-2xl font-bold text-primary">What you'll achieve</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{o}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Curriculum */}
          <div>
            <h2 className="font-display text-2xl font-bold text-primary">Units</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Indicative unit structure. Final syllabus is provided on enrolment.
            </p>
            <ol className="mt-5 space-y-3">
              {modules.map((m, i) => (
                <li
                  key={m.title}
                  className="flex items-center justify-between rounded-xl border border-border bg-card p-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="font-semibold text-foreground">{m.title}</div>
                      <div className="text-xs text-muted-foreground">{m.weeks}</div>
                    </div>
                  </div>
                  <PlayCircle className="h-5 w-5 text-muted-foreground" />
                </li>
              ))}
            </ol>
          </div>

          {/* Enrolment progress mock */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-bold text-primary">Cohort progress</h3>
              <span className="text-xs text-muted-foreground">Live enrolment</span>
            </div>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Seats filled</span>
              <span className="font-semibold text-foreground">68%</span>
            </div>
            <Progress value={68} className="mt-2" />
            <p className="mt-3 text-xs text-muted-foreground">
              Limited seats remaining for the upcoming intake. Reserve your place today.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <Button
              asChild
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/contact">Get Enrolled</Link>
            </Button>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <BadgeCheck className="h-4 w-4 text-accent" /> UK Accredited Qualification
              </li>
              <li className="flex items-center gap-3">
                <Users className="h-4 w-4 text-accent" /> Small, mentored class sizes
              </li>
              <li className="flex items-center gap-3">
                <Award className="h-4 w-4 text-accent" /> Industry-recognised award
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-accent" /> Flexible study schedule
              </li>
            </ul>

            <div className="mt-6 rounded-xl bg-secondary p-4 text-sm">
              <div className="font-semibold text-primary">Need guidance?</div>
              <p className="mt-1 text-muted-foreground">
                Talk to an admissions counsellor about your eligibility and next steps.
              </p>
              <Button asChild variant="link" className="mt-1 h-auto p-0 text-primary">
                <Link to="/contact">Contact admissions →</Link>
              </Button>
            </div>
          </div>
        </aside>
      </section>

      {/* Related Courses */}
      <section className="container-page py-12 lg:py-16 border-t border-border">
        <h2 className="font-display text-2xl font-bold text-primary mb-6">Related courses</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedCourses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </section>
    </div>
  );
}