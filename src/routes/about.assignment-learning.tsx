import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { ContentSection, FeatureList } from "@/components/common/ContentPage";

export const Route = createFileRoute("/about/assignment-learning")({
  head: () => ({
    meta: [
      { title: "Assignment Based Learning — London Business Campus" },
      { name: "description", content: "LBC programs are assessed through real-world assignments and portfolios — not high-stakes final exams — so you graduate with proof of skill." },
      { property: "og:title", content: "Assignment Based Learning at LBC" },
      { property: "og:description", content: "Build a portfolio of real work — LBC's assessment model develops applied skill, not exam tricks." },
      { property: "og:url", content: "/about/assignment-learning" },
    ],
    links: [{ rel: "canonical", href: "/about/assignment-learning" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Assignment Based Learning" subtitle="Graduate with a portfolio of real work — not a stack of forgotten exam papers." />
      <ContentSection>
        <p>
          Most LBC programs are assessed entirely through assignments, projects and reflective
          portfolios. The result: every student leaves with a body of work they can show employers,
          and a way of thinking that survives the day after the exam.
        </p>
      </ContentSection>
      <FeatureList
        items={[
          { title: "Real-world briefs", body: "Assignments mirror the actual tasks practitioners face — case studies, business plans, code repositories." },
          { title: "Continuous feedback", body: "Tutors review drafts and coach you to a stronger submission instead of judging a single attempt." },
          { title: "Portfolio building", body: "Your strongest pieces become a portfolio that follows you into job applications and interviews." },
          { title: "Lower stakes, higher learning", body: "No single 3-hour exam decides your year. The work is harder; the learning is deeper." },
        ]}
      />
    </>
  );
}
