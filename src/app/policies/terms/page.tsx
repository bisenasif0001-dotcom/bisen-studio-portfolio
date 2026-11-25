import type { Metadata } from "next";
import React from "react";
import { PolicyLayout } from "@/components/sections/PolicyLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Master International Engagement Terms",
  description:
    "Bisen Studio's Terms of Service governing scope, milestones, multi-currency payments, warranties, and international client engagements.",
};

export default function TermsPage() {
  return (
    <PolicyLayout
      activePath="/policies/terms"
      eyebrow="Commercial Governance"
      title="Terms of Service"
      lastUpdated="November 2026"
      jurisdictions={["United States", "Europe & UK", "Australia", "Canada"]}
      summary="Clear, founder-friendly commercial terms governing how Bisen Studio delivers digital design, print design, websites, mobile/web apps, SaaS dashboards, and AI-accelerated products."
    >
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-navy">1. Scope of Services &amp; Proposals</h2>
        <p>
          Every engagement—whether Hourly, Weekly Sprint, Monthly Retainer, Yearly Strategic
          Partnership, or Fixed-Scope Project—begins with a written Statement of Work (SOW) or
          Sprint Brief agreed upon by email or signed proposal. Work outside the agreed scope is
          never silently billed; we provide written time/cost confirmation prior to proceeding.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-navy">2. Multi-Currency Invoicing &amp; Payments</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Supported Currencies:</strong> USD ($), EUR (€), GBP (£), AUD (A$), and CAD (C$)
            via Stripe, Wise Business, ACH, SEPA, Faster Payments, or SWIFT wire transfer.
          </li>
          <li>
            <strong>Billing Schedule:</strong> Weekly Sprints and Monthly/Yearly periods are invoiced
            at the start of each billing cycle. Fixed-scope projects are typically split 50% upfront
            and 50% prior to final production transfer/launch (or 40/30/30 for larger engagements).
          </li>
          <li>
            <strong>Late Payments:</strong> Invoices carry a standard 7-day grace window; work and
            repository transfers pause if invoices remain overdue beyond 14 days without written
            arrangement.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-navy">3. Approvals, Revisions &amp; Print Proofing</h2>
        <p>
          For digital projects, we work iteratively with continuous previews so direction stays
          aligned. For <strong>Print Design</strong>, clients receive press-ready PDF/X-4 proofs
          with bleed, trim, and Pantone/CMYK specs. Clients are responsible for final text/spelling
          sign-off before sending files to third-party commercial print houses.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-navy">4. 30-Day Post-Launch Engineering Warranty</h2>
        <p>
          All delivered websites, apps, and dashboards include a complimentary{" "}
          <strong>30-day bug-fix warranty</strong> covering any verified functional defects against
          the approved specification (excluding issues introduced by third-party code edits or
          external API deprecations after handover).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-navy">5. Limitation of Liability &amp; Disputes</h2>
        <p>
          Both parties agree to resolve any concern in good faith through direct executive dialogue
          within 15 business days. To the maximum extent permitted by law, Bisen Studio&apos;s
          aggregate liability under any engagement shall not exceed the total fees paid by the client
          during the preceding three (3) months for the specific service giving rise to the claim.
        </p>
      </section>
    </PolicyLayout>
  );
}
