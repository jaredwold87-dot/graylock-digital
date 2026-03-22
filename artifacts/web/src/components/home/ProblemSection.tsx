import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ProblemSection() {
  const problems = [
    {
      title: "Still Looks Like 2014",
      desc: "An outdated design signals an outdated business to potential clients."
    },
    {
      title: "Broken on Mobile",
      desc: "Over 60% of visitors browse on phones. If they pinch to zoom, they leave."
    },
    {
      title: "Invisible on Google",
      desc: "No proper SEO foundation means your competitors get the local traffic."
    },
    {
      title: "Agency Quotes Are Overwhelming",
      desc: "Agencies quote $5,000–$15,000 upfront. That ties up too much cash."
    },
    {
      title: "You Can't Update It Yourself",
      desc: "Every minor text change requires emailing a developer who ignores you."
    },
    {
      title: "You've Been Putting It Off",
      desc: "It feels too complicated and expensive to fix, so you live with a bad site."
    }
  ];

  return (
    <section className="bg-offwhite py-24 px-6 md:px-12 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-6">
            Your Website Might Be Costing You More Than You Think
          </h2>
          <p className="text-gray-600 text-lg font-sans">
            Every day you stick with an underperforming website, you're handing warm leads over to your competitors.
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
            We built Graylock Digital specifically for businesses in this situation.
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
