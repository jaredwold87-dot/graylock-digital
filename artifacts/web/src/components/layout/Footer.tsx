import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gunmetal pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand & Tagline */}
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-4 group">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-orange">
              <path d="M12 2L2 20H22L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 10L7 18H17L12 10Z" fill="currentColor"/>
            </svg>
            <span className="font-display text-2xl text-offwhite uppercase tracking-wider group-hover:text-orange transition-colors">
              Graylock Digital
            </span>
          </Link>
          <p className="text-stone font-sans mt-4 max-w-xs">
            Modern websites for small service businesses. Done for you, maintained forever.
          </p>
        </div>

        {/* Link Column 1 */}
        <div>
          <h4 className="font-display text-offwhite text-lg mb-6 tracking-wide">COMPANY</h4>
          <ul className="space-y-4 flex flex-col">
            <Link href="/how-it-works" className="text-stone hover:text-offwhite transition-colors">How It Works</Link>
            <Link href="/pricing" className="text-stone hover:text-offwhite transition-colors">Pricing</Link>
            <Link href="/work" className="text-stone hover:text-offwhite transition-colors">Our Work</Link>
            <Link href="/about" className="text-stone hover:text-offwhite transition-colors">About Us</Link>
          </ul>
        </div>

        {/* Link Column 2 */}
        <div>
          <h4 className="font-display text-offwhite text-lg mb-6 tracking-wide">SUPPORT</h4>
          <ul className="space-y-4 flex flex-col">
            <Link href="/faq" className="text-stone hover:text-offwhite transition-colors">FAQ</Link>
            <Link href="/contact" className="text-stone hover:text-offwhite transition-colors">Contact</Link>
            <a href="#" className="text-stone hover:text-offwhite transition-colors">Privacy Policy</a>
            <a href="#" className="text-stone hover:text-offwhite transition-colors">Terms of Service</a>
          </ul>
        </div>

        {/* CTA Column */}
        <div>
          <h4 className="font-display text-offwhite text-lg mb-6 tracking-wide">READY?</h4>
          <Link href="/contact" className="inline-block bg-orange text-white font-sans font-bold px-6 py-3 rounded hover:bg-orange/90 transition-colors w-full text-center shadow-lg shadow-orange/20 mb-6">
            Get a Free Evaluation
          </Link>
          <p className="text-stone text-sm text-center">
            hello@graylockdigital.com
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gunmetal flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-stone text-sm">
          © {new Date().getFullYear()} Graylock Digital. All rights reserved.
        </p>
        <p className="text-stone text-sm flex gap-4">
          <span>Based in the USA</span>
          <span>•</span>
          <span>Built for local businesses</span>
        </p>
      </div>
    </footer>
  );
}
