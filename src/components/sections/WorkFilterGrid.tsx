"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES, PORTFOLIO_CATEGORIES, type PortfolioCategory } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function WorkFilterGrid() {
  const [active, setActive] = useState<PortfolioCategory>("All");

  const filtered =
    active === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.category === active);

  return (
    <div>
      {/* Filter Pills */}
      <div
        role="tablist"
        aria-label="Filter case studies by discipline"
        className="mb-10 flex flex-wrap gap-2"
      >
        {PORTFOLIO_CATEGORIES.map((cat) => {
          const count =
            cat === "All"
              ? CASE_STUDIES.length
              : CASE_STUDIES.filter((c) => c.category === cat).length;
          const isSelected = active === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isSelected}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all",
                isSelected
                  ? "border-navy bg-navy text-white shadow-sm"
                  : "border-navy/15 bg-white text-navy/75 hover:border-navy/40 hover:text-navy"
              )}
            >
              <span>{cat}</span>
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 font-mono text-[10px] font-bold",
                  isSelected ? "bg-gold text-navy" : "bg-surface text-ink-muted"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Case Studies Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {filtered.map((study) => (
          <article
            key={study.slug}
            className="group flex flex-col overflow-hidden rounded-2xl border border-navy/12 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-navy/35 hover:shadow-xl"
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
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/20 bg-navy/90 px-3 py-1 font-mono text-[11px] font-medium text-white backdrop-blur-md">
                  {study.category}
                </span>
                <span className="rounded-full bg-gold px-2.5 py-1 font-mono text-[11px] font-bold text-navy">
                  {study.regionCode}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                <span className="font-mono">{study.region}</span>
                <span className="font-mono font-semibold text-gold">{study.engagementModel}</span>
              </div>
            </Link>

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-navy group-hover:text-gold-deep transition-colors">
                  <Link href={`/work/${study.slug}`} className="block">
                    {study.title}
                  </Link>
                </h3>
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

              <div className="mt-5 flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {study.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-navy/10 bg-surface px-2.5 py-1 font-mono text-[10px] text-navy/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/work/${study.slug}`}
                  className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-navy px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-navy-mid"
                >
                  <span>Read Case</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-gold" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
