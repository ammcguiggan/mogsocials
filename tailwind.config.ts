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
        electric: "#3ad6dd",
        neonpink: "#e8487e",
        vividorange: "#e8723f",
        ultraviolet: "#7d5fd1",
        limegreen: "#6be383",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
        "card-gradient":
          "linear-gradient(135deg, #e8487e 0%, #7d5fd1 50%, #3ad6dd 100%)",
        "cta-gradient":
          "linear-gradient(90deg, #e8723f 0%, #e8487e 50%, #7d5fd1 100%)",
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
          "0%, 100%": { boxShadow: "0 0 16px rgba(125,95,209,0.25)" },
          "50%": { boxShadow: "0 0 28px rgba(232,72,126,0.4)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
