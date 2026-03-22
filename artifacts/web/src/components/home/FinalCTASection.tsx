import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";

export function FinalCTASection() {
  return (
    <section className="bg-orange py-24 px-6 md:px-12 text-center overflow-hidden relative">
      {/* Decorative large circles */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-black/10 rounded-full blur-2xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-6 leading-tight">
            Ready to Stop Losing Leads to a Bad Website?
          </h2>
          <p className="text-white/85 text-lg md:text-xl font-sans mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a free 20-minute call and we'll review your current site, tell you exactly what's holding it back, and show you what a Graylock site could look like for your business.
          </p>
          <div className="flex flex-col items-center gap-4">
            <CTAButton href="/contact" variant="dark" className="px-10 py-5 text-lg">
              Get My Free Website Evaluation
            </CTAButton>
            <p className="text-white/75 text-sm font-sans mt-2">
              No commitment. No sales pitch. Just an honest look at your website.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
