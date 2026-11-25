"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardsSaasFaqAccordionProps {
  subjectTitle: string;
  turnaround: string;
  stackSpec: string;
  slaOrOutputSpec?: string;
}

export function DashboardsSaasFaqAccordion({
  subjectTitle,
  turnaround,
  stackSpec,
  slaOrOutputSpec,
}: DashboardsSaasFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: `How do you isolate customer tenant data and RBAC roles in ${subjectTitle}?`,
      answer: `We enforce workspace isolation directly on the server and PostgreSQL Row-Level Security (RLS) alongside explicit role-based access rules (${stackSpec}), verifying zero cross-tenant leaks or IDOR gaps with automated integration tests.`,
    },
    {
      question: "Can you integrate Stripe seats, usage metering, taxes, and enterprise SSO cleanly?",
      answer: `Yes—we wire Stripe Billing (tiered plans, prorated seats, metered credits, multi-currency FX) and SAML/OIDC enterprise SSO (Okta / Entra ID) cleanly with idempotent webhook sync${slaOrOutputSpec ? ` targeting ${slaOrOutputSpec}` : ""}.`,
    },
    {
      question: `Do we keep 100% of the SaaS source repository and Figma IP (${turnaround})?`,
      answer:
        "100%. Every TypeScript line, PostgreSQL migration, Figma variable kit, and infrastructure config lives inside your own Git organization under mutual NDA with zero vendor lock-in or per-seat studio runtime fees.",
    },
    {
      question: "Can our internal engineering team extend and maintain this platform later?",
      answer:
        "Absolutely. Because our 3 principals (Asif Bisen, Rajpoot Talib, and Azma Bisen) write clean strict TypeScript, documented API schemas, and tokenized Tailwind components, internal hires can pick up sprint commits from Day 1.",
    },
  ];

  return (
    <section
      aria-label="Dashboards and SaaS Engineering FAQ"
      className="rounded-[24px] border border-navy/12 bg-white p-6 shadow-xs sm:p-8"
    >
      <div className="max-w-2xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
          SAAS ARCHITECTURE CLARITY // FAQ
        </p>
        <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-navy">
          Common Questions Before SaaS Kickoff
        </h2>
      </div>

      <div className="mt-6 divide-y divide-navy/10 border-t border-navy/10">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question} className="py-4">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
              >
                <span className="text-sm font-semibold text-navy sm:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-gold-deep transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
              {isOpen && (
                <p className="mt-2.5 pr-6 text-xs leading-relaxed text-ink-muted sm:text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
