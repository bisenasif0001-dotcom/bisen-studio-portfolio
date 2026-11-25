"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useCurrency } from "@/components/context/CurrencyContext";
import { formatMoney } from "@/lib/utils";

interface WebsitePricingBandProps {
  serviceSlug?: string;
  serviceTitle?: string;
}

const PRICING_TIERS = [
  {
    id: "hourly",
    name: "Hourly Engineering",
    tag: "Audits & Fixes",
    usdPrice: 65,
    unit: "/ hr",
    summary: "Targeted speed fixes, Core Web Vitals, SEO schema, CMS sections & bug patches.",
    points: [
      "Direct senior work with Asif, Talib & Azma",
      "24–48h task turnaround · 5-hr minimum",
      "100% clean Git commits & IP transfer",
    ],
  },
  {
    id: "weekly",
    name: "Weekly Build Sprint",
    tag: "Landing / Redesign",
    usdPrice: 2200,
    unit: "/ wk",
    summary: "Ideal for high-converting landing pages, Webflow/Shopify builds & CRM API links.",
    points: [
      "5-day dedicated senior unit velocity",
      "Daily previews + US/UK/EU/AU/CA overlap",
      "Edge deployment + SEO metadata setup",
    ],
  },
  {
    id: "monthly",
    name: "Monthly Web Partner",
    tag: "Platform & Growth",
    recommended: true,
    usdPrice: 6500,
    unit: "/ mo",
    summary: "Full custom Next.js websites, SaaS portals, Shopify builds & ongoing growth care.",
    points: [
      "Save ~35% vs. Western dev agencies",
      "AI-accelerated coding at 3× delivery speed",
      "Ongoing maintenance, CRO & feature roadmap",
    ],
  },
];

export function WebsitePricingBand({
  serviceSlug,
  serviceTitle,
}: WebsitePricingBandProps) {
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
              ? `Hire Senior Engineers for ${serviceTitle}`
              : "Have a Website Project in Mind?"}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/75">
            From a single conversion landing page to a custom Next.js SaaS platform or Shopify
            flagship—flexible hourly, weekly, and monthly plans with 100% Git repository IP ownership.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={`/contact?service=website${topicParam}`}
            className="group inline-flex items-center gap-2 rounded-full bg-gold py-2 pl-5 pr-2 text-xs font-bold text-navy transition-all hover:bg-gold-bright sm:text-sm"
          >
            <span>Get a Free Quote</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-gold transition-transform duration-200 group-hover:scale-105">
              <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" />
            </span>
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-navy-mid/80 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:border-gold hover:text-gold sm:text-sm"
          >
            <span>View Web Projects</span>
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
              href={`/contact?service=website&package=${tier.id}${topicParam}`}
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
