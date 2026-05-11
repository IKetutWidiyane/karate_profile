import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bkc: {
          red: "#dc2626",
          black: "#111827",
          graphite: "#0b1120",
          gold: "#f59e0b"
        }
      },
      boxShadow: {
        glow: "0 18px 60px rgba(220, 38, 38, 0.22)",
        panel: "0 20px 60px rgba(0, 0, 0, 0.28)"
      },
      backgroundImage: {
        "dojo-pattern":
          "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
        "red-radial":
          "radial-gradient(circle at top left, rgba(220,38,38,.28), transparent 34%), radial-gradient(circle at bottom right, rgba(245,158,11,.12), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;
