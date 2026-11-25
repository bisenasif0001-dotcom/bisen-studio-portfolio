"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import { GLOBAL_CITIES } from "@/data/site";
import { cn } from "@/lib/utils";

interface CityTimeState {
  time: string;
  isDaytime: boolean;
  isBusinessOpen: boolean;
}

const CITY_ISO_MAP: Record<string, string> = {
  "New York": "US",
  London: "UK",
  Berlin: "EU",
  Toronto: "CA",
  Sydney: "AU",
};

export function LiveTimezoneStrip() {
  const [cityTimes, setCityTimes] = useState<Record<string, CityTimeState>>({});

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const next: Record<string, CityTimeState> = {};

      for (const item of GLOBAL_CITIES) {
        try {
          const formatted = new Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hourCycle: "h23",
            timeZone: item.timeZone,
          }).format(now);

          const hour = Number(formatted.slice(0, 2));
          next[item.city] = {
            time: formatted,
            isDaytime: !Number.isNaN(hour) && hour >= 7 && hour < 19,
            isBusinessOpen: !Number.isNaN(hour) && hour >= 8 && hour < 19,
          };
        } catch {
          next[item.city] = { time: "--:--", isDaytime: true, isBusinessOpen: false };
        }
      }

      setCityTimes(next);
    };

    update();
    const id = window.setInterval(update, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      aria-label="Global client timezone availability"
      className="relative overflow-hidden border-y border-gold/25 bg-navy bg-navy-blueprint text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-deep/65 via-transparent to-navy-deep/65"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-4 lg:grid-cols-12">
          {/* Left Status Anchor */}
          <div className="flex flex-wrap items-center justify-between gap-3 lg:col-span-3 lg:block">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-navy-deep/90 px-3 py-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
                  Global Desk Live
                </span>
              </div>

              <div className="mt-2 flex items-center gap-2 font-mono text-[11px] text-white/80">
                <span>Sync + Async Overlap</span>
                <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                <span className="font-semibold text-gold">12h SLA</span>
              </div>
            </div>

            <Link
              href="/contact?topic=discovery-call&source=timezone-strip"
              className="mt-2 inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:text-white lg:mt-2"
            >
              <span>Book in Your Timezone</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          {/* Right 5-City World-Time Instrument Dock */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-white/12 bg-navy-deep/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-white/10">
              {GLOBAL_CITIES.map((c) => {
                const state = cityTimes[c.city];
                const iso = CITY_ISO_MAP[c.city] ?? c.region.slice(0, 2).toUpperCase();
                return (
                  <div
                    key={c.city}
                    className="border-b border-white/8 px-3.5 py-2.5 transition-colors hover:bg-navy-mid/70 lg:border-b-0"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex min-w-0 items-center gap-1.5">
                        <span
                          aria-hidden="true"
                          className={cn(
                            "h-1.5 w-1.5 shrink-0 rounded-full",
                            state?.isBusinessOpen ? "bg-emerald-400" : "bg-white/30"
                          )}
                        />
                        <span className="truncate text-xs font-semibold text-white">{c.city}</span>
                      </div>
                      <span className="shrink-0 rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] font-bold text-gold">
                        {iso}
                      </span>
                    </div>

                    <div className="mt-1 flex items-center justify-between gap-2">
                      <span className="font-mono text-base font-bold tracking-tight text-white tabular-nums">
                        {state?.time ?? "--:--"}
                      </span>
                      {state ? (
                        state.isDaytime ? (
                          <Sun className="h-3.5 w-3.5 shrink-0 text-gold" aria-label="Daytime" />
                        ) : (
                          <Moon className="h-3.5 w-3.5 shrink-0 text-white/60" aria-label="Evening" />
                        )
                      ) : (
                        <Sun className="h-3.5 w-3.5 shrink-0 text-gold/60" aria-hidden="true" />
                      )}
                    </div>

                    <div className="mt-0.5 truncate font-mono text-[11px] text-white/75">
                      {c.overlap}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
