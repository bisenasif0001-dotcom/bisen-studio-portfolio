"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  TOTAL_WEBSITE_CATEGORIES,
  TOTAL_WEBSITE_SERVICES,
  WEBSITE_CATEGORIES,
} from "@/data/websiteCatalog";
import { CASE_STUDIES, type CaseStudy } from "@/data/portfolio";
import { WebsiteCategoryIcon } from "@/components/ui/WebsiteCategoryIcon";
import { WorkDomainNav } from "@/components/sections/WorkDomainNav";
import { WebsitePricingBand } from "@/components/sections/WebsitePricingBand";
import { cn } from "@/lib/utils";

type WebsiteHubTab = "design" | "code" | "ecommerce" | "seo";

const HUB_TABS: { id: WebsiteHubTab; label: string }[] = [
  { id: "design", label: "Design" },
  { id: "code", label: "Next.js Code" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "seo", label: "SEO 99+" },
];

const FEATURED_WEB_CASE_SLUGS = [
  "photobooth-supplier-2026",
  "creative-fasteners-usa-v4",
  "danielle-rtb-media-website-2026",
  "pawmedal-website-v3",
  "boston-lounge-decor-wordpress-website",
  "fwsi-live-website",
];

export function WebsiteHub() {
  const [activeTab, setActiveTab] = useState<WebsiteHubTab>("design");
  const webCases = FEATURED_WEB_CASE_SLUGS.map((slug) =>
    CASE_STUDIES.find((c) => c.slug === slug)
  ).filter((c): c is CaseStudy => Boolean(c));

  return (
    <div className="bg-canvas text-navy">
      {/* 1. CALM SWISS-EDITORIAL ROYAL NAVY HERO */}
      <section className="border-b-2 border-gold bg-navy bg-navy-blueprint py-14 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Copy & Hairline Ledger */}
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
                <span className="font-semibold text-gold">WEBSITE DESIGN &amp; DEVELOPMENT</span>
              </div>

              <h1 className="mt-5 text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[52px]">
                Websites Engineered for{" "}
                <span className="font-editorial text-gold">Speed &amp; Growth.</span>
              </h1>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75">
                Custom Next.js builds, Shopify stores, WordPress &amp; Webflow platforms, SaaS
                portals, technical SEO, and ongoing maintenance built for US, UK, Canada, Europe,
                and Australia.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link
                  href="/contact?service=website"
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
                  <span>Browse {TOTAL_WEBSITE_CATEGORIES} Categories</span>
                  <ArrowDown className="h-3.5 w-3.5" />
                </a>
              </div>

              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-white/12 pt-6">
                <div>
                  <dt className="font-mono text-lg font-bold text-gold sm:text-xl">
                    {TOTAL_WEBSITE_CATEGORIES}
                  </dt>
                  <dd className="mt-1 text-xs text-white/70">Main Categories</dd>
                </div>
                <div>
                  <dt className="font-mono text-lg font-bold text-gold sm:text-xl">
                    {TOTAL_WEBSITE_SERVICES}
                  </dt>
                  <dd className="mt-1 text-xs text-white/70">Specialized Services</dd>
                </div>
                <div>
                  <dt className="font-mono text-lg font-bold text-gold sm:text-xl">99+ Score</dt>
                  <dd className="mt-1 text-xs text-white/70">Core Web Vitals</dd>
                </div>
              </dl>
            </div>

            {/* Right Interactive 4-Discipline Web Artboard Showcase */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] border border-gold/45 bg-white p-4 text-navy shadow-[0_28px_70px_rgba(6,16,33,0.45)] sm:p-5">
                <div
                  role="tablist"
                  aria-label="Website design and development disciplines"
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
                    aria-label={`Website Engineering artboard: ${activeTab}`}
                  >
                    <defs>
                      <pattern
                        id="wd-hub-grid"
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
                      <radialGradient id="wd-hub-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#F5C518" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#F5C518" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    <rect x="0" y="0" width="420" height="220" fill="#F8FAFD" />
                    <rect x="0" y="0" width="420" height="220" fill="url(#wd-hub-grid)" />

                    {activeTab === "design" && (
                      <g>
                        <rect
                          x="22"
                          y="22"
                          width="266"
                          height="176"
                          rx="14"
                          fill="#FFFFFF"
                          stroke="#0A192F"
                          strokeOpacity="0.14"
                        />
                        <circle cx="38" cy="37" r="3" fill="#0A192F" fillOpacity="0.3" />
                        <circle cx="48" cy="37" r="3" fill="#F5C518" />
                        <circle cx="58" cy="37" r="3" fill="#0A192F" fillOpacity="0.18" />
                        <line x1="22" y1="50" x2="288" y2="50" stroke="#0A192F" strokeOpacity="0.08" />

                        <rect x="38" y="64" width="128" height="10" rx="5" fill="#0A192F" />
                        <rect x="38" y="80" width="96" height="6" rx="3" fill="#0A192F" fillOpacity="0.22" />
                        <rect x="38" y="96" width="64" height="22" rx="11" fill="#F5C518" />
                        <rect x="180" y="64" width="92" height="54" rx="8" fill="#0A192F" />
                        <path d="M192 104 L214 86 L234 94 L260 74" stroke="#F5C518" strokeWidth="2.2" fill="none" />
                        <rect x="38" y="132" width="72" height="50" rx="8" fill="#F4F7FB" />
                        <rect x="119" y="132" width="72" height="50" rx="8" fill="#F4F7FB" />
                        <rect x="200" y="132" width="72" height="50" rx="8" fill="#F4F7FB" />

                        <rect x="304" y="28" width="94" height="170" rx="16" fill="#0A192F" />
                        <rect x="312" y="44" width="78" height="138" rx="8" fill="#122645" />
                        <rect x="322" y="56" width="58" height="8" rx="4" fill="#FFFFFF" />
                        <rect x="322" y="70" width="44" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.4" />
                        <rect x="322" y="86" width="58" height="20" rx="10" fill="#F5C518" />
                        <text x="351" y="166" textAnchor="middle" fill="#F5C518" fontSize="7" fontFamily="monospace" fontWeight="700">
                          FIGMA TO CODE
                        </text>
                      </g>
                    )}

                    {activeTab === "code" && (
                      <g>
                        <rect x="24" y="20" width="372" height="180" rx="14" fill="#0A192F" />
                        <circle cx="310" cy="110" r="68" fill="url(#wd-hub-glow)" />
                        <text x="44" y="46" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">
                          NEXT.JS 15 // REACT 19 // STRICT TS
                        </text>
                        <line x1="44" y1="58" x2="376" y2="58" stroke="#FFFFFF" strokeOpacity="0.1" />
                        <text x="44" y="84" fill="#F5C518" fontSize="9.5" fontFamily="monospace">
                          export const runtime = &quot;edge&quot;;
                        </text>
                        <text x="44" y="106" fill="#FFFFFF" fontSize="9.5" fontFamily="monospace">
                          const site = await shipProduction(&#123;
                        </text>
                        <text x="60" y="126" fill="#FFFFFF" fillOpacity="0.8" fontSize="9.5" fontFamily="monospace">
                          lcp: &quot;0.4s&quot;, lighthouse: 100, ip: &quot;100%&quot;
                        </text>
                        <text x="44" y="146" fill="#FFFFFF" fontSize="9.5" fontFamily="monospace">
                          &#125;);
                        </text>
                        <rect x="44" y="162" width="110" height="22" rx="11" fill="#F5C518" />
                        <text x="99" y="176" textAnchor="middle" fill="#0A192F" fontSize="7.5" fontFamily="monospace" fontWeight="700">
                          ZERO BLOAT CODE
                        </text>
                      </g>
                    )}

                    {activeTab === "ecommerce" && (
                      <g>
                        <rect
                          x="22"
                          y="22"
                          width="206"
                          height="176"
                          rx="14"
                          fill="#FFFFFF"
                          stroke="#0A192F"
                          strokeOpacity="0.14"
                        />
                        <rect x="36" y="36" width="84" height="108" rx="10" fill="#0A192F" />
                        <circle cx="78" cy="82" r="18" stroke="#F5C518" strokeWidth="2" />
                        <text x="134" y="54" fill="#9A6F00" fontSize="7" fontFamily="monospace" fontWeight="700">
                          SHOPIFY / WOO
                        </text>
                        <text x="134" y="76" fill="#0A192F" fontSize="14" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="700">
                          Flagship PDP
                        </text>
                        <text x="134" y="96" fill="#0A192F" fontSize="11" fontFamily="monospace" fontWeight="700">
                          $148.00
                        </text>
                        <rect x="134" y="112" width="78" height="22" rx="11" fill="#0A192F" />
                        <text x="173" y="126" textAnchor="middle" fill="#F5C518" fontSize="7" fontFamily="monospace" fontWeight="700">
                          ADD TO BAG
                        </text>

                        <rect x="242" y="22" width="156" height="176" rx="14" fill="#0A192F" />
                        <text x="258" y="46" fill="#FFFFFF" fontSize="8.5" fontFamily="monospace" fontWeight="700">
                          SLIDE CART (2)
                        </text>
                        <rect x="258" y="58" width="124" height="6" rx="3" fill="#F5C518" />
                        <rect x="258" y="76" width="124" height="36" rx="8" fill="#122645" />
                        <rect x="258" y="118" width="124" height="28" rx="8" fill="#122645" stroke="#F5C518" strokeOpacity="0.4" />
                        <rect x="258" y="156" width="124" height="26" rx="13" fill="#F5C518" />
                        <text x="320" y="172.5" textAnchor="middle" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">
                          EXPRESS PAY ↗
                        </text>
                      </g>
                    )}

                    {activeTab === "seo" && (
                      <g>
                        <rect x="24" y="22" width="372" height="176" rx="14" fill="#0A192F" />
                        {[
                          { cx: 92, score: "99", label: "PERFORMANCE" },
                          { cx: 210, score: "100", label: "ACCESSIBILITY" },
                          { cx: 328, score: "100", label: "TECH SEO" },
                        ].map((g) => (
                          <g key={g.label}>
                            <circle
                              cx={g.cx}
                              cy="90"
                              r="34"
                              fill="#122645"
                              stroke="#FFFFFF"
                              strokeOpacity="0.14"
                              strokeWidth="4"
                            />
                            <circle
                              cx={g.cx}
                              cy="90"
                              r="34"
                              fill="none"
                              stroke="#F5C518"
                              strokeWidth="4"
                              strokeDasharray="205 220"
                            />
                            <text
                              x={g.cx}
                              y="95"
                              textAnchor="middle"
                              fill="#FFFFFF"
                              fontSize="16"
                              fontFamily="monospace"
                              fontWeight="700"
                            >
                              {g.score}
                            </text>
                            <text
                              x={g.cx}
                              y="144"
                              textAnchor="middle"
                              fill="#F5C518"
                              fontSize="7"
                              fontFamily="monospace"
                              fontWeight="700"
                            >
                              {g.label}
                            </text>
                          </g>
                        ))}
                        <text x="210" y="176" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.72" fontSize="7" fontFamily="monospace">
                          LCP 0.4S · CLS 0.00 · JSON-LD · WCAG 2.1 AA
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

      {/* 2. BODY: DOMAIN NAV + 10 CATEGORIES DIRECTORY + CASE STUDIES + PRICING */}
      <section className="bg-surface/65 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <WorkDomainNav />

          {/* Featured Web Case Studies (Top of Website Section) */}
          {webCases.length > 0 && (
            <div className="mb-16">
              <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                    FEATURED WEB &amp; PLATFORM CASE STUDIES
                  </p>
                  <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                    Live Launches Built for US, UK &amp; Australian Leaders
                  </h2>
                </div>
                <Link
                  href="/work"
                  className="font-mono text-xs font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-deep"
                >
                  View Web Projects →
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {webCases.map((study) => (
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
                        <h3 className="text-base font-semibold leading-snug text-navy transition-colors group-hover:text-gold-deep">
                          <Link href={`/work/${study.slug}`}>{study.title}</Link>
                        </h3>
                        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-ink-muted">
                          {study.summary}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-navy/10 pt-3 text-xs">
                        {study.liveUrl ? (
                          <a
                            href={study.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-mono font-bold text-gold-deep hover:text-navy"
                          >
                            <span>Live Site</span>
                            <ArrowUpRight className="h-3 w-3" />
                          </a>
                        ) : (
                          <span className="font-mono font-bold text-navy">
                            {study.metrics[0]?.value}
                          </span>
                        )}
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

          {/* 10 Categories & 60 Services Directory */}
          <div id="categories" className="scroll-mt-24">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                COMPLETE 3-LEVEL ARCHITECTURE // {TOTAL_WEBSITE_CATEGORIES} CATEGORIES ·{" "}
                {TOTAL_WEBSITE_SERVICES} SERVICES
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-navy sm:text-4xl">
                Design, Full-Stack Code, Commerce &amp; SEO —{" "}
                <span className="font-editorial text-gold-deep">Built to Grow.</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                Explore any of the 10 specialized Website Design &amp; Development categories or jump
                directly into any individual service page below.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {WEBSITE_CATEGORIES.map((cat) => (
                <article
                  key={cat.slug}
                  className="flex flex-col justify-between rounded-[24px] border border-navy/10 bg-white p-6 shadow-[0_8px_28px_rgba(10,25,47,0.04)] transition-all hover:border-gold hover:shadow-[0_16px_42px_rgba(10,25,47,0.08)]"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-gold shadow-xs">
                          <WebsiteCategoryIcon iconKey={cat.iconKey} className="h-4.5 w-4.5" />
                        </span>
                        <div>
                          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-gold-deep">
                            CATEGORY {cat.number} · {cat.services.length} SERVICES
                          </div>
                          <h3 className="text-lg font-bold tracking-tight text-navy">
                            <Link
                              href={`/website/${cat.slug}`}
                              className="transition-colors hover:text-gold-deep"
                            >
                              {cat.fullTitle}
                            </Link>
                          </h3>
                        </div>
                      </div>

                      <Link
                        href={`/website/${cat.slug}`}
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
                            href={`/website/${cat.slug}/${srv.slug}`}
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
                      {cat.techTerms.slice(0, 2).join(" · ")}
                    </span>
                    <Link
                      href={`/website/${cat.slug}`}
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

          {/* Engagement & Multi-Currency Pricing CTA */}
          <div className="mt-20">
            <WebsitePricingBand />
          </div>
        </div>
      </section>
    </div>
  );
}
