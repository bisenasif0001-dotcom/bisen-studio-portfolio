"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SERVICES, type ServiceCategory } from "@/data/services";
import { useCurrency } from "@/components/context/CurrencyContext";
import { DisciplineArtwork } from "@/components/ui/DisciplineArtwork";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type CapabilityFilter = "All" | ServiceCategory["categoryGroup"];

const FILTER_TABS: { id: CapabilityFilter; label: string; count: number }[] = [
  { id: "All", label: "All 6 Disciplines", count: SERVICES.length },
  {
    id: "Design",
    label: "Design & Print",
    count: SERVICES.filter((s) => s.categoryGroup === "Design").length,
  },
  {
    id: "Engineering",
    label: "Web & Engineering",
    count: SERVICES.filter((s) => s.categoryGroup === "Engineering").length,
  },
  {
    id: "Full-Spectrum",
    label: "End-to-End AI",
    count: SERVICES.filter((s) => s.categoryGroup === "Full-Spectrum").length,
  },
];

export function HomeCapabilitiesSection() {
  const { format } = useCurrency();
  const [filter, setFilter] = useState<CapabilityFilter>("All");

  const visibleServices =
    filter === "All"
      ? SERVICES
      : SERVICES.filter((srv) => srv.categoryGroup === filter);

  return (
    <section className="relative overflow-hidden bg-surface bg-drafting-grid py-20 text-navy lg:py-28">
      {/* Subtle White Radial Vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.88),transparent_72%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header + Sculpted Royal Navy Pill CTA */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            theme="light"
            eyebrow="Full-Spectrum Capabilities"
            title={
              <>
                Everything Your Brand Needs—From{" "}
                <span className="font-editorial text-gold-deep">Ink &amp; Paper</span> to{" "}
                <span className="font-editorial text-navy">Production Code.</span>
              </>
            }
            description="Stop managing disconnected freelancers across graphic design, print houses, and software agencies. Our 3-person senior atelier owns the complete lifecycle with seamless continuity."
          />

          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-navy py-2 pl-6 pr-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(10,25,47,0.2)] transition-all hover:bg-navy-mid hover:shadow-[0_16px_36px_rgba(10,25,47,0.28)] active:scale-[0.98] lg:self-auto"
          >
            <span>Explore All Services &amp; Specs</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-navy transition-transform duration-200 group-hover:scale-105">
              <ArrowUpRight className="h-4 w-4 stroke-[2.25] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>

        {/* Interactive Filter Pill Dock */}
        <div className="mt-10 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div
            role="tablist"
            aria-label="Filter studio capabilities"
            className="inline-flex flex-wrap items-center gap-1 rounded-full border border-navy/10 bg-white/95 p-1 shadow-[0_2px_10px_rgba(10,25,47,0.04)]"
          >
            {FILTER_TABS.map((tab) => {
              const isSelected = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setFilter(tab.id)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all sm:text-[13px]",
                    isSelected
                      ? "bg-navy text-white shadow-sm"
                      : "text-navy/75 hover:bg-surface hover:text-navy"
                  )}
                >
                  <span>{tab.label}</span>
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-0.5 font-mono text-[10px] font-bold leading-none",
                      isSelected ? "bg-gold text-navy" : "bg-surface text-ink-muted"
                    )}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 font-mono text-[11px] font-medium text-navy/70 md:inline-flex">
            <Sparkles className="h-3.5 w-3.5 text-gold-deep" />
            <span>Covered under Hourly · Weekly · Monthly · Yearly retainers</span>
          </div>
        </div>

        {/* Gallery Mat-Framed Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((srv, idx) => {
            const isFlagship = srv.id === "digital-products";

            return (
              <Reveal key={srv.id} delay={idx * 0.05}>
                <Link
                  href={`/services#${srv.id}`}
                  className={cn(
                    "group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] p-2.5 transition-all duration-300 hover:-translate-y-1.5",
                    isFlagship
                      ? "border-2 border-gold/75 bg-navy text-white shadow-[0_24px_60px_rgba(10,25,47,0.22)] hover:border-gold"
                      : "border border-navy/10 bg-white text-navy shadow-[0_10px_34px_rgba(10,25,47,0.045)] hover:border-gold hover:shadow-[0_28px_65px_rgba(10,25,47,0.12)]"
                  )}
                >
                  <div>
                    <DisciplineArtwork
                      id={srv.id}
                      variant={isFlagship ? "navy" : "light"}
                      number={srv.number}
                      tag={isFlagship ? "0 → LAUNCH · FLAGSHIP" : srv.categoryGroup}
                    />

                    <div className="px-4 pt-5">
                      <h3
                        className={cn(
                          "text-[19px] font-bold tracking-[-0.02em] transition-colors",
                          isFlagship
                            ? "text-white group-hover:text-gold"
                            : "text-navy group-hover:text-gold-deep"
                        )}
                      >
                        {srv.title}
                      </h3>

                      <p
                        className={cn(
                          "mt-1 font-editorial text-[17px] leading-snug",
                          isFlagship ? "text-gold" : "text-gold-deep"
                        )}
                      >
                        {srv.headline}
                      </p>

                      <p
                        className={cn(
                          "mt-2.5 line-clamp-3 text-[13.5px] leading-relaxed",
                          isFlagship ? "text-white/80" : "text-ink-muted"
                        )}
                      >
                        {srv.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {srv.techAndSpecs.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className={cn(
                              "rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium",
                              isFlagship
                                ? "border-white/15 bg-navy-mid text-white/90"
                                : "border-navy/10 bg-surface text-navy/85"
                            )}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Architectural Footer */}
                  <div
                    className={cn(
                      "mx-4 mb-3 mt-5 flex items-center justify-between border-t pt-4",
                      isFlagship ? "border-white/15" : "border-navy/10"
                    )}
                  >
                    <div>
                      <div
                        className={cn(
                          "font-mono text-[10px] uppercase tracking-wider",
                          isFlagship ? "text-white/65" : "text-ink-muted"
                        )}
                      >
                        {srv.typicalTimeline}
                      </div>
                      <div
                        className={cn(
                          "mt-0.5 font-mono text-xs font-bold",
                          isFlagship ? "text-gold" : "text-navy"
                        )}
                      >
                        From {format(srv.startingUsd)}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2">
                      <span
                        className={cn(
                          "text-xs font-semibold",
                          isFlagship ? "text-white" : "text-navy"
                        )}
                      >
                        Specs
                      </span>
                      <span
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-full transition-all",
                          isFlagship
                            ? "bg-gold text-navy group-hover:scale-105"
                            : "border border-navy/12 bg-surface text-navy group-hover:border-navy group-hover:bg-navy group-hover:text-gold"
                        )}
                      >
                        <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
