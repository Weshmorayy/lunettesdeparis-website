import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paris: {
          dark: "#071224",
          navy: "#0A1931",
          royal: "#003366",
          blue: "#1565C0",
          sky: "#E3F2FD",
          ice: "#F0F7FF",
          red: "#D90429",
          redHover: "#EF233C",
          yellow: "#FFB703",
          yellowLight: "#FFF3CD",
          gold: "#D4AF37",
          charcoal: "#1E293B",
          slate: "#64748B",
          light: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(10, 25, 49, 0.08)',
        'float': '0 20px 40px -15px rgba(10, 25, 49, 0.12)',
        'glow-red': '0 0 25px rgba(217, 4, 41, 0.35)',
        'glow-blue': '0 0 25px rgba(21, 101, 192, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
