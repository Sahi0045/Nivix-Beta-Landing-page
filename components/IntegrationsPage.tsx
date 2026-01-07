"use client"

import { motion } from "framer-motion"
import { Building2, Shield, DollarSign, GraduationCap, FileText, Link2 } from "lucide-react"

export const IntegrationsPage = () => {
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
              Integrations
            </h1>
            <p
              className="text-xl leading-7 text-[#666666] max-w-3xl mx-auto"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Nivixpe integrates with essential financial and operational systems to enable seamless cross-border payments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Supported & Planned Integrations */}
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
              Supported & Planned Integrations
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Building2 className="w-6 h-6 text-[#156d95]" />,
                title: "Banking & payout partners",
                status: "supported",
              },
              {
                icon: <Shield className="w-6 h-6 text-[#156d95]" />,
                title: "KYC & identity verification providers",
                status: "supported",
              },
              {
                icon: <DollarSign className="w-6 h-6 text-[#156d95]" />,
                title: "FX liquidity partners",
                status: "supported",
              },
              {
                icon: <GraduationCap className="w-6 h-6 text-[#156d95]" />,
                title: "University & consultancy platforms",
                status: "supported",
              },
              {
                icon: <FileText className="w-6 h-6 text-[#156d95]" />,
                title: "ERP and MSME accounting tools",
                status: "planned",
              },
            ].map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">{integration.icon}</div>
                  <div className="flex-1">
                    <p
                      className="text-base leading-6 text-[#202020] mb-2"
                      style={{
                        fontFamily: "var(--font-figtree), Figtree",
                      }}
                    >
                      {integration.title}
                    </p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        integration.status === "supported"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                      style={{
                        fontFamily: "var(--font-figtree), Figtree",
                      }}
                    >
                      {integration.status === "supported" ? "Supported" : "Planned"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="w-full px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Link2 className="w-12 h-12 text-[#156d95] mx-auto mb-6" />
            <h2
              className="text-3xl font-medium text-[#202020] mb-4"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "500",
              }}
            >
              Partner Integration
            </h2>
            <p
              className="text-lg leading-7 text-[#666666]"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              We work closely with partners to ensure secure, compliant, and stable integrations.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

