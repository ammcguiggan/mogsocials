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
        electric: "#00f5ff",
        neonpink: "#ff2d78",
        vividorange: "#ff6b35",
        ultraviolet: "#7b2fff",
        limegreen: "#39ff14",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
        "card-gradient":
          "linear-gradient(135deg, #ff2d78 0%, #7b2fff 50%, #00f5ff 100%)",
        "cta-gradient":
          "linear-gradient(90deg, #ff6b35 0%, #ff2d78 50%, #7b2fff 100%)",
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
          "0%, 100%": { boxShadow: "0 0 20px rgba(123,47,255,0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(255,45,120,0.7)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
