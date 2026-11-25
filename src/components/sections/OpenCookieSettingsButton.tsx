"use client";

import React from "react";
import { SlidersHorizontal } from "lucide-react";
import { useCookieConsent } from "@/components/context/CookieConsentContext";

export function OpenCookieSettingsButton() {
  const { openSettings, consent } = useCookieConsent();

  return (
    <div className="rounded-2xl border border-navy/12 bg-surface p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-navy">Current Browser Consent State</p>
          <p className="mt-1 font-mono text-xs text-ink-muted">
            Necessary: ON · Preferences: {consent?.preferences ? "ON" : "OFF"} · Analytics:{" "}
            {consent?.analytics ? "ON" : "OFF"}
          </p>
        </div>
        <button
          type="button"
          onClick={openSettings}
          className="inline-flex items-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-navy-mid"
        >
          <SlidersHorizontal className="h-3.5 w-3.5 text-gold" />
          <span>Update Cookie Preferences</span>
        </button>
      </div>
    </div>
  );
}
