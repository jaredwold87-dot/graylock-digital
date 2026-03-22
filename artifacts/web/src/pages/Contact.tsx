import { useState } from "react";
import { useLocation } from "wouter";
import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { Loader2 } from "lucide-react";

export default function Contact() {
  const [, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      // Formspree placeholder - replace with real URL
      await fetch("https://formspree.io/f/REPLACE", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      // Even if fetch fails (due to invalid placeholder), we simulate success for demo
      setLocation("/thank-you");
    } catch (err) {
      console.error(err);
      setLocation("/thank-you");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO title="Get a Free Evaluation | Graylock Digital" />
      
      <section className="bg-charcoal py-24 px-6 md:px-12 min-h-[80vh] flex items-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl font-display text-offwhite mb-4">
                Get Your Free Website Evaluation
              </h1>
              <p className="text-stone font-sans text-lg mb-10 leading-relaxed">
                Fill out the form below and Tim will personally review your current website before your call — so we can make the most of your time together.
              </p>

              <form onSubmit={handleSubmit} className="bg-navy p-8 md:p-10 rounded-2xl border border-gunmetal shadow-2xl flex flex-col gap-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-offwhite font-sans text-sm font-semibold">First Name *</label>
                    <input 
                      required
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      placeholder="Jane"
                      className="bg-charcoal border border-gunmetal rounded p-3 text-offwhite font-sans focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all placeholder:text-stone/50"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="businessName" className="text-offwhite font-sans text-sm font-semibold">Business Name *</label>
                    <input 
                      required
                      type="text" 
                      id="businessName" 
                      name="businessName" 
                      placeholder="Jane's Consulting"
                      className="bg-charcoal border border-gunmetal rounded p-3 text-offwhite font-sans focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all placeholder:text-stone/50"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="businessType" className="text-offwhite font-sans text-sm font-semibold">Business Type *</label>
                  <select 
                    required
                    id="businessType" 
                    name="businessType" 
                    className="bg-charcoal border border-gunmetal rounded p-3 text-offwhite font-sans focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all appearance-none"
                  >
                    <option value="" disabled selected>Select your industry...</option>
                    <option value="Accountant">Accountant / CPA</option>
                    <option value="Therapist">Therapist / Counselor</option>
                    <option value="Contractor">Contractor / Trades</option>
                    <option value="Consultant">Consultant</option>
                    <option value="Attorney">Attorney / Law Firm</option>
                    <option value="Insurance">Insurance Agent</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="websiteUrl" className="text-offwhite font-sans text-sm font-semibold">Current Website URL *</label>
                    <input 
                      required
                      type="url" 
                      id="websiteUrl" 
                      name="websiteUrl" 
                      placeholder="https://www.yoursite.com"
                      className="bg-charcoal border border-gunmetal rounded p-3 text-offwhite font-sans focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all placeholder:text-stone/50"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-offwhite font-sans text-sm font-semibold">Email Address *</label>
                    <input 
                      required
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="jane@yoursite.com"
                      className="bg-charcoal border border-gunmetal rounded p-3 text-offwhite font-sans focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all placeholder:text-stone/50"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-offwhite font-sans text-sm font-semibold">Phone Number <span className="text-stone font-normal">(Optional)</span></label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="(555) 123-4567"
                    className="bg-charcoal border border-gunmetal rounded p-3 text-offwhite font-sans focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all placeholder:text-stone/50"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="frustration" className="text-offwhite font-sans text-sm font-semibold">What's your biggest frustration with your current website? <span className="text-stone font-normal">(Optional)</span></label>
                  <textarea 
                    id="frustration" 
                    name="frustration" 
                    rows={4}
                    placeholder="It's impossible to update, looks terrible on mobile, etc..."
                    className="bg-charcoal border border-gunmetal rounded p-3 text-offwhite font-sans focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-all placeholder:text-stone/50 resize-y"
                  ></textarea>
                </div>

                <CTAButton type="submit" variant="primary" className="w-full mt-2">
                  {isSubmitting ? <Loader2 className="animate-spin" /> : "Request My Free Evaluation"}
                </CTAButton>

              </form>
            </ScrollReveal>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.2} className="bg-navy rounded-2xl p-8 md:p-10 border border-gunmetal sticky top-32">
              <h3 className="font-display text-offwhite text-3xl mb-8 border-b border-gunmetal pb-4">What to Expect</h3>
              
              <div className="flex flex-col gap-6">
                {[
                  "Submit this form",
                  "Tim reviews your website before the call",
                  "We schedule a free 20-minute call",
                  "You get an honest evaluation — no strings attached"
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="font-display text-orange text-2xl leading-none mt-0.5">{i + 1}.</div>
                    <p className="text-offwhite font-sans font-semibold text-lg">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-gunmetal">
                <p className="text-stone font-sans italic text-sm text-center">
                  "No credit card. No commitment. Just a real conversation about your website."
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>
    </>
  );
}
