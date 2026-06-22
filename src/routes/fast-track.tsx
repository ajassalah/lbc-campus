import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/common/PageHero";
import { ContentSection, FeatureList } from "@/components/common/ContentPage";
import { CourseCard } from "@/components/courses/CourseCard";
import { courses } from "@/data/courses";

export const Route = createFileRoute("/fast-track")({
  head: () => ({
    meta: [
      { title: "Fast Track Courses — London Business Campus" },
      { name: "description", content: "Complete your UK Bachelor's or Master's degree faster with LBC Fast Track top-up programs. Credit for your prior qualifications." },
      { property: "og:title", content: "LBC Fast Track Courses" },
      { property: "og:description", content: "Top-up to a UK degree in 9–12 months with LBC's Fast Track pathway." },
      { property: "og:url", content: "/fast-track" },
    ],
    links: [{ rel: "canonical", href: "/fast-track" }],
  }),
  component: Page,
});

function Page() {
  const list = courses.filter((c) => c.group === "Fast Track");
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Fast Track Courses"
        subtitle="Top up your existing diploma to a full UK Bachelor's degree in as little as 9 months."
      />
      <ContentSection>
        <p>
          Already hold a relevant diploma or advanced certificate? LBC's Fast Track pathway gives
          you credit for your prior learning so you can complete a UK Bachelor's or Master's degree
          in a fraction of the standard time.
        </p>
      </ContentSection>
      <FeatureList
        items={[
          { title: "Credit for prior learning", body: "Diploma holders can skip directly into the final year of a Bachelor's program." },
          { title: "9–12 month completion", body: "Most Fast Track students graduate within a year of starting." },
          { title: "UK awarding body", body: "The qualification you earn is identical to one issued by the university itself." },
          { title: "Designed for working pros", body: "Evening and weekend cohorts, with online sessions during the week." },
        ]}
      />
      {list.length > 0 && (
        <section className="container-page py-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
            {list.map((c) => <CourseCard key={c.id} course={c} />)}
          </div>
        </section>
      )}
      <section className="container-page pb-16 text-center">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link to="/contact">Check your eligibility</Link>
        </Button>
      </section>
    </>
  );
}
