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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3 shadow-lg" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-black text-gradient tracking-tight">
          MogSocials
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
              >
                {l}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neonpink to-ultraviolet transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-5 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-neonpink to-ultraviolet text-white glow-pink hover:scale-105 transition-transform"
            >
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
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
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
        <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-white/80 hover:text-white font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="text-center px-5 py-2.5 rounded-full font-bold bg-gradient-to-r from-neonpink to-ultraviolet text-white"
            onClick={() => setOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
