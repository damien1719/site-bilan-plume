import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { InlineCta } from "@/components/inline-cta"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { KeyFeaturesSection } from "@/components/key-features-section"
import { CtaSection } from "@/components/cta-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <InlineCta />
        <TargetAudienceSection />
        <HowItWorksSection />
        <InlineCta variant="minimal" className="border-t border-gray-100" />
        <KeyFeaturesSection />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Outil d'écriture automatique pour bilans psychomoteurs: gagnez du temps et améliorez la qualité de vos documents.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "https://www.bilanplume.fr/",
    title: "Accueil | Bilan Plume",
    description:
      "Outil d'écriture automatique pour bilans psychomoteurs: gagnez du temps et améliorez la qualité de vos documents.",
    images: [
      {
        url: "https://www.bilanplume.fr/logo-bilan-plume.png",
        width: 1200,
        height: 630,
        alt: "Bilan Plume",
      },
    ],
  },
}
