"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface CookiePreferences {
  necessary: true;
  analytics: boolean;
  preferences: boolean;
  updatedAt?: string;
}

interface CookieConsentContextValue {
  consent: CookiePreferences | null;
  showBanner: boolean;
  showModal: boolean;
  openSettings: () => void;
  closeSettings: () => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  saveCustom: (prefs: { analytics: boolean; preferences: boolean }) => void;
}

const STORAGE_KEY = "bisen_studio_cookie_consent_v1";

const CookieConsentContext = createContext<CookieConsentContextValue>({
  consent: null,
  showBanner: false,
  showModal: false,
  openSettings: () => {},
  closeSettings: () => {},
  acceptAll: () => {},
  rejectNonEssential: () => {},
  saveCustom: () => {},
});

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<CookiePreferences | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CookiePreferences;
        setConsent(parsed);
        setShowBanner(false);
      } else {
        // Brief delay so banner does not block immediate hero paint
        const timer = window.setTimeout(() => setShowBanner(true), 900);
        return () => window.clearTimeout(timer);
      }
    } catch {
      setShowBanner(true);
    }
  }, []);

  const persist = (next: CookiePreferences) => {
    setConsent(next);
    setShowBanner(false);
    setShowModal(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage access issues
    }
  };

  const acceptAll = () =>
    persist({
      necessary: true,
      analytics: true,
      preferences: true,
      updatedAt: new Date().toISOString(),
    });

  const rejectNonEssential = () =>
    persist({
      necessary: true,
      analytics: false,
      preferences: false,
      updatedAt: new Date().toISOString(),
    });

  const saveCustom = (prefs: { analytics: boolean; preferences: boolean }) =>
    persist({
      necessary: true,
      analytics: prefs.analytics,
      preferences: prefs.preferences,
      updatedAt: new Date().toISOString(),
    });

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        showBanner,
        showModal,
        openSettings: () => setShowModal(true),
        closeSettings: () => setShowModal(false),
        acceptAll,
        rejectNonEssential,
        saveCustom,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  return useContext(CookieConsentContext);
}
