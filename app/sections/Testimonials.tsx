"use client";
import { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    quote: "We were dropping product and getting crickets. MogSocials rebuilt our whole content rhythm and our last drop sold out in under an hour.",
    name: "Jaylen O.",
    role: "Founder, Common Habit",
    avatar: "JO",
    color: "#0057ff",
  },
  {
    quote: "Our launch video felt like it was made by someone who actually drinks the product, not an agency. That's the difference. The numbers backed it up too.",
    name: "Mara C.",
    role: "Co-Founder, Drift Soda Co.",
    avatar: "MC",
    color: "#c8ff00",
  },
  {
    quote: "They get the pacing of a feed in a way most agencies don't. Every campaign felt native, never like an ad.",
    name: "Dev M.",
    role: "Founder, Bloom Theory",
    avatar: "DM",
    color: "#6b7280",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="testimonials" className="py-24 px-6" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="label-tag mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Don't take our <span className="text-gradient">word for it.</span>
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role, avatar, color }, i) => (
            <div
              key={name}
              className="glass p-8 flex flex-col gap-6 transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 120}ms`,
                borderTop: `2px solid ${color}30`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array(5).fill(0).map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill={color}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              <p className="text-white/70 text-sm leading-relaxed flex-1">"{quote}"</p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white"
                  style={{ background: `linear-gradient(135deg, ${color}, ${color}88)` }}
                >
                  {avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{name}</p>
                  <p className="text-white/40 text-xs">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
