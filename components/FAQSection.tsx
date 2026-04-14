"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
type FAQItem = {
  question: string
  answer: string
}
type FAQSectionProps = {
  title?: string
  faqs?: FAQItem[]
}
const defaultFAQs: FAQItem[] = [
  {
    question: "What is NivixPe and how does it work?",
    answer:
      "NivixPe is a blockchain-powered cross-border payment platform that enables instant fiat-to-fiat international transfers from India in under 3 seconds — with significantly lower fees than SWIFT. It connects Indian banks and foreign bank accounts through a blockchain settlement layer, eliminating costly correspondent banking. Simply join our beta waitlist to get early access to the India-UK corridor.",
  },
  {
    question: "How does NivixPe compare to SWIFT for international money transfers from India?",
    answer:
      "Traditional SWIFT transfers from India take 2–5 business days and cost ₹500–₹2,000 in fees plus hidden FX markups from correspondent banks. NivixPe settles the same transaction in under 3 seconds with near-zero fees, using blockchain rails instead of SWIFT's legacy correspondent banking network. This makes it a faster, cheaper SWIFT alternative for India.",
  },
  {
    question: "Who is NivixPe designed for?",
    answer:
      "NivixPe is built for three main user groups: (1) Indian students studying abroad who need to send or receive education funds internationally, (2) MSMEs (Micro, Small & Medium Enterprises) making cross-border trade payments, and (3) Indian businesses with global supplier or customer payment needs. The India-UK payment corridor is our first beta route.",
  },
  {
    question: "Is NivixPe compliant with RBI, FEMA, and Indian regulations?",
    answer:
      "Yes. NivixPe Private Limited is a DPIIT-recognized startup incubated at Bennett Hatchery. Independent Chartered Accountant and external legal counsel have confirmed compliance for the testing phase with all applicable Indian laws — including PMLA, FEMA, RBI guidelines, Income Tax, DPDPA, GST, and Companies Act. The current beta uses test tokens only; no real customer funds are at risk.",
  },
  {
    question: "What are the fees for sending money abroad from India with NivixPe?",
    answer:
      "NivixPe is designed to dramatically reduce cross-border payment costs compared to SWIFT and traditional banks. The current beta uses test tokens with zero fees. Detailed pricing for the live product will be announced at official launch. Our goal is to save users thousands of rupees per transaction compared to traditional wire transfer costs.",
  },
  {
    question: "Which countries does NivixPe support for international transfers?",
    answer:
      "NivixPe's India-UK payment corridor is the first beta route, with plans to expand to 150+ countries. Priority corridors after India-UK include India-USA, India-UAE, India-Australia, and India-Singapore — covering the most common destinations for Indian students and MSME trade flows.",
  },
  {
    question: "How do I join the NivixPe India-UK beta?",
    answer:
      "Click the 'Join Waitlist' or 'Join India-UK Beta' button on our homepage to request early access. Our beta is currently invite-only and uses test tokens, so there's no risk to your funds. We'll notify you by email when a beta slot is available. Early waitlist members get priority access and the best early-bird pricing.",
  },
]
export const FAQSection = ({ title = "Frequently asked questions", faqs = defaultFAQs }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <section className="w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Column - Title */}
          <div className="lg:col-span-4">
            <h2
              className="text-2xl sm:text-3xl md:text-[40px] leading-tight font-normal text-[#202020] tracking-tight lg:sticky lg:top-24 mb-6 lg:mb-0"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "400",
                fontSize: "40px",
              }}
            >
              {title}
            </h2>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-[#e5e5e5] last:border-b-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between py-5 sm:py-6 text-left group hover:opacity-70 transition-opacity duration-150 active:opacity-60"
                    aria-expanded={openIndex === index}
                    style={{ minHeight: "44px" }}
                  >
                    <span
                      className="text-base sm:text-lg leading-6 sm:leading-7 text-[#202020] pr-6 sm:pr-8"
                      style={{
                        fontFamily: "var(--font-figtree), Figtree",
                        fontWeight: "400",
                      }}
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{
                        rotate: openIndex === index ? 45 : 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="flex-shrink-0 touch-manipulation"
                    >
                      <Plus className="w-6 h-6 text-[#202020]" strokeWidth={1.5} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 sm:pb-6 pr-8 sm:pr-12">
                          <p
                            className="text-sm sm:text-base md:text-lg leading-5 sm:leading-6 text-[#666666]"
                            style={{
                              fontFamily: "var(--font-figtree), Figtree",
                            }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
