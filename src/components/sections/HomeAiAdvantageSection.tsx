"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Cpu, Lock, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type DeliverableKey = "website" | "dashboard" | "app-print";

interface BenchmarkPreset {
  id: DeliverableKey;
  label: string;
  legacyLabel: string;
  legacyWidth: string;
  vibeLabel: string;
  vibeNote: string;
  vibeWidth: string;
  bisenLabel: string;
  bisenBadge: string;
  bisenWidth: string;
  multiplier: string;
}

const BENCHMARK_PRESETS: BenchmarkPreset[] = [
  {
    id: "website",
    label: "Flagship Website",
    legacyLabel: "12–16 Weeks · ~$48K Overhead",
    legacyWidth: "100%",
    vibeLabel: "2 Wks · High Debt",
    vibeNote: "Generic templates · Zero WCAG / technical SEO · Unmaintainable code",
    vibeWidth: "40%",
    bisenLabel: "3 Weeks · Production Shipped",
    bisenBadge: "3.5× Faster",
    bisenWidth: "24%",
    multiplier: "3.5×",
  },
  {
    id: "dashboard",
    label: "SaaS Dashboard",
    legacyLabel: "16–24 Weeks · ~$95K Overhead",
    legacyWidth: "100%",
    vibeLabel: "3 Wks · Fragile",
    vibeNote: "Security blind spots · Broken state · Zero RBAC or virtualization",
    vibeWidth: "46%",
    bisenLabel: "5 Weeks · Institutional Grade",
    bisenBadge: "3.2× Faster",
    bisenWidth: "28%",
    multiplier: "3.2×",
  },
  {
    id: "app-print",
    label: "App + Print Brand",
    legacyLabel: "20+ Weeks · 2 Separate Agencies",
    legacyWidth: "100%",
    vibeLabel: "N/A · Zero Print",
    vibeNote: "Cannot produce CMYK pre-press, packaging die-lines, or brand cohesion",
    vibeWidth: "32%",
    bisenLabel: "6 Weeks · 1 Synchronized Studio",
    bisenBadge: "3.3× Faster",
    bisenWidth: "30%",
    multiplier: "3.3×",
  },
];

const GOVERNANCE_PILLARS = [
  {
    code: "01",
    title: "Direct 3-Principal Leadership",
    detail: "Asif, Rajpoot & Azma lead architecture, design tokens & specs—zero junior handoff",
  },
  {
    code: "02",
    title: "Zero-Retention AI Privacy",
    detail: "0% client source code, pitch decks, or IP ever used for model training",
  },
  {
    code: "03",
    title: "Line-by-Line Senior Audit",
    detail: "OWASP security, WCAG 2.1 AA contrast & 95+ Core Web Vitals verified",
  },
  {
    code: "04",
    title: "Unified Print + Code & 100% IP",
    detail: "Clean Git repository, editable Figma files & PDF/X-4 print masters transfer to you",
  },
];

export function HomeAiAdvantageSection() {
  const [selectedKey, setSelectedKey] = useState<DeliverableKey>("website");
  const active =
    BENCHMARK_PRESETS.find((b) => b.id === selectedKey) ?? BENCHMARK_PRESETS[0];

  return (
    <section className="relative overflow-hidden bg-canvas bg-drafting-grid py-20 text-navy lg:py-28">
      {/* Subtle Top-Right Champagne Gold Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,197,24,0.09),transparent_55%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Header Row + Harmonized Sculpted Pill CTA */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            theme="light"
            eyebrow="Our Unfair Advantage"
            title={
              <>
                16+ Years of Senior Judgment ×{" "}
                <span className="font-editorial text-gold-deep">AI Coding Mastery.</span>
              </>
            }
            description="AI coding tools in junior hands produce brittle spaghetti code. In the hands of 16-year design and engineering veterans, AI becomes a 3× force multiplier delivering institutional-grade quality at startup speed."
          />

          <Link
            href="/ai-engineering"
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-navy py-2 pl-6 pr-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(10,25,47,0.2)] transition-all hover:bg-navy-mid hover:shadow-[0_16px_36px_rgba(10,25,47,0.28)] active:scale-[0.98] lg:self-auto"
          >
            <Cpu className="h-4 w-4 text-gold" aria-hidden="true" />
            <span>See Our AI Engineering Pipeline</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-navy transition-transform duration-200 group-hover:scale-105">
              <ArrowUpRight className="h-4 w-4 stroke-[2.25] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>

        {/* PART 1: Interactive Craft × Velocity Quadrant & Delivery Compression Meter */}
        <Reveal delay={0.05}>
          <div className="mt-12 overflow-hidden rounded-[26px] border border-navy/12 bg-white p-3 shadow-[0_20px_60px_rgba(10,25,47,0.08)] sm:p-4">
            <div className="grid gap-4 lg:grid-cols-12">
              {/* Left: Strategic Positioning Quadrant SVG inside Solid Deep Royal Navy Plate */}
              <div className="relative overflow-hidden rounded-[20px] border border-navy/20 bg-navy bg-navy-blueprint p-5 text-white lg:col-span-5">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-navy-deep/80"
                />
                <div className="relative">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75">
                      MARKET POSITIONING // CRAFT × SPEED
                    </span>
                    <span className="rounded-full bg-gold px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-navy">
                      TOP-RIGHT QUADRANT
                    </span>
                  </div>

                  {/* Coordinate Matrix SVG */}
                  <div className="mt-4 rounded-xl border border-white/12 bg-navy-deep/85 p-3">
                    <svg
                      viewBox="0 0 360 220"
                      className="h-52 w-full"
                      fill="none"
                      aria-hidden="true"
                    >
                      <defs>
                        <radialGradient id="adv-quad-glow" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#F5C518" stopOpacity="0.32" />
                          <stop offset="100%" stopColor="#F5C518" stopOpacity="0" />
                        </radialGradient>
                      </defs>

                      {/* Axes & Quadrant Hairlines */}
                      <line x1="42" y1="20" x2="42" y2="188" stroke="#FFFFFF" strokeOpacity="0.24" strokeWidth="1.2" />
                      <line x1="42" y1="188" x2="344" y2="188" stroke="#FFFFFF" strokeOpacity="0.24" strokeWidth="1.2" />
                      <line x1="193" y1="20" x2="193" y2="188" stroke="#FFFFFF" strokeOpacity="0.14" strokeDasharray="3 4" />
                      <line x1="42" y1="104" x2="344" y2="104" stroke="#FFFFFF" strokeOpacity="0.14" strokeDasharray="3 4" />

                      {/* Axis Labels */}
                      <text
                        x="14"
                        y="105"
                        fill="#FFFFFF"
                        fillOpacity="0.55"
                        fontSize="7.5"
                        fontFamily="monospace"
                        transform="rotate(-90 14 105)"
                        textAnchor="middle"
                        letterSpacing="1.5"
                      >
                        ARCHITECTURE &amp; DESIGN CRAFT ↑
                      </text>
                      <text
                        x="194"
                        y="207"
                        fill="#FFFFFF"
                        fillOpacity="0.55"
                        fontSize="7.5"
                        fontFamily="monospace"
                        textAnchor="middle"
                        letterSpacing="1.5"
                      >
                        DELIVERY VELOCITY →
                      </text>

                      {/* Bottom-Left: Generic Freelancers */}
                      <circle cx="88" cy="156" r="5" fill="#FFFFFF" fillOpacity="0.28" />
                      <text x="88" y="173" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.5" fontSize="8" fontFamily="sans-serif">
                        Generic Freelancers
                      </text>

                      {/* Top-Left: Traditional Agencies */}
                      <circle cx="96" cy="56" r="6.5" fill="#FFFFFF" fillOpacity="0.45" />
                      <text x="96" y="42" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.85" fontSize="8.5" fontFamily="sans-serif" fontWeight="600">
                        Traditional Agencies
                      </text>
                      <text x="96" y="74" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.55" fontSize="7.5" fontFamily="monospace">
                        Slow · $220+/hr
                      </text>

                      {/* Bottom-Right: Pure-AI Vibe-Coders */}
                      <circle cx="286" cy="152" r="6" stroke="#FFFFFF" strokeOpacity="0.45" strokeDasharray="2 2" fill="#122645" />
                      <text x="286" y="138" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.8" fontSize="8.5" fontFamily="sans-serif" fontWeight="600">
                        Pure-AI Vibe-Coders
                      </text>
                      <text x="286" y="170" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.55" fontSize="7.5" fontFamily="monospace">
                        Fast · Fragile / Risky
                      </text>

                      {/* Top-Right Radiant Target: Bisen Studio */}
                      <circle cx="276" cy="52" r="36" fill="url(#adv-quad-glow)" />
                      <circle cx="276" cy="52" r="22" stroke="#F5C518" strokeOpacity="0.45" strokeDasharray="3 3" />
                      <circle cx="276" cy="52" r="13" stroke="#F5C518" strokeOpacity="0.8" strokeWidth="1.2" />
                      <circle cx="276" cy="52" r="6.5" fill="#F5C518" />

                      {/* Crisp Label Badge */}
                      <rect x="200" y="75" width="138" height="22" rx="6" fill="#F5C518" />
                      <text x="269" y="89" textAnchor="middle" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">
                        BISEN STUDIO · 16+ YRS × AI
                      </text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right: Interactive Delivery Compression Comparator */}
              <div className="flex flex-col justify-between rounded-[20px] border border-navy/10 bg-surface p-5 sm:p-6 lg:col-span-7">
                <div>
                  <div>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-deep">
                      MEASURED TIMELINE COMPRESSION
                    </span>
                    <h3 className="mt-1 text-lg font-bold tracking-tight text-navy">
                      Compare Real-World Production Velocity
                    </h3>

                    {/* 3 Deliverable Tabs on Clean Single-Row Capsule */}
                    <div
                      role="tablist"
                      aria-label="Select deliverable benchmark"
                      className="mt-3.5 inline-flex flex-wrap gap-1 rounded-full border border-navy/12 bg-white p-1"
                    >
                      {BENCHMARK_PRESETS.map((preset) => {
                        const isSelected = preset.id === selectedKey;
                        return (
                          <button
                            key={preset.id}
                            type="button"
                            role="tab"
                            aria-selected={isSelected}
                            onClick={() => setSelectedKey(preset.id)}
                            className={cn(
                              "whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all",
                              isSelected
                                ? "bg-navy text-white shadow-xs ring-1 ring-gold/60"
                                : "text-navy/75 hover:bg-surface hover:text-navy"
                            )}
                          >
                            {preset.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Animated Horizontal Bars */}
                  <div className="mt-6 space-y-4">
                    {/* Bar 1: Traditional Agency */}
                    <div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-navy/80">
                          Traditional Western Agency
                        </span>
                        <span className="font-mono text-[11px] text-ink-muted">
                          {active.legacyLabel}
                        </span>
                      </div>
                      <div className="mt-1.5 h-3 w-full overflow-hidden rounded-full bg-white border border-navy/10 p-0.5">
                        <motion.div
                          key={`legacy-${active.id}`}
                          initial={{ width: "60%" }}
                          animate={{ width: active.legacyWidth }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="h-full rounded-full bg-navy/22"
                        />
                      </div>
                    </div>

                    {/* Bar 2: Pure-AI Vibe-Coder */}
                    <div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-navy/80">
                          Pure-AI &ldquo;Vibe-Coder&rdquo;
                        </span>
                        <span className="font-mono text-[11px] font-medium text-ink-muted">
                          {active.vibeLabel}
                        </span>
                      </div>
                      <div className="mt-1.5 h-3 w-full overflow-hidden rounded-full bg-white p-0.5">
                        <motion.div
                          key={`vibe-${active.id}`}
                          initial={{ width: "20%" }}
                          animate={{ width: active.vibeWidth }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="h-full rounded-full border border-dashed border-navy/40 bg-surface"
                        />
                      </div>
                      <p className="mt-1 font-mono text-[10px] text-ink-muted">
                        {active.vibeNote}
                      </p>
                    </div>

                    {/* Bar 3: Bisen Studio (16+ Yrs × AI) */}
                    <div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="inline-flex items-center gap-1.5 font-bold text-navy">
                          <Sparkles className="h-3.5 w-3.5 text-gold-deep" />
                          <span>Bisen Studio (16+ Yrs × AI)</span>
                        </span>
                        <span className="font-mono text-[11px] font-bold text-navy">
                          {active.bisenLabel}
                        </span>
                      </div>
                      <div className="mt-1.5 flex items-center gap-2.5">
                        <div className="h-3.5 flex-1 overflow-hidden rounded-full border border-navy/15 bg-white p-0.5">
                          <motion.div
                            key={`bisen-${active.id}`}
                            initial={{ width: "12%" }}
                            animate={{ width: active.bisenWidth }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="h-full rounded-full bg-gradient-to-r from-navy to-navy-mid shadow-xs"
                          />
                        </div>
                        <span className="shrink-0 rounded-full bg-gold px-2.5 py-0.5 font-mono text-[10px] font-bold text-navy shadow-xs">
                          {active.bisenBadge}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom 3-Metric Live Readout Strip */}
                <div className="mt-6 grid grid-cols-3 gap-2.5 border-t border-navy/10 pt-5">
                  <div className="rounded-xl border border-navy/10 bg-white p-3">
                    <div className="font-mono text-[9px] uppercase tracking-wider text-ink-muted">
                      Velocity Multiplier
                    </div>
                    <div className="mt-1 font-mono text-lg font-bold text-navy">
                      {active.multiplier}
                    </div>
                  </div>
                  <div className="rounded-xl border border-navy/10 bg-white p-3">
                    <div className="font-mono text-[9px] uppercase tracking-wider text-ink-muted">
                      Senior Code Audit
                    </div>
                    <div className="mt-1 font-mono text-lg font-bold text-gold-deep">
                      100%
                    </div>
                  </div>
                  <div className="rounded-xl border border-navy/10 bg-white p-3">
                    <div className="font-mono text-[9px] uppercase tracking-wider text-ink-muted">
                      AI Model Training
                    </div>
                    <div className="mt-1 font-mono text-lg font-bold text-navy">
                      0% IP Used
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* PART 2: Elevated 3-Column Architectural Scorecards */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Card 01: Traditional Agency */}
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-between rounded-[24px] border border-navy/12 bg-white p-6 shadow-[0_10px_30px_rgba(10,25,47,0.04)] sm:p-7">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                    01 // LEGACY MODEL
                  </span>
                  <span className="rounded-full border border-navy/12 bg-surface px-2.5 py-0.5 font-mono text-[10px] font-semibold text-navy">
                    $180–$280/hr
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-navy">
                  Traditional Agency
                </h3>
                <p className="mt-1 font-editorial text-lg text-gold-deep">
                  High overhead, slow velocity.
                </p>

                {/* Micro-Bars */}
                <div className="mt-5 space-y-2.5 rounded-xl border border-navy/8 bg-surface p-3.5">
                  <div>
                    <div className="flex justify-between font-mono text-[10px]">
                      <span className="text-ink-muted">Craft Depth</span>
                      <span className="font-semibold text-navy">High</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-navy/10">
                      <div className="h-full w-4/5 rounded-full bg-navy/45" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-mono text-[10px]">
                      <span className="text-ink-muted">Delivery Speed</span>
                      <span className="font-semibold text-ink-muted">Slow</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-navy/10">
                      <div className="h-full w-1/3 rounded-full bg-navy/25" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-mono text-[10px]">
                      <span className="text-ink-muted">Cost Efficiency</span>
                      <span className="font-semibold text-ink-muted">Low</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-navy/10">
                      <div className="h-full w-1/4 rounded-full bg-navy/20" />
                    </div>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5 text-sm text-ink-muted">
                  {[
                    "Senior partners pitch the deal; junior contractors build it",
                    "3–5 month queues for a standard website or dashboard",
                    "Web agencies rarely master CMYK print or packaging specs",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2 h-0.5 w-3 shrink-0 rounded-full bg-navy/35" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Card 02: Pure-AI "Vibe-Coder" */}
          <Reveal delay={0.12}>
            <div className="flex h-full flex-col justify-between rounded-[24px] border border-navy/12 bg-white p-6 shadow-[0_10px_30px_rgba(10,25,47,0.04)] sm:p-7">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                    02 // FRAGILE SHORTCUT
                  </span>
                  <span className="rounded-full border border-navy/12 bg-surface px-2.5 py-0.5 font-mono text-[10px] font-semibold text-navy">
                    High Tech Debt
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-navy">
                  Pure-AI Vibe-Coder
                </h3>
                <p className="mt-1 font-editorial text-lg text-gold-deep">
                  Fast prototype, fragile production.
                </p>

                {/* Micro-Bars */}
                <div className="mt-5 space-y-2.5 rounded-xl border border-navy/8 bg-surface p-3.5">
                  <div>
                    <div className="flex justify-between font-mono text-[10px]">
                      <span className="text-ink-muted">Delivery Speed</span>
                      <span className="font-semibold text-navy">Fast</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-navy/10">
                      <div className="h-full w-3/4 rounded-full bg-navy/45" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-mono text-[10px]">
                      <span className="text-ink-muted">Security &amp; WCAG AA</span>
                      <span className="font-semibold text-ink-muted">Critical</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-navy/10">
                      <div className="h-full w-1/5 rounded-full bg-navy/20" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-mono text-[10px]">
                      <span className="text-ink-muted">Print &amp; Brand Craft</span>
                      <span className="font-semibold text-ink-muted">None</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-navy/10">
                      <div className="h-full w-[8%] rounded-full bg-navy/15" />
                    </div>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5 text-sm text-ink-muted">
                  {[
                    "Generic AI UI templates indistinguishable from competitors",
                    "Unmaintainable code, security flaws & zero WCAG compliance",
                    "Client IP often pasted into public training-enabled tools",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2 h-0.5 w-3 shrink-0 rounded-full bg-navy/35" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Card 03: Bisen Studio Standard — Flagship Royal Navy + Luminous Gold */}
          <Reveal delay={0.16}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border-2 border-gold bg-navy bg-navy-blueprint p-6 text-white shadow-[0_28px_70px_rgba(10,25,47,0.24)] sm:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gold/14 blur-2xl"
              />
              <div className="relative">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-navy">
                    <Sparkles className="h-3 w-3" />
                    <span>Bisen Studio Standard</span>
                  </span>
                  <span className="font-mono text-[10px] font-semibold text-gold">
                    16+ YRS × AI
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-white">
                  Veteran Craft × AI Velocity
                </h3>
                <p className="mt-1 font-editorial text-lg text-gold">
                  Institutional quality at startup speed.
                </p>

                {/* Luminous Gold Score Bars */}
                <div className="mt-5 space-y-2.5 rounded-xl border border-white/15 bg-navy-deep/85 p-3.5">
                  <div>
                    <div className="flex justify-between font-mono text-[10px]">
                      <span className="text-white/75">Senior Craft &amp; Print</span>
                      <span className="font-bold text-gold">100%</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-white/12">
                      <div className="h-full w-full rounded-full bg-gold" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-mono text-[10px]">
                      <span className="text-white/75">AI-Assisted Velocity</span>
                      <span className="font-bold text-gold">3.2×</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-white/12">
                      <div className="h-full w-[94%] rounded-full bg-gold" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-mono text-[10px]">
                      <span className="text-white/75">IP Safety &amp; Senior Audit</span>
                      <span className="font-bold text-gold">100%</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-white/12">
                      <div className="h-full w-full rounded-full bg-gold" />
                    </div>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5 text-sm text-white/90">
                  {[
                    "16+ yrs graphic, print & software architecture leadership",
                    "Direct work with Asif Bisen, Rajpoot Talib & Azma Bisen",
                    "Zero-data-retention AI + 100% senior code & security audit",
                    "Flexible Hourly, Weekly, Monthly & Yearly multi-currency plans",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold/15 text-gold">
                        <Check className="h-3 w-3 stroke-[2.5]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-6 pt-2">
                <Link
                  href="/contact"
                  className="group flex w-full items-center justify-between rounded-full bg-gold py-2 pl-5 pr-2 text-xs font-bold text-navy shadow-lg transition-all hover:bg-gold-bright"
                >
                  <span>Start an AI-Accelerated Sprint</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-gold transition-transform duration-200 group-hover:scale-105">
                    <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" />
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* PART 3: Bottom 4-Pillar Engineering Governance Strip */}
        <div className="mt-8 grid grid-cols-2 divide-y divide-navy/10 overflow-hidden rounded-2xl border border-navy/10 bg-surface sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {GOVERNANCE_PILLARS.map((pillar) => (
            <div key={pillar.code} className="p-4 sm:p-5">
              <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-gold-deep">
                {pillar.code === "02" ? (
                  <Lock className="h-3.5 w-3.5" />
                ) : (
                  <ShieldCheck className="h-3.5 w-3.5" />
                )}
                <span>Pillar {pillar.code}</span>
              </div>
              <div className="mt-1.5 text-xs font-bold text-navy sm:text-sm">
                {pillar.title}
              </div>
              <p className="mt-1 text-[11px] leading-snug text-ink-muted">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
