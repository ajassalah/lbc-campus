import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/data/courses";

export function HeroSearch() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");
  const navigate = useNavigate();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const search: Record<string, string> = {};
    if (q.trim()) search.q = q.trim();
    if (cat !== "all") search.category = cat;
    navigate({ to: "/courses", search });
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto flex w-full max-w-3xl flex-col gap-2 rounded-2xl border border-white/10 bg-white/95 p-2 shadow-2xl backdrop-blur md:flex-row md:items-center"
    >
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search courses, e.g. MBA, Nursing, Python…"
          className="h-12 border-0 bg-transparent pl-9 text-base shadow-none focus-visible:ring-0"
        />
      </div>
      <Select value={cat} onValueChange={setCat}>
        <SelectTrigger className="h-12 border-0 bg-secondary md:w-56">
          <SelectValue placeholder="All categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All categories</SelectItem>
          {categories.map((c) => (
            <SelectItem key={c} value={c}>{c}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        type="submit"
        className="h-12 bg-accent px-6 text-base font-semibold text-accent-foreground hover:bg-accent/90"
      >
        Search
      </Button>
    </form>
  );
}