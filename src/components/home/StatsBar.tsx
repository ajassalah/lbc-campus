import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Students Enrolled", value: 12500, suffix: "+" },
  { label: "Courses Available", value: 85, suffix: "+" },
  { label: "Awarding Bodies", value: 14, suffix: "" },
  { label: "Years of Excellence", value: 18, suffix: "" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1500;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref} className="tabular-nums">
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-20" style={{
        background:
          "radial-gradient(circle at 20% 30%, var(--accent) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--accent) 0%, transparent 40%)",
      }} />
      <div className="container-page relative grid gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl font-bold text-accent md:text-5xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm text-primary-foreground/80">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}