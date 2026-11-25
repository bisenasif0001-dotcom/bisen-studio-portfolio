import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Clock,
  Lock,
  Mail,
  PackageCheck,
  Quote,
  Rocket,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { HOME_FAQS, SITE_CONFIG, TRUST_METRICS, TESTIMONIALS } from "@/data/site";
import { CASE_STUDIES } from "@/data/portfolio";
import { TEAM_MEMBERS } from "@/data/team";
import { ENGAGEMENT_STEPS } from "@/data/packages";
import { GRAPHIC_DESIGN_CATEGORIES } from "@/data/graphicDesignCatalog";
import { WEBSITE_CATEGORIES } from "@/data/websiteCatalog";
import { MOBILE_APP_CATEGORIES } from "@/data/mobileAppCatalog";
import { DASHBOARDS_SAAS_CATEGORIES } from "@/data/dashboardsSaasCatalog";
import { DisciplineArtwork } from "@/components/ui/DisciplineArtwork";
import { Reveal } from "@/components/ui/Reveal";
import { LiveTimezoneStrip } from "@/components/sections/LiveTimezoneStrip";
import { StudioAtelierCanvas } from "@/components/sections/StudioAtelierCanvas";
import { HomeSelectedWorkSection } from "@/components/sections/HomeSelectedWorkSection";
import { HomeAiAdvantageSection } from "@/components/sections/HomeAiAdvantageSection";
import { HomePackagesPreview } from "@/components/sections/HomePackagesPreview";
import { HomeFaqAccordion } from "@/components/sections/HomeFaqAccordion";

const GRAPHIC_COUNT = GRAPHIC_DESIGN_CATEGORIES.reduce(
  (sum, c) => sum + c.services.length,
  0
);
const WEBSITE_COUNT = WEBSITE_CATEGORIES.reduce((sum, c) => sum + c.services.length, 0);
const MOBILE_COUNT = MOBILE_APP_CATEGORIES.reduce((sum, c) => sum + c.services.length, 0);
const SAAS_COUNT = DASHBOARDS_SAAS_CATEGORIES.reduce((sum, c) => sum + c.services.length, 0);
const TOTAL_CATALOG_SERVICES = GRAPHIC_COUNT + WEBSITE_COUNT + MOBILE_COUNT + SAAS_COUNT;

const CORE_DISCIPLINES = [
  {
    id: "graphic-design",
    artworkId: "print-design",
    specNumber: "01",
    title: "Graphic & Print Design",
    count: `${GRAPHIC_COUNT} Services`,
    anchor: "From $1,400 · 5–14 Days",
    description:
      "Brand identity systems, high-impact marketing visuals, editorial books, and press-ready CMYK/Pantone packaging.",
    href: "/graphic-design",
    cta: "Explore Graphic Design",
    subLinks: [
      { label: "Brand Identity", href: "/graphic-design/brand-identity" },
      { label: "Packaging & Foil", href: "/graphic-design/packaging-design" },
      { label: "Editorial Print", href: "/graphic-design/editorial-design" },
    ],
  },
  {
    id: "website",
    artworkId: "websites",
    specNumber: "02",
    title: "Website Design & Development",
    count: `${WEBSITE_COUNT} Services`,
    anchor: "From $3,500 · 2–4 Weeks",
    description:
      "Conversion-focused marketing sites, custom Next.js builds, Shopify/WooCommerce stores, and technical SEO.",
    href: "/website",
    cta: "Explore Websites",
    subLinks: [
      { label: "Website Design", href: "/website/website-design" },
      { label: "Next.js & React", href: "/website/custom-web-development" },
      { label: "E-Commerce", href: "/website/ecommerce-development" },
    ],
  },
  {
    id: "mobile-app",
    artworkId: "apps",
    specNumber: "03",
    title: "Mobile App Development",
    count: `${MOBILE_COUNT} Services`,
    anchor: "From $6,500 · 4–6 Weeks",
    description:
      "Native-smooth iOS, Android, React Native & AI-powered mobile products built from prototype to App Store.",
    href: "/mobile-app",
    cta: "Explore Mobile Apps",
    subLinks: [
      { label: "iOS & Android", href: "/mobile-app/ios-app-development" },
      { label: "Cross-Platform", href: "/mobile-app/cross-platform-development" },
      { label: "AI Mobile Apps", href: "/mobile-app/ai-mobile-app-development" },
    ],
  },
  {
    id: "dashboards-saas",
    artworkId: "dashboards",
    specNumber: "04",
    title: "Dashboards & SaaS",
    count: `${SAAS_COUNT} Services`,
    anchor: "From $4,800 · 3–5 Weeks",
    description:
      "Multi-tenant SaaS products, role-based admin portals, real-time BI telemetry, and workflow automation.",
    href: "/services/dashboards-saas",
    cta: "Explore SaaS Solutions",
    subLinks: [
      { label: "Admin Consoles", href: "/services/dashboards-saas/admin-dashboard-development" },
      { label: "Custom SaaS", href: "/services/dashboards-saas/custom-saas-development" },
      { label: "BI Analytics", href: "/services/dashboards-saas/analytics-bi-dashboards" },
    ],
  },
];

const BUSINESS_SOLUTIONS = [
  {
    stage: "Funded Startups & MVPs",
    recommendedPlan: "Weekly Sprint",
    deliverables: "Brand + Launch Site + Tested MVP",
    icon: Rocket,
    description:
      "Establish brand credibility, ship a conversion site, and launch a tested web or mobile MVP without coordinating multiple vendors.",
    href: "/contact?package=weekly&topic=startup-mvp&source=home-solutions",
    cta: "Scope an MVP",
  },
  {
    stage: "Product & Consumer Brands",
    recommendedPlan: "Brand + Storefront",
    deliverables: "CMYK Packaging + Headless Web",
    icon: PackageCheck,
    description:
      "Unify flagship digital storefronts with press-ready CMYK packaging, editorial collateral, and brand guidelines.",
    href: "/contact?category=graphic-design&topic=brand-and-storefront&source=home-solutions",
    cta: "Explore Brand + Print",
  },
  {
    stage: "Growing SaaS Platforms",
    recommendedPlan: "Monthly Retainer",
    deliverables: "2 Active Slots · Design + Code",
    icon: TrendingUp,
    description:
      "Upgrade analytics dashboards, role-based portals, and customer UX with continuous design + engineering velocity.",
    href: "/contact?category=dashboards-saas&package=monthly&source=home-solutions",
    cta: "Scale Your SaaS",
  },
  {
    stage: "Enterprise & Agency Partners",
    recommendedPlan: "Yearly Partner",
    deliverables: "Custom MSA · NDA · Clean Git",
    icon: Building2,
    description:
      "Plug in reliable white-label or direct senior product squads backed by clear contracts, NDAs, and clean Git handovers.",
    href: "/contact?package=yearly&topic=enterprise-partnership&source=home-solutions",
    cta: "Discuss Partnership",
  },
];

const PRINCIPAL_ONE_LINERS: Record<
  string,
  { roleShort: string; expBadge: string; blurb: string }
> = {
  "asif-bisen": {
    roleShort: "Creative Direction & Product Engineering",
    expBadge: "16+ Yrs Lead",
    blurb: "Founder · Bridging brand strategy, UI systems, and software architecture.",
  },
  "rajpoot-talib": {
    roleShort: "Full-Stack & AI Systems",
    expBadge: "Principal Eng",
    blurb: "Full-Stack Architect · React/Next.js apps, APIs, dashboards & supervised AI.",
  },
  "azma-bisen": {
    roleShort: "Visual, Brand & Print Design",
    expBadge: "Design Director",
    blurb: "Brand & Print Lead · Identity systems, UI design, editorial & luxury packaging.",
  },
};

const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  const featuredTestimonial = TESTIMONIALS[0];
  const supportingTestimonials = [
    { ...TESTIMONIALS[1], caseSlug: "r80-rugby-print-catalogue" },
    { ...TESTIMONIALS[2], caseSlug: "edunuts-academy-mobile-app" },
    { ...TESTIMONIALS[3], caseSlug: "james-spencer-product-catalog" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
      {/* 1. HERO SECTION — Preserved 100% Untouched */}
      <section className="relative overflow-hidden bg-canvas bg-drafting-grid">
        {/* Soft top-right champagne-gold bloom */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-0 h-[440px] w-[440px] rounded-full bg-gold/15 blur-[130px]"
        />

        {/* Subtle Golden-Ratio Concentric Architectural Compass SVG behind right half */}
        <svg
          aria-hidden="true"
          viewBox="0 0 600 600"
          fill="none"
          className="pointer-events-none absolute right-[-60px] top-1/2 hidden h-[620px] w-[620px] -translate-y-1/2 lg:block"
        >
          <circle cx="300" cy="300" r="270" stroke="#0A192F" strokeOpacity="0.05" strokeDasharray="4 6" />
          <circle cx="300" cy="300" r="200" stroke="#0A192F" strokeOpacity="0.05" />
          <circle cx="300" cy="300" r="130" stroke="#0A192F" strokeOpacity="0.05" />
          <path
            d="M300 30 A270 270 0 0 1 570 300"
            stroke="#F5C518"
            strokeOpacity="0.28"
            strokeWidth="1.5"
          />
          <line x1="30" y1="300" x2="570" y2="300" stroke="#0A192F" strokeOpacity="0.04" />
          <line x1="300" y1="30" x2="300" y2="570" stroke="#0A192F" strokeOpacity="0.04" />
        </svg>

        {/* Bottom radial white fade into proof ledger */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/75 to-transparent"
        />

        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pb-12 lg:pt-9">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Hero Copy */}
            <div className="lg:col-span-6">
              {/* Elevated Studio Credential Pill */}
              <div className="inline-flex flex-wrap items-center gap-2.5 rounded-full border border-navy/10 bg-white py-1.5 pl-3.5 pr-2 shadow-[0_2px_12px_rgba(10,25,47,0.06)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                </span>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
                  US · EUROPE · AUSTRALIA · CANADA
                </span>
                <span className="rounded-full bg-navy px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-[0.14em] text-gold">
                  16+ YRS CRAFT
                </span>
              </div>

              {/* Balanced 3-Line Editorial Headline */}
              <h1 className="mt-6 text-4xl font-bold tracking-[-0.03em] text-navy sm:text-5xl xl:text-[58px] leading-[1.04]">
                <span className="block">Design &amp; Web Tech,</span>
                <span className="block">
                  <span className="font-editorial font-medium text-gold-deep">Crafted</span> for
                  Leaders.
                </span>
                <span className="block font-editorial font-medium text-navy/95">
                  Accelerated by AI.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-[17px]">
                A principal-only 3-member atelier—
                <strong className="font-semibold text-navy">Asif Bisen</strong>,{" "}
                <strong className="font-semibold text-navy">Rajpoot Talib</strong>, and{" "}
                <strong className="font-semibold text-navy">Azma Bisen</strong>—delivering{" "}
                <strong className="text-navy">Websites</strong>,{" "}
                <strong className="text-navy">Apps</strong>,{" "}
                <strong className="text-navy">SaaS Dashboards</strong>,{" "}
                <strong className="text-navy">Digital Products</strong>, and press-ready{" "}
                <strong className="text-navy">Graphic &amp; Print Design</strong> for startups,
                founders, and international companies.
              </p>

              {/* Horizontal Capability Bar */}
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[11px] font-medium text-navy/75">
                <span>Brand &amp; Print</span>
                <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                <span>Websites</span>
                <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                <span>Mobile &amp; Web Apps</span>
                <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                <span>SaaS Dashboards</span>
                <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                <span>AI Engineering</span>
              </div>

              {/* Harmonized Luxury Pill CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-navy py-2 pl-6 pr-2 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(10,25,47,0.24),inset_0_1px_0_rgba(255,255,255,0.16)] transition-all hover:bg-navy-mid hover:shadow-[0_18px_40px_rgba(10,25,47,0.3)] active:scale-[0.98]"
                >
                  <span>Book a Discovery Call</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-navy transition-transform duration-200 group-hover:scale-105">
                    <ArrowUpRight className="h-4 w-4 stroke-[2.25] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
                <Link
                  href="/packages"
                  className="inline-flex items-center gap-2.5 rounded-full border border-navy/15 bg-white px-5 py-3 text-sm font-semibold text-navy shadow-[0_2px_10px_rgba(10,25,47,0.05)] transition-all hover:border-gold hover:bg-gold-tint/60"
                >
                  <span>Explore Packages</span>
                  <span className="rounded-full bg-surface px-2.5 py-0.5 font-mono text-[10px] font-semibold text-gold-deep">
                    Hourly–Yearly
                  </span>
                </Link>
              </div>

              {/* Tertiary Trust & Portfolio Link Row */}
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-1.5 font-semibold text-navy hover:text-gold-deep transition-colors"
                >
                  <span>View Case Studies</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <span className="hidden h-3.5 w-px bg-navy/15 sm:inline-block" aria-hidden="true" />
                <span className="inline-flex items-center gap-1.5 font-medium text-ink-muted">
                  <ShieldCheck className="h-4 w-4 text-gold-deep" />
                  <span>Mutual NDA Ready · 100% IP Transfer</span>
                </span>
              </div>
            </div>

            {/* Conceptual Interactive Atelier Showcase */}
            <div className="lg:col-span-6">
              <StudioAtelierCanvas />
            </div>
          </div>

          {/* Full-Width 12-Column Architectural Proof Ledger */}
          <div className="mt-7 grid grid-cols-2 divide-y divide-navy/10 overflow-hidden rounded-2xl border border-navy/10 bg-white/95 shadow-[0_16px_45px_rgba(10,25,47,0.06)] backdrop-blur-md sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {TRUST_METRICS.map((m) => (
              <div key={m.label} className="p-4 sm:p-5">
                <span aria-hidden="true" className="block h-0.5 w-10 rounded-full bg-gold" />
                <div className="mt-2.5 font-mono text-2xl font-bold tracking-tight text-navy sm:text-[28px]">
                  {m.value}
                </div>
                <div className="mt-1 text-xs font-semibold text-navy sm:text-sm">{m.label}</div>
                <div className="mt-0.5 text-[11px] leading-snug text-ink-muted">{m.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. EXPERIENCE & GLOBAL TIMEZONE STRIP */}
      <LiveTimezoneStrip />

      {/* 3. WHAT WE DO — 4 Core Disciplines + Bespoke Schematics */}
      <section className="bg-surface py-16 text-navy lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                WHAT WE DO
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Everything Your Brand Needs.{" "}
                <span className="font-editorial text-gold-deep">
                  From Ink &amp; Paper to Production Code.
                </span>
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted sm:text-base">
                Four connected studio practices under one roof—explore specialized deliverables or
                jump directly to a tailored project brief.
              </p>
            </div>
            <Link
              href="/services"
              className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-navy py-2 pl-5 pr-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(10,25,47,0.18)] transition-all hover:bg-navy-mid lg:self-auto"
            >
              <span>Explore All {TOTAL_CATALOG_SERVICES} Services</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-navy transition-transform duration-200 group-hover:scale-105">
                <ArrowUpRight className="h-4 w-4 stroke-[2.25]" aria-hidden="true" />
              </span>
            </Link>
          </div>

          {/* 4 Bespoke Artwork Capability Cards (Zero Case Study Photo Duplication) */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_DISCIPLINES.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.05}>
                <div className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-navy/15 bg-white p-2.5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-gold hover:shadow-lg">
                  <div>
                    <Link href={item.href} className="block">
                      <DisciplineArtwork
                        id={item.artworkId}
                        variant="light"
                        number={item.specNumber}
                        tag={item.count}
                      />
                    </Link>
                    <div className="px-3.5 pt-4">
                      <Link href={item.href} className="block">
                        <h3 className="text-lg font-bold tracking-tight text-navy transition-colors group-hover:text-gold-deep">
                          {item.title}
                        </h3>
                      </Link>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                        {item.description}
                      </p>

                      {/* Clickable Sub-Category Chips */}
                      <div className="mt-3.5 flex flex-wrap gap-1.5">
                        {item.subLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="rounded-full border border-navy/12 bg-surface px-2.5 py-1 font-mono text-[10px] font-semibold text-navy transition-colors hover:border-gold hover:bg-navy hover:text-gold"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mx-3.5 mb-2 mt-4 flex items-center justify-between border-t border-navy/10 pt-3.5">
                    <span className="font-mono text-[10.5px] font-semibold text-ink-muted">
                      {item.anchor}
                    </span>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1 text-xs font-bold text-navy hover:text-gold-deep"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-gold-deep" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Connected Studio Positioning Strip (Including AI Engineering) */}
          <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl border border-navy/12 bg-white p-6 lg:flex-row lg:items-center">
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-gold-deep">
                ONE STUDIO · CONNECTED CAPABILITIES
              </p>
              <p className="mt-1 text-base font-semibold text-navy">
                From Brand Identity to Digital Product &amp; AI—Zero Vendor Fragmentation
              </p>
              <p className="mt-1 text-sm text-ink-muted">
                Establish your visual identity, launch a website, build a mobile app, and scale into
                an AI-accelerated SaaS platform with one senior team.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs font-semibold text-navy shrink-0">
              {[
                { label: "Brand & Print", href: "/graphic-design" },
                { label: "Website", href: "/website" },
                { label: "Mobile App", href: "/mobile-app" },
                { label: "SaaS Platform", href: "/services/dashboards-saas" },
                { label: "AI Engineering", href: "/ai-engineering" },
              ].map((step, i) => (
                <React.Fragment key={step.label}>
                  <Link
                    href={step.href}
                    className="rounded-full border border-navy/15 bg-surface px-3 py-1.5 transition-colors hover:border-gold hover:bg-navy hover:text-gold"
                  >
                    {step.label}
                  </Link>
                  {i < 4 && (
                    <span className="text-gold-deep" aria-hidden="true">
                      →
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SELECTED WORK — Filterable Showcase with Metrics */}
      <HomeSelectedWorkSection />

      {/* 5. UNIFIED STUDIO & AI ADVANTAGE — Interactive Benchmark & 4 Governance Pillars */}
      <HomeAiAdvantageSection />

      {/* 6. SOLUTIONS BY STAGE + 5-STEP PROCESS RAIL */}
      <section className="bg-surface py-16 text-navy lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
              SOLUTIONS BY STAGE
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Built for Startups, Brands &amp; Growing Companies
            </h2>
            <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">
              Select the collaboration track that matches your current growth stage and shipping
              horizon.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BUSINESS_SOLUTIONS.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <Reveal key={sol.stage} delay={idx * 0.05}>
                  <Link
                    href={sol.href}
                    className="group flex h-full flex-col justify-between rounded-2xl border border-navy/15 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-gold hover:shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-gold">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="rounded-full border border-navy/12 bg-surface px-2.5 py-1 font-mono text-[10px] font-bold text-gold-deep">
                          {sol.recommendedPlan}
                        </span>
                      </div>

                      <h3 className="mt-4 text-lg font-bold text-navy group-hover:text-gold-deep">
                        {sol.stage}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                        {sol.description}
                      </p>
                    </div>

                    <div className="mt-5 border-t border-navy/10 pt-4">
                      <div className="font-mono text-[10.5px] font-semibold text-navy/70">
                        {sol.deliverables}
                      </div>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-navy group-hover:text-gold-deep">
                        <span>{sol.cta}</span>
                        <ArrowUpRight className="h-4 w-4 text-gold-deep" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          {/* Compact 5-Step "How Engagement Works" Architectural Rail */}
          <div className="mt-12 rounded-3xl border border-navy/12 bg-white p-6 shadow-xs sm:p-8">
            <div className="flex flex-col justify-between gap-3 border-b border-navy/10 pb-5 sm:flex-row sm:items-center">
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-gold-deep">
                  HOW ENGAGEMENT WORKS
                </p>
                <h3 className="mt-1 text-xl font-bold text-navy">
                  From First Discovery Call to 100% IP Handover
                </h3>
              </div>
              <Link
                href="/about#our-story"
                className="inline-flex shrink-0 items-center gap-1.5 font-mono text-xs font-semibold text-navy hover:text-gold-deep"
              >
                <span>Read Our Studio Process</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-gold-deep" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {ENGAGEMENT_STEPS.map((st) => (
                <div
                  key={st.step}
                  className="flex flex-col justify-between rounded-2xl border border-navy/10 bg-surface p-4"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-navy font-mono text-xs font-bold text-gold">
                        {st.step}
                      </span>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-gold-deep">
                        {st.timing}
                      </span>
                    </div>
                    <h4 className="mt-3 text-sm font-bold text-navy">{st.title}</h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
                      {st.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FLEXIBLE ENGAGEMENT MODELS — Enriched 4-Card Summary */}
      <section className="bg-canvas py-16 text-navy lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                FLEXIBLE ENGAGEMENT MODELS
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Work With Us, Your Way.
              </h2>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">
                From targeted 5-hour fixes to dedicated annual design &amp; engineering
                partnerships.
              </p>
            </div>
            <Link
              href="/packages"
              className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-navy py-2 pl-5 pr-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(10,25,47,0.18)] transition-all hover:bg-navy-mid lg:self-auto"
            >
              <span>Full Breakdown &amp; Estimator</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-navy transition-transform duration-200 group-hover:scale-105">
                <ArrowUpRight className="h-4 w-4 stroke-[2.25]" aria-hidden="true" />
              </span>
            </Link>
          </div>

          <HomePackagesPreview />
        </div>
      </section>

      {/* 8. MEET YOUR SENIOR TEAM — Enriched Principal Cards */}
      <section className="bg-surface py-16 text-navy lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                THE PEOPLE BEHIND THE WORK
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Three Principals. One Creative Vision.
              </h2>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">
                Direct collaboration with the exact founders and leads shaping your brand and
                writing your production code.
              </p>
            </div>
            <Link
              href="/about"
              className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-navy/15 bg-white py-2 pl-5 pr-2 text-sm font-semibold text-navy shadow-xs transition-all hover:border-navy hover:bg-navy hover:text-white lg:self-auto"
            >
              <span>Meet the Team &amp; Story</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-navy transition-transform duration-200 group-hover:scale-105">
                <ArrowUpRight className="h-4 w-4 stroke-[2.25]" aria-hidden="true" />
              </span>
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TEAM_MEMBERS.map((member, idx) => {
              const compact = PRINCIPAL_ONE_LINERS[member.id];
              const firstCase = CASE_STUDIES.find(
                (c) => c.slug === member.featuredCaseSlugs?.[0]
              );
              return (
                <Reveal key={member.id} delay={idx * 0.05}>
                  <div className="group flex h-full flex-col justify-between rounded-3xl border border-navy/15 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-gold hover:shadow-md">
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-4">
                          {member.photoPath ? (
                            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-gold bg-navy">
                              <Image
                                src={member.photoPath}
                                alt={member.name}
                                fill
                                sizes="64px"
                                className="object-cover object-top"
                              />
                            </div>
                          ) : (
                            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-navy font-mono text-xl font-bold text-white shadow-sm">
                              <span>{member.initials}</span>
                              <span
                                aria-hidden="true"
                                className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-gold"
                              />
                            </div>
                          )}
                          <div>
                            <h3 className="text-xl font-bold text-navy">{member.name}</h3>
                            <p className="text-xs font-semibold text-gold-deep">
                              {compact?.roleShort ?? member.role}
                            </p>
                          </div>
                        </div>
                        <span className="shrink-0 rounded-full border border-navy/12 bg-surface px-2.5 py-1 font-mono text-[10px] font-bold text-navy">
                          {compact?.expBadge ?? member.experience}
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                        {compact?.blurb ?? member.tagline}
                      </p>

                      {/* Core Tools / Stack Chips */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {member.tools.slice(0, 3).map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full border border-navy/10 bg-surface px-2.5 py-1 font-mono text-[10px] font-medium text-navy"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 space-y-3 border-t border-navy/10 pt-4">
                      {firstCase && (
                        <Link
                          href={`/work/${firstCase.slug}`}
                          className="flex items-center justify-between gap-2 rounded-xl border border-navy/10 bg-surface/80 px-3 py-2 text-xs transition-colors hover:border-gold hover:bg-gold-tint/50"
                        >
                          <span className="truncate font-medium text-navy">
                            <span className="font-mono text-[10px] font-bold uppercase text-gold-deep">
                              Led:{" "}
                            </span>
                            {firstCase.client}
                          </span>
                          <ArrowUpRight
                            className="h-3.5 w-3.5 shrink-0 text-gold-deep"
                            aria-hidden="true"
                          />
                        </Link>
                      )}

                      <Link
                        href={`/about#${member.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-gold-deep"
                      >
                        <span>View Full Profile &amp; Work Samples</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-gold-deep" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. CLIENT STORIES & TRUST (Balanced Layout + Region Badges) */}
      <section className="bg-canvas py-16 text-navy lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                CLIENT EXPERIENCES
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Built on Craft. Strengthened by Trust.
              </h2>
            </div>
            <Link
              href="/work"
              className="shrink-0 text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-deep"
            >
              Inspect Project Outcomes →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            {/* Featured Highlight Quote with Documented Result Strip */}
            <blockquote className="flex flex-col justify-between rounded-3xl border border-navy/15 bg-navy p-8 text-white shadow-lg lg:col-span-5">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <Quote className="h-6 w-6 text-gold" aria-hidden="true" />
                  <span className="rounded-full bg-gold px-3 py-1 font-mono text-[11px] font-bold text-navy">
                    {featuredTestimonial.regionTag} · {featuredTestimonial.engagement}
                  </span>
                </div>

                <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
                  &ldquo;{featuredTestimonial.quote}&rdquo;
                </p>

                {/* Verified Outcome Strip to Eliminate Dead Vertical Space */}
                <div className="mt-6 grid grid-cols-3 gap-2.5 rounded-2xl border border-white/15 bg-navy-mid/90 p-3.5">
                  <div>
                    <div className="font-mono text-base font-bold text-gold">68%</div>
                    <div className="text-[10.5px] text-white/75">Faster Close</div>
                  </div>
                  <div>
                    <div className="font-mono text-base font-bold text-gold">5 Wks</div>
                    <div className="text-[10.5px] text-white/75">vs. 4 Months</div>
                  </div>
                  <div>
                    <div className="font-mono text-base font-bold text-gold">99/100</div>
                    <div className="text-[10.5px] text-white/75">Lighthouse</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-white/15 pt-5">
                <p className="font-semibold text-white">{featuredTestimonial.author}</p>
                <p className="text-xs text-white/75">
                  {featuredTestimonial.role}, {featuredTestimonial.company} ·{" "}
                  {featuredTestimonial.location}
                </p>
                <Link
                  href="/work/ces-enterprise-event-operations-2026"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:text-white"
                >
                  <span>Inspect Live SaaS &amp; Dashboard Work</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </blockquote>

            {/* Supporting Client Stories Tied to Case Studies + Region Tags */}
            <div className="grid gap-5 lg:col-span-7">
              {supportingTestimonials.map((t) => (
                <blockquote
                  key={t.author}
                  className="flex flex-col justify-between rounded-2xl border border-navy/12 bg-surface p-6 transition-colors hover:border-gold/70"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Quote className="h-4 w-4 text-gold-deep" aria-hidden="true" />
                    <span className="rounded-full border border-navy/12 bg-white px-2.5 py-0.5 font-mono text-[10px] font-bold text-navy">
                      {t.regionTag} · {t.engagement}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-navy/90 sm:text-[15px]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-navy/10 pt-3">
                    <div>
                      <span className="text-sm font-semibold text-navy">{t.author}</span>
                      <span className="block text-xs text-ink-muted">
                        {t.role}, {t.company} · {t.location}
                      </span>
                    </div>
                    <Link
                      href={`/work/${t.caseSlug}`}
                      className="inline-flex items-center gap-1 rounded-full border border-navy/12 bg-white px-3 py-1 font-mono text-xs font-semibold text-navy transition-colors hover:border-gold hover:text-gold-deep"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. BUYER FAQ ACCORDION */}
      <HomeFaqAccordion />

      {/* 11. FINAL CONVERSION CTA — Smart Project Brief Vault */}
      <section className="bg-surface pb-20 pt-4 lg:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border-2 border-gold bg-navy bg-navy-blueprint px-6 py-14 text-center text-white shadow-[0_30px_80px_rgba(10,25,47,0.22)] sm:px-12 lg:py-16">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              LET&apos;S CREATE SOMETHING EXCEPTIONAL
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to Ship Something{" "}
              <span className="font-editorial text-gold">Remarkable?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/82 sm:text-lg">
              Tell us what you&apos;re building. Share your goals, timeline, and preferred cadence,
              and our three principals will respond with clear next steps.
            </p>

            {/* Unified Luxury Pill CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/start-project"
                className="group inline-flex items-center gap-3 rounded-full bg-gold py-2 pl-6 pr-2 text-sm font-bold text-navy shadow-lg transition-all hover:bg-gold-bright active:scale-[0.98]"
              >
                <span>Start Your Project Brief</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-gold transition-transform duration-200 group-hover:scale-105">
                  <ArrowUpRight className="h-4 w-4 stroke-[2.25]" aria-hidden="true" />
                </span>
              </Link>
              <Link
                href="/contact?package=unsure&topic=discovery-call&source=home-final-cta"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-navy-mid px-6 py-3 text-sm font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                <span>Book a Discovery Call</span>
                <ArrowRight className="h-4 w-4 text-gold" aria-hidden="true" />
              </Link>
            </div>

            {/* Trust Micro-Proof Strip + Direct Email */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/12 pt-6 font-mono text-xs text-white/80">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                <span>Reply within 12 business hours</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                <span>Mutual NDA ready</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                <span>100% client IP ownership</span>
              </span>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center gap-1.5 text-gold underline decoration-gold/40 underline-offset-4 hover:text-white"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{SITE_CONFIG.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
