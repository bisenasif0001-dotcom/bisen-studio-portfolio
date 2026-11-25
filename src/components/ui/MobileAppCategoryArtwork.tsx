"use client";

import React from "react";
import { useCurrency } from "@/components/context/CurrencyContext";
import { formatMoney } from "@/lib/utils";

interface MobileAppCategoryArtworkProps {
  categorySlug: string;
  categoryNumber: string;
  categoryTitle: string;
  turnaroundLabel: string;
  stackLabel: string;
  startingUsd?: number;
}

export function MobileAppCategoryArtwork({
  categorySlug,
  categoryNumber,
  categoryTitle,
  turnaroundLabel,
  stackLabel,
  startingUsd = 65,
}: MobileAppCategoryArtworkProps) {
  const { currency } = useCurrency();
  const gridId = `mca-grid-${categorySlug}`;
  const glowId = `mca-glow-${categorySlug}`;

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

      {/* Category-Specific Mobile Engineering SVG Plate */}
      <div className="overflow-hidden rounded-2xl border border-navy/10 bg-surface/60">
        <svg
          viewBox="0 0 420 220"
          className="h-auto w-full"
          role="img"
          aria-label={`${categoryTitle} mobile engineering visualization plate`}
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
          <rect width="420" height="220" fill={`url(#${gridId})`} />

          {/* 01. iOS App Development */}
          {categorySlug === "ios-app-development" && (
            <g>
              <rect x="42" y="20" width="336" height="180" rx="14" fill="#FFFFFF" stroke="#0A192F" strokeOpacity="0.12" />
              {/* iPhone frame */}
              <rect x="74" y="34" width="96" height="152" rx="20" fill="#0A192F" stroke="#F5C518" strokeWidth="1.4" />
              <rect x="104" y="42" width="36" height="8" rx="4" fill="#122645" />
              <circle cx="133" cy="46" r="2" fill="#F5C518" />
              <rect x="86" y="62" width="72" height="44" rx="8" fill="#122645" stroke="#FFFFFF" strokeOpacity="0.14" />
              <text x="95" y="80" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">SWIFT 6 // UI</text>
              <text x="95" y="95" fill="#FFFFFF" fontSize="9.5" fontFamily="monospace" fontWeight="700">120Hz ProMotion</text>
              <rect x="86" y="114" width="72" height="26" rx="7" fill="#F5C518" />
              <text x="99" y="130" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">FACE ID + PAY</text>
              <rect x="86" y="148" width="72" height="24" rx="7" fill="#122645" />
              <rect x="94" y="156" width="42" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.4" />

              {/* Right SwiftUI inspector card */}
              <rect x="190" y="38" width="166" height="144" rx="12" fill="#F4F7FB" stroke="#0A192F" strokeOpacity="0.1" />
              <text x="206" y="58" fill="#9A6F00" fontSize="8" fontFamily="monospace" fontWeight="700">XCODE // APPLE HIG SPEC</text>
              <rect x="206" y="70" width="134" height="28" rx="7" fill="#FFFFFF" stroke="#0A192F" strokeOpacity="0.1" />
              <text x="216" y="88" fill="#0A192F" fontSize="8.5" fontFamily="monospace" fontWeight="700">SwiftData Offline Sync</text>
              <rect x="206" y="106" width="134" height="28" rx="7" fill="#FFFFFF" stroke="#0A192F" strokeOpacity="0.1" />
              <text x="216" y="124" fill="#0A192F" fontSize="8.5" fontFamily="monospace" fontWeight="700">WidgetKit &amp; Dynamic Island</text>
              <rect x="206" y="144" width="134" height="24" rx="12" fill="#0A192F" />
              <text x="225" y="159" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">99.9% CRASH-FREE IPA</text>
            </g>
          )}

          {/* 02. Android App Development */}
          {categorySlug === "android-app-development" && (
            <g>
              <rect x="38" y="20" width="344" height="180" rx="14" fill="#0A192F" />
              <rect x="60" y="38" width="102" height="144" rx="16" fill="#122645" stroke="#F5C518" strokeWidth="1.2" />
              <circle cx="111" cy="46" r="2.2" fill="#F5C518" />
              <rect x="70" y="58" width="82" height="36" rx="8" fill="#F5C518" />
              <text x="78" y="74" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">MATERIAL 3 UI</text>
              <text x="78" y="86" fill="#0A192F" fontSize="7.5" fontFamily="monospace">Jetpack Compose</text>
              <rect x="70" y="102" width="82" height="30" rx="7" fill="#0A192F" stroke="#FFFFFF" strokeOpacity="0.18" />
              <text x="80" y="120" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace">Kotlin Coroutines</text>
              <rect x="70" y="140" width="82" height="30" rx="7" fill="#0A192F" stroke="#FFFFFF" strokeOpacity="0.18" />
              <text x="84" y="158" fill="#F5C518" fontSize="7.5" fontFamily="monospace">Room + Hilt DI</text>

              <rect x="180" y="38" width="182" height="144" rx="12" fill="#122645" stroke="#FFFFFF" strokeOpacity="0.14" />
              <text x="196" y="58" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">ANDROID VITALS // SDK 35+</text>
              <rect x="196" y="72" width="150" height="22" rx="6" fill="#0A192F" />
              <text x="206" y="86" fill="#FFFFFF" fontSize="8" fontFamily="monospace">ANR Rate: 0.02% (Target PASS)</text>
              <rect x="196" y="102" width="150" height="22" rx="6" fill="#0A192F" />
              <text x="206" y="116" fill="#FFFFFF" fontSize="8" fontFamily="monospace">Baseline Profile: Enabled</text>
              <rect x="196" y="138" width="90" height="26" rx="13" fill="#F5C518" />
              <text x="210" y="154" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">SIGNED AAB</text>
              <rect x="294" y="138" width="52" height="26" rx="13" fill="#0A192F" stroke="#F5C518" strokeOpacity="0.55" />
              <text x="307" y="154" fill="#FFFFFF" fontSize="8" fontFamily="monospace">60 FPS</text>
            </g>
          )}

          {/* 03. Cross-Platform Development */}
          {categorySlug === "cross-platform-development" && (
            <g>
              <circle cx="210" cy="110" r="90" fill={`url(#${glowId})`} />
              {/* Left iOS device */}
              <rect x="44" y="42" width="84" height="136" rx="16" fill="#FFFFFF" stroke="#0A192F" strokeWidth="1.5" />
              <rect x="56" y="58" width="60" height="32" rx="6" fill="#0A192F" />
              <text x="68" y="78" fill="#F5C518" fontSize="8.5" fontFamily="monospace" fontWeight="700">iOS Build</text>
              <rect x="56" y="98" width="60" height="20" rx="5" fill="#F4F7FB" />
              <rect x="56" y="124" width="44" height="8" rx="4" fill="#0A192F" fillOpacity="0.2" />
              <rect x="56" y="138" width="60" height="24" rx="10" fill="#F5C518" />
              <text x="64" y="153" fill="#0A192F" fontSize="7.5" fontFamily="monospace" fontWeight="700">120Hz IPA</text>

              {/* Center Unified Codebase Node */}
              <rect x="156" y="54" width="108" height="112" rx="16" fill="#0A192F" stroke="#F5C518" strokeWidth="1.6" />
              <text x="172" y="76" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">SHARED REPO</text>
              <text x="169" y="96" fill="#FFFFFF" fontSize="9.5" fontFamily="monospace" fontWeight="700">Flutter /</text>
              <text x="169" y="111" fill="#FFFFFF" fontSize="9.5" fontFamily="monospace" fontWeight="700">React Native</text>
              <rect x="170" y="128" width="80" height="24" rx="12" fill="#F5C518" />
              <text x="182" y="143" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">92% REUSE</text>
              <line x1="128" y1="110" x2="156" y2="110" stroke="#9A6F00" strokeWidth="1.6" strokeDasharray="3 3" />
              <line x1="264" y1="110" x2="292" y2="110" stroke="#9A6F00" strokeWidth="1.6" strokeDasharray="3 3" />

              {/* Right Android device */}
              <rect x="292" y="42" width="84" height="136" rx="14" fill="#FFFFFF" stroke="#0A192F" strokeWidth="1.5" />
              <rect x="304" y="58" width="60" height="32" rx="6" fill="#122645" />
              <text x="309" y="78" fill="#F5C518" fontSize="8.5" fontFamily="monospace" fontWeight="700">Android</text>
              <rect x="304" y="98" width="60" height="20" rx="5" fill="#F4F7FB" />
              <rect x="304" y="124" width="44" height="8" rx="4" fill="#0A192F" fillOpacity="0.2" />
              <rect x="304" y="138" width="60" height="24" rx="10" fill="#0A192F" />
              <text x="310" y="153" fill="#F5C518" fontSize="7.5" fontFamily="monospace" fontWeight="700">SIGNED AAB</text>
            </g>
          )}

          {/* 04. Mobile App UI/UX Design */}
          {categorySlug === "mobile-app-design" && (
            <g>
              <rect x="44" y="24" width="332" height="172" rx="14" fill="#FFFFFF" stroke="#0A192F" strokeOpacity="0.14" />
              {/* Phone Artboard 1 (Light) */}
              <rect x="66" y="40" width="86" height="140" rx="16" fill="#F4F7FB" stroke="#0A192F" strokeWidth="1.3" />
              <rect x="76" y="54" width="66" height="24" rx="6" fill="#0A192F" />
              <rect x="76" y="86" width="66" height="36" rx="6" fill="#FFFFFF" stroke="#0A192F" strokeOpacity="0.1" />
              <rect x="76" y="130" width="66" height="22" rx="11" fill="#F5C518" />
              <text x="86" y="144" fill="#0A192F" fontSize="7.5" fontFamily="monospace" fontWeight="700">OLED LIGHT</text>

              {/* Phone Artboard 2 (Dark) */}
              <rect x="167" y="40" width="86" height="140" rx="16" fill="#0A192F" stroke="#F5C518" strokeWidth="1.4" />
              <rect x="177" y="54" width="66" height="24" rx="6" fill="#122645" />
              <rect x="177" y="86" width="66" height="36" rx="6" fill="#122645" stroke="#F5C518" strokeOpacity="0.4" />
              <rect x="177" y="130" width="66" height="22" rx="11" fill="#F5C518" />
              <text x="190" y="144" fill="#0A192F" fontSize="7.5" fontFamily="monospace" fontWeight="700">OLED DARK</text>

              {/* Spec Column */}
              <rect x="268" y="40" width="90" height="140" rx="12" fill="#F4F7FB" stroke="#0A192F" strokeOpacity="0.1" />
              <text x="278" y="60" fill="#9A6F00" fontSize="7.5" fontFamily="monospace" fontWeight="700">TOKENS</text>
              <circle cx="288" cy="82" r="8" fill="#0A192F" />
              <circle cx="310" cy="82" r="8" fill="#F5C518" />
              <circle cx="332" cy="82" r="8" fill="#FFFFFF" stroke="#0A192F" />
              <text x="278" y="110" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">8pt Mobile Grid</text>
              <text x="278" y="128" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">44pt Tap Area</text>
              <rect x="278" y="142" width="70" height="24" rx="6" fill="#0A192F" />
              <text x="285" y="157" fill="#F5C518" fontSize="7.5" fontFamily="monospace" fontWeight="700">FIGMA DEV</text>
            </g>
          )}

          {/* 05. AI-Powered Mobile Apps */}
          {categorySlug === "ai-mobile-app-development" && (
            <g>
              <rect x="40" y="20" width="340" height="180" rx="14" fill="#0A192F" />
              {/* Phone AI Assistant */}
              <rect x="64" y="34" width="110" height="152" rx="18" fill="#122645" stroke="#F5C518" strokeWidth="1.4" />
              <text x="78" y="54" fill="#F5C518" fontSize="7.5" fontFamily="monospace" fontWeight="700">COPILOT STREAM</text>
              <rect x="76" y="62" width="86" height="22" rx="7" fill="#0A192F" stroke="#FFFFFF" strokeOpacity="0.16" />
              <text x="83" y="76" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace">Analyze invoice...</text>
              <rect x="76" y="92" width="86" height="44" rx="7" fill="#F5C518" />
              <text x="83" y="108" fill="#0A192F" fontSize="7.5" fontFamily="monospace" fontWeight="700">OCR Parsed: $4,250</text>
              <text x="83" y="122" fill="#0A192F" fontSize="7.5" fontFamily="monospace">Tool Call Verified</text>
              <rect x="76" y="144" width="86" height="26" rx="13" fill="#0A192F" stroke="#F5C518" strokeOpacity="0.6" />
              <text x="89" y="160" fill="#F5C518" fontSize="7.5" fontFamily="monospace" fontWeight="700">VOICE + SSE</text>

              {/* Secure Gateway Pipeline */}
              <rect x="192" y="38" width="166" height="144" rx="12" fill="#122645" stroke="#FFFFFF" strokeOpacity="0.14" />
              <text x="206" y="58" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">EDGE AI PROXY // ZOD</text>
              <rect x="206" y="70" width="138" height="26" rx="6" fill="#0A192F" />
              <text x="214" y="86" fill="#FFFFFF" fontSize="8" fontFamily="monospace">Gemini / OpenAI Gateway</text>
              <rect x="206" y="104" width="138" height="26" rx="6" fill="#0A192F" />
              <text x="214" y="120" fill="#FFFFFF" fontSize="8" fontFamily="monospace">RAG pgvector Citations</text>
              <rect x="206" y="142" width="138" height="24" rx="12" fill="#F5C518" />
              <text x="220" y="157" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">0 EXPOSED CLIENT KEYS</text>
            </g>
          )}

          {/* 06. E-commerce & On-Demand Apps */}
          {categorySlug === "ecommerce-on-demand-apps" && (
            <g>
              <rect x="42" y="20" width="336" height="180" rx="14" fill="#FFFFFF" stroke="#0A192F" strokeOpacity="0.14" />
              <rect x="64" y="38" width="96" height="144" rx="16" fill="#0A192F" stroke="#F5C518" strokeWidth="1.2" />
              <rect x="74" y="54" width="76" height="54" rx="8" fill="#122645" />
              <text x="84" y="74" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">LIVE ORDER</text>
              <text x="84" y="92" fill="#FFFFFF" fontSize="11" fontFamily="monospace" fontWeight="700">$148.00</text>
              <rect x="74" y="118" width="76" height="22" rx="11" fill="#F5C518" />
              <text x="84" y="132" fill="#0A192F" fontSize="7.5" fontFamily="monospace" fontWeight="700">APPLE PAY 1-TAP</text>
              <rect x="74" y="148" width="76" height="20" rx="6" fill="#122645" />
              <text x="83" y="161" fill="#FFFFFF" fontSize="7" fontFamily="monospace">ETA: 14 mins</text>

              <rect x="178" y="38" width="178" height="144" rx="12" fill="#F4F7FB" stroke="#0A192F" strokeOpacity="0.1" />
              <text x="194" y="58" fill="#9A6F00" fontSize="8" fontFamily="monospace" fontWeight="700">SHOPIFY + STRIPE CONNECT</text>
              <path d="M 200 130 Q 250 74 332 98" stroke="#0A192F" strokeWidth="2.2" fill="none" strokeDasharray="4 4" />
              <circle cx="200" cy="130" r="6" fill="#0A192F" />
              <circle cx="332" cy="98" r="7" fill="#F5C518" stroke="#0A192F" strokeWidth="1.5" />
              <rect x="194" y="144" width="146" height="24" rx="8" fill="#0A192F" />
              <text x="208" y="159" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">SPLIT PAYOUT + GPS MAP</text>
            </g>
          )}

          {/* 07. Business & Enterprise Apps */}
          {categorySlug === "enterprise-app-development" && (
            <g>
              <rect x="40" y="22" width="340" height="176" rx="14" fill="#F4F7FB" stroke="#0A192F" strokeOpacity="0.14" />
              <rect x="58" y="38" width="304" height="32" rx="8" fill="#0A192F" />
              <text x="72" y="58" fill="#F5C518" fontSize="8.5" fontFamily="monospace" fontWeight="700">ENTERPRISE MOBILE SUITE // OKTA &amp; ENTRA ID SSO</text>

              <rect x="58" y="82" width="144" height="96" rx="10" fill="#FFFFFF" stroke="#0A192F" strokeOpacity="0.12" />
              <text x="72" y="102" fill="#9A6F00" fontSize="8" fontFamily="monospace" fontWeight="700">OFFLINE FIELD SYNC</text>
              <rect x="72" y="114" width="116" height="22" rx="6" fill="#F4F7FB" />
              <text x="80" y="128" fill="#0A192F" fontSize="7.5" fontFamily="monospace">Barcode Scan Queued (42)</text>
              <rect x="72" y="144" width="116" height="22" rx="6" fill="#0A192F" />
              <text x="86" y="158" fill="#F5C518" fontSize="7.5" fontFamily="monospace" fontWeight="700">SQLCipher AES-256</text>

              <rect x="218" y="82" width="144" height="96" rx="10" fill="#FFFFFF" stroke="#0A192F" strokeOpacity="0.12" />
              <text x="232" y="102" fill="#9A6F00" fontSize="8" fontFamily="monospace" fontWeight="700">CRM + WORKFLOW</text>
              <rect x="232" y="114" width="116" height="22" rx="6" fill="#F4F7FB" />
              <text x="240" y="128" fill="#0A192F" fontSize="7.5" fontFamily="monospace">HubSpot Bidirectional</text>
              <rect x="232" y="144" width="116" height="22" rx="6" fill="#F5C518" />
              <text x="246" y="158" fill="#0A192F" fontSize="7.5" fontFamily="monospace" fontWeight="700">ABM / MANAGED PLAY</text>
            </g>
          )}

          {/* 08. App Backend & Integrations */}
          {categorySlug === "app-backend-integrations" && (
            <g>
              <rect x="38" y="20" width="344" height="180" rx="14" fill="#0A192F" />
              <rect x="58" y="42" width="84" height="54" rx="10" fill="#122645" stroke="#FFFFFF" strokeOpacity="0.18" />
              <text x="74" y="66" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">APNs/FCM</text>
              <text x="72" y="81" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace">Rich Push</text>

              <rect x="58" y="116" width="84" height="54" rx="10" fill="#122645" stroke="#FFFFFF" strokeOpacity="0.18" />
              <text x="74" y="140" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">PASSKEYS</text>
              <text x="72" y="155" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace">JWT + Apple</text>

              <rect x="168" y="64" width="90" height="86" rx="14" fill="#F5C518" />
              <text x="182" y="96" fill="#0A192F" fontSize="9.5" fontFamily="monospace" fontWeight="700">REST /</text>
              <text x="182" y="110" fill="#0A192F" fontSize="9.5" fontFamily="monospace" fontWeight="700">GraphQL</text>
              <text x="180" y="128" fill="#0A192F" fontSize="7.5" fontFamily="monospace">&lt;80ms P95</text>

              <rect x="282" y="42" width="82" height="54" rx="10" fill="#122645" stroke="#F5C518" strokeOpacity="0.45" />
              <text x="294" y="66" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="700">POSTGRES</text>
              <text x="294" y="81" fill="#F5C518" fontSize="7.5" fontFamily="monospace">RLS / Prisma</text>

              <rect x="282" y="116" width="82" height="54" rx="10" fill="#122645" stroke="#F5C518" strokeOpacity="0.45" />
              <text x="297" y="140" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="700">STRIPE</text>
              <text x="297" y="155" fill="#F5C518" fontSize="7.5" fontFamily="monospace">FX Webhooks</text>

              <line x1="142" y1="74" x2="168" y2="96" stroke="#F5C518" strokeWidth="1.5" />
              <line x1="142" y1="140" x2="168" y2="118" stroke="#F5C518" strokeWidth="1.5" />
              <line x1="258" y1="96" x2="282" y2="74" stroke="#FFFFFF" strokeOpacity="0.65" strokeWidth="1.5" />
              <line x1="258" y1="118" x2="282" y2="140" stroke="#FFFFFF" strokeOpacity="0.65" strokeWidth="1.5" />
            </g>
          )}

          {/* 09. App Launch & Optimization */}
          {categorySlug === "app-launch-optimization" && (
            <g>
              <rect x="40" y="20" width="340" height="180" rx="14" fill="#FFFFFF" stroke="#0A192F" strokeOpacity="0.14" />
              <text x="64" y="48" fill="#9A6F00" fontSize="8.5" fontFamily="monospace" fontWeight="700">STORE RELEASE &amp; ASO CONSOLE</text>
              <circle cx="116" cy="112" r="42" fill="#F4F7FB" stroke="#0A192F" strokeOpacity="0.12" strokeWidth="6" />
              <circle cx="116" cy="112" r="42" fill="none" stroke="#F5C518" strokeWidth="6" strokeDasharray="248 264" strokeLinecap="round" transform="rotate(-90 116 112)" />
              <text x="95" y="114" fill="#0A192F" fontSize="14" fontFamily="monospace" fontWeight="700">99.9%</text>
              <text x="89" y="128" fill="#475569" fontSize="7" fontFamily="monospace">CRASH-FREE</text>

              <rect x="184" y="64" width="174" height="28" rx="8" fill="#0A192F" />
              <text x="196" y="82" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">APP STORE CONNECT: APPROVED</text>
              <rect x="184" y="100" width="174" height="28" rx="8" fill="#0A192F" />
              <text x="196" y="118" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="700">GOOGLE PLAY CONSOLE: LIVE</text>
              <rect x="184" y="136" width="174" height="28" rx="8" fill="#F5C518" />
              <text x="196" y="154" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">ASO KEYWORDS + SENTRY MAP</text>
            </g>
          )}

          {/* 10. App Maintenance & Support */}
          {categorySlug === "app-maintenance" && (
            <g>
              <rect x="40" y="20" width="340" height="180" rx="14" fill="#0A192F" />
              <rect x="64" y="42" width="124" height="136" rx="14" fill="#122645" stroke="#F5C518" strokeOpacity="0.55" />
              <path d="M 126 62 L 154 74 V 104 C 154 126 126 138 126 138 C 126 138 98 126 98 104 V 74 Z" fill="#F5C518" />
              <text x="111" y="104" fill="#0A192F" fontSize="10" fontFamily="monospace" fontWeight="700">99.9%</text>
              <text x="84" y="158" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="700">OS &amp; CVE GUARD</text>

              <rect x="206" y="44" width="150" height="36" rx="8" fill="#122645" stroke="#FFFFFF" strokeOpacity="0.14" />
              <text x="218" y="66" fill="#FFFFFF" fontSize="8" fontFamily="monospace">iOS 19 / Android 16 Tested</text>
              <rect x="206" y="90" width="150" height="36" rx="8" fill="#122645" stroke="#FFFFFF" strokeOpacity="0.14" />
              <text x="218" y="112" fill="#F5C518" fontSize="8" fontFamily="monospace">48h Hotfix &amp; Crash SLA</text>
              <rect x="206" y="136" width="150" height="36" rx="8" fill="#F5C518" />
              <text x="218" y="158" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">DIRECT PRINCIPALS 12H</text>
            </g>
          )}
        </svg>
      </div>

      {/* Bottom Live Currency + Stack Proof Strip */}
      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-navy/10 pt-3.5 text-[11px]">
        <div>
          <div className="font-mono font-bold text-navy">
            From {formatMoney(startingUsd, currency)}/hr
          </div>
          <div className="text-ink-muted">Flexible Rates</div>
        </div>
        <div>
          <div className="font-mono font-bold text-navy">{turnaroundLabel}</div>
          <div className="text-ink-muted">Typical Delivery</div>
        </div>
        <div className="text-right">
          <div className="font-mono font-bold text-gold-deep">100% Git IP</div>
          <div className="truncate text-ink-muted">{stackLabel}</div>
        </div>
      </div>
    </div>
  );
}
