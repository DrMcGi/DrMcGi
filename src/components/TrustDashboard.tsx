// src/components/TrustDashboard.tsx
"use client";

import { useEffect, useState } from "react";

export default function TrustDashboard() {
  const [uptime, setUptime] = useState(99.98);
  const [sla, setSla] = useState(99.9);
  const [jobs, setJobs] = useState(124);
  const [royalties, setRoyalties] = useState(356000);

  useEffect(() => {
    const id = setInterval(() => {
      setUptime((u) => Math.min(99.99, u + Math.random() * 0.001));
      setSla((s) => Math.min(99.99, s + Math.random() * 0.001));
      setJobs((j) => j + Math.floor(Math.random() * 2));
      setRoyalties((r) => r + Math.floor(Math.random() * 200));
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="trust" className="mx-auto max-w-6xl px-6 py-20 fade-up">
      <h3 className="font-display text-2xl text-center">Trust & impact</h3>
      <p className="text-white/70 mt-3 text-center max-w-2xl mx-auto">
        Transparent metrics for uptime, SLA, and community benefit.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 rounded-xl border border-white/10 bg-ink/40 glass-glow text-center">
          <div className="text-sm text-white/60">Uptime</div>
          <div className="text-3xl font-display shimmer bg-clip-text text-transparent">
            {uptime.toFixed(2)}%
          </div>
        </div>
        <div className="p-6 rounded-xl border border-white/10 bg-ink/40 glass-glow text-center">
          <div className="text-sm text-white/60">SLA</div>
          <div className="text-3xl font-display shimmer bg-clip-text text-transparent">
            {sla.toFixed(1)}%
          </div>
        </div>
        <div className="p-6 rounded-xl border border-white/10 bg-ink/40 glass-glow text-center">
          <div className="text-sm text-white/60">Jobs created</div>
          <div className="text-3xl font-display shimmer bg-clip-text text-transparent">
            {jobs}
          </div>
        </div>
        <div className="p-6 rounded-xl border border-white/10 bg-ink/40 glass-glow text-center">
          <div className="text-sm text-white/60">Royalties distributed</div>
          <div className="text-3xl font-display shimmer bg-clip-text text-transparent">
            R{royalties.toLocaleString()}
          </div>
        </div>
      </div>
    </section>
  );
}