import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

export function NicheExamplesSection() {
  const [activeTab, setActiveTab] = useState("All");
  
  const tabs = ["All", "Accountants", "Therapists", "Contractors", "Consultants", "Dentists", "Lawyers"];
  
  const niches = [
    { type: "Accountants", name: "Peak CPA Group", tagline: "Tax season lead generation", color: "bg-blue-900" },
    { type: "Therapists", name: "Mindful Care", tagline: "Private pay client attraction", color: "bg-teal-900" },
    { type: "Contractors", name: "Solid Built Construction", tagline: "High-end remodel showcases", color: "bg-amber-900" },
    { type: "Consultants", name: "Synergy Management", tagline: "Discovery call bookings", color: "bg-indigo-900" },
    { type: "Dentists", name: "Bright Smile Family Dental", tagline: "New patient acquisition", color: "bg-cyan-900" },
    { type: "Lawyers", name: "Gavel & Stone Law", tagline: "Case inquiry generation", color: "bg-slate-800" },
    { type: "Accountants", name: "Vanguard Tax", tagline: "Corporate account outreach", color: "bg-slate-900" },
    { type: "Therapists", name: "Healing Space", tagline: "Family trust building", color: "bg-rose-900" },
    { type: "Contractors", name: "IronClad Roofing", tagline: "Local search dominance", color: "bg-zinc-900" },
    { type: "Consultants", name: "Apex HR Solutions", tagline: "Authority positioning", color: "bg-violet-900" },
    { type: "Dentists", name: "Summit Dental Care", tagline: "Appointment scheduling", color: "bg-emerald-900" },
    { type: "Lawyers", name: "Redwood Family Law", tagline: "Consultation requests", color: "bg-stone-800" },
    { type: "Accountants", name: "Clear Books Bookkeeping", tagline: "Local retailer targeting", color: "bg-sky-900" },
    { type: "Therapists", name: "New Chapter Counseling", tagline: "Online booking integration", color: "bg-purple-900" },
    { type: "Contractors", name: "Precision Plumbing Co.", tagline: "Emergency call conversions", color: "bg-orange-900" },
    { type: "Consultants", name: "Meridian Strategy Group", tagline: "Lead magnet funnels", color: "bg-fuchsia-900" },
    { type: "Dentists", name: "Lakewood Orthodontics", tagline: "Treatment plan inquiries", color: "bg-teal-800" },
    { type: "Lawyers", name: "Pinnacle Injury Attorneys", tagline: "Free consultation signups", color: "bg-red-900" },
  ];

  const filteredNiches = activeTab === "All" ? niches : niches.filter(n => n.type === activeTab);

  return (
    <section className="bg-navy py-24 px-6 md:px-12 border-y border-gunmetal">
      <div className="max-w-7xl mx-auto">
        
        <ScrollReveal className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-display text-offwhite mb-4">
            Built for Businesses Like Yours
          </h2>
          <p className="text-stone font-sans text-lg mb-8 max-w-2xl mx-auto">
            We specialize in service businesses that rely on trust, reputation, and local visibility to grow.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-5 py-2 rounded-full font-sans text-sm font-semibold transition-all duration-300",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNiches.map((niche, i) => (
            <ScrollReveal key={niche.name} delay={(i % 6) * 0.08} className="group cursor-pointer">
              <div className="bg-charcoal rounded-t-lg border border-gunmetal border-b-0 p-2 flex gap-1.5 items-center">
                <div className="w-2 h-2 rounded-full bg-gunmetal"></div>
                <div className="w-2 h-2 rounded-full bg-gunmetal"></div>
                <div className="w-2 h-2 rounded-full bg-gunmetal"></div>
                <div className="ml-2 flex-1 h-3 bg-gunmetal/50 rounded-sm max-w-[60%]"></div>
              </div>
              <div className={cn("h-44 border border-gunmetal border-t-0 rounded-b-lg p-4 relative overflow-hidden flex flex-col items-center justify-center transition-all duration-500 group-hover:border-orange", niche.color)}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/80"></div>
                <h3 className="relative z-10 text-offwhite font-display text-2xl mb-1 text-center leading-tight">{niche.name}</h3>
                <p className="relative z-10 text-stone/80 font-sans text-xs mb-3">{niche.tagline}</p>
                <span className="relative z-10 text-orange text-xs font-bold uppercase tracking-widest bg-charcoal/60 px-3 py-1 rounded backdrop-blur-sm">
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
