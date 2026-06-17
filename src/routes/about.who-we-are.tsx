import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { ContentSection } from "@/components/common/ContentPage";

export const Route = createFileRoute("/about/who-we-are")({
  head: () => ({
    meta: [
      { title: "Who We Are — London Business Campus" },
      { name: "description", content: "We are proud of our global community of over 10,000 successful alumni." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Who Are We?" subtitle="A global community of over 10,000 successful alumni." />
      
      <ContentSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">An Innovative Approach to Education</h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              We are proud of our global community of over 10,000 successful alumni. London Business Campus provides an innovative approach to education, delivering high-quality programmes ranging from Business Management to Information Technology - delivered 100% online.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
              alt="Students collaborating" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <span className="text-primary text-2xl">🎓</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Professional</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Our qualifications give you the skills to succeed and make a difference in the workplace.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <span className="text-primary text-2xl">💡</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Affordable</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Our programmes are some of the most affordable on the market and can help you save thousands of pounds. Invest now on your education and later get the highest returns possible.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <span className="text-primary text-2xl">🌍</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Convenient & Flexible</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Study with us online or through distance learning from the comforts of home or office. Our programmes are accessible at any time of the day whether you are at work or on vacation.
            </p>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
