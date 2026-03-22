import { useState } from "react";
import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { cn } from "@/lib/utils";

export default function Work() {
  const [activeTab, setActiveTab] = useState("All");
  
  const tabs = ["All", "Accountants", "Therapists", "Contractors", "Consultants"];
  
  const works = [
    { type: "Accountants", name: "Peak CPA Group", goal: "Increase tax season leads", features: ["Secure Client Portal", "Lead Capture", "Local SEO"], color: "bg-blue-900" },
    { type: "Therapists", name: "Mindful Care", goal: "Attract local private pay clients", features: ["Online Booking", "Blog", "Mobile Optimized"], color: "bg-teal-900" },
    { type: "Contractors", name: "Solid Built Construction", goal: "Showcase high-end remodels", features: ["Project Gallery", "Quote Form", "Trust Badges"], color: "bg-amber-900" },
    { type: "Accountants", name: "Vanguard Tax", goal: "Attract corporate accounts", features: ["Professional Design", "Service Pages", "Fast Load"], color: "bg-slate-900" },
    { type: "Therapists", name: "Healing Space", goal: "Build trust with families", features: ["Warm Design", "Staff Bios", "Insurance Info"], color: "bg-rose-900" },
    { type: "Contractors", name: "IronClad Roofing", goal: "Dominate local search", features: ["Emergency Call CTA", "Review Feed", "Schema Markup"], color: "bg-zinc-900" },
    { type: "Consultants", name: "Synergy Management", goal: "Book discovery calls", features: ["Calendar Integration", "Case Studies", "Lead Magnet"], color: "bg-indigo-900" },
    { type: "Consultants", name: "Apex HR Solutions", goal: "Establish authority", features: ["Clean Typography", "Resource Library", "Newsletter Sub"], color: "bg-violet-900" },
    { type: "Accountants", name: "Clear Books Bookkeeping", goal: "Target local retailers", features: ["Pricing Tables", "FAQ Section", "Contact Form"], color: "bg-sky-900" }
  ];

  const filteredWorks = activeTab === "All" ? works : works.filter(w => w.type === activeTab);

  return (
    <>
      <SEO title="Our Work | Graylock Digital" />
      
      <section className="bg-charcoal pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-display text-offwhite mb-6">Our Work</h1>
            <p className="text-xl font-sans text-stone mb-12">Browse examples of high-converting sites we've built for service professionals.</p>
            
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-6 py-2 rounded-full font-sans text-sm md:text-base font-semibold transition-all duration-300",
                    activeTab === tab 
                      ? "bg-orange text-white shadow-lg shadow-orange/20" 
                      : "bg-gunmetal text-stone hover:text-offwhite hover:bg-gunmetal/80 border border-transparent hover:border-gunmetal"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-navy py-16 px-6 md:px-12 border-t border-gunmetal min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map((work, i) => (
              <ScrollReveal key={work.name + i} delay={(i % 3) * 0.1} className="group flex flex-col h-full">
                {/* Fake browser window */}
                <div className="bg-charcoal rounded-t-xl border border-gunmetal border-b-0 p-3 flex gap-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-gunmetal"></div>
                  <div className="w-3 h-3 rounded-full bg-gunmetal"></div>
                  <div className="w-3 h-3 rounded-full bg-gunmetal"></div>
                </div>
                {/* Fake visual */}
                <div className={cn("h-48 border border-gunmetal border-t-0 border-b-0 relative overflow-hidden flex flex-col items-center justify-center transition-all duration-500", work.color)}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/80"></div>
                  <h3 className="relative z-10 text-offwhite font-display text-3xl text-center px-4 leading-tight">{work.name}</h3>
                </div>
                {/* Details */}
                <div className="bg-charcoal rounded-b-xl border border-gunmetal border-t-0 p-6 flex-grow group-hover:border-orange transition-colors duration-300">
                  <span className="text-orange text-xs font-bold uppercase tracking-widest mb-2 block">
                    {work.type}
                  </span>
                  <p className="text-stone font-sans text-sm mb-4">
                    <strong className="text-offwhite">Goal:</strong> {work.goal}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {work.features.map(f => (
                      <span key={f} className="text-xs font-sans bg-gunmetal text-stone px-2 py-1 rounded">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  );
}
