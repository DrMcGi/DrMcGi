// src/components/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Blueprint request:", data);
    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 fade-up">
      <h3 className="font-display text-2xl">Request a blueprint</h3>
      <p className="text-white/80 mt-4 max-w-3xl">
        Tell us about your goals. We’ll respond with a concise, strategic plan and investment range.
      </p>

      {submitted ? (
        <div className="mt-8 p-6 rounded-xl glass-glow text-center text-white/80">
          ✅ Thank you. Your blueprint request has been received.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-white/70">Name</label>
            <input
              name="name"
              required
              className="mt-2 w-full p-3 rounded-md bg-ink/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--glowGold1))]"
            />
          </div>
          <div>
            <label className="text-sm text-white/70">Email</label>
            <input
              name="email"
              type="email"
              required
              className="mt-2 w-full p-3 rounded-md bg-ink/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--glowGold1))]"
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-white/70">Company (optional)</label>
            <input
              name="company"
              className="mt-2 w-full p-3 rounded-md bg-ink/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--glowGold1))]"
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-white/70">Message</label>
            <textarea
              name="message"
              rows={6}
              required
              className="mt-2 w-full p-3 rounded-md bg-ink/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--glowGold1))]"
            />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="btn-primary">Send</button>
          </div>
        </form>
      )}
    </section>
  );
}
