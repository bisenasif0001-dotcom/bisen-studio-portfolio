"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Layers,
  Maximize2,
  Package,
  Palette,
  Printer,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { CASE_STUDIES, type CaseStudy } from "@/data/portfolio";
import { type WorkDomainConfig, getDomainHrefForCategory } from "@/data/workDomains";
import {
  PREPRESS_MASTER_SPECS,
  PRINT_FINISHING_DECK,
  PRINT_PACKAGING_SERVICES,
  PRINT_SERVICE_CATEGORIES,
  type PrintServiceCategory,
  type PrintServiceItem,
} from "@/data/printPackagingCatalog";
import { WorkDomainNav } from "@/components/sections/WorkDomainNav";
import { cn } from "@/lib/utils";

type ProofingLayerId = "cmyk" | "dieline" | "foil" | "prepress";

const PROOFING_LAYERS: {
  id: ProofingLayerId;
  label: string;
  specBadge: string;
}[] = [
  { id: "cmyk", label: "CMYK + PMS", specBadge: "FOGRA39 · PMS 289C / 871C" },
  { id: "dieline", label: "Die-Line CAD", specBadge: "ECMA A60 · CUT / CREASE · 3MM" },
  { id: "foil", label: "Foil & Emboss", specBadge: "OVERPRINT SPOT_FOIL + 0.4MM" },
  { id: "prepress", label: "Pre-Press Specs", specBadge: "TAC ≤ 300% · K100 · PDF/X-4" },
];

const CATEGORY_ICON_MAP: Record<
  PrintServiceItem["category"],
  React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>
> = {
  "Packaging & Structural": Package,
  "Editorial & Corporate": BookOpen,
  "Brand Print & Collateral": Layers,
  "Large-Format & Pre-Press": Maximize2,
};

function getCategoryCount(cat: PrintServiceCategory): number {
  if (cat === "All") return PRINT_PACKAGING_SERVICES.length;
  return PRINT_PACKAGING_SERVICES.filter((item) => item.category === cat).length;
}

interface PrintPackagingShowcaseProps {
  domain: WorkDomainConfig;
}

export function PrintPackagingShowcase({ domain }: PrintPackagingShowcaseProps) {
  const [activeLayer, setActiveLayer] = useState<ProofingLayerId>("cmyk");
  const [activeCategory, setActiveCategory] = useState<PrintServiceCategory>("All");

  const featuredCases = domain.featuredSlugs
    .map((slug) => CASE_STUDIES.find((c) => c.slug === slug))
    .filter((c): c is CaseStudy => Boolean(c));

  const relatedCases = domain.relatedSlugs
    .map((slug) => CASE_STUDIES.find((c) => c.slug === slug))
    .filter((c): c is CaseStudy => Boolean(c));

  const filteredServices =
    activeCategory === "All"
      ? PRINT_PACKAGING_SERVICES
      : PRINT_PACKAGING_SERVICES.filter((item) => item.category === activeCategory);

  const currentLayerMeta =
    PROOFING_LAYERS.find((layer) => layer.id === activeLayer) ?? PROOFING_LAYERS[0];

  return (
    <div className="bg-canvas text-navy">
      {/* 1. FINE-TUNED PRESS-SHEET HERO */}
      <section className="border-b-2 border-gold bg-navy bg-navy-blueprint py-10 text-white lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Press Registration Calibration Strip */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-white/12 pb-4 font-mono text-[10px]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-bold uppercase tracking-[0.16em] text-gold">
                ⊕ PRESS SHEET 05 // PRINT &amp; PACKAGING ATELIER
              </span>
              <span className="hidden text-white/30 sm:inline">|</span>
              <span className="uppercase tracking-[0.14em] text-white/70">
                ISO 12647-2 OFFSET · FOGRA39 · PDF/X-4
              </span>
            </div>

            {/* CMYK + Pantone Color Control Targets */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded border border-white/15 bg-navy-mid px-2 py-0.5 text-white/85">
                <span className="h-2 w-2 rounded-xs bg-[#00AEEF]" /> C
              </span>
              <span className="inline-flex items-center gap-1 rounded border border-white/15 bg-navy-mid px-2 py-0.5 text-white/85">
                <span className="h-2 w-2 rounded-xs bg-[#EC008C]" /> M
              </span>
              <span className="inline-flex items-center gap-1 rounded border border-white/15 bg-navy-mid px-2 py-0.5 text-white/85">
                <span className="h-2 w-2 rounded-xs bg-[#FFF200]" /> Y
              </span>
              <span className="inline-flex items-center gap-1 rounded border border-white/15 bg-navy-mid px-2 py-0.5 text-white/85">
                <span className="h-2 w-2 rounded-xs border border-white/30 bg-[#050C18]" /> K
              </span>
              <span className="inline-flex items-center gap-1.5 rounded border border-gold/40 bg-navy-mid px-2.5 py-0.5 text-gold">
                <span className="h-2 w-2 rounded-full bg-gold" />
                PMS 871 C FOIL
              </span>
            </div>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Left Copy, Actions & Domain Calibration Telemetry */}
            <div className="lg:col-span-7">
              <div>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-white/75 transition-colors hover:text-gold"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>All Portfolio Domains</span>
                </Link>
              </div>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/45 bg-navy-mid px-3.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span>DOMAIN EXHIBITION // PRINT &amp; PACKAGING ATELIER</span>
              </div>

              <h1 className="mt-4 text-3xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl">
                {domain.headline}{" "}
                <span className="font-editorial text-gold">{domain.headlineAccent}</span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                {domain.description}
              </p>

              <div className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-gold/90">
                <Sparkles className="h-3.5 w-3.5 shrink-0" />
                <span>Built for: {domain.audienceTag}</span>
              </div>

              {/* Dual Hero Actions */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href={`/contact?service=${domain.serviceQuery}`}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gold py-2 pl-5 pr-2 text-xs font-bold text-navy shadow-[0_10px_28px_rgba(245,197,24,0.22)] transition-all hover:bg-gold-bright sm:text-sm"
                >
                  <span>Start a Print &amp; Packaging Brief</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-gold transition-transform duration-200 group-hover:scale-105">
                    <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" />
                  </span>
                </Link>
                <a
                  href="#print-services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-navy-mid/80 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:border-gold hover:text-gold sm:text-sm"
                >
                  <span>Explore All 12 Print Services</span>
                  <ArrowDown className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* 4 Press Calibration Telemetry Readouts */}
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {domain.telemetrySpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="relative overflow-hidden rounded-2xl border border-white/15 bg-navy-mid/90 p-3.5"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3.5 top-0 h-[2px] rounded-full bg-gold/65"
                    />
                    <div className="font-mono text-base font-bold text-gold sm:text-lg">
                      {spec.value}
                    </div>
                    <div className="mt-1 text-[11px] leading-snug text-white/75">
                      {spec.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Pre-Press Proofing Artboard */}
            <div className="lg:col-span-5">
              <div className="rounded-[26px] border-2 border-gold/55 bg-white p-3.5 text-navy shadow-[0_28px_70px_rgba(6,16,33,0.48)]">
                {/* Artboard Header & Active Layer Status */}
                <div className="flex flex-wrap items-center justify-between gap-2 px-1 pb-2.5">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-gold-deep">
                    PRESS ARTBOARD // 05
                  </span>
                  <span className="rounded-full border border-navy/12 bg-surface px-2.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-navy">
                    {currentLayerMeta.specBadge}
                  </span>
                </div>

                {/* 4 Clickable Proofing Layer Switchers */}
                <div
                  role="tablist"
                  aria-label="Pre-press proofing inspection layers"
                  className="mb-3 grid grid-cols-2 gap-1.5 rounded-xl border border-navy/10 bg-surface p-1 sm:grid-cols-4"
                >
                  {PROOFING_LAYERS.map((layer) => {
                    const isSelected = activeLayer === layer.id;
                    return (
                      <button
                        key={layer.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setActiveLayer(layer.id)}
                        className={cn(
                          "cursor-pointer rounded-lg px-2 py-1.5 text-center font-mono text-[10px] font-semibold transition-all",
                          isSelected
                            ? "bg-navy text-white shadow-xs"
                            : "text-navy/70 hover:bg-white hover:text-navy"
                        )}
                      >
                        {layer.label}
                      </button>
                    );
                  })}
                </div>

                {/* Bespoke Interactive Structural Carton Pre-Press SVG */}
                <div className="overflow-hidden rounded-2xl border border-navy/12 bg-surface/70 p-2">
                  <svg
                    viewBox="0 0 420 230"
                    className="h-auto w-full"
                    role="img"
                    aria-label={`Interactive packaging carton pre-press view: ${currentLayerMeta.label}`}
                  >
                    <defs>
                      <pattern
                        id="pp-blueprint-grid"
                        width="16"
                        height="16"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 16 0 L 0 0 0 16"
                          fill="none"
                          stroke="#0A192F"
                          strokeOpacity={activeLayer === "dieline" ? "0.09" : "0.045"}
                          strokeWidth="0.7"
                        />
                      </pattern>
                      <pattern
                        id="pp-glue-hatch"
                        width="6"
                        height="6"
                        patternTransform="rotate(45)"
                        patternUnits="userSpaceOnUse"
                      >
                        <line
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="6"
                          stroke="#9A6F00"
                          strokeWidth="1.2"
                          strokeOpacity="0.65"
                        />
                      </pattern>
                      <radialGradient id="pp-foil-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#F5C518" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#F5C518" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Background Paper Sheet + Grid */}
                    <rect x="0" y="0" width="420" height="230" rx="12" fill="#F8FAFD" />
                    <rect x="0" y="0" width="420" height="230" rx="12" fill="url(#pp-blueprint-grid)" />

                    {/* Outer 3mm Bleed & Trim Crop Marks */}
                    <g stroke="#0A192F" strokeOpacity="0.45" strokeWidth="1">
                      <path d="M18 28 H30 M28 18 V28" />
                      <path d="M402 28 H390 M392 18 V28" />
                      <path d="M18 202 H30 M28 212 V202" />
                      <path d="M402 202 H390 M392 212 V202" />
                    </g>

                    {/* Registration Marks Left & Right */}
                    <g stroke="#9A6F00" strokeWidth="1">
                      <circle cx="34" cy="115" r="5.5" fill="none" />
                      <path d="M26 115 H42 M34 107 V123" />
                      <circle cx="386" cy="115" r="5.5" fill="none" />
                      <path d="M378 115 H394 M386 107 V123" />
                    </g>

                    {/* Outer 3mm Bleed Boundary around Folding Carton */}
                    <rect
                      x="78"
                      y="24"
                      width="266"
                      height="182"
                      rx="4"
                      fill="none"
                      stroke="#9A6F00"
                      strokeOpacity={activeLayer === "dieline" || activeLayer === "prepress" ? "0.9" : "0.35"}
                      strokeDasharray="3 3"
                      strokeWidth="1"
                    />

                    {/* Glue Flap (Left Wing) */}
                    <path
                      d="M84 62 L66 70 V160 L84 168 Z"
                      fill={activeLayer === "dieline" ? "url(#pp-glue-hatch)" : "#E9EEF5"}
                      stroke="#0A192F"
                      strokeWidth="1.2"
                    />

                    {/* Side Panel A (Left Brand Story Panel) */}
                    <rect
                      x="84"
                      y="56"
                      width="60"
                      height="118"
                      fill={activeLayer === "dieline" ? "#FFFFFF" : "#FFFFFF"}
                      stroke="#0A192F"
                      strokeWidth="1.2"
                    />

                    {/* Top & Bottom Tuck Flaps over Front Face */}
                    <path
                      d="M144 56 V36 L154 30 H238 L248 36 V56 Z"
                      fill={activeLayer === "foil" ? "#F4F7FB" : "#FFFFFF"}
                      stroke="#0A192F"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M144 174 V194 L154 200 H238 L248 194 V174 Z"
                      fill={activeLayer === "foil" ? "#F4F7FB" : "#FFFFFF"}
                      stroke="#0A192F"
                      strokeWidth="1.2"
                    />

                    {/* Center Primary Front Face */}
                    <rect
                      x="144"
                      y="56"
                      width="104"
                      height="118"
                      fill={
                        activeLayer === "dieline"
                          ? "#F4F7FB"
                          : activeLayer === "foil"
                          ? "#071224"
                          : "#0A192F"
                      }
                      stroke="#0A192F"
                      strokeWidth="1.3"
                    />

                    {/* Right Side Regulatory / INCI + GS1 Barcode Panel */}
                    <rect
                      x="248"
                      y="56"
                      width="88"
                      height="118"
                      fill="#FFFFFF"
                      stroke="#0A192F"
                      strokeWidth="1.2"
                    />

                    {/* Top & Bottom Dust Flaps on Right Side */}
                    <path
                      d="M248 56 L254 42 H330 L336 56"
                      fill="none"
                      stroke="#0A192F"
                      strokeWidth="1.1"
                    />
                    <path
                      d="M248 174 L254 188 H330 L336 174"
                      fill="none"
                      stroke="#0A192F"
                      strokeWidth="1.1"
                    />

                    {/* LAYER 1: CMYK + PMS Artwork */}
                    {(activeLayer === "cmyk" || activeLayer === "prepress") && (
                      <g>
                        {/* Left Panel Typography Specimen */}
                        <text
                          x="93"
                          y="78"
                          fill="#9A6F00"
                          fontSize="6.5"
                          fontFamily="monospace"
                          fontWeight="700"
                        >
                          EST. 2010
                        </text>
                        <rect x="93" y="86" width="42" height="3.5" rx="1.75" fill="#0A192F" fillOpacity="0.22" />
                        <rect x="93" y="94" width="34" height="3.5" rx="1.75" fill="#0A192F" fillOpacity="0.16" />
                        <rect x="93" y="102" width="38" height="3.5" rx="1.75" fill="#0A192F" fillOpacity="0.16" />
                        <rect x="93" y="152" width="42" height="10" rx="3" fill="#0A192F" fillOpacity="0.08" />
                        <text x="97" y="159" fill="#0A192F" fontSize="5.5" fontFamily="monospace" fontWeight="700">
                          350G COTTON
                        </text>

                        {/* Center Front Panel Gold Seal + Title */}
                        <circle cx="196" cy="100" r="30" fill="url(#pp-foil-glow)" />
                        <circle
                          cx="196"
                          cy="100"
                          r="22"
                          stroke="#F5C518"
                          strokeOpacity="0.45"
                          strokeWidth="1"
                          strokeDasharray="2.5 2.5"
                        />
                        <circle cx="196" cy="100" r="14" stroke="#F5C518" strokeWidth="2.2" />
                        <circle cx="196" cy="100" r="4" fill="#F5C518" />
                        <text
                          x="196"
                          y="134"
                          textAnchor="middle"
                          fill="#FFFFFF"
                          fontSize="10"
                          fontFamily="Georgia, serif"
                          fontStyle="italic"
                          fontWeight="600"
                        >
                          Atelier Serie
                        </text>
                        <text
                          x="196"
                          y="147"
                          textAnchor="middle"
                          fill="#F5C518"
                          fontSize="6.5"
                          fontFamily="monospace"
                          fontWeight="700"
                          letterSpacing="1"
                        >
                          PMS 871 C · FOIL
                        </text>

                        {/* Right Regulatory + GS1 EAN-13 Barcode */}
                        <text x="257" y="74" fill="#0A192F" fontSize="6.5" fontFamily="monospace" fontWeight="700">
                          INCI // 50 ML
                        </text>
                        <rect x="257" y="81" width="68" height="3" rx="1.5" fill="#0A192F" fillOpacity="0.18" />
                        <rect x="257" y="88" width="58" height="3" rx="1.5" fill="#0A192F" fillOpacity="0.14" />
                        <rect x="257" y="95" width="64" height="3" rx="1.5" fill="#0A192F" fillOpacity="0.14" />
                        <rect x="257" y="102" width="46" height="3" rx="1.5" fill="#0A192F" fillOpacity="0.14" />

                        {/* Barcode block (100% K simulation) */}
                        <rect
                          x="257"
                          y="132"
                          width="70"
                          height="32"
                          rx="3"
                          fill="#FFFFFF"
                          stroke="#0A192F"
                          strokeOpacity="0.18"
                        />
                        <g fill="#0A192F">
                          <rect x="263" y="137" width="1.6" height="19" />
                          <rect x="266" y="137" width="1" height="19" />
                          <rect x="269" y="137" width="2.4" height="19" />
                          <rect x="273" y="137" width="1.2" height="19" />
                          <rect x="276" y="137" width="2" height="19" />
                          <rect x="280" y="137" width="1" height="19" />
                          <rect x="283" y="137" width="2.5" height="19" />
                          <rect x="288" y="137" width="1.3" height="19" />
                          <rect x="292" y="137" width="1.8" height="19" />
                          <rect x="296" y="137" width="1" height="19" />
                          <rect x="299" y="137" width="2.3" height="19" />
                          <rect x="304" y="137" width="1.2" height="19" />
                          <rect x="307" y="137" width="2" height="19" />
                          <rect x="311" y="137" width="1" height="19" />
                          <rect x="314" y="137" width="2.2" height="19" />
                          <rect x="318" y="137" width="1.5" height="19" />
                        </g>
                        <text x="292" y="161" textAnchor="middle" fill="#0A192F" fontSize="5.5" fontFamily="monospace">
                          4 006381 333931
                        </text>
                      </g>
                    )}

                    {/* LAYER 2: Structural CAD Die-Line */}
                    {activeLayer === "dieline" && (
                      <g>
                        {/* Dashed Fold/Crease Lines in Gold Deep */}
                        <g stroke="#9A6F00" strokeWidth="1.5" strokeDasharray="4 3">
                          <line x1="84" y1="62" x2="84" y2="168" />
                          <line x1="144" y1="56" x2="144" y2="174" />
                          <line x1="248" y1="56" x2="248" y2="174" />
                          <line x1="144" y1="56" x2="248" y2="56" />
                          <line x1="144" y1="174" x2="248" y2="174" />
                        </g>

                        {/* Center Panel CAD Labels */}
                        <rect
                          x="154"
                          y="66"
                          width="84"
                          height="98"
                          fill="none"
                          stroke="#0A192F"
                          strokeOpacity="0.35"
                          strokeDasharray="2 2"
                        />
                        <text
                          x="196"
                          y="98"
                          textAnchor="middle"
                          fill="#0A192F"
                          fontSize="8"
                          fontFamily="monospace"
                          fontWeight="700"
                        >
                          FRONT PANEL
                        </text>
                        <text
                          x="196"
                          y="112"
                          textAnchor="middle"
                          fill="#9A6F00"
                          fontSize="7"
                          fontFamily="monospace"
                          fontWeight="700"
                        >
                          54 × 118 MM
                        </text>
                        <text
                          x="196"
                          y="128"
                          textAnchor="middle"
                          fill="#0A192F"
                          fontSize="6.5"
                          fontFamily="monospace"
                        >
                          GRAIN VERT ↑↓
                        </text>

                        {/* Side Labels */}
                        <text x="114" y="114" textAnchor="middle" fill="#0A192F" fontSize="6.5" fontFamily="monospace" fontWeight="700">
                          31 MM
                        </text>
                        <text x="292" y="114" textAnchor="middle" fill="#0A192F" fontSize="6.5" fontFamily="monospace" fontWeight="700">
                          45 MM
                        </text>

                        {/* Glue Knockout Callout */}
                        <rect x="46" y="96" width="38" height="38" rx="4" fill="#FFFFFF" stroke="#9A6F00" />
                        <text x="65" y="113" textAnchor="middle" fill="#9A6F00" fontSize="5.5" fontFamily="monospace" fontWeight="700">
                          NO INK
                        </text>
                        <text x="65" y="123" textAnchor="middle" fill="#0A192F" fontSize="5.5" fontFamily="monospace">
                          GLUE
                        </text>

                        {/* Legend at top-right */}
                        <rect x="268" y="16" width="128" height="22" rx="4" fill="#FFFFFF" stroke="#0A192F" strokeOpacity="0.16" />
                        <line x1="276" y1="24" x2="292" y2="24" stroke="#0A192F" strokeWidth="1.5" />
                        <text x="296" y="26.5" fill="#0A192F" fontSize="5.5" fontFamily="monospace" fontWeight="700">
                          CUT LINE
                        </text>
                        <line x1="276" y1="32" x2="292" y2="32" stroke="#9A6F00" strokeWidth="1.5" strokeDasharray="3 2" />
                        <text x="296" y="34.5" fill="#9A6F00" fontSize="5.5" fontFamily="monospace" fontWeight="700">
                          CREASE SCORE
                        </text>
                      </g>
                    )}

                    {/* LAYER 3: Foil & Emboss Plates */}
                    {activeLayer === "foil" && (
                      <g>
                        {/* Foil Border & Seal on Center Panel */}
                        <rect
                          x="151"
                          y="63"
                          width="90"
                          height="104"
                          rx="3"
                          fill="none"
                          stroke="#F5C518"
                          strokeWidth="1.6"
                        />
                        <circle cx="196" cy="99" r="32" fill="url(#pp-foil-glow)" />
                        <circle cx="196" cy="99" r="16" fill="#F5C518" />
                        <circle cx="196" cy="99" r="10" fill="#071224" />
                        <circle cx="196" cy="99" r="4" fill="#F5C518" />
                        <text
                          x="196"
                          y="133"
                          textAnchor="middle"
                          fill="#F5C518"
                          fontSize="10"
                          fontFamily="Georgia, serif"
                          fontStyle="italic"
                          fontWeight="700"
                        >
                          HOT-FOIL
                        </text>
                        <text
                          x="196"
                          y="147"
                          textAnchor="middle"
                          fill="#FFFFFF"
                          fontSize="6.5"
                          fontFamily="monospace"
                        >
                          OVERPRINT: ON
                        </text>

                        {/* Left Panel Blind Deboss Simulation */}
                        <rect
                          x="93"
                          y="84"
                          width="42"
                          height="62"
                          rx="6"
                          fill="#E6ECF5"
                          stroke="#0A192F"
                          strokeOpacity="0.28"
                          strokeWidth="1"
                        />
                        <text x="114" y="112" textAnchor="middle" fill="#0A192F" fontSize="6.5" fontFamily="monospace" fontWeight="700">
                          BLIND
                        </text>
                        <text x="114" y="122" textAnchor="middle" fill="#9A6F00" fontSize="6" fontFamily="monospace" fontWeight="700">
                          DEBOSS
                        </text>

                        {/* Right Panel Spot UV Simulation */}
                        <rect
                          x="259"
                          y="82"
                          width="66"
                          height="66"
                          rx="6"
                          fill="#EEF3FA"
                          stroke="#0A192F"
                          strokeOpacity="0.22"
                          strokeDasharray="3 2"
                        />
                        <text x="292" y="112" textAnchor="middle" fill="#0A192F" fontSize="6.5" fontFamily="monospace" fontWeight="700">
                          SPOT UV
                        </text>
                        <text x="292" y="122" textAnchor="middle" fill="#9A6F00" fontSize="6" fontFamily="monospace">
                          GLOSS MASK
                        </text>
                      </g>
                    )}

                    {/* LAYER 4: Pre-Press Telemetry Overlays */}
                    {activeLayer === "prepress" && (
                      <g>
                        <rect x="86" y="12" width="90" height="16" rx="4" fill="#0A192F" />
                        <text x="131" y="22.5" textAnchor="middle" fill="#F5C518" fontSize="6" fontFamily="monospace" fontWeight="700">
                          BLEED 3MM PASS
                        </text>

                        <rect x="260" y="12" width="96" height="16" rx="4" fill="#0A192F" />
                        <text x="308" y="22.5" textAnchor="middle" fill="#F5C518" fontSize="6" fontFamily="monospace" fontWeight="700">
                          K100 BARCODE OK
                        </text>

                        <rect x="148" y="196" width="96" height="16" rx="4" fill="#0A192F" />
                        <text x="196" y="206.5" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontFamily="monospace" fontWeight="700">
                          TAC 278% ≤ 300%
                        </text>

                        <rect x="262" y="196" width="94" height="16" rx="4" fill="#9A6F00" />
                        <text x="309" y="206.5" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontFamily="monospace" fontWeight="700">
                          TRAPPING 0.15PT
                        </text>
                      </g>
                    )}
                  </svg>
                </div>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1.5 pb-1 font-mono text-[10px]">
                  <span className="font-semibold text-navy/80">
                    350GSM UNCOATED COTTON · BLEED 3MM
                  </span>
                  <Link
                    href={`/contact?service=${domain.serviceQuery}`}
                    className="inline-flex items-center gap-1 font-bold text-gold-deep hover:underline"
                  >
                    <span>Scope This Domain</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXHIBITION BODY */}
      <section className="bg-surface/65 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 6-Route Domain Pill Navigation Dock */}
          <WorkDomainNav />

          {/* SECTION A: COMPLETE 12 PRINT & PACKAGING SERVICES IN AUTHENTIC DESIGN TERMS */}
          <div id="print-services" className="scroll-mt-24">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  COMPLETE PRINT &amp; PACKAGING DISCIPLINES // DESIGN TERMINOLOGY
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-navy sm:text-4xl">
                  All 12 Print &amp; Packaging Services —{" "}
                  <span className="font-editorial text-gold-deep">
                    Engineered in True Pre-Press Terms.
                  </span>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                  From structural CAD die-lines (FEFCO/ECMA), multi-SKU cosmetic pouches, and luxury
                  hot-foil rigid boxes to Swiss baseline editorial reports, letterpress cotton
                  stationery, and 1:10 large-format trade booths—every specification built to clear
                  commercial preflight on first run.
                </p>
              </div>
              <div className="shrink-0 rounded-2xl border border-navy/12 bg-white px-4 py-3 font-mono text-xs shadow-xs">
                <div className="font-bold text-navy">12 PRINT DISCIPLINES ACTIVE</div>
                <div className="mt-0.5 text-[11px] text-ink-muted">
                  Native AI · INDD · CAD .DXF · PDF/X-4
                </div>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div
              role="tablist"
              aria-label="Filter print and packaging services by discipline"
              className="mt-8 inline-flex flex-wrap items-center gap-1.5 rounded-2xl border border-navy/12 bg-white p-1.5 shadow-[0_6px_22px_rgba(10,25,47,0.05)]"
            >
              {PRINT_SERVICE_CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                const count = getCategoryCount(category);
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "inline-flex cursor-pointer items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all sm:text-[13px]",
                      isActive
                        ? "bg-navy text-white shadow-xs"
                        : "text-navy/75 hover:bg-surface hover:text-navy"
                    )}
                  >
                    <span>{category}</span>
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 font-mono text-[10px] font-bold leading-none",
                        isActive ? "bg-gold text-navy" : "bg-surface text-ink-muted"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* 12 Service Specification Cards Grid */}
            <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service) => {
                const Icon = CATEGORY_ICON_MAP[service.category];
                return (
                  <article
                    key={service.id}
                    className="group flex flex-col justify-between rounded-[22px] border border-navy/12 bg-white p-5 shadow-[0_10px_30px_rgba(10,25,47,0.05)] transition-all duration-200 hover:border-gold hover:shadow-[0_18px_46px_rgba(10,25,47,0.09)]"
                  >
                    <div>
                      {/* Card Top Spec Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy text-gold shadow-xs">
                            <Icon className="h-4 w-4" aria-hidden={true} />
                          </span>
                          <div>
                            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-gold-deep">
                              SPEC {service.code} // {service.category}
                            </div>
                            <div className="font-mono text-[10px] font-medium text-ink-muted">
                              {service.designLeadTerm}
                            </div>
                          </div>
                        </div>
                      </div>

                      <h3 className="mt-4 text-lg font-bold leading-snug tracking-tight text-navy">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                        {service.summary}
                      </p>

                      {/* Design & Pre-Press Terms Chip Cluster */}
                      <div className="mt-4">
                        <div className="mb-1.5 flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-navy/65">
                          <Ruler className="h-3 w-3 text-gold-deep" aria-hidden="true" />
                          <span>Design &amp; Pre-Press Terms</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {service.designTerms.map((term) => (
                            <span
                              key={term}
                              className="rounded-md border border-navy/10 bg-surface px-2.5 py-1 font-mono text-[10px] font-medium text-navy"
                            >
                              {term}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Concrete Deliverables */}
                      <ul className="mt-4 space-y-1.5 border-t border-navy/8 pt-3.5 text-xs text-ink-muted">
                        {service.deliverables.map((deliv) => (
                          <li key={deliv} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-deep" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Press Production Footer Specs */}
                    <div className="mt-5 border-t border-navy/10 pt-3.5">
                      <dl className="space-y-1 font-mono text-[10px]">
                        <div className="flex items-center justify-between gap-2">
                          <dt className="text-ink-muted">STOCK:</dt>
                          <dd className="text-right font-semibold text-navy">
                            {service.substrateSpec}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <dt className="text-ink-muted">FINISH:</dt>
                          <dd className="text-right font-semibold text-navy">
                            {service.colorFinishSpec}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <dt className="text-ink-muted">MASTER:</dt>
                          <dd className="text-right font-semibold text-gold-deep">
                            {service.masterFileSpec}
                          </dd>
                        </div>
                      </dl>

                      <div className="mt-3.5 flex items-center justify-between border-t border-navy/8 pt-3">
                        <span className="font-mono text-[10px] text-ink-muted">
                          100% Native Source Files
                        </span>
                        <Link
                          href={`/contact?service=print-design&topic=${service.id}`}
                          className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-navy transition-colors hover:text-gold-deep"
                        >
                          <span>Request Spec</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* SECTION B: SPECIALTY FINISHES & PRE-PRESS STANDARDS DECK */}
          <div className="mt-16 rounded-[28px] border-2 border-gold/60 bg-navy bg-navy-blueprint p-6 text-white shadow-[0_24px_60px_rgba(10,25,47,0.22)] sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
                  <Palette className="h-3.5 w-3.5" />
                  <span>SPECIALTY FINISHES &amp; PRE-PRESS STANDARDS</span>
                </div>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Physical Craft Specs Your Commercial Printer Expects.
                </h2>
              </div>
              <span className="rounded-full border border-gold/45 bg-navy-mid px-3.5 py-1.5 font-mono text-[11px] font-semibold text-gold">
                Direct Offset, Flexo &amp; Foil Proofing
              </span>
            </div>

            {/* 6 Finishing Spec Cards */}
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PRINT_FINISHING_DECK.map((fin) => (
                <div
                  key={fin.code}
                  className="rounded-2xl border border-white/15 bg-navy-mid/90 p-5"
                >
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-gold">
                    {fin.code}
                  </div>
                  <h3 className="mt-1.5 text-base font-bold text-white">{fin.title}</h3>
                  <div className="mt-2 rounded-lg border border-white/10 bg-navy-deep/80 px-2.5 py-1.5 font-mono text-[10px] font-medium text-gold/95">
                    {fin.techSpec}
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-white/80">
                    {fin.designRule}
                  </p>
                  <div className="mt-3 font-mono text-[10px] text-white/60">
                    Ideal for: <span className="text-white/85">{fin.bestFor}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* 5 Pre-Press Engineering Telemetry Row */}
            <div className="mt-7 grid gap-3 border-t border-white/15 pt-6 sm:grid-cols-2 lg:grid-cols-5">
              {PREPRESS_MASTER_SPECS.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-xl border border-white/12 bg-navy-deep/75 p-3.5"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/65">
                    {spec.label}
                  </div>
                  <div className="mt-1 font-mono text-sm font-bold text-gold">{spec.value}</div>
                  <div className="mt-1 text-[11px] leading-snug text-white/75">{spec.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION C: FLAGSHIP PRINT & PACKAGING CASE STUDIES */}
          <div className="mt-16">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  FLAGSHIP PRINT &amp; PACKAGING EXHIBITION
                </p>
                <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                  Proven Across Luxury European Packaging &amp; Swiss Editorial Reports
                </h2>
              </div>
              <span className="font-mono text-xs font-semibold text-navy/75">
                {featuredCases.length} Featured Print Case Studies
              </span>
            </div>

            <div className="space-y-8">
              {featuredCases.map((study) => (
                <article
                  key={study.slug}
                  className="group overflow-hidden rounded-[26px] border border-navy/12 bg-white p-3 shadow-[0_18px_50px_rgba(10,25,47,0.07)] transition-all hover:border-gold"
                >
                  <div className="grid items-stretch gap-6 lg:grid-cols-12">
                    <Link
                      href={`/work/${study.slug}`}
                      className="relative block aspect-[16/10] overflow-hidden rounded-[18px] bg-navy lg:col-span-6 lg:aspect-auto lg:min-h-[340px]"
                    >
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-transparent" />
                      <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-gold px-3 py-1 font-mono text-[11px] font-bold text-navy">
                          {study.regionCode} · {study.year}
                        </span>
                        <span className="rounded-full border border-white/20 bg-navy/90 px-3 py-1 font-mono text-[11px] text-white backdrop-blur-md">
                          {study.engagementModel}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                        <span className="font-mono">{study.region}</span>
                        <span className="font-mono text-gold">{study.timeline}</span>
                      </div>
                    </Link>

                    <div className="flex flex-col justify-between p-4 sm:p-6 lg:col-span-6">
                      <div>
                        <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-deep">
                          FLAGSHIP PRINT &amp; PACKAGING CASE STUDY
                        </div>
                        <h3 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                          <Link
                            href={`/work/${study.slug}`}
                            className="transition-colors hover:text-gold-deep"
                          >
                            {study.title}
                          </Link>
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                          {study.summary}
                        </p>

                        <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl border border-navy/10 bg-surface p-4">
                          {study.metrics.map((m) => (
                            <div key={m.label}>
                              <div className="font-mono text-lg font-bold text-navy sm:text-xl">
                                {m.value}
                              </div>
                              <div className="mt-0.5 text-[11px] leading-snug text-ink-muted">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-5 flex flex-wrap gap-1.5">
                          {study.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-navy/10 bg-surface px-3 py-1 font-mono text-[10px] font-medium text-navy/85"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-navy/10 pt-5">
                        <span className="font-mono text-xs text-ink-muted">
                          Client: <strong className="text-navy">{study.client}</strong>
                        </span>
                        <Link
                          href={`/work/${study.slug}`}
                          className="group/btn inline-flex items-center gap-2.5 rounded-full bg-navy py-2 pl-5 pr-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-navy-mid"
                        >
                          <span>Read Full Case Study</span>
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-navy transition-transform duration-200 group-hover/btn:scale-105">
                            <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* SECTION D: PRE-PRESS ARCHITECTURE PILLARS + DELIVERABLES BOX */}
          <div className="mt-16 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-6">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  Domain Craft Standards
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                  {domain.architectureTitle}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {domain.architectureSubtitle}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {domain.architecturePillars.map((pillar) => (
                  <div
                    key={pillar.code}
                    className="rounded-2xl border border-navy/12 bg-white p-5 shadow-xs transition-colors hover:border-gold"
                  >
                    <span className="font-mono text-xs font-bold text-gold-deep">
                      PILLAR // {pillar.code}
                    </span>
                    <h3 className="mt-2 text-base font-bold text-navy">{pillar.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                      {pillar.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="flex h-full flex-col justify-between rounded-[24px] border-2 border-gold/65 bg-navy bg-navy-blueprint p-6 text-white shadow-[0_24px_60px_rgba(10,25,47,0.22)] sm:p-7">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-navy">
                    <Printer className="h-3 w-3" />
                    <span>Print &amp; Packaging Deliverables</span>
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-white">
                    What Ships in Every Print &amp; Packaging Engagement
                  </h3>

                  <ul className="mt-5 space-y-2.5 text-sm text-white/90">
                    {domain.deliverableChecklist.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-xl border border-white/15 bg-navy-deep/85 p-4">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-gold">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>Recommended Model: {domain.recommendedTitle}</span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/75">
                      {domain.recommendedNote}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-2.5">
                  <Link
                    href={`/contact?service=${domain.serviceQuery}&package=${domain.recommendedPackage}`}
                    className="group flex w-full items-center justify-between rounded-full bg-gold py-2 pl-5 pr-2 text-xs font-bold text-navy transition-all hover:bg-gold-bright"
                  >
                    <span>Start a Print &amp; Packaging Project</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-gold transition-transform duration-200 group-hover:scale-105">
                      <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" />
                    </span>
                  </Link>
                  <Link
                    href="/packages"
                    className="text-center font-mono text-[11px] font-medium text-white/75 underline decoration-gold/60 underline-offset-4 hover:text-gold"
                  >
                    Compare Hourly · Weekly · Monthly · Yearly Plans
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* SECTION E: CROSS-DOMAIN RELATED WORK */}
          {relatedCases.length > 0 && (
            <div className="mt-16 border-t border-navy/12 pt-12">
              <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                    Cross-Discipline Continuity
                  </p>
                  <h2 className="mt-1.5 text-2xl font-semibold text-navy">
                    Explore Related Work Across Other Domains
                  </h2>
                </div>
                <Link
                  href="/work"
                  className="font-mono text-xs font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-deep"
                >
                  View All 6 Case Studies →
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {relatedCases.map((rel) => (
                  <article
                    key={rel.slug}
                    className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-navy/12 bg-white p-5 shadow-xs transition-all hover:border-gold hover:shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <Link
                          href={getDomainHrefForCategory(rel.category)}
                          className="rounded-full bg-surface px-3 py-1 font-mono text-[10px] font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
                        >
                          {rel.category}
                        </Link>
                        <span className="rounded-full bg-gold px-2.5 py-0.5 font-mono text-[10px] font-bold text-navy">
                          {rel.regionCode}
                        </span>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold text-navy transition-colors group-hover:text-gold-deep">
                        <Link href={`/work/${rel.slug}`}>{rel.title}</Link>
                      </h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-ink-muted">
                        {rel.summary}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-navy/10 pt-3.5 text-xs">
                      <span className="font-mono text-ink-muted">{rel.region}</span>
                      <Link
                        href={`/work/${rel.slug}`}
                        className="inline-flex items-center gap-1 font-semibold text-navy hover:text-gold-deep"
                      >
                        <span>Read Case</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
