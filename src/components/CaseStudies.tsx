// src/components/CaseStudies.tsx
"use client";

import Image from "next/image";

export default function CaseStudies() {
  const studies = [
    {
      id: "nzuri",
      title: "☕ Nzuri Café",
      desc: "Cinematic ordering app and responsive menu with real-time pricing and premium UX. Elevated brand presence and streamlined operations.",
      stack: "Vite • Tailwind • Configurator",
      img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "trading",
      title: "📈 Trading platform",
      desc: "Secure, scalable trading environment built from scratch. Performance-first, compliance-aware, and designed for clarity and trust.",
      stack: "Node.js • React • NestJS",
      img: "https://images.unsplash.com/photo-1649972904340-9f2a2e264d8d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "skg",
      title: "🍽️ SKGrestaurant",
      desc: "A luxury dining brand’s digital flagship. Menu browsing, reservations, and storytelling with cinematic polish and brand integrity.",
      stack: "Next.js • Tailwind • Framer Motion",
      img: "https://images.unsplash.com/photo-1541544741938-0af808871cc7?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section id="case-studies" className="mx-auto max-w-6xl px-6 py-20 fade-up">
      <h3 className="font-display text-2xl text-center">Case studies</h3>
      <p className="text-white/70 mt-3 text-center max-w-2xl mx-auto">
        Flagship projects delivered with luxury-grade DNA, trust, and bulletproof polish.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {studies.map((s) => (
          <div
            key={s.id}
            className="overflow-hidden rounded-xl border border-white/10 bg-ink/40 hover:bg-ink/60 transition glass-glow"
          >
            <div className="h-48 w-full overflow-hidden">
              <Image
                src={s.img}
                alt={s.title}
                width={600}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <h4 className="font-display text-lg">{s.title}</h4>
              <p className="text-white/70 mt-2 text-sm">{s.desc}</p>
              <div className="mt-4 text-xs text-white/50">Stack: {s.stack}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}