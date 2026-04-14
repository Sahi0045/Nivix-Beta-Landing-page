import type { Metadata } from "next"
import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { ProductTeaserCard } from "@/components/ProductTeaserCard"
import { BankingScaleHero } from "@/components/BankingScaleHero"
import { CaseStudiesCarousel } from "@/components/CaseStudiesCarousel"
import { IntegrationCarousel } from "@/components/IntegrationCarousel"
import { PricingSection } from "@/components/PricingSection"
import { FAQSection } from "@/components/FAQSection"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "NivixPe — Instant Cross-Border Payments from India | SWIFT Alternative",
  description:
    "Send money internationally from India in under 3 seconds with zero SWIFT fees. NivixPe is a blockchain-powered fiat-to-fiat cross-border payment platform for Indian students abroad, MSMEs, and trade businesses. Join our India-UK beta.",
  alternates: {
    canonical: "https://nivixpe.com",
  },
}

export default function Page() {
  return (
    <>
      <PortfolioNavbar />
      <ProductTeaserCard />
      <BankingScaleHero />
      <CaseStudiesCarousel />
      <IntegrationCarousel />
      <PricingSection />
      <FAQSection />
      <Footer />
    </>
  )
}
