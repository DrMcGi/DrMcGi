"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 mt-20">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/60">
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          {/* Brand + Contacts */}
          <div>
            <div className="logo-text text-lg">DrMcGi’s SaaS Co.</div>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href="mailto:giftk.rantho@gmail"
                className="flex items-center gap-2 hover:text-glowGold1 transition"
              >
                ✉️ giftk.rantho@gmail
              </a>
              <a
                href="https://wa.me/27649211745"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-glowGold1 transition"
              >
                📱 +27 64 921 1745
              </a>
              <a
                href="https://github.com/DrMcGi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-glowGold1 transition"
              >
                💻 github.com/DrMcGi
              </a>
              <a
                href="https://www.linkedin.com/in/gift-rantho"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-glowGold1 transition"
              >
                🔗 linkedin.com/in/gift-rantho
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <div className="text-white">Quick links</div>
            <div className="flex flex-wrap gap-4">
              <a href="#packages" className="hover:text-white transition">
                Packages
              </a>
              <a href="#pricing" className="hover:text-white transition">
                Pricing
              </a>
              <a href="#case-studies" className="hover:text-white transition">
                Case studies
              </a>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-xs">
          © {year} DrMcGi’s SaaS Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
