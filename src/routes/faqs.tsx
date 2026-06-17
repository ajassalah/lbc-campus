import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Are LBC qualifications recognised internationally?", a: "Yes. All LBC programs are awarded by UK Ofqual-regulated bodies and are recognised across the UK, EU, Middle East, Australia and other major markets." },
  { q: "Can I study online?", a: "Most of our programs are delivered in blended mode. You can choose online, on-campus, or a mix of both." },
  { q: "What are the entry requirements?", a: "Each program lists its specific requirements on its course page. As a guide, undergraduate diplomas require completion of secondary school; postgraduate programs require a Bachelor's degree or equivalent professional experience." },
  { q: "How much do programs cost?", a: "Fees vary by program — from LKR 35,000 for short courses to around LKR 525,000 for a full MBA. Installment plans are available for every program." },
  { q: "When are the intakes?", a: "We run rolling intakes in January, May and September for degree programs, and monthly intakes for short courses." },
  { q: "Can I top up my LBC diploma to a UK Bachelor's degree?", a: "Yes. LBC has direct progression agreements with several UK universities for top-up routes — typically completed in 9–12 months." },
  { q: "Are scholarships available?", a: "We offer merit-based scholarships for outstanding students and need-based fee waivers on selected programs. Speak to admissions for current opportunities." },
  { q: "Do you offer career support?", a: "Yes. Every student has access to our placement team, CV and interview workshops, and our employer network across Sri Lanka and abroad." },
];

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — London Business Campus" },
      { name: "description", content: "Answers to the most common questions about studying at London Business Campus — accreditation, fees, intakes, online learning and more." },
      { property: "og:title", content: "LBC FAQs" },
      { property: "og:description", content: "Common questions about studying at London Business Campus, answered." },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Help" title="Frequently Asked Questions" subtitle="Quick answers to the questions our admissions team hears most often." />
      <section className="container-page py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl border border-border bg-card px-5">
                <AccordionTrigger className="text-left text-base font-semibold text-primary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
