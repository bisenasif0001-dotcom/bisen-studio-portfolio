import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type CurrencyCode = "USD" | "EUR" | "GBP" | "AUD" | "CAD";

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  label: string;
  region: string;
  rateFromUSD: number;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  USD: { code: "USD", symbol: "$", label: "USD ($)", region: "United States", rateFromUSD: 1 },
  EUR: { code: "EUR", symbol: "€", label: "EUR (€)", region: "Europe (EU)", rateFromUSD: 0.92 },
  GBP: { code: "GBP", symbol: "£", label: "GBP (£)", region: "United Kingdom", rateFromUSD: 0.79 },
  AUD: { code: "AUD", symbol: "A$", label: "AUD (A$)", region: "Australia", rateFromUSD: 1.52 },
  CAD: { code: "CAD", symbol: "C$", label: "CAD (C$)", region: "Canada", rateFromUSD: 1.38 },
};

export const CURRENCY_RATE_METADATA = {
  baseCurrency: "USD" as CurrencyCode,
  source: "Mid-market FX benchmark",
  referenceDate: "Nov 2026 (indicative reference)",
  disclaimer:
    "Base pricing is denominated in USD. Non-USD figures (EUR, GBP, AUD, CAD) use indicative reference rates rounded for readability. Final invoices are issued in USD or your agreed local currency at the live settlement rate on the invoice date.",
};

export function formatMoney(usdAmount: number, currency: CurrencyCode): string {
  const cfg = CURRENCIES[currency];
  const converted = usdAmount * cfg.rateFromUSD;
  // Round gracefully for clean agency pricing display
  const rounded =
    converted >= 1000
      ? Math.round(converted / 50) * 50
      : converted >= 100
        ? Math.round(converted / 10) * 10
        : Math.round(converted / 5) * 5;

  return `${cfg.symbol}${rounded.toLocaleString("en-US")}`;
}
