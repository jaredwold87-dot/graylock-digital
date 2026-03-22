import { Check } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BeforeAfterMockup } from "./BeforeAfterMockup";

export function HeroSection() {
  return (
    <section className="bg-charcoal pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden relative">
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange/5 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display text-offwhite leading-[1.1] mb-6">
            Your Website Should Be Getting You Leads. <span className="text-orange">Is It?</span>
          </h1>
          <p className="text-stone text-lg md:text-xl font-sans mb-8 max-w-xl leading-relaxed">
            Graylock Digital builds and maintains modern, lead-focused websites for small service businesses — for one simple monthly subscription. Done for you. Launched in days. Maintained forever.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
            <CTAButton href="/contact">
              Get Your Free Website Evaluation
            </CTAButton>
          </div>

          <div className="flex flex-col gap-3">
            {[
              "Sites delivered in 1–3 business days",
              "Hosting & maintenance included",
              "No long-term contracts"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-navy border border-gunmetal flex items-center justify-center">
                  <Check size={12} className="text-orange" />
                </div>
                <span className="text-stone font-sans text-sm md:text-base">{text}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <BeforeAfterMockup />
        
      </div>
    </section>
  );
}
