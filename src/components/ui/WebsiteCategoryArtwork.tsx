"use client";

import React from "react";
import { useCurrency } from "@/components/context/CurrencyContext";
import { formatMoney } from "@/lib/utils";

interface WebsiteCategoryArtworkProps {
  categorySlug: string;
  categoryNumber: string;
  categoryTitle: string;
  turnaroundLabel: string;
  stackLabel: string;
  startingUsd?: number;
}

export function WebsiteCategoryArtwork({
  categorySlug,
  categoryNumber,
  categoryTitle,
  turnaroundLabel,
  stackLabel,
  startingUsd = 65,
}: WebsiteCategoryArtworkProps) {
  const { currency } = useCurrency();
  const gridId = `wca-grid-${categorySlug}`;
  const glowId = `wca-glow-${categorySlug}`;

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

      {/* Category-Specific Web Engineering SVG Plate */}
      <div className="overflow-hidden rounded-2xl border border-navy/10 bg-surface/60">
        <svg
          viewBox="0 0 420 220"
          className="h-auto w-full"
          role="img"
          aria-label={`${categoryTitle} web engineering visualization plate`}
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

          {/* 01: Website Design */}
          {categorySlug === "website-design" && (
            <g>
              <rect
                x="22"
                y="22"
                width="266"
                height="176"
                rx="14"
                fill="#FFFFFF"
                stroke="#0A192F"
                strokeOpacity="0.14"
              />
              {/* Browser Traffic Dots */}
              <circle cx="38" cy="37" r="3" fill="#0A192F" fillOpacity="0.3" />
              <circle cx="48" cy="37" r="3" fill="#F5C518" />
              <circle cx="58" cy="37" r="3" fill="#0A192F" fillOpacity="0.18" />
              <line x1="22" y1="50" x2="288" y2="50" stroke="#0A192F" strokeOpacity="0.08" />

              {/* Responsive 12-Col Grid Inside Frame */}
              <rect x="38" y="64" width="128" height="10" rx="5" fill="#0A192F" />
              <rect x="38" y="80" width="96" height="6" rx="3" fill="#0A192F" fillOpacity="0.22" />
              <rect x="38" y="96" width="64" height="22" rx="11" fill="#F5C518" />
              <rect x="180" y="64" width="92" height="54" rx="8" fill="#0A192F" />
              <path d="M192 104 L214 86 L234 94 L260 74" stroke="#F5C518" strokeWidth="2.2" fill="none" />

              <rect x="38" y="132" width="72" height="50" rx="8" fill="#F4F7FB" />
              <rect x="119" y="132" width="72" height="50" rx="8" fill="#F4F7FB" />
              <rect x="200" y="132" width="72" height="50" rx="8" fill="#F4F7FB" />

              {/* Mobile Breakpoint Frame Overlay */}
              <rect x="304" y="28" width="94" height="170" rx="16" fill="#0A192F" />
              <rect x="312" y="44" width="78" height="138" rx="8" fill="#122645" />
              <rect x="322" y="56" width="58" height="8" rx="4" fill="#FFFFFF" />
              <rect x="322" y="70" width="44" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.4" />
              <rect x="322" y="86" width="58" height="20" rx="10" fill="#F5C518" />
              <text x="351" y="166" textAnchor="middle" fill="#F5C518" fontSize="7" fontFamily="monospace" fontWeight="700">
                320–2560PX
              </text>
            </g>
          )}

          {/* 02: Custom Web Development */}
          {categorySlug === "custom-web-development" && (
            <g>
              <rect x="24" y="20" width="372" height="180" rx="14" fill="#0A192F" />
              <circle cx="310" cy="110" r="68" fill={`url(#${glowId})`} />
              <text x="44" y="46" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">
                APP ROUTER // STRICT TYPESCRIPT
              </text>
              <line x1="44" y1="58" x2="376" y2="58" stroke="#FFFFFF" strokeOpacity="0.1" />

              <text x="44" y="82" fill="#F5C518" fontSize="9.5" fontFamily="monospace">
                export async function generateStaticParams() &#123;
              </text>
              <text x="58" y="102" fill="#FFFFFF" fontSize="9.5" fontFamily="monospace">
                const data = await getEdgeCatalog();
              </text>
              <text x="58" y="122" fill="#FFFFFF" fillOpacity="0.78" fontSize="9.5" fontFamily="monospace">
                return &#123; status: &quot;100% Edge Cached&quot; &#125;;
              </text>
              <text x="44" y="142" fill="#F5C518" fontSize="9.5" fontFamily="monospace">
                &#125;
              </text>

              {/* Build Pass Pill Row */}
              <rect x="44" y="160" width="102" height="22" rx="11" fill="#F5C518" />
              <text x="95" y="174" textAnchor="middle" fill="#0A192F" fontSize="7.5" fontFamily="monospace" fontWeight="700">
                NEXT 15 · RSC
              </text>
              <rect x="156" y="160" width="110" height="22" rx="11" fill="#122645" stroke="#FFFFFF" strokeOpacity="0.2" />
              <text x="211" y="174" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace">
                0.4S EDGE TTFB
              </text>
              <rect x="276" y="160" width="100" height="22" rx="11" fill="#122645" stroke="#F5C518" strokeOpacity="0.4" />
              <text x="326" y="174" textAnchor="middle" fill="#F5C518" fontSize="7.5" fontFamily="monospace" fontWeight="700">
                GIT IP 100%
              </text>
            </g>
          )}

          {/* 03: E-commerce Development */}
          {categorySlug === "ecommerce-development" && (
            <g>
              {/* Storefront Product Card */}
              <rect
                x="22"
                y="22"
                width="206"
                height="176"
                rx="14"
                fill="#FFFFFF"
                stroke="#0A192F"
                strokeOpacity="0.14"
              />
              <rect x="36" y="36" width="84" height="108" rx="10" fill="#0A192F" />
              <circle cx="78" cy="82" r="18" stroke="#F5C518" strokeWidth="2" />
              <text x="134" y="54" fill="#9A6F00" fontSize="7" fontFamily="monospace" fontWeight="700">
                SHOPIFY OS 2.0
              </text>
              <text x="134" y="76" fill="#0A192F" fontSize="14" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="700">
                Flagship PDP
              </text>
              <text x="134" y="96" fill="#0A192F" fontSize="11" fontFamily="monospace" fontWeight="700">
                $148.00
              </text>
              <rect x="134" y="112" width="78" height="22" rx="11" fill="#0A192F" />
              <text x="173" y="126" textAnchor="middle" fill="#F5C518" fontSize="7" fontFamily="monospace" fontWeight="700">
                ADD TO BAG
              </text>
              <text x="36" y="176" fill="#475569" fontSize="7" fontFamily="monospace">
                SHOP PAY · STRIPE · MULTI-FX
              </text>

              {/* Slide-Out Cart Drawer Right */}
              <rect x="242" y="22" width="156" height="176" rx="14" fill="#0A192F" />
              <text x="258" y="44" fill="#FFFFFF" fontSize="8.5" fontFamily="monospace" fontWeight="700">
                CART DRAWER (2)
              </text>
              <rect x="258" y="54" width="124" height="6" rx="3" fill="#122645" />
              <rect x="258" y="54" width="96" height="6" rx="3" fill="#F5C518" />
              <rect x="258" y="74" width="124" height="36" rx="8" fill="#122645" />
              <rect x="258" y="116" width="124" height="28" rx="8" fill="#122645" stroke="#F5C518" strokeOpacity="0.4" />
              <rect x="258" y="156" width="124" height="26" rx="13" fill="#F5C518" />
              <text x="320" y="172.5" textAnchor="middle" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">
                CHECKOUT ↗
              </text>
            </g>
          )}

          {/* 04: CMS & Website Platforms */}
          {categorySlug === "cms-development" && (
            <g>
              {/* CMS Editor Sidebar + Canvas */}
              <rect x="24" y="22" width="136" height="176" rx="14" fill="#0A192F" />
              <text x="40" y="46" fill="#F5C518" fontSize="7.5" fontFamily="monospace" fontWeight="700">
                MODULAR BLOCKS
              </text>
              <rect x="38" y="60" width="108" height="26" rx="6" fill="#122645" stroke="#F5C518" strokeOpacity="0.45" />
              <text x="48" y="76" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace">
                01 Hero Section
              </text>
              <rect x="38" y="94" width="108" height="26" rx="6" fill="#122645" />
              <text x="48" y="110" fill="#FFFFFF" fillOpacity="0.8" fontSize="7.5" fontFamily="monospace">
                02 Case Grid CMS
              </text>
              <rect x="38" y="128" width="108" height="26" rx="6" fill="#122645" />
              <text x="48" y="144" fill="#FFFFFF" fillOpacity="0.8" fontSize="7.5" fontFamily="monospace">
                03 FAQ + SEO Meta
              </text>

              {/* Published Edge Page Card */}
              <rect
                x="174"
                y="22"
                width="222"
                height="176"
                rx="14"
                fill="#FFFFFF"
                stroke="#0A192F"
                strokeOpacity="0.14"
              />
              <text x="192" y="46" fill="#9A6F00" fontSize="7.5" fontFamily="monospace" fontWeight="700">
                WP BLOCKS · WEBFLOW · SANITY
              </text>
              <rect x="192" y="60" width="186" height="58" rx="8" fill="#F4F7FB" />
              <text x="206" y="88" fill="#0A192F" fontSize="14" fontFamily="Georgia, serif" fontStyle="italic">
                Zero-Dev Publishing
              </text>
              <rect x="192" y="130" width="88" height="26" rx="8" fill="#0A192F" />
              <text x="236" y="146" textAnchor="middle" fill="#F5C518" fontSize="7" fontFamily="monospace" fontWeight="700">
                2S PUBLISH
              </text>
              <rect x="290" y="130" width="88" height="26" rx="8" fill="#F4F7FB" stroke="#0A192F" strokeOpacity="0.14" />
              <text x="334" y="146" textAnchor="middle" fill="#0A192F" fontSize="7" fontFamily="monospace" fontWeight="700">
                301 SAFE
              </text>
            </g>
          )}

          {/* 05: Landing Pages & Funnels */}
          {categorySlug === "landing-page-design" && (
            <g>
              <rect x="26" y="22" width="368" height="176" rx="14" fill="#0A192F" />
              <text x="48" y="46" fill="#F5C518" fontSize="7.5" fontFamily="monospace" fontWeight="700">
                PAID ACQUISITION FUNNEL // AD MESSAGE MATCH
              </text>
              {/* Funnel Steps */}
              <rect x="48" y="64" width="96" height="84" rx="10" fill="#122645" />
              <text x="96" y="96" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontFamily="monospace" fontWeight="700">
                100%
              </text>
              <text x="96" y="114" textAnchor="middle" fill="#F5C518" fontSize="7" fontFamily="monospace">
                AD CLICK
              </text>

              <path d="M150 106 H168" stroke="#F5C518" strokeWidth="2" />

              <rect x="174" y="64" width="96" height="84" rx="10" fill="#122645" stroke="#F5C518" strokeOpacity="0.5" />
              <text x="222" y="96" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontFamily="monospace" fontWeight="700">
                0.4s
              </text>
              <text x="222" y="114" textAnchor="middle" fill="#F5C518" fontSize="7" fontFamily="monospace">
                HERO PAINT
              </text>

              <path d="M276 106 H294" stroke="#F5C518" strokeWidth="2" />

              <rect x="300" y="64" width="76" height="84" rx="10" fill="#F5C518" />
              <text x="338" y="96" textAnchor="middle" fill="#0A192F" fontSize="13" fontFamily="monospace" fontWeight="700">
                +138%
              </text>
              <text x="338" y="114" textAnchor="middle" fill="#0A192F" fontSize="7" fontFamily="monospace" fontWeight="700">
                BOOKINGS
              </text>

              <text x="48" y="176" fill="#FFFFFF" fillOpacity="0.72" fontSize="7" fontFamily="monospace">
                GCLID / UTM PERSISTENCE · CRM SYNC · ZERO HEADER LEAKS
              </text>
            </g>
          )}

          {/* 06: Website Redesign & Migration */}
          {categorySlug === "website-redesign" && (
            <g>
              <rect x="28" y="24" width="174" height="172" rx="12" fill="#E6ECF5" />
              <text x="46" y="48" fill="#475569" fontSize="8" fontFamily="monospace" fontWeight="700">
                LEGACY SITE
              </text>
              <text x="46" y="88" fill="#475569" fontSize="22" fontFamily="monospace" fontWeight="700">
                4.2s
              </text>
              <text x="46" y="108" fill="#475569" fontSize="7.5" fontFamily="monospace">
                LCP · BLOATED BUILDER
              </text>
              <rect x="46" y="132" width="124" height="34" rx="8" fill="#FFFFFF" stroke="#0A192F" strokeOpacity="0.14" />
              <text x="108" y="152" textAnchor="middle" fill="#475569" fontSize="7.5" fontFamily="monospace">
                301 MAP ACTIVE
              </text>

              <rect x="218" y="24" width="174" height="172" rx="12" fill="#0A192F" />
              <text x="236" y="48" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">
                MODERN ATELIER
              </text>
              <text x="236" y="88" fill="#F5C518" fontSize="24" fontFamily="monospace" fontWeight="700">
                0.4s
              </text>
              <text x="236" y="108" fill="#FFFFFF" fillOpacity="0.8" fontSize="7.5" fontFamily="monospace">
                99/100 LIGHTHOUSE
              </text>
              <rect x="236" y="132" width="136" height="34" rx="8" fill="#F5C518" />
              <text x="304" y="152" textAnchor="middle" fill="#0A192F" fontSize="7.5" fontFamily="monospace" fontWeight="700">
                ZERO RANK DROP
              </text>

              <circle cx="210" cy="110" r="12" fill="#F5C518" stroke="#0A192F" strokeWidth="1.5" />
              <text x="210" y="113" textAnchor="middle" fill="#0A192F" fontSize="9" fontFamily="monospace" fontWeight="700">
                →
              </text>
            </g>
          )}

          {/* 07: Portals & Web Applications */}
          {categorySlug === "web-applications" && (
            <g>
              <rect x="22" y="20" width="376" height="180" rx="14" fill="#0A192F" />
              {/* Left Sidebar */}
              <rect x="34" y="34" width="74" height="152" rx="8" fill="#122645" />
              <circle cx="52" cy="54" r="7" fill="#F5C518" />
              <rect x="44" y="76" width="52" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.6" />
              <rect x="44" y="92" width="44" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.3" />
              <rect x="44" y="108" width="48" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.3" />
              <rect x="44" y="158" width="52" height="16" rx="4" fill="#F5C518" fillOpacity="0.22" />
              <text x="70" y="169" textAnchor="middle" fill="#F5C518" fontSize="6" fontFamily="monospace" fontWeight="700">
                RBAC
              </text>

              {/* Main Console Cards */}
              <rect x="120" y="34" width="126" height="62" rx="8" fill="#122645" />
              <text x="134" y="54" fill="#F5C518" fontSize="13" fontFamily="monospace" fontWeight="700">
                $1.48M
              </text>
              <text x="134" y="70" fill="#FFFFFF" fillOpacity="0.7" fontSize="6.5" fontFamily="monospace">
                LIVE TREASURY STREAM
              </text>

              <rect x="256" y="34" width="128" height="62" rx="8" fill="#122645" />
              <path d="M270 80 L294 64 L318 70 L348 48 L370 54" stroke="#F5C518" strokeWidth="2.2" fill="none" />

              {/* Virtualized Table Rows */}
              <rect x="120" y="106" width="264" height="80" rx="8" fill="#081222" stroke="#FFFFFF" strokeOpacity="0.1" />
              <text x="134" y="124" fill="#F5C518" fontSize="7" fontFamily="monospace" fontWeight="700">
                100K+ VIRTUALIZED ROWS // &lt;50MS FILTER
              </text>
              <rect x="134" y="136" width="234" height="10" rx="3" fill="#122645" />
              <rect x="134" y="152" width="234" height="10" rx="3" fill="#122645" />
              <rect x="134" y="168" width="234" height="10" rx="3" fill="#122645" />
            </g>
          )}

          {/* 08: SEO & Performance */}
          {categorySlug === "website-optimization" && (
            <g>
              <rect
                x="24"
                y="22"
                width="372"
                height="176"
                rx="14"
                fill="#0A192F"
              />
              {/* 3 Lighthouse 99-100 Score Gauges */}
              {[
                { cx: 92, score: "99", label: "PERFORMANCE" },
                { cx: 210, score: "100", label: "ACCESSIBILITY" },
                { cx: 328, score: "100", label: "TECH SEO" },
              ].map((g) => (
                <g key={g.label}>
                  <circle
                    cx={g.cx}
                    cy="90"
                    r="34"
                    fill="#122645"
                    stroke="#FFFFFF"
                    strokeOpacity="0.14"
                    strokeWidth="4"
                  />
                  <circle
                    cx={g.cx}
                    cy="90"
                    r="34"
                    fill="none"
                    stroke="#F5C518"
                    strokeWidth="4"
                    strokeDasharray="205 220"
                  />
                  <text
                    x={g.cx}
                    y="95"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="16"
                    fontFamily="monospace"
                    fontWeight="700"
                  >
                    {g.score}
                  </text>
                  <text
                    x={g.cx}
                    y="144"
                    textAnchor="middle"
                    fill="#F5C518"
                    fontSize="7"
                    fontFamily="monospace"
                    fontWeight="700"
                  >
                    {g.label}
                  </text>
                </g>
              ))}
              <text x="210" y="176" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.72" fontSize="7" fontFamily="monospace">
                LCP 0.4S · CLS 0.00 · JSON-LD · GDPR CONSENT V2
              </text>
            </g>
          )}

          {/* 09: Maintenance & Support */}
          {categorySlug === "website-maintenance" && (
            <g>
              <rect x="24" y="22" width="372" height="176" rx="14" fill="#0A192F" />
              <circle cx="96" cy="110" r="46" fill={`url(#${glowId})`} />
              {/* Security Shield */}
              <path
                d="M96 64 L132 78 V108 C132 132 96 150 96 150 C96 150 60 132 60 108 V78 L96 64 Z"
                fill="#122645"
                stroke="#F5C518"
                strokeWidth="2.2"
              />
              <path d="M84 106 L93 115 L110 96" stroke="#F5C518" strokeWidth="2.8" fill="none" />

              {/* Telemetry Bars */}
              <rect x="164" y="52" width="206" height="32" rx="8" fill="#122645" />
              <text x="180" y="72" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="700">
                99.9% UPTIME · CLOUDFLARE WAF
              </text>
              <rect x="164" y="94" width="206" height="32" rx="8" fill="#122645" />
              <text x="180" y="114" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">
                STAGING-FIRST PATCHES &amp; CVE SCAN
              </text>
              <rect x="164" y="136" width="206" height="32" rx="8" fill="#F5C518" />
              <text x="180" y="156" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">
                DAILY OFF-SITE ENCRYPTED SNAPSHOT
              </text>
            </g>
          )}

          {/* 10: Integrations & Automation */}
          {categorySlug === "web-integrations" && (
            <g>
              <rect x="24" y="22" width="372" height="176" rx="14" fill="#0A192F" />
              {/* Connected Nodes */}
              <line x1="94" y1="74" x2="210" y2="110" stroke="#F5C518" strokeWidth="1.8" strokeDasharray="4 3" />
              <line x1="94" y1="146" x2="210" y2="110" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1.6" />
              <line x1="210" y1="110" x2="326" y2="74" stroke="#F5C518" strokeWidth="1.8" />
              <line x1="210" y1="110" x2="326" y2="146" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1.6" />

              <rect x="44" y="54" width="84" height="38" rx="8" fill="#122645" stroke="#FFFFFF" strokeOpacity="0.2" />
              <text x="86" y="77" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace" fontWeight="700">
                NEXT.JS SITE
              </text>
              <rect x="44" y="128" width="84" height="38" rx="8" fill="#122645" stroke="#FFFFFF" strokeOpacity="0.2" />
              <text x="86" y="151" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace" fontWeight="700">
                STRIPE PAY
              </text>

              {/* Center Hub */}
              <circle cx="210" cy="110" r="28" fill="#F5C518" />
              <text x="210" y="108" textAnchor="middle" fill="#0A192F" fontSize="7.5" fontFamily="monospace" fontWeight="700">
                SIGNED
              </text>
              <text x="210" y="119" textAnchor="middle" fill="#0A192F" fontSize="7.5" fontFamily="monospace" fontWeight="700">
                API HUB
              </text>

              <rect x="292" y="54" width="84" height="38" rx="8" fill="#122645" stroke="#F5C518" strokeOpacity="0.5" />
              <text x="334" y="77" textAnchor="middle" fill="#F5C518" fontSize="7.5" fontFamily="monospace" fontWeight="700">
                CRM / SLACK
              </text>
              <rect x="292" y="128" width="84" height="38" rx="8" fill="#122645" stroke="#F5C518" strokeOpacity="0.5" />
              <text x="334" y="151" textAnchor="middle" fill="#F5C518" fontSize="7.5" fontFamily="monospace" fontWeight="700">
                AI + EMAIL
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
          <div className="text-ink-muted">Typical Delivery</div>
        </div>
        <div className="text-right">
          <div className="truncate font-bold text-gold-deep">100% Git IP</div>
          <div className="truncate text-ink-muted">{stackLabel}</div>
        </div>
      </div>
    </div>
  );
}
