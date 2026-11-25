"use client";

import React, { useState } from "react";
import { CheckCircle2, Code2, LayoutDashboard, Palette, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

type DisciplineCardId = "brand-print" | "dashboard" | "web-app" | "ai-code";

interface CardSpec {
  id: DisciplineCardId;
  title: string;
  cornerSpec: string;
  caption: string;
  pillMessage: string;
}

const CARDS: Record<DisciplineCardId, CardSpec> = {
  "brand-print": {
    id: "brand-print",
    title: "BRAND & PRINT",
    cornerSpec: "CMYK · FOIL",
    caption: "Identity · Packaging · Print",
    pillMessage: "Brand & Print Completed",
  },
  dashboard: {
    id: "dashboard",
    title: "SAAS DASHBOARD",
    cornerSpec: "LIVE · RBAC",
    caption: "Telemetry · Charts · Admin UI",
    pillMessage: "Dashboard Completed",
  },
  "web-app": {
    id: "web-app",
    title: "WEB & APP",
    cornerSpec: "99 LCP",
    caption: "Next.js · Mobile · WCAG AA",
    pillMessage: "Web & App Completed",
  },
  "ai-code": {
    id: "ai-code",
    title: "AI CODE ENGINE",
    cornerSpec: "3.2× FASTER",
    caption: "16+ Yrs Audit · Zero-Retention",
    pillMessage: "AI Engine Verified",
  },
};

export function StudioAtelierCanvas() {
  const [selectedCard, setSelectedCard] = useState<DisciplineCardId | null>(null);

  const badgeText = selectedCard ? CARDS[selectedCard].pillMessage : "Request Completed";

  const handleCardClick = (id: DisciplineCardId) => {
    setSelectedCard((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative mx-auto w-full max-w-[550px] px-2 py-6 sm:px-4">
      {/* Subtle Golden-Ratio Ambient Glow behind Cluster */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-6 rounded-full bg-gold/12 blur-3xl"
      />

      {/* Staggered & Gently Tilted 2x2 Floating Card Cluster */}
      <div className="relative grid grid-cols-2 gap-3.5 sm:gap-5 rotate-[1.8deg]">
        {/* CARD 1 (Top-Left): BRAND & PRINT */}
        <button
          type="button"
          onClick={() => handleCardClick("brand-print")}
          aria-pressed={selectedCard === "brand-print"}
          className={cn(
            "group relative flex translate-y-2 flex-col rounded-[20px] border bg-white p-2.5 text-left shadow-[0_18px_45px_rgba(10,25,47,0.08),0_2px_8px_rgba(10,25,47,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_60px_rgba(10,25,47,0.14)] sm:p-3.5",
            selectedCard === "brand-print"
              ? "border-gold ring-2 ring-gold/35"
              : "border-navy/10 hover:border-gold/70"
          )}
        >
          {/* Colored Visual Canvas */}
          <div className="relative flex aspect-[16/11] w-full flex-col items-center justify-center overflow-hidden rounded-[14px] bg-[#FEF5CC] p-3">
            {/* Subtle Conceptual Golden-Ratio & Crop-Mark Watermark */}
            <svg
              viewBox="0 0 220 150"
              fill="none"
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              <circle cx="54" cy="48" r="28" stroke="#9A6F00" strokeOpacity="0.18" strokeDasharray="3 3" />
              <circle cx="54" cy="48" r="16" stroke="#9A6F00" strokeOpacity="0.2" />
              <circle cx="176" cy="108" r="7" stroke="#9A6F00" strokeOpacity="0.22" />
              <path d="M176 96V120M164 108H188" stroke="#9A6F00" strokeOpacity="0.22" />
              <path d="M12 24V12H24M208 126V138H196" stroke="#9A6F00" strokeOpacity="0.24" strokeWidth="1.2" />
            </svg>

            <span className="absolute right-2.5 top-2.5 font-mono text-[8.5px] font-bold tracking-wider text-[#8C6200]/75">
              {CARDS["brand-print"].cornerSpec}
            </span>

            <div className="relative flex flex-col items-center gap-1.5 text-center">
              <Palette className="h-4 w-4 text-[#8C6200]" aria-hidden="true" />
              <span className="text-xs font-bold tracking-[0.06em] text-[#8C6200] sm:text-[15px]">
                {CARDS["brand-print"].title}
              </span>
            </div>
          </div>

          {/* Clean Double-Line Architectural Footer */}
          <div className="mt-3 space-y-2 px-0.5">
            <div className="truncate font-mono text-[9px] font-semibold text-ink-muted">
              {CARDS["brand-print"].caption}
            </div>
            <div className="space-y-1.5">
              <div
                className={cn(
                  "h-2 w-4/5 rounded-full transition-colors",
                  selectedCard === "brand-print" ? "bg-gold/55" : "bg-[#EDF2F8]"
                )}
              />
              <div className="h-2 w-2/5 rounded-full bg-[#EDF2F8]" />
            </div>
          </div>
        </button>

        {/* CARD 2 (Top-Right, Staggered Up): SAAS DASHBOARD */}
        <button
          type="button"
          onClick={() => handleCardClick("dashboard")}
          aria-pressed={selectedCard === "dashboard"}
          className={cn(
            "group relative flex -translate-y-2.5 flex-col rounded-[20px] border bg-white p-2.5 text-left shadow-[0_18px_45px_rgba(10,25,47,0.08),0_2px_8px_rgba(10,25,47,0.03)] transition-all duration-300 hover:-translate-y-4 hover:shadow-[0_28px_60px_rgba(10,25,47,0.14)] sm:-translate-y-3.5 sm:p-3.5 sm:hover:-translate-y-5",
            selectedCard === "dashboard"
              ? "border-gold ring-2 ring-gold/35"
              : "border-navy/10 hover:border-gold/70"
          )}
        >
          <div className="relative flex aspect-[16/11] w-full flex-col items-center justify-center overflow-hidden rounded-[14px] bg-[#EBF2FF] p-3">
            {/* Subtle Analytics Sparkline & Bar Watermark */}
            <svg
              viewBox="0 0 220 150"
              fill="none"
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              <rect x="24" y="106" width="12" height="26" rx="2" fill="#0A192F" fillOpacity="0.09" />
              <rect x="46" y="92" width="12" height="40" rx="2" fill="#0A192F" fillOpacity="0.11" />
              <rect x="68" y="98" width="12" height="34" rx="2" fill="#0A192F" fillOpacity="0.09" />
              <rect x="90" y="78" width="12" height="54" rx="2" fill="#0A192F" fillOpacity="0.12" />
              <path
                d="M22 96 L58 76 L92 84 L142 52 L192 32"
                stroke="#0A192F"
                strokeOpacity="0.16"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="192" cy="32" r="4" fill="#F5C518" fillOpacity="0.7" />
            </svg>

            <span className="absolute right-2.5 top-2.5 font-mono text-[8.5px] font-bold tracking-wider text-navy/60">
              {CARDS.dashboard.cornerSpec}
            </span>

            <div className="relative flex flex-col items-center gap-1.5 text-center">
              <LayoutDashboard className="h-4 w-4 text-navy" aria-hidden="true" />
              <span className="text-xs font-bold tracking-[0.05em] text-navy sm:text-[15px]">
                {CARDS.dashboard.title}
              </span>
            </div>
          </div>

          <div className="mt-3 space-y-2 px-0.5">
            <div className="truncate font-mono text-[9px] font-semibold text-ink-muted">
              {CARDS.dashboard.caption}
            </div>
            <div className="space-y-1.5">
              <div
                className={cn(
                  "h-2 w-4/5 rounded-full transition-colors",
                  selectedCard === "dashboard" ? "bg-navy/25" : "bg-[#EDF2F8]"
                )}
              />
              <div className="h-2 w-2/5 rounded-full bg-[#EDF2F8]" />
            </div>
          </div>
        </button>

        {/* CARD 3 (Bottom-Left): WEB & APP */}
        <button
          type="button"
          onClick={() => handleCardClick("web-app")}
          aria-pressed={selectedCard === "web-app"}
          className={cn(
            "group relative flex translate-y-2 flex-col rounded-[20px] border bg-white p-2.5 text-left shadow-[0_18px_45px_rgba(10,25,47,0.08),0_2px_8px_rgba(10,25,47,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_60px_rgba(10,25,47,0.14)] sm:p-3.5",
            selectedCard === "web-app"
              ? "border-gold ring-2 ring-gold/35"
              : "border-navy/10 hover:border-gold/70"
          )}
        >
          <div className="relative flex aspect-[16/11] w-full flex-col items-center justify-center overflow-hidden rounded-[14px] bg-navy bg-navy-blueprint p-3">
            {/* Subtle Gold Bezier Curve & Vector Handle Watermark */}
            <svg
              viewBox="0 0 220 150"
              fill="none"
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              <path
                d="M22 118 C66 28, 152 126, 198 34"
                stroke="#F5C518"
                strokeOpacity="0.32"
                strokeWidth="1.8"
              />
              <line x1="22" y1="118" x2="66" y2="28" stroke="#F5C518" strokeOpacity="0.2" strokeDasharray="2.5 2.5" />
              <rect x="19" y="115" width="6" height="6" fill="#F5C518" fillOpacity="0.55" />
              <circle cx="66" cy="28" r="3" fill="#F5C518" fillOpacity="0.55" />
              <rect x="195" y="31" width="6" height="6" fill="#F5C518" fillOpacity="0.55" />
            </svg>

            <span className="absolute right-2.5 top-2.5 font-mono text-[8.5px] font-bold tracking-wider text-gold/90">
              {CARDS["web-app"].cornerSpec}
            </span>

            <div className="relative flex flex-col items-center gap-1.5 text-center">
              <Smartphone className="h-4 w-4 text-gold" aria-hidden="true" />
              <span className="text-xs font-bold tracking-[0.06em] text-white sm:text-[15px]">
                {CARDS["web-app"].title}
              </span>
            </div>
          </div>

          <div className="mt-3 space-y-2 px-0.5">
            <div className="truncate font-mono text-[9px] font-semibold text-ink-muted">
              {CARDS["web-app"].caption}
            </div>
            <div className="space-y-1.5">
              <div
                className={cn(
                  "h-2 w-4/5 rounded-full transition-colors",
                  selectedCard === "web-app" ? "bg-navy/30" : "bg-[#EDF2F8]"
                )}
              />
              <div className="h-2 w-2/5 rounded-full bg-[#EDF2F8]" />
            </div>
          </div>
        </button>

        {/* CARD 4 COLUMN WRAPPER (Bottom-Right, Staggered Up) + Floating Pill Badge */}
        <div className="relative -translate-y-2.5 sm:-translate-y-3.5">
          {/* Iconic Floating Royal Navy Pill Badge Overlapping Upper-Left Edge of Card 4 */}
          <div
            aria-live="polite"
            className="pointer-events-none absolute -left-8 -top-4 z-20 rotate-[1.5deg] sm:-left-12 sm:-top-5"
          >
            <div className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-gold/50 bg-navy px-4 py-2 text-xs font-semibold text-white shadow-[0_20px_45px_rgba(10,25,47,0.34)] sm:px-5 sm:py-2.5 sm:text-sm">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-gold sm:h-5 sm:w-5" aria-hidden="true" />
              <span>{badgeText}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleCardClick("ai-code")}
            aria-pressed={selectedCard === "ai-code"}
            className={cn(
              "group relative flex w-full flex-col rounded-[20px] border bg-white p-2.5 text-left shadow-[0_18px_45px_rgba(10,25,47,0.08),0_2px_8px_rgba(10,25,47,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(10,25,47,0.14)] sm:p-3.5",
              selectedCard === "ai-code"
                ? "border-gold ring-2 ring-gold/35"
                : "border-navy/10 hover:border-gold/70"
            )}
          >
            <div className="relative flex aspect-[16/11] w-full flex-col items-center justify-center overflow-hidden rounded-[14px] bg-[#EEF3FA] p-3">
              {/* Subtle Code Circuit & Bracket Watermark */}
              <svg
                viewBox="0 0 220 150"
                fill="none"
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full"
              >
                <path
                  d="M36 58L22 74L36 90M184 58L198 74L184 90"
                  stroke="#0A192F"
                  strokeOpacity="0.16"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="48" cy="120" r="3" fill="#9A6F00" fillOpacity="0.32" />
                <circle cx="172" cy="30" r="3" fill="#0A192F" fillOpacity="0.22" />
                <path d="M52 120H122L142 98" stroke="#0A192F" strokeOpacity="0.12" strokeDasharray="3 3" />
              </svg>

              <span className="absolute right-2.5 top-2.5 font-mono text-[8.5px] font-bold tracking-wider text-gold-deep">
                {CARDS["ai-code"].cornerSpec}
              </span>

              <div className="relative mt-2 flex flex-col items-center gap-1.5 text-center">
                <Code2 className="h-4 w-4 text-gold-deep" aria-hidden="true" />
                <span className="text-xs font-bold tracking-[0.05em] text-navy sm:text-[15px]">
                  {CARDS["ai-code"].title}
                </span>
              </div>
            </div>

            <div className="mt-3 space-y-2 px-0.5">
              <div className="truncate font-mono text-[9px] font-semibold text-ink-muted">
                {CARDS["ai-code"].caption}
              </div>
              <div className="space-y-1.5">
                <div
                  className={cn(
                    "h-2 w-4/5 rounded-full transition-colors",
                    selectedCard === "ai-code" ? "bg-gold/55" : "bg-[#EDF2F8]"
                  )}
                />
                <div className="h-2 w-2/5 rounded-full bg-[#EDF2F8]" />
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Subtle Studio Attribution Bar Below Cluster */}
      <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-[10px] text-ink-muted">
        <span>Direct 3-Principal Studio: Asif · Talib · Azma</span>
        <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
        <span className="font-semibold text-gold-deep">100% IP Ownership</span>
      </div>
    </div>
  );
}
