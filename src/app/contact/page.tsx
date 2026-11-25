import type { Metadata } from "next";
import React, { Suspense } from "react";
import { ContactFormClient } from "@/components/sections/ContactFormClient";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Start a Project & Contact — Smart Project Brief Builder",
  description:
    "Start your graphic design, print packaging, website, mobile app, SaaS dashboard, or AI engineering inquiry with Bisen Studio. Smart pre-selected scope and direct senior review.",
};

export default function ContactPage() {
  return (
    <div className="bg-surface text-navy">
      <section className="border-b-2 border-gold bg-navy bg-navy-blueprint py-14 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            theme="dark"
            eyebrow="Start a Project · Smart Brief Builder"
            title={
              <>
                Let&apos;s Build Something{" "}
                <span className="font-editorial text-gold">Remarkable</span> Together.
              </>
            }
            description="Share your project scope, goals, and preferred engagement model in three quick steps. Your inquiry goes directly to Asif Bisen, Rajpoot Talib, and Azma Bisen—we aim to respond within 1 business day."
          />
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <div className="rounded-3xl border border-navy/12 bg-white p-10 text-sm text-ink-muted">
                Loading Smart Project Brief Builder...
              </div>
            }
          >
            <ContactFormClient />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
