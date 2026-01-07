"use client"

import { motion } from "framer-motion"
import { Rocket, Code, TrendingUp, Users, Mail, Briefcase } from "lucide-react"

export const CareersPage = () => {
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
              Build the Future of Global Payments
            </h1>
            <p
              className="text-xl leading-7 text-[#666666] max-w-3xl mx-auto"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              At Nivixpe, we're building critical financial infrastructure — not just another app. We're looking for people who want to work on real-world fintech problems with long-term impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us Section */}
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
              Why Work With Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Rocket className="w-6 h-6 text-[#156d95]" />,
                title: "Early-stage ownership and responsibility",
              },
              {
                icon: <Code className="w-6 h-6 text-[#156d95]" />,
                title: "Exposure to fintech, payments, compliance, and blockchain",
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-[#156d95]" />,
                title: "Fast learning, real execution, zero bureaucracy",
              },
              {
                icon: <Users className="w-6 h-6 text-[#156d95]" />,
                title: "Opportunity to shape a global product from day one",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{item.icon}</div>
                <p
                  className="text-base leading-6 text-[#666666]"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                  }}
                >
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Hire Section */}
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
              Who We Hire
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              "Engineers (Frontend, Backend, Blockchain)",
              "Product & Growth roles",
              "Marketing & Partnerships",
              "Operations & Compliance (as we scale)",
            ].map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f9f9f9] rounded-xl p-6"
              >
                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-[#156d95] mt-1 flex-shrink-0" />
                  <p
                    className="text-base leading-6 text-[#202020]"
                    style={{
                      fontFamily: "var(--font-figtree), Figtree",
                    }}
                  >
                    {role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#156d95] to-[#52aee3] rounded-2xl p-8 text-center text-white"
          >
            <Mail className="w-12 h-12 mx-auto mb-4" />
            <h3
              className="text-2xl font-medium mb-4"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "500",
              }}
            >
              Send your profile to:{" "}
              <a
                href="mailto:careers@nivixpe.com"
                className="underline hover:opacity-80 transition-opacity"
              >
                careers@nivixpe.com
              </a>
            </h3>
            <p
              className="text-base opacity-90"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              (Internships and early-career roles welcome)
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

