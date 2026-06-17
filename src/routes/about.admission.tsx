import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/common/PageHero";
import { ContentSection } from "@/components/common/ContentPage";

export const Route = createFileRoute("/about/admission")({
  head: () => ({
    meta: [
      { title: "Admission Procedure — London Business Campus" },
      { name: "description", content: "How to apply to London Business Campus. Entry requirements, intake dates, fees and step-by-step admissions guidance." },
      { property: "og:title", content: "LBC Admission Procedure" },
      { property: "og:description", content: "A simple step-by-step guide to applying to London Business Campus." },
      { property: "og:url", content: "/about/admission" },
    ],
    links: [{ rel: "canonical", href: "/about/admission" }],
  }),
  component: Page,
});

const steps = [
  { n: 1, title: "Choose your program", body: "Browse our undergraduate, postgraduate or short course catalogue and pick the program that fits your goals." },
  { n: 2, title: "Check entry requirements", body: "Each program lists its academic and English requirements. Our advisors can help if you're unsure." },
  { n: 3, title: "Submit your application", body: "Apply online or visit our Colombo campus. You'll need your certificates, ID and a personal statement." },
  { n: 4, title: "Interview & offer", body: "Most applicants have a short admissions interview. We typically respond with an offer within 5 working days." },
  { n: 5, title: "Pay & enroll", body: "Pay your first installment, complete enrolment, and join your new cohort at the next intake." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Admission Procedure" subtitle="From application to enrolment in five simple steps." />
      <section className="container-page py-12 md:py-16">
        <ol className="mx-auto grid max-w-3xl gap-4">
          {steps.map((s) => (
            <li key={s.n} className="flex gap-5 rounded-2xl border border-border bg-card p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                {s.n}
              </span>
              <div>
                <h3 className="font-semibold text-primary">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <ContentSection title="Intake dates">
        <p>We run rolling intakes in <strong>January, May and September</strong>. Short courses start every month.</p>
      </ContentSection>
      <section className="container-page pb-16 text-center">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link to="/contact">Apply now</Link>
        </Button>
      </section>
    </>
  );
}
