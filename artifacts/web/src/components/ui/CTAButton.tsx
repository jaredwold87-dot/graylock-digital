import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'dark';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export function CTAButton({ href, children, variant = 'primary', className, onClick, type = 'button' }: CTAButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-sans font-semibold tracking-wide px-8 py-4 rounded transition-all duration-300";
  
  const variants = {
    primary: "bg-orange text-white hover:bg-orange/90 shadow-[0_4px_14px_rgba(232,99,26,0.25)] hover:shadow-[0_6px_20px_rgba(232,99,26,0.35)] hover:-translate-y-0.5",
    outline: "border-2 border-orange text-orange hover:bg-orange hover:text-white bg-transparent",
    dark: "bg-charcoal text-white hover:bg-navy shadow-lg hover:-translate-y-0.5 border border-gunmetal"
  };

  const classes = cn(baseClasses, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
