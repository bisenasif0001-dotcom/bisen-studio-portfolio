"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Layers,
  Palette,
  PenTool,
} from "lucide-react";
import { CASE_STUDIES, type CaseStudy } from "@/data/portfolio";
import { type WorkDomainConfig, getDomainHrefForCategory } from "@/data/workDomains";
import {
  BRAND_CRAFT_STANDARDS,
  BRAND_DIGITAL_SERVICES,
  BRAND_SERVICE_CATEGORIES,
  type BrandServiceCategory,
  type BrandServiceItem,
} from "@/data/brandDigitalCatalog";
import { WorkDomainNav } from "@/components/sections/WorkDomainNav";
import { cn } from "@/lib/utils";

type BrandArtboardTabId = "logo" | "type" | "tokens" | "wcag";

const BRAND_ARTBOARD_TABS: {
  id: BrandArtboardTabId;
  label: string;
}[] = [
  { id: "logo", label: "Logo Grid" },
  { id: "type", label: "Typography" },
  { id: "tokens", label: "Tokens" },
  { id: "wcag", label: "WCAG" },
];

const BRAND_CATEGORY_ICON_MAP: Record<
  BrandServiceItem["category"],
  React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>
> = {
  "Brand Identity": Compass,
  "UI/UX & Systems": Layers,
  "Visuals & Decks": PenTool,
  "Print & Code Parity": Palette,
};

function getBrandCategoryCount(cat: BrandServiceCategory): number {
  if (cat === "All") return BRAND_DIGITAL_SERVICES.length;
  return BRAND_DIGITAL_SERVICES.filter((item) => item.category === cat).length;
}

interface BrandDigitalShowcaseProps {
  domain: WorkDomainConfig;
}

export function BrandDigitalShowcase({ domain }: BrandDigitalShowcaseProps) {
  const [activeTab, setActiveTab] = useState<BrandArtboardTabId>("logo");
  const [activeCategory, setActiveCategory] = useState<BrandServiceCategory>("All");

  const featuredCases = domain.featuredSlugs
    .map((slug) => CASE_STUDIES.find((c) => c.slug === slug))
    .filter((c): c is CaseStudy => Boolean(c));

  const relatedCases = domain.relatedSlugs
    .map((slug) => CASE_STUDIES.find((c) => c.slug === slug))
    .filter((c): c is CaseStudy => Boolean(c));

  const filteredServices =
    activeCategory === "All"
      ? BRAND_DIGITAL_SERVICES
      : BRAND_DIGITAL_SERVICES.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-canvas text-navy">
      {/* 1. CALM, AIRY SWISS-EDITORIAL HERO */}
      <section className="border-b-2 border-gold bg-navy bg-navy-blueprint py-14 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Clean Copy & Hairline Ledger */}
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
                <span className="font-semibold text-gold">BRAND &amp; DIGITAL</span>
              </div>

              <h1 className="mt-5 text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[52px]">
                Visual Identities &amp; Digital Systems{" "}
                <span className="font-editorial text-gold">Built to Last.</span>
              </h1>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75">
                Bespoke identities, Figma token systems, and WCAG-verified digital products crafted
                with full print-to-screen parity.
              </p>

              {/* Clean Dual Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link
                  href={`/contact?service=${domain.serviceQuery}`}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gold py-2 pl-5 pr-2 text-xs font-bold text-navy shadow-[0_10px_28px_rgba(245,197,24,0.2)] transition-all hover:bg-gold-bright sm:text-sm"
                >
                  <span>Start a Project</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-gold transition-transform duration-200 group-hover:scale-105">
                    <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" />
                  </span>
                </Link>
                <a
                  href="#brand-services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 transition-colors hover:text-gold sm:text-sm"
                >
                  <span>Explore 12 Services</span>
                  <ArrowDown className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Minimal Hairline Metric Ledger */}
              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-white/12 pt-6">
                <div>
                  <dt className="font-mono text-lg font-bold text-gold sm:text-xl">Figma</dt>
                  <dd className="mt-1 text-xs text-white/70">Token Systems</dd>
                </div>
                <div>
                  <dt className="font-mono text-lg font-bold text-gold sm:text-xl">WCAG AA</dt>
                  <dd className="mt-1 text-xs text-white/70">AODA Verified</dd>
                </div>
                <div>
                  <dt className="font-mono text-lg font-bold text-gold sm:text-xl">100% IP</dt>
                  <dd className="mt-1 text-xs text-white/70">Native Vector</dd>
                </div>
              </dl>
            </div>

            {/* Right Clean Gallery Artboard Showcase */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] border border-gold/45 bg-white p-4 text-navy shadow-[0_28px_70px_rgba(6,16,33,0.45)] sm:p-5">
                {/* Clean 4-Tab Pill Tray */}
                <div
                  role="tablist"
                  aria-label="Brand and design system artboard modes"
                  className="mb-4 grid grid-cols-4 gap-1 rounded-xl bg-surface p-1"
                >
                  {BRAND_ARTBOARD_TABS.map((tab) => {
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

                {/* Serene High-Whitespace Vector Artboard */}
                <div className="overflow-hidden rounded-2xl border border-navy/10 bg-surface/60">
                  <svg
                    viewBox="0 0 420 220"
                    className="h-auto w-full"
                    role="img"
                    aria-label={`Interactive brand artboard: ${activeTab}`}
                  >
                    <defs>
                      <pattern
                        id="bd-calm-grid"
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
                      <radialGradient id="bd-calm-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#F5C518" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#F5C518" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    <rect x="0" y="0" width="420" height="220" fill="#F8FAFD" />
                    <rect x="0" y="0" width="420" height="220" fill="url(#bd-calm-grid)" />

                    {/* TAB 1: Logo Grid */}
                    {activeTab === "logo" && (
                      <g>
                        <rect x="18" y="18" width="210" height="184" rx="14" fill="#0A192F" />
                        <circle cx="123" cy="108" r="70" fill="url(#bd-calm-glow)" />

                        <line x1="56" y1="108" x2="190" y2="108" stroke="#FFFFFF" strokeOpacity="0.14" />
                        <line x1="123" y1="41" x2="123" y2="175" stroke="#FFFFFF" strokeOpacity="0.14" />

                        <circle
                          cx="123"
                          cy="108"
                          r="50"
                          fill="none"
                          stroke="#FFFFFF"
                          strokeOpacity="0.24"
                          strokeWidth="1"
                        />
                        <circle
                          cx="123"
                          cy="108"
                          r="31"
                          fill="none"
                          stroke="#F5C518"
                          strokeWidth="2"
                        />
                        <circle
                          cx="142"
                          cy="89"
                          r="19"
                          fill="none"
                          stroke="#FFFFFF"
                          strokeWidth="1.4"
                        />
                        <circle cx="142" cy="89" r="4" fill="#F5C518" />

                        <text
                          x="123"
                          y="182"
                          textAnchor="middle"
                          fill="#F5C518"
                          fontSize="8"
                          fontFamily="monospace"
                          fontWeight="700"
                          letterSpacing="1.2"
                        >
                          φ 1.618 GRID
                        </text>

                        {/* Serene Right Specimen Card */}
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
                          y="78"
                          textAnchor="middle"
                          fill="#0A192F"
                          fontSize="28"
                          fontFamily="Georgia, serif"
                          fontStyle="italic"
                          fontWeight="600"
                        >
                          Atelier
                        </text>
                        <line x1="264" y1="98" x2="380" y2="98" stroke="#0A192F" strokeOpacity="0.08" />

                        {/* 3 Crisp Scale Previews (48 / 24 / 16) */}
                        <rect x="262" y="122" width="44" height="44" rx="11" fill="#0A192F" />
                        <circle cx="284" cy="144" r="11" stroke="#F5C518" strokeWidth="1.8" />
                        <text x="284" y="182" textAnchor="middle" fill="#475569" fontSize="7" fontFamily="monospace">
                          48px
                        </text>

                        <rect x="320" y="132" width="26" height="26" rx="7" fill="#0A192F" />
                        <circle cx="333" cy="145" r="6" stroke="#F5C518" strokeWidth="1.5" />
                        <text x="333" y="182" textAnchor="middle" fill="#475569" fontSize="7" fontFamily="monospace">
                          24px
                        </text>

                        <rect x="360" y="138" width="18" height="18" rx="5" fill="#F5C518" />
                        <circle cx="369" cy="147" r="4" stroke="#0A192F" strokeWidth="1.5" />
                        <text x="369" y="182" textAnchor="middle" fill="#475569" fontSize="7" fontFamily="monospace">
                          16px
                        </text>
                      </g>
                    )}

                    {/* TAB 2: Typography & Dual Color Swatches */}
                    {activeTab === "type" && (
                      <g>
                        <rect
                          x="18"
                          y="18"
                          width="210"
                          height="184"
                          rx="14"
                          fill="#FFFFFF"
                          stroke="#0A192F"
                          strokeOpacity="0.1"
                        />
                        <text
                          x="36"
                          y="98"
                          fill="#0A192F"
                          fontSize="50"
                          fontFamily="Georgia, serif"
                          fontStyle="italic"
                          fontWeight="600"
                        >
                          Aa Bb
                        </text>
                        <line x1="36" y1="114" x2="206" y2="114" stroke="#9A6F00" strokeOpacity="0.35" />
                        <text x="36" y="140" fill="#0A192F" fontSize="11" fontFamily="sans-serif" fontWeight="700">
                          Cormorant · Jakarta
                        </text>
                        <text x="36" y="160" fill="#475569" fontSize="8" fontFamily="monospace">
                          Modular Scale 1.250
                        </text>
                        <text x="36" y="178" fill="#9A6F00" fontSize="7.5" fontFamily="monospace" fontWeight="700">
                          PRINT ↔ SCREEN PARITY
                        </text>

                        <rect x="242" y="18" width="160" height="54" rx="12" fill="#0A192F" />
                        <text x="260" y="42" fill="#FFFFFF" fontSize="9.5" fontFamily="monospace" fontWeight="700">
                          Royal Navy
                        </text>
                        <text x="260" y="57" fill="#F5C518" fontSize="7.5" fontFamily="monospace">
                          #0A192F · PMS 289 C
                        </text>

                        <rect x="242" y="83" width="160" height="54" rx="12" fill="#F5C518" />
                        <text x="260" y="107" fill="#0A192F" fontSize="9.5" fontFamily="monospace" fontWeight="700">
                          Atelier Gold
                        </text>
                        <text x="260" y="122" fill="#0A192F" fontSize="7.5" fontFamily="monospace" fontWeight="600">
                          #F5C518 · PMS 1235 C
                        </text>

                        <rect
                          x="242"
                          y="148"
                          width="160"
                          height="54"
                          rx="12"
                          fill="#FFFFFF"
                          stroke="#0A192F"
                          strokeOpacity="0.14"
                        />
                        <text x="260" y="172" fill="#0A192F" fontSize="9.5" fontFamily="monospace" fontWeight="700">
                          Cotton White
                        </text>
                        <text x="260" y="187" fill="#9A6F00" fontSize="7.5" fontFamily="monospace" fontWeight="700">
                          #FFFFFF · 400 GSM
                        </text>
                      </g>
                    )}

                    {/* TAB 3: Tokens */}
                    {activeTab === "tokens" && (
                      <g>
                        <rect x="18" y="18" width="180" height="184" rx="14" fill="#0A192F" />
                        <rect x="34" y="40" width="148" height="34" rx="8" fill="#132A4A" />
                        <circle cx="48" cy="57" r="5" fill="#F5C518" />
                        <text x="62" y="60" fill="#FFFFFF" fontSize="8" fontFamily="monospace">
                          --space-4: 16px
                        </text>

                        <rect x="34" y="90" width="148" height="34" rx="8" fill="#132A4A" />
                        <circle cx="48" cy="107" r="5" fill="#FFFFFF" />
                        <text x="62" y="110" fill="#FFFFFF" fontSize="8" fontFamily="monospace">
                          --radius-pill: 999px
                        </text>

                        <rect x="34" y="140" width="148" height="34" rx="8" fill="#132A4A" />
                        <circle cx="48" cy="157" r="5" fill="#9A6F00" />
                        <text x="62" y="160" fill="#F5C518" fontSize="8" fontFamily="monospace">
                          8pt Auto-Layout
                        </text>

                        {/* Clean Primary Pill Preview */}
                        <rect
                          x="212"
                          y="18"
                          width="190"
                          height="184"
                          rx="14"
                          fill="#FFFFFF"
                          stroke="#0A192F"
                          strokeOpacity="0.1"
                        />
                        <rect
                          x="234"
                          y="64"
                          width="146"
                          height="40"
                          rx="20"
                          fill="#0A192F"
                        />
                        <text
                          x="292"
                          y="88"
                          textAnchor="middle"
                          fill="#FFFFFF"
                          fontSize="10"
                          fontFamily="sans-serif"
                          fontWeight="600"
                        >
                          Start a Project
                        </text>
                        <circle cx="360" cy="84" r="12" fill="#F5C518" />
                        <path d="M356 88 L364 80 M358 80 H364 V86" stroke="#0A192F" strokeWidth="1.6" fill="none" />

                        {/* Gold Focus Ring Variant */}
                        <rect
                          x="231"
                          y="122"
                          width="152"
                          height="46"
                          rx="23"
                          fill="none"
                          stroke="#F5C518"
                          strokeWidth="2"
                        />
                        <rect x="235" y="126" width="144" height="38" rx="19" fill="#132A4A" />
                        <text
                          x="307"
                          y="149"
                          textAnchor="middle"
                          fill="#F5C518"
                          fontSize="8.5"
                          fontFamily="monospace"
                          fontWeight="700"
                        >
                          Focus Ring · 2px Gold
                        </text>
                      </g>
                    )}

                    {/* TAB 4: WCAG 2.1 AA / AAA */}
                    {activeTab === "wcag" && (
                      <g>
                        <rect x="22" y="22" width="180" height="82" rx="12" fill="#0A192F" />
                        <text x="38" y="54" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" fontWeight="700">
                          White / Navy
                        </text>
                        <text x="38" y="82" fill="#F5C518" fontSize="15" fontFamily="monospace" fontWeight="700">
                          16.9 : 1 AAA
                        </text>

                        <rect
                          x="218"
                          y="22"
                          width="180"
                          height="82"
                          rx="12"
                          fill="#FFFFFF"
                          stroke="#0A192F"
                          strokeOpacity="0.14"
                        />
                        <text x="234" y="54" fill="#0A192F" fontSize="11" fontFamily="sans-serif" fontWeight="700">
                          Navy / Surface
                        </text>
                        <text x="234" y="82" fill="#0A192F" fontSize="15" fontFamily="monospace" fontWeight="700">
                          15.8 : 1 AAA
                        </text>

                        <rect x="22" y="116" width="180" height="82" rx="12" fill="#F5C518" />
                        <text x="38" y="148" fill="#0A192F" fontSize="11" fontFamily="sans-serif" fontWeight="700">
                          Navy / Gold
                        </text>
                        <text x="38" y="176" fill="#0A192F" fontSize="15" fontFamily="monospace" fontWeight="700">
                          11.4 : 1 AAA
                        </text>

                        <rect
                          x="218"
                          y="116"
                          width="180"
                          height="82"
                          rx="12"
                          fill="#FFFFFF"
                          stroke="#9A6F00"
                          strokeOpacity="0.45"
                        />
                        <text x="234" y="148" fill="#9A6F00" fontSize="11" fontFamily="sans-serif" fontWeight="700">
                          Gold-Deep / White
                        </text>
                        <text x="234" y="176" fill="#0A192F" fontSize="15" fontFamily="monospace" fontWeight="700">
                          4.6 : 1 AA
                        </text>
                      </g>
                    )}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXHIBITION BODY */}
      <section className="bg-surface/65 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 6-Route Domain Pill Navigation Dock */}
          <WorkDomainNav />

          {/* SECTION A: CLEAN 12 BRAND & DIGITAL SERVICES IN DESIGN TERMS */}
          <div id="brand-services" className="scroll-mt-24">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                DESIGN DISCIPLINES
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-navy sm:text-4xl">
                12 Brand &amp; Digital Services{" "}
                <span className="font-editorial text-gold-deep">in Design Terms.</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                Every identity, Figma system, and print-to-screen deliverable shipped 100% native.
              </p>
            </div>

            {/* Category Filter Dock */}
            <div
              role="tablist"
              aria-label="Filter brand and digital design services by category"
              className="mt-7 inline-flex flex-wrap items-center gap-1.5 rounded-2xl border border-navy/12 bg-white p-1.5 shadow-[0_6px_22px_rgba(10,25,47,0.05)]"
            >
              {BRAND_SERVICE_CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                const count = getBrandCategoryCount(category);
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

            {/* Clean Breathable 3-Column Card Grid */}
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service) => {
                const Icon = BRAND_CATEGORY_ICON_MAP[service.category];
                return (
                  <article
                    key={service.id}
                    className="group flex flex-col justify-between rounded-[24px] border border-navy/10 bg-white p-6 shadow-[0_8px_28px_rgba(10,25,47,0.04)] transition-all duration-200 hover:border-gold hover:shadow-[0_14px_38px_rgba(10,25,47,0.08)]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold tracking-wider text-gold-deep">
                          {service.code}
                        </span>
                        <Icon className="h-4 w-4 text-navy/45 transition-colors group-hover:text-navy" aria-hidden={true} />
                      </div>

                      <h3 className="mt-4 text-[17px] font-semibold tracking-tight text-navy">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                        {service.summary}
                      </p>

                      {/* 3–4 Crisp Design Term Pills */}
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {service.designTerms.map((term) => (
                          <span
                            key={term}
                            className="rounded-full border border-navy/10 bg-surface px-3 py-1 font-mono text-[10.5px] font-medium text-navy/90"
                          >
                            {term}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-navy/8 pt-4">
                      <span className="font-mono text-[11px] text-ink-muted">
                        {service.nativeFormat}
                      </span>
                      <Link
                        href={`/contact?service=digital-design&topic=${service.id}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-navy transition-colors hover:text-gold-deep"
                      >
                        <span>Inquire</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* SECTION B: FLAGSHIP BRAND & DIGITAL CASE STUDY */}
          <div className="mt-20">
            <div className="mb-7">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                FLAGSHIP CASE STUDY
              </p>
              <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                {featuredCases[0]?.title}
              </h2>
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
                        <p className="mt-1 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
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

          {/* SECTION C: CONSOLIDATED STUDIO STANDARDS & DELIVERABLES BLOCK */}
          <div className="mt-20 rounded-[28px] border-2 border-gold/55 bg-navy bg-navy-blueprint p-7 text-white shadow-[0_24px_60px_rgba(10,25,47,0.2)] sm:p-10">
            <div className="grid gap-10 lg:grid-cols-12">
              {/* Left: 4 Calm Studio Standard Rows */}
              <div className="lg:col-span-7">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  STUDIO STANDARDS
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Precision Across Screen, Figma &amp; Print
                </h2>

                <div className="mt-6">
                  {BRAND_CRAFT_STANDARDS.map((item) => (
                    <div
                      key={item.code}
                      className="flex flex-col gap-1 border-t border-white/12 py-4 first:border-t-0"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-semibold text-white">
                          <span className="mr-2.5 font-mono text-xs font-bold text-gold">
                            {item.code}
                          </span>
                          {item.title}
                        </h3>
                        <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-gold/90">
                          {item.spec}
                        </span>
                      </div>
                      <p className="pl-7 text-xs leading-relaxed text-white/75">{item.rule}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Calm Dark-Inset Deliverables Card */}
              <aside className="lg:col-span-5">
                <div className="flex h-full flex-col justify-between rounded-2xl border border-white/12 bg-navy-deep/85 p-6">
                  <div>
                    <div className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
                      DELIVERABLES &amp; IP OWNERSHIP
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-white">
                      100% Native Source Files Included
                    </h3>

                    <ul className="mt-5 space-y-2.5 text-sm text-white/85">
                      {domain.deliverableChecklist.slice(0, 5).map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 flex flex-col gap-3">
                    <Link
                      href={`/contact?service=${domain.serviceQuery}&package=${domain.recommendedPackage}`}
                      className="group flex w-full items-center justify-between rounded-full bg-gold py-2 pl-5 pr-2 text-xs font-bold text-navy transition-all hover:bg-gold-bright"
                    >
                      <span>Start a Brand &amp; Digital Project</span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-gold transition-transform duration-200 group-hover:scale-105">
                        <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" />
                      </span>
                    </Link>
                    <Link
                      href="/packages"
                      className="text-center font-mono text-[11px] font-medium text-white/70 underline decoration-gold/50 underline-offset-4 hover:text-gold"
                    >
                      Compare Hourly · Weekly · Monthly · Yearly Plans
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>

          {/* SECTION D: CROSS-DOMAIN RELATED WORK */}
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
