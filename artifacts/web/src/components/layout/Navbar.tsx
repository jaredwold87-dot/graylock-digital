import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "How It Works", path: "/how-it-works" },
    { name: "Pricing", path: "/pricing" },
    { name: "Our Work", path: "/work" },
    { name: "About", path: "/about" }
  ];

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
          isScrolled ? "bg-charcoal/90 backdrop-blur-md border-b border-gunmetal py-3" : "bg-charcoal border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            {/* 3-arrow SVG triangle icon placeholder */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-orange">
              <path d="M12 2L2 20H22L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 10L7 18H17L12 10Z" fill="currentColor"/>
            </svg>
            <span className="font-display text-xl text-orange uppercase tracking-wider group-hover:opacity-90 transition-opacity">
              Graylock Digital
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path}
                  className={cn(
                    "text-sm font-sans font-semibold transition-colors",
                    location === link.path 
                      ? "text-orange border-b-2 border-orange pb-1" 
                      : "text-stone hover:text-offwhite border-b-2 border-transparent pb-1"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link href="/contact" className="bg-orange text-white text-sm font-bold px-5 py-2.5 rounded hover:bg-orange/90 transition-colors shadow-lg shadow-orange/20">
              Get a Free Evaluation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-offwhite hover:text-orange transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-charcoal/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center gap-8 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={cn(
                "text-2xl font-display uppercase tracking-widest",
                location === link.path ? "text-orange" : "text-offwhite hover:text-orange transition-colors"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="mt-8 bg-orange text-white font-sans font-bold px-8 py-4 rounded shadow-xl shadow-orange/20">
            Get a Free Evaluation
          </Link>
        </div>
      </div>
    </>
  );
}
