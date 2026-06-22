import { useMemo, useState, useEffect } from "react";
import { CourseCard } from "@/components/courses/CourseCard";
import { CourseFilters } from "@/components/courses/CourseFilters";
import { Button } from "@/components/ui/button";
import type { Course } from "@/data/courses";

export function FilteredCourseGrid({ initialCourses }: { initialCourses: Course[] }) {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("all");
  const [level, setLevel] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    return initialCourses.filter((c) => {
      if (category !== "all" && c.category !== category) return false;
      if (level !== "all" && c.level !== level) return false;
      if (qq) {
        const hay = `${c.title} ${c.category} ${c.awardingBody} ${c.description}`.toLowerCase();
        if (!hay.includes(qq)) return false;
      }
      return true;
    });
  }, [initialCourses, q, category, level]);

  // Reset showAll when filters change
  useEffect(() => {
    setShowAll(false);
  }, [q, category, level]);

  const limit = isMobile ? 9 : 10;
  const displayed = showAll ? filtered : filtered.slice(0, limit);

  return (
    <div className="w-full">
      <CourseFilters q={q} setQ={setQ} category={category} setCategory={setCategory} level={level} setLevel={setLevel} />
      <div className="mt-4 text-sm text-muted-foreground">
        Showing <strong>{displayed.length}</strong> of {filtered.length} courses
      </div>
      
      {filtered.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
          No courses match your search. Try clearing a filter.
        </div>
      ) : (
        <>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayed.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
          {!showAll && filtered.length > limit && (
            <div className="mt-10 flex justify-center">
              <Button variant="outline" size="lg" onClick={() => setShowAll(true)}>
                Load More
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
