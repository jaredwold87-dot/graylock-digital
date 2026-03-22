import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ProblemSection() {
  const problems = [
    {
      title: "Your Site Looks Outdated",
      desc: "Visitors judge your business in under 3 seconds. An old design tells them you're behind the times — even if your work is exceptional."
    },
    {
      title: "It's Broken on Mobile",
      desc: "Over 60% of your visitors are on their phones. If they have to pinch and zoom, they're leaving — and calling your competitor instead."
    },
    {
      title: "You're Invisible on Google",
      desc: "Without a proper SEO foundation, the people searching for your services in your area are finding everyone but you."
    },
    {
      title: "Agencies Want $10K Upfront",
      desc: "Most agencies quote $5,000–$15,000 before showing you anything. That's a huge gamble for a small business."
    },
    {
      title: "You Don't Know What's Wrong",
      desc: "You know your site isn't working, but you can't pinpoint exactly why. You need someone to show you — clearly."
    },
    {
      title: "You've Been Putting It Off",
      desc: "It feels too complicated and expensive to fix. So every month, you lose more leads to a website that doesn't represent you."
    }
  ];

  return (
    <section className="bg-offwhite py-24 px-6 md:px-12 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-6">
            Most Business Owners Know Their Website Needs Work
          </h2>
          <p className="text-gray-600 text-lg font-sans">
            They just don't know exactly what's wrong — or how to fix it without spending a fortune. Sound familiar?
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((prob, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-display text-charcoal mb-3">{prob.title}</h3>
              <p className="text-gray-600 font-sans leading-relaxed">{prob.desc}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4} className="text-center">
          <p className="text-xl font-display text-orange tracking-wide uppercase">
            That's exactly why we review your site for free — so you finally know what to fix.
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
