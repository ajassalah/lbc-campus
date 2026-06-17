import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { FeatureList, ContentSection } from "@/components/common/ContentPage";

export const Route = createFileRoute("/about/accreditation")({
  head: () => ({
    meta: [
      { title: "Accreditation — London Business Campus" },
      { name: "description", content: "London Business Campus is recognised by CQHE and LMQ, UK based awarding organisations." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Accreditation" subtitle="Internationally recognised and regulated by Ofqual." />
      <ContentSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              We are a decade old institution having rich experience in the field of Management Education. The college was established in the year 2017 with a focus on providing top quality Management education.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              LBC is recognised by CQHE and LMQ, prestigious awarding bodies providing high-quality UK qualifications.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/images/accreditation_banner.png" 
              alt="Accreditation and Education" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </ContentSection>

      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Our Vision & Aim</h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">✓</span>
                  Encourage industry to collaborate with us for programme improvement.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">✓</span>
                  Create and find solutions and opportunities through project/research work.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">✓</span>
                  Ideally suited to working professionals.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">✓</span>
                  Share our projects and research work with the world.
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">How We Achieve Our Aims</h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">✓</span>
                  Create and maintain strong partnerships with industry, government, the community, and other research organisations.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">✓</span>
                  Identify areas where our strengths can solve problems.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">✓</span>
                  Deliver new ideas and strategies either by equity participation with partners or forming new companies.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
