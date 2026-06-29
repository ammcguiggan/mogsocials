"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!blobRef.current) return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      blobRef.current.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(125,95,209,0.22) 0%, rgba(232,72,126,0.12) 40%, transparent 70%)`;
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-28 pb-20"
      style={{
        background: "linear-gradient(135deg, #0f0c29 0%, #1a0533 50%, #0a0a0f 100%)",
      }}
    >
      {/* Interactive gradient blob */}
      <div
        ref={blobRef}
        className="absolute inset-0 transition-all duration-300 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(125,95,209,0.22) 0%, rgba(232,72,126,0.12) 40%, transparent 70%)",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-15 animate-float"
        style={{ background: "radial-gradient(circle, #7d5fd1, transparent)" }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 animate-float"
        style={{ background: "radial-gradient(circle, #e8487e, transparent)", animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full opacity-10 animate-float"
        style={{ background: "radial-gradient(circle, #3ad6dd, transparent)", animationDelay: "3s" }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center glass rounded-full px-4 py-2 mb-8 text-sm font-medium text-white/80">
          Gen Z based social agency
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
          <span className="text-white">Social media that</span>
          <br />
          <span className="text-gradient">hits different.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          We grow Gen Z brands through authentic content, viral strategies, and
          community-first thinking. No cringe. Just results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white text-lg
              bg-gradient-to-r from-neonpink via-ultraviolet to-electric
              hover:scale-105 active:scale-95 transition-all duration-200
              glow-pink animate-pulse-glow"
          >
            Start Growing ✦
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white text-lg glass
              hover:bg-white/10 transition-all duration-200 hover:scale-105"
          >
            See Our Work →
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 mb-8 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { val: "200+", label: "Brands Grown" },
            { val: "50M+", label: "Impressions" },
            { val: "98%", label: "Client Retention" },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl md:text-3xl font-black text-gradient">{val}</p>
              <p className="text-xs text-white/50 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator — hidden on short viewports so it never collides with the stats row above */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/30 text-xs animate-bounce">
        <span>Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="8" cy="8" r="2.5" fill="currentColor">
            <animate attributeName="cy" values="8;14;8" dur="1.5s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>
    </section>
  );
}
