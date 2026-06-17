import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import type { CourseCategory } from "@/data/courses";

export function CategoryCard({
  label,
  icon: Icon,
}: {
  label: CourseCategory;
  icon: LucideIcon;
}) {
  return (
    <Link
      to="/courses"
      search={{ category: label }}
      className="group relative flex h-full flex-col items-start gap-4 overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
        <Icon className="h-6 w-6" />
      </span>
      <div>
        <div className="font-semibold text-foreground">{label}</div>
        <div className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-accent">
          Explore courses
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}