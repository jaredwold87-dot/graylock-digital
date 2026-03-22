import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

export function NicheExamplesSection() {
  const [activeTab, setActiveTab] = useState("All");
  
  const tabs = ["All", "Accountants", "Therapists", "Contractors"];
  
  const niches = [
    { type: "Accountants", name: "Peak CPA Group", color: "bg-blue-900" },
    { type: "Therapists", name: "Mindful Care", color: "bg-teal-900" },
    { type: "Contractors", name: "Solid Built Construction", color: "bg-amber-900" },
    { type: "Accountants", name: "Vanguard Tax", color: "bg-slate-900" },
    { type: "Therapists", name: "Healing Space", color: "bg-rose-900" },
    { type: "Contractors", name: "IronClad Roofing", color: "bg-zinc-900" }
  ];

  const filteredNiches = activeTab === "All" ? niches : niches.filter(n => n.type === activeTab);

  return (
    <section className="bg-navy py-24 px-6 md:px-12 border-y border-gunmetal">
      <div className="max-w-7xl mx-auto">
        
        <ScrollReveal className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-8">
            Built for Businesses Like Yours
          </h2>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-6 py-2 rounded-full font-sans text-sm md:text-base font-semibold transition-all duration-300",
                  activeTab === tab 
                    ? "bg-orange text-white shadow-lg shadow-orange/20" 
                    : "bg-gunmetal text-stone hover:text-offwhite hover:bg-gunmetal/80"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNiches.map((niche, i) => (
            <ScrollReveal key={i + niche.name} delay={0.1} className="group cursor-pointer">
              {/* Fake browser window */}
              <div className="bg-charcoal rounded-t-lg border border-gunmetal border-b-0 p-2 flex gap-1.5 items-center">
                <div className="w-2 h-2 rounded-full bg-gunmetal"></div>
                <div className="w-2 h-2 rounded-full bg-gunmetal"></div>
                <div className="w-2 h-2 rounded-full bg-gunmetal"></div>
              </div>
              {/* Fake content */}
              <div className={cn("h-48 border border-gunmetal border-t-0 p-4 relative overflow-hidden flex flex-col items-center justify-center transition-all duration-500 group-hover:border-orange", niche.color)}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/80"></div>
                <h3 className="relative z-10 text-offwhite font-display text-2xl mb-2">{niche.name}</h3>
                <span className="relative z-10 text-orange text-sm font-bold uppercase tracking-widest bg-charcoal/50 px-3 py-1 rounded backdrop-blur-sm">
                  {niche.type}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
