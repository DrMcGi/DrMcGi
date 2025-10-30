// src/context/CurrencyContext.tsx
"use client";

import { createContext, useContext, useMemo, useState } from "react";

export type Currency = "ZAR" | "USD" | "EUR" | "GBP";

type CurrencyContextValue = {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  format: (amountZAR: number) => string;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

const rates: Record<Currency, number> = { ZAR: 1, USD: 0.055, EUR: 0.051, GBP: 0.043 };
const symbols: Record<Currency, string> = { ZAR: "R", USD: "$", EUR: "€", GBP: "£" };

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("ZAR");

  const value = useMemo<CurrencyContextValue>(() => {
    const format = (amountZAR: number) => {
      const converted = amountZAR * rates[currency];
      const symbol = symbols[currency];
      const display = currency === "ZAR" ? Math.round(converted).toLocaleString() : converted.toFixed(2);
      return `${symbol}${display}`;
    };
    return { currency, setCurrency, format };
  }, [currency]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}