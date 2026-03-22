import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function BeforeAfterMockup() {
  return (
    <ScrollReveal delay={0.2} className="relative w-full max-w-2xl mx-auto mt-12 lg:mt-0 flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-center">
      
      {/* BEFORE MOCKUP */}
      <div className="relative z-10 w-full md:w-64 h-80 bg-gray-200 rounded-t-lg md:rounded-lg overflow-hidden border border-gray-300 md:-mr-8 md:mt-12 opacity-90 grayscale shadow-xl">
        {/* Browser Chrome */}
        <div className="bg-gray-300 p-2 flex gap-1.5 items-center border-b border-gray-400">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
        </div>
        {/* Website Content */}
        <div className="p-4 flex flex-col gap-4">
          <div className="w-1/2 h-4 bg-gray-400 mb-2"></div>
          <div className="w-full h-2 bg-gray-300"></div>
          <div className="w-full h-2 bg-gray-300"></div>
          <div className="w-3/4 h-2 bg-gray-300"></div>
          <div className="w-full h-24 bg-gray-300 mt-4 flex items-center justify-center">
            <span className="text-gray-500 text-xs">Broken Image</span>
          </div>
          <div className="w-24 h-6 bg-gray-400 mt-2 mx-auto"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-charcoal/80 text-white px-4 py-2 font-display text-xl tracking-wider rounded backdrop-blur-sm shadow-2xl">
          BEFORE
        </div>
      </div>

      {/* AFTER MOCKUP */}
      <div className="relative z-20 w-full md:w-80 h-96 bg-navy rounded-lg overflow-hidden border border-orange shadow-[0_0_30px_rgba(232,99,26,0.25)]">
        {/* Browser Chrome */}
        <div className="bg-gunmetal p-2 flex gap-1.5 items-center border-b border-gray-800">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
          <div className="mx-auto w-3/4 h-3 bg-charcoal rounded-sm"></div>
        </div>
        {/* Website Content */}
        <div className="flex flex-col h-full">
          {/* Nav */}
          <div className="p-3 border-b border-gunmetal flex justify-between items-center">
            <div className="w-20 h-3 bg-offwhite rounded"></div>
            <div className="flex gap-2">
              <div className="w-6 h-2 bg-stone rounded"></div>
              <div className="w-6 h-2 bg-stone rounded"></div>
              <div className="w-12 h-4 bg-orange rounded shadow-[0_0_8px_rgba(232,99,26,0.5)]"></div>
            </div>
          </div>
          {/* Hero */}
          <div className="p-5 flex flex-col gap-3 relative overflow-hidden">
            <div className="w-3/4 h-5 bg-offwhite rounded"></div>
            <div className="w-1/2 h-5 bg-offwhite rounded"></div>
            <div className="w-full h-2 bg-stone rounded mt-2"></div>
            <div className="w-5/6 h-2 bg-stone rounded"></div>
            
            <div className="w-24 h-6 bg-orange rounded mt-4 shadow-[0_0_10px_rgba(232,99,26,0.3)]"></div>
            
            <div className="mt-6 flex gap-3">
              <div className="w-1/3 h-16 bg-gunmetal rounded border border-gray-700"></div>
              <div className="w-1/3 h-16 bg-gunmetal rounded border border-gray-700"></div>
              <div className="w-1/3 h-16 bg-gunmetal rounded border border-gray-700"></div>
            </div>
            
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-orange/20 rounded-full blur-2xl"></div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 bg-orange text-white px-3 py-1 font-display text-sm tracking-widest rounded shadow-xl">
          AFTER
        </div>
      </div>

    </ScrollReveal>
  );
}
