import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { NicheExamplesSection } from "@/components/home/NicheExamplesSection";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { TrustStatsSection } from "@/components/home/TrustStatsSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function Home() {
  return (
    <>
      <SEO />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <TestimonialSection />
      <NicheExamplesSection />
      <PricingSection />
      <FAQSection />
      <TrustStatsSection />
      <FinalCTASection />
    </>
  );
}
