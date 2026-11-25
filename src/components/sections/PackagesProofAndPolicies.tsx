"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ChevronDown,
  FileText,
  Lock,
  Quote,
  ShieldCheck,
} from "lucide-react";
import {
  BILLING_POLICY_CARDS,
  COMPARISON_ROWS,
  ENGAGEMENT_STEPS,
  PACKAGES,
  PRICING_FAQS,
  type EngagementPeriod,
} from "@/data/packages";
import { CASE_STUDIES } from "@/data/portfolio";
import { TESTIMONIALS } from "@/data/site";
import { cn } from "@/lib/utils";

const FEATURED_CASE_SLUGS = [
  "ces-enterprise-event-operations-2026",
  "danielle-rtb-media-website-2026",
  "r80-rugby-print-catalogue",
];

const FEATURED_CASES = FEATURED_CASE_SLUGS.map((slug) =>
  CASE_STUDIES.find((c) => c.slug === slug)
).filter((c): c is NonNullable<typeof c> => Boolean(c));

const FEATURED_TESTIMONIALS = TESTIMONIALS.slice(0, 3);

interface PackagesProofAndPoliciesProps {
  format: (usdAmount: number) => string;
}

export function PackagesProofAndPolicies({ format }: PackagesProofAndPoliciesProps) {
  const [mobileCompareTab, setMobileCompareTab] = useState<EngagementPeriod>("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Section 6: Real Work & Client Proof */}
      <section id="client-proof" aria-labelledby="proof-heading" className="scroll-mt-24">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
              Real Work &amp; Client Proof
            </p>
            <h2
              id="proof-heading"
              className="mt-2 text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
            >
              See What Clients Actually Ship With Us
            </h2>
            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-muted">
              Verified international engagements across SaaS dashboards, mobile fintech products,
              and print packaging — delivered directly by our 3-principal team.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-deep shrink-0"
          >
            <span>View All {CASE_STUDIES.length} Case Studies</span>
            <ArrowUpRight className="h-4 w-4 text-gold-deep" />
          </Link>
        </div>

        {/* 3 Featured Case Studies */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {FEATURED_CASES.map((cs) => (
            <article
              key={cs.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-navy/12 bg-white shadow-xs transition-shadow duration-200 hover:border-navy/30 hover:shadow-lg"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-2 p-3.5">
                    <span className="rounded-full bg-navy/90 px-3 py-1 font-mono text-[11px] font-semibold text-white backdrop-blur-xs">
                      {cs.regionCode} · {cs.category}
                    </span>
                    <span className="rounded-full bg-gold px-3 py-1 font-mono text-[11px] font-bold text-navy">
                      {cs.engagementModel}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="font-mono text-xs font-medium text-gold-deep">{cs.timeline}</p>
                  <h3 className="mt-1.5 text-lg font-semibold leading-snug text-navy">
                    {cs.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-muted line-clamp-3">
                    {cs.summary}
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl border border-navy/10 bg-surface p-3.5">
                    {cs.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <p className="font-mono text-base font-bold text-navy">{m.value}</p>
                        <p className="text-xs leading-tight text-ink-muted">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-navy/10 px-6 py-4">
                <Link
                  href={`/work/${cs.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold-deep"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="h-4 w-4 text-gold-deep" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* 3 Verified Client Testimonials */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {FEATURED_TESTIMONIALS.map((t) => (
            <blockquote
              key={t.author}
              className="flex flex-col justify-between rounded-2xl border border-navy/12 bg-surface p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <Quote className="h-5 w-5 text-gold-deep" />
                  <span className="rounded-full border border-navy/12 bg-white px-3 py-1 font-mono text-[11px] font-semibold text-navy">
                    {t.regionTag} · {t.engagement}
                  </span>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-navy/90">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <footer className="mt-5 border-t border-navy/10 pt-4">
                <p className="text-sm font-semibold text-navy">{t.author}</p>
                <p className="text-[13px] text-ink-muted">
                  {t.role}, {t.company} · {t.location}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Section 7: Side-by-Side Feature Comparison */}
      <section id="compare-plans" aria-labelledby="compare-heading" className="scroll-mt-24">
        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
              Complete Breakdown
            </p>
            <h2
              id="compare-heading"
              className="mt-2 text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
            >
              Side-by-Side Feature &amp; Policy Comparison
            </h2>
            <p className="mt-1.5 text-[15px] text-ink-muted">
              Every active capacity limit, SLA, notice window, and IP rule across all 4 plans.
            </p>
          </div>
          <Link
            href="/policies/retainer-refund"
            className="text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-deep shrink-0"
          >
            Read full Retainer &amp; Refund Policy →
          </Link>
        </div>

        {/* Mobile Interactive Feature Comparison Tabs */}
        <div className="md:hidden">
          <div
            className="grid grid-cols-2 gap-2"
            role="tablist"
            aria-label="Compare package details"
          >
            {PACKAGES.map((p) => {
              const active = mobileCompareTab === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setMobileCompareTab(p.id)}
                  className={cn(
                    "transition-none rounded-xl border px-3.5 py-2.5 text-left text-sm font-semibold",
                    active
                      ? "border-navy bg-navy text-white ring-2 ring-gold"
                      : "border-navy/15 bg-surface text-navy"
                  )}
                >
                  <span className="block capitalize">{p.id}</span>
                  <span
                    className={cn(
                      "block font-mono text-xs",
                      active ? "text-gold" : "text-ink-muted"
                    )}
                  >
                    {format(p.usdPrice)}
                    {p.unitLabel}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 divide-y divide-navy/10 rounded-2xl border border-navy/15 bg-white shadow-xs">
            {COMPARISON_ROWS.map((row, idx) => {
              const cellValue =
                idx === 0
                  ? `${format(PACKAGES.find((p) => p.id === mobileCompareTab)?.usdPrice ?? 6500)} ${PACKAGES.find((p) => p.id === mobileCompareTab)?.unitLabel ?? ""}`
                  : row[mobileCompareTab];
              return (
                <div key={row.feature} className="p-4">
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-gold-deep">
                    {row.feature}
                  </p>
                  <p className="mt-1 text-[15px] font-medium text-navy">{cellValue}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop & Tablet Full Comparison Table */}
        <div className="hidden overflow-x-auto rounded-2xl border border-navy/15 bg-white shadow-sm md:block">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-navy/15 bg-navy font-mono text-xs uppercase tracking-wider text-white">
                <th className="w-[22%] p-4">Feature / Commercial Rule</th>
                <th className="w-[18%] p-4">Hourly</th>
                <th className="w-[19%] p-4">Weekly Sprint</th>
                <th className="w-[21%] bg-navy-mid p-4 text-gold">Monthly Retainer</th>
                <th className="w-[20%] p-4">Yearly Partner</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy/10 text-sm">
              {COMPARISON_ROWS.map((row, idx) => (
                <tr key={row.feature} className="hover:bg-surface/65">
                  <td className="p-4 font-semibold text-navy">{row.feature}</td>
                  <td className="p-4 text-ink-muted">
                    {idx === 0 ? `${format(65)} / hour` : row.hourly}
                  </td>
                  <td className="p-4 text-ink-muted">
                    {idx === 0 ? `${format(2200)} / week` : row.weekly}
                  </td>
                  <td className="bg-gold-tint/70 p-4 font-semibold text-navy">
                    {idx === 0 ? `${format(6500)} / month` : row.monthly}
                  </td>
                  <td className="p-4 text-navy/90">
                    {idx === 0
                      ? `${format(60000)} / year (${format(5000)}/mo eq.)`
                      : row.yearly}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8: How Your Engagement Works */}
      <section id="how-it-works" aria-labelledby="onboarding-heading" className="scroll-mt-24">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
            Onboarding &amp; Delivery Flow
          </p>
          <h2
            id="onboarding-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
          >
            How Your Engagement Works
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
            Structured from day one so founders and product leaders across the US, UK, Canada,
            Europe, and Australia know exactly what happens next.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ENGAGEMENT_STEPS.map((item) => (
            <div
              key={item.step}
              className="flex flex-col justify-between rounded-2xl border border-navy/12 bg-surface p-5"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-navy font-mono text-xs font-bold text-gold">
                    {item.step}
                  </span>
                  <span className="rounded-full border border-navy/12 bg-white px-2.5 py-0.5 font-mono text-[11px] font-semibold text-navy">
                    {item.timing}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 9: Billing, Ownership & Policies */}
      <section id="billing-policies" aria-labelledby="policies-heading" className="scroll-mt-24">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
            Commercial Clarity &amp; Governance
          </p>
          <h2
            id="policies-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
          >
            Billing, IP Ownership &amp; Policies
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
            Written terms designed for procurement teams, legal counsel, and startup founders — no
            buried fine print around currency billing, cancellations, or intellectual property.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {BILLING_POLICY_CARDS.map((card, idx) => {
            const Icon = idx === 0 ? FileText : idx === 1 ? Lock : ShieldCheck;
            return (
              <div
                key={card.title}
                className="flex flex-col justify-between rounded-2xl border border-navy/12 bg-white p-6 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-gold">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="rounded-full border border-navy/12 bg-surface px-3 py-1 font-mono text-[11px] font-semibold text-navy">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-navy">{card.title}</h3>
                  <ul className="mt-3.5 space-y-2.5 text-sm leading-relaxed text-ink-muted">
                    {card.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-deep" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 border-t border-navy/10 pt-4">
                  <Link
                    href={card.linkHref}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold-deep"
                  >
                    <span>{card.linkLabel}</span>
                    <ArrowUpRight className="h-4 w-4 text-gold-deep" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 10: FAQs & Final CTA */}
      <section aria-labelledby="faq-heading" className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
            Questions Answered
          </p>
          <h2
            id="faq-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
          >
            International Engagement, Capacity &amp; Billing FAQ
          </h2>
        </div>

        <div className="mt-8 space-y-3">
          {PRICING_FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.question}
                className={cn(
                  "overflow-hidden rounded-2xl border bg-white transition-colors duration-150",
                  isOpen ? "border-navy shadow-sm" : "border-navy/12"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-navy">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-gold-deep transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-navy/10 bg-surface/55 px-6 pb-5 pt-4 text-[15px] leading-relaxed text-ink-muted">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Final Conversion CTA Panel */}
      <section
        aria-labelledby="final-cta-heading"
        className="rounded-3xl border-2 border-gold bg-navy bg-navy-blueprint p-8 text-white shadow-xl sm:p-12"
      >
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Ready When You Are · 12h Response SLA
            </p>
            <h2
              id="final-cta-heading"
              className="mt-2.5 text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              Start With Clear Capacity, Real Seniority &amp; Flexible Terms
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/82">
              Tell us your timeline, active priorities, and preferred model — Hourly, Weekly,
              Monthly, or Yearly. You will hear directly from Asif, Rajpoot, or Azma within 12
              business hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3.5 shrink-0">
            <Link
              href="/contact?package=monthly&source=packages-final-cta"
              className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-navy hover:bg-gold-bright"
            >
              <span>Start Your Project Brief</span>
              <ArrowUpRight className="h-4 w-4 text-navy" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-navy-mid px-5 py-3.5 text-sm font-semibold text-white hover:border-gold/70"
            >
              <span>Browse Case Studies</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
