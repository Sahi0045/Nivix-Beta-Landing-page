import type { Metadata } from "next"
import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { AboutPage } from "@/components/AboutPage"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "About NivixPe — India's Blockchain-Powered Cross-Border Payment Startup",
  description:
    "Learn about NivixPe — a DPIIT-recognized Indian fintech startup building instant, compliant cross-border payments using blockchain. Incubated at Bennett Hatchery, Telangana.",
  alternates: { canonical: "https://nivixpe.com/about" },
}

export default function AboutPageRoute() {
  return (
    <>
      <PortfolioNavbar />
      <AboutPage />
      <Footer />
    </>
  )
}

