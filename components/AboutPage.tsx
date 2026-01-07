"use client"

import { motion } from "framer-motion"
import { Zap, Eye, Shield, Globe, Target, Users } from "lucide-react"

export const AboutPage = () => {
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
              About Nivixpe
            </h1>
            <p
              className="text-xl leading-7 text-[#666666] max-w-3xl mx-auto"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Nivixpe is a fintech platform focused on enabling instant, transparent, and compliant cross-border payments for Indian students and MSMEs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full px-8 py-16 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <p
              className="text-lg leading-7 text-[#666666] mb-6"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Traditional international payments are slow, expensive, and opaque. Nivixpe was built to remove these frictions by combining modern payment rails, blockchain-assisted settlement, and compliance-first design.
            </p>
            <p
              className="text-lg leading-7 text-[#666666]"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              We believe global money movement should be as fast and predictable as the internet — without hidden fees or regulatory shortcuts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="w-full px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-[40px] leading-tight font-normal text-[#202020] tracking-tight mb-4"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "400",
              }}
            >
              What We Do
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-[#156d95]" />,
                title: "Enable near-instant international payments",
                description: "Process cross-border transactions in seconds, not days.",
              },
              {
                icon: <Eye className="w-8 h-8 text-[#156d95]" />,
                title: "Offer transparent FX pricing with no hidden markups",
                description: "Clear, upfront pricing with no surprise fees.",
              },
              {
                icon: <Globe className="w-8 h-8 text-[#156d95]" />,
                title: "Build India-first, globally scalable payment infrastructure",
                description: "Designed for India, built to scale worldwide.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f9f9f9] rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{item.icon}</div>
                <h3
                  className="text-xl font-medium text-[#202020] mb-3"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                    fontWeight: "500",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-base leading-6 text-[#666666]"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="w-full px-8 py-24 bg-gradient-to-br from-[#156d95]/5 to-[#52aee3]/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Target className="w-12 h-12 text-[#156d95] mx-auto mb-6" />
            <h2
              className="text-[40px] leading-tight font-normal text-[#202020] tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "400",
              }}
            >
              Our Vision
            </h2>
            <p
              className="text-xl leading-7 text-[#666666]"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              To become the default cross-border payments layer for India's students and MSMEs, powering global ambition with speed, trust, and clarity.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

