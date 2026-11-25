"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { GRAPHIC_DESIGN_CATEGORIES } from "@/data/graphicDesignCatalog";
import { GraphicCategoryIcon } from "@/components/ui/GraphicCategoryIcon";
import { cn } from "@/lib/utils";

interface GraphicCategoryRailProps {
  activeSlug: string;
}

export function GraphicCategoryRail({ activeSlug }: GraphicCategoryRailProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const activeEl = track.querySelector<HTMLElement>('[data-active="true"]');
    if (activeEl) {
      const targetLeft =
        activeEl.offsetLeft - track.clientWidth / 2 + activeEl.clientWidth / 2;
      track.scrollTo({ left: Math.max(0, targetLeft), behavior: "auto" });
    }
  }, [activeSlug]);

  const scrollTrack = (delta: number) => {
    trackRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <nav aria-label="Graphic Design Categories" className="mb-12">
      <div className="flex items-center gap-1.5 rounded-2xl border border-navy/12 bg-white p-1.5 shadow-[0_6px_24px_rgba(10,25,47,0.05)]">
        {/* Back to All 10 Hub */}
        <Link
          href="/graphic-design"
          className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-2 font-mono text-xs font-semibold text-navy/75 transition-colors hover:bg-surface hover:text-navy"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>All 10</span>
        </Link>

        <span aria-hidden="true" className="h-5 w-px shrink-0 bg-navy/10" />

        {/* Scroll Left */}
        <button
          type="button"
          onClick={() => scrollTrack(-260)}
          aria-label="Scroll categories left"
          className="hidden h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-xl text-navy/55 transition-colors hover:bg-surface hover:text-navy sm:inline-flex"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Single-Row Scrollable Category Track */}
        <div
          ref={trackRef}
          className="no-scrollbar flex min-w-0 flex-1 items-center gap-1 overflow-x-auto scroll-smooth"
        >
          {GRAPHIC_DESIGN_CATEGORIES.map((c) => {
            const isActive = c.slug === activeSlug;
            return (
              <Link
                key={c.slug}
                href={`/graphic-design/${c.slug}`}
                data-active={isActive ? "true" : undefined}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-2 text-xs font-semibold transition-all",
                  isActive
                    ? "bg-navy text-white shadow-xs"
                    : "text-navy/75 hover:bg-surface hover:text-navy"
                )}
              >
                <GraphicCategoryIcon
                  iconKey={c.iconKey}
                  className={cn(
                    "h-3.5 w-3.5 shrink-0",
                    isActive ? "text-gold" : "text-navy/55"
                  )}
                />
                <span>{c.menuTitle}</span>
              </Link>
            );
          })}
        </div>

        {/* Scroll Right */}
        <button
          type="button"
          onClick={() => scrollTrack(260)}
          aria-label="Scroll categories right"
          className="hidden h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-xl text-navy/55 transition-colors hover:bg-surface hover:text-navy sm:inline-flex"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </nav>
  );
}
