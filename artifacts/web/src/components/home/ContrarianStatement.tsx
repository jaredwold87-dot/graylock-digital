import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ContrarianStatement() {
  return (
    <section className="bg-charcoal py-20 md:py-28 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-charcoal pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <p className="text-3xl md:text-[40px] lg:text-5xl font-display text-offwhite leading-tight mb-6">
            Every other agency wants you to pay first.{" "}
            <span className="text-orange">We think that's backwards.</span>
          </p>
          <p className="text-stone text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
            We do the work first. You see the results first. Then you decide.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
