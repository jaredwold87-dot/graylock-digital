import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";

export function TrustStatsSection() {
  // Use testimonials 3 and 4
  const testimonials = TESTIMONIALS.slice(3, 5);

  return (
    <section className="bg-navy py-24 px-6 md:px-12 border-t border-gunmetal">
      <div className="max-w-7xl mx-auto">
        
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-4">
            Real Businesses. Real Results.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((test, i) => (
            <ScrollReveal key={i} delay={i * 0.15} className="bg-charcoal p-8 rounded-xl border border-gunmetal flex flex-col justify-between">
              <div className="flex gap-1 text-orange mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <p className="text-stone font-sans italic mb-8 text-lg">
                "{test.quote}"
              </p>
              <div>
                <h4 className="font-display text-offwhite text-lg">{test.name}</h4>
                <p className="text-stone text-sm">{test.title} • {test.location}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="bg-charcoal rounded-2xl border border-gunmetal p-8 md:p-12 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gunmetal">
            <div className="flex-1 text-center py-6 md:py-0 px-4">
              <div className="text-4xl md:text-6xl font-display text-orange mb-2">1–3 Days</div>
              <div className="text-stone font-display text-xl tracking-wide uppercase">Average Build Time</div>
            </div>
            <div className="flex-1 text-center py-6 md:py-0 px-4">
              <div className="text-4xl md:text-6xl font-display text-orange mb-2">100%</div>
              <div className="text-stone font-display text-xl tracking-wide uppercase">Done-For-You Service</div>
            </div>
            <div className="flex-1 text-center py-6 md:py-0 px-4">
              <div className="text-4xl md:text-6xl font-display text-orange mb-2">$0</div>
              <div className="text-stone font-display text-xl tracking-wide uppercase">Hidden Fees</div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
