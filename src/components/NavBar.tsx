// src/components/NavBar.tsx
"use client";

import { useState, useEffect } from "react";
import CurrencySwitcher from "@/components/CurrencySwitcher";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#packages", label: "Packages" },
    { href: "#pricing", label: "Pricing" },
    { href: "#case-studies", label: "Case studies" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition ${
        scrolled
          ? "bg-ink/80 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
      aria-label="Primary navigation"
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo/title with synced shimmer */}
        <a href="#" className="logo-text text-lg">DrMcGi’s SaaS Co.</a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
          <CurrencySwitcher />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden px-3 py-2 rounded-md bg-ink border border-white/20 text-white hover:bg-ink/70 transition"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-ink/90 backdrop-blur">
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-sm">Currency</span>
              <CurrencySwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
