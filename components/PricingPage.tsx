"use client"

import { motion } from "framer-motion"
import { DollarSign, Mail, TrendingUp, FileText } from "lucide-react"

export const PricingPage = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full px-8 pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1
              className="text-[56px] leading-[60px] tracking-tight text-[#202020] mb-6"
              style={{
                fontWeight: "500",
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Pricing
            </h1>
            <p
              className="text-xl leading-7 text-[#666666] max-w-3xl mx-auto"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Nivixpe follows a transparent, usage-based pricing model.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="w-full px-8 py-24 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-[40px] leading-tight font-normal text-[#202020] tracking-tight mb-4"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "400",
              }}
            >
              Pricing Overview
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <DollarSign className="w-6 h-6 text-[#156d95]" />,
                title: "Transaction Fee",
                description: "Competitive, corridor-dependent",
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-[#156d95]" />,
                title: "FX Margin",
                description: "Clearly disclosed before confirmation",
              },
              {
                icon: <FileText className="w-6 h-6 text-[#156d95]" />,
                title: "No Hidden Charges",
                description: "Transparent pricing from start to finish",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3
                  className="text-lg font-medium text-[#202020] mb-2"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                    fontWeight: "500",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-base text-[#666666]"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Pricing Factors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 max-w-3xl mx-auto"
          >
            <h3
              className="text-xl font-medium text-[#202020] mb-4"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "500",
              }}
            >
              Exact pricing may vary based on:
            </h3>
            <ul className="space-y-3">
              {[
                "Payment corridor",
                "Transaction volume",
                "Partner agreements",
              ].map((factor, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#156d95] mt-2 flex-shrink-0" />
                  <p
                    className="text-base text-[#666666]"
                    style={{
                      fontFamily: "var(--font-figtree), Figtree",
                    }}
                  >
                    {factor}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <Mail className="w-12 h-12 text-[#156d95] mx-auto mb-6" />
            <h2
              className="text-3xl font-medium text-[#202020] mb-4"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "500",
              }}
            >
              Get Detailed Pricing
            </h2>
            <p
              className="text-lg leading-7 text-[#666666] mb-6"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              For detailed pricing or enterprise plans, contact:
            </p>
            <a
              href="mailto:pricing@nivixpe.com"
              className="inline-block text-xl text-[#156d95] hover:underline font-medium"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              📩 pricing@nivixpe.com
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

