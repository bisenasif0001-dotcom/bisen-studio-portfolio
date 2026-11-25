"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { CASE_STUDIES, BEHANCE_PROFILE, PORTFOLIO_CATEGORIES, type PortfolioCategory } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const PORTFOLIO_FILTERS: {
  id: PortfolioCategory;
  label: string;
}[] = [
  { id: "All", label: "All Projects" },
  { id: "Graphic Design", label: "Graphic Design" },
  { id: "Websites", label: "Websites" },
  { id: "Web & Mobile Apps", label: "Mobile Apps" },
  { id: "Dashboards & SaaS", label: "Dashboards & SaaS" },
];

export function WorkPortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>("All");
  const [liveOnly, setLiveOnly] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category") as PortfolioCategory | null;
    if (cat && PORTFOLIO_CATEGORIES.includes(cat)) {
      setSelectedCategory(cat);
    }
    if (params.get("live") === "1") {
      setLiveOnly(true);
    }
  }, []);

  const liveCount = CASE_STUDIES.filter((c) => Boolean(c.liveUrl)).length;
  const baseStudies = liveOnly ? CASE_STUDIES.filter((c) => Boolean(c.liveUrl)) : CASE_STUDIES;
  const visibleStudies =
    selectedCategory === "All"
      ? baseStudies
      : baseStudies.filter((c) => c.category === selectedCategory);

  return (
    <div>
      {/* Portfolio-Only Interactive Category Filter Bar */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div
          role="tablist"
          aria-label="Filter published case studies by discipline"
          className="inline-flex flex-wrap items-center gap-1.5 rounded-2xl border border-navy/12 bg-white p-1.5 shadow-[0_4px_20px_rgba(10,25,47,0.06)]"
        >
          {PORTFOLIO_FILTERS.map((tab) => {
            const count =
              tab.id === "All"
                ? CASE_STUDIES.length
                : CASE_STUDIES.filter((c) => c.category === tab.id).length;
            const isSelected = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(tab.id)}
                className={cn(
                  "inline-flex cursor-pointer items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-none sm:text-sm",
                  isSelected
                    ? "bg-navy text-white shadow-sm ring-1 ring-gold/50"
                    : "text-navy/75 hover:bg-surface hover:text-navy"
                )}
              >
                <span>{tab.label}</span>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 font-mono text-[10px] font-bold leading-none",
                    isSelected ? "bg-gold text-navy" : "bg-surface text-ink-muted"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            aria-pressed={liveOnly}
            onClick={() => setLiveOnly((v) => !v)}
            className={cn(
              "transition-none inline-flex cursor-pointer items-center gap-2 rounded-full border px-3.5 py-2 font-mono text-xs font-semibold",
              liveOnly
                ? "border-navy bg-navy text-gold shadow-xs"
                : "border-navy/15 bg-white text-navy hover:border-gold"
            )}
          >
            <span
              className={cn(
                "h-2 w-2 rounded-full",
                liveOnly ? "bg-emerald-400" : "bg-emerald-500"
              )}
              aria-hidden="true"
            />
            <span>Live Websites &amp; Apps ({liveCount})</span>
          </button>
          {selectedCategory === "Dashboards & SaaS" && (
            <Link
              href="/work/dashboards-saas"
              className="inline-flex items-center gap-1.5 rounded-full border border-navy/15 bg-white px-4 py-2 font-mono text-xs font-semibold text-navy shadow-2xs transition-colors hover:border-gold hover:text-gold-deep"
            >
              <span>Open Dashboards &amp; SaaS Exhibition</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          )}
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
            Showing {visibleStudies.length} Published{" "}
            {visibleStudies.length === 1 ? "Project" : "Projects"}
          </span>
        </div>
      </div>

      {/* Filtered Visual Case Study Exhibition Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {visibleStudies.map((study) => (
          <article
            key={study.slug}
            className="group flex flex-col overflow-hidden rounded-[24px] border border-navy/12 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-navy">
              <Link href={`/work/${study.slug}`} className="block h-full w-full">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </Link>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedCategory(study.category)}
                  className="cursor-pointer rounded-full border border-white/25 bg-navy/90 px-3 py-1 font-mono text-[11px] font-medium text-white backdrop-blur-md transition-colors hover:border-gold hover:text-gold"
                >
                  {study.category}
                </button>
                <span className="rounded-full bg-gold px-2.5 py-1 font-mono text-[11px] font-bold text-navy">
                  {study.regionCode}
                </span>
              </div>
              {study.liveUrl && (
                <div className="absolute right-4 top-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/50 bg-navy/90 px-2.5 py-1 font-mono text-[10px] font-bold text-emerald-300 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                    <span>{study.deploymentBadge ?? "LIVE SITE"}</span>
                  </span>
                </div>
              )}
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                <span className="font-mono">{study.region}</span>
                <span className="font-mono font-semibold text-gold">
                  {study.engagementModel}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-navy transition-colors group-hover:text-gold-deep">
                  <Link href={`/work/${study.slug}`} className="block">
                    {study.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{study.summary}</p>

                {/* Metrics Strip */}
                <div className="mt-6 grid grid-cols-3 gap-3 border-y border-navy/10 py-4">
                  {study.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-mono text-base font-bold text-navy sm:text-lg">
                        {m.value}
                      </div>
                      <div className="mt-0.5 text-[11px] leading-snug text-ink-muted">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {study.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-navy/10 bg-surface px-2.5 py-1 font-mono text-[10px] text-navy/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {study.liveUrl && (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-1 rounded-full border border-navy/15 bg-surface px-3 py-1.5 font-mono text-[11px] font-semibold text-navy transition-colors hover:border-gold hover:bg-gold-tint"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="h-3 w-3 text-gold-deep" aria-hidden="true" />
                    </a>
                  )}
                  {!study.liveUrl && study.behanceUrl && (
                    <a
                      href={study.behanceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-1 rounded-full border border-navy/15 bg-surface px-3 py-1.5 font-mono text-[11px] font-semibold text-navy transition-colors hover:border-gold hover:bg-gold-tint"
                    >
                      <span>Behance</span>
                      <ExternalLink className="h-3 w-3 text-gold-deep" aria-hidden="true" />
                    </a>
                  )}
                  <Link
                    href={`/work/${study.slug}`}
                    className="group/btn inline-flex shrink-0 items-center gap-2 rounded-full bg-navy py-1.5 pl-4 pr-1.5 text-xs font-semibold text-white transition-all hover:bg-navy-mid"
                  >
                    <span>Read Case</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-navy transition-transform duration-200 group-hover/btn:scale-105">
                      <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Behance Live Portfolio Archive Strip */}
      <div className="mt-12 flex flex-col justify-between gap-4 rounded-2xl border border-navy/15 bg-white p-6 shadow-xs sm:flex-row sm:items-center">
        <div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-gold-deep">
            COMPLETE BEHANCE ARCHIVE · {BEHANCE_PROFILE.name.toUpperCase()}
          </p>
          <h2 className="mt-1 text-lg font-bold text-navy sm:text-xl">
            Browse All {BEHANCE_PROFILE.totalPublished} Published Projects ({BEHANCE_PROFILE.totalViews} Views)
          </h2>
          <p className="mt-1 text-sm text-ink-muted">
            Inspect our full archive of print brochures, logos, product catalogues, web templates,
            and advertising creatives directly on Behance.
          </p>
        </div>
        <a
          href={BEHANCE_PROFILE.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex shrink-0 items-center gap-2.5 self-start rounded-full bg-navy py-2 pl-5 pr-2 text-xs font-semibold text-white transition-all hover:bg-navy-mid sm:self-auto"
        >
          <span>Open Full Behance Portfolio</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-navy transition-transform duration-200 group-hover:scale-105">
            <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" aria-hidden="true" />
          </span>
        </a>
      </div>

      {/* Portfolio-Specific Conversion Banner */}
      <div className="mt-16 rounded-3xl border-2 border-gold bg-navy bg-navy-blueprint p-8 text-white shadow-xl sm:p-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-gold">
              INSPIRED BY OUR WORK?
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Let’s Build Your Next High-Impact Project.
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/80">
              See how our 3-member senior team moves ideas from Figma &amp; strategy to live
              international production with 100% client IP ownership.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <Link
              href="/services"
              className="rounded-full border border-white/25 bg-navy-mid px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:border-gold hover:text-gold sm:text-sm"
            >
              Explore Services (239)
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold py-2 pl-5 pr-2 text-xs font-bold text-navy transition-all hover:bg-gold-bright sm:text-sm"
            >
              <span>Start Similar Project</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-gold transition-transform duration-200 group-hover:scale-105">
                <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
