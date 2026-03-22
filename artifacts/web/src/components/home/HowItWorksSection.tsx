import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";

export function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "We Talk",
      desc: "Book a free 20-minute evaluation. We look at your current setup, discuss your goals, and see if we're a good fit."
    },
    {
      num: "02",
      title: "We Build",
      desc: "You pay the one-time setup fee, and we get to work. Within 1–3 days, we present a complete, custom website."
    },
    {
      num: "03",
      title: "We Launch — and Stay",
      desc: "You approve it, we launch it. Then your flat monthly subscription kicks in, covering hosting and all future text/photo updates."
    }
  ];

  return (
    <section className="bg-offwhite py-24 px-6 md:px-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-6">
            From Your First Call to a Live Website — In Three Steps
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-16 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gray-300 z-0"></div>

          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.2} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-charcoal text-orange flex items-center justify-center font-display text-2xl tracking-widest shadow-lg mb-6 border-4 border-offwhite">
                {step.num}
              </div>
              <h3 className="text-2xl font-display text-charcoal mb-4">{step.title}</h3>
              <p className="text-gray-600 font-sans leading-relaxed max-w-sm">{step.desc}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6} className="text-center">
          <CTAButton href="/contact">Book Your Free Evaluation</CTAButton>
        </ScrollReveal>

      </div>
    </section>
  );
}
