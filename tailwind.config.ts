// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        champagne: "rgb(var(--champagne) / <alpha-value>)",
        glowGold1: "rgb(var(--glowGold1) / <alpha-value>)",
        neonBlue: "#3b82f6",
        navy: "#0f172a",
      },
      boxShadow: {
        glowGold: "0 0 28px rgba(245, 208, 111, 0.35)",
        neonBlue: "0 0 18px rgba(59,130,246,0.9), 0 0 36px rgba(59,130,246,0.7)",
        innerSoft: "inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
      },
      keyframes: {
        sweep: { "0%": { transform: "translateX(-100%)" }, "100%": { transform: "translateX(100%)" } },
        shimmerText: { "0%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" }, "100%": { backgroundPosition: "0% 50%" } },
        pulse: { "0%,100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.03)" } },
      },
      animation: {
        sweep: "sweep 1.8s linear infinite",
        shimmerText: "shimmerText 6s linear infinite",
        pulse: "pulse 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
