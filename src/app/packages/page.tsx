import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Globe, ShieldCheck, Users } from "lucide-react";
import { PackagesInteractive } from "@/components/sections/PackagesInteractive";

export const metadata: Metadata = {
  title: "Packages & Pricing — Hourly, Weekly, Monthly & Yearly Plans",
  description:
    "One creative and development team with flexible Hourly ($65/hr), Weekly ($2,200/wk), Monthly ($6,500/mo), and Yearly ($60,000/yr) packages for US, UK, Canada, Europe & Australia clients.",
};

const HERO_TRUST_POINTS = [
  {
    icon: Users,
    title: "3 Principal Specialists",
    detail: "Direct delivery by Asif Bisen, Rajpoot Talib & Azma Bisen",
  },
  {
    icon: CheckCircle2,
    title: "Explicit Workload Limits",
    detail: "Defined active slots, prioritized queue & weekly logs",
  },
  {
    icon: Globe,
    title: "USD Base · 5 Currencies",
    detail: "Stripe, Wise, ACH, SEPA & international Wire",
  },
  {
    icon: ShieldCheck,
    title: "Mutual NDA & Clear IP",
    detail: "Custom deliverables transfer 100% upon settlement",
  },
];

export default function PackagesPage() {
  return (
    <div className="bg-canvas text-navy">
      {/* Section 1: Hero & Positioning */}
      <section className="border-b-2 border-gold bg-navy bg-navy-blueprint py-16 text-white lg:py-22">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/45 bg-navy-mid px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              <span>Transparent International Pricing · USD Base</span>
            </div>

            <h1 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
              One Creative &amp; Development Team.{" "}
              <span className="font-editorial text-gold">Flexible Plans.</span> Exceptional
              Execution.
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
              From brand design to full-stack development, work with a dedicated creative technology
              studio on your schedule, your scope, and your goals.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="/contact?topic=package-consultation&source=packages-hero"
                className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-navy shadow-sm hover:bg-gold-bright"
              >
                <span>Book a Free Discovery Call</span>
                <ArrowUpRight className="h-4 w-4 text-navy" />
              </Link>
              <a
                href="#pricing-plans"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-navy-mid px-6 py-3.5 text-sm font-semibold text-white hover:border-gold/70"
              >
                <span>Compare All 4 Plans</span>
              </a>
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 px-2 py-2 text-sm font-semibold text-gold underline decoration-gold/50 underline-offset-4 hover:text-white"
              >
                <span>View Published Work →</span>
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-4 border-t border-white/15 pt-7 sm:grid-cols-2 lg:grid-cols-4">
            {HERO_TRUST_POINTS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl border border-white/12 bg-navy-mid/70 p-4"
                >
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-0.5 text-[13px] leading-snug text-white/75">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sections 2–10 */}
      <section className="py-14 pb-28 lg:py-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PackagesInteractive />
        </div>
      </section>
    </div>
  );
}
