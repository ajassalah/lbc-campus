import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { CourseCard } from "@/components/courses/CourseCard";
import { courses } from "@/data/courses";

export const Route = createFileRoute("/courses/postgraduate")({
  head: () => ({
    meta: [
      { title: "Postgraduate Programs — London Business Campus" },
      { name: "description", content: "UK-accredited Level 7 postgraduate diplomas and MBA pathways at LBC — built for working professionals in Sri Lanka." },
      { property: "og:title", content: "Postgraduate Programs at LBC" },
      { property: "og:description", content: "Level 7 UK postgraduate qualifications and MBA top-ups for senior professionals." },
      { property: "og:url", content: "/courses/postgraduate" },
    ],
    links: [{ rel: "canonical", href: "/courses/postgraduate" }],
  }),
  component: Page,
});

function Page() {
  const list = courses.filter((c) => c.group === "Postgraduate");
  return (
    <>
      <PageHero eyebrow="Courses" title="Postgraduate Programs" subtitle="UK-accredited Level 7 postgraduate diplomas and MBA pathways." />
      <section className="container-page py-12 md:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => <CourseCard key={c.id} course={c} />)}
        </div>
      </section>
    </>
  );
}
