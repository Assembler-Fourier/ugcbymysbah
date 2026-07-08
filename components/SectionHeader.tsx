import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  children?: ReactNode;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  children,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const titleClass = tone === "dark" ? "text-white" : "text-ink";
  const descriptionClass = tone === "dark" ? "text-white/68" : "text-muted";
  const kickerClass = tone === "dark" ? "text-blush" : "";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className={`section-kicker ${kickerClass} ${isCenter ? "justify-center" : ""}`}>
        <Sparkles aria-hidden="true" size={14} />
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-balance text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl ${titleClass}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-pretty text-base leading-7 sm:text-lg ${descriptionClass}`}>
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
