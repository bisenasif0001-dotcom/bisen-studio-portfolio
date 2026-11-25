"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { PACKAGES } from "@/data/packages";
import { useCurrency } from "@/components/context/CurrencyContext";
import { CURRENCIES, type CurrencyCode, cn } from "@/lib/utils";

const COMPACT_FIT_LINES: Record<string, string> = {
  hourly: "Short tasks, audits, pre-press fixes and focused advisory",
  weekly: "Focused 5-day design or engineering sprint with Friday demo",
  monthly: "Ongoing brand, web, app & SaaS output across 2 active slots",
  yearly: "Multi-product annual roadmap with locked rate & quarterly reviews",
};

export function HomePackagesPreview() {
  const { currency, setCurrency, format } = useCurrency();

  return (
    <div>
      {/* Sleek Integrated Currency Switcher Bar */}
      <div className="mb-8 flex flex-col justify-between gap-3 rounded-2xl border border-navy/12 bg-surface px-4 py-3.5 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-2.5 w-2.5 shrink-0 rounded-[2px] border border-navy/30 bg-gold" />
          <p className="text-xs font-semibold text-navy sm:text-sm">
            USD Base Pricing · Previewing in{" "}
            <span className="font-mono text-gold-deep">
              {CURRENCIES[currency].code} ({CURRENCIES[currency].symbol})
            </span>
          </p>
        </div>
        <div
          className="inline-flex flex-wrap items-center gap-1 rounded-full border border-navy/12 bg-white p-1"
          role="group"
          aria-label="Select display currency"
        >
          {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
            const active = currency === code;
            return (
              <button
                key={code}
                type="button"
                onClick={() => setCurrency(code)}
                aria-pressed={active}
                className={cn(
                  "cursor-pointer rounded-full px-3 py-1 font-mono text-xs font-semibold transition-none",
                  active
                    ? "bg-navy text-white shadow-xs"
                    : "text-ink-muted hover:bg-surface hover:text-navy"
                )}
              >
                {CURRENCIES[code].code} {CURRENCIES[code].symbol}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4 Enriched Plan Cards */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {PACKAGES.map((pkg) => {
          const isFeatured = Boolean(pkg.recommended);
          const shortTitle = pkg.id.charAt(0).toUpperCase() + pkg.id.slice(1);
          const eqMonthly = pkg.equivalentMonthlyUsd ? format(pkg.equivalentMonthlyUsd) : null;
          const savingsAmt = pkg.savingsUsdAmount ? format(pkg.savingsUsdAmount) : null;

          return (
            <div
              key={pkg.id}
              className={cn(
                "flex flex-col justify-between rounded-3xl p-6 transition-all duration-200",
                isFeatured
                  ? "border-2 border-gold bg-navy text-white shadow-[0_24px_60px_rgba(10,25,47,0.22)]"
                  : "border border-navy/15 bg-white text-navy shadow-xs hover:border-gold hover:shadow-lg"
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider",
                      isFeatured
                        ? "bg-gold text-navy"
                        : "border border-navy/12 bg-surface text-ink-muted"
                    )}
                  >
                    {isFeatured && <Sparkles className="h-3 w-3" aria-hidden="true" />}
                    <span>{isFeatured ? "Most Popular" : pkg.tierTag}</span>
                  </span>
                </div>

                <h3
                  className={cn(
                    "mt-4 text-xl font-bold tracking-tight",
                    isFeatured ? "text-white" : "text-navy"
                  )}
                >
                  {pkg.name}
                </h3>

                <div className="mt-3 flex items-baseline gap-1.5">
                  <span
                    className={cn(
                      "font-mono text-3xl font-bold tracking-tight tabular-nums",
                      isFeatured ? "text-gold" : "text-navy"
                    )}
                  >
                    {format(pkg.usdPrice)}
                  </span>
                  <span
                    className={cn(
                      "font-mono text-xs",
                      isFeatured ? "text-white/75" : "text-ink-muted"
                    )}
                  >
                    {pkg.unitLabel}
                  </span>
                </div>

                {/* Equivalent / Minimum / Savings Micro-Callout */}
                <div className="mt-2 min-h-[22px]">
                  {pkg.id === "yearly" && eqMonthly && savingsAmt ? (
                    <span className="inline-flex items-center rounded-md border border-gold/40 bg-gold-tint px-2 py-0.5 font-mono text-[11px] font-bold text-navy">
                      {eqMonthly}/mo eq. · Save {savingsAmt}/yr
                    </span>
                  ) : pkg.id === "hourly" ? (
                    <span className="font-mono text-[11px] font-semibold text-gold-deep">
                      5-hr min block ({format(pkg.usdPrice * 5)})
                    </span>
                  ) : pkg.id === "weekly" ? (
                    <span className="font-mono text-[11px] font-semibold text-gold-deep">
                      ~15% lower effective rate vs. Hourly
                    </span>
                  ) : (
                    <span className="font-mono text-[11px] font-semibold text-gold">
                      14-day pause or cancel · 2 active slots
                    </span>
                  )}
                </div>

                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    isFeatured ? "text-white/85" : "text-ink-muted"
                  )}
                >
                  {COMPACT_FIT_LINES[pkg.id] ?? pkg.idealClientLine}
                </p>

                {/* Turnaround & Capacity Pill */}
                <div
                  className={cn(
                    "mt-4 rounded-xl border px-3 py-2 font-mono text-[11px]",
                    isFeatured
                      ? "border-white/15 bg-navy-mid text-white/90"
                      : "border-navy/10 bg-surface text-navy"
                  )}
                >
                  <span className={cn("font-bold", isFeatured ? "text-gold" : "text-gold-deep")}>
                    Cadence:{" "}
                  </span>
                  <span>{pkg.turnaroundShort}</span>
                </div>

                {/* Top 3 Core Value Bullets */}
                <ul
                  className={cn(
                    "mt-4 space-y-2 border-t pt-4 text-xs leading-snug",
                    isFeatured ? "border-white/15 text-white/90" : "border-navy/10 text-navy/85"
                  )}
                >
                  {pkg.keyBenefits.slice(0, 3).map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <Check
                        className={cn(
                          "mt-0.5 h-3.5 w-3.5 shrink-0 stroke-[2.5]",
                          isFeatured ? "text-gold" : "text-gold-deep"
                        )}
                        aria-hidden="true"
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Luxury Pill CTA + Secondary Spec Link */}
              <div className="mt-6 space-y-2.5 pt-2">
                <Link
                  href={`/contact?package=${pkg.id}&currency=${currency}&source=home-pricing`}
                  className={cn(
                    "group flex w-full items-center justify-between rounded-full py-2 pl-5 pr-2 text-xs font-bold transition-all active:scale-[0.98]",
                    isFeatured
                      ? "bg-gold text-navy shadow-lg hover:bg-gold-bright"
                      : "bg-navy text-white shadow-xs hover:bg-navy-mid"
                  )}
                >
                  <span>
                    {pkg.id === "yearly" ? "Discuss Yearly Partner" : `Start ${shortTitle} Plan`}
                  </span>
                  <span
                    className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-105",
                      isFeatured ? "bg-navy text-gold" : "bg-gold text-navy"
                    )}
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" aria-hidden="true" />
                  </span>
                </Link>
                <div className="text-center">
                  <Link
                    href={`/packages#${pkg.id}`}
                    className={cn(
                      "text-[11px] font-semibold underline underline-offset-4",
                      isFeatured ? "text-white/75 hover:text-gold" : "text-ink-muted hover:text-navy"
                    )}
                  >
                    View workload rules &amp; deliverables
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Transparent Disclosure + Plan Guidance CTA */}
      <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded-2xl border border-navy/10 bg-surface px-5 py-4 text-xs text-ink-muted sm:flex-row sm:items-center">
        <p>
          Base USD rates displayed above. Workload slots, quarterly yearly billing ($15,000/qtr),
          and full feature comparisons are detailed on our{" "}
          <Link href="/packages" className="font-semibold text-navy underline decoration-gold">
            Packages &amp; Pricing page
          </Link>
          .
        </p>
        <Link
          href="/contact?package=unsure&topic=plan-guidance&source=home-pricing"
          className="inline-flex shrink-0 items-center gap-1 font-semibold text-navy hover:text-gold-deep"
        >
          <span>Not sure which plan fits? Talk to us</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-gold-deep" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
