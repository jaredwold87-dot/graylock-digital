import { useState } from "react";
import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { FAQS } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState<string | null>(FAQS[0].category);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (q: string) => {
    setOpenQuestion(openQuestion === q ? null : q);
  };

  return (
    <>
      <SEO title="Frequently Asked Questions | Graylock Digital" />
      
      <section className="bg-offwhite pt-24 pb-12 px-6 md:px-12 text-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-display mb-6">Frequently Asked Questions</h1>
            <p className="text-xl font-sans text-gray-600">Everything you need to know about our service, pricing, and process.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-offwhite pb-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {FAQS.map((categoryData, catIdx) => (
            <ScrollReveal key={categoryData.category} delay={catIdx * 0.1} className="mb-12 last:mb-0">
              <h2 className="text-2xl md:text-3xl font-display text-charcoal mb-6 border-b border-gray-300 pb-2">
                {categoryData.category}
              </h2>
              <div className="space-y-4">
                {categoryData.questions.map((faq, qIdx) => {
                  const isOpen = openQuestion === faq.q;
                  return (
                    <div 
                      key={qIdx}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer shadow-sm hover:border-gray-300 transition-colors"
                      onClick={() => toggleQuestion(faq.q)}
                    >
                      <div className="p-6 flex items-start justify-between gap-4">
                        <h3 className="font-sans font-semibold text-charcoal text-lg mt-0.5">{faq.q}</h3>
                        <ChevronDown className={cn("text-orange transition-transform duration-300 flex-shrink-0 mt-1", isOpen ? "rotate-180" : "rotate-0")} />
                      </div>
                      <div 
                        className={cn(
                          "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                          isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                        )}
                      >
                        <p className="text-gray-600 font-sans leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <FinalCTASection />
    </>
  );
}
