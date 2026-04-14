import type { Metadata } from "next"
import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { BlogPage } from "@/components/BlogPage"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Blog — Fintech Insights, Cross-Border Payments & International Money Transfer Tips",
  description:
    "Explore NivixPe's blog for expert insights on cross-border payments from India, SWIFT alternatives, international money transfers for students and MSMEs, and blockchain fintech trends.",
  alternates: { canonical: "https://nivixpe.com/blog" },
  openGraph: {
    title: "NivixPe Blog — Cross-Border Payments & Fintech Insights for India",
    description:
      "Expert articles on international money transfers, SWIFT alternatives, and fintech for Indian students abroad and MSMEs.",
    url: "https://nivixpe.com/blog",
    type: "website",
  },
}

export default function BlogPageRoute() {
  return (
    <>
      <PortfolioNavbar />
      <BlogPage />
      <Footer />
    </>
  )
}

