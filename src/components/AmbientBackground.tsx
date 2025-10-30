"use client";

import { useEffect, useRef } from "react";

export default function AmbientBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      el.style.background = `radial-gradient(600px circle at ${clientX}px ${clientY}px, rgba(255,255,255,0.05), transparent 80%)`;
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-0 transition duration-300 pointer-events-none"
    />
  );
}
