import { ArrowRight, BadgeCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Course } from "@/data/courses";

export function CourseCard({ course }: { course: Course }) {
  const isFree = course.price === "Free";
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        to="/courses/$courseId"
        params={{ courseId: course.slug }}
        className="relative block aspect-[16/10] overflow-hidden bg-muted"
      >
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          width={1024}
          height={640}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground hover:bg-primary">
          {course.category}
        </Badge>

      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <BadgeCheck className="h-3.5 w-3.5 text-accent" />
          <span className="whitespace-pre-line">{course.awardingBody.replace("Pearson BTEC", "\n")}</span>
        </div>
        <h3 className="mt-2 line-clamp-2 text-base font-semibold leading-snug text-primary">
          <Link
            to="/courses/$courseId"
            params={{ courseId: course.slug }}
            className="hover:underline"
          >
            {course.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{course.description}</p>
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
            {course.level}
          </span>

        </div>
        <Button
          asChild
          className="mt-5 w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Link to="/courses/$courseId" params={{ courseId: course.slug }}>
            Get Enrolled
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}