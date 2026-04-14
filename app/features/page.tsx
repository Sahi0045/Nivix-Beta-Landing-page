import type { Metadata } from "next"
import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { FeaturesPage } from "@/components/FeaturesPage"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Features — Instant Cross-Border Payments, Blockchain Rails & Zero SWIFT Fees",
  description:
    "Discover NivixPe's features: instant fiat-to-fiat international transfers in under 3 seconds, blockchain settlement layer, lower fees than SWIFT, and 150+ countries supported. Built for Indian students, MSMEs, and trade businesses.",
  alternates: { canonical: "https://nivixpe.com/features" },
}

export default function FeaturesPageRoute() {
  return (
    <>
      <PortfolioNavbar />
      <FeaturesPage />
      <Footer />
    </>
  )
}

