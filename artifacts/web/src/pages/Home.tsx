import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { OfferBreakdownSection } from "@/components/home/OfferBreakdownSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ValueDifferentiationSection } from "@/components/home/ValueDifferentiationSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { DashboardSection } from "@/components/home/DashboardSection";
import { MissionBlurb } from "@/components/home/MissionBlurb";
import { NicheExamplesSection } from "@/components/home/NicheExamplesSection";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function Home() {
  return (
    <>
      <SEO />
      <HeroSection />
      <TrustBar />
      <OfferBreakdownSection />
      <ProblemSection />
      <HowItWorksSection />
      <ValueDifferentiationSection />
      <TestimonialSection />
      <DashboardSection />
      <MissionBlurb />
      <NicheExamplesSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
