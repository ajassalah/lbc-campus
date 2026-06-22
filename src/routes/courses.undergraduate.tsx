import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { CourseCard } from "@/components/courses/CourseCard";
import { courses } from "@/data/courses";

export const Route = createFileRoute("/courses/undergraduate")({
  head: () => ({
    meta: [
      { title: "Undergraduate Programs — London Business Campus" },
      { name: "description", content: "UK-accredited Level 4, 5 and 6 undergraduate degrees and diplomas at LBC — business, IT, health care, law, engineering and more." },
      { property: "og:title", content: "Undergraduate Programs at LBC" },
      { property: "og:description", content: "Level 4–6 UK-accredited diplomas and Bachelor's degrees taught in Colombo." },
      { property: "og:url", content: "/courses/undergraduate" },
    ],
    links: [{ rel: "canonical", href: "/courses/undergraduate" }],
  }),
  component: Page,
});

import { FilteredCourseGrid } from "@/components/courses/FilteredCourseGrid";

function Page() {
  const list = courses.filter((c) => c.group === "Undergraduate");
  return (
    <>
      <PageHero eyebrow="Courses" title="Undergraduate Programs" subtitle="Level 4 to Level 6 UK-accredited diplomas and Bachelor's degrees." />
      <section className="container-page py-12 md:py-16">
        <FilteredCourseGrid initialCourses={list} />
      </section>
    </>
  );
}
