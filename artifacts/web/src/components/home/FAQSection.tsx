import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

const homepageFaqs = [
  {
    q: "Is the website review really free?",
    a: "Yes, 100%. We evaluate your current website, walk you through what's working and what isn't, and give you clear recommendations — all at no cost. There's no hidden fee and no obligation to buy anything."
  },
  {
    q: "Is the homepage demo actually custom to my business?",
    a: "Absolutely. We don't send you a generic template. We research your business, your market, and your competitors, then design a homepage concept that's specific to you — your brand, your services, your audience."
  },
  {
    q: "Am I obligated to move forward after the call?",
    a: "Not at all. The review and demo are genuinely free. If you love what you see and want to move forward, great. If not, you keep the evaluation insights and there's zero pressure. We'd rather earn your trust than push a sale."
  },
  {
    q: "How long does the call take?",
    a: "About 20 minutes. We'll learn about your business, review your current site together, and walk you through our findings. After the call, we build your custom homepage demo and send it over within a few days."
  },
  {
    q: "What types of businesses do you work with?",
    a: "We specialize in small service businesses — accountants, therapists, contractors, consultants, dentists, lawyers, and other local professional services. If you rely on trust, reputation, and local visibility to grow, we're built for you."
  },
  {
    q: "What happens after the call?",
    a: "After our call, we build your custom homepage demo and send it over. You'll see exactly what your new website could look like. If you want to move forward, we build the full site in 3–5 days. If not, you keep the insights — no hard feelings."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-offwhite py-24 px-6 md:px-12 border-t border-gray-200">
      <div className="max-w-3xl mx-auto">
        
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-4">
            Questions About the Free Review
          </h2>
        </ScrollReveal>

        <div className="space-y-4 mb-10">
          {homepageFaqs.map((faq, i) => (
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
