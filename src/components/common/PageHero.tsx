export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, var(--accent) 0%, transparent 35%), radial-gradient(circle at 80% 80%, var(--accent) 0%, transparent 35%)",
        }}
      />
      <div className="container-page py-16 md:py-24">
        {eyebrow ? (
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </div>
        ) : null}
        <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-base text-primary-foreground/85 md:text-lg">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}