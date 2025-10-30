"use client";

import { useMemo } from "react";
import { features } from "@/utils/features";
import { formatZAR } from "@/utils/formatZAR";

export default function WhatsAppButton({
  selected,
}: {
  selected?: Set<string>;
}) {
  // Compute total for prefilled message
  const total = useMemo(() => {
    if (!selected) return 0;
    let base = 0;
    features.forEach((f) => {
      if (selected.has(f.id)) base += f.price;
    });
    const hasUX = selected.has("luxuryUI");
    const hasAI = selected.has("ai");
    const premium = (hasUX && hasAI ? 0.08 : 0.05) * base;
    return Math.round(base + premium);
  }, [selected]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const picks = selected ? [...selected] : [];
    const msg = encodeURIComponent(
      `Blueprint request:\nFeatures: ${picks.join(", ")}\nEstimated: ${formatZAR(
        total
      )}\nEmail: giftk.rantho@gmail\nLinkedIn: www.linkedin.com/in/gift-rantho\nGitHub: https://github.com/DrMcGi`
    );
    const phone = "27649211745";
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
  };

  return (
    <a
      onClick={handleClick}
      href="#"
      id="waButton"
      className="fixed bottom-6 right-6 z-50 px-5 py-4 rounded-full bg-[#25D366] text-white shadow-xl flex items-center gap-2 font-medium hover:scale-105 transition-transform"
    >
      <span>💬</span> Concierge
    </a>
  );
}
