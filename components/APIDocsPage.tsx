"use client"

import { motion } from "framer-motion"
import { Code, Shield, FileText, Zap, BookOpen } from "lucide-react"

export const APIDocsPage = () => {
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
              API Docs
            </h1>
            <p
              className="text-xl leading-7 text-[#666666] max-w-3xl mx-auto"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Developer-First Payments Infrastructure
            </p>
          </motion.div>
        </div>
      </section>

      {/* API Capabilities */}
      <section className="w-full px-8 py-16 bg-[#f9f9f9]">
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
              What You Can Build
            </h2>
            <p
              className="text-lg leading-7 text-[#666666] max-w-3xl mx-auto"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Nivixpe provides APIs that allow partners to:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6 text-[#156d95]" />,
                title: "Initiate cross-border payments",
              },
              {
                icon: <Shield className="w-6 h-6 text-[#156d95]" />,
                title: "Perform KYC & compliance checks",
              },
              {
                icon: <FileText className="w-6 h-6 text-[#156d95]" />,
                title: "Track transaction status",
              },
              {
                icon: <Code className="w-6 h-6 text-[#156d95]" />,
                title: "Access FX quotes programmatically",
              },
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="mb-4 flex justify-center">{capability.icon}</div>
                <p
                  className="text-base leading-6 text-[#202020]"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                  }}
                >
                  {capability.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
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
              What to Expect
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              "RESTful APIs",
              "Secure authentication",
              "Clear documentation",
              "Sandbox access (beta)",
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f9f9f9] rounded-xl p-6 text-center"
              >
                <p
                  className="text-base leading-6 text-[#202020]"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                  }}
                >
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <BookOpen className="w-12 h-12 text-[#156d95] mx-auto mb-6" />
            <h3
              className="text-2xl font-medium text-[#202020] mb-4"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "500",
              }}
            >
              API Documentation Coming Soon
            </h3>
            <p
              className="text-lg leading-7 text-[#666666]"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              📘 API documentation will be available during beta launch.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

