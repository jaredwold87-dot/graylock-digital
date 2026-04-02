import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, Quote } from "lucide-react";

export function TestimonialSection() {
  const featured = TESTIMONIALS.slice(0, 3);
  const additional = TESTIMONIALS.slice(3);

  return (
    <section className="bg-charcoal py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-4">
            Real Results From Real Clients
          </h2>
          <div className="flex justify-center gap-1 text-orange mt-3">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((test, i) => (
            <ScrollReveal key={i} delay={i * 0.15} className="card-glow gradient-border bg-navy/80 p-8 rounded-xl border border-gunmetal/50 flex flex-col justify-between relative">
              <div>
                <Quote className="text-orange/20 mb-4" size={32} />
                <div className="flex gap-1 text-orange mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" size={14} />)}
                </div>
                <p className="text-stone font-sans italic mb-8 relative z-10 leading-relaxed text-sm">
                  "{test.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-gunmetal/50">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange to-orange/60 flex items-center justify-center text-white font-display text-xl shadow-lg shadow-orange/20">
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

        {additional.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {additional.map((test, i) => (
              <ScrollReveal key={i} delay={(i + 3) * 0.15} className="bg-navy/50 p-6 rounded-xl border border-gunmetal/30 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-orange mb-3">
                    {[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" size={12} />)}
                  </div>
                  <p className="text-stone/80 font-sans italic mb-6 leading-relaxed text-sm">
                    "{test.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-gunmetal/30">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange/80 to-orange/40 flex items-center justify-center text-white font-display text-lg">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display text-offwhite text-base">{test.name}</h4>
                    <p className="text-stone/70 text-xs">{test.title} • {test.location}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
