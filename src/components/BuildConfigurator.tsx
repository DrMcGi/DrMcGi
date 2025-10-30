// src/components/BuildConfigurator.tsx
"use client";

import { Feature, features } from "@/utils/features";
import { useCurrency } from "@/context/CurrencyContext";

export default function BuildConfigurator({
  selected,
  onChange,
}: {
  selected: Set<string>;
  onChange: (next: Set<string>) => void;
}) {
  const { format } = useCurrency();

  const toggleFeature = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    onChange(next);
  };

  // Compute totals
  let base = 0;
  features.forEach((f: Feature) => {
    if (selected.has(f.id)) {
      base += f.price;
    }
  });
  const hasUX = selected.has("luxuryUI");
  const hasAI = selected.has("ai");
  const premium = (hasUX && hasAI ? 0.08 : 0.05) * base;
  const total = Math.round(base + premium);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 fade-up">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature modules */}
        <div className="md:col-span-2 p-6 rounded-xl border border-white/10 bg-ink/40 glass-glow">
          <h3 className="font-display text-xl">Custom build configurator</h3>
          <p className="text-white/80 mt-2">
            Select features. See impact. Request a blueprint.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f: Feature) => {
              const active = selected.has(f.id);
              return (
                <button
                  key={f.id}
                  onClick={() => toggleFeature(f.id)}
                  className={`text-left p-4 rounded-lg border transition ${
                    active
                      ? "border-[rgb(var(--glowGold1))] bg-ink shadow-[0_0_20px_rgba(245,208,111,0.3)]"
                      : "border-white/10 bg-ink/30 hover:border-white/20 hover:bg-ink/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{f.name}</span>
                    <span className="text-white/60 text-sm">
                      {format(f.price)}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm mt-2">{f.desc}</p>
                  <div className="mt-2 text-xs text-white/50">
                    Category: {f.category}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Estimate box */}
        <div className="p-6 rounded-xl border border-white/10 bg-ink/40 glass-glow">
          <h4 className="font-display text-lg">Estimated investment</h4>
          <div className="mt-4">
            <div className="text-3xl font-display shimmer bg-clip-text text-transparent">
              {format(total)}
            </div>
            <p className="text-white/60 mt-3 text-xs">
              Tip: Packages and tiers auto‑add features; fine‑tune everything here.
            </p>
            <a href="#contact" className="mt-6 inline-block px-4 py-2 rounded-md bg-white text-ink text-sm font-medium hover:opacity-90 transition">
              Request a blueprint
            </a>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="mt-12 flex justify-between">
        <button className="px-6 py-2 rounded-md bg-ink border border-white/20 text-white font-medium hover:bg-ink/70 transition">
          Back
        </button>
        <button className="px-6 py-2 rounded-md bg-glowGold1 text-ink font-semibold hover:bg-glowGold2 transition">
          Next
        </button>
      </div>
    </section>
  );
}
