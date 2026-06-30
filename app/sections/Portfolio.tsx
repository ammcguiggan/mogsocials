"use client";
import { useState, useRef, useEffect } from "react";

const projects = [
  {
    brand: "Common Habit",
    category: "Streetwear",
    result: "+430% TikTok growth in 60 days",
    gradient: "from-blade to-acid",
    tag: "Short-Form Video",
  },
  {
    brand: "Drift Soda Co.",
    category: "Beverage",
    result: "2.1M impressions on launch campaign",
    gradient: "from-blade to-acid",
    tag: "Campaign Strategy",
  },
  {
    brand: "Nightcap Collective",
    category: "Independent Label",
    result: "80K new followers in 30 days",
    gradient: "from-blade to-acid",
    tag: "Community Building",
  },
  {
    brand: "Bloom Theory",
    category: "Skincare",
    result: "340% ROAS on paid social",
    gradient: "from-blade to-acid",
    tag: "Paid Social",
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="label-tag mb-3">Results</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            The <span className="text-gradient">proof</span> is in the numbers.
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {projects.map(({ brand, category, result, gradient, tag }, i) => (
            <div
              key={brand}
              className="relative overflow-hidden glass group cursor-default transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.97)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${gradient}`} />

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-2xl font-black text-white">{brand}</p>
                    <p className="text-white/40 text-sm">{category}</p>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-white`}>
                    {tag}
                  </span>
                </div>

                <p className={`text-xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                  {result}
                </p>
              </div>

              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
