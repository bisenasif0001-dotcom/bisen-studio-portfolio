"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  Layers,
} from "lucide-react";
import type { MobileAppCategory } from "@/data/mobileAppCatalog";
import { MobileAppCategoryIcon } from "@/components/ui/MobileAppCategoryIcon";
import { cn } from "@/lib/utils";

interface MobileAppCategoryServiceGridProps {
  category: MobileAppCategory;
}

function MobileCardMotif({ index }: { index: number }) {
  const variant = index % 6;

  return (
    <svg
      viewBox="0 0 52 28"
      className="hidden h-7 w-[52px] shrink-0 opacity-75 transition-opacity duration-200 group-hover:opacity-100 sm:block"
      aria-hidden="true"
      fill="none"
    >
      {variant === 0 && (
        <g>
          <rect x="14" y="3" width="24" height="22" rx="4" stroke="#0A192F" strokeOpacity="0.3" strokeWidth="1.2" />
          <line x1="22" y1="6.5" x2="30" y2="6.5" stroke="#9A6F00" strokeWidth="1.2" strokeLinecap="round" />
          <rect x="18" y="10" width="16" height="8" rx="2" fill="#F5C518" />
        </g>
      )}
      {variant === 1 && (
        <g>
          <rect x="8" y="5" width="16" height="18" rx="3" stroke="#0A192F" strokeOpacity="0.35" strokeWidth="1.1" />
          <rect x="28" y="5" width="16" height="18" rx="3" fill="#0A192F" />
          <circle cx="36" cy="14" r="3" fill="#F5C518" />
        </g>
      )}
      {variant === 2 && (
        <g>
          <rect x="10" y="15" width="6" height="9" rx="1.5" fill="#0A192F" fillOpacity="0.2" />
          <rect x="19" y="11" width="6" height="13" rx="1.5" fill="#0A192F" fillOpacity="0.45" />
          <rect x="28" y="6" width="6" height="18" rx="1.5" fill="#9A6F00" />
          <rect x="37" y="4" width="6" height="20" rx="1.5" fill="#0A192F" />
        </g>
      )}
      {variant === 3 && (
        <g>
          <circle cx="15" cy="14" r="4" fill="#F5C518" stroke="#0A192F" strokeWidth="1" />
          <circle cx="37" cy="9" r="3.5" fill="#0A192F" />
          <circle cx="37" cy="19" r="3.5" stroke="#9A6F00" strokeWidth="1.2" />
          <line x1="19" y1="13" x2="33" y2="10" stroke="#0A192F" strokeOpacity="0.35" strokeWidth="1" />
          <line x1="19" y1="15" x2="33" y2="18" stroke="#9A6F00" strokeOpacity="0.65" strokeWidth="1" />
        </g>
      )}
      {variant === 4 && (
        <g>
          <circle cx="26" cy="14" r="8.5" stroke="#0A192F" strokeOpacity="0.24" strokeWidth="1.6" />
          <circle cx="26" cy="14" r="8.5" stroke="#9A6F00" strokeWidth="1.6" strokeDasharray="40 55" />
          <circle cx="26" cy="14" r="3" fill="#0A192F" />
        </g>
      )}
      {variant === 5 && (
        <g>
          <path d="M16 9 L10 14 L16 19" stroke="#0A192F" strokeOpacity="0.45" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M36 9 L42 14 L36 19" stroke="#0A192F" strokeOpacity="0.45" strokeWidth="1.3" strokeLinecap="round" />
          <circle cx="26" cy="14" r="3.5" fill="#F5C518" />
        </g>
      )}
    </svg>
  );
}

export function MobileAppCategoryServiceGrid({
  category,
}: MobileAppCategoryServiceGridProps) {
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});

  const toggleDeliverables = (slug: string) => {
    setExpandedMap((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  return (
    <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
      {category.services.map((srv, idx) => {
        const isExpanded = Boolean(expandedMap[srv.slug]);
        return (
          <article
            key={srv.slug}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-navy/12 bg-white shadow-[0_10px_30px_rgba(10,25,47,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_24px_60px_rgba(10,25,47,0.12)]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[2.5px] bg-gradient-to-r from-navy via-gold to-navy opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />

            <div className="relative flex items-center justify-between gap-3 border-b border-navy/8 bg-surface/85 bg-drafting-grid px-5 py-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-navy/10 bg-white text-navy shadow-2xs transition-colors duration-200 group-hover:border-navy group-hover:bg-navy group-hover:text-gold">
                  <MobileAppCategoryIcon iconKey={category.iconKey} className="h-4 w-4" />
                </span>
                <span className="font-mono text-xs font-bold tracking-[0.14em] text-gold-deep">
                  SPEC {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <MobileCardMotif index={idx} />
                <span className="inline-flex items-center gap-1 rounded-full border border-navy/10 bg-white px-2.5 py-1 font-mono text-[10px] font-semibold text-navy shadow-2xs">
                  <Clock className="h-3 w-3 text-gold-deep" aria-hidden="true" />
                  <span>{srv.turnaround}</span>
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <h3 className="text-[19px] font-bold leading-snug tracking-[-0.02em] text-navy">
                  <Link
                    href={`/mobile-app/${category.slug}/${srv.slug}`}
                    className="transition-colors hover:text-gold-deep"
                  >
                    {srv.title}
                  </Link>
                </h3>

                <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-muted">
                  {srv.shortSummary}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {srv.techTerms.map((term) => (
                    <span
                      key={term}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-navy/[0.09] bg-surface/75 px-2.5 py-1 font-mono text-[10.5px] font-medium text-navy/90"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 shrink-0 rounded-full bg-gold-deep"
                      />
                      <span>{term}</span>
                    </span>
                  ))}
                </div>

                <div className="mt-5">
                  <div className="w-full overflow-hidden rounded-xl border border-navy/10 bg-surface/60 transition-colors hover:border-gold/70">
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      onClick={() => toggleDeliverables(srv.slug)}
                      className="flex w-full cursor-pointer items-center justify-between px-3.5 py-2.5 text-left"
                    >
                      <span className="flex items-center gap-2">
                        <Layers className="h-3.5 w-3.5 text-gold-deep" aria-hidden="true" />
                        <span className="text-xs font-semibold text-navy">
                          Included Deliverables
                        </span>
                        <span className="rounded-full border border-navy/10 bg-white px-2 py-0.5 font-mono text-[10px] font-bold leading-none text-navy">
                          {srv.deliverables.length}
                        </span>
                      </span>
                      <span className="flex items-center gap-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                        <span>{isExpanded ? "Hide" : "Preview"}</span>
                        <ChevronDown
                          className={cn(
                            "h-3.5 w-3.5 text-navy transition-transform duration-200",
                            isExpanded && "rotate-180"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </button>

                    {isExpanded && (
                      <div className="border-t border-navy/10 bg-white px-3.5 py-3">
                        <ul className="space-y-2 text-xs text-navy">
                          {srv.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-deep" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-2.5 border-t border-navy/8 pt-2 font-mono text-[10px] font-semibold text-gold-deep">
                          Benchmark: {srv.slaOrOutputSpec}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-5">
                <div className="flex items-center justify-between gap-2 border-t border-navy/8 pt-3.5 font-mono text-[10.5px]">
                  <div className="truncate">
                    <span className="text-ink-muted">STACK: </span>
                    <span className="font-semibold text-navy">{srv.stackSpec}</span>
                  </div>
                  <span className="shrink-0 font-bold text-gold-deep">100% IP</span>
                </div>

                <div className="mt-4 flex items-center gap-2.5">
                  <Link
                    href={`/contact?service=mobile-app&topic=${srv.slug}`}
                    className="inline-flex shrink-0 items-center justify-center rounded-full border border-navy/15 bg-white px-4 py-2 text-xs font-semibold text-navy transition-colors hover:border-gold hover:bg-surface"
                  >
                    Get Quote
                  </Link>
                  <Link
                    href={`/mobile-app/${category.slug}/${srv.slug}`}
                    className="group/cta inline-flex flex-1 items-center justify-between rounded-full bg-navy py-1.5 pl-4 pr-1.5 text-xs font-semibold text-white shadow-[0_6px_18px_rgba(10,25,47,0.16)] transition-all hover:bg-navy-mid"
                  >
                    <span>View Service</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-navy transition-transform duration-200 group-hover/cta:scale-105">
                      <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" aria-hidden="true" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
