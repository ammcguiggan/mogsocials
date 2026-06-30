"use client";
import { useState, useEffect } from "react";

const links = ["Services", "About", "Portfolio", "Testimonials", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-obsidian/95 border-b border-white/06 py-3"
          : "bg-transparent py-6"
      }`}
      style={{ backdropFilter: scrolled ? "blur(12px)" : "none" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="text-lg font-black text-white tracking-tight uppercase">
          Mog<span style={{ color: "#0057ff" }}>Socials</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="label-tag text-white/50 hover:text-white transition-colors relative group"
              >
                {l}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-blade transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-primary text-xs">
              Get Started
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-5 h-px bg-white transition-all duration-200 ${
                open && i === 0 ? "rotate-45 translate-y-2" :
                open && i === 1 ? "opacity-0" :
                open && i === 2 ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/06 mt-3 mx-4 p-6 flex flex-col gap-5"
          style={{ background: "#050507" }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="label-tag text-white/60 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary text-center text-xs"
            onClick={() => setOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
