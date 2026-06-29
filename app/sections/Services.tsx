"use client";
import { useRef, useEffect, useState } from "react";

const services = [
  {
    icon: "✦",
    title: "Content Strategy",
    desc: "Data-backed content calendars built for virality. We study the algorithm so you don't have to.",
    gradient: "from-neonpink to-ultraviolet",
    glow: "rgba(255,45,120,0.3)",
  },
  {
    icon: "◈",
    title: "Short-Form Video",
    desc: "TikTok, Reels, Shorts — we craft hooks, edits, and trends that stop the scroll cold.",
    gradient: "from-ultraviolet to-electric",
    glow: "rgba(123,47,255,0.3)",
  },
  {
    icon: "⬡",
    title: "Community Building",
    desc: "Real engagement, real community. We turn followers into loyal brand advocates.",
    gradient: "from-electric to-limegreen",
    glow: "rgba(0,245,255,0.3)",
  },
  {
    icon: "◎",
    title: "Paid Social Ads",
    desc: "ROI-positive ad campaigns on Meta, TikTok, and Snap — creative that converts.",
    gradient: "from-vividorange to-neonpink",
    glow: "rgba(255,107,53,0.3)",
  },
  {
    icon: "⬟",
    title: "Influencer Collab",
    desc: "Micro to macro — we match your brand with creators whose audience is your audience.",
    gradient: "from-limegreen to-electric",
    glow: "rgba(57,255,20,0.3)",
  },
  {
    icon: "◉",
    title: "Brand Identity",
    desc: "Visuals, voice, vibe. We build identities that are unmistakably Gen Z and unmistakably you.",
    gradient: "from-neonpink to-vividorange",
    glow: "rgba(255,45,120,0.3)",
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass rounded-2xl p-6 cursor-default transition-all duration-500 group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${index * 80}ms`,
        boxShadow: hovered ? `0 20px 60px ${service.glow}` : "none",
      }}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 bg-gradient-to-br ${service.gradient} transition-transform duration-300 ${hovered ? "scale-110 rotate-6" : ""}`}
      >
        {service.icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
      <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
      <div
        className={`mt-4 text-xs font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
      >
        Learn more →
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-neonpink text-sm font-bold uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Services that <span className="text-gradient">slap.</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Full-stack social media management for brands that refuse to be mid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
