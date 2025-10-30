"use client";

import { useCurrency } from "@/context/CurrencyContext";

type Package = {
  id: string;
  name: string;
  tagline: string;
  priceZAR: number;
  features: string[];
};

const packages: Package[] = [
  {
    id: "signature",
    name: "Signature",
    tagline: "From 55,000 ZAR — Most popular",
    priceZAR: 55000,
    features: ["responsive", "seoOptimization", "analytics"],
  },
  {
    id: "concierge",
    name: "Concierge",
    tagline: "From 95,000 ZAR",
    priceZAR: 95000,
    features: ["luxuryUI", "cmsIntegration", "automationDevOps", "scalableApi"],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "From 145,000 ZAR",
    priceZAR: 145000,
    features: [
      "mvpCore",
      "multiTenantSupport",
      "aiConcierge",
      "enterpriseWorkflows",
      "paymentSubscriptions",
    ],
  },
];

export default function PackageSelector({
  onSelect,
  selectedId,
}: {
  onSelect: (features: string[], id: string) => void;
  selectedId: string | null;
}) {
  const { format } = useCurrency();

  return (
    <section id="packages" className="mx-auto max-w-6xl px-6 py-20 fade-up">
      <h3 className="section-title font-serif text-2xl text-center relative">
        Packages
      </h3>
      <p className="text-white/70 mt-3 text-center max-w-2xl mx-auto">
        Choose a launchpad. Every package is a foundation for trust, polish, and
        growth.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg) => {
          const active = selectedId === pkg.id;
          return (
            <div
              key={pkg.id}
              role="button"
              tabIndex={0}
              onClick={() => onSelect(pkg.features, pkg.id)}
              onKeyDown={(e) =>
                e.key === "Enter" && onSelect(pkg.features, pkg.id)
              }
              className={`cursor-pointer p-6 rounded-xl border bg-ink/40 transition flex flex-col glass-glow
                ${
                  active
                    ? "border-[--neonBlue] shadow-neonBlue"
                    : "border-white/10 hover:bg-ink/60"
                }`}
            >
              <h4 className="font-display text-xl">{pkg.name}</h4>
              <p className="text-white/70 text-sm mt-1">{pkg.tagline}</p>
              <div className="text-2xl font-display mt-4 text-(--neonBlue)">
                {format(pkg.priceZAR)}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/70 flex-1">
                {pkg.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              {active && (
                <div className="mt-4 text-xs text-(--neonBlue)">Selected</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
