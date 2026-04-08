import { Star } from "lucide-react";

export function TrustBar() {
  return (
    <section className="bg-charcoal border-t border-gunmetal/50 py-5 px-6">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center">
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5 text-orange">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="currentColor" size={14} />
            ))}
          </div>
          <span className="text-stone font-sans text-sm">5-Star Rated</span>
        </div>
        <div className="h-4 w-px bg-gunmetal hidden sm:block" />
        <span className="text-stone font-sans text-sm">
          <span className="text-offwhite font-semibold">50+</span> Professional Practices Served
        </span>
        <div className="h-4 w-px bg-gunmetal hidden sm:block" />
        <span className="text-stone font-sans text-sm">
          <span className="text-offwhite font-semibold">100%</span> U.S.-Based Team
        </span>
        <div className="h-4 w-px bg-gunmetal hidden sm:block" />
        <span className="text-stone font-sans text-sm">
          <span className="text-offwhite font-semibold">$0</span> Upfront for Your Review
        </span>
      </div>
    </section>
  );
}
