"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  GRAPHIC_DESIGN_CATEGORIES,
  TOTAL_GRAPHIC_CATEGORIES,
  TOTAL_GRAPHIC_SERVICES,
} from "@/data/graphicDesignCatalog";
import { CASE_STUDIES } from "@/data/portfolio";
import { GraphicCategoryIcon } from "@/components/ui/GraphicCategoryIcon";
import { WorkDomainNav } from "@/components/sections/WorkDomainNav";
import { GraphicDesignPricingBand } from "@/components/sections/GraphicDesignPricingBand";
import { cn } from "@/lib/utils";

type HubArtboardTab = "identity" | "packaging" | "editorial" | "motion";

const HUB_TABS: { id: HubArtboardTab; label: string }[] = [
  { id: "identity", label: "Identity" },
  { id: "packaging", label: "Packaging" },
  { id: "editorial", label: "Editorial" },
  { id: "motion", label: "Motion" },
];

export function GraphicDesignHub() {
  const [activeTab, setActiveTab] = useState<HubArtboardTab>("identity");
  const graphicCases = CASE_STUDIES.filter((c) => c.category === "Graphic Design").slice(0, 6);

  return (
    <div className="bg-canvas text-navy">
      {/* 1. CALM SWISS-EDITORIAL ROYAL NAVY HERO */}
      <section className="border-b-2 border-gold bg-navy bg-navy-blueprint py-14 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Copy & Ledger */}
            <div className="lg:col-span-6">
              <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em]">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-1.5 text-white/70 transition-colors hover:text-gold"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>All Work</span>
                </Link>
                <span className="text-white/25" aria-hidden="true">
                  /
                </span>
                <span className="font-semibold text-gold">GRAPHIC DESIGN</span>
              </div>

              <h1 className="mt-5 text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[52px]">
                Graphic Design Crafted for{" "}
                <span className="font-editorial text-gold">Global Brands.</span>
              </h1>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75">
                Full-spectrum creative design uniting Brand Identity, Packaging Die-Lines, Print,
                Pitch Decks, E-commerce Visuals, Motion Graphics, and Retouching.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link
                  href="/contact?service=graphic-design"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gold py-2 pl-5 pr-2 text-xs font-bold text-navy shadow-[0_10px_28px_rgba(245,197,24,0.2)] transition-all hover:bg-gold-bright sm:text-sm"
                >
                  <span>Get a Free Quote</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-gold transition-transform duration-200 group-hover:scale-105">
                    <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" />
                  </span>
                </Link>
                <a
                  href="#categories"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 transition-colors hover:text-gold sm:text-sm"
                >
                  <span>Browse {TOTAL_GRAPHIC_CATEGORIES} Categories</span>
                  <ArrowDown className="h-3.5 w-3.5" />
                </a>
              </div>

              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-white/12 pt-6">
                <div>
                  <dt className="font-mono text-lg font-bold text-gold sm:text-xl">
                    {TOTAL_GRAPHIC_CATEGORIES}
                  </dt>
                  <dd className="mt-1 text-xs text-white/70">Design Categories</dd>
                </div>
                <div>
                  <dt className="font-mono text-lg font-bold text-gold sm:text-xl">
                    {TOTAL_GRAPHIC_SERVICES}
                  </dt>
                  <dd className="mt-1 text-xs text-white/70">Specialized Services</dd>
                </div>
                <div>
                  <dt className="font-mono text-lg font-bold text-gold sm:text-xl">100% IP</dt>
                  <dd className="mt-1 text-xs text-white/70">Native Source Files</dd>
                </div>
              </dl>
            </div>

            {/* Right Interactive 4-Discipline Artboard Showcase */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] border border-gold/45 bg-white p-4 text-navy shadow-[0_28px_70px_rgba(6,16,33,0.45)] sm:p-5">
                <div
                  role="tablist"
                  aria-label="Graphic design studio disciplines"
                  className="mb-4 grid grid-cols-4 gap-1 rounded-xl bg-surface p-1"
                >
                  {HUB_TABS.map((tab) => {
                    const isSelected = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                          "cursor-pointer rounded-lg px-2 py-2 text-center font-mono text-[11px] font-semibold transition-all",
                          isSelected
                            ? "bg-navy text-white shadow-xs"
                            : "text-navy/65 hover:bg-white hover:text-navy"
                        )}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                <div className="overflow-hidden rounded-2xl border border-navy/10 bg-surface/60">
                  <svg
                    viewBox="0 0 420 220"
                    className="h-auto w-full"
                    role="img"
                    aria-label={`Graphic Design atelier artboard: ${activeTab}`}
                  >
                    <defs>
                      <pattern
                        id="gd-hub-grid"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 20 0 L 0 0 0 20"
                          fill="none"
                          stroke="#0A192F"
                          strokeOpacity="0.045"
                          strokeWidth="0.75"
                        />
                      </pattern>
                      <radialGradient id="gd-hub-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#F5C518" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#F5C518" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    <rect x="0" y="0" width="420" height="220" fill="#F8FAFD" />
                    <rect x="0" y="0" width="420" height="220" fill="url(#gd-hub-grid)" />

                    {activeTab === "identity" && (
                      <g>
                        <rect x="18" y="18" width="210" height="184" rx="14" fill="#0A192F" />
                        <circle cx="123" cy="108" r="68" fill="url(#gd-hub-glow)" />
                        <circle
                          cx="123"
                          cy="108"
                          r="48"
                          fill="none"
                          stroke="#FFFFFF"
                          strokeOpacity="0.24"
                        />
                        <circle
                          cx="123"
                          cy="108"
                          r="30"
                          fill="none"
                          stroke="#F5C518"
                          strokeWidth="2"
                        />
                        <circle cx="141" cy="90" r="18" fill="none" stroke="#FFFFFF" strokeWidth="1.4" />
                        <circle cx="141" cy="90" r="4" fill="#F5C518" />
                        <text
                          x="123"
                          y="182"
                          textAnchor="middle"
                          fill="#F5C518"
                          fontSize="8"
                          fontFamily="monospace"
                          fontWeight="700"
                        >
                          φ 1.618 BRAND MARK
                        </text>

                        <rect
                          x="242"
                          y="18"
                          width="160"
                          height="184"
                          rx="14"
                          fill="#FFFFFF"
                          stroke="#0A192F"
                          strokeOpacity="0.1"
                        />
                        <text
                          x="322"
                          y="84"
                          textAnchor="middle"
                          fill="#0A192F"
                          fontSize="28"
                          fontFamily="Georgia, serif"
                          fontStyle="italic"
                          fontWeight="600"
                        >
                          Atelier
                        </text>
                        <rect x="268" y="114" width="32" height="54" rx="6" fill="#0A192F" />
                        <rect x="306" y="114" width="32" height="54" rx="6" fill="#F5C518" />
                        <rect
                          x="344"
                          y="114"
                          width="32"
                          height="54"
                          rx="6"
                          fill="#FFFFFF"
                          stroke="#0A192F"
                          strokeOpacity="0.16"
                        />
                        <text x="322" y="186" textAnchor="middle" fill="#475569" fontSize="7" fontFamily="monospace">
                          PMS · sRGB · CMYK
                        </text>
                      </g>
                    )}

                    {activeTab === "packaging" && (
                      <g>
                        <rect
                          x="62"
                          y="32"
                          width="296"
                          height="156"
                          rx="6"
                          fill="none"
                          stroke="#9A6F00"
                          strokeDasharray="4 3"
                        />
                        <rect
                          x="82"
                          y="56"
                          width="64"
                          height="108"
                          fill="#FFFFFF"
                          stroke="#0A192F"
                          strokeWidth="1.2"
                        />
                        <rect
                          x="146"
                          y="56"
                          width="104"
                          height="108"
                          fill="#0A192F"
                          stroke="#0A192F"
                          strokeWidth="1.2"
                        />
                        <path
                          d="M146 56 V38 L156 32 H240 L250 38 V56"
                          fill="#FFFFFF"
                          stroke="#0A192F"
                          strokeWidth="1.2"
                        />
                        <path
                          d="M146 164 V182 L156 188 H240 L250 182 V164"
                          fill="#FFFFFF"
                          stroke="#0A192F"
                          strokeWidth="1.2"
                        />
                        <rect
                          x="250"
                          y="56"
                          width="88"
                          height="108"
                          fill="#FFFFFF"
                          stroke="#0A192F"
                          strokeWidth="1.2"
                        />
                        <circle cx="198" cy="96" r="14" stroke="#F5C518" strokeWidth="2.2" />
                        <circle cx="198" cy="96" r="4" fill="#F5C518" />
                        <text
                          x="198"
                          y="132"
                          textAnchor="middle"
                          fill="#FFFFFF"
                          fontSize="9"
                          fontFamily="Georgia, serif"
                          fontStyle="italic"
                        >
                          PDF/X-4 Die-Line
                        </text>
                        <rect x="264" y="126" width="60" height="24" rx="2" fill="#F4F7FB" stroke="#0A192F" strokeOpacity="0.16" />
                        <g fill="#0A192F">
                          <rect x="272" y="131" width="2" height="14" />
                          <rect x="276" y="131" width="1" height="14" />
                          <rect x="280" y="131" width="3" height="14" />
                          <rect x="286" y="131" width="1.5" height="14" />
                          <rect x="291" y="131" width="2.5" height="14" />
                          <rect x="297" y="131" width="1" height="14" />
                          <rect x="301" y="131" width="2.5" height="14" />
                          <rect x="307" y="131" width="1.5" height="14" />
                          <rect x="312" y="131" width="2" height="14" />
                        </g>
                      </g>
                    )}

                    {activeTab === "editorial" && (
                      <g>
                        <rect
                          x="36"
                          y="26"
                          width="172"
                          height="168"
                          rx="10"
                          fill="#FFFFFF"
                          stroke="#0A192F"
                          strokeOpacity="0.14"
                        />
                        <rect
                          x="212"
                          y="26"
                          width="172"
                          height="168"
                          rx="10"
                          fill="#FFFFFF"
                          stroke="#0A192F"
                          strokeOpacity="0.14"
                        />
                        <line x1="210" y1="26" x2="210" y2="194" stroke="#9A6F00" strokeOpacity="0.45" />
                        <text x="54" y="64" fill="#9A6F00" fontSize="8" fontFamily="monospace" fontWeight="700">
                          SWISS SPREAD
                        </text>
                        <text x="54" y="102" fill="#0A192F" fontSize="22" fontFamily="Georgia, serif" fontStyle="italic">
                          Annual Report
                        </text>
                        <rect x="54" y="122" width="128" height="4" rx="2" fill="#0A192F" fillOpacity="0.2" />
                        <rect x="54" y="132" width="110" height="4" rx="2" fill="#0A192F" fillOpacity="0.14" />
                        <rect x="54" y="142" width="120" height="4" rx="2" fill="#0A192F" fillOpacity="0.14" />

                        <rect x="232" y="48" width="132" height="58" rx="8" fill="#0A192F" />
                        <path d="M248 92 L276 74 L302 82 L346 58" stroke="#F5C518" strokeWidth="2.5" fill="none" />
                        <rect x="232" y="122" width="132" height="5" rx="2" fill="#0A192F" fillOpacity="0.16" />
                        <rect x="232" y="136" width="102" height="5" rx="2" fill="#9A6F00" fillOpacity="0.4" />
                        <rect x="232" y="150" width="124" height="5" rx="2" fill="#0A192F" fillOpacity="0.16" />
                        <text x="232" y="176" fill="#475569" fontSize="7" fontFamily="monospace">
                          BASELINE GRID · PDF/UA
                        </text>
                      </g>
                    )}

                    {activeTab === "motion" && (
                      <g>
                        <rect x="34" y="24" width="352" height="172" rx="14" fill="#0A192F" />
                        {/* Playframe */}
                        <rect
                          x="56"
                          y="42"
                          width="308"
                          height="104"
                          rx="8"
                          fill="#132A4A"
                          stroke="#FFFFFF"
                          strokeOpacity="0.14"
                        />
                        <path
                          d="M84 120 C140 50, 220 130, 324 62"
                          stroke="#F5C518"
                          strokeWidth="2.5"
                          fill="none"
                        />
                        <circle cx="84" cy="120" r="4.5" fill="#F5C518" />
                        <circle cx="324" cy="62" r="4.5" fill="#FFFFFF" />
                        <text x="72" y="64" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="700">
                          60FPS MOTION CURVE · LOTTIE JSON
                        </text>

                        {/* Timeline Scrubber Track */}
                        <rect x="56" y="160" width="308" height="16" rx="8" fill="#081222" />
                        <rect x="58" y="162" width="180" height="12" rx="6" fill="#F5C518" />
                        <circle cx="238" cy="168" r="7" fill="#FFFFFF" />
                      </g>
                    )}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BODY: DOMAIN NAV + 10 CATEGORIES DIRECTORY + CASE STUDIES + PRICING */}
      <section className="bg-surface/65 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <WorkDomainNav />

          {/* 10 Categories & 59 Services Directory */}
          <div id="categories" className="scroll-mt-24">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                COMPLETE 3-LEVEL ARCHITECTURE // {TOTAL_GRAPHIC_CATEGORIES} CATEGORIES ·{" "}
                {TOTAL_GRAPHIC_SERVICES} SERVICES
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-navy sm:text-4xl">
                Every Creative Discipline Under{" "}
                <span className="font-editorial text-gold-deep">One Studio Roof.</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                Select any of the 10 specialized graphic design categories or click directly into an
                individual service specification page below.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {GRAPHIC_DESIGN_CATEGORIES.map((cat) => (
                <article
                  key={cat.slug}
                  className="flex flex-col justify-between rounded-[24px] border border-navy/10 bg-white p-6 shadow-[0_8px_28px_rgba(10,25,47,0.04)] transition-all hover:border-gold hover:shadow-[0_16px_42px_rgba(10,25,47,0.08)]"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-gold shadow-xs">
                          <GraphicCategoryIcon iconKey={cat.iconKey} className="h-4.5 w-4.5" />
                        </span>
                        <div>
                          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-gold-deep">
                            CATEGORY {cat.number} · {cat.services.length} SERVICES
                          </div>
                          <h3 className="text-lg font-bold tracking-tight text-navy">
                            <Link
                              href={`/graphic-design/${cat.slug}`}
                              className="transition-colors hover:text-gold-deep"
                            >
                              {cat.fullTitle}
                            </Link>
                          </h3>
                        </div>
                      </div>

                      <Link
                        href={`/graphic-design/${cat.slug}`}
                        aria-label={`Open ${cat.fullTitle}`}
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-navy/12 text-navy transition-colors hover:border-gold hover:bg-navy hover:text-gold"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-ink-muted sm:text-[13px]">
                      {cat.heroSummary}
                    </p>

                    {/* Individual Level-3 Service Links */}
                    <div className="mt-5 border-t border-navy/8 pt-4">
                      <div className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-navy/60">
                        Included Services
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.services.map((srv) => (
                          <Link
                            key={srv.slug}
                            href={`/graphic-design/${cat.slug}/${srv.slug}`}
                            className="inline-flex items-center gap-1 rounded-full border border-navy/10 bg-surface px-3 py-1 text-[11px] font-medium text-navy transition-colors hover:border-gold hover:bg-navy hover:text-white"
                          >
                            <span>{srv.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-navy/8 pt-3.5 text-xs">
                    <span className="font-mono text-[10px] text-ink-muted">
                      {cat.designTerms.slice(0, 2).join(" · ")}
                    </span>
                    <Link
                      href={`/graphic-design/${cat.slug}`}
                      className="inline-flex items-center gap-1 font-semibold text-navy hover:text-gold-deep"
                    >
                      <span>Explore Category</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Featured Graphic Design Case Studies */}
          {graphicCases.length > 0 && (
            <div className="mt-20">
              <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                    FEATURED GRAPHIC DESIGN CASE STUDIES
                  </p>
                  <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                    Selected Brand, Packaging &amp; Editorial Launches
                  </h2>
                </div>
                <Link
                  href="/work"
                  className="font-mono text-xs font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-deep"
                >
                  View Full Portfolio →
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {graphicCases.map((study) => (
                  <article
                    key={study.slug}
                    className="group flex flex-col justify-between overflow-hidden rounded-[22px] border border-navy/12 bg-white shadow-xs transition-all hover:border-gold hover:shadow-lg"
                  >
                    <Link
                      href={`/work/${study.slug}`}
                      className="relative block aspect-[16/10] overflow-hidden bg-navy"
                    >
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute left-3 top-3 rounded-full bg-gold px-2.5 py-0.5 font-mono text-[10px] font-bold text-navy">
                        {study.regionCode} · {study.year}
                      </div>
                    </Link>
                    <div className="flex flex-1 flex-col justify-between p-5">
                      <div>
                        <h3 className="text-base font-semibold leading-snug text-navy group-hover:text-gold-deep transition-colors">
                          <Link href={`/work/${study.slug}`}>{study.title}</Link>
                        </h3>
                        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-ink-muted">
                          {study.summary}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-navy/10 pt-3 text-xs">
                        <span className="font-mono font-bold text-navy">
                          {study.metrics[0]?.value}
                        </span>
                        <Link
                          href={`/work/${study.slug}`}
                          className="inline-flex items-center gap-1 font-semibold text-navy hover:text-gold-deep"
                        >
                          <span>Read Case</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Engagement & Multi-Currency Pricing CTA */}
          <div className="mt-20">
            <GraphicDesignPricingBand />
          </div>
        </div>
      </section>
    </div>
  );
}
