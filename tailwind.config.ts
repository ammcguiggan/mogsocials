import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blade:   "#0057ff",   // electric blue — primary accent
        acid:    "#c8ff00",   // toxic green — secondary accent
        chrome:  "#6b7280",   // silver/muted text
        steel:   "#111118",   // card surfaces
        obsidian:"#050507",   // deepest background
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(180deg, #050507 0%, #08080e 100%)",
        "card-gradient": "linear-gradient(135deg, #0057ff 0%, #c8ff00 100%)",
        "cta-gradient":  "linear-gradient(90deg,  #0057ff 0%, #c8ff00 100%)",
      },
      animation: {
        "gradient-shift": "gradientShift 6s ease infinite",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 12px rgba(0,87,255,0.3)" },
          "50%":       { boxShadow: "0 0 24px rgba(0,87,255,0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
