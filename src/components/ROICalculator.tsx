// src/components/ROICalculator.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useCurrency } from "@/context/CurrencyContext";

function useCountUp(target: number, duration = 800) {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    startRef.current = null;

    const step = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const progress = Math.min(1, (ts - startRef.current) / duration);
      setValue(progress * target);
      if (progress < 1) requestAnimationFrame(step);
    };

    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [target, duration]);

  return value;
}

export default function ROICalculator({ investment: initialInvestment }: { investment: number }) {
  const { format } = useCurrency();

  const [investment, setInvestment] = useState<number>(initialInvestment);
  const [expectedReturn, setExpectedReturn] = useState<number>(initialInvestment * 3);
  const [years, setYears] = useState<number>(2);

  const roiRaw = ((expectedReturn - investment) / investment) * 100;
  const annualizedRaw = (Math.pow(expectedReturn / investment, 1 / years) - 1) * 100;

  const roi = useCountUp(roiRaw, 900);
  const annualized = useCountUp(annualizedRaw, 900);

  return (
    <section id="roi" className="mx-auto max-w-6xl px-6 py-20 fade-up">
      <h3 className="font-display text-2xl text-center">ROI Calculator</h3>
      <p className="text-white/70 mt-3 text-center max-w-2xl mx-auto">
        Estimate your return on investment based on spend, expected return, and timeframe.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="p-6 rounded-xl border border-white/10 bg-ink/40 glass-glow">
          <h4 className="font-display text-lg mb-4">Inputs</h4>

          <label className="block text-sm text-white/70 mb-2">Investment</label>
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-md bg-ink border border-white/20 text-white mb-4"
          />

          <label className="block text-sm text-white/70 mb-2">Expected Return</label>
          <input
            type="number"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-md bg-ink border border-white/20 text-white mb-4"
          />

          <label className="block text-sm text-white/70 mb-2">Years</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-md bg-ink border border-white/20 text-white mb-4"
          />

          <div className="flex justify-between mt-6">
            <button type="button" className="btn-secondary">Back</button>
            <button type="button" className="btn-gold">Next</button>
          </div>
        </div>

        {/* Results */}
        <div className="p-6 rounded-xl border border-white/10 bg-ink/40 glass-glow">
          <h4 className="font-display text-lg mb-4">Results</h4>

          <div className="space-y-4">
            <div>
              <div className="text-sm text-white/70">Investment</div>
              <div className="text-xl font-medium">{format(investment)}</div>
            </div>

            <div>
              <div className="text-sm text-white/70">Expected Return</div>
              <div className="text-xl font-medium">{format(expectedReturn)}</div>
            </div>

            <div>
              <div className="text-sm text-white/70">ROI</div>
              <div className="text-2xl font-display shimmer bg-clip-text text-transparent">
                {roi.toFixed(1)}%
              </div>
            </div>

            <div>
              <div className="text-sm text-white/70">Annualized ROI</div>
              <div className="text-2xl font-display shimmer bg-clip-text text-transparent">
                {annualized.toFixed(1)}%
              </div>
            </div>
          </div>

          <a href="#contact" className="btn-primary mt-8 inline-block">Request a blueprint</a>
        </div>
      </div>
    </section>
  );
}