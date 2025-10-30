// src/components/TailoredPackages.tsx
"use client";

export default function TailoredPackages() {
  const items = [
    { icon: "🌐", title: "Website build", desc: "Luxury websites with cinematic polish, locked tokens, and SEO foundation." },
    { icon: "⚡", title: "SaaS / web app", desc: "From MVP to enterprise — bulletproof architecture, automation, and scale." },
    { icon: "🛠️", title: "Custom applications", desc: "Tailored builds with integrations, AI concierge, and enterprise workflows." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 fade-up">
      <h3 className="section-title font-serif text-2xl text-center relative">Tailored packages</h3>
      <p className="text-white/70 mt-3 text-center max-w-2xl mx-auto">
        Select a package to auto‑configure features; refine anytime in the configurator.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((i) => (
          <div key={i.title} className="p-6 rounded-xl border border-white/10 bg-ink/40 glass-glow text-center">
            <div className="text-3xl">{i.icon}</div>
            <h4 className="font-display text-lg mt-2">{i.title}</h4>
            <p className="text-white/70 text-sm mt-2">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
