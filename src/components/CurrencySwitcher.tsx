// src/components/CurrencySwitcher.tsx
"use client";

import { useCurrency, Currency } from "@/context/CurrencyContext";

export default function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value as Currency)}
      className="bg-ink border border-white/20 text-white rounded px-2 py-1 text-sm hover:border-white/40 transition"
      aria-label="Select currency"
    >
      <option value="ZAR">ZAR (R)</option>
      <option value="USD">USD ($)</option>
      <option value="EUR">EUR (€)</option>
      <option value="GBP">GBP (£)</option>
    </select>
  );
}
