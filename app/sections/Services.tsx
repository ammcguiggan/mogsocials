"use client";
import { useRef, useEffect, useState } from "react";

// Each icon is a purpose-built SVG matched to the service.
// color/glow are used for the stroke tint and hover shadow.
const services = [
  {
    title: "Content Strategy",
    desc: "Data-backed content calendars built for virality. We study the algorithm so you don't have to.",
    gradient: "from-blade to-acid",
    color: "#0057ff",
    glow: "rgba(0,87,255,0.2)",
    icon: (
      // Bar chart with an upward trend line
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="16" width="5" height="10" rx="1.5" />
        <rect x="11" y="10" width="5" height="16" rx="1.5" />
        <rect x="20" y="4" width="5" height="22" rx="1.5" />
        <polyline points="4,14 13,8 22,2" strokeDasharray="2 2" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Short-Form Video",
    desc: "TikTok, Reels, Shorts — we craft hooks, edits, and trends that stop the scroll cold.",
    gradient: "from-blade to-acid",
    color: "#c8ff00",
    glow: "rgba(200,255,0,0.15)",
    icon: (
      // Play button inside a rounded frame with film notch accents
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="24" height="20" rx="4" />
        <line x1="2" y1="8" x2="6" y2="8" />
        <line x1="22" y1="8" x2="26" y2="8" />
        <line x1="2" y1="20" x2="6" y2="20" />
        <line x1="22" y1="20" x2="26" y2="20" />
        <polygon points="11,10 20,14 11,18" fill="currentColor" stroke="none" opacity="0.9" />
      </svg>
    ),
  },
  {
    title: "Community Building",
    desc: "Real engagement, real community. We turn followers into loyal brand advocates.",
    gradient: "from-blade to-acid",
    color: "#0057ff",
    glow: "rgba(0,87,255,0.2)",
    icon: (
      // Three overlapping user circles
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="4" />
        <path d="M2 24c0-4 3.6-7 8-7" />
        <circle cx="20" cy="10" r="4" />
        <path d="M18 17c4.4 0 8 3 8 7" />
        <path d="M13 17c1 .4 1.8.9 2.5 1.6" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Paid Social Ads",
    desc: "ROI-positive ad campaigns on Meta, TikTok, and Snap — creative that converts.",
    gradient: "from-blade to-acid",
    color: "#c8ff00",
    glow: "rgba(200,255,0,0.15)",
    icon: (
      // Cursor clicking a target/bullseye
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
        <line x1="20" y1="20" x2="26" y2="26" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    title: "Influencer Collab",
    desc: "Micro to macro — we match your brand with creators whose audience is your audience.",
    gradient: "from-blade to-acid",
    color: "#0057ff",
    glow: "rgba(0,87,255,0.2)",
    icon: (
      // Two nodes connected by a link — collaboration / network
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="14" r="4" />
        <circle cx="22" cy="6" r="4" />
        <circle cx="22" cy="22" r="4" />
        <line x1="10" y1="12" x2="18" y2="8" />
        <line x1="10" y1="16" x2="18" y2="20" />
      </svg>
    ),
  },
  {
    title: "Brand Identity",
    desc: "Visuals, voice, vibe. We build identities that are unmistakably Gen Z and unmistakably you.",
    gradient: "from-blade to-acid",
    color: "#c8ff00",
    glow: "rgba(200,255,0,0.15)",
    icon: (
      // Pen nib / design tool
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 24 L12 6 L20 14 Z" />
        <path d="M12 6 L20 14" />
        <line x1="4" y1="24" x2="10" y2="18" />
        <circle cx="21" cy="7" r="2.5" />
        <line x1="4" y1="24" x2="2" y2="26" strokeOpacity="0.4" />
      </svg>
    ),
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
      className="glass p-6 cursor-default transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${index * 80}ms`,
        boxShadow: hovered ? `0 20px 60px ${service.glow}` : "none",
      }}
    >
      {/* Icon container — circular halo on hover */}
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300"
        style={{
          color: service.color,
          background: hovered
            ? `radial-gradient(circle, ${service.color}18 0%, transparent 80%)`
            : "rgba(255,255,255,0.04)",
          boxShadow: hovered ? `0 0 20px ${service.color}30` : "none",
          transform: hovered ? "scale(1.08)" : "scale(1)",
        }}
      >
        {service.icon}
      </div>

      <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
      <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>

      <a
        href="#contact"
        className={`mt-4 inline-block text-xs font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent transition-opacity duration-300`}
        style={{ opacity: hovered ? 1 : 0 }}
      >
        Learn more →
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="label-tag mb-3">What We Do</p>
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
