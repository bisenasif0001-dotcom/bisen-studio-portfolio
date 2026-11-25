"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useCurrency } from "@/components/context/CurrencyContext";
import { formatMoney } from "@/lib/utils";

interface DashboardsSaasPricingBandProps {
  serviceSlug?: string;
  serviceTitle?: string;
}

const PRICING_TIERS = [
  {
    id: "hourly",
    name: "Hourly Architecture",
    tag: "Audits & Queries",
    usdPrice: 65,
    unit: "/ hr",
    summary: "Table performance fixes, SQL indexing, RBAC security checks & UI polish.",
    points: [
      "Direct senior work with Asif, Talib & Azma",
      "24–48h task turnaround · 5-hr minimum",
      "100% clean Git commits & IP transfer",
    ],
  },
  {
    id: "weekly",
    name: "Weekly SaaS Sprint",
    tag: "Prototype / Module",
    usdPrice: 2200,
    unit: "/ wk",
    summary: "Ideal for Figma SaaS systems, Stripe billing setup, BI charts & workflow automation.",
    points: [
      "5-day dedicated senior unit velocity",
      "Daily staging previews + US/UK/EU/AU/CA overlap",
      "Playwright / TypeScript test checks included",
    ],
  },
  {
    id: "monthly",
    name: "Monthly SaaS Partner",
    tag: "Platform & Scale",
    recommended: true,
    usdPrice: 6500,
    unit: "/ mo",
    summary: "End-to-end multi-tenant SaaS, AI copilots, ERP consoles & ongoing engineering care.",
    points: [
      "Save ~35% vs. Western product agencies",
      "AI-accelerated coding at 3× delivery speed",
      "Dashboard UI/UX + Backend + DevOps unified",
    ],
  },
];

export function DashboardsSaasPricingBand({
  serviceSlug,
  serviceTitle,
}: DashboardsSaasPricingBandProps) {
  const { currency } = useCurrency();
  const topicParam = serviceSlug ? `&topic=${encodeURIComponent(serviceSlug)}` : "";

  return (
    <div className="rounded-[28px] border-2 border-gold/55 bg-navy bg-navy-blueprint p-7 text-white shadow-[0_24px_60px_rgba(10,25,47,0.2)] sm:p-10">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            ENGAGEMENT &amp; PRICING OPTIONS ({currency})
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {serviceTitle
              ? `Hire Senior SaaS Engineers for ${serviceTitle}`
              : "Have a SaaS Idea or Dashboard Project?"}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/75">
            From startup MVPs to enterprise-grade platforms, we transform complex workflows into
            intelligent digital experiences—with transparent rates and 100% Git IP ownership.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={`/contact?service=dashboards-saas${topicParam}`}
            className="group inline-flex items-center gap-2 rounded-full bg-gold py-2 pl-5 pr-2 text-xs font-bold text-navy transition-all hover:bg-gold-bright sm:text-sm"
          >
            <span>Get a Free Quote</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-gold transition-transform duration-200 group-hover:scale-105">
              <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" />
            </span>
          </Link>
          <Link
            href="/work/dashboards-saas"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-navy-mid/80 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:border-gold hover:text-gold sm:text-sm"
          >
            <span>View SaaS Projects</span>
          </Link>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {PRICING_TIERS.map((tier) => (
          <div
            key={tier.id}
            className={
              tier.recommended
                ? "flex flex-col justify-between rounded-2xl border-2 border-gold bg-navy-mid p-5 shadow-lg"
                : "flex flex-col justify-between rounded-2xl border border-white/15 bg-navy-deep/85 p-5"
            }
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-gold">
                  {tier.tag}
                </span>
                {tier.recommended && (
                  <span className="rounded-full bg-gold px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase text-navy">
                    Recommended
                  </span>
                )}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-white">{tier.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-mono text-2xl font-bold text-gold">
                  {formatMoney(tier.usdPrice, currency)}
                </span>
                <span className="font-mono text-xs text-white/65">{tier.unit}</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-white/75">{tier.summary}</p>
              <ul className="mt-4 space-y-2 border-t border-white/10 pt-3.5 text-xs text-white/85">
                {tier.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={`/contact?service=dashboards-saas&package=${tier.id}${topicParam}`}
              className="mt-5 inline-flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 font-mono text-xs font-semibold text-white transition-colors hover:border-gold hover:text-gold"
            >
              <span>Select {tier.name}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
