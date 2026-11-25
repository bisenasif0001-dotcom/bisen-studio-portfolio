"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  MOBILE_APP_CATEGORIES,
  TOTAL_MOBILE_APP_CATEGORIES,
  TOTAL_MOBILE_APP_SERVICES,
} from "@/data/mobileAppCatalog";
import { CASE_STUDIES, type CaseStudy } from "@/data/portfolio";
import { MobileAppCategoryIcon } from "@/components/ui/MobileAppCategoryIcon";
import { MobileAppPricingBand } from "@/components/sections/MobileAppPricingBand";
import { MobileAppFaqAccordion } from "@/components/sections/MobileAppFaqAccordion";
import { WorkDomainNav } from "@/components/sections/WorkDomainNav";
import { cn } from "@/lib/utils";

type MobileHubTab = "ios" | "cross" | "ai" | "store";

const HUB_TABS: { id: MobileHubTab; label: string }[] = [
  { id: "ios", label: "iOS & Swift" },
  { id: "cross", label: "Flutter / RN" },
  { id: "ai", label: "AI Mobile" },
  { id: "store", label: "App Store 4.9★" },
];

export function MobileAppHub() {
  const [activeTab, setActiveTab] = useState<MobileHubTab>("ios");

  const mobileCases = [
    "raj-personal-expenses-tracking-app-v2",
    "edunuts-academy-mobile-app",
    "alabak-courier-mobile-app",
  ]
    .map((slug) => CASE_STUDIES.find((c) => c.slug === slug))
    .filter((c): c is CaseStudy => Boolean(c));

  return (
    <div className="bg-canvas text-navy">
      {/* 1. ROYAL NAVY HERO SECTION WITH INTERACTIVE MOBILE ARTBOARD */}
      <section className="border-b-2 border-gold bg-navy bg-navy-blueprint py-14 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Copy, Actions & Metrics */}
            <div className="lg:col-span-6">
              <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-1.5 text-white/75 transition-colors hover:text-gold"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>ALL WORK</span>
                </Link>
                <span aria-hidden="true" className="text-white/35">
                  /
                </span>
                <span>MOBILE APP DEVELOPMENT</span>
              </div>

              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
                Mobile Apps Engineered for{" "}
                <span className="font-editorial text-gold">Growth.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                Native iOS (SwiftUI) and Android (Kotlin), Flutter &amp; React Native
                cross-platform apps, AI-powered voice/vision workflows, enterprise mobile CRM, and
                turnkey App Store &amp; Google Play launches for US, UK, Canada, Europe, and
                Australia.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?service=mobile-app"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gold py-2 pl-6 pr-2 text-sm font-bold text-navy shadow-[0_12px_32px_rgba(245,197,24,0.22)] transition-all hover:bg-gold-bright"
                >
                  <span>Get a Free Quote</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-gold transition-transform duration-200 group-hover:scale-105">
                    <ArrowUpRight className="h-4 w-4 stroke-[2.25]" />
                  </span>
                </Link>
                <a
                  href="#categories"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-navy-mid/80 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold"
                >
                  <span>Browse 10 Categories</span>
                  <ArrowDownRight className="h-4 w-4 text-gold" />
                </a>
              </div>

              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-white/12 pt-6">
                <div>
                  <dt className="font-mono text-lg font-bold text-gold sm:text-2xl">
                    {TOTAL_MOBILE_APP_CATEGORIES}
                  </dt>
                  <dd className="mt-0.5 text-xs text-white/70">Main Categories</dd>
                </div>
                <div>
                  <dt className="font-mono text-lg font-bold text-gold sm:text-2xl">
                    {TOTAL_MOBILE_APP_SERVICES}
                  </dt>
                  <dd className="mt-0.5 text-xs text-white/70">Specialized Services</dd>
                </div>
                <div>
                  <dt className="font-mono text-lg font-bold text-gold sm:text-2xl">
                    60–120fps
                  </dt>
                  <dd className="mt-0.5 text-xs text-white/70">Native &amp; Cross Feel</dd>
                </div>
              </dl>
            </div>

            {/* Right Interactive 4-Tab Mobile Engineering Artboard */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] border border-gold/45 bg-white p-4 text-navy shadow-[0_28px_70px_rgba(6,16,33,0.45)] sm:p-5">
                <div
                  role="tablist"
                  aria-label="Mobile app engineering disciplines"
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
                          "cursor-pointer rounded-lg px-2 py-2 text-center font-mono text-[11px] font-semibold transition-colors duration-100",
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
                    aria-label={`Mobile App Engineering artboard: ${activeTab}`}
                  >
                    <defs>
                      <pattern
                        id="mob-hub-grid"
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
                      <radialGradient id="mob-hub-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#F5C518" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#F5C518" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <rect width="420" height="220" fill="url(#mob-hub-grid)" />

                    {activeTab === "ios" && (
                      <g>
                        <rect x="44" y="20" width="332" height="180" rx="14" fill="#FFFFFF" stroke="#0A192F" strokeOpacity="0.12" />
                        <rect x="74" y="34" width="96" height="152" rx="20" fill="#0A192F" stroke="#F5C518" strokeWidth="1.4" />
                        <rect x="104" y="42" width="36" height="8" rx="4" fill="#122645" />
                        <rect x="86" y="62" width="72" height="44" rx="8" fill="#122645" />
                        <text x="95" y="80" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">SWIFTUI 6</text>
                        <text x="95" y="95" fill="#FFFFFF" fontSize="9.5" fontFamily="monospace" fontWeight="700">120Hz Native</text>
                        <rect x="86" y="116" width="72" height="24" rx="8" fill="#F5C518" />
                        <text x="96" y="131" fill="#0A192F" fontSize="7.5" fontFamily="monospace" fontWeight="700">FACE ID PAY</text>
                        <rect x="188" y="40" width="166" height="140" rx="12" fill="#F4F7FB" stroke="#0A192F" strokeOpacity="0.1" />
                        <text x="204" y="60" fill="#9A6F00" fontSize="8" fontFamily="monospace" fontWeight="700">APPLE HIG + SWIFT 6</text>
                        <rect x="204" y="74" width="134" height="26" rx="6" fill="#FFFFFF" />
                        <text x="214" y="91" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">SwiftData Offline Engine</text>
                        <rect x="204" y="108" width="134" height="26" rx="6" fill="#FFFFFF" />
                        <text x="214" y="125" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">WidgetKit &amp; Live Activity</text>
                        <rect x="204" y="142" width="134" height="24" rx="12" fill="#0A192F" />
                        <text x="220" y="157" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">99.9% CRASH-FREE IPA</text>
                      </g>
                    )}

                    {activeTab === "cross" && (
                      <g>
                        <rect x="34" y="18" width="352" height="184" rx="14" fill="#0A192F" />
                        <circle cx="210" cy="110" r="85" fill="url(#mob-hub-glow)" />
                        <text x="58" y="48" fill="#F5C518" fontSize="8.5" fontFamily="monospace" fontWeight="700">
                          FLUTTER 3 &amp; REACT NATIVE // 1 REPO · 2 STORES
                        </text>
                        <text x="58" y="76" fill="#F5C518" fontSize="9.5" fontFamily="monospace">
                          export const targets = [&quot;iOS IPA&quot;, &quot;Android AAB&quot;];
                        </text>
                        <text x="58" y="96" fill="#FFFFFF" fontSize="9.5" fontFamily="monospace">
                          const app = await shipDualStore(&#123;
                        </text>
                        <text x="72" y="114" fill="#FFFFFF" fillOpacity="0.85" fontSize="9.5" fontFamily="monospace">
                          fps: &quot;60/120Hz&quot;, sharedTypes: &quot;100%&quot;, ip: &quot;CLIENT&quot;
                        </text>
                        <text x="58" y="132" fill="#FFFFFF" fontSize="9.5" fontFamily="monospace">
                          &#125;);
                        </text>
                        <rect x="58" y="150" width="150" height="24" rx="12" fill="#F5C518" />
                        <text x="76" y="165" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">
                          4–6 WEEK BETA LAUNCH
                        </text>
                        <rect x="218" y="150" width="144" height="24" rx="12" fill="#122645" stroke="#F5C518" strokeOpacity="0.4" />
                        <text x="234" y="165" fill="#FFFFFF" fontSize="8" fontFamily="monospace">
                          EAS OTA + RIVERPOD
                        </text>
                      </g>
                    )}

                    {activeTab === "ai" && (
                      <g>
                        <rect x="38" y="20" width="344" height="180" rx="14" fill="#0A192F" />
                        <rect x="58" y="40" width="132" height="140" rx="14" fill="#122645" stroke="#F5C518" strokeWidth="1.2" />
                        <text x="72" y="62" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">STREAMING LLM</text>
                        <rect x="70" y="74" width="108" height="32" rx="7" fill="#0A192F" />
                        <text x="78" y="93" fill="#FFFFFF" fontSize="8" fontFamily="monospace">Realtime Voice + STT</text>
                        <rect x="70" y="114" width="108" height="38" rx="7" fill="#F5C518" />
                        <text x="78" y="131" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">Vision OCR + RAG</text>
                        <text x="78" y="143" fill="#0A192F" fontSize="7" fontFamily="monospace">Zod Schema Verified</text>

                        <rect x="206" y="40" width="156" height="140" rx="14" fill="#122645" stroke="#FFFFFF" strokeOpacity="0.16" />
                        <text x="220" y="62" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">SAFE EDGE PROXY</text>
                        <text x="220" y="88" fill="#FFFFFF" fontSize="9.5" fontFamily="monospace" fontWeight="700">0 Exposed Keys</text>
                        <text x="220" y="108" fill="#FFFFFF" fillOpacity="0.75" fontSize="8" fontFamily="monospace">Token Cost Guardrails</text>
                        <text x="220" y="126" fill="#FFFFFF" fillOpacity="0.75" fontSize="8" fontFamily="monospace">&lt;600ms First Token</text>
                        <rect x="220" y="142" width="126" height="24" rx="12" fill="#F5C518" />
                        <text x="233" y="157" fill="#0A192F" fontSize="7.5" fontFamily="monospace" fontWeight="700">GEMINI · OPENAI · RAG</text>
                      </g>
                    )}

                    {activeTab === "store" && (
                      <g>
                        <rect x="44" y="20" width="332" height="180" rx="14" fill="#0A192F" />
                        {[
                          { cx: 100, val: "4.9★", label: "UX SCORE" },
                          { cx: 173, val: "99.9%", label: "CRASH-FREE" },
                          { cx: 247, val: "1ST PASS", label: "APPLE / PLAY" },
                          { cx: 320, val: "+30%", label: "ASO CVR" },
                        ].map((g) => (
                          <g key={g.label}>
                            <circle cx={g.cx} cy="96" r="28" fill="none" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="4.5" />
                            <circle
                              cx={g.cx}
                              cy="96"
                              r="28"
                              fill="none"
                              stroke="#F5C518"
                              strokeWidth="4.5"
                              strokeDasharray="166 176"
                              strokeLinecap="round"
                              transform={`rotate(-90 ${g.cx} 96)`}
                            />
                            <text x={g.cx} y="100" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontFamily="monospace" fontWeight="700">
                              {g.val}
                            </text>
                            <text x={g.cx} y="142" textAnchor="middle" fill="#F5C518" fontSize="7" fontFamily="monospace" fontWeight="700">
                              {g.label}
                            </text>
                          </g>
                        ))}
                        <text x="210" y="176" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.72" fontSize="7" fontFamily="monospace">
                          FASTLANE CI/CD · MAESTRO QA · SENTRY dSYM · DATA SAFETY
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

      {/* 2. BODY: DOMAIN NAV + 10 CATEGORIES DIRECTORY + CASE STUDIES + PRICING + FAQ */}
      <section className="bg-surface/65 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <WorkDomainNav />

          {/* 10 Categories & 60 Services Directory */}
          <div id="categories" className="scroll-mt-24">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                COMPLETE 3-LEVEL ARCHITECTURE // {TOTAL_MOBILE_APP_CATEGORIES} CATEGORIES ·{" "}
                {TOTAL_MOBILE_APP_SERVICES} SERVICES
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-navy sm:text-4xl">
                iOS, Android, Cross-Platform, AI &amp; Store Launches —{" "}
                <span className="font-editorial text-gold-deep">Built to Scale.</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                Explore any of the 10 specialized Mobile App Development categories or click into
                any individual service page below.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {MOBILE_APP_CATEGORIES.map((cat) => (
                <article
                  key={cat.slug}
                  className="flex flex-col justify-between rounded-[24px] border border-navy/10 bg-white p-6 shadow-[0_8px_28px_rgba(10,25,47,0.04)] transition-all hover:border-gold hover:shadow-[0_16px_42px_rgba(10,25,47,0.08)]"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-gold shadow-xs">
                          <MobileAppCategoryIcon iconKey={cat.iconKey} className="h-4.5 w-4.5" />
                        </span>
                        <div>
                          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-gold-deep">
                            CATEGORY {cat.number} · {cat.services.length} SERVICES
                          </div>
                          <h3 className="text-lg font-bold tracking-tight text-navy">
                            <Link
                              href={`/mobile-app/${cat.slug}`}
                              className="transition-colors hover:text-gold-deep"
                            >
                              {cat.fullTitle}
                            </Link>
                          </h3>
                        </div>
                      </div>

                      <Link
                        href={`/mobile-app/${cat.slug}`}
                        aria-label={`Open ${cat.fullTitle}`}
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-navy/12 text-navy transition-colors hover:border-gold hover:bg-navy hover:text-gold"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-ink-muted sm:text-[13px]">
                      {cat.heroSummary}
                    </p>

                    <div className="mt-5 border-t border-navy/8 pt-4">
                      <div className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-navy/60">
                        Included Services
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.services.map((srv) => (
                          <Link
                            key={srv.slug}
                            href={`/mobile-app/${cat.slug}/${srv.slug}`}
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
                      href={`/mobile-app/${cat.slug}`}
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

          {/* Featured Mobile Case Studies */}
          {mobileCases.length > 0 && (
            <div className="mt-20">
              <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                    FEATURED MOBILE &amp; PRODUCT CASE STUDIES
                  </p>
                  <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                    App Launches Built for US, Australian &amp; Canadian Teams
                  </h2>
                </div>
                <Link
                  href="/work"
                  className="font-mono text-xs font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-deep"
                >
                  View App Projects →
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {mobileCases.map((study) => (
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
                            <span>Live App</span>
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

          {/* Engagement & Multi-Currency Pricing CTA */}
          <div className="mt-20">
            <MobileAppPricingBand />
          </div>

          {/* Mobile Engineering FAQ Accordion */}
          <div className="mt-16">
            <MobileAppFaqAccordion
              subjectTitle="Mobile App Development"
              turnaround="4–8 Weeks"
              stackSpec="SwiftUI · Kotlin · Flutter · React Native"
              slaOrOutputSpec="60–120fps · 100% Git IP"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
