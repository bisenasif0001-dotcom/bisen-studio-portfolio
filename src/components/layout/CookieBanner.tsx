"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ShieldCheck, SlidersHorizontal, X } from "lucide-react";
import { useCookieConsent } from "@/components/context/CookieConsentContext";

export function CookieBanner() {
  const {
    consent,
    showBanner,
    showModal,
    openSettings,
    closeSettings,
    acceptAll,
    rejectNonEssential,
    saveCustom,
  } = useCookieConsent();

  const [analytics, setAnalytics] = useState(false);
  const [preferences, setPreferences] = useState(true);

  useEffect(() => {
    if (consent) {
      setAnalytics(consent.analytics);
      setPreferences(consent.preferences);
    }
  }, [consent, showModal]);

  return (
    <>
      {/* First-Visit GDPR/CCPA Opt-In Banner */}
      {showBanner && !showModal && (
        <aside
          role="dialog"
          aria-label="Cookie consent notice"
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl rounded-2xl border border-gold/45 bg-navy/98 p-5 text-white shadow-[0_24px_60px_rgba(10,25,47,0.45)] backdrop-blur-xl sm:p-6"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
                <ShieldCheck className="h-4 w-4" />
                <span>GDPR · CCPA · PIPEDA Privacy Respect</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                We use strictly necessary cookies to preserve your currency and consent settings.
                Non-essential analytics cookies stay <strong className="text-white">off</strong>{" "}
                unless you explicitly opt in. Read our{" "}
                <Link href="/policies/cookies" className="text-gold underline underline-offset-2">
                  Cookie Policy
                </Link>{" "}
                and{" "}
                <Link href="/policies/privacy" className="text-gold underline underline-offset-2">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={openSettings}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 px-3.5 py-2 text-xs font-medium text-white/90 hover:bg-white/10"
              >
                <SlidersHorizontal className="h-3.5 w-3.5 text-gold" />
                <span>Customize</span>
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className="rounded-lg border border-white/20 bg-navy-mid px-4 py-2 text-xs font-semibold text-white hover:bg-white/10"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-lg bg-gold px-4 py-2 text-xs font-bold text-navy hover:bg-gold-bright"
              >
                Accept All
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Granular Preferences Modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/75 p-4 backdrop-blur-sm"
        >
          <div className="w-full max-w-lg rounded-2xl border border-gold/40 bg-navy p-6 text-white shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
                  Privacy Control Center
                </p>
                <h2 id="cookie-modal-title" className="mt-1 text-xl font-semibold text-white">
                  Cookie &amp; Consent Preferences
                </h2>
              </div>
              <button
                type="button"
                onClick={closeSettings}
                aria-label="Close cookie preferences"
                className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 space-y-4">
              {/* Strictly Necessary */}
              <div className="rounded-xl border border-white/12 bg-navy-mid/80 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-white">Strictly Necessary</h3>
                    <p className="mt-1 text-xs text-white/70">
                      Required for site security, accessibility state, and storing your consent choice.
                    </p>
                  </div>
                  <span className="rounded-full bg-gold/20 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase text-gold">
                    Always Active
                  </span>
                </div>
              </div>

              {/* Functional Preferences */}
              <label className="flex cursor-pointer items-start justify-between gap-4 rounded-xl border border-white/12 bg-navy-mid/80 p-4">
                <div>
                  <span className="text-sm font-semibold text-white">Functional Preferences</span>
                  <p className="mt-1 text-xs text-white/70">
                    Remembers your selected display currency (USD, EUR, GBP, AUD, CAD) across visits.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences}
                  onChange={(e) => setPreferences(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-gold"
                />
              </label>

              {/* Privacy-First Analytics */}
              <label className="flex cursor-pointer items-start justify-between gap-4 rounded-xl border border-white/12 bg-navy-mid/80 p-4">
                <div>
                  <span className="text-sm font-semibold text-white">Privacy-First Analytics</span>
                  <p className="mt-1 text-xs text-white/70">
                    Aggregated, anonymized page performance metrics to improve speed and UX. Zero ad
                    retargeting or third-party data selling.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-gold"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap justify-end gap-2.5 border-t border-white/12 pt-5">
              <button
                type="button"
                onClick={rejectNonEssential}
                className="rounded-lg border border-white/20 px-4 py-2 text-xs font-medium text-white/85 hover:bg-white/10"
              >
                Reject Optional
              </button>
              <button
                type="button"
                onClick={() => saveCustom({ analytics, preferences })}
                className="rounded-lg bg-gold px-4 py-2 text-xs font-bold text-navy hover:bg-gold-bright"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
