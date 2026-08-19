import { HeroSection } from "@/components/sections/HeroSection";
import { AberturaSection } from "@/components/sections/AberturaSection";
import { DorSection } from "@/components/sections/DorSection";
import { SolucaoSection } from "@/components/sections/SolucaoSection";
import { BeneficiosSection } from "@/components/sections/BeneficiosSection";
import { ProvaSocialSection } from "@/components/sections/ProvaSocialSection";
import { OfertaSection } from "@/components/sections/OfertaSection";
import { ObjecoesSection } from "@/components/sections/ObjecoesSection";
import { GarantiaSection } from "@/components/sections/GarantiaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaFinalSection } from "@/components/sections/CtaFinalSection";
import { PsSection } from "@/components/sections/PsSection";
import { TrilhaPerfume } from "@/components/motion/TrilhaPerfume";

export default function Home() {
  return (
    <main className="relative">
      <TrilhaPerfume />
      <HeroSection />
      <AberturaSection />
      <DorSection />
      <SolucaoSection />
      <BeneficiosSection />
      <ProvaSocialSection />
      <OfertaSection />
      <ObjecoesSection />
      <GarantiaSection />
      <FaqSection />
      <CtaFinalSection />
      <PsSection />
    </main>
  );
}
