import type { Metadata } from "next"
import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { PricingPage } from "@/components/PricingPage"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Pricing — Low Fees for International Transfers from India | Compare vs SWIFT",
  description:
    "See NivixPe's transparent, low-cost pricing for cross-border payments from India. Compare against SWIFT and traditional bank transfer fees. Save on every international transaction.",
  alternates: { canonical: "https://nivixpe.com/pricing" },
}

export default function PricingPageRoute() {
  return (
    <>
      <PortfolioNavbar />
      <PricingPage />
      <Footer />
    </>
  )
}

