import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { CourseCard } from "@/components/courses/CourseCard";
import { courses } from "@/data/courses";

export const Route = createFileRoute("/courses/short-courses")({
  head: () => ({
    meta: [
      { title: "Short Courses — London Business Campus" },
      { name: "description", content: "Skills-focused short courses at LBC. Digital marketing, data analytics, fashion design and more — finish in weeks, not years." },
      { property: "og:title", content: "Short Courses at LBC" },
      { property: "og:description", content: "Skill up fast with LBC's short courses — start any month." },
      { property: "og:url", content: "/courses/short-courses" },
    ],
    links: [{ rel: "canonical", href: "/courses/short-courses" }],
  }),
  component: Page,
});

import { FilteredCourseGrid } from "@/components/courses/FilteredCourseGrid";

function Page() {
  const list = courses.filter((c) => c.group === "Short Courses");
  return (
    <>
      <PageHero eyebrow="Courses" title="Short Courses & Certificates" subtitle="Skill-focused, intensive training for rapid career progression." />
      <section className="container-page py-12 md:py-16">
        <FilteredCourseGrid initialCourses={list} />
      </section>
    </>
  );
}
