"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Globe2, Image as ImageIcon, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseStudyShowcaseFrameProps {
  title: string;
  client: string;
  image: string;
  liveUrl?: string;
  behanceUrl?: string;
  deploymentBadge?: string;
  category: string;
  year: string;
  regionCode: string;
}

export function CaseStudyShowcaseFrame({
  title,
  client,
  image,
  liveUrl,
  behanceUrl,
  deploymentBadge,
  category,
  year,
  regionCode,
}: CaseStudyShowcaseFrameProps) {
  const [viewMode, setViewMode] = useState<"capture" | "live">("capture");

  const displayAddress = liveUrl
    ? liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : `bisenstudio.com/work/${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")} · ${client}`;

  return (
    <div className="overflow-hidden rounded-[28px] border-2 border-navy/15 bg-navy shadow-[0_28px_70px_rgba(10,25,47,0.22)]">
      {/* Top Exhibition / Browser Chrome Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/12 bg-navy-deep px-4 py-3 sm:px-5">
        {/* Window Traffic Dots + Specimen Label */}
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-gold" />
          </div>

          <div className="flex min-w-0 items-center gap-2 rounded-full border border-white/12 bg-navy-mid/90 px-3 py-1">
            {liveUrl ? (
              <span className="inline-flex shrink-0 items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                LIVE
              </span>
            ) : (
              <span className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-wider text-gold">
                {regionCode} · {year}
              </span>
            )}
            <span className="hidden h-3 w-px bg-white/15 sm:inline-block" aria-hidden="true" />
            <span className="truncate font-mono text-[11px] text-white/75 max-w-[200px] sm:max-w-md">
              {displayAddress}
            </span>
          </div>
        </div>

        {/* Mode Switcher & Direct External Launch Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {liveUrl ? (
            <>
              <div
                role="tablist"
                aria-label="Preview mode"
                className="inline-flex items-center rounded-full border border-white/15 bg-navy p-0.5"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={viewMode === "capture"}
                  onClick={() => setViewMode("capture")}
                  className={cn(
                    "inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] font-semibold transition-colors",
                    viewMode === "capture"
                      ? "bg-gold text-navy shadow-xs"
                      : "text-white/75 hover:text-white"
                  )}
                >
                  <ImageIcon className="h-3 w-3" aria-hidden="true" />
                  <span>Studio Capture (HD)</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={viewMode === "live"}
                  onClick={() => setViewMode("live")}
                  className={cn(
                    "inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] font-semibold transition-colors",
                    viewMode === "live"
                      ? "bg-emerald-400 text-navy shadow-xs"
                      : "text-white/75 hover:text-white"
                  )}
                >
                  <Monitor className="h-3 w-3" aria-hidden="true" />
                  <span>Live Interactive Preview</span>
                </button>
              </div>

              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3.5 py-1.5 font-mono text-[11px] font-bold text-navy transition-colors hover:bg-gold-bright"
              >
                <span>Open Live Site</span>
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <span className="hidden rounded-full border border-white/15 bg-navy-mid px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white/80 sm:inline-flex">
                {deploymentBadge || `${category} Archive`}
              </span>
              {behanceUrl && (
                <a
                  href={behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3.5 py-1.5 font-mono text-[11px] font-bold text-navy transition-colors hover:bg-gold-bright"
                >
                  <span>View on Behance</span>
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Main 16:10 Framed Viewport (Matches 1440x900 Desktop Screenshots Without Crop) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-deep">
        {viewMode === "live" && liveUrl ? (
          <>
            <iframe
              src={liveUrl}
              title={`${title} — Live Interactive Preview`}
              className="h-full w-full border-0 bg-white"
              loading="lazy"
            />
            <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
              <span className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full border border-emerald-400/50 bg-navy-deep/90 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-300 backdrop-blur-md">
                <Globe2 className="h-3 w-3" aria-hidden="true" />
                <span>Interactive embed active · Scroll &amp; explore live build</span>
              </span>
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 font-mono text-[10px] font-bold text-navy shadow-md hover:bg-gold-bright"
              >
                <span>Open Full Tab</span>
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </a>
            </div>
          </>
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1152px"
            className="object-cover object-top"
          />
        )}
      </div>
    </div>
  );
}
