import type { Metadata } from "next";
import React from "react";
import { PolicyLayout } from "@/components/sections/PolicyLayout";

export const metadata: Metadata = {
  title: "Accessibility Statement (WCAG 2.1 Level AA)",
  description:
    "Bisen Studio's commitment to digital accessibility aligned with WCAG 2.1 Level AA, US ADA, Canada AODA, European Accessibility Act (EAA), and Australian DDA.",
};

export default function AccessibilityPage() {
  return (
    <PolicyLayout
      activePath="/policies/accessibility"
      eyebrow="Inclusive Design Standard"
      title="Accessibility Statement"
      lastUpdated="November 2026"
      jurisdictions={["WCAG 2.1 Level AA", "US ADA", "Canada AODA", "EU EAA", "Australian DDA"]}
      summary="Accessibility is a core engineering and visual design discipline at Bisen Studio—both on our own website and in every digital product, dashboard, and app we build for clients."
    >
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-navy">1. Conformance Commitment</h2>
        <p>
          Bisen Studio strives to conform to the{" "}
          <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong> across this
          website and our client deliverables, supporting international regulatory standards including
          the US Americans with Disabilities Act (ADA), Canada&apos;s AODA, the European Accessibility
          Act (EAA), and Australia&apos;s Disability Discrimination Act (DDA).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-navy">2. Accessibility Practices Implemented</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Semantic HTML5 document landmarks (<code>header</code>, <code>nav</code>, <code>main</code>, <code>footer</code>) and logical heading hierarchy.</li>
          <li>Built-in &ldquo;Skip to main content&rdquo; link and visible high-contrast keyboard focus rings on all interactive elements.</li>
          <li>Accessible color contrast ratios (≥ 4.5:1 for body text) across both Royal Navy and Crisp White gallery surfaces.</li>
          <li>Full support for operating-system <code>prefers-reduced-motion</code> settings.</li>
          <li>Descriptive <code>alt</code> attributes, form labels, and ARIA states on tabs, accordions, currency switches, and consent dialogs.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-navy">3. Accessibility Feedback</h2>
        <p>
          If you encounter any accessibility barrier on <code>bisenstudio.com</code> or need
          information in an alternative format, please email{" "}
          <a href="mailto:hello@bisenstudio.com" className="font-semibold text-navy underline decoration-gold decoration-2">
            hello@bisenstudio.com
          </a>{" "}
          with the subject &ldquo;Accessibility Feedback&rdquo;. We respond within 2 business days.
        </p>
      </section>
    </PolicyLayout>
  );
}
