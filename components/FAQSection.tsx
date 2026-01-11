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
    question: "What is Nivixpe and how does it work?",
    answer:
      "Nivixpe is a blockchain-powered payment layer that connects all your financial tools—payments, trades, and settlements—into a unified system. It processes transactions in real-time to provide insights on fraud detection, compliance, transaction patterns, and cross-border flows. Simply integrate Nivixpe with your existing tools like banking APIs, payment processors, or trading platforms, and start gaining actionable insights immediately.",
  },
  {
    question: "How does Nivixpe use my data to ensure secure transactions?",
    answer:
      "Nivixpe processes your transaction data using advanced blockchain technology and machine learning models. All data is encrypted end-to-end and processed in compliance with enterprise-grade security standards. Your data is never shared with third parties, and you maintain complete control over what gets analyzed. The system learns from patterns in your financial transactions to provide personalized insights specific to your organization.",
  },
  {
    question: "How do I get started with Nivixpe and what are the pricing options?",
    answer:
      "Getting started is simple: sign up for a free trial, connect your payment tools, and start processing within minutes. We offer flexible pricing tiers: Starter ($29/month for small teams), Professional ($99/month), and Enterprise (custom pricing with dedicated support). All plans include core features like real-time transaction monitoring and fraud detection. Contact our sales team for volume discounts and custom enterprise solutions.",
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
