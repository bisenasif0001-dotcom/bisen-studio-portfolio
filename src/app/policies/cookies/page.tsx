import type { Metadata } from "next";
import React from "react";
import { PolicyLayout } from "@/components/sections/PolicyLayout";
import { OpenCookieSettingsButton } from "@/components/sections/OpenCookieSettingsButton";

export const metadata: Metadata = {
  title: "Cookie Policy & Consent Management",
  description:
    "Transparent overview of strictly necessary, preference, and optional analytics cookies on Bisen Studio, with instant GDPR opt-in controls.",
};

export default function CookiePolicyPage() {
  return (
    <PolicyLayout
      activePath="/policies/cookies"
      eyebrow="Consent & Browser Storage"
      title="Cookie Policy"
      lastUpdated="November 2026"
      jurisdictions={["EU ePrivacy / GDPR", "UK PECR", "California CCPA"]}
      summary="We keep browser storage minimal and respect strict GDPR opt-in standards. No non-essential analytics or tracking scripts run unless you explicitly grant permission."
    >
      <OpenCookieSettingsButton />

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-navy">1. Categories of Browser Storage We Use</h2>
        <div className="overflow-x-auto rounded-2xl border border-navy/15">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-navy/15 bg-navy font-mono text-xs uppercase text-white">
                <th className="p-3.5">Category</th>
                <th className="p-3.5">Key / Purpose</th>
                <th className="p-3.5">Consent Required</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy/10 text-xs sm:text-sm">
              <tr>
                <td className="p-3.5 font-semibold text-navy">Strictly Necessary</td>
                <td className="p-3.5 text-ink-muted">
                  <code>bisen_studio_cookie_consent_v1</code> — Stores your cookie choice and site
                  security preferences.
                </td>
                <td className="p-3.5 font-mono font-semibold text-gold-deep">Always Active</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-navy">Functional Preferences</td>
                <td className="p-3.5 text-ink-muted">
                  <code>bisen_studio_currency</code> — Remembers your chosen pricing display
                  currency (USD, EUR, GBP, AUD, CAD).
                </td>
                <td className="p-3.5 font-mono text-ink-muted">Opt-In Toggle</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-navy">Privacy-First Analytics</td>
                <td className="p-3.5 text-ink-muted">
                  Aggregated page performance diagnostics. Zero cross-site ad pixels or data brokers.
                </td>
                <td className="p-3.5 font-mono text-ink-muted">Strict Opt-In</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-navy">2. Zero Advertising or Retargeting Trackers</h2>
        <p>
          Bisen Studio does not embed invasive third-party advertising networks, behavioral tracking
          pixels, or cross-domain fingerprinting scripts. You can change or revoke your preferences
          at any time via the button above or the &ldquo;Manage Cookie Preferences&rdquo; link in
          the site footer.
        </p>
      </section>
    </PolicyLayout>
  );
}
