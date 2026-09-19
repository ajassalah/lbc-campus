import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories, courseGroups, courseLevels } from "@/data/courses";

export function CourseFilters({
  q,
  setQ,
  category,
  setCategory,
  level,
  setLevel,
  group,
  setGroup,
}: {
  q: string;
  setQ: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
  level: string;
  setLevel: (v: string) => void;
  group: string;
  setGroup: (v: string) => void;
}) {
  return (
    <div className="grid gap-3 rounded-2xl border border-border bg-card p-4 md:grid-cols-[1fr_220px_180px_180px]">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search courses…"
          className="h-11 pl-9"
        />
      </div>
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="h-11"><SelectValue placeholder="Category" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All categories</SelectItem>
          {categories.map((c) => (
            <SelectItem key={c} value={c}>{c}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={level} onValueChange={setLevel}>
        <SelectTrigger className="h-11"><SelectValue placeholder="Level" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All levels</SelectItem>
          {courseLevels.map((l) => (
            <SelectItem key={l} value={l}>{l}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={group} onValueChange={setGroup}>
        <SelectTrigger className="h-11"><SelectValue placeholder="Group" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All groups</SelectItem>
          {courseGroups.map((g) => (
            <SelectItem key={g} value={g}>{g}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
