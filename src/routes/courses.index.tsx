import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { z } from "zod";
import { PageHero } from "@/components/common/PageHero";
import { CourseCard } from "@/components/courses/CourseCard";
import { CourseFilters } from "@/components/courses/CourseFilters";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";

const searchSchema = z.object({
  q: z.string().optional(),
  category: z.string().optional(),
  level: z.string().optional(),
});

export const Route = createFileRoute("/courses/")({
  validateSearch: searchSchema,
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
  const initial = Route.useSearch();
  const [q, setQ] = useState(initial.q ?? "");
  const [category, setCategory] = useState(initial.category ?? "all");
  const [level, setLevel] = useState(initial.level ?? "all");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    return courses.filter((c) => {
      if (category !== "all" && c.category !== category) return false;
      if (level !== "all" && c.level !== level) return false;
      if (qq) {
        const hay = `${c.title} ${c.category} ${c.awardingBody} ${c.description}`.toLowerCase();
        if (!hay.includes(qq)) return false;
      }
      return true;
    });
  }, [q, category, level]);

  useEffect(() => {
    setPage(1);
  }, [q, category, level]);

  const itemsPerPage = 7;
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <>
      <PageHero
        eyebrow="Courses"
        title="Find the program that's right for you"
        subtitle="Search, filter and compare every UK-accredited course on offer at LBC."
      />
      <section className="container-page py-10 md:py-14">
        <CourseFilters q={q} setQ={setQ} category={category} setCategory={setCategory} level={level} setLevel={setLevel} />
        <div className="mt-4 text-sm text-muted-foreground">
          Showing <strong>{paginated.length}</strong> of {filtered.length} courses
        </div>
        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
            No courses match your search. Try clearing a filter.
          </div>
        ) : (
          <>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {paginated.map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </div>
            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-4">
                <Button
                  variant="outline"
                  disabled={page === 1}
                  onClick={() => {
                    setPage((p) => Math.max(1, p - 1));
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Previous
                </Button>
                <div className="text-sm font-medium text-muted-foreground">
                  Page {page} of {totalPages}
                </div>
                <Button
                  variant="outline"
                  disabled={page === totalPages}
                  onClick={() => {
                    setPage((p) => Math.min(totalPages, p + 1));
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Next
                </Button>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}
