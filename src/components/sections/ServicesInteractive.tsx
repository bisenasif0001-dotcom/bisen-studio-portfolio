"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Layers,
  LayoutDashboard,
  Palette,
  Printer,
  Search,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react";
import {
  CRAFT_STANDARDS_PILLARS,
  PRINT_VS_DIGITAL_SPECS,
  SERVICES,
} from "@/data/services";
import {
  DASHBOARDS_SAAS_CATEGORIES,
  TOTAL_SAAS_SERVICES,
  type DashboardsSaasIconKey,
} from "@/data/dashboardsSaasCatalog";
import {
  MOBILE_APP_CATEGORIES,
  TOTAL_MOBILE_APP_SERVICES,
  type MobileAppCategoryIconKey,
} from "@/data/mobileAppCatalog";
import {
  WEBSITE_CATEGORIES,
  TOTAL_WEBSITE_SERVICES,
  type WebsiteCategoryIconKey,
} from "@/data/websiteCatalog";
import {
  GRAPHIC_DESIGN_CATEGORIES,
  TOTAL_GRAPHIC_SERVICES,
  type GraphicCategoryIconKey,
} from "@/data/graphicDesignCatalog";
import { CASE_STUDIES } from "@/data/portfolio";
import { DashboardsSaasCategoryIcon } from "@/components/ui/DashboardsSaasCategoryIcon";
import { MobileAppCategoryIcon } from "@/components/ui/MobileAppCategoryIcon";
import { WebsiteCategoryIcon } from "@/components/ui/WebsiteCategoryIcon";
import { GraphicCategoryIcon } from "@/components/ui/GraphicCategoryIcon";
import { useCurrency } from "@/components/context/CurrencyContext";
import { cn } from "@/lib/utils";

type FilterTabKey =
  | "all"
  | "graphic-design"
  | "website"
  | "mobile-app"
  | "dashboards-saas";

type PillarKey = Exclude<FilterTabKey, "all">;

interface CatalogCategoryItem {
  number: string;
  slug: string;
  menuTitle: string;
  fullTitle: string;
  heroSummary: string;
  techTerms?: string[];
  designTerms?: string[];
  iconKey: string;
  services: {
    slug: string;
    title: string;
    shortSummary: string;
    turnaround: string;
  }[];
}

interface PillarConfig {
  key: PillarKey;
  label: string;
  shortLabel: string;
  basePath: string;
  serviceQuery: string;
  totalServices: number;
  tagline: string;
  categories: CatalogCategoryItem[];
  popularSlugs: string[];
  tabIcon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  renderCategoryIcon: (key: string, className: string) => React.ReactNode;
}

const PILLARS: PillarConfig[] = [
  {
    key: "graphic-design",
    label: "Graphic Design",
    shortLabel: "Graphic Design",
    basePath: "/graphic-design",
    serviceQuery: "graphic-design",
    totalServices: TOTAL_GRAPHIC_SERVICES,
    tagline: "Brand identity, packaging, print and marketing",
    categories: GRAPHIC_DESIGN_CATEGORIES,
    popularSlugs: [
      "brand-identity-design",
      "product-packaging",
      "social-media-posts",
      "brochure-design",
    ],
    tabIcon: Palette,
    renderCategoryIcon: (k, cls) => (
      <GraphicCategoryIcon iconKey={k as GraphicCategoryIconKey} className={cls} />
    ),
  },
  {
    key: "website",
    label: "Websites",
    shortLabel: "Websites",
    basePath: "/website",
    serviceQuery: "website",
    totalServices: TOTAL_WEBSITE_SERVICES,
    tagline: "Business websites, e-commerce and web development",
    categories: WEBSITE_CATEGORIES,
    popularSlugs: [
      "business-website-design",
      "shopify-development",
      "react-development",
      "wordpress-development",
    ],
    tabIcon: Globe2,
    renderCategoryIcon: (k, cls) => (
      <WebsiteCategoryIcon iconKey={k as WebsiteCategoryIconKey} className={cls} />
    ),
  },
  {
    key: "mobile-app",
    label: "Mobile Apps",
    shortLabel: "Mobile Apps",
    basePath: "/mobile-app",
    serviceQuery: "mobile-app",
    totalServices: TOTAL_MOBILE_APP_SERVICES,
    tagline: "iOS, Android, cross-platform apps and mobile UX",
    categories: MOBILE_APP_CATEGORIES,
    popularSlugs: [
      "custom-ios-app-development",
      "custom-android-development",
      "flutter-development",
      "mobile-app-ui-design",
    ],
    tabIcon: Smartphone,
    renderCategoryIcon: (k, cls) => (
      <MobileAppCategoryIcon iconKey={k as MobileAppCategoryIconKey} className={cls} />
    ),
  },
  {
    key: "dashboards-saas",
    label: "Dashboards & SaaS",
    shortLabel: "Dashboards & SaaS",
    basePath: "/services/dashboards-saas",
    serviceQuery: "dashboards-saas",
    totalServices: TOTAL_SAAS_SERVICES,
    tagline: "Custom software, CRM, client portals and analytics",
    categories: DASHBOARDS_SAAS_CATEGORIES,
    popularSlugs: [
      "custom-admin-dashboard",
      "saas-mvp-development",
      "custom-crm-development",
      "business-intelligence-dashboard",
    ],
    tabIcon: LayoutDashboard,
    renderCategoryIcon: (k, cls) => (
      <DashboardsSaasCategoryIcon iconKey={k as DashboardsSaasIconKey} className={cls} />
    ),
  },
];

const TOTAL_CATALOG_SERVICES = PILLARS.reduce((sum, p) => sum + p.totalServices, 0);
const TOTAL_CATALOG_CATEGORIES = PILLARS.reduce((sum, p) => sum + p.categories.length, 0);

const FILTER_GROUPS = ["All", "Design", "Engineering", "Full-Spectrum"] as const;

const FEATURED_WORK_SLUGS = [
  "ces-enterprise-event-operations-2026",
  "photobooth-supplier-2026",
  "r80-rugby-print-catalogue",
];

const MINI_PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    detail: "Confirm requirements, goals, and active priorities.",
  },
  {
    step: "02",
    title: "Direction",
    detail: "Align Figma direction, UI flows, or technical spec.",
  },
  {
    step: "03",
    title: "Build & Review",
    detail: "Design + human-reviewed code in milestone previews.",
  },
  {
    step: "04",
    title: "Handover",
    detail: "Clean Git/Figma/print masters with agreed support.",
  },
];

export function ServicesInteractive() {
  const { format } = useCurrency();
  const [activeTab, setActiveTab] = useState<FilterTabKey>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [solutionGroup, setSolutionGroup] =
    useState<(typeof FILTER_GROUPS)[number]>("All");
  const [showSpecsTable, setShowSpecsTable] = useState(false);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const searchResults = useMemo(() => {
    if (!normalizedQuery) return [];

    const hits: {
      score: number;
      pillarKey: PillarKey;
      pillarLabel: string;
      categorySlug: string;
      categoryTitle: string;
      serviceSlug: string;
      serviceTitle: string;
      shortSummary: string;
      turnaround: string;
      href: string;
    }[] = [];

    for (const pillar of PILLARS) {
      if (activeTab !== "all" && pillar.key !== activeTab) continue;
      for (const cat of pillar.categories) {
        for (const srv of cat.services) {
          const titleLower = srv.title.toLowerCase();
          const catLower = `${cat.menuTitle} ${cat.fullTitle}`.toLowerCase();
          const metaLower = `${srv.shortSummary} ${pillar.label}`.toLowerCase();

          let score = 0;
          if (titleLower === normalizedQuery) score = 4;
          else if (titleLower.includes(normalizedQuery)) score = 3;
          else if (catLower.includes(normalizedQuery)) score = 2;
          else if (metaLower.includes(normalizedQuery)) score = 1;

          if (score > 0) {
            hits.push({
              score,
              pillarKey: pillar.key,
              pillarLabel: pillar.label,
              categorySlug: cat.slug,
              categoryTitle: cat.menuTitle,
              serviceSlug: srv.slug,
              serviceTitle: srv.title,
              shortSummary: srv.shortSummary,
              turnaround: srv.turnaround,
              href: `${pillar.basePath}/${cat.slug}/${srv.slug}`,
            });
          }
        }
      }
    }

    return hits.sort((a, b) => b.score - a.score);
  }, [normalizedQuery, activeTab]);

  const activePillar =
    activeTab === "all"
      ? null
      : PILLARS.find((p) => p.key === activeTab) ?? PILLARS[0];

  const visibleSolutions =
    solutionGroup === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.categoryGroup === solutionGroup);

  const featuredCases = FEATURED_WORK_SLUGS.map((slug) =>
    CASE_STUDIES.find((c) => c.slug === slug)
  ).filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <div className="space-y-20">
      {/* 1. SMART INTERACTIVE SERVICE EXPLORER (SEARCH-FIRST, PROGRESSIVE DISCLOSURE) */}
      <section
        id="service-explorer"
        aria-label="Interactive Services Explorer"
        className="scroll-mt-24"
      >
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
              FIND THE RIGHT EXPERTISE · {TOTAL_CATALOG_CATEGORIES} CATEGORIES ·{" "}
              {TOTAL_CATALOG_SERVICES} SERVICES
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-4xl">
              What Can We Help You{" "}
              <span className="font-editorial text-gold-deep">Build?</span>
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
              Browse by discipline or search across exact service titles to open full scopes and
              prefilled project briefs.
            </p>
          </div>

          {/* Search Input Across Services, Categories & Keywords */}
          <div className="relative w-full lg:max-w-md">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/50"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${TOTAL_CATALOG_SERVICES} services (e.g. Shopify, SaaS MVP, Logo)...`}
              aria-label={`Search across all ${TOTAL_CATALOG_SERVICES} studio services`}
              className="w-full rounded-full border border-navy/15 bg-white py-3 pl-11 pr-10 text-sm font-medium text-navy shadow-2xs transition-colors placeholder:text-ink-muted focus:border-gold focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear service search"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 cursor-pointer rounded-full p-1 text-navy/60 hover:bg-surface hover:text-navy"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Discipline Filter Bar (Accessible Tablist + Horizontal Scroll on Mobile) */}
        <div
          role="tablist"
          aria-label="Filter by discipline"
          className="mt-7 flex flex-nowrap items-center gap-2 overflow-x-auto rounded-2xl border border-navy/12 bg-white p-1.5 shadow-[0_6px_24px_rgba(10,25,47,0.05)] sm:flex-wrap"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "all"}
            onClick={() => setActiveTab("all")}
            className={cn(
              "transition-none inline-flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold",
              activeTab === "all"
                ? "bg-navy text-white shadow-xs"
                : "text-navy/80 hover:bg-surface hover:text-navy"
            )}
          >
            <span>All</span>
            <span
              className={cn(
                "rounded-full px-2 py-0.5 font-mono text-[11px] font-bold leading-none",
                activeTab === "all" ? "bg-gold text-navy" : "bg-surface text-ink-muted"
              )}
            >
              {TOTAL_CATALOG_SERVICES}
            </span>
          </button>

          {PILLARS.map((pillar) => {
            const TabIcon = pillar.tabIcon;
            const isSelected = activeTab === pillar.key;
            return (
              <button
                key={pillar.key}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveTab(pillar.key)}
                className={cn(
                  "transition-none inline-flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold",
                  isSelected
                    ? "bg-navy text-white shadow-xs"
                    : "text-navy/80 hover:bg-surface hover:text-navy"
                )}
              >
                <TabIcon
                  className={cn(
                    "h-4 w-4 shrink-0",
                    isSelected ? "text-gold" : "text-navy/60"
                  )}
                  aria-hidden={true}
                />
                <span>{pillar.shortLabel}</span>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 font-mono text-[11px] font-bold leading-none",
                    isSelected ? "bg-gold text-navy" : "bg-surface text-ink-muted"
                  )}
                >
                  {pillar.totalServices}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Search Results (Combined with Active Filter & Prioritized Exact Service Match) */}
        {normalizedQuery ? (
          <div className="mt-8" role="region" aria-live="polite" aria-label="Service search results">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-xs font-semibold text-navy">
                Found <span className="text-gold-deep">{searchResults.length}</span>{" "}
                {searchResults.length === 1 ? "service" : "services"} for &ldquo;{searchQuery}
                &rdquo;
                {activeTab !== "all" && ` inside ${activePillar?.label}`}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {activeTab !== "all" && (
                  <button
                    type="button"
                    onClick={() => setActiveTab("all")}
                    className="font-mono text-xs font-semibold text-gold-deep underline underline-offset-4 hover:text-navy"
                  >
                    Search All {TOTAL_CATALOG_SERVICES} Services
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="font-mono text-xs font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-gold-deep"
                >
                  Clear Search
                </button>
              </div>
            </div>

            {searchResults.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {searchResults.map((hit) => (
                  <div
                    key={hit.href}
                    className="flex flex-col justify-between rounded-2xl border border-navy/12 bg-white p-5 shadow-2xs transition-shadow hover:border-gold hover:shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 font-mono text-[11px] font-bold uppercase tracking-wider">
                        <span className="text-gold-deep">{hit.pillarLabel}</span>
                        <span className="rounded-full bg-surface px-2.5 py-0.5 text-ink-muted">
                          {hit.turnaround}
                        </span>
                      </div>
                      <h3 className="mt-2.5 text-base font-bold text-navy">
                        <Link href={hit.href} className="hover:text-gold-deep">
                          {hit.serviceTitle}
                        </Link>
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                        {hit.shortSummary}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-2 border-t border-navy/10 pt-3.5 text-xs">
                      <Link
                        href={hit.href}
                        className="inline-flex items-center gap-1 font-bold text-navy hover:text-gold-deep"
                      >
                        <span>View Service</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-gold-deep" />
                      </Link>
                      <Link
                        href={`/contact?category=${hit.pillarKey}&service=${hit.serviceSlug}&source=services-search`}
                        className="font-semibold text-ink-muted underline decoration-gold/70 underline-offset-4 hover:text-navy"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-navy/15 bg-white p-10 text-center">
                <p className="text-base font-semibold text-navy">
                  No direct catalog match for &ldquo;{searchQuery}&rdquo;.
                </p>
                <p className="mt-1.5 text-sm text-ink-muted">
                  Try keywords like Shopify, SwiftUI, SaaS MVP, Packaging, Logo, or share custom
                  requirements directly with our principals.
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  <Link
                    href={`/contact?topic=${encodeURIComponent(searchQuery.trim())}&source=services-search-empty`}
                    className="inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-2.5 text-sm font-bold text-white hover:bg-navy-mid"
                  >
                    <span>Request Custom Service</span>
                    <ArrowUpRight className="h-4 w-4 text-gold" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveTab("all");
                    }}
                    className="rounded-xl border border-navy/15 bg-surface px-5 py-2.5 text-sm font-semibold text-navy hover:border-navy"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : activeTab === "all" ? (
          /* Clean 4-Pillar Overview Cards When "All" Tab Selected */
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {PILLARS.map((pillar) => {
              const Icon = pillar.tabIcon;
              const popularServices = pillar.popularSlugs
                .map((slug) => {
                  for (const cat of pillar.categories) {
                    const srv = cat.services.find((s) => s.slug === slug);
                    if (srv) return { ...srv, categorySlug: cat.slug };
                  }
                  return null;
                })
                .filter((x): x is NonNullable<typeof x> => Boolean(x));

              return (
                <div
                  key={pillar.key}
                  className="flex flex-col justify-between rounded-3xl border border-navy/15 bg-white p-6 shadow-xs transition-shadow hover:border-gold hover:shadow-md sm:p-7"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                          <Icon className="h-5 w-5" aria-hidden={true} />
                        </span>
                        <div>
                          <span className="font-mono text-xs font-bold uppercase tracking-wider text-gold-deep">
                            {pillar.totalServices} Services · {pillar.categories.length} Categories
                          </span>
                          <h3 className="text-xl font-bold text-navy">{pillar.label}</h3>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveTab(pillar.key)}
                        className="rounded-full border border-navy/15 bg-surface px-3 py-1 font-mono text-[11px] font-semibold text-navy hover:border-gold hover:bg-navy hover:text-white"
                      >
                        Browse 10 Categories
                      </button>
                    </div>

                    <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                      {pillar.tagline}
                    </p>

                    <div className="mt-5 border-t border-navy/10 pt-4">
                      <p className="mb-2.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-navy/70">
                        Popular Services
                      </p>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {popularServices.map((srv) => (
                          <Link
                            key={srv.slug}
                            href={`${pillar.basePath}/${srv.categorySlug}/${srv.slug}`}
                            className="flex items-center justify-between gap-2 rounded-xl border border-navy/10 bg-surface px-3.5 py-2 text-xs font-semibold text-navy hover:border-gold hover:bg-white"
                          >
                            <span className="truncate">{srv.title}</span>
                            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-gold-deep" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-navy/10 pt-4">
                    <Link
                      href={pillar.basePath}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-navy hover:text-gold-deep"
                    >
                      <span>Explore {pillar.label}</span>
                      <ArrowUpRight className="h-4 w-4 text-gold-deep" />
                    </Link>
                    <Link
                      href={`/contact?category=${pillar.key}&source=services-overview`}
                      className="text-xs font-semibold text-ink-muted underline decoration-gold underline-offset-4 hover:text-navy"
                    >
                      Request {pillar.shortLabel} Quote
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : activePillar ? (
          /* Selected Discipline: 10 Simplified Category Cards (Max 3 Popular Links per Card) */
          <div className="mt-8">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-navy/12 bg-navy px-6 py-4 text-white">
              <div>
                <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-gold">
                  {activePillar.label.toUpperCase()} · {activePillar.categories.length} CATEGORIES
                  · {activePillar.totalServices} SERVICES
                </div>
                <p className="mt-1 text-sm text-white/85">{activePillar.tagline}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <Link
                  href={activePillar.basePath}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-navy-mid px-4 py-2 text-xs font-semibold text-white hover:border-gold hover:text-gold"
                >
                  <span>Open {activePillar.label} Hub</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href={`/contact?category=${activePillar.key}&source=services-pillar-header`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-xs font-bold text-navy hover:bg-gold-bright"
                >
                  <span>Get a Quote</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {activePillar.categories.map((cat) => (
                <article
                  key={cat.slug}
                  className="flex flex-col justify-between rounded-2xl border border-navy/12 bg-white p-6 shadow-2xs transition-shadow hover:border-gold hover:shadow-md"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                          {activePillar.renderCategoryIcon(cat.iconKey, "h-4.5 w-4.5")}
                        </span>
                        <div>
                          <div className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-gold-deep">
                            {cat.services.length} Services · Category {cat.number}
                          </div>
                          <h3 className="text-lg font-bold tracking-tight text-navy">
                            <Link
                              href={`${activePillar.basePath}/${cat.slug}`}
                              className="hover:text-gold-deep"
                            >
                              {cat.fullTitle}
                            </Link>
                          </h3>
                        </div>
                      </div>

                      <Link
                        href={`${activePillar.basePath}/${cat.slug}`}
                        aria-label={`Open ${cat.fullTitle}`}
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-navy/12 text-navy hover:border-gold hover:bg-navy hover:text-gold"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-ink-muted line-clamp-2">
                      {cat.heroSummary}
                    </p>

                    <div className="mt-4 border-t border-navy/10 pt-3.5">
                      <div className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-navy/65">
                        Popular Services
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.services.slice(0, 3).map((srv) => (
                          <Link
                            key={srv.slug}
                            href={`${activePillar.basePath}/${cat.slug}/${srv.slug}`}
                            className="inline-flex items-center gap-1 rounded-full border border-navy/12 bg-surface px-3 py-1.5 text-xs font-medium text-navy hover:border-gold hover:bg-navy hover:text-white"
                          >
                            <span>{srv.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-navy/10 pt-3.5 text-xs">
                    <Link
                      href={`${activePillar.basePath}/${cat.slug}`}
                      className="inline-flex items-center gap-1 font-bold text-navy hover:text-gold-deep"
                    >
                      <span>Explore All {cat.services.length} Services</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-gold-deep" />
                    </Link>
                    <Link
                      href={`/contact?category=${activePillar.key}&topic=${cat.slug}&source=services-category`}
                      className="font-semibold text-ink-muted underline decoration-gold/70 underline-offset-4 hover:text-navy"
                    >
                      Start Brief
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        {/* Crawlable Compact 40-Category Index (Always Accessible to Users & Search Bots) */}
        <details className="mt-8 rounded-2xl border border-navy/12 bg-white p-5">
          <summary className="cursor-pointer font-mono text-xs font-semibold uppercase tracking-[0.16em] text-navy hover:text-gold-deep">
            Browse Complete 40-Category Index Across All 4 Disciplines (Direct Links)
          </summary>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar) => (
              <div key={pillar.key}>
                <Link
                  href={pillar.basePath}
                  className="font-mono text-xs font-bold uppercase tracking-wider text-gold-deep hover:underline"
                >
                  {pillar.label} ({pillar.totalServices})
                </Link>
                <ul className="mt-2.5 space-y-1.5 text-xs text-ink-muted">
                  {pillar.categories.map((cat) => (
                    <li key={cat.slug}>
                      <Link
                        href={`${pillar.basePath}/${cat.slug}`}
                        className="hover:text-navy hover:underline"
                      >
                        {cat.menuTitle} ({cat.services.length})
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </details>
      </section>

      {/* 2. CLEAR TRANSITION BANNER BETWEEN EXPLORER & INTEGRATED SOLUTIONS */}
      <section className="rounded-3xl border border-navy/15 bg-navy bg-navy-blueprint p-7 text-white sm:p-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              BEYOND INDIVIDUAL SERVICES
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Need More Than One Service?
            </h2>
            <p className="mt-2.5 text-[15px] leading-relaxed text-white/85">
              Explore complete creative and technology solutions that bring multiple disciplines
              together—from brand identity and websites to mobile applications and custom SaaS
              software.
            </p>
          </div>
          <div className="rounded-2xl border border-gold/40 bg-navy-mid px-5 py-4 font-mono text-xs font-semibold text-gold shrink-0">
            One coordinated team · Multiple disciplines · Clear ownership
          </div>
        </div>
      </section>

      {/* 3. SIX FEATURED INTEGRATED SOLUTION SHOWCASES (ALTERNATING VISUALS) */}
      <section id="featured-solutions" className="scroll-mt-24">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
              FEATURED SOLUTIONS
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-4xl">
              Complete Solutions. One Creative &amp; Engineering Team.
            </h2>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter featured solutions"
          >
            {FILTER_GROUPS.map((g) => (
              <button
                key={g}
                type="button"
                role="tab"
                aria-selected={solutionGroup === g}
                onClick={() => setSolutionGroup(g)}
                className={cn(
                  "transition-none cursor-pointer rounded-full border px-4 py-2 text-xs font-semibold sm:text-sm",
                  solutionGroup === g
                    ? "border-navy bg-navy text-white shadow-xs"
                    : "border-navy/15 bg-white text-navy/80 hover:border-navy/40"
                )}
              >
                {g === "All" ? "All 6 Solutions" : g}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-8">
          {visibleSolutions.map((service, idx) => {
            const imageOnRight = idx % 2 === 1;
            const relatedCase =
              CASE_STUDIES.find((c) => c.slug === service.relatedCaseSlug) ?? CASE_STUDIES[0];

            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-24 overflow-hidden rounded-3xl border border-navy/15 bg-white shadow-xs transition-shadow hover:border-navy/35 hover:shadow-md"
              >
                <div className="grid items-stretch lg:grid-cols-12">
                  {/* Visual Showcase Side */}
                  <div
                    className={cn(
                      "flex flex-col justify-between border-b border-navy/10 bg-navy p-5 text-white lg:col-span-5 lg:border-b-0",
                      imageOnRight ? "lg:order-2 lg:border-l" : "lg:order-1 lg:border-r"
                    )}
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15 bg-navy-deep">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-gold">
                          Example Project · {relatedCase.regionCode}
                        </span>
                        <p className="font-semibold text-white">
                          {relatedCase.title.split(" — ")[0]}
                        </p>
                      </div>
                      <Link
                        href={`/work/${relatedCase.slug}`}
                        className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-gold hover:text-white"
                      >
                        <span>View Case</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Concise Benefits & Conversion Side */}
                  <div
                    className={cn(
                      "flex flex-col justify-between p-6 sm:p-8 lg:col-span-7",
                      imageOnRight ? "lg:order-1" : "lg:order-2"
                    )}
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-gold-deep">
                          {service.number} · {service.categoryGroup.toUpperCase()} SOLUTION
                        </span>
                        <span className="rounded-full border border-navy/12 bg-surface px-3 py-1 font-mono text-xs font-semibold text-navy">
                          From {format(service.startingUsd)} · {service.typicalTimeline}
                        </span>
                      </div>

                      <h3 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                        {service.title}
                      </h3>
                      <p className="mt-2 font-editorial text-lg text-navy/90">
                        {service.headline}
                      </p>
                      <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                        {service.description}
                      </p>

                      <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-navy/90"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {service.techAndSpecs.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg border border-navy/12 bg-surface px-3 py-1 font-mono text-xs text-navy"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-navy/10 pt-5">
                      {service.hubHref && (
                        <Link
                          href={service.hubHref}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-navy/20 bg-surface px-4 py-2.5 text-sm font-semibold text-navy hover:border-gold hover:bg-white"
                        >
                          <span>Explore Solution</span>
                          <ArrowUpRight className="h-4 w-4 text-gold-deep" />
                        </Link>
                      )}
                      <Link
                        href={`/contact?category=${service.intakeCategory}&solution=${service.id}&source=services-solution`}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-navy px-5 py-2.5 text-sm font-bold text-white hover:bg-navy-mid"
                      >
                        <span>Start Similar Project</span>
                        <ArrowUpRight className="h-4 w-4 text-gold" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 4. OUR CRAFT & STANDARDS (Clean Pillars + Optional Expandable Spec Matrix) */}
      <section
        id="craft-standards"
        className="rounded-3xl border-2 border-gold/55 bg-navy bg-navy-blueprint p-6 text-white shadow-xl sm:p-10"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              <Printer className="h-4 w-4" />
              <span>OUR CRAFT &amp; STANDARDS</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Crafted for Every Medium.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              How we uphold print production precision, accessible interfaces, maintainable
              engineering, and organized source handovers tailored to each project&apos;s agreed
              scope.
            </p>
          </div>
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gold px-3.5 py-1.5 font-mono text-xs font-bold text-navy shrink-0">
            <Layers className="h-3.5 w-3.5" />
            <span>Digital + Print Unified</span>
          </span>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CRAFT_STANDARDS_PILLARS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/15 bg-navy-deep/85 p-5"
            >
              <h3 className="text-lg font-semibold text-gold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/82">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Optional Expandable Quality Specification Matrix */}
        <div className="mt-6">
          <button
            type="button"
            onClick={() => setShowSpecsTable((prev) => !prev)}
            aria-expanded={showSpecsTable}
            className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-navy-mid px-4 py-2.5 text-xs font-semibold text-gold hover:border-gold"
          >
            <span>
              {showSpecsTable
                ? "Hide Technical Quality Specifications"
                : "View Our Quality Standards Matrix"}
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-150",
                showSpecsTable && "rotate-180"
              )}
            />
          </button>

          {showSpecsTable && (
            <div className="mt-4 overflow-x-auto rounded-2xl border border-white/15 bg-white text-navy">
              <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-navy/12 bg-surface font-mono text-xs uppercase tracking-wider text-navy">
                    <th className="p-4">Specification Area</th>
                    <th className="p-4">Digital Products &amp; Web</th>
                    <th className="p-4">Print &amp; Packaging</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy/10 text-xs sm:text-sm">
                  {PRINT_VS_DIGITAL_SPECS.map((row) => (
                    <tr key={row.label}>
                      <td className="p-4 font-semibold text-navy">{row.label}</td>
                      <td className="p-4 text-ink-muted">{row.digital}</td>
                      <td className="p-4 text-ink-muted">{row.print}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="border-t border-navy/10 bg-surface px-4 py-2.5 text-xs text-ink-muted">
                Exact print vendor profiles, accessibility targets, and staging setups are
                confirmed in each engagement&apos;s written scope agreement.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 5. SELECTED WORK & COMPACT WORKFLOW */}
      <section className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="flex items-end justify-between gap-2">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                PROVEN PORTFOLIO EXAMPLES
              </p>
              <h2 className="mt-1.5 text-2xl font-bold text-navy">Selected Work</h2>
            </div>
            <Link
              href="/work"
              className="text-xs font-bold text-navy underline decoration-gold underline-offset-4 hover:text-gold-deep"
            >
              View All Work →
            </Link>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {featuredCases.map((cs) => (
              <Link
                key={cs.slug}
                href={`/work/${cs.slug}`}
                className="group overflow-hidden rounded-2xl border border-navy/12 bg-white shadow-2xs hover:border-gold"
              >
                <div className="relative aspect-[16/10] w-full bg-navy">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 250px"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <span className="font-mono text-[10px] font-bold uppercase text-gold-deep">
                    {cs.category}
                  </span>
                  <h3 className="mt-1 text-sm font-bold text-navy group-hover:text-gold-deep">
                    {cs.title.split(" — ")[0]}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-navy/15 bg-white p-6 lg:col-span-5">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
            HOW WE WORK
          </p>
          <h2 className="mt-1.5 text-2xl font-bold text-navy">Discovery to Delivery</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {MINI_PROCESS_STEPS.map((st) => (
              <div
                key={st.step}
                className="rounded-xl border border-navy/10 bg-surface p-3.5"
              >
                <span className="font-mono text-xs font-bold text-gold-deep">{st.step}</span>
                <h3 className="mt-1 text-sm font-semibold text-navy">{st.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">{st.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
