"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  DASHBOARDS_SAAS_CATEGORIES,
  TOTAL_SAAS_CATEGORIES,
  TOTAL_SAAS_SERVICES,
} from "@/data/dashboardsSaasCatalog";
import { CASE_STUDIES, type CaseStudy } from "@/data/portfolio";
import { DashboardsSaasCategoryIcon } from "@/components/ui/DashboardsSaasCategoryIcon";
import { DashboardsSaasPricingBand } from "@/components/sections/DashboardsSaasPricingBand";
import { DashboardsSaasFaqAccordion } from "@/components/sections/DashboardsSaasFaqAccordion";
import { WorkDomainNav } from "@/components/sections/WorkDomainNav";
import { cn } from "@/lib/utils";

type SaasHubTab = "admin" | "tenant" | "bi" | "ai";

const HUB_TABS: { id: SaasHubTab; label: string }[] = [
  { id: "admin", label: "Admin & RBAC" },
  { id: "tenant", label: "Multi-Tenant" },
  { id: "bi", label: "BI Charts" },
  { id: "ai", label: "AI Copilot" },
];

export function DashboardsSaasHub() {
  const [activeTab, setActiveTab] = useState<SaasHubTab>("admin");

  const saasCases = [
    "ces-enterprise-event-operations-2026",
    "raj-personal-expenses-tracking-app-v2",
    "lootbattles-ui-dashboard",
  ]
    .map((slug) => CASE_STUDIES.find((c) => c.slug === slug))
    .filter((c): c is CaseStudy => Boolean(c));

  return (
    <div className="bg-canvas text-navy">
      {/* 1. ROYAL NAVY HERO SECTION WITH INTERACTIVE SAAS ARTBOARD */}
      <section className="border-b-2 border-gold bg-navy bg-navy-blueprint py-14 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Copy, Actions & Metrics */}
            <div className="lg:col-span-6">
              <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-white/75 transition-colors hover:text-gold"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>ALL SERVICES</span>
                </Link>
                <span aria-hidden="true" className="text-white/35">
                  /
                </span>
                <span>DASHBOARDS &amp; SAAS</span>
              </div>

              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
                Intelligent SaaS &amp; Dashboards{" "}
                <span className="font-editorial text-gold">Built to Scale.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                Custom admin panels, multi-tenant cloud SaaS platforms, real-time BI analytics, CRM
                &amp; ERP workflows, AI copilots, and tokenized design systems engineered for US,
                UK, Canada, Europe, and Australia.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?service=dashboards-saas"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gold py-2 pl-6 pr-2 text-sm font-bold text-navy shadow-[0_12px_32px_rgba(245,197,24,0.22)] transition-all hover:bg-gold-bright"
                >
                  <span>Get a Free Quote</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-gold transition-transform duration-200 group-hover:scale-105">
                    <ArrowUpRight className="h-4 w-4 stroke-[2.25]" />
                  </span>
                </Link>
                <Link
                  href="/work/dashboards-saas"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-navy-mid/80 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold"
                >
                  <span>View SaaS Projects</span>
                  <ArrowUpRight className="h-4 w-4 text-gold" />
                </Link>
              </div>

              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-white/12 pt-6">
                <div>
                  <dt className="font-mono text-lg font-bold text-gold sm:text-2xl">
                    {TOTAL_SAAS_CATEGORIES}
                  </dt>
                  <dd className="mt-0.5 text-xs text-white/70">Main Categories</dd>
                </div>
                <div>
                  <dt className="font-mono text-lg font-bold text-gold sm:text-2xl">
                    {TOTAL_SAAS_SERVICES}
                  </dt>
                  <dd className="mt-0.5 text-xs text-white/70">Specialized Services</dd>
                </div>
                <div>
                  <dt className="font-mono text-lg font-bold text-gold sm:text-2xl">100K+</dt>
                  <dd className="mt-0.5 text-xs text-white/70">Virtualized Rows</dd>
                </div>
              </dl>
            </div>

            {/* Right Interactive 4-Tab SaaS Engineering Artboard */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] border border-gold/45 bg-white p-4 text-navy shadow-[0_28px_70px_rgba(6,16,33,0.45)] sm:p-5">
                <div
                  role="tablist"
                  aria-label="Dashboards and SaaS engineering disciplines"
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
                    aria-label={`SaaS Engineering artboard: ${activeTab}`}
                  >
                    <defs>
                      <pattern
                        id="saas-hub-grid"
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
                      <radialGradient id="saas-hub-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#F5C518" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#F5C518" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <rect width="420" height="220" fill="url(#saas-hub-grid)" />

                    {activeTab === "admin" && (
                      <g>
                        <rect x="34" y="20" width="352" height="180" rx="14" fill="#FFFFFF" stroke="#0A192F" strokeOpacity="0.14" />
                        <rect x="34" y="20" width="84" height="180" rx="14" fill="#0A192F" />
                        <text x="48" y="46" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">ADMIN OS</text>
                        <rect x="46" y="60" width="60" height="18" rx="5" fill="#F5C518" />
                        <text x="53" y="72" fill="#0A192F" fontSize="7" fontFamily="monospace" fontWeight="700">Ledger</text>
                        <rect x="46" y="86" width="60" height="14" rx="4" fill="#122645" />
                        <rect x="46" y="106" width="60" height="14" rx="4" fill="#122645" />
                        <rect x="46" y="164" width="60" height="20" rx="6" fill="#122645" stroke="#F5C518" strokeOpacity="0.45" />
                        <text x="54" y="177" fill="#F5C518" fontSize="7" fontFamily="monospace">RBAC AUDIT</text>
                        <rect x="132" y="34" width="238" height="26" rx="7" fill="#F4F7FB" />
                        <text x="142" y="50" fill="#9A6F00" fontSize="8" fontFamily="monospace" fontWeight="700">100K+ VIRTUALIZED ROWS · &lt;50MS</text>
                        {[72, 102, 132].map((y, idx) => (
                          <g key={y}>
                            <rect x="132" y={y} width="238" height="24" rx="6" fill="#FFFFFF" stroke="#0A192F" strokeOpacity="0.1" />
                            <circle cx="146" cy={y + 12} r="4" fill={idx === 1 ? "#F5C518" : "#0A192F"} />
                            <rect x="158" y={y + 8} width="84" height="8" rx="4" fill="#0A192F" fillOpacity="0.7" />
                            <rect x="298" y={y + 6} width="62" height="12" rx="6" fill={idx === 0 ? "#0A192F" : "#F4F7FB"} />
                            <text x="309" y={y + 14.5} fill={idx === 0 ? "#F5C518" : "#0A192F"} fontSize="6.5" fontFamily="monospace" fontWeight="700">
                              {idx === 0 ? "RBAC OK" : "SYNCED"}
                            </text>
                          </g>
                        ))}
                        <rect x="132" y="166" width="238" height="22" rx="11" fill="#0A192F" />
                        <text x="164" y="180" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">KEYBOARD CMD+K · WCGA AA TABLE</text>
                      </g>
                    )}

                    {activeTab === "tenant" && (
                      <g>
                        <rect x="34" y="18" width="352" height="184" rx="14" fill="#0A192F" />
                        <circle cx="210" cy="110" r="85" fill="url(#saas-hub-glow)" />
                        <text x="58" y="48" fill="#F5C518" fontSize="8.5" fontFamily="monospace" fontWeight="700">
                          MULTI-TENANT SAAS // POSTGRES RLS + STRIPE
                        </text>
                        <text x="58" y="76" fill="#F5C518" fontSize="9.5" fontFamily="monospace">
                          await withTenantRLS(orgId, async (db) =&gt; &#123;
                        </text>
                        <text x="72" y="96" fill="#FFFFFF" fontSize="9.5" fontFamily="monospace">
                          return db.invoices.syncSeats(&#123;
                        </text>
                        <text x="86" y="114" fill="#FFFFFF" fillOpacity="0.85" fontSize="9.5" fontFamily="monospace">
                          sso: &quot;SAML 2.0&quot;, isolation: &quot;ROW&quot;, ip: &quot;100%&quot;
                        </text>
                        <text x="58" y="132" fill="#FFFFFF" fontSize="9.5" fontFamily="monospace">
                          &#125;); &#125;);
                        </text>
                        <rect x="58" y="150" width="150" height="24" rx="12" fill="#F5C518" />
                        <text x="74" y="165" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">
                          ZERO CROSS-BLEED
                        </text>
                        <rect x="218" y="150" width="144" height="24" rx="12" fill="#122645" stroke="#F5C518" strokeOpacity="0.4" />
                        <text x="234" y="165" fill="#FFFFFF" fontSize="8" fontFamily="monospace">
                          STRIPE SEATS + METERED
                        </text>
                      </g>
                    )}

                    {activeTab === "bi" && (
                      <g>
                        <rect x="38" y="20" width="344" height="180" rx="14" fill="#FFFFFF" stroke="#0A192F" strokeOpacity="0.14" />
                        <text x="56" y="44" fill="#9A6F00" fontSize="8.5" fontFamily="monospace" fontWeight="700">INTERACTIVE BI // SUB-300MS AGGREGATE SQL</text>
                        <rect x="56" y="56" width="96" height="44" rx="8" fill="#F4F7FB" />
                        <text x="66" y="76" fill="#0A192F" fontSize="11" fontFamily="monospace" fontWeight="700">$1.48M</text>
                        <text x="66" y="90" fill="#9A6F00" fontSize="7" fontFamily="monospace" fontWeight="700">NET ARR</text>
                        <rect x="162" y="56" width="96" height="44" rx="8" fill="#F4F7FB" />
                        <text x="172" y="76" fill="#0A192F" fontSize="11" fontFamily="monospace" fontWeight="700">118%</text>
                        <text x="172" y="90" fill="#9A6F00" fontSize="7" fontFamily="monospace" fontWeight="700">DOLLAR NRR</text>
                        <rect x="268" y="56" width="96" height="44" rx="8" fill="#F4F7FB" />
                        <text x="278" y="76" fill="#0A192F" fontSize="11" fontFamily="monospace" fontWeight="700">-68%</text>
                        <text x="278" y="90" fill="#9A6F00" fontSize="7" fontFamily="monospace" fontWeight="700">MONTH CLOSE</text>
                        <rect x="56" y="112" width="308" height="72" rx="10" fill="#0A192F" />
                        <path d="M 74 166 L 116 150 L 160 155 L 204 134 L 250 139 L 296 122 L 344 126" stroke="#F5C518" strokeWidth="2.4" fill="none" strokeLinecap="round" />
                        <text x="74" y="132" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace">EMBEDDED COHORTS · CSV &amp; PDF BOARD PACK</text>
                      </g>
                    )}

                    {activeTab === "ai" && (
                      <g>
                        <rect x="38" y="20" width="344" height="180" rx="14" fill="#0A192F" />
                        <rect x="58" y="40" width="142" height="140" rx="14" fill="#122645" stroke="#F5C518" strokeWidth="1.2" />
                        <text x="72" y="62" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">AI SAAS COPILOT</text>
                        <rect x="70" y="74" width="118" height="32" rx="7" fill="#0A192F" />
                        <text x="78" y="93" fill="#FFFFFF" fontSize="8" fontFamily="monospace">Safe Text-to-SQL</text>
                        <rect x="70" y="114" width="118" height="38" rx="7" fill="#F5C518" />
                        <text x="78" y="131" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">Document Vision</text>
                        <text x="78" y="143" fill="#0A192F" fontSize="7" fontFamily="monospace">Confidence Queue</text>

                        <rect x="216" y="40" width="146" height="140" rx="14" fill="#122645" stroke="#FFFFFF" strokeOpacity="0.16" />
                        <text x="230" y="62" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">ACL TENANT RAG</text>
                        <text x="230" y="88" fill="#FFFFFF" fontSize="9.5" fontFamily="monospace" fontWeight="700">Zod Tool Guards</text>
                        <text x="230" y="108" fill="#FFFFFF" fillOpacity="0.75" fontSize="8" fontFamily="monospace">Usage Credit Ledger</text>
                        <text x="230" y="126" fill="#FFFFFF" fillOpacity="0.75" fontSize="8" fontFamily="monospace">Golden Eval Suite</text>
                        <rect x="230" y="142" width="118" height="24" rx="12" fill="#F5C518" />
                        <text x="242" y="157" fill="#0A192F" fontSize="7.5" fontFamily="monospace" fontWeight="700">100% SQL GROUNDED</text>
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

          {/* Featured Flagship Dashboard Spotlight (Top of Section) */}
          {saasCases.length > 0 && (
            <div className="mb-16">
              <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                    FEATURED SAAS &amp; DASHBOARD CASE STUDIES
                  </p>
                  <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                    SaaS Platforms Built for US, Canadian &amp; UK Leaders
                  </h2>
                </div>
                <Link
                  href="/work/dashboards-saas"
                  className="font-mono text-xs font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-deep"
                >
                  View SaaS Projects →
                </Link>
              </div>

              {/* #1 Top Flagship Live Dashboard Card */}
              {(() => {
                const leadCase = saasCases[0];
                return (
                  <article className="group mb-6 overflow-hidden rounded-[26px] border-2 border-gold/55 bg-white p-3 shadow-[0_18px_50px_rgba(10,25,47,0.08)] transition-all hover:border-gold">
                    <div className="grid items-stretch gap-6 lg:grid-cols-12">
                      <Link
                        href={`/work/${leadCase.slug}`}
                        className="relative block aspect-[16/10] overflow-hidden rounded-[18px] bg-navy lg:col-span-7"
                      >
                        <Image
                          src={leadCase.image}
                          alt={leadCase.title}
                          fill
                          priority
                          sizes="(max-width: 1024px) 100vw, 58vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                        <div className="absolute left-3.5 top-3.5 flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-gold px-2.5 py-0.5 font-mono text-[10px] font-bold text-navy">
                            {leadCase.regionCode} · {leadCase.year}
                          </span>
                          {leadCase.liveUrl && (
                            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/60 bg-emerald-950/90 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                              LIVE SITE
                            </span>
                          )}
                        </div>
                      </Link>

                      <div className="flex flex-col justify-between p-3 sm:p-5 lg:col-span-5">
                        <div>
                          <div className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-gold-deep">
                            TOP FEATURED DASHBOARD · {leadCase.engagementModel}
                          </div>
                          <h3 className="mt-2 text-xl font-bold leading-snug text-navy transition-colors group-hover:text-gold-deep sm:text-2xl">
                            <Link href={`/work/${leadCase.slug}`}>{leadCase.title}</Link>
                          </h3>
                          <p className="mt-2.5 text-xs leading-relaxed text-ink-muted sm:text-sm">
                            {leadCase.summary}
                          </p>

                          <div className="mt-5 grid grid-cols-3 gap-2.5 rounded-2xl border border-navy/10 bg-surface p-3.5">
                            {leadCase.metrics.map((m) => (
                              <div key={m.label}>
                                <div className="font-mono text-sm font-bold text-navy sm:text-base">
                                  {m.value}
                                </div>
                                <div className="mt-0.5 text-[10px] leading-snug text-ink-muted">
                                  {m.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-navy/10 pt-4 text-xs">
                          {leadCase.liveUrl && (
                            <a
                              href={leadCase.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 font-mono text-xs font-bold text-navy transition-colors hover:bg-gold-bright"
                            >
                              <span>Launch Live Dashboard</span>
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                          )}
                          <Link
                            href={`/work/${leadCase.slug}`}
                            className="inline-flex items-center gap-1 font-semibold text-navy hover:text-gold-deep"
                          >
                            <span>Read Case Study</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })()}

              {/* Supporting SaaS Case Studies */}
              {saasCases.length > 1 && (
                <div className="grid gap-6 md:grid-cols-2">
                  {saasCases.slice(1).map((study) => (
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
                          sizes="(max-width: 768px) 100vw, 50vw"
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
              )}
            </div>
          )}

          {/* 10 Categories & 60 Services Directory */}
          <div id="categories" className="scroll-mt-24">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                COMPLETE 3-LEVEL ARCHITECTURE // {TOTAL_SAAS_CATEGORIES} CATEGORIES ·{" "}
                {TOTAL_SAAS_SERVICES} SERVICES
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-navy sm:text-4xl">
                Admin Consoles, Multi-Tenant SaaS, BI &amp; AI —{" "}
                <span className="font-editorial text-gold-deep">Built for Clarity.</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                Explore any of the 10 specialized Dashboards &amp; SaaS categories or jump directly
                into any individual service page below.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {DASHBOARDS_SAAS_CATEGORIES.map((cat) => (
                <article
                  key={cat.slug}
                  className="flex flex-col justify-between rounded-[24px] border border-navy/10 bg-white p-6 shadow-[0_8px_28px_rgba(10,25,47,0.04)] transition-all hover:border-gold hover:shadow-[0_16px_42px_rgba(10,25,47,0.08)]"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-gold shadow-xs">
                          <DashboardsSaasCategoryIcon
                            iconKey={cat.iconKey}
                            className="h-4.5 w-4.5"
                          />
                        </span>
                        <div>
                          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-gold-deep">
                            CATEGORY {cat.number} · {cat.services.length} SERVICES
                          </div>
                          <h3 className="text-lg font-bold tracking-tight text-navy">
                            <Link
                              href={`/services/dashboards-saas/${cat.slug}`}
                              className="transition-colors hover:text-gold-deep"
                            >
                              {cat.fullTitle}
                            </Link>
                          </h3>
                        </div>
                      </div>

                      <Link
                        href={`/services/dashboards-saas/${cat.slug}`}
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
                            href={`/services/dashboards-saas/${cat.slug}/${srv.slug}`}
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
                      href={`/services/dashboards-saas/${cat.slug}`}
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
            <DashboardsSaasPricingBand />
          </div>

          {/* SaaS Engineering FAQ Accordion */}
          <div className="mt-16">
            <DashboardsSaasFaqAccordion
              subjectTitle="Dashboards & SaaS Development"
              turnaround="3–8 Weeks"
              stackSpec="Next.js · TypeScript · PostgreSQL · Stripe"
              slaOrOutputSpec="100K+ Virtualized Rows · 100% Git IP"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
