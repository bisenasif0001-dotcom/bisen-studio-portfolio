"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowUpRight,
  Calculator,
  Check,
  ChevronDown,
  Globe,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  PACKAGES,
  WHATS_EXTRA_ITEMS,
  WORKLOAD_RULES,
  type EngagementPeriod,
} from "@/data/packages";
import { useCurrency } from "@/components/context/CurrencyContext";
import { CURRENCIES, CURRENCY_RATE_METADATA, type CurrencyCode, cn } from "@/lib/utils";
import { PackagesProofAndPolicies } from "@/components/sections/PackagesProofAndPolicies";

const DISCIPLINE_OPTIONS = [
  "Digital & Brand Design",
  "Print Design & Packaging",
  "Multi-Page Websites",
  "Web or Mobile App",
  "SaaS Dashboard",
  "AI-Accelerated Product MVP",
];

const MIX_OPTIONS = [
  "Design-Led",
  "Balanced Design + Dev",
  "Engineering-Led",
] as const;

const INTENSITY_OPTIONS = [
  "Focused Deliverable",
  "Multi-Deliverable Sprint",
  "Full Product Roadmap",
] as const;

const DURATION_PRESETS: Record<EngagementPeriod, number[]> = {
  hourly: [10, 20, 40, 60],
  weekly: [1, 2, 4, 8],
  monthly: [1, 3, 6, 12],
  yearly: [1, 2, 3],
};

function formatDurationLabel(model: EngagementPeriod, count: number): string {
  if (model === "hourly") return `${count} ${count === 1 ? "Hour" : "Hours"}`;
  if (model === "weekly") return `${count} ${count === 1 ? "Week" : "Weeks"}`;
  if (model === "monthly") return `${count} ${count === 1 ? "Month" : "Months"}`;
  return `${count} ${count === 1 ? "Year" : "Years"}`;
}

export function PackagesInteractive() {
  const { currency, setCurrency, format } = useCurrency();

  const [selectedPlan, setSelectedPlan] = useState<EngagementPeriod>("monthly");
  const [expandedCards, setExpandedCards] = useState<Record<EngagementPeriod, boolean>>({
    hourly: false,
    weekly: false,
    monthly: false,
    yearly: false,
  });

  const [calcModel, setCalcModel] = useState<EngagementPeriod>("monthly");
  const [units, setUnits] = useState<number>(3);
  const [scopeMix, setScopeMix] = useState<(typeof MIX_OPTIONS)[number]>("Balanced Design + Dev");
  const [scopeIntensity, setScopeIntensity] =
    useState<(typeof INTENSITY_OPTIONS)[number]>("Multi-Deliverable Sprint");
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([
    "Digital & Brand Design",
    "Multi-Page Websites",
  ]);

  const activePkg = PACKAGES.find((p) => p.id === calcModel) ?? PACKAGES[2];
  const minUnits = calcModel === "hourly" ? 5 : 1;
  const maxUnits =
    calcModel === "hourly"
      ? 80
      : calcModel === "weekly"
        ? 12
        : calcModel === "monthly"
          ? 12
          : 3;

  const safeUnits = Math.min(Math.max(units, minUnits), maxUnits);
  const estimatedUsd = activePkg.usdPrice * safeUnits;

  const handleModelChange = (next: EngagementPeriod) => {
    setCalcModel(next);
    setSelectedPlan(next);
    if (next === "hourly") setUnits(20);
    if (next === "weekly") setUnits(2);
    if (next === "monthly") setUnits(3);
    if (next === "yearly") setUnits(1);
  };

  const toggleCardDetails = (id: EngagementPeriod) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleDiscipline = (item: string) => {
    setSelectedDisciplines((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  // Grounded plan-to-plan benchmark note using only Bisen Studio's actual published rates
  const yearlySavingsAgainstMonthlyUsd = 18000 * safeUnits;
  const monthlyRateVsExcessMonthsSavingsUsd = estimatedUsd - 60000;
  const approxMonthsFromWeeks = Math.ceil(safeUnits / 4);
  const weeklyVsMonthlyBenchmarkSavingsUsd = estimatedUsd - approxMonthsFromWeeks * 6500;

  const estimatorHref = `/contact?package=${calcModel}&duration=${safeUnits}&disciplines=${encodeURIComponent(
    (selectedDisciplines.length > 0 ? selectedDisciplines : ["Custom Scope"]).join(",")
  )}&mix=${encodeURIComponent(`${scopeMix} (${scopeIntensity})`)}&estimate=${estimatedUsd}&currency=${currency}&source=budget-estimator`;

  const currentCurrencyCfg = CURRENCIES[currency];

  return (
    <div className="space-y-20 lg:space-y-24">
      {/* Section 2: Choose How You Work With Us */}
      <section id="choose-plan" aria-labelledby="matcher-heading" className="scroll-mt-24">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
            Choose How You Work With Us
          </p>
          <h2
            id="matcher-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
          >
            Match Your Timeline &amp; Workload in 15 Seconds
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
            Select your stage below to highlight the best-fitting model across our cards and prefill
            the budget estimator.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {PACKAGES.map((pkg) => {
            const isSelected = selectedPlan === pkg.id;
            return (
              <a
                key={pkg.id}
                href="#pricing-plans"
                onClick={() => handleModelChange(pkg.id)}
                className={cn(
                  "transition-none flex flex-col justify-between rounded-2xl border p-5 text-left",
                  isSelected
                    ? "border-navy bg-navy text-white shadow-md ring-2 ring-gold"
                    : "border-navy/15 bg-surface text-navy hover:border-navy/40 hover:bg-white"
                )}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={cn(
                        "font-mono text-[11px] font-bold uppercase tracking-wider",
                        isSelected ? "text-gold" : "text-gold-deep"
                      )}
                    >
                      {pkg.tierTag}
                    </span>
                    <span
                      className={cn(
                        "font-mono text-xs font-semibold",
                        isSelected ? "text-white/90" : "text-navy"
                      )}
                    >
                      {format(pkg.usdPrice)}
                      {pkg.unitLabel}
                    </span>
                  </div>
                  <h3
                    className={cn(
                      "mt-2.5 text-base font-semibold leading-snug",
                      isSelected ? "text-white" : "text-navy"
                    )}
                  >
                    {pkg.matcherQuestion}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-[13px] leading-relaxed",
                      isSelected ? "text-white/80" : "text-ink-muted"
                    )}
                  >
                    {pkg.matcherBestFor}
                  </p>
                </div>
                <p
                  className={cn(
                    "mt-4 font-mono text-xs font-semibold",
                    isSelected ? "text-gold" : "text-navy"
                  )}
                >
                  Use {pkg.name.split(" ")[0]} →
                </p>
              </a>
            );
          })}
        </div>
      </section>

      {/* Section 3: Currency Selector + Four Simplified Pricing Cards */}
      <section id="pricing-plans" aria-labelledby="plans-heading" className="scroll-mt-24">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
              Choose Your Engagement
            </p>
            <h2
              id="plans-heading"
              className="mt-2 text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
            >
              Flexible Plans for Every Stage
            </h2>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-navy/15 bg-surface px-3.5 py-1.5 font-mono text-xs font-semibold text-navy">
            USD Base Pricing · Transparent Limits
          </span>
        </div>

        {/* International Currency Selector Bar */}
        <div className="mb-8 rounded-2xl border border-navy/12 bg-surface p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <Globe className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
              <div>
                <p className="text-sm font-semibold text-navy">
                  International Currency Display ({CURRENCY_RATE_METADATA.baseCurrency} Base)
                </p>
                <p className="mt-0.5 text-[13px] leading-relaxed text-ink-muted">
                  Final invoices are issued in USD or your agreed local currency via Stripe, Wise,
                  ACH, SEPA &amp; Wire.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5" role="group" aria-label="Currency selector">
              {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
                const active = currency === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setCurrency(code)}
                    aria-pressed={active}
                    className={cn(
                      "transition-none rounded-lg px-3.5 py-2 font-mono text-xs font-semibold",
                      active
                        ? "bg-navy text-white shadow-xs ring-2 ring-gold"
                        : "border border-navy/15 bg-white text-ink-muted hover:text-navy"
                    )}
                  >
                    {CURRENCIES[code].label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-navy/10 pt-3 text-xs text-ink-muted">
            <span className="font-mono font-semibold text-navy">
              {currency === "USD"
                ? "Base Rate: 1.00 USD"
                : `Indicative Rate: 1 USD ≈ ${currentCurrencyCfg.rateFromUSD} ${currency}`}
            </span>
            <span>·</span>
            <span>
              Source: {CURRENCY_RATE_METADATA.source} ({CURRENCY_RATE_METADATA.referenceDate})
            </span>
            <span className="w-full sm:w-auto sm:basis-full lg:basis-auto">
              {currency !== "USD"
                ? "Approximate rounded display conversion — final invoice uses live settlement rate on invoice date."
                : "All international taxes, gateway FX spreads, and third-party subscriptions are itemized separately."}
            </span>
          </div>
        </div>

        {/* 4 Equal-Hierarchy Simplified Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PACKAGES.map((pkg) => {
            const isPopular = Boolean(pkg.recommended);
            const isDetailsOpen = expandedCards[pkg.id];
            const isSelectedFromMatcher = selectedPlan === pkg.id && !isPopular;

            return (
              <div
                key={pkg.id}
                className={cn(
                  "relative flex flex-col justify-between rounded-2xl p-6 transition-shadow duration-200",
                  isPopular
                    ? "border-2 border-gold bg-navy text-white shadow-[0_24px_60px_rgba(10,25,47,0.22)]"
                    : isSelectedFromMatcher
                      ? "border-2 border-navy bg-white text-navy shadow-md ring-2 ring-gold/50"
                      : "border border-navy/15 bg-white text-navy shadow-xs hover:border-navy/35 hover:shadow-lg"
                )}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={cn(
                        "rounded-full px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider",
                        isPopular
                          ? "bg-gold text-navy"
                          : "border border-navy/12 bg-surface text-navy"
                      )}
                    >
                      {pkg.tierTag}
                    </span>
                  </div>

                  <h3
                    className={cn(
                      "mt-4 text-2xl font-semibold tracking-tight",
                      isPopular ? "text-white" : "text-navy"
                    )}
                  >
                    {pkg.name}
                  </h3>

                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span
                      className={cn(
                        "font-mono text-4xl font-bold tracking-tight tabular-nums",
                        isPopular ? "text-gold" : "text-navy"
                      )}
                    >
                      {format(pkg.usdPrice)}
                    </span>
                    <span
                      className={cn(
                        "font-mono text-sm",
                        isPopular ? "text-white/75" : "text-ink-muted"
                      )}
                    >
                      {pkg.unitLabel}
                    </span>
                  </div>

                  {currency !== "USD" && (
                    <p
                      className={cn(
                        "mt-1 font-mono text-xs",
                        isPopular ? "text-white/70" : "text-ink-muted"
                      )}
                    >
                      Base: ${pkg.usdPrice.toLocaleString("en-US")} USD{pkg.unitLabel}
                    </p>
                  )}

                  {pkg.equivalentMonthlyUsd && pkg.savingsUsdAmount && (
                    <p
                      className={cn(
                        "mt-1.5 text-[13px] font-semibold",
                        isPopular ? "text-gold" : "text-gold-deep"
                      )}
                    >
                      Equivalent to {format(pkg.equivalentMonthlyUsd)}/mo · Save{" "}
                      {format(pkg.savingsUsdAmount)}/yr ({pkg.savingsPercent})
                    </p>
                  )}

                  <p
                    className={cn(
                      "mt-4 text-[15px] leading-relaxed",
                      isPopular ? "text-white/85" : "text-ink-muted"
                    )}
                  >
                    {pkg.idealClientLine}
                  </p>

                  {/* Explicit Capacity & Turnaround Box */}
                  <div
                    className={cn(
                      "mt-5 space-y-2 rounded-xl border p-3.5 text-[13px]",
                      isPopular
                        ? "border-white/15 bg-navy-deep/80"
                        : "border-navy/12 bg-surface"
                    )}
                  >
                    <div>
                      <span
                        className={cn(
                          "block font-mono text-[11px] uppercase tracking-wider",
                          isPopular ? "text-gold" : "text-gold-deep"
                        )}
                      >
                        Capacity Limit
                      </span>
                      <span
                        className={cn(
                          "font-medium",
                          isPopular ? "text-white" : "text-navy"
                        )}
                      >
                        {pkg.capacitySummary}
                      </span>
                    </div>
                    <div
                      className={cn(
                        "border-t pt-2",
                        isPopular ? "border-white/10" : "border-navy/10"
                      )}
                    >
                      <span
                        className={cn(
                          "block font-mono text-[11px] uppercase tracking-wider",
                          isPopular ? "text-gold" : "text-gold-deep"
                        )}
                      >
                        Turnaround
                      </span>
                      <span
                        className={cn(
                          "font-medium",
                          isPopular ? "text-white" : "text-navy"
                        )}
                      >
                        {pkg.turnaroundShort}
                      </span>
                    </div>
                  </div>

                  {/* 4 Key Benefits */}
                  <ul
                    className={cn(
                      "mt-5 space-y-2.5 text-sm leading-relaxed",
                      isPopular ? "text-white/90" : "text-navy/90"
                    )}
                  >
                    {pkg.keyBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5">
                        <Check
                          className={cn(
                            "mt-0.5 h-4 w-4 shrink-0",
                            isPopular ? "text-gold" : "text-gold-deep"
                          )}
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expandable Full Plan Details */}
                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={() => toggleCardDetails(pkg.id)}
                      aria-expanded={isDetailsOpen}
                      className={cn(
                        "inline-flex items-center gap-1.5 text-[13px] font-semibold underline underline-offset-4",
                        isPopular
                          ? "text-gold hover:text-white"
                          : "text-navy hover:text-gold-deep"
                      )}
                    >
                      <span>{isDetailsOpen ? "Hide Plan Details" : "View Full Plan Details"}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-150",
                          isDetailsOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {isDetailsOpen && (
                      <div
                        className={cn(
                          "mt-3.5 space-y-2.5 rounded-xl border p-4 text-[13px] leading-relaxed",
                          isPopular
                            ? "border-white/15 bg-navy-mid text-white/85"
                            : "border-navy/12 bg-surface text-ink-muted"
                        )}
                      >
                        <p>
                          <strong className={isPopular ? "text-gold" : "text-navy"}>
                            Workload:
                          </strong>{" "}
                          {pkg.expandedDetails.workloadLimit}
                        </p>
                        <p>
                          <strong className={isPopular ? "text-gold" : "text-navy"}>
                            Queue &amp; Revisions:
                          </strong>{" "}
                          {pkg.expandedDetails.queueAndRevisions}
                        </p>
                        <p>
                          <strong className={isPopular ? "text-gold" : "text-navy"}>
                            Billing &amp; Notice:
                          </strong>{" "}
                          {pkg.expandedDetails.billingAndNotice}
                        </p>
                        <p>
                          <strong className={isPopular ? "text-gold" : "text-navy"}>
                            Best Fit:
                          </strong>{" "}
                          {pkg.expandedDetails.deliverablesScope}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action-Specific CTA */}
                <div
                  className={cn(
                    "mt-7 border-t pt-5",
                    isPopular ? "border-white/15" : "border-navy/10"
                  )}
                >
                  <Link
                    href={`/contact?package=${pkg.id}&currency=${currency}&source=packages-card`}
                    className={cn(
                      "flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-bold transition-colors",
                      isPopular
                        ? "bg-gold text-navy hover:bg-gold-bright"
                        : "bg-navy text-white hover:bg-navy-mid"
                    )}
                  >
                    <span>{pkg.ctaLabel}</span>
                    <ArrowUpRight
                      className={cn("h-4 w-4", isPopular ? "text-navy" : "text-gold")}
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 4: What's Included & What's Extra */}
      <section id="scope-capacity" aria-labelledby="scope-heading" className="scroll-mt-24">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
            Delivery Rules &amp; Boundaries
          </p>
          <h2
            id="scope-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
          >
            What&apos;s Included &amp; What&apos;s Extra
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
            A prioritized queue means you can line up every design and development idea in advance
            without bottlenecks — while active execution slots keep turnaround fast and predictable.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {/* Left: Included Workload Rules & 3-Member Pod */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {WORKLOAD_RULES.map((rule) => (
              <div
                key={rule.title}
                className="rounded-2xl border border-navy/12 bg-surface p-6"
              >
                <span className="inline-flex rounded-full border border-navy/15 bg-white px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-gold-deep">
                  {rule.tag}
                </span>
                <h3 className="mt-3 text-base font-semibold text-navy">{rule.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{rule.description}</p>
              </div>
            ))}
          </div>

          {/* Right: What's Extra / Third-Party Exclusions */}
          <div className="flex flex-col justify-between rounded-2xl border border-navy/15 bg-white p-6 shadow-xs lg:col-span-5">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-gold-deep">
                <AlertCircle className="h-4 w-4" />
                <span>External &amp; Pass-Through Costs (Not Included)</span>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-navy">
                Paid Directly at Vendor Cost — Zero Markup
              </h3>
              <ul className="mt-4 space-y-3.5 text-sm">
                {WHATS_EXTRA_ITEMS.map((extra) => (
                  <li key={extra.item} className="border-b border-navy/10 pb-3 last:border-b-0 last:pb-0">
                    <p className="font-semibold text-navy">{extra.item}</p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-ink-muted">
                      {extra.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 rounded-xl border border-navy/10 bg-surface p-4 text-[13px] leading-relaxed text-navy/85">
              <strong className="font-semibold text-navy">Our Commitment:</strong> Any external
              license or third-party tool is recommended and approved by you in writing before any
              purchase occurs.
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Upgraded Interactive Budget Estimator */}
      <section
        id="budget-estimator"
        aria-labelledby="calculator-heading"
        className="scroll-mt-24 rounded-3xl border border-navy/15 bg-surface p-6 text-navy shadow-sm sm:p-10"
      >
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Controls Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
              <Calculator className="h-4 w-4" />
              <span>Interactive Budget Estimator</span>
            </div>
            <h2
              id="calculator-heading"
              className="mt-2.5 text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
            >
              Estimate Your Studio Investment ({currency})
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
              Transparent plan-based budget estimator built directly from our published rates — no
              inflated competitor claims or hidden multipliers.
            </p>

            {/* 1. Choose Engagement */}
            <div className="mt-7">
              <span className="block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-navy">
                1. Choose Your Engagement
              </span>
              <div className="mt-2.5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {PACKAGES.map((p) => {
                  const isSelected = calcModel === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handleModelChange(p.id)}
                      aria-pressed={isSelected}
                      className={cn(
                        "transition-none rounded-xl border px-3.5 py-3 text-left",
                        isSelected
                          ? "border-navy bg-navy text-white shadow-sm ring-2 ring-gold"
                          : "border-navy/15 bg-white text-navy hover:border-navy/45"
                      )}
                    >
                      <div className="text-sm font-semibold capitalize">{p.id}</div>
                      <div
                        className={cn(
                          "mt-0.5 font-mono text-xs font-medium",
                          isSelected ? "text-gold" : "text-ink-muted"
                        )}
                      >
                        {format(p.usdPrice)}
                        {p.unitLabel}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Duration / Volume */}
            <div className="mt-7">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <label
                  htmlFor="calc-units"
                  className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-navy"
                >
                  2. Project Duration / Volume
                </label>
                <span className="rounded-lg bg-navy px-3.5 py-1 font-mono text-xs font-semibold text-gold">
                  {formatDurationLabel(calcModel, safeUnits)}
                </span>
              </div>

              <input
                id="calc-units"
                type="range"
                min={minUnits}
                max={maxUnits}
                step={calcModel === "hourly" ? 5 : 1}
                value={safeUnits}
                onChange={(e) => setUnits(Number(e.target.value))}
                className="mt-3.5 w-full cursor-pointer accent-navy"
              />

              <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs text-ink-muted">
                  Range: {formatDurationLabel(calcModel, minUnits)} –{" "}
                  {formatDurationLabel(calcModel, maxUnits)}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {DURATION_PRESETS[calcModel].map((preset) => {
                    const active = safeUnits === preset;
                    return (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setUnits(preset)}
                        className={cn(
                          "transition-none rounded-md border px-2.5 py-1 font-mono text-xs font-semibold",
                          active
                            ? "border-navy bg-navy text-gold"
                            : "border-navy/15 bg-white text-ink-muted hover:text-navy"
                        )}
                      >
                        {formatDurationLabel(calcModel, preset)}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 3. Design/Dev Mix & Scope Intensity */}
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <span className="block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-navy">
                  3. Design / Dev Mix
                </span>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {MIX_OPTIONS.map((mix) => {
                    const active = scopeMix === mix;
                    return (
                      <button
                        key={mix}
                        type="button"
                        onClick={() => setScopeMix(mix)}
                        aria-pressed={active}
                        className={cn(
                          "transition-none rounded-lg border px-3 py-1.5 text-xs font-semibold",
                          active
                            ? "border-navy bg-navy text-white ring-1 ring-gold"
                            : "border-navy/15 bg-white text-navy/85 hover:border-navy/40"
                        )}
                      >
                        {mix}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <span className="block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-navy">
                  4. Complexity / Deliverable Scale
                </span>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {INTENSITY_OPTIONS.map((level) => {
                    const active = scopeIntensity === level;
                    return (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setScopeIntensity(level)}
                        aria-pressed={active}
                        className={cn(
                          "transition-none rounded-lg border px-3 py-1.5 text-xs font-semibold",
                          active
                            ? "border-navy bg-navy text-white ring-1 ring-gold"
                            : "border-navy/15 bg-white text-navy/85 hover:border-navy/40"
                        )}
                      >
                        {level}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 5. Required Disciplines */}
            <div className="mt-7">
              <span className="block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-navy">
                5. Required Disciplines (Identifies Project Needs Only)
              </span>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {DISCIPLINE_OPTIONS.map((item) => {
                  const active = selectedDisciplines.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleDiscipline(item)}
                      aria-pressed={active}
                      className={cn(
                        "transition-none rounded-full border px-3.5 py-2 text-xs font-semibold",
                        active
                          ? "border-navy bg-gold text-navy shadow-xs"
                          : "border-navy/15 bg-white text-navy/80 hover:border-navy/40"
                      )}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Live Estimate Panel */}
          <div className="flex flex-col justify-between rounded-2xl border-2 border-gold/60 bg-navy p-6 text-white shadow-xl sm:p-8 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  ESTIMATED INVESTMENT · {currency}
                </span>
                <span className="rounded-full bg-gold px-2.5 py-0.5 font-mono text-xs font-bold text-navy">
                  {activePkg.tierTag}
                </span>
              </div>

              <div className="mt-4 font-mono text-4xl font-bold tracking-tight text-gold tabular-nums sm:text-5xl">
                {format(estimatedUsd)}
              </div>

              <p className="mt-2 text-sm font-medium text-white/90">
                {activePkg.name} · {formatDurationLabel(calcModel, safeUnits)} ×{" "}
                {format(activePkg.usdPrice)}
                {activePkg.unitLabel}
              </p>

              {currency !== "USD" && (
                <p className="mt-1 font-mono text-xs text-white/70">
                  USD Base Total: ${estimatedUsd.toLocaleString("en-US")} USD
                </p>
              )}

              {/* Grounded Internal Rate Comparison Box */}
              <div className="mt-5 rounded-xl border border-gold/40 bg-navy-mid p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
                  <Sparkles className="h-4 w-4 shrink-0" />
                  <span>
                    {calcModel === "yearly"
                      ? "Annual Rate Efficiency vs. Monthly"
                      : calcModel === "monthly" && estimatedUsd > 60000
                        ? "Tier Optimization Available"
                        : calcModel === "weekly" && safeUnits >= 4
                          ? "Monthly Retainer Comparison"
                          : "Configured Workload Profile"}
                  </span>
                </div>

                {calcModel === "yearly" ? (
                  <p className="mt-2 text-[13px] leading-relaxed text-white/90">
                    Equivalent to{" "}
                    <strong className="text-gold">{format(5000)}/mo</strong> — saving{" "}
                    <strong className="text-white">
                      {format(yearlySavingsAgainstMonthlyUsd)}
                    </strong>{" "}
                    (~23.1%) compared to {12 * safeUnits} months at our published Monthly Retainer
                    rate ({format(6500)}/mo).
                  </p>
                ) : calcModel === "monthly" && estimatedUsd > 60000 ? (
                  <p className="mt-2 text-[13px] leading-relaxed text-white/90">
                    For a {safeUnits}-month roadmap, our Yearly Strategic Partner (
                    {format(60000)}/yr) would save{" "}
                    <strong className="text-gold">
                      {format(monthlyRateVsExcessMonthsSavingsUsd)}
                    </strong>{" "}
                    vs. {safeUnits} separate months and adds a 24h priority SLA.
                  </p>
                ) : calcModel === "weekly" && safeUnits >= 4 && weeklyVsMonthlyBenchmarkSavingsUsd > 0 ? (
                  <p className="mt-2 text-[13px] leading-relaxed text-white/90">
                    Using a 4-week/month assumption, {approxMonthsFromWeeks} month
                    {approxMonthsFromWeeks === 1 ? "" : "s"} on Monthly Studio Retainer (
                    {format(6500)}/mo) saves{" "}
                    <strong className="text-gold">
                      {format(weeklyVsMonthlyBenchmarkSavingsUsd)}
                    </strong>{" "}
                    vs. {safeUnits} standalone weekly sprints.
                  </p>
                ) : (
                  <p className="mt-2 text-[13px] leading-relaxed text-white/90">
                    Focus: <strong className="text-white">{scopeMix}</strong> ·{" "}
                    <strong className="text-white">{scopeIntensity}</strong> ·{" "}
                    {activePkg.capacitySummary}.
                  </p>
                )}
              </div>

              {/* Explicit Discipline Non-Multiplier & Billing Assumptions */}
              <div className="mt-5 space-y-2.5 border-t border-white/15 pt-4 text-[13px] leading-relaxed text-white/80">
                <div className="flex items-start gap-2">
                  <Layers className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>
                    <strong className="text-white">
                      {selectedDisciplines.length} selected discipline
                      {selectedDisciplines.length === 1 ? "" : "s"}.
                    </strong>{" "}
                    Selection identifies project needs; it does not multiply the fixed plan price
                    or guarantee concurrent delivery.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>
                    Estimate assumes four weeks per month for hourly/weekly planning comparisons.
                    Actual billing follows calendar dates and contract-defined periods. Yearly
                    plan assumes a 12-month commitment. Applicable taxes, external tools/hosting,
                    and custom out-of-scope modules are excluded.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href={estimatorHref}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3.5 text-sm font-bold text-navy hover:bg-gold-bright"
              >
                <span>Request an Accurate Quote</span>
                <ArrowUpRight className="h-4 w-4 text-navy" />
              </Link>
              <p className="mt-2.5 text-center font-mono text-xs text-white/80">
                Prefills your plan &amp; scope in our brief · Reply within 12 business hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sections 6–10 */}
      <PackagesProofAndPolicies format={format} />

      {/* Sticky Mobile Consultation CTA Bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/50 bg-navy/95 px-4 py-3 text-white shadow-[0_-8px_24px_rgba(10,25,47,0.28)] backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-xl items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate font-mono text-[11px] font-semibold uppercase tracking-wider text-gold">
              {activePkg.name}
            </p>
            <p className="truncate text-sm font-bold text-white tabular-nums">
              {format(activePkg.usdPrice)}
              <span className="font-normal text-white/75"> {activePkg.unitLabel}</span>
            </p>
          </div>
          <Link
            href={`/contact?package=${calcModel}&currency=${currency}&source=mobile-sticky`}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-gold px-4 py-2.5 text-xs font-bold text-navy hover:bg-gold-bright"
          >
            <span>Get a Quote</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-navy" />
          </Link>
        </div>
      </div>
    </div>
  );
}
