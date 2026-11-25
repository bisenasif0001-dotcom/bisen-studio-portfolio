"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CURRENCIES, type CurrencyCode, formatMoney } from "@/lib/utils";

interface CurrencyContextValue {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  format: (usdAmount: number) => string;
  symbol: string;
}

const CurrencyContext = createContext<CurrencyContextValue>({
  currency: "USD",
  setCurrency: () => {},
  format: (amt) => formatMoney(amt, "USD"),
  symbol: "$",
});

const STORAGE_KEY = "bisen_studio_currency";

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("USD");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as CurrencyCode | null;
      if (saved && saved in CURRENCIES) {
        setCurrencyState(saved);
      }
    } catch {
      // Ignore storage access restrictions
    }
  }, []);

  const setCurrency = (code: CurrencyCode) => {
    setCurrencyState(code);
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // Ignore storage access restrictions
    }
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        format: (usdAmount: number) => formatMoney(usdAmount, currency),
        symbol: CURRENCIES[currency].symbol,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
