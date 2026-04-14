import type React from "react"
import type { Metadata } from "next"
import { Figtree, Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"
import Script from "next/script"
import "./globals.css"

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500", "600"],
})

const siteUrl = "https://nivixpe.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NivixPe — Instant Cross-Border Payments from India | SWIFT Alternative",
    template: "%s | NivixPe",
  },
  description:
    "NivixPe is a blockchain-powered cross-border payment platform enabling instant fiat-to-fiat international transfers from India in under 3 seconds — with zero SWIFT fees. Built for Indian students abroad, MSMEs, and trade businesses.",
  keywords: [
    "cross border payments India",
    "SWIFT alternative India",
    "send money abroad from India instantly",
    "international money transfer India",
    "fiat to fiat cross border payments",
    "blockchain payments India",
    "low fee international transfer India",
    "India UK money transfer",
    "instant global payments",
    "MSME international payments",
    "student money transfer abroad India",
    "NivixPe",
    "Nivixpe beta",
  ],
  authors: [{ name: "NivixPe Team", url: siteUrl }],
  creator: "NivixPe Private Limited",
  publisher: "NivixPe Private Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "NivixPe",
    title: "NivixPe — Instant Cross-Border Payments from India | SWIFT Alternative",
    description:
      "Send money internationally from India in under 3 seconds with zero SWIFT fees. NivixPe is a blockchain-powered fiat-to-fiat payment platform for students, MSMEs, and trade businesses.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "NivixPe — Instant Cross-Border Payments from India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NivixPe — Instant Cross-Border Payments from India",
    description:
      "Send money internationally from India in under 3 seconds with zero SWIFT fees. Join our India-UK beta.",
    images: ["/images/og-image.png"],
    creator: "@nivixpe",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    google: "", // Add your GSC verification token here
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NivixPe Private Limited",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description:
    "NivixPe is a blockchain-based cross-border payment service provider enabling instant fiat-to-fiat international transfers from India with lower fees than SWIFT.",
  foundingDate: "2025",
  foundingLocation: {
    "@type": "Place",
    name: "Telangana, India",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@nivixpe.com",
    contactType: "customer support",
  },
  sameAs: [
    "https://linkedin.com/company/nivixpe",
    "https://twitter.com/nivixpe",
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is NivixPe and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NivixPe is a blockchain-powered cross-border payment platform that enables instant fiat-to-fiat international transfers from India in under 3 seconds, with significantly lower fees than SWIFT. It connects Indian banks and foreign bank accounts through a blockchain settlement layer, eliminating the need for costly correspondent banking.",
      },
    },
    {
      "@type": "Question",
      name: "How does NivixPe compare to SWIFT for international money transfers from India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional SWIFT transfers from India take 2-5 business days and charge fees of ₹500–₹2,000 plus hidden FX markups. NivixPe settles the same transaction in under 3 seconds at a fraction of the cost, using blockchain rails instead of correspondent banking networks.",
      },
    },
    {
      "@type": "Question",
      name: "Who is NivixPe designed for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NivixPe is built for Indian students studying abroad who need to send or receive money internationally, MSMEs conducting cross-border trade, and Indian businesses with global payment needs. Our India-UK corridor is the first live beta route.",
      },
    },
    {
      "@type": "Question",
      name: "Is NivixPe compliant with RBI and FEMA regulations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NivixPe Private Limited is a DPIIT-recognized startup incubated at Bennett Hatchery. Independent Chartered Accountant and external legal counsel have confirmed compliance for the testing phase with applicable Indian laws including PMLA, FEMA, RBI guidelines, Income Tax, DPDPA, GST, and Companies Act.",
      },
    },
    {
      "@type": "Question",
      name: "How do I join the NivixPe beta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can join the NivixPe India-UK beta waitlist directly on our website. Beta access is currently invite-only and uses test tokens — no real customer funds are at risk during this phase.",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${figtree.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
