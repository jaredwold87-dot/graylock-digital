import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";

export function TestimonialSection() {
  // Take first 3 for homepage
  const testimonials = TESTIMONIALS.slice(0, 3);

  return (
    <section className="bg-charcoal py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-4">
            What Our Clients Say
          </h2>
          <div className="flex justify-center gap-1 text-orange">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, i) => (
            <ScrollReveal key={i} delay={i * 0.15} className="bg-navy p-8 rounded-xl border border-gunmetal flex flex-col justify-between">
              <p className="text-stone font-sans italic mb-8 relative z-10">
                <span className="text-orange text-4xl absolute -top-4 -left-2 opacity-50 font-serif">"</span>
                {test.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gunmetal flex items-center justify-center text-orange font-display text-xl">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display text-offwhite text-lg">{test.name}</h4>
                  <p className="text-stone text-sm">{test.title} • {test.location}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
