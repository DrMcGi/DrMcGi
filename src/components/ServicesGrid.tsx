"use client";

import {
  Rocket,
  Code,
  Palette,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "SaaS Architecture",
    description: "Scalable, secure, and luxury-grade backend systems.",
  },
  {
    icon: Code,
    title: "Full-stack Development",
    description: "Frontend polish meets backend precision.",
  },
  {
    icon: Palette,
    title: "UI/UX Concierge",
    description: "Design that feels intentional, editorial, and emotionally resonant.",
  },
  {
    icon: Users,
    title: "Community Platforms",
    description: "Royalty-linked systems for mines, magoshi, and local upliftment.",
  },
];

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {services.map(({ icon: Icon, title, description }, index) => (
        <div
          key={index}
          className="group bg-white/5 border border-white/10 rounded-xl p-6 text-left hover:border-yellow-400 transition duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <Icon className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-white">{title}</h3>
          </div>
          <p className="text-sm text-white/70">{description}</p>
        </div>
      ))}
    </div>
  );
}
