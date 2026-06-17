import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Briefcase,
  Building2,
  Calculator,
  Cpu,
  GraduationCap,
  HardHat,
  HeartPulse,
  Plane,
  Scale,
  Scissors,
  Truck,
  Users,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { CategoryCard } from "@/components/home/CategoryCard";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { StatsBar } from "@/components/home/StatsBar";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CourseCard } from "@/components/courses/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { courses, type CourseCategory } from "@/data/courses";
import { useState } from "react";

const cats: { label: CourseCategory; icon: typeof Briefcase }[] = [
  { label: "Health Care", icon: HeartPulse },
  { label: "Information Technology", icon: Cpu },
  { label: "Business Management", icon: Briefcase },
  { label: "Tourism & Hospitality", icon: Plane },
  { label: "Law", icon: Scale },
  { label: "Engineering", icon: HardHat },
  { label: "Fashion & Textile", icon: Scissors },
  { label: "Logistics & Supply Chain", icon: Truck },
  { label: "Human Resource Management", icon: Users },
  { label: "Accounting & Finance", icon: Calculator },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "London Business Campus — Recognize Yourself with LBC" },
      {
        name: "description",
        content:
          "UK-accredited undergraduate, postgraduate and short courses delivered in Sri Lanka. Flexible study, affordable fees, global recognition.",
      },
      { property: "og:title", content: "London Business Campus — Recognize Yourself with LBC" },
      {
        property: "og:description",
        content: "UK-accredited higher education in Sri Lanka. Flexible. Affordable. Globally recognised.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = courses.slice(0, 6);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="LBC students collaborating on campus"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/70" />
        <div className="container-page py-20 text-primary-foreground md:py-28 lg:py-32">
          <div className="max-w-3xl flex flex-col items-center text-center md:items-start md:text-left mx-auto md:mx-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              <GraduationCap className="h-3.5 w-3.5" /> UK-Accredited · Sri Lanka
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Recognize Yourself <span className="text-accent">with LBC</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base text-primary-foreground/85 md:text-lg">
              Earn globally recognised UK qualifications from Colombo. Study online or on-campus,
              at a fraction of the cost of going overseas.
            </p>
            <div className="mt-8 flex flex-col w-full sm:w-auto sm:flex-row flex-wrap justify-center md:justify-start gap-4">
              <Button
                onClick={() => document.getElementById("featured-programs")?.scrollIntoView({ behavior: "smooth" })}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold px-6 py-6 cursor-pointer w-full sm:w-auto"
              >
                Browse Programmes
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold px-6 py-6 w-full sm:w-auto"
              >
                <Link to="/contact">Apply Now</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start items-center gap-6 text-xs text-primary-foreground/70">
              <span>CQHE</span>
              <span>LMQ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container-page py-16 md:py-24">
        <SectionHeader
          eyebrow="Study Areas"
          title="Find your future career"
          subtitle="Choose from ten in-demand disciplines, each taught with UK-accredited curriculum and experienced industry faculty."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {cats.map((c, i) => (
            <div key={c.label} className={`h-full ${i >= 6 ? "hidden sm:block" : "block"}`}>
              <CategoryCard label={c.label} icon={c.icon} />
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="Why LBC"
            title="A different kind of higher education"
            subtitle="World-class qualifications, designed for working professionals and ambitious school-leavers in Sri Lanka."
          />
          <div className="mt-12">
            <WhyChooseUs />
          </div>
        </div>
      </section>

      {/* Featured courses */}
      <section className="container-page py-16 md:py-24" id="featured-programs">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            align="left"
            eyebrow="Featured Programs"
            title="Explore our latest courses"
            subtitle="From short certificates to a full UK MBA — start where you are, finish where you want to be."
          />
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/courses">View all courses</Link>
          </Button>
        </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((c, i) => (
              <div key={c.id} className={i >= 4 ? "hidden lg:block" : "block"}>
                <CourseCard course={c} />
              </div>
            ))}
          </div>
      </section>

      {/* Our Partners */}
      <section className="bg-secondary/40 py-16 md:py-20 border-y border-border/40 overflow-hidden">
        <div className="container-page text-center">
          <SectionHeader
            eyebrow="Our Partners"
            title="Globally Recognised & Accredited"
            subtitle="LBC collaborates with prestigious international awarding bodies and institutions to deliver high-quality UK qualifications."
            align="center"
          />
            <div className="mt-14 relative flex overflow-hidden group [--gap:2rem] gap-[--gap]">
              <div className="flex animate-[marquee_40s_linear_infinite_alternate] min-w-full shrink-0 items-center justify-center gap-[--gap] group-hover:[animation-play-state:paused]">
                {[

                  { src: "/images/london%20managment.jpeg", href: "https://lmqawards.org.uk/" },
                  { src: "https://cqhe.org.uk/cghe_logo.png", href: "https://cqhe.org.uk/" }
                ].map((partner, i) => (
                  <a href={partner.href} target="_blank" rel="noopener noreferrer" key={i} className="p-4 hover:scale-105 transition-all shrink-0">
                    <img
                      src={partner.src}
                      alt={`Partner ${i + 1}`}
                      className="h-16 md:h-24 lg:h-32 w-auto object-contain mix-blend-multiply drop-shadow-sm"
                    />
                  </a>
                ))}
              </div>
              <div className="flex animate-[marquee_40s_linear_infinite_alternate] min-w-full shrink-0 items-center justify-center gap-[--gap] group-hover:[animation-play-state:paused]" aria-hidden="true">
                {[
                  { src: "/images/london%20managment.jpeg", href: "https://lmqawards.org.uk/" },
                  { src: "https://cqhe.org.uk/cghe_logo.png", href: "https://cqhe.org.uk/" }
                ].map((partner, i) => (
                  <a href={partner.href} target="_blank" rel="noopener noreferrer" key={`dup-${i}`} className="p-4 hover:scale-105 transition-all shrink-0">
                    <img
                      src={partner.src}
                      alt={`Partner ${i + 1}`}
                      className="h-16 md:h-24 lg:h-32 w-auto object-contain mix-blend-multiply drop-shadow-sm"
                    />
                  </a>
                ))}
              </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container-page pb-16 md:pb-24">
        <StatsBar />
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="Student Voices"
            title="What our graduates say"
            subtitle="Real outcomes from real LBC students — across health care, business, law, engineering and more."
          />
          <div className="mt-12">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-10 text-center text-primary-foreground md:p-16">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Ready to <span className="text-accent">recognize yourself</span>?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85">
            Speak to an admissions advisor and find the program that fits your goals, schedule and budget.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Talk to admissions</Link>
            </Button>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/courses">Browse courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-page pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-secondary/30 border border-border/60 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-primary md:text-3xl">
                Stay in the loop
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Subscribe to our newsletter to receive the latest updates on new UK-accredited programs, upcoming intakes, student success stories, and local campus news.
              </p>
            </div>
            <div>
              {subscribed ? (
                <div className="rounded-2xl bg-green-500/10 border border-green-500/20 p-6 text-center text-green-700 dark:text-green-400">
                  <span className="font-semibold block text-base">Thank you for subscribing!</span>
                  <span className="text-xs mt-1 block">You've successfully joined our newsletter.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-3 w-full sm:flex-row sm:items-center">
                  <Input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 w-full bg-background focus-visible:ring-primary"
                  />
                  <Button type="submit" size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12 px-6 shrink-0">
                    Join Newsletter
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
