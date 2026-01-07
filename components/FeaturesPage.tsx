"use client"

import { motion } from "framer-motion"
import { Zap, Eye, Shield, Smartphone, Search, TrendingUp } from "lucide-react"

export const FeaturesPage = () => {
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
              Features
            </h1>
            <p
              className="text-xl leading-7 text-[#666666] max-w-3xl mx-auto"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Nivixpe is a cross-border payments platform designed for Indian students and MSMEs who need fast, predictable, and transparent international money transfers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Description */}
      <section className="w-full px-8 py-16 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
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
              Our product replaces slow, opaque banking rails with real-time settlement, clear FX pricing, and automated compliance workflows, while remaining regulation-first.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What the Product Delivers */}
      <section className="w-full px-8 py-24 bg-white">
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
              What the Product Delivers
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Near-instant international payments",
              "Transparent FX rates with upfront fee visibility",
              "Simplified onboarding and payment flows",
              "Built-in compliance and transaction monitoring",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-[#f9f9f9] rounded-xl p-6"
              >
                <div className="w-2 h-2 rounded-full bg-[#156d95] mt-2 flex-shrink-0" />
                <p
                  className="text-base leading-6 text-[#202020]"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                  }}
                >
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p
              className="text-base leading-7 text-[#666666]"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Nivixpe is designed to scale across corridors while staying aligned with Indian and global regulatory requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
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
              Key Features
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-[#156d95]" />,
                title: "Instant Settlement",
                description: "Send and receive international payments in seconds instead of days.",
              },
              {
                icon: <Eye className="w-8 h-8 text-[#156d95]" />,
                title: "Transparent FX Pricing",
                description: "Know the exact exchange rate and fees before confirming a transaction. No hidden margins.",
              },
              {
                icon: <Shield className="w-8 h-8 text-[#156d95]" />,
                title: "Compliance-First Architecture",
                description: "Automated KYC, AML, and transaction checks built directly into the payment flow.",
              },
              {
                icon: <Smartphone className="w-8 h-8 text-[#156d95]" />,
                title: "Mobile-First Experience",
                description: "Simple onboarding and payment initiation designed for speed and clarity.",
              },
              {
                icon: <Search className="w-8 h-8 text-[#156d95]" />,
                title: "Transaction Visibility",
                description: "Track payment status in real time with clear confirmations.",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-[#156d95]" />,
                title: "Built for Scale",
                description: "Designed to support students, MSMEs, and institutional partners as volume grows.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3
                  className="text-xl font-medium text-[#202020] mb-3"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                    fontWeight: "500",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-base leading-6 text-[#666666]"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                  }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

