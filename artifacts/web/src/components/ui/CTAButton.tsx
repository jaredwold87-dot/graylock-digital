import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'dark';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  showArrow?: boolean;
}

export function CTAButton({ href, children, variant = 'primary', className, onClick, type = 'button', showArrow = true }: CTAButtonProps) {
  const baseClasses = "cta-btn group inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-wide px-8 py-4 rounded-lg transition-all duration-300 relative overflow-hidden";

  const variants = {
    primary: "bg-gradient-to-r from-[#2E7BB4] to-[#1a5a8a] text-white shadow-[0_4px_14px_rgba(46,123,180,0.3)] hover:shadow-[0_8px_30px_rgba(46,123,180,0.5)] hover:-translate-y-0.5 active:translate-y-0",
    outline: "border-2 border-[#2E7BB4] text-[#2E7BB4] hover:bg-[#2E7BB4] hover:text-white bg-transparent hover:shadow-[0_4px_20px_rgba(46,123,180,0.3)]",
    dark: "bg-charcoal text-white hover:bg-navy shadow-lg hover:-translate-y-0.5 border border-gunmetal hover:border-[#2E7BB4]/40 hover:shadow-[0_4px_20px_rgba(46,123,180,0.2)]"
  };

  const classes = cn(baseClasses, variants[variant], className);

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowRight size={18} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
