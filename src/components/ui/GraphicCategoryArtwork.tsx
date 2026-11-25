"use client";

import React from "react";
import { useCurrency } from "@/components/context/CurrencyContext";
import { formatMoney } from "@/lib/utils";

interface GraphicCategoryArtworkProps {
  categorySlug: string;
  categoryNumber: string;
  categoryTitle: string;
  turnaroundLabel: string;
  formatLabel: string;
  startingUsd?: number;
}

export function GraphicCategoryArtwork({
  categorySlug,
  categoryNumber,
  categoryTitle,
  turnaroundLabel,
  formatLabel,
  startingUsd = 65,
}: GraphicCategoryArtworkProps) {
  const { currency } = useCurrency();
  const gridId = `gca-grid-${categorySlug}`;
  const glowId = `gca-glow-${categorySlug}`;

  return (
    <div className="rounded-[28px] border border-gold/45 bg-white p-4 text-navy shadow-[0_28px_70px_rgba(6,16,33,0.45)] sm:p-5">
      {/* Subtle Top Spec Header */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 px-1 font-mono text-[10px]">
        <span className="font-bold uppercase tracking-[0.14em] text-gold-deep">
          ATELIER PLATE // {categoryNumber}
        </span>
        <span className="truncate font-semibold uppercase tracking-[0.08em] text-navy/75">
          {categoryTitle}
        </span>
      </div>

      {/* Category-Specific Vector Plate */}
      <div className="overflow-hidden rounded-2xl border border-navy/10 bg-surface/60">
        <svg
          viewBox="0 0 420 220"
          className="h-auto w-full"
          role="img"
          aria-label={`${categoryTitle} craft visualization plate`}
        >
          <defs>
            <pattern id={gridId} width="20" height="20" patternUnits="userSpaceOnUse">
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="#0A192F"
                strokeOpacity="0.045"
                strokeWidth="0.75"
              />
            </pattern>
            <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F5C518" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#F5C518" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect x="0" y="0" width="420" height="220" fill="#F8FAFD" />
          <rect x="0" y="0" width="420" height="220" fill={`url(#${gridId})`} />

          {/* 01: Brand Identity & Logo */}
          {categorySlug === "brand-identity" && (
            <g>
              <rect x="18" y="18" width="210" height="184" rx="14" fill="#0A192F" />
              <circle cx="123" cy="108" r="68" fill={`url(#${glowId})`} />
              <line x1="56" y1="108" x2="190" y2="108" stroke="#FFFFFF" strokeOpacity="0.14" />
              <line x1="123" y1="41" x2="123" y2="175" stroke="#FFFFFF" strokeOpacity="0.14" />
              <circle cx="123" cy="108" r="48" fill="none" stroke="#FFFFFF" strokeOpacity="0.24" />
              <circle cx="123" cy="108" r="30" fill="none" stroke="#F5C518" strokeWidth="2" />
              <circle cx="141" cy="90" r="18" fill="none" stroke="#FFFFFF" strokeWidth="1.4" />
              <circle cx="141" cy="90" r="4" fill="#F5C518" />
              <text
                x="123"
                y="182"
                textAnchor="middle"
                fill="#F5C518"
                fontSize="8"
                fontFamily="monospace"
                fontWeight="700"
              >
                φ 1.618 GOLDEN RATIO
              </text>

              <rect
                x="242"
                y="18"
                width="160"
                height="184"
                rx="14"
                fill="#FFFFFF"
                stroke="#0A192F"
                strokeOpacity="0.1"
              />
              <text
                x="322"
                y="78"
                textAnchor="middle"
                fill="#0A192F"
                fontSize="28"
                fontFamily="Georgia, serif"
                fontStyle="italic"
                fontWeight="600"
              >
                Atelier
              </text>
              <line x1="264" y1="98" x2="380" y2="98" stroke="#0A192F" strokeOpacity="0.08" />
              <rect x="262" y="120" width="44" height="44" rx="11" fill="#0A192F" />
              <circle cx="284" cy="142" r="11" stroke="#F5C518" strokeWidth="1.8" />
              <text x="284" y="182" textAnchor="middle" fill="#475569" fontSize="7" fontFamily="monospace">
                48px
              </text>
              <rect x="320" y="130" width="26" height="26" rx="7" fill="#0A192F" />
              <circle cx="333" cy="143" r="6" stroke="#F5C518" strokeWidth="1.5" />
              <text x="333" y="182" textAnchor="middle" fill="#475569" fontSize="7" fontFamily="monospace">
                24px
              </text>
              <rect x="360" y="136" width="18" height="18" rx="5" fill="#F5C518" />
              <circle cx="369" cy="145" r="4" stroke="#0A192F" strokeWidth="1.5" />
              <text x="369" y="182" textAnchor="middle" fill="#475569" fontSize="7" fontFamily="monospace">
                16px
              </text>
            </g>
          )}

          {/* 02: Social Media & Ads */}
          {categorySlug === "social-media-design" && (
            <g>
              {/* 1:1 Feed Post */}
              <rect x="22" y="26" width="144" height="144" rx="12" fill="#0A192F" />
              <text x="36" y="48" fill="#F5C518" fontSize="7" fontFamily="monospace" fontWeight="700">
                1:1 FEED CREATIVE
              </text>
              <text x="36" y="84" fill="#FFFFFF" fontSize="15" fontFamily="Georgia, serif" fontStyle="italic">
                Scroll-Stopping
              </text>
              <text x="36" y="102" fill="#FFFFFF" fontSize="15" fontFamily="sans-serif" fontWeight="700">
                Ad Visuals
              </text>
              <rect x="36" y="122" width="84" height="24" rx="12" fill="#F5C518" />
              <text x="78" y="137" textAnchor="middle" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">
                SHOP NOW ↗
              </text>
              <text x="94" y="192" textAnchor="middle" fill="#475569" fontSize="7.5" fontFamily="monospace">
                1080 × 1080
              </text>

              {/* 4:5 Carousel Frame */}
              <rect
                x="182"
                y="22"
                width="120"
                height="152"
                rx="12"
                fill="#FFFFFF"
                stroke="#0A192F"
                strokeOpacity="0.14"
              />
              <text x="196" y="44" fill="#9A6F00" fontSize="7" fontFamily="monospace" fontWeight="700">
                4:5 CAROUSEL
              </text>
              <rect x="196" y="58" width="92" height="54" rx="8" fill="#F4F7FB" stroke="#0A192F" strokeOpacity="0.08" />
              <path d="M210 98 L234 76 L254 88 L276 68" stroke="#0A192F" strokeWidth="2.2" fill="none" />
              <rect x="196" y="124" width="76" height="5" rx="2.5" fill="#0A192F" fillOpacity="0.2" />
              <rect x="196" y="136" width="58" height="5" rx="2.5" fill="#9A6F00" fillOpacity="0.45" />
              <text x="242" y="192" textAnchor="middle" fill="#475569" fontSize="7.5" fontFamily="monospace">
                1080 × 1350
              </text>

              {/* 9:16 Stories / Reels Safe Frame */}
              <rect x="318" y="18" width="82" height="162" rx="12" fill="#122645" />
              <rect
                x="325"
                y="34"
                width="68"
                height="118"
                rx="6"
                fill="none"
                stroke="#F5C518"
                strokeOpacity="0.55"
                strokeDasharray="3 2"
              />
              <text x="359" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="700">
                SAFE ZONE
              </text>
              <text x="359" y="102" textAnchor="middle" fill="#F5C518" fontSize="7" fontFamily="monospace">
                9:16 REEL
              </text>
              <text x="359" y="198" textAnchor="middle" fill="#475569" fontSize="7.5" fontFamily="monospace">
                1080 × 1920
              </text>
            </g>
          )}

          {/* 03: Print & Marketing */}
          {categorySlug === "print-design" && (
            <g>
              <rect
                x="34"
                y="24"
                width="352"
                height="168"
                rx="6"
                fill="none"
                stroke="#9A6F00"
                strokeDasharray="4 3"
              />
              {/* 3 Folded Brochure Panels */}
              <rect x="44" y="34" width="110" height="148" fill="#0A192F" />
              <rect
                x="156"
                y="34"
                width="108"
                height="148"
                fill="#FFFFFF"
                stroke="#0A192F"
                strokeOpacity="0.16"
              />
              <rect
                x="266"
                y="34"
                width="110"
                height="148"
                fill="#FFFFFF"
                stroke="#0A192F"
                strokeOpacity="0.16"
              />
              <text x="58" y="64" fill="#F5C518" fontSize="7.5" fontFamily="monospace" fontWeight="700">
                COVER PANEL
              </text>
              <text x="58" y="96" fill="#FFFFFF" fontSize="16" fontFamily="Georgia, serif" fontStyle="italic">
                Tri-Fold
              </text>
              <rect x="58" y="114" width="66" height="4" rx="2" fill="#F5C518" />
              <rect x="58" y="124" width="52" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.4" />

              <text x="172" y="64" fill="#9A6F00" fontSize="7" fontFamily="monospace" fontWeight="700">
                INSIDE SPREAD
              </text>
              <rect x="172" y="78" width="76" height="44" rx="4" fill="#F4F7FB" />
              <rect x="172" y="132" width="70" height="4" rx="2" fill="#0A192F" fillOpacity="0.2" />
              <rect x="172" y="142" width="56" height="4" rx="2" fill="#0A192F" fillOpacity="0.14" />

              <text x="282" y="64" fill="#9A6F00" fontSize="7" fontFamily="monospace" fontWeight="700">
                -2MM FLAP MATH
              </text>
              <rect x="282" y="82" width="76" height="4" rx="2" fill="#0A192F" fillOpacity="0.22" />
              <rect x="282" y="92" width="64" height="4" rx="2" fill="#0A192F" fillOpacity="0.16" />
              <rect x="282" y="144" width="68" height="18" rx="4" fill="#0A192F" />
              <text x="316" y="156" textAnchor="middle" fill="#F5C518" fontSize="6.5" fontFamily="monospace" fontWeight="700">
                CMYK PDF/X-4
              </text>
            </g>
          )}

          {/* 04: Packaging & Labels */}
          {categorySlug === "packaging-design" && (
            <g>
              <rect
                x="62"
                y="26"
                width="296"
                height="168"
                rx="4"
                fill="none"
                stroke="#9A6F00"
                strokeDasharray="4 3"
              />
              <path d="M84 62 L68 70 V150 L84 158 Z" fill="#E9EEF5" stroke="#0A192F" strokeWidth="1.2" />
              <rect x="84" y="56" width="62" height="108" fill="#FFFFFF" stroke="#0A192F" strokeWidth="1.2" />
              <rect x="146" y="56" width="104" height="108" fill="#0A192F" stroke="#0A192F" strokeWidth="1.2" />
              <path d="M146 56 V38 L156 32 H240 L250 38 V56" fill="#FFFFFF" stroke="#0A192F" strokeWidth="1.2" />
              <path d="M146 164 V182 L156 188 H240 L250 182 V164" fill="#FFFFFF" stroke="#0A192F" strokeWidth="1.2" />
              <rect x="250" y="56" width="88" height="108" fill="#FFFFFF" stroke="#0A192F" strokeWidth="1.2" />

              <circle cx="198" cy="96" r="14" stroke="#F5C518" strokeWidth="2.2" />
              <circle cx="198" cy="96" r="4" fill="#F5C518" />
              <text x="198" y="132" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontFamily="Georgia, serif" fontStyle="italic">
                Atelier Die-Line
              </text>
              <text x="198" y="146" textAnchor="middle" fill="#F5C518" fontSize="6.5" fontFamily="monospace" fontWeight="700">
                PMS 871 C FOIL
              </text>

              <rect x="264" y="122" width="60" height="28" rx="2" fill="#F4F7FB" stroke="#0A192F" strokeOpacity="0.16" />
              <g fill="#0A192F">
                <rect x="271" y="127" width="2" height="14" />
                <rect x="275" y="127" width="1" height="14" />
                <rect x="279" y="127" width="3" height="14" />
                <rect x="285" y="127" width="1.5" height="14" />
                <rect x="290" y="127" width="2.5" height="14" />
                <rect x="296" y="127" width="1" height="14" />
                <rect x="300" y="127" width="2.5" height="14" />
                <rect x="306" y="127" width="1.5" height="14" />
                <rect x="311" y="127" width="2" height="14" />
              </g>
            </g>
          )}

          {/* 05: Presentation Design */}
          {categorySlug === "presentation-design" && (
            <g>
              <rect x="28" y="22" width="364" height="176" rx="14" fill="#0A192F" />
              <text x="48" y="48" fill="#F5C518" fontSize="7.5" fontFamily="monospace" fontWeight="700">
                SERIES A DECK // 16:9 MASTER SLIDE
              </text>
              <text x="48" y="76" fill="#FFFFFF" fontSize="18" fontFamily="Georgia, serif" fontStyle="italic">
                Q4 Revenue &amp; Scale
              </text>
              {/* Chart Canvas */}
              <rect x="48" y="92" width="206" height="84" rx="8" fill="#122645" />
              <path d="M64 156 L104 138 L142 142 L182 118 L236 104" stroke="#F5C518" strokeWidth="2.5" fill="none" />
              <circle cx="236" cy="104" r="4" fill="#F5C518" />
              {/* Right KPI cards */}
              <rect x="268" y="92" width="104" height="38" rx="8" fill="#122645" />
              <text x="282" y="110" fill="#F5C518" fontSize="12" fontFamily="monospace" fontWeight="700">
                +142%
              </text>
              <text x="282" y="122" fill="#FFFFFF" fillOpacity="0.7" fontSize="6.5" fontFamily="monospace">
                ARR VELOCITY
              </text>
              <rect x="268" y="138" width="104" height="38" rx="8" fill="#F5C518" />
              <text x="282" y="156" fill="#0A192F" fontSize="11" fontFamily="monospace" fontWeight="700">
                $4.2M
              </text>
              <text x="282" y="168" fill="#0A192F" fontSize="6.5" fontFamily="monospace" fontWeight="700">
                SEED ROUND
              </text>
            </g>
          )}

          {/* 06: E-commerce Graphics */}
          {categorySlug === "ecommerce-graphics" && (
            <g>
              {/* Amazon Pure White Main Cutout */}
              <rect
                x="22"
                y="20"
                width="174"
                height="180"
                rx="12"
                fill="#FFFFFF"
                stroke="#0A192F"
                strokeOpacity="0.14"
              />
              <text x="36" y="40" fill="#9A6F00" fontSize="7" fontFamily="monospace" fontWeight="700">
                #FFFFFF TOS MAIN
              </text>
              <rect x="78" y="64" width="62" height="94" rx="10" fill="#0A192F" />
              <rect x="93" y="52" width="32" height="12" rx="3" fill="#F5C518" />
              <circle cx="109" cy="102" r="14" stroke="#F5C518" strokeWidth="1.8" />
              <line x1="60" y1="64" x2="60" y2="158" stroke="#9A6F00" strokeWidth="1" />
              <text x="54" y="114" textAnchor="end" fill="#475569" fontSize="6.5" fontFamily="monospace">
                50ML
              </text>
              <text x="109" y="184" textAnchor="middle" fill="#475569" fontSize="7" fontFamily="monospace">
                2000 × 2000 ZOOM
              </text>

              {/* A+ Content Module Stack */}
              <rect x="210" y="20" width="188" height="84" rx="12" fill="#0A192F" />
              <text x="226" y="44" fill="#F5C518" fontSize="7.5" fontFamily="monospace" fontWeight="700">
                A+ PREMIUM MODULE
              </text>
              <text x="226" y="68" fill="#FFFFFF" fontSize="13" fontFamily="Georgia, serif" fontStyle="italic">
                Conversion Story
              </text>
              <rect x="226" y="80" width="90" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.4" />

              <rect
                x="210"
                y="114"
                width="188"
                height="86"
                rx="12"
                fill="#FFFFFF"
                stroke="#0A192F"
                strokeOpacity="0.14"
              />
              <rect x="224" y="128" width="46" height="58" rx="6" fill="#F4F7FB" />
              <rect x="280" y="128" width="46" height="58" rx="6" fill="#F4F7FB" />
              <rect x="336" y="128" width="46" height="58" rx="6" fill="#F5C518" />
              <text x="359" y="160" textAnchor="middle" fill="#0A192F" fontSize="10" fontFamily="monospace" fontWeight="700">
                ★ 4.9
              </text>
            </g>
          )}

          {/* 07: Events & Signage */}
          {categorySlug === "event-signage-design" && (
            <g>
              {/* Trade Show 10x20ft Booth Elevation */}
              <rect x="28" y="24" width="364" height="172" rx="14" fill="#FFFFFF" stroke="#0A192F" strokeOpacity="0.12" />
              {/* Tension Fabric Backwall */}
              <rect x="52" y="42" width="236" height="122" rx="8" fill="#0A192F" />
              <text x="72" y="76" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">
                10 × 20 FT SEG EXHIBITION BOOTH
              </text>
              <text x="72" y="106" fill="#FFFFFF" fontSize="20" fontFamily="Georgia, serif" fontStyle="italic">
                Flagship Summit
              </text>
              {/* Foreground Counter */}
              <rect x="114" y="132" width="110" height="44" rx="6" fill="#F5C518" stroke="#0A192F" strokeWidth="1.2" />
              <text x="169" y="158" textAnchor="middle" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">
                PODIUM COUNTER
              </text>
              {/* Roll-up Retractable Banner Stand Right */}
              <rect x="304" y="42" width="64" height="122" rx="4" fill="#F4F7FB" stroke="#0A192F" strokeWidth="1.2" />
              <rect x="304" y="150" width="64" height="14" fill="#0A192F" />
              <text x="336" y="88" textAnchor="middle" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">
                ROLL-UP
              </text>
              <text x="336" y="102" textAnchor="middle" fill="#9A6F00" fontSize="6.5" fontFamily="monospace">
                850×2000
              </text>
              <text x="52" y="182" fill="#475569" fontSize="7" fontFamily="monospace">
                1:10 TRUE-SCALE VECTOR · 50MM HARDWARE BLEED
              </text>
            </g>
          )}

          {/* 08: Editorial & Publishing */}
          {categorySlug === "editorial-design" && (
            <g>
              <rect
                x="34"
                y="24"
                width="174"
                height="172"
                rx="10"
                fill="#FFFFFF"
                stroke="#0A192F"
                strokeOpacity="0.14"
              />
              <rect
                x="212"
                y="24"
                width="174"
                height="172"
                rx="10"
                fill="#FFFFFF"
                stroke="#0A192F"
                strokeOpacity="0.14"
              />
              <line x1="210" y1="24" x2="210" y2="196" stroke="#9A6F00" strokeOpacity="0.45" />
              <text x="52" y="54" fill="#9A6F00" fontSize="7.5" fontFamily="monospace" fontWeight="700">
                SWISS EDITORIAL SPREAD
              </text>
              <text x="52" y="96" fill="#0A192F" fontSize="22" fontFamily="Georgia, serif" fontStyle="italic">
                Annual Issue
              </text>
              <rect x="52" y="118" width="132" height="4" rx="2" fill="#0A192F" fillOpacity="0.2" />
              <rect x="52" y="128" width="114" height="4" rx="2" fill="#0A192F" fillOpacity="0.14" />
              <rect x="52" y="138" width="124" height="4" rx="2" fill="#0A192F" fillOpacity="0.14" />
              <text x="52" y="176" fill="#475569" fontSize="7" fontFamily="monospace">
                BASELINE LOCKED
              </text>

              <rect x="232" y="44" width="134" height="60" rx="8" fill="#0A192F" />
              <path d="M248 88 L278 68 L306 78 L348 54" stroke="#F5C518" strokeWidth="2.4" fill="none" />
              <rect x="232" y="120" width="134" height="5" rx="2" fill="#0A192F" fillOpacity="0.16" />
              <rect x="232" y="134" width="102" height="5" rx="2" fill="#9A6F00" fillOpacity="0.45" />
              <rect x="232" y="148" width="124" height="5" rx="2" fill="#0A192F" fillOpacity="0.16" />
              <text x="232" y="176" fill="#9A6F00" fontSize="7" fontFamily="monospace" fontWeight="700">
                PDF/X-4 + EPUB3 + PDF/UA
              </text>
            </g>
          )}

          {/* 09: Motion Graphics */}
          {categorySlug === "motion-graphics" && (
            <g>
              <rect x="30" y="22" width="360" height="176" rx="14" fill="#0A192F" />
              <rect
                x="52"
                y="40"
                width="316"
                height="104"
                rx="8"
                fill="#122645"
                stroke="#FFFFFF"
                strokeOpacity="0.14"
              />
              <path d="M84 122 C142 46, 224 134, 332 62" stroke="#F5C518" strokeWidth="2.5" fill="none" />
              <rect x="80" y="118" width="8" height="8" transform="rotate(45 84 122)" fill="#F5C518" />
              <rect x="204" y="88" width="8" height="8" transform="rotate(45 208 92)" fill="#FFFFFF" />
              <rect x="328" y="58" width="8" height="8" transform="rotate(45 332 62)" fill="#F5C518" />
              <text x="70" y="62" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="700">
                CUBIC-BEZIER EASING · 60FPS LOTTIE
              </text>
              <rect x="52" y="160" width="316" height="16" rx="8" fill="#061021" />
              <rect x="54" y="162" width="194" height="12" rx="6" fill="#F5C518" />
              <circle cx="248" cy="168" r="7" fill="#FFFFFF" />
            </g>
          )}

          {/* 10: Photo Editing & Retouching */}
          {categorySlug === "photo-editing" && (
            <g>
              {/* Left RAW Side */}
              <rect x="30" y="22" width="180" height="176" rx="12" fill="#E6ECF5" />
              <text x="48" y="46" fill="#475569" fontSize="8" fontFamily="monospace" fontWeight="700">
                RAW CAPTURE
              </text>
              <rect x="84" y="68" width="76" height="96" rx="12" fill="#94A3B8" fillOpacity="0.45" />
              <text x="122" y="182" textAnchor="middle" fill="#475569" fontSize="7" fontFamily="monospace">
                UNGRADED PLATE
              </text>

              {/* Right 16-Bit Retouched Navy Studio Side */}
              <rect x="210" y="22" width="180" height="176" rx="12" fill="#0A192F" />
              <text x="230" y="46" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">
                16-BIT RETOUCHED
              </text>
              <rect
                x="262"
                y="68"
                width="76"
                height="96"
                rx="12"
                fill="#122645"
                stroke="#F5C518"
                strokeWidth="1.6"
              />
              <circle cx="300" cy="116" r="18" fill={`url(#${glowId})`} stroke="#F5C518" strokeWidth="1.4" />
              <text x="300" y="182" textAnchor="middle" fill="#F5C518" fontSize="7" fontFamily="monospace" fontWeight="700">
                CLIPPING PATH · TIFF
              </text>

              {/* Center Split Comparison Handle */}
              <line x1="210" y1="22" x2="210" y2="198" stroke="#F5C518" strokeWidth="2.2" />
              <circle cx="210" cy="110" r="11" fill="#F5C518" stroke="#0A192F" strokeWidth="1.5" />
              <text x="210" y="113" textAnchor="middle" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">
                ↔
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Bottom 3-Column Live Proof Footer */}
      <div className="mt-3.5 grid grid-cols-3 gap-2 border-t border-navy/10 pt-3 font-mono text-[10px]">
        <div>
          <div className="font-bold text-navy">
            From {formatMoney(startingUsd, currency)}/hr
          </div>
          <div className="text-ink-muted">Flexible Rates</div>
        </div>
        <div className="border-x border-navy/10 px-2 text-center">
          <div className="font-bold text-navy">{turnaroundLabel}</div>
          <div className="text-ink-muted">Typical Speed</div>
        </div>
        <div className="text-right">
          <div className="truncate font-bold text-gold-deep">100% Native IP</div>
          <div className="truncate text-ink-muted">{formatLabel}</div>
        </div>
      </div>
    </div>
  );
}
