import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

type NicheLayout = {
  bg: string;
  navBg: string;
  accent: string;
  heroBg: string;
  heroText: string;
  btnBg: string;
  cardBg: string;
  variant: number;
};

const layouts: Record<string, NicheLayout[]> = {
  Accountants: [
    { bg: "#f8f9fa", navBg: "#1a2744", accent: "#2563eb", heroBg: "#1a2744", heroText: "#ffffff", btnBg: "#e8631a", cardBg: "#e8edf5", variant: 1 },
    { bg: "#f1f5f9", navBg: "#0f172a", accent: "#0ea5e9", heroBg: "#0f172a", heroText: "#f1f5f9", btnBg: "#f59e0b", cardBg: "#e2e8f0", variant: 2 },
    { bg: "#fafaf9", navBg: "#1c1917", accent: "#0284c7", heroBg: "#1c1917", heroText: "#fafaf9", btnBg: "#e8631a", cardBg: "#e7e5e4", variant: 3 },
  ],
  Therapists: [
    { bg: "#faf5f0", navBg: "#faf5f0", accent: "#8b6f4e", heroBg: "#f0ebe3", heroText: "#3d3228", btnBg: "#e8631a", cardBg: "#f0ebe3", variant: 1 },
    { bg: "#f5f0eb", navBg: "#3d3228", accent: "#a47551", heroBg: "#3d3228", heroText: "#f5f0eb", btnBg: "#c96a3c", cardBg: "#ebe3d9", variant: 2 },
    { bg: "#faf7f5", navBg: "#faf7f5", accent: "#7c6350", heroBg: "#e8e0d8", heroText: "#2d241e", btnBg: "#d4763a", cardBg: "#ede5dd", variant: 3 },
  ],
  Contractors: [
    { bg: "#1a1a1a", navBg: "#111111", accent: "#f59e0b", heroBg: "#1a1a1a", heroText: "#ffffff", btnBg: "#f59e0b", cardBg: "#2a2a2a", variant: 1 },
    { bg: "#18181b", navBg: "#0f0f10", accent: "#e8631a", heroBg: "#18181b", heroText: "#fafafa", btnBg: "#e8631a", cardBg: "#27272a", variant: 2 },
    { bg: "#1c1917", navBg: "#0c0a09", accent: "#ea580c", heroBg: "#1c1917", heroText: "#fafaf9", btnBg: "#ea580c", cardBg: "#292524", variant: 3 },
  ],
  Consultants: [
    { bg: "#ffffff", navBg: "#ffffff", accent: "#4f46e5", heroBg: "#eef2ff", heroText: "#1e1b4b", btnBg: "#4f46e5", cardBg: "#f5f3ff", variant: 1 },
    { bg: "#fafafa", navBg: "#18181b", accent: "#7c3aed", heroBg: "#18181b", heroText: "#fafafa", btnBg: "#7c3aed", cardBg: "#f4f4f5", variant: 2 },
    { bg: "#f8fafc", navBg: "#f8fafc", accent: "#6366f1", heroBg: "#1e1b4b", heroText: "#e0e7ff", btnBg: "#e8631a", cardBg: "#eef2ff", variant: 3 },
  ],
  Dentists: [
    { bg: "#f0fdfa", navBg: "#f0fdfa", accent: "#0d9488", heroBg: "#f0fdfa", heroText: "#134e4a", btnBg: "#0d9488", cardBg: "#ccfbf1", variant: 1 },
    { bg: "#ffffff", navBg: "#164e63", accent: "#06b6d4", heroBg: "#164e63", heroText: "#ffffff", btnBg: "#e8631a", cardBg: "#ecfeff", variant: 2 },
    { bg: "#f8fffe", navBg: "#f8fffe", accent: "#059669", heroBg: "#d1fae5", heroText: "#064e3b", btnBg: "#059669", cardBg: "#ecfdf5", variant: 3 },
  ],
  Lawyers: [
    { bg: "#fafaf9", navBg: "#1c1917", accent: "#92400e", heroBg: "#1c1917", heroText: "#fafaf9", btnBg: "#b45309", cardBg: "#f5f5f4", variant: 1 },
    { bg: "#f8f8f8", navBg: "#171717", accent: "#dc2626", heroBg: "#171717", heroText: "#f5f5f5", btnBg: "#dc2626", cardBg: "#f0f0f0", variant: 2 },
    { bg: "#fafafa", navBg: "#fafafa", accent: "#1e3a5f", heroBg: "#1e3a5f", heroText: "#ffffff", btnBg: "#e8631a", cardBg: "#f1f5f9", variant: 3 },
  ],
};

function MiniWebsite({ layout, name }: { layout: NicheLayout; name: string }) {
  const isDarkHero = layout.heroText === "#ffffff" || layout.heroText === "#fafafa" || layout.heroText === "#f1f5f9" || layout.heroText === "#fafaf9" || layout.heroText === "#f5f0eb" || layout.heroText === "#f5f5f5" || layout.heroText === "#e0e7ff";
  const isDarkNav = layout.navBg.startsWith("#1") || layout.navBg.startsWith("#0");

  if (layout.variant === 1) {
    return (
      <div className="w-full h-full flex flex-col" style={{ background: layout.bg }}>
        <div className="flex items-center justify-between px-2 py-1" style={{ background: layout.navBg }}>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: layout.accent }}></div>
            <div className="h-1 rounded-sm" style={{ width: 20, background: isDarkNav ? '#ffffff90' : '#00000030' }}></div>
          </div>
          <div className="flex gap-1.5">
            <div className="w-4 h-0.5 rounded" style={{ background: isDarkNav ? '#ffffff50' : '#00000025' }}></div>
            <div className="w-4 h-0.5 rounded" style={{ background: isDarkNav ? '#ffffff50' : '#00000025' }}></div>
            <div className="w-4 h-0.5 rounded" style={{ background: isDarkNav ? '#ffffff50' : '#00000025' }}></div>
            <div className="px-1.5 py-0.5 rounded-sm" style={{ background: layout.btnBg }}>
              <div className="w-3 h-0.5 rounded bg-white"></div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex items-center px-3 py-2" style={{ background: layout.heroBg }}>
            <div className="flex-1">
              <div className="h-1.5 rounded mb-1" style={{ width: '80%', background: layout.heroText + '90' }}></div>
              <div className="h-1.5 rounded mb-1.5" style={{ width: '60%', background: layout.heroText + '90' }}></div>
              <div className="h-0.5 rounded mb-0.5" style={{ width: '90%', background: layout.heroText + '30' }}></div>
              <div className="h-0.5 rounded mb-1.5" style={{ width: '70%', background: layout.heroText + '30' }}></div>
              <div className="h-2 rounded-sm" style={{ width: 30, background: layout.btnBg }}></div>
            </div>
            <div className="w-10 h-8 rounded ml-2" style={{ background: layout.cardBg + '80' }}></div>
          </div>
          <div className="flex gap-1.5 px-3 py-2" style={{ background: layout.bg }}>
            <div className="flex-1 rounded p-1" style={{ background: layout.cardBg }}>
              <div className="w-2 h-2 rounded-full mb-0.5 mx-auto" style={{ background: layout.accent + '30' }}></div>
              <div className="h-0.5 rounded mx-auto mb-0.5" style={{ width: '80%', background: '#00000015' }}></div>
              <div className="h-0.5 rounded mx-auto" style={{ width: '60%', background: '#00000010' }}></div>
            </div>
            <div className="flex-1 rounded p-1" style={{ background: layout.cardBg }}>
              <div className="w-2 h-2 rounded-full mb-0.5 mx-auto" style={{ background: layout.accent + '30' }}></div>
              <div className="h-0.5 rounded mx-auto mb-0.5" style={{ width: '80%', background: '#00000015' }}></div>
              <div className="h-0.5 rounded mx-auto" style={{ width: '60%', background: '#00000010' }}></div>
            </div>
            <div className="flex-1 rounded p-1" style={{ background: layout.cardBg }}>
              <div className="w-2 h-2 rounded-full mb-0.5 mx-auto" style={{ background: layout.accent + '30' }}></div>
              <div className="h-0.5 rounded mx-auto mb-0.5" style={{ width: '80%', background: '#00000015' }}></div>
              <div className="h-0.5 rounded mx-auto" style={{ width: '60%', background: '#00000010' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (layout.variant === 2) {
    return (
      <div className="w-full h-full flex flex-col" style={{ background: layout.bg }}>
        <div className="flex items-center justify-between px-2 py-1" style={{ background: layout.navBg }}>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-sm" style={{ background: layout.accent }}></div>
            <div className="h-1 rounded-sm" style={{ width: 18, background: isDarkNav ? '#ffffff80' : '#00000025' }}></div>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-0.5 rounded" style={{ background: isDarkNav ? '#ffffff40' : '#00000020' }}></div>
            <div className="w-3 h-0.5 rounded" style={{ background: isDarkNav ? '#ffffff40' : '#00000020' }}></div>
            <div className="w-3 h-0.5 rounded" style={{ background: isDarkNav ? '#ffffff40' : '#00000020' }}></div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-1 px-3 py-2 text-center flex flex-col items-center justify-center" style={{ background: layout.heroBg }}>
            <div className="h-1.5 rounded mb-1 mx-auto" style={{ width: '70%', background: layout.heroText + '90' }}></div>
            <div className="h-1.5 rounded mb-1.5 mx-auto" style={{ width: '50%', background: layout.heroText + '90' }}></div>
            <div className="h-0.5 rounded mb-0.5 mx-auto" style={{ width: '80%', background: layout.heroText + '25' }}></div>
            <div className="h-0.5 rounded mb-2 mx-auto" style={{ width: '60%', background: layout.heroText + '25' }}></div>
            <div className="flex gap-1 justify-center">
              <div className="h-2 rounded-sm px-1" style={{ width: 28, background: layout.btnBg }}></div>
              <div className="h-2 rounded-sm px-1 border" style={{ width: 28, borderColor: isDarkHero ? '#ffffff30' : '#00000020' }}></div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-1 px-2 py-1.5" style={{ background: layout.bg }}>
            {[...Array(4)].map((_, j) => (
              <div key={j} className="rounded" style={{ background: layout.cardBg }}>
                <div className="h-3 rounded-t" style={{ background: layout.accent + '20' }}></div>
                <div className="p-0.5">
                  <div className="h-0.5 rounded mb-0.5" style={{ width: '80%', background: '#00000012' }}></div>
                  <div className="h-0.5 rounded" style={{ width: '50%', background: '#00000008' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col" style={{ background: layout.bg }}>
      <div className="flex items-center justify-between px-2 py-1" style={{ background: layout.navBg }}>
        <div className="flex items-center gap-1">
          <div className="w-3 h-1 rounded-sm" style={{ background: isDarkNav ? '#ffffff70' : '#00000030' }}></div>
        </div>
        <div className="flex gap-1.5 items-center">
          <div className="w-3 h-0.5 rounded" style={{ background: isDarkNav ? '#ffffff40' : '#00000020' }}></div>
          <div className="w-3 h-0.5 rounded" style={{ background: isDarkNav ? '#ffffff40' : '#00000020' }}></div>
          <div className="w-3 h-0.5 rounded" style={{ background: isDarkNav ? '#ffffff40' : '#00000020' }}></div>
          <div className="px-1 py-0.5 rounded-sm" style={{ background: layout.btnBg }}>
            <div className="w-2.5 h-0.5 rounded bg-white"></div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex" style={{ background: layout.heroBg }}>
          <div className="flex-1 px-3 py-2 flex flex-col justify-center">
            <div className="h-1 rounded mb-0.5" style={{ width: '90%', background: layout.heroText + '85' }}></div>
            <div className="h-1 rounded mb-1.5" style={{ width: '70%', background: layout.heroText + '85' }}></div>
            <div className="h-0.5 rounded mb-0.5" style={{ width: '95%', background: layout.heroText + '25' }}></div>
            <div className="h-0.5 rounded mb-1.5" style={{ width: '75%', background: layout.heroText + '25' }}></div>
            <div className="h-2 rounded-sm" style={{ width: 26, background: layout.btnBg }}></div>
          </div>
          <div className="w-14 flex items-center justify-center pr-2">
            <div className="w-10 h-7 rounded" style={{ background: isDarkHero ? '#ffffff15' : '#00000008', border: `1px solid ${isDarkHero ? '#ffffff10' : '#00000008'}` }}></div>
          </div>
        </div>
        <div className="px-2 py-1.5" style={{ background: layout.bg }}>
          <div className="h-1 rounded mx-auto mb-1" style={{ width: '50%', background: '#00000018' }}></div>
          <div className="flex gap-1">
            <div className="flex-1 h-4 rounded" style={{ background: layout.cardBg }}></div>
            <div className="flex-1 h-4 rounded" style={{ background: layout.cardBg }}></div>
            <div className="flex-1 h-4 rounded" style={{ background: layout.cardBg }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

type NicheItem = {
  type: string;
  name: string;
  tagline: string;
  layoutIdx: number;
};

const niches: NicheItem[] = [
  { type: "Accountants", name: "Peak CPA Group", tagline: "Tax season lead generation", layoutIdx: 0 },
  { type: "Therapists", name: "Mindful Care", tagline: "Private pay client attraction", layoutIdx: 0 },
  { type: "Contractors", name: "Solid Built Construction", tagline: "High-end remodel showcases", layoutIdx: 0 },
  { type: "Consultants", name: "Synergy Management", tagline: "Discovery call bookings", layoutIdx: 0 },
  { type: "Dentists", name: "Bright Smile Family Dental", tagline: "New patient acquisition", layoutIdx: 0 },
  { type: "Lawyers", name: "Gavel & Stone Law", tagline: "Case inquiry generation", layoutIdx: 0 },
  { type: "Accountants", name: "Vanguard Tax", tagline: "Corporate account outreach", layoutIdx: 1 },
  { type: "Therapists", name: "Healing Space", tagline: "Family trust building", layoutIdx: 1 },
  { type: "Contractors", name: "IronClad Roofing", tagline: "Local search dominance", layoutIdx: 1 },
  { type: "Consultants", name: "Apex HR Solutions", tagline: "Authority positioning", layoutIdx: 1 },
  { type: "Dentists", name: "Summit Dental Care", tagline: "Appointment scheduling", layoutIdx: 1 },
  { type: "Lawyers", name: "Redwood Family Law", tagline: "Consultation requests", layoutIdx: 1 },
  { type: "Accountants", name: "Clear Books Bookkeeping", tagline: "Local retailer targeting", layoutIdx: 2 },
  { type: "Therapists", name: "New Chapter Counseling", tagline: "Online booking integration", layoutIdx: 2 },
  { type: "Contractors", name: "Precision Plumbing Co.", tagline: "Emergency call conversions", layoutIdx: 2 },
  { type: "Consultants", name: "Meridian Strategy Group", tagline: "Lead magnet funnels", layoutIdx: 2 },
  { type: "Dentists", name: "Lakewood Orthodontics", tagline: "Treatment plan inquiries", layoutIdx: 2 },
  { type: "Lawyers", name: "Pinnacle Injury Attorneys", tagline: "Free consultation signups", layoutIdx: 2 },
];

export function NicheExamplesSection() {
  const [activeTab, setActiveTab] = useState("Accountants");

  const tabs = ["Accountants", "Therapists", "Contractors", "Consultants", "Dentists", "Lawyers"];

  const filteredNiches = niches.filter(n => n.type === activeTab).slice(0, 3);

  return (
    <section id="niches" className="bg-navy py-24 px-6 md:px-12 border-y border-gunmetal">
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
          {filteredNiches.map((niche, i) => {
            const layout = layouts[niche.type][niche.layoutIdx];
            return (
              <ScrollReveal key={niche.name} delay={(i % 6) * 0.08} className="group cursor-pointer">
                <div className="bg-charcoal rounded-t-lg border border-gunmetal border-b-0 p-2 flex gap-1.5 items-center">
                  <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
                  <div className="ml-2 flex-1 h-3 bg-gunmetal/50 rounded-sm max-w-[60%] flex items-center px-1">
                    <div className="w-1 h-1 rounded-full bg-stone/30 mr-1"></div>
                    <div className="h-0.5 flex-1 bg-stone/20 rounded"></div>
                  </div>
                </div>
                <div className="h-48 border border-gunmetal border-t-0 relative overflow-hidden transition-all duration-500 group-hover:border-orange">
                  <MiniWebsite layout={layout} name={niche.name} />
                </div>
                <div className="bg-charcoal rounded-b-lg border border-gunmetal border-t-0 p-3 transition-all duration-500 group-hover:border-orange">
                  <h3 className="text-offwhite font-display text-lg leading-tight mb-0.5">{niche.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-stone/70 font-sans text-xs">{niche.tagline}</p>
                    <span className="text-orange text-[10px] font-bold uppercase tracking-widest">{niche.type}</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
