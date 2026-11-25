"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { MOBILE_APP_CATEGORIES } from "@/data/mobileAppCatalog";
import { MobileAppCategoryIcon } from "@/components/ui/MobileAppCategoryIcon";
import { cn } from "@/lib/utils";

interface MobileAppCategoryRailProps {
  activeSlug: string;
}

export function MobileAppCategoryRail({ activeSlug }: MobileAppCategoryRailProps) {
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
    <nav aria-label="Mobile App Development Categories" className="mb-12">
      <div className="flex items-center gap-1.5 rounded-2xl border border-navy/12 bg-white p-1.5 shadow-[0_6px_24px_rgba(10,25,47,0.05)]">
        <Link
          href="/mobile-app"
          className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-2 font-mono text-xs font-semibold text-navy/75 transition-colors hover:bg-surface hover:text-navy"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>All 10</span>
        </Link>

        <span aria-hidden="true" className="h-5 w-px shrink-0 bg-navy/10" />

        <button
          type="button"
          onClick={() => scrollTrack(-260)}
          aria-label="Scroll mobile app categories left"
          className="hidden h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-xl text-navy/55 transition-colors hover:bg-surface hover:text-navy sm:inline-flex"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div
          ref={trackRef}
          className="no-scrollbar flex min-w-0 flex-1 items-center gap-1 overflow-x-auto scroll-smooth"
        >
          {MOBILE_APP_CATEGORIES.map((c) => {
            const isActive = c.slug === activeSlug;
            return (
              <Link
                key={c.slug}
                href={`/mobile-app/${c.slug}`}
                data-active={isActive ? "true" : undefined}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-2 text-xs font-semibold transition-colors",
                  isActive
                    ? "bg-navy text-white shadow-xs"
                    : "text-navy/75 hover:bg-surface hover:text-navy"
                )}
              >
                <MobileAppCategoryIcon
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

        <button
          type="button"
          onClick={() => scrollTrack(260)}
          aria-label="Scroll mobile app categories right"
          className="hidden h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-xl text-navy/55 transition-colors hover:bg-surface hover:text-navy sm:inline-flex"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </nav>
  );
}
