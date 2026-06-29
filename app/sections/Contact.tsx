"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", brand: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your form submission logic (e.g., Resend, Formspree, etc.)
    setSent(true);
  };

  const inputClass =
    "w-full glass rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-ultraviolet/60 border border-transparent transition-all duration-200";

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-vividorange text-sm font-bold uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Ready to <span className="text-gradient">mog?</span>
          </h2>
          <p className="text-white/50">
            Tell us about your brand and we'll get back within 24 hours.
          </p>
        </div>

        {sent ? (
          <div className="glass rounded-2xl p-12 text-center">
            <div className="text-5xl mb-4">✦</div>
            <h3 className="text-2xl font-black text-gradient mb-2">We got your message!</h3>
            <p className="text-white/60">Expect a reply within 24 hours. Let's build something iconic.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 flex flex-col gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                className={inputClass}
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                className={inputClass}
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <input
              className={inputClass}
              placeholder="Brand / company name"
              value={form.brand}
              onChange={(e) => setForm({ ...form, brand: e.target.value })}
            />
            <textarea
              className={`${inputClass} resize-none h-32`}
              placeholder="Tell us about your goals..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <button
              type="submit"
              className="w-full py-4 rounded-xl font-black text-white text-lg
                bg-gradient-to-r from-neonpink via-ultraviolet to-electric
                hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 glow-purple"
            >
              Send It ✦
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
