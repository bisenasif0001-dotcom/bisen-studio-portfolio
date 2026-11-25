"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileAppFaqAccordionProps {
  subjectTitle: string;
  turnaround: string;
  stackSpec: string;
  slaOrOutputSpec?: string;
}

export function MobileAppFaqAccordion({
  subjectTitle,
  turnaround,
  stackSpec,
  slaOrOutputSpec,
}: MobileAppFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: `Should we build ${subjectTitle} natively (Swift / Kotlin) or cross-platform (Flutter / React Native)?`,
      answer: `For hardware-heavy AR, Apple Pencil, or ultra-low-level background jobs, native Swift/Kotlin leads. For 90% of startups, fintech, commerce, and B2B apps (${stackSpec}), Flutter or React Native delivers 60–120fps native feel across both iOS and Android from one maintainable codebase in ${turnaround}.`,
    },
    {
      question: "Do you handle Apple App Store and Google Play review submissions end to end?",
      answer: `Yes—we prepare App Store Connect & Play Console metadata, Privacy Labels, Data Safety declarations, closed testing tracks, Sign in with Apple / deletion compliance, and resolve reviewer feedback cleanly${slaOrOutputSpec ? ` targeting ${slaOrOutputSpec}` : ""}.`,
    },
    {
      question: `Do we keep 100% of the mobile source code and Git IP for ${subjectTitle}?`,
      answer:
        "100%. Every commit pushes straight into your organization's GitHub or GitLab repository alongside Figma source files, CI/CD scripts, and backend infrastructure configs—under mutual NDA with zero studio lock-in.",
    },
    {
      question: "How does collaboration work across US, UK, Canada, Europe, and Australia?",
      answer:
        "You work directly with our 3 senior principals (Asif Bisen, Rajpoot Talib, and Azma Bisen)—with weekly live TestFlight / Android builds in your inbox, clean Linear sprints, and a 12-hour response SLA tailored to your timezone.",
    },
  ];

  return (
    <section
      aria-label="Mobile App Engineering FAQ"
      className="rounded-[24px] border border-navy/12 bg-white p-6 shadow-xs sm:p-8"
    >
      <div className="max-w-2xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
          MOBILE ENGINEERING CLARITY // FAQ
        </p>
        <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-navy">
          Common Questions Before App Launch
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
