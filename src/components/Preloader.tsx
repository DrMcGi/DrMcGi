// src/components/Preloader.tsx
"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setDone(true), 600);
    return () => clearTimeout(id);
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-ink">
      <div className="logo-text text-2xl">DrMcGi’s SaaS Co.</div>
    </div>
  );
}