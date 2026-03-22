import { ScrollReveal } from "@/components/ui/ScrollReveal";

function OldSite() {
  return (
    <div className="w-full h-full bg-[#f0f0f0] text-[3px] sm:text-[4px] md:text-[5px] overflow-hidden font-serif">
      <div className="bg-[#2c5f2d] text-white px-1 py-0.5 flex items-center justify-between">
        <span className="font-bold text-[4px] sm:text-[5px] md:text-[6px]">Harrison & Associates CPAs</span>
        <span className="text-[2.5px] sm:text-[3px] opacity-80">Call Us: (555) 234-5678</span>
      </div>

      <div className="bg-[#1a3a1a] text-white flex gap-1 px-1 py-0.5 text-[2.5px] sm:text-[3px]">
        <span className="bg-[#2c5f2d] px-1 py-0.5">Home</span>
        <span className="px-1 py-0.5">Services</span>
        <span className="px-1 py-0.5">About Us</span>
        <span className="px-1 py-0.5">Resources</span>
        <span className="px-1 py-0.5">Contact</span>
      </div>

      <div className="flex">
        <div className="flex-1 p-1">
          <div className="bg-[#2c5f2d] text-white p-1 mb-1 rounded-sm">
            <div className="font-bold text-[4px] sm:text-[5px] md:text-[6px] mb-0.5">Welcome to Harrison & Associates</div>
            <div className="text-[2.5px] sm:text-[3px] opacity-90">Your Trusted Accounting Partner Since 1998</div>
          </div>

          <div className="flex gap-1 mb-1">
            <div className="flex-1 bg-white border border-gray-300 p-0.5 rounded-sm shadow-sm">
              <div className="bg-[#ddd] h-3 sm:h-4 mb-0.5 flex items-center justify-center text-gray-500 text-[2px]">TAX PREP IMAGE</div>
              <div className="font-bold text-[3px] sm:text-[4px] text-[#2c5f2d]">Tax Preparation</div>
              <div className="text-[2px] sm:text-[2.5px] text-gray-600 leading-tight">Full service tax preparation for individuals and businesses...</div>
            </div>
            <div className="flex-1 bg-white border border-gray-300 p-0.5 rounded-sm shadow-sm">
              <div className="bg-[#ddd] h-3 sm:h-4 mb-0.5 flex items-center justify-center text-gray-500 text-[2px]">BOOKKEEPING</div>
              <div className="font-bold text-[3px] sm:text-[4px] text-[#2c5f2d]">Bookkeeping</div>
              <div className="text-[2px] sm:text-[2.5px] text-gray-600 leading-tight">Monthly bookkeeping services to keep your records clean...</div>
            </div>
            <div className="flex-1 bg-white border border-gray-300 p-0.5 rounded-sm shadow-sm">
              <div className="bg-[#ddd] h-3 sm:h-4 mb-0.5 flex items-center justify-center text-gray-500 text-[2px]">PAYROLL IMG</div>
              <div className="font-bold text-[3px] sm:text-[4px] text-[#2c5f2d]">Payroll Services</div>
              <div className="text-[2px] sm:text-[2.5px] text-gray-600 leading-tight">Let us handle your payroll so you can focus on growth...</div>
            </div>
          </div>

          <div className="bg-[#ffffcc] border border-[#e6e600] p-1 mb-1 text-center rounded-sm">
            <div className="font-bold text-[3.5px] sm:text-[4.5px] text-red-700 animate-pulse">TAX SEASON SPECIAL!</div>
            <div className="text-[2.5px] sm:text-[3px] text-gray-700">Call now for 15% off your first return!</div>
          </div>

          <div className="bg-white border border-gray-300 p-1 rounded-sm">
            <div className="font-bold text-[3.5px] sm:text-[4.5px] text-[#2c5f2d] mb-0.5">About Our Firm</div>
            <div className="text-[2px] sm:text-[2.5px] text-gray-600 leading-tight">
              Harrison & Associates has been serving the local community for over 25 years. Our team of experienced CPAs provides comprehensive accounting, tax preparation, and financial advisory services for individuals and small businesses. We pride ourselves on personal attention and accurate, timely service.
            </div>
          </div>
        </div>

        <div className="w-[22%] bg-[#e8e8e8] p-0.5 border-l border-gray-300 text-[2px] sm:text-[2.5px]">
          <div className="bg-white border border-gray-300 p-0.5 mb-0.5 rounded-sm">
            <div className="font-bold text-[2.5px] sm:text-[3px] text-[#2c5f2d] mb-0.5">Contact Us</div>
            <div className="text-gray-600 leading-tight">123 Main Street<br/>Suite 200<br/>Springfield, IL<br/>(555) 234-5678</div>
          </div>
          <div className="bg-white border border-gray-300 p-0.5 mb-0.5 rounded-sm">
            <div className="font-bold text-[2.5px] sm:text-[3px] text-[#2c5f2d] mb-0.5">Office Hours</div>
            <div className="text-gray-600 leading-tight">Mon-Fri: 8am-6pm<br/>Sat: 9am-1pm<br/>Sun: Closed</div>
          </div>
          <div className="bg-white border border-gray-300 p-0.5 rounded-sm">
            <div className="font-bold text-[2.5px] sm:text-[3px] text-[#2c5f2d] mb-0.5">Quick Links</div>
            <div className="text-blue-600 underline leading-loose">IRS Website<br/>State Tax Info<br/>Tax Calculator<br/>Our Blog</div>
          </div>
        </div>
      </div>

      <div className="bg-[#1a3a1a] text-white text-center py-0.5 text-[2px] sm:text-[2.5px]">
        <div>© 2024 Harrison & Associates CPAs | All Rights Reserved</div>
        <div className="text-[1.5px] sm:text-[2px] opacity-60 mt-0.5">Site visitors: 12,847</div>
      </div>
    </div>
  );
}

function NewSite() {
  return (
    <div className="w-full h-full bg-[#0c1220] text-[3px] sm:text-[4px] md:text-[5px] overflow-hidden font-sans">
      <div className="flex items-center justify-between px-1.5 py-1 border-b border-white/10">
        <span className="font-bold text-white text-[4px] sm:text-[5px] md:text-[6px] tracking-wide">HARRISON<span className="text-[#4a9eff]">CPA</span></span>
        <div className="flex gap-1.5 text-[2.5px] sm:text-[3px] text-gray-400">
          <span>Services</span>
          <span>About</span>
          <span>Resources</span>
          <span className="bg-[#4a9eff] text-white px-1 py-0.5 rounded-sm">Free Consultation</span>
        </div>
      </div>

      <div className="relative px-2 py-3 sm:py-4" style={{ background: 'linear-gradient(135deg, #0c1220 0%, #1a2744 50%, #0c1220 100%)' }}>
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 70% 50%, #4a9eff22, transparent 60%)' }} />
        <div className="relative z-10">
          <div className="text-[2.5px] sm:text-[3px] text-[#4a9eff] font-semibold uppercase tracking-widest mb-0.5">Trusted by 500+ businesses</div>
          <div className="font-bold text-white text-[6px] sm:text-[8px] md:text-[10px] leading-tight mb-1">Strategic Financial<br/>Partners for Growth</div>
          <div className="text-gray-400 text-[2.5px] sm:text-[3px] max-w-[60%] leading-relaxed mb-1.5">We help small businesses save money, stay compliant, and make smarter financial decisions — so you can focus on what you do best.</div>
          <div className="flex gap-1">
            <div className="bg-[#4a9eff] text-white px-1.5 py-0.5 rounded-sm text-[2.5px] sm:text-[3px] font-semibold">Book a Free Review</div>
            <div className="border border-white/30 text-white px-1.5 py-0.5 rounded-sm text-[2.5px] sm:text-[3px]">Our Services</div>
          </div>
        </div>
      </div>

      <div className="px-2 py-2 sm:py-3">
        <div className="grid grid-cols-3 gap-1">
          {[
            { num: "500+", label: "Clients Served" },
            { num: "$2.4M", label: "Tax Savings Found" },
            { num: "25+", label: "Years Experience" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-1 bg-white/5 rounded-sm border border-white/10">
              <div className="text-[#4a9eff] font-bold text-[5px] sm:text-[6px] md:text-[7px]">{stat.num}</div>
              <div className="text-gray-400 text-[2px] sm:text-[2.5px]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-2 pb-2">
        <div className="text-center mb-1.5">
          <div className="text-[2.5px] sm:text-[3px] text-[#4a9eff] font-semibold uppercase tracking-widest mb-0.5">What We Do</div>
          <div className="text-white font-bold text-[4px] sm:text-[5px] md:text-[6px]">Services Built for Growing Businesses</div>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {[
            { title: "Tax Strategy", desc: "Proactive planning to minimize your tax burden" },
            { title: "Bookkeeping", desc: "Clean, accurate books every month" },
            { title: "CFO Advisory", desc: "Strategic guidance for smarter decisions" },
          ].map((svc, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-1 rounded-sm">
              <div className="w-1.5 h-1.5 bg-[#4a9eff]/20 rounded-full mb-0.5"></div>
              <div className="text-white font-bold text-[3px] sm:text-[3.5px] mb-0.5">{svc.title}</div>
              <div className="text-gray-400 text-[2px] sm:text-[2.5px] leading-tight">{svc.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NewSiteMobile() {
  return (
    <div className="w-full h-full bg-[#0c1220] text-[3px] overflow-hidden font-sans">
      <div className="flex items-center justify-between px-1 py-0.5 border-b border-white/10">
        <span className="font-bold text-white text-[3.5px] tracking-wide">HARRISON<span className="text-[#4a9eff]">CPA</span></span>
        <div className="flex flex-col gap-[0.5px]">
          <div className="w-1.5 h-[0.5px] bg-white"></div>
          <div className="w-1.5 h-[0.5px] bg-white"></div>
          <div className="w-1.5 h-[0.5px] bg-white"></div>
        </div>
      </div>

      <div className="px-1 py-1.5" style={{ background: 'linear-gradient(135deg, #0c1220, #1a2744)' }}>
        <div className="text-[2px] text-[#4a9eff] font-semibold uppercase tracking-widest mb-0.5">Trusted by 500+</div>
        <div className="font-bold text-white text-[5px] leading-tight mb-0.5">Strategic Financial Partners</div>
        <div className="text-gray-400 text-[2px] leading-relaxed mb-1">Helping businesses save money and grow smarter.</div>
        <div className="bg-[#4a9eff] text-white px-1 py-0.5 rounded-sm text-[2px] font-semibold text-center">Book a Free Review</div>
      </div>

      <div className="grid grid-cols-3 gap-0.5 px-1 py-1">
        {[
          { num: "500+", label: "Clients" },
          { num: "$2.4M", label: "Saved" },
          { num: "25+", label: "Years" },
        ].map((s, i) => (
          <div key={i} className="text-center p-0.5 bg-white/5 rounded-sm border border-white/10">
            <div className="text-[#4a9eff] font-bold text-[3.5px]">{s.num}</div>
            <div className="text-gray-400 text-[1.5px]">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="px-1 pb-1">
        <div className="text-[2px] text-[#4a9eff] font-semibold uppercase tracking-widest mb-0.5">Services</div>
        {["Tax Strategy", "Bookkeeping", "CFO Advisory"].map((t, i) => (
          <div key={i} className="flex items-center gap-0.5 py-0.5 border-b border-white/5">
            <div className="w-1 h-1 bg-[#4a9eff]/20 rounded-full flex-shrink-0"></div>
            <span className="text-white text-[2.5px] font-semibold">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroDeviceMockup() {
  return (
    <ScrollReveal className="flex items-end justify-center gap-2 sm:gap-4 md:gap-6 w-full">
      <div className="w-[45%] sm:w-[42%]">
        <div className="bg-[#2a2a2a] rounded-t-[3px] sm:rounded-t-[5px] md:rounded-t-[6px] p-[2px] sm:p-[3px] md:p-1 pb-0 shadow-2xl shadow-black/60">
          <div className="flex items-center gap-[2px] mb-[2px] sm:mb-[3px]">
            <div className="w-[3px] h-[3px] sm:w-1 sm:h-1 rounded-full bg-[#ff5f57]"></div>
            <div className="w-[3px] h-[3px] sm:w-1 sm:h-1 rounded-full bg-[#febc2e]"></div>
            <div className="w-[3px] h-[3px] sm:w-1 sm:h-1 rounded-full bg-[#28c840]"></div>
          </div>
          <div className="aspect-[16/10] overflow-hidden rounded-[1px]">
            <OldSite />
          </div>
        </div>
        <div className="bg-[#1a1a1a] h-1 sm:h-1.5 md:h-2 rounded-b-sm mx-[10%]"></div>
        <div className="bg-[#2a2a2a] h-[2px] sm:h-1 rounded-b-sm mx-[20%]"></div>
      </div>

      <div className="w-[45%] sm:w-[42%] flex items-end gap-1 sm:gap-2">
        <div className="flex-1">
          <div className="bg-[#1a1a1a] rounded-t-[3px] sm:rounded-t-[5px] md:rounded-t-[6px] p-[2px] sm:p-[3px] md:p-1 pb-0 shadow-2xl shadow-black/60">
            <div className="flex items-center gap-[2px] mb-[2px] sm:mb-[3px]">
              <div className="w-[3px] h-[3px] sm:w-1 sm:h-1 rounded-full bg-[#ff5f57]"></div>
              <div className="w-[3px] h-[3px] sm:w-1 sm:h-1 rounded-full bg-[#febc2e]"></div>
              <div className="w-[3px] h-[3px] sm:w-1 sm:h-1 rounded-full bg-[#28c840]"></div>
            </div>
            <div className="aspect-[16/10] overflow-hidden rounded-[1px]">
              <NewSite />
            </div>
          </div>
          <div className="bg-[#111] h-1 sm:h-1.5 md:h-2 rounded-b-sm mx-[10%]"></div>
          <div className="bg-[#1a1a1a] h-[2px] sm:h-1 rounded-b-sm mx-[20%]"></div>
        </div>

        <div className="w-[18%] sm:w-[20%] mb-1 sm:mb-2">
          <div className="bg-[#1a1a1a] rounded-[3px] sm:rounded-[5px] p-[1.5px] sm:p-[2px] shadow-2xl shadow-black/60 border border-white/10">
            <div className="aspect-[9/18] overflow-hidden rounded-[2px] sm:rounded-[3px]">
              <NewSiteMobile />
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
