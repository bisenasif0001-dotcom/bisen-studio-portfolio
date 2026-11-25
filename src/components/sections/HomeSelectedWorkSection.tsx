"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES, type PortfolioCategory } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type HomeWorkFilter = "All" | PortfolioCategory;

const WORK_TABS: { id: HomeWorkFilter; label: string }[] = [
  { id: "All", label: "All Featured" },
  { id: "Dashboards & SaaS", label: "Dashboards & SaaS" },
  { id: "Web & Mobile Apps", label: "Mobile Apps" },
  { id: "Websites", label: "Websites" },
  { id: "Graphic Design", label: "Brand & Print" },
];

export function HomeSelectedWorkSection() {
  const [filter, setFilter] = useState<HomeWorkFilter>("All");

  const filtered =
    filter === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.category === filter);

  const visible = filtered.slice(0, 6);
  const leadProject = visible[0];
  const supportingProjects = visible.slice(1, 4);
  const extraProjects = visible.slice(4, 6);

  return (
    <section className="bg-navy bg-navy-blueprint py-16 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              SELECTED WORK
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Selected Work.{" "}
              <span className="font-editorial text-gold">Thoughtfully Designed.</span> Expertly
              Built.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/80 sm:text-base">
              Ideas made real across US, UK, EU, Australian, and Canadian engagements—filter by
              discipline or inspect documented outcomes.
            </p>
          </div>

          <Link
            href="/work"
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-gold/45 bg-navy-mid py-2 pl-5 pr-2 text-sm font-semibold text-white transition-all hover:border-gold hover:bg-navy-soft lg:self-auto"
          >
            <span>View All {CASE_STUDIES.length} Case Studies</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-navy transition-transform duration-200 group-hover:scale-105">
              <ArrowUpRight className="h-4 w-4 stroke-[2.25]" aria-hidden="true" />
            </span>
          </Link>
        </div>

        {/* Discipline Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div
            role="tablist"
            aria-label="Filter featured case studies"
            className="inline-flex flex-wrap items-center gap-1 rounded-full border border-white/15 bg-navy-deep/85 p-1"
          >
            {WORK_TABS.map((tab) => {
              const count =
                tab.id === "All"
                  ? CASE_STUDIES.length
                  : CASE_STUDIES.filter((c) => c.category === tab.id).length;
              const isSelected = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setFilter(tab.id)}
                  className={cn(
                    "transition-none inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold",
                    isSelected
                      ? "bg-gold text-navy shadow-xs"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <span>{tab.label}</span>
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-0.5 font-mono text-[10px] font-bold leading-none",
                      isSelected ? "bg-navy text-gold" : "bg-white/10 text-white/75"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
          <span className="font-mono text-xs text-white/65">
            Showing {filtered.length} published {filtered.length === 1 ? "project" : "projects"}
          </span>
        </div>

        {/* Asymmetric Lead + Supporting Gallery */}
        {leadProject && (
          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            {/* Large Primary Feature */}
            <Link
              href={`/work/${leadProject.slug}`}
              className={cn(
                "group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-navy-mid transition-all hover:border-gold/70",
                supportingProjects.length > 0 ? "lg:col-span-7" : "lg:col-span-12"
              )}
            >
              <div>
                <div
                  className={cn(
                    "relative w-full overflow-hidden bg-navy-deep",
                    supportingProjects.length > 0 ? "aspect-[16/10]" : "aspect-[21/9]"
                  )}
                >
                  <Image
                    src={leadProject.image}
                    alt={leadProject.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/75 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-navy/90 px-3 py-1 font-mono text-[11px] font-semibold text-white">
                      {leadProject.category}
                    </span>
                    <span className="rounded-full bg-gold px-2.5 py-1 font-mono text-[11px] font-bold text-navy">
                      {leadProject.regionCode}
                    </span>
                    {leadProject.liveUrl && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/50 bg-navy/90 px-2.5 py-1 font-mono text-[10.5px] font-bold text-emerald-300 backdrop-blur-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                        <span>LIVE SITE</span>
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-mono text-xs text-gold">
                    {leadProject.region} · {leadProject.engagementModel} · {leadProject.timeline}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white group-hover:text-gold">
                    {leadProject.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/80">
                    {leadProject.summary}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/12 px-6 py-4">
                <div className="flex flex-wrap gap-6">
                  {leadProject.metrics.slice(0, 3).map((m) => (
                    <div key={m.label}>
                      <span className="font-mono text-base font-bold text-gold">{m.value}</span>
                      <span className="block text-[11px] text-white/70">{m.label}</span>
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3.5 py-1.5 text-xs font-bold text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                  <span>View Case Study</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </Link>

            {/* Right Stack of Supporting Case Cards with ROI Metrics */}
            {supportingProjects.length > 0 && (
              <div className="flex flex-col gap-5 lg:col-span-5">
                {supportingProjects.map((cs) => (
                  <Link
                    key={cs.slug}
                    href={`/work/${cs.slug}`}
                    className="group grid grid-cols-12 overflow-hidden rounded-2xl border border-white/15 bg-navy-mid transition-all hover:border-gold/70"
                  >
                    <div className="relative col-span-5 min-h-[156px] bg-navy-deep">
                      <Image
                        src={cs.image}
                        alt={cs.title}
                        fill
                        sizes="(max-width: 1024px) 40vw, 20vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
                      {cs.metrics[0] && (
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 rounded-lg bg-navy/90 px-2.5 py-1 backdrop-blur-xs">
                          <span className="font-mono text-xs font-bold text-gold">
                            {cs.metrics[0].value}
                          </span>
                          <span className="ml-1.5 text-[10px] text-white/80">
                            {cs.metrics[0].label}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="col-span-7 flex flex-col justify-between p-4">
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-gold">
                            {cs.category} · {cs.regionCode}
                          </span>
                          {cs.liveUrl && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 font-mono text-[9.5px] font-bold text-emerald-300">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                              <span>LIVE</span>
                            </span>
                          )}
                        </div>
                        <h3 className="mt-1 text-base font-semibold leading-snug text-white group-hover:text-gold">
                          {cs.title.split(" — ")[0]}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/75">
                          {cs.summary}
                        </p>
                      </div>
                      <div className="mt-3 flex items-center justify-between gap-2 border-t border-white/10 pt-2.5">
                        <span className="truncate font-mono text-[10px] text-white/65">
                          {cs.timeline}
                        </span>
                        <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-gold">
                          <span>Inspect</span>
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Remaining Published Case Studies Strip (so all 6 are accessible on Home) */}
        {extraProjects.length > 0 && (
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {extraProjects.map((cs) => (
              <Link
                key={cs.slug}
                href={`/work/${cs.slug}`}
                className="group flex flex-col justify-between gap-4 rounded-2xl border border-white/15 bg-navy-mid/90 p-5 transition-all hover:border-gold/70 sm:flex-row sm:items-center"
              >
                <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-xl bg-navy-deep sm:w-36">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 144px"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-gold">
                    <span>{cs.category}</span>
                    <span>·</span>
                    <span>{cs.regionCode}</span>
                    {cs.liveUrl && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9.5px] font-bold text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                        <span>LIVE</span>
                      </span>
                    )}
                    <span>·</span>
                    <span className="text-white/75">{cs.metrics[0]?.value} {cs.metrics[0]?.label}</span>
                  </div>
                  <h3 className="mt-1 truncate text-base font-semibold text-white group-hover:text-gold">
                    {cs.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/75">
                    {cs.summary}
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 self-start rounded-full border border-gold/40 px-3 py-1.5 text-xs font-semibold text-gold transition-colors group-hover:bg-gold group-hover:text-navy sm:self-center">
                  <span>Case Study</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
