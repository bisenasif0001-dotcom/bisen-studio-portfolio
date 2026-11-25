import type { Metadata } from "next";
import React from "react";
import { PolicyLayout } from "@/components/sections/PolicyLayout";

export const metadata: Metadata = {
  title: "IP Ownership, Mutual NDA & AI Transparency Policy",
  description:
    "Bisen Studio's guarantee of 100% client intellectual property ownership, Mutual NDA readiness, and strict zero-data-retention AI-assisted engineering ethics.",
};

export default function IpNdaAiPolicyPage() {
  return (
    <PolicyLayout
      activePath="/policies/ip-nda-ai"
      eyebrow="Intellectual Property & AI Governance"
      title="IP Ownership, Mutual NDA & AI Transparency Policy"
      lastUpdated="November 2026"
      jurisdictions={["100% Client IP", "Mutual NDA Ready", "Zero-Data-Retention AI"]}
      summary="Your source code, Figma design systems, print artwork, and proprietary business strategies belong strictly to you—protected by Mutual NDA and zero-training AI enterprise governance."
    >
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-navy">1. 100% Intellectual Property Transfer</h2>
        <p>
          Upon settlement of the corresponding invoice(s), <strong>100% of worldwide intellectual property rights</strong>{" "}
          in all bespoke deliverables created specifically for your project transfer exclusively to
          you. This includes:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>All custom source code, Git commit histories, UI component libraries, and API logic.</li>
          <li>All editable Figma files, design tokens, custom SVGs, and brand guidelines.</li>
          <li>All native print design files (Adobe InDesign, Illustrator, Photoshop, die-lines, and PDF/X-4 press masters).</li>
        </ul>
        <p>
          Standard open-source libraries (e.g., React, Next.js, Tailwind CSS under MIT/Apache
          licenses) and licensed third-party commercial fonts remain governed by their respective
          open or commercial licenses, which we document transparently during handover.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-navy">2. Mutual NDA &amp; Confidentiality</h2>
        <p>
          We treat every client inquiry, pitch deck, financial model, and private repository as
          strictly confidential from the very first message. Upon request—even prior to our initial
          discovery call—Bisen Studio executes a standard <strong>Mutual Non-Disclosure Agreement (NDA)</strong>{" "}
          binding all three principals (Asif Bisen, Rajpoot Talib, and Azma Bisen). We never display
          NDA-protected work in our public portfolio without explicit written permission.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-navy">3. AI-Assisted Engineering Transparency &amp; Ethics</h2>
        <p>
          Bisen Studio leverages modern AI coding and workflow acceleration tools combined with{" "}
          <strong>16+ years of senior human craft</strong> to ship production software 2–3× faster.
          To protect startups and enterprises across the US, Europe, Australia, and Canada, we
          enforce four non-negotiable AI rules:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Zero-Data-Retention Enterprise Tiers Only:</strong> Client proprietary code,
            business data, and unreleased designs are <strong>never</strong> submitted to public
            consumer AI models or used to train foundation models.
          </li>
          <li>
            <strong>100% Senior Human Architecture &amp; Review:</strong> Every architectural
            decision, security check, accessibility requirement, and line of production code is
            authored, validated, and signed off by senior engineers.
          </li>
          <li>
            <strong>Original Brand &amp; Print Craft:</strong> Brand marks, typography systems,
            editorial layouts, and print packaging are custom-crafted by our design directors so
            your brand remains legally protectable and trademark-ready.
          </li>
          <li>
            <strong>Client Opt-Out Supported:</strong> If a client&apos;s enterprise compliance
            policy requires a 100% non-AI coding environment for a specific repository, we honor
            that requirement in writing upon request.
          </li>
        </ul>
      </section>
    </PolicyLayout>
  );
}
