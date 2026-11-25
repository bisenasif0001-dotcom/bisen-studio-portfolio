import type { Metadata } from "next";
import React from "react";
import { PolicyLayout } from "@/components/sections/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy (GDPR, UK GDPR, CCPA/CPRA, PIPEDA & AU Privacy Act)",
  description:
    "How Bisen Studio collects, safeguards, and minimizes personal information in alignment with international privacy standards across the US, Europe, UK, Australia, and Canada.",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      activePath="/policies/privacy"
      eyebrow="Data Protection & Privacy"
      title="International Privacy Policy"
      lastUpdated="November 2026"
      jurisdictions={["EU GDPR", "UK GDPR", "California CCPA / CPRA", "Canada PIPEDA", "Australian Privacy Act"]}
      summary="We practice strict data minimization: we collect only what is needed to respond to your project brief and deliver contracted work. We never sell, rent, or broker client or visitor data."
    >
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-navy">1. Who We Are &amp; Scope</h2>
        <p>
          This Privacy Policy explains how <strong>Bisen Studio</strong> (operated by principals
          Asif Bisen, Rajpoot Talib, and Azma Bisen) processes personal data when you visit{" "}
          <code>bisenstudio.com</code>, submit a project inquiry, or engage us for design, print,
          web, app, dashboard, or AI-accelerated engineering services from the United States,
          European Economic Area (EEA), United Kingdom, Australia, Canada, or worldwide.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-navy">2. Data We Collect (Strict Minimization)</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Project Inquiry Details:</strong> Name, work email, company name, region/timezone,
            project brief, and NDA preference when you voluntarily submit our Contact form or email us.
          </li>
          <li>
            <strong>Contract &amp; Billing Records:</strong> Corporate entity name, billing address,
            tax/VAT/ABN/EIN details (where applicable), and payment confirmations processed securely
            through third-party providers (e.g., Stripe, Wise, or bank wire). We never store raw credit
            card numbers on studio servers.
          </li>
          <li>
            <strong>Browser Preferences &amp; Optional Analytics:</strong> Your selected display
            currency (USD/EUR/GBP/AUD/CAD) and consent choice. Optional anonymized analytics are only
            activated if you explicitly opt in via our Cookie Consent Manager.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-navy">3. Legal Bases &amp; Zero Data Selling</h2>
        <p>
          Under EU/UK GDPR, we process personal data solely on lawful bases: (a) your explicit
          consent, (b) pre-contractual steps or contract performance for active projects, (c) legal
          invoicing obligations, or (d) strictly limited legitimate security interests (spam/abuse
          prevention). Under California CCPA/CPRA, <strong>Bisen Studio does not sell or share</strong>{" "}
          personal information for cross-context behavioral advertising.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-navy">4. Your International Privacy Rights</h2>
        <p>
          Depending on your jurisdiction (GDPR, UK GDPR, CCPA/CPRA, PIPEDA, Australian Privacy
          Principles), you have the right to:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Request a copy of the personal data we hold about you (Right of Access / Portability).</li>
          <li>Request correction of inaccurate information (Right to Rectification).</li>
          <li>Request complete deletion of inquiry records (Right to Erasure / &ldquo;Right to be Forgotten&rdquo;).</li>
          <li>Withdraw cookie or communication consent at any time without penalty.</li>
          <li>Lodge a complaint with your local supervisory authority (e.g., ICO, EU DPA, OAIC, OPC).</li>
        </ul>
        <p>
          To exercise any right, email{" "}
          <a href="mailto:privacy@bisenstudio.com" className="font-semibold text-navy underline decoration-gold decoration-2">
            privacy@bisenstudio.com
          </a>
          . We verify and fulfill all legitimate privacy requests within <strong>30 calendar days</strong>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-navy">5. Data Security &amp; Retention</h2>
        <p>
          All transmissions are encrypted in transit via TLS/HTTPS. Access to client communications,
          source repositories, and design files is strictly restricted to our 3-member core team using
          multi-factor authentication (MFA). Unconverted inquiry records are purged after 12 months;
          contract/invoicing records are retained only as required by applicable accounting laws.
        </p>
      </section>
    </PolicyLayout>
  );
}
