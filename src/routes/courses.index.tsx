import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { courses } from "@/data/courses";
import { FilteredCourseGrid } from "@/components/courses/FilteredCourseGrid";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "All Courses — London Business Campus" },
      { name: "description", content: "Browse all UK-accredited courses at London Business Campus — undergraduate, postgraduate and short courses across ten disciplines." },
      { property: "og:title", content: "All LBC Courses" },
      { property: "og:description", content: "Search every undergraduate, postgraduate and short course on offer at LBC." },
      { property: "og:url", content: "/courses" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: CoursesIndex,
});

function CoursesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Courses"
        title="Find the program that's right for you"
        subtitle="Search, filter and compare every UK-accredited course on offer at LBC."
      />
      <section className="container-page py-10 md:py-14">
        <FilteredCourseGrid initialCourses={courses} />
      </section>
    </>
  );
}
