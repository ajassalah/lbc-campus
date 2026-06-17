import type { ReactNode } from "react";

export function ContentSection({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="container-page py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        {title ? (
          <h2 className="mb-5 font-display text-2xl font-bold text-primary md:text-3xl">{title}</h2>
        ) : null}
        <div className="prose prose-slate max-w-none text-foreground/90 [&_p]:leading-relaxed [&_li]:leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}

export function FeatureList({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <div className="container-page py-12 md:py-16">
      <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <h3 className="text-base font-semibold text-primary">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
