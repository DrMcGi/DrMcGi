// src/components/HeroSection.tsx
"use client";

export default function HeroSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-28 pb-24 text-center fade-up noise-overlay">
      <video
        className="absolute inset-0 -z-10 w-full h-full object-cover opacity-20"
        autoPlay
        loop
        muted
        playsInline
        src="https://cdn.coverr.co/videos/coverr-golden-particles-1192/1080p.mp4"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-ink/40 to-ink" />

      <h1 className="heading font-serif text-4xl md:text-6xl font-bold leading-tight relative">
        Luxury software.<br />Real business impact.
      </h1>
      <p className="mt-6 text-lg text-white/70 max-w-3xl mx-auto">
        We don’t ship features. We orchestrate experiences that feel inevitable—from MVP to enterprise scale.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#pricing" className="btn-primary">Explore tiers</a>
        <a href="#contact" className="btn-secondary">Request a blueprint</a>
      </div>
    </section>
  );
}
