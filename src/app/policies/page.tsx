import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import {
  Accessibility,
  ArrowUpRight,
  Cookie,
  Cpu,
  FileText,
  Lock,
  Receipt,
  ShieldCheck,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "International Trust Center & Legal Policies",
  description:
    "Bisen Studio's international legal, privacy, IP ownership, AI ethics, retainer/refund, cookie consent, and WCAG 2.1 AA accessibility policies built for US, European, Australian, and Canadian clients.",
};

const POLICY_CARDS = [
  {
    href: "/policies/privacy",
    icon: Lock,
    tag: "GDPR · UK GDPR · CCPA · PIPEDA · AU APPs",
    title: "Privacy Policy",
    description:
      "Strict data minimization, zero third-party data selling, transparent retention limits, and full data-subject rights (Access, Erasure, Portability, Opt-Out).",
  },
  {
    href: "/policies/ip-nda-ai",
    icon: Cpu,
    tag: "100% Client IP · Mutual NDA · Zero-Retention AI",
    title: "IP Ownership, NDA & AI Transparency Policy",
    description:
      "Full worldwide IP transfer upon payment, Mutual NDA readiness before discovery calls, and strict zero-data-retention AI governance with 100% senior human review.",
  },
  {
    href: "/policies/retainer-refund",
    icon: Receipt,
    tag: "Hourly · Weekly · Monthly · Yearly",
    title: "Engagement, Retainer & Refund Policy",
    description:
      "Clear billing rules, 14-day monthly pause/cancel flexibility, unused capacity rollover terms, and transparent pro-rata refund protections across all 4 packages.",
  },
  {
    href: "/policies/terms",
    icon: FileText,
    tag: "International B2B · Multi-Currency",
    title: "Terms of Service",
    description:
      "Scope governance, milestone sign-offs, multi-currency invoicing (USD, EUR, GBP, AUD, CAD), 30-day post-launch code warranty, and dispute resolution terms.",
  },
  {
    href: "/policies/cookies",
    icon: Cookie,
    tag: "GDPR Opt-In Compliant",
    title: "Cookie Policy & Consent Controls",
    description:
      "No non-essential tracking prior to consent. Inspect every cookie category and update or revoke your browser preferences at any time.",
  },
  {
    href: "/policies/accessibility",
    icon: Accessibility,
    tag: "WCAG 2.1 AA · ADA · AODA · EAA · DDA",
    title: "Accessibility Statement",
    description:
      "Our technical commitment to inclusive digital products supporting keyboard navigation, screen readers, contrast standards, and reduced motion.",
  },
];

export default function PoliciesHubPage() {
  return (
    <div className="bg-surface text-navy">
      <section className="border-b-2 border-gold bg-navy bg-navy-blueprint py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            theme="dark"
            eyebrow="International Trust Center"
            title={
              <>
                Transparent Policies Built for{" "}
                <span className="font-editorial text-gold">Global</span> Client Confidence.
              </>
            }
            description="Working across borders requires rock-solid legal clarity. Every policy below is designed to align with client expectations across the United States, Europe, the United Kingdom, Australia, and Canada."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { region: "United States", standards: "CCPA/CPRA · ADA · Standard Mutual NDA · ACH/Stripe" },
              { region: "Europe & UK", standards: "EU GDPR · UK GDPR · EAA Accessibility · SEPA/EUR/GBP" },
              { region: "Australia", standards: "Australian Privacy Act (APPs) · DDA · AUD Invoicing" },
              { region: "Canada", standards: "PIPEDA · AODA (WCAG 2.1 AA) · CAD Invoicing" },
            ].map((item) => (
              <div key={item.region} className="rounded-2xl border border-white/15 bg-navy-mid p-5">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-gold">
                  <ShieldCheck className="h-4 w-4" />
                  <span>{item.region}</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-white/80">{item.standards}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {POLICY_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group flex flex-col justify-between rounded-2xl border border-navy/12 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-gold hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/45 bg-navy text-gold">
                        <Icon className="h-5 w-5" />
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-ink-muted transition-colors group-hover:text-navy" />
                    </div>
                    <p className="mt-5 font-mono text-[10px] font-semibold uppercase tracking-wider text-gold-deep">
                      {card.tag}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-navy group-hover:text-gold-deep transition-colors">
                      {card.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">{card.description}</p>
                  </div>
                  <div className="mt-6 border-t border-navy/10 pt-4 font-mono text-xs font-semibold text-navy group-hover:text-gold-deep">
                    Read Full Policy →
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
