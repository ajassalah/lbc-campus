import { Award, Clock, Wallet } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Professional",
    body: "UK-accredited qualifications recognised by leading awarding bodies including CQHE, LMQ, Pearson BTEC and CILT.",
  },
  {
    icon: Clock,
    title: "Convenient & Flexible",
    body: "Study online, on-campus, or in blended mode — fit world-class learning around work and family life.",
  },
  {
    icon: Wallet,
    title: "Affordable",
    body: "A fraction of the cost of overseas study with the same global recognition and career outcomes.",
  },
];

export function WhyChooseUs() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((it) => (
        <div
          key={it.title}
          className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
            <it.icon className="h-7 w-7" />
          </span>
          <h3 className="mt-5 text-xl font-bold text-primary">{it.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
        </div>
      ))}
    </div>
  );
}