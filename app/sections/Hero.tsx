"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-28 pb-20"
      style={{ background: "#050507" }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      {/* Vertical accent lines — left and right */}
      <div className="absolute top-0 left-[12%] w-px h-full bg-white/5 hidden lg:block" />
      <div className="absolute top-0 right-[12%] w-px h-full bg-white/5 hidden lg:block" />

      {/* Horizontal rule at 40% height */}
      <div className="absolute top-[40%] left-0 right-0 h-px bg-white/4 hidden lg:block" />

      {/* Blade blue corner accent — top left */}
      <div
        className="absolute top-0 left-0 w-64 h-px"
        style={{ background: "linear-gradient(90deg, #0057ff, transparent)" }}
      />
      <div
        className="absolute top-0 left-0 h-64 w-px"
        style={{ background: "linear-gradient(180deg, #0057ff, transparent)" }}
      />

      {/* Acid green corner accent — bottom right */}
      <div
        className="absolute bottom-0 right-0 w-64 h-px"
        style={{ background: "linear-gradient(270deg, #c8ff00, transparent)" }}
      />
      <div
        className="absolute bottom-0 right-0 h-64 w-px"
        style={{ background: "linear-gradient(0deg, #c8ff00, transparent)" }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Status pill — sharp, no dot */}
        <div className="inline-flex items-center border border-white/10 px-4 py-1.5 mb-10 label-tag">
          Gen Z based social agency
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-8">
          <span className="text-white block">Social media that</span>
          <span className="text-gradient block mt-1">hits different.</span>
        </h1>

        <p className="text-base md:text-lg text-white/40 max-w-xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
          We grow Gen Z brands through authentic content, viral strategies, and
          community-first thinking. No cringe. Just results.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#contact" className="btn-primary">
            Start Growing →
          </a>
          <a href="#portfolio" className="btn-sharp text-white">
            See Our Work
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 mb-8 grid grid-cols-3 gap-0 max-w-lg mx-auto border border-white/08 divide-x divide-white/08">
          {[
            { val: "200+", label: "Brands Grown" },
            { val: "50M+", label: "Impressions" },
            { val: "98%",  label: "Client Retention" },
          ].map(({ val, label }) => (
            <div key={label} className="text-center py-5 px-4">
              <p className="text-xl md:text-2xl font-black text-white tracking-tight">{val}</p>
              <p className="label-tag mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator — md+ only */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/20 text-xs label-tag animate-bounce">
        <span>Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="1" y="1" width="14" height="22" rx="0" stroke="currentColor" strokeWidth="1"/>
          <circle cx="8" cy="8" r="2" fill="currentColor">
            <animate attributeName="cy" values="8;14;8" dur="1.5s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>
    </section>
  );
}
