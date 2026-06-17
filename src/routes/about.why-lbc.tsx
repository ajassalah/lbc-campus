import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { ContentSection } from "@/components/common/ContentPage";

export const Route = createFileRoute("/about/why-lbc")({
  head: () => ({
    meta: [
      { title: "Why Choose LBC? — London Business Campus" },
      { name: "description", content: "Discover why the next generation of working executives and corporate are choosing LBC." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Why Choose LBC?"
        subtitle="Discover why the next generation of working executives are choosing LBC."
      />
      
      <ContentSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              We foster a culture in which you discover, develop, and thrive. You share inspiration and knowledge with people from all around the world as you achieve future accomplishments.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              Growth is a challenge every leader and organisation confronts in today's ever changing business environment – across sectors, markets, countries and economies. At LBC, we develop brave leaders who inspire growth in people, organisations and markets to change the way things are done.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
              alt="Business and Leadership" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <span className="text-primary text-xl">🏛️</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Built on a Unique Cross-Disciplinary Model</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Our distinctive approach to thought leadership is built on foundational departments integrated with strategic cross-disciplinary initiatives and rich curricular experience. The London Business Campus equips and inspires students to become thought leaders and outstanding problem solvers, achievers in the real world.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <span className="text-primary text-xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Courageous, Driven & Supportive Community</h3>
            <p className="text-gray-700 dark:text-gray-300">
              We offer an environment that requires teamwork and encourages risk-taking, among colleagues who are supportive as they are ambitious. The course helps you to generate new ideas which can be put into practice to make an impact on the community we all live in.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <span className="text-primary text-xl">💻</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Online Delivery of Programs</h3>
            <p className="text-gray-700 dark:text-gray-300">
              All our programs are delivered online, designed by expert academicians, keeping in mind the future requirements of the markets and industries worldwide. A well researched curriculum and support by expert faculty gives you an edge which helps you to outshine your colleagues in a real work environment.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <span className="text-primary text-xl">✨</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">The LBC Advantage</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center"><span className="text-primary mr-2">✓</span> Our programmes are cost effective</li>
              <li className="flex items-center"><span className="text-primary mr-2">✓</span> You can study anytime – anywhere</li>
              <li className="flex items-center"><span className="text-primary mr-2">✓</span> Ideally suited to working professionals</li>
              <li className="flex items-center"><span className="text-primary mr-2">✓</span> 100% Online via live tutor support</li>
            </ul>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
