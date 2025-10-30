"use client";

import { useCurrency } from "@/context/CurrencyContext";

type Tier = {
  id: string;
  name: string;
  fromZAR: number;
  tag?: string;
  features: string[];
};

const tiers: Tier[] = [
  {
    id: "signature",
    name: "Signature",
    fromZAR: 55000,
    tag: "Most popular",
    features: ["responsive", "seoOptimization", "analytics"],
  },
  {
    id: "concierge",
    name: "Concierge",
    fromZAR: 95000,
    features: ["luxuryUI", "cmsIntegration", "automationDevOps", "scalableApi"],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    fromZAR: 145000,
    features: [
      "mvpCore",
      "multiTenantSupport",
      "aiConcierge",
      "paymentSubscriptions",
      "enterpriseWorkflows",
    ],
  },
];

export default function PricingTiers({
  onSelect,
  selectedId,
}: {
  onSelect: (features: string[], id: string) => void;
  selectedId: string | null;
}) {
  const { format } = useCurrency();

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-20 fade-up">
      <h3 className="section-title font-serif text-2xl text-center relative">
        Pricing tiers
      </h3>
      <p className="text-white/70 mt-3 text-center max-w-2xl mx-auto">
        Choose a tier to auto‑select recommended features; refine with packages.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier) => {
          const active = selectedId === tier.id;
          return (
            <div
              key={tier.id}
              role="button"
              tabIndex={0}
              onClick={() => onSelect(tier.features, tier.id)}
              onKeyDown={(e) =>
                e.key === "Enter" && onSelect(tier.features, tier.id)
              }
              className={`cursor-pointer p-6 rounded-xl border bg-ink/40 transition flex flex-col glass-glow
                ${
                  active
                    ? "border-[--neonBlue] shadow-neonBlue"
                    : "border-white/10 hover:bg-ink/60"
                }`}
            >
              <div className="flex items-center justify-between">
                <h4 className="font-display text-xl">{tier.name}</h4>
                {tier.tag && (
                  <span className="text-xs text-white/60 border border-white/20 px-2 py-1 rounded">
                    {tier.tag}
                  </span>
                )}
              </div>
              <div className="text-2xl font-display shimmer bg-clip-text text-transparent mt-2">
                From {format(tier.fromZAR)}
              </div>
              {active && (
                <div className="mt-4 text-xs text-(--neonBlue)">Selected</div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-10">
        <a href="#contact" className="btn-primary">
          Request a blueprint
        </a>
      </div>
    </section>
  );
}
