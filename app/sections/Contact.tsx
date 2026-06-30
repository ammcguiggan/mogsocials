"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", brand: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass = "input-field";

  return (
    <section id="contact" className="py-24 px-6 section-divider">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="label-tag mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Ready to <span className="text-gradient">mog?</span>
          </h2>
          <p className="text-white/30 text-sm tracking-wide">
            Tell us about your brand. We reply within 24 hours.
          </p>
        </div>

        {sent ? (
          <div className="glass p-12 text-center border border-blade/20">
            <div className="text-blade text-4xl font-black mb-4">→</div>
            <h3 className="text-2xl font-black text-white mb-2">Message received.</h3>
            <p className="text-white/40 text-sm">Expect a reply within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass p-8 flex flex-col gap-3">
            <div className="grid md:grid-cols-2 gap-3">
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
              className="w-full btn-primary mt-1 py-4 text-sm"
            >
              Send It →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
