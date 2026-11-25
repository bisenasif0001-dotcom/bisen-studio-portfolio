import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, Sparkles } from "lucide-react";
import {
  GRAPHIC_DESIGN_CATEGORIES,
  getGraphicCategoryBySlug,
} from "@/data/graphicDesignCatalog";
import { CASE_STUDIES, type CaseStudy } from "@/data/portfolio";
import { GraphicCategoryArtwork } from "@/components/ui/GraphicCategoryArtwork";
import { GraphicCategoryRail } from "@/components/sections/GraphicCategoryRail";
import { GraphicCategoryServiceGrid } from "@/components/sections/GraphicCategoryServiceGrid";
import { GraphicDesignPricingBand } from "@/components/sections/GraphicDesignPricingBand";
import { GraphicDesignFaqAccordion } from "@/components/sections/GraphicDesignFaqAccordion";

export function generateStaticParams() {
  return GRAPHIC_DESIGN_CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const cat = getGraphicCategoryBySlug(categorySlug);
  if (!cat) {
    return { title: "Graphic Design Category Not Found" };
  }
  return {
    title: `${cat.fullTitle} — Bisen Studio`,
    description: cat.heroSummary,
  };
}

const EXECUTION_STEPS = [
  {
    step: "01",
    title: "Brief & Creative Audit",
    detail: "Share goals, references, or factory specs. Direct review within 12 business hours.",
  },
  {
    step: "02",
    title: "Senior Craft & Proofing",
    detail: "First strategic concepts delivered in 48–72h with transparent press/screen proofing.",
  },
  {
    step: "03",
    title: "Native Masters & Full IP",
    detail: "Organized editable source files, color specs, and 100% client IP transfer.",
  },
];

export default async function GraphicDesignCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getGraphicCategoryBySlug(categorySlug);
  if (!category) notFound();

  const relatedCases = category.relatedCaseSlugs
    .map((slug) => CASE_STUDIES.find((c) => c.slug === slug))
    .filter((c): c is CaseStudy => Boolean(c));

  const leadTurnaround = category.services[0]?.turnaround ?? "3–7 Business Days";
  const leadFormat = category.services[0]?.nativeFormats ?? "Figma · AI · INDD · PDF";

  return (
    <div className="bg-canvas text-navy">
      {/* 1. CATEGORY HERO WITH BESPOKE CRAFT ARTBOARD */}
      <section className="border-b-2 border-gold bg-navy bg-navy-blueprint py-14 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Left Copy, Terms, CTAs & Hairline Proof Ledger */}
            <div className="lg:col-span-6">
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/70"
              >
                <Link href="/work" className="transition-colors hover:text-gold">
                  Work
                </Link>
                <span aria-hidden="true">/</span>
                <Link href="/graphic-design" className="transition-colors hover:text-gold">
                  Graphic Design
                </Link>
                <span aria-hidden="true">/</span>
                <span className="font-semibold text-gold">{category.menuTitle}</span>
              </nav>

              <h1 className="mt-5 text-3xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl">
                {category.heroHeadline}{" "}
                <span className="font-editorial text-gold">{category.heroAccent}</span>
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
                {category.heroSummary}
              </p>

              {/* Category Design Terms */}
              <div className="mt-6 flex flex-wrap gap-2">
                {category.designTerms.map((term) => (
                  <span
                    key={term}
                    className="rounded-full border border-white/15 bg-navy-mid px-3 py-1 font-mono text-[11px] text-gold"
                  >
                    {term}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={`/contact?service=graphic-design&topic=${category.slug}`}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gold py-2 pl-5 pr-2 text-xs font-bold text-navy shadow-[0_10px_28px_rgba(245,197,24,0.2)] transition-all hover:bg-gold-bright sm:text-sm"
                >
                  <span>Get a Free Quote</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-gold transition-transform duration-200 group-hover:scale-105">
                    <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" />
                  </span>
                </Link>
                <Link
                  href="/packages"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-navy-mid/80 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:border-gold hover:text-gold sm:text-sm"
                >
                  <span>Hire a Designer</span>
                </Link>
              </div>

              {/* Clean Hairline Ledger */}
              <dl className="mt-9 grid grid-cols-3 gap-5 border-t border-white/12 pt-5">
                <div>
                  <dt className="font-mono text-base font-bold text-gold sm:text-lg">
                    {category.services.length} Services
                  </dt>
                  <dd className="mt-0.5 text-[11px] text-white/70">Focused Specialties</dd>
                </div>
                <div>
                  <dt className="font-mono text-base font-bold text-gold sm:text-lg">12h SLA</dt>
                  <dd className="mt-0.5 text-[11px] text-white/70">US · UK · EU · AU · CA</dd>
                </div>
                <div>
                  <dt className="font-mono text-base font-bold text-gold sm:text-lg">100% IP</dt>
                  <dd className="mt-0.5 text-[11px] text-white/70">Editable Source Files</dd>
                </div>
              </dl>
            </div>

            {/* Right Bespoke Category Visual Plate */}
            <div className="lg:col-span-6">
              <GraphicCategoryArtwork
                categorySlug={category.slug}
                categoryNumber={category.number}
                categoryTitle={category.menuTitle}
                turnaroundLabel={leadTurnaround}
                formatLabel={leadFormat}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. BODY: SINGLE-ROW RAIL + INTERACTIVE SERVICE GRID + PROCESS + PORTFOLIO + PRICING + FAQ */}
      <section className="bg-surface/65 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Sleek Single-Row Scrollable 10-Category Rail */}
          <GraphicCategoryRail activeSlug={category.slug} />

          {/* Services Header */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                {category.fullTitle.toUpperCase()}
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                {category.services.length} Specialized {category.menuTitle} Services
              </h2>
            </div>
            <span className="font-mono text-xs text-ink-muted">
              Click any card to preview deliverables or inspect full specs
            </span>
          </div>

          {/* Interactive Service Grid + Orphan-Slot Bundle Card */}
          <GraphicCategoryServiceGrid category={category} />

          {/* 3-Step Execution Process Ribbon */}
          <div className="mt-16 rounded-[24px] border border-navy/12 bg-white p-6 shadow-xs sm:p-8">
            <div className="grid gap-6 md:grid-cols-3 md:divide-x md:divide-navy/10">
              {EXECUTION_STEPS.map((st, i) => (
                <div key={st.step} className={i > 0 ? "md:pl-6" : undefined}>
                  <div className="font-mono text-xs font-bold text-gold-deep">
                    STEP {st.step}
                  </div>
                  <h3 className="mt-1.5 text-base font-semibold text-navy">{st.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink-muted">{st.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Curated Portfolio Case Studies */}
          {relatedCases.length > 0 && (
            <div className="mt-16">
              <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>SELECTED STUDIO PORTFOLIO</span>
                  </div>
                  <h2 className="mt-1.5 text-2xl font-semibold text-navy">
                    Related Case Studies for {category.menuTitle}
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
                {relatedCases.map((study) => (
                  <article
                    key={study.slug}
                    className="group overflow-hidden rounded-[24px] border border-navy/12 bg-white shadow-xs transition-all hover:border-gold hover:shadow-lg"
                  >
                    <div className="grid items-stretch sm:grid-cols-12">
                      <Link
                        href={`/work/${study.slug}`}
                        className="relative block aspect-[16/10] bg-navy sm:col-span-5 sm:aspect-auto"
                      >
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </Link>
                      <div className="flex flex-col justify-between p-5 sm:col-span-7">
                        <div>
                          <span className="inline-block rounded-full bg-gold px-2.5 py-0.5 font-mono text-[10px] font-bold text-navy">
                            {study.regionCode} · {study.year}
                          </span>
                          <h3 className="mt-2.5 text-base font-semibold text-navy transition-colors group-hover:text-gold-deep">
                            <Link href={`/work/${study.slug}`}>{study.title}</Link>
                          </h3>
                          <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-ink-muted">
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
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Engagement & Multi-Currency Pricing CTA */}
          <div className="mt-16">
            <GraphicDesignPricingBand
              serviceSlug={category.slug}
              serviceTitle={category.menuTitle}
            />
          </div>

          {/* Collapsible Buyer FAQ Accordion */}
          <div className="mt-16">
            <GraphicDesignFaqAccordion
              subjectTitle={category.fullTitle}
              turnaround={leadTurnaround}
              nativeFormats={leadFormat}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
