import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FAQS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

export function FAQSection() {
  // Take first 4 from the general pool for the homepage
  const generalFaqs = FAQS.flatMap(cat => cat.questions).slice(0, 4);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-offwhite py-24 px-6 md:px-12 border-t border-gray-200">
      <div className="max-w-3xl mx-auto">
        
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-4">
            Common Questions
          </h2>
        </ScrollReveal>

        <div className="space-y-4 mb-10">
          {generalFaqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div 
                className="bg-white border border-charcoal rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="p-6 flex items-center justify-between gap-4">
                  <h3 className="font-sans font-semibold text-charcoal text-lg">{faq.q}</h3>
                  <ChevronDown className={cn("text-orange transition-transform duration-300 flex-shrink-0", openIndex === i ? "rotate-180" : "rotate-0")} />
                </div>
                <div 
                  className={cn(
                    "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                    openIndex === i ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-stone font-sans leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center">
          <Link href="/faq" className="text-orange font-bold font-sans hover:underline underline-offset-4 decoration-2">
            See all FAQs &rarr;
          </Link>
        </ScrollReveal>

      </div>
    </section>
  );
}
