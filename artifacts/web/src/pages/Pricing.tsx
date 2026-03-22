import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { Check, Minus } from "lucide-react";

export default function Pricing() {
  const featureRows = [
    { name: "Pages Included", starter: "Up to 3", standard: "Up to 5", growth: "Up to 10" },
    { name: "Mobile-First Design", starter: true, standard: true, growth: true },
    { name: "Secure Hosting & SSL", starter: true, standard: true, growth: true },
    { name: "Monthly Change Requests", starter: "1 / month", standard: "3 / month", growth: "Unlimited" },
    { name: "Lead Capture Forms", starter: "Basic", standard: "Advanced", growth: "Custom Integrated" },
    { name: "SEO Optimization", starter: "Basic Setup", standard: "Local SEO Focus", growth: "Advanced + Schema" },
    { name: "Google Business Profile", starter: false, standard: true, growth: true },
    { name: "Daily Backups", starter: false, standard: false, growth: true },
    { name: "Priority Support (24hr)", starter: false, standard: false, growth: true },
    { name: "Quarterly Strategy Call", starter: false, standard: false, growth: true },
  ];

  return (
    <>
      <SEO title="Pricing | Graylock Digital" />
      
      <section className="bg-offwhite pt-24 pb-12 px-6 md:px-12 text-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-display mb-6">Simple, Honest Pricing</h1>
            <p className="text-xl font-sans text-gray-600">No hidden fees. No long-term contracts. Just a flat setup fee and a predictable monthly rate.</p>
          </ScrollReveal>
        </div>
      </section>

      <PricingSection />

      <section className="bg-navy py-24 px-6 md:px-12 border-t border-gunmetal hidden md:block">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-6">Compare Plan Features</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b border-gunmetal font-display text-xl text-stone w-1/4">Features</th>
                  <th className="p-4 border-b border-gunmetal font-display text-xl text-offwhite w-1/4 text-center">Starter</th>
                  <th className="p-4 border-b border-gunmetal font-display text-xl text-orange w-1/4 text-center">Standard</th>
                  <th className="p-4 border-b border-gunmetal font-display text-xl text-offwhite w-1/4 text-center">Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gunmetal">
                {featureRows.map((row, i) => (
                  <tr key={i} className="hover:bg-charcoal/50 transition-colors">
                    <td className="p-4 font-sans text-stone">{row.name}</td>
                    <td className="p-4 text-center">
                      {typeof row.starter === 'boolean' ? (row.starter ? <Check className="mx-auto text-offwhite" size={20}/> : <Minus className="mx-auto text-gunmetal" size={20}/>) : <span className="text-offwhite font-sans text-sm">{row.starter}</span>}
                    </td>
                    <td className="p-4 text-center bg-charcoal/20">
                      {typeof row.standard === 'boolean' ? (row.standard ? <Check className="mx-auto text-orange" size={20}/> : <Minus className="mx-auto text-gunmetal" size={20}/>) : <span className="text-orange font-sans font-semibold text-sm">{row.standard}</span>}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.growth === 'boolean' ? (row.growth ? <Check className="mx-auto text-offwhite" size={20}/> : <Minus className="mx-auto text-gunmetal" size={20}/>) : <span className="text-offwhite font-sans text-sm">{row.growth}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollReveal>
        </div>
      </section>

      <FAQSection />
      <FinalCTASection />
    </>
  );
}
