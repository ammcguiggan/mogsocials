"use client";
import { useRef, useEffect, useState } from "react";

const values = [
  { label: "Authentic", desc: "We never fake it. Real strategy for real results." },
  { label: "Bold", desc: "No safe plays. We go where the attention is." },
  { label: "Data-Driven", desc: "Every creative decision backed by performance data." },
  { label: "Culture-First", desc: "We live on the internet so your brand stays relevant." },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-6 overflow-hidden" style={{ background: "rgba(123,47,255,0.04)" }}>
      <div ref={ref} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <div
          className="transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-50px)" }}
        >
          <p className="text-electric text-sm font-bold uppercase tracking-widest mb-3">Our Approach</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            We don't do <br />
            <span className="text-gradient">cookie-cutter.</span>
          </h2>
          <p className="text-white/60 leading-relaxed mb-6">
            MogSocials is a Gen Z-run agency that actually understands the culture. We're not
            trend-chasers — we're trend-setters. Every brand we work with gets a custom strategy
            built from scratch around their audience, voice, and goals.
          </p>
          <p className="text-white/60 leading-relaxed">
            We combine creative instinct with hard data to build social presences that people
            actually care about. Not just followers — fans.
          </p>
        </div>

        {/* Right — values grid */}
        <div
          className="grid grid-cols-2 gap-4 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(50px)", transitionDelay: "150ms" }}
        >
          {values.map(({ label, desc }) => (
            <div key={label} className="glass rounded-2xl p-5 group hover:border-white/20 transition-all">
              <p className="text-gradient font-black text-lg mb-1">{label}</p>
              <p className="text-white/50 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
