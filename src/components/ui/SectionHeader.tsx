import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  theme?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  theme = "light",
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.2em]",
          isDark ? "text-gold" : "text-gold-deep",
          align === "center" && "justify-center"
        )}
      >
        <span
          className={cn(
            "inline-block h-2 w-2 rounded-[2px]",
            isDark ? "bg-gold" : "bg-gold border border-navy/25"
          )}
        />
        <span>{eyebrow}</span>
      </div>
      <h2
        className={cn(
          "mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl leading-[1.08]",
          isDark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base sm:text-lg leading-relaxed",
            isDark ? "text-white/75" : "text-ink-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
