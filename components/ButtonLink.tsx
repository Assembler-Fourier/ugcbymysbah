import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  showArrow?: boolean;
};

export function ButtonLink({
  children,
  className = "",
  variant = "primary",
  showArrow = true,
  ...props
}: ButtonLinkProps) {
  const variants = {
    primary:
      "bg-[linear-gradient(135deg,#17120f,#b74362)] text-white shadow-glow hover:-translate-y-0.5 hover:brightness-110",
    secondary:
      "border border-rosewood/20 bg-white/78 text-ink shadow-sm hover:-translate-y-0.5 hover:border-rosewood/45 hover:bg-white",
    light:
      "bg-white text-ink shadow-soft hover:-translate-y-0.5 hover:bg-cream",
  };

  return (
    <Link
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-extrabold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {showArrow ? <ArrowRight aria-hidden="true" size={17} strokeWidth={2.4} /> : null}
    </Link>
  );
}
