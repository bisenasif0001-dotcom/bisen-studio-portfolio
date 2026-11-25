import type { Metadata } from "next";
import React from "react";
import { PolicyLayout } from "@/components/sections/PolicyLayout";

export const metadata: Metadata = {
  title: "Engagement, Retainer & Refund Policy (Hourly, Weekly, Monthly, Yearly)",
  description:
    "Transparent engagement rules, pause/cancellation flexibility, capacity rollover, and pro-rata refund policy across Hourly, Weekly, Monthly, and Yearly packages.",
};

export default function RetainerRefundPage() {
  return (
    <PolicyLayout
      activePath="/policies/retainer-refund"
      eyebrow="Billing & Continuity"
      title="Engagement, Retainer & Refund Policy"
      lastUpdated="November 2026"
      jurisdictions={["Hourly", "Weekly Sprint", "Monthly Retainer", "Yearly Partner"]}
      summary="Predictable, founder-friendly terms across all four engagement packages—so individuals, startups, and companies can scale up, pause, or pivot without friction."
    >
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-navy">1. Hourly Precision Package</h2>
        <p>
          Minimum booking block is <strong>5 hours</strong>. All work is logged transparently in
          15-minute increments with weekly task summaries and Loom walkthroughs. Clients may stop or
          cap hours at any time; any unworked prepaid hours are 100% refundable upon written request.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-navy">2. Weekly Sprint Package</h2>
        <p>
          Each Weekly Sprint covers 5 consecutive business days focused on an agreed sprint objective
          with daily async updates and a Friday demo/handover. Sprints are invoiced 100% upfront to
          reserve our 3-person team&apos;s calendar. Sprints renew only with your explicit approval—zero
          surprise auto-renewals.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-navy">3. Monthly Studio Retainer</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Pause or Cancel Anytime:</strong> Provide <strong>14 calendar days&apos; notice</strong>{" "}
            prior to your next billing renewal date to pause or cancel with zero exit penalties.
          </li>
          <li>
            <strong>Capacity Rollover:</strong> If your team is awaiting internal approvals during a
            quiet week, up to <strong>20% of unused monthly capacity</strong> may roll over cleanly
            into the following consecutive active month (or pause your billing clock by mutual
            agreement).
          </li>
          <li>
            <strong>Multi-Discipline Switching:</strong> Seamlessly shift priorities mid-month
            between web/app development, SaaS dashboards, brand design, and print artwork.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-navy">4. Yearly Strategic Partner</h2>
        <p>
          Yearly partnerships lock in our lowest effective rate (20–25% discount vs. Monthly) plus
          priority 24-hour SLA and quarterly roadmap reviews. Available via Annual upfront or
          Quarterly installment billing. Early termination after the first quarter is available with
          30 days&apos; notice; any unused prepaid full months beyond the notice period are refunded
          pro-rata (adjusted to the standard Monthly rate for completed months).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-navy">5. Fair Refund Policy</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Before Work Starts:</strong> 100% refund of any prepaid sprint, deposit, or
            retainer canceled before kickoff or resource allocation begins.
          </li>
          <li>
            <strong>During Active Work:</strong> Completed hours, delivered milestones, and active
            in-progress sprint weeks represent committed senior team capacity and are non-refundable.
            Unused prepaid future cycles are refunded pro-rata within 7 business days.
          </li>
          <li>
            <strong>Quality Remediation:</strong> If any deliverable does not match the agreed written
            specification, we remediate it at zero additional cost prior to milestone closure.
          </li>
        </ul>
      </section>
    </PolicyLayout>
  );
}
