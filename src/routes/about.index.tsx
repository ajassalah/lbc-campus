import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, BookOpen, GraduationCap, Stamp, Users2, Workflow } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";

const cards = [
  { to: "/about/why-lbc", title: "Why Choose LBC?", body: "What sets us apart from other higher-education providers in Sri Lanka.", icon: Award },
  { to: "/about/who-we-are", title: "Who Are We?", body: "Our story, vision and the people behind LBC.", icon: Users2 },
  { to: "/about/accreditation", title: "Accreditation", body: "UK awarding bodies and the qualifications we offer.", icon: Stamp },
  { to: "/about/admission", title: "Admission Procedure", body: "How to apply, entry requirements and intake dates.", icon: GraduationCap },
  { to: "/about/recognition", title: "Recognition", body: "Global recognition of LBC programs and their pathways.", icon: BookOpen },
  { to: "/about/assignment-learning", title: "Assignment Based Learning", body: "How our assessment model develops real-world skill, not exam tricks.", icon: Workflow },
];

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: "About LBC — London Business Campus" },
      { name: "description", content: "Learn about London Business Campus: our mission, accreditation, admission process and student-centred learning model." },
      { property: "og:title", content: "About London Business Campus" },
      { property: "og:description", content: "UK-accredited higher education in Sri Lanka — our story, accreditation and approach." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutIndex,
});

function AboutIndex() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Sri Lankan home for UK-accredited education"
        subtitle="LBC was founded to make world-class qualifications accessible to ambitious students across Sri Lanka — without the cost or upheaval of moving overseas."
      />
      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-xl"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-accent group-hover:text-accent-foreground">
                <c.icon className="h-6 w-6" />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-primary">{c.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}