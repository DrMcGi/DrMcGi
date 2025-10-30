// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import ScrollProgress from "@/components/ScrollProgress";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import TailoredPackages from "@/components/TailoredPackages";
import PackageSelector from "@/components/PackageSelector";
import BuildConfigurator from "@/components/BuildConfigurator";
import PricingTiers from "@/components/PricingTiers";
import ROICalculator from "@/components/ROICalculator";
import CaseStudies from "@/components/CaseStudies";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TrustDashboard from "@/components/TrustDashboard";
import ConciergeChat from "@/components/ConciergeChat";
import BlueprintGenerator from "@/components/BlueprintGenerator";
import { features } from "@/utils/features";

export default function HomePage() {
  // Selected states drive estimate + ROI
  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(
    new Set(["responsive", "seoOptimization", "luxuryUI"])
  );
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  // Compute total investment based on selected features
  const computeTotal = () => {
    let base = 0;
    features.forEach((f) => {
      if (selectedFeatures.has(f.id)) base += f.price;
    });
    const hasUX = selectedFeatures.has("luxuryUI");
    const hasAI = selectedFeatures.has("aiConcierge");
    const premium = (hasUX && hasAI ? 0.08 : 0.05) * base;
    return Math.round(base + premium);
  };
  const totalInvestment = computeTotal();

  // Reveal animation observer
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("revealed");
        }),
      { threshold: 0.01 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <ScrollProgress />
      <NavBar />
      <ConciergeChat position="left" />
      <main className="pt-20">
        <HeroSection />
        <TailoredPackages />

        {/* Packages — clicking card auto-selects features and updates estimate */}
        <PackageSelector
          selectedId={selectedPackage}
          onSelect={(featuresArr, id) => {
            setSelectedFeatures(new Set(featuresArr));
            setSelectedPackage(id);
            setSelectedTier(null); // ensure only one selection source is active
          }}
        />

        {/* Configurator — manual feature toggles also update estimate */}
        <BuildConfigurator
          selected={selectedFeatures}
          onChange={(next) => setSelectedFeatures(next)}
        />

        {/* Pricing tiers — clickable cards that auto-select recommended features */}
        <PricingTiers
          selectedId={selectedTier}
          onSelect={(featuresArr, id) => {
            setSelectedFeatures(new Set(featuresArr));
            setSelectedTier(id);
            setSelectedPackage(null); // clear package when tier chosen
          }}
        />

        {/* ROI calculator synced with current investment */}
        <ROICalculator investment={totalInvestment} />

        {/* Downloadable blueprint summary of selections */}
        <BlueprintGenerator selected={selectedFeatures} total={totalInvestment} />

        <TrustDashboard />
        <CaseStudies />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton selected={selectedFeatures} />
    </>
  );
}
