import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";

const recognitions = [
  {
    name: "London Management Qualifications (LMQ)",
    logo: "/images/london managment.jpeg",
    description:
      "The London Management Qualifications (LMQ) is a UK based awarding organisation credit rated by SCQF validating a set of innovative programmes covering a range of levels of study. LMQ has accredited delivery centres who work in partnership with LMQ to deliver our curriculum globally. The LMQ awards allow partners to use a variety of assessment tools to provide training and development opportunities for the learners.",
  },
  {
    name: "Centre for Qualification and Higher Education (CQHE)",
    logo: "/images/cghe_logo.png",
    description:
      "Centre for Qualification and Higher Education, popularly known as CQHE, is an independent organisation providing both 'Accreditation' and 'Assessment' of qualifications services to educational institutes primarily in the European zone with a global reach. CQHE provides a wide range of qualifications to institutions and private training providers.",
  },
];

export const Route = createFileRoute("/about/recognition")({
  head: () => ({
    meta: [
      { title: "Recognition — London Business Campus" },
      {
        name: "description",
        content:
          "London Business Campus qualifications are internationally recognised, featuring pathways to UK university top-up degrees and professional bodies.",
      },
      { property: "og:title", content: "LBC Recognition & Awarding Bodies" },
      {
        property: "og:description",
        content: "Global recognition of LBC qualifications and progression pathways.",
      },
      { property: "og:url", content: "/about/recognition" },
    ],
    links: [{ rel: "canonical", href: "/about/recognition" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Recognition"
        subtitle="Our qualifications are internationally recognised and accredited by prestigious UK awarding bodies."
      />
      
      <section className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">
            Globally Recognised Institutions
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            London Business Campus collaborates with leading UK awarding bodies and institutions to deliver high-quality, internationally accredited curriculum designed for global opportunities.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {recognitions.map((r, i) => (
            <div
              key={r.name}
              className="group flex flex-col md:flex-row items-center gap-8 rounded-2xl border bg-card p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20"
            >
              <div className="flex h-32 w-full md:w-48 shrink-0 items-center justify-center rounded-xl bg-white p-4 border border-border/50 group-hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={r.logo}
                  alt={`${r.name} Logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display text-xl font-bold text-primary">
                  {r.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {r.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
