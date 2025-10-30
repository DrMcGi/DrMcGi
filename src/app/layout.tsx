// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { CurrencyProvider } from "@/context/CurrencyContext";
import CursorAura from "@/components/CursorAura";

export const metadata: Metadata = {
  title: "DrMcGi’s SaaS Co.",
  description: "Luxury SaaS architecture built for trust and impact.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-ink text-white antialiased">
        <CurrencyProvider>
          <CursorAura />
          {children}
        </CurrencyProvider>
      </body>
    </html>
  );
}
