"use client"

import { motion } from "framer-motion"
import { Zap, DollarSign, Globe, Shield, CheckCircle2, GraduationCap, Building2, Handshake } from "lucide-react"

type ComparisonData = {
  name: string
  value: string
  barLength: number
  color: string
}

type MetricCard = {
  icon: React.ReactNode
  headline: string
  subtitle: string
  comparisonTitle: string
  comparisons: ComparisonData[]
  note: string
  sources?: string
  isLowerBetter?: boolean
}

const metrics: MetricCard[] = [
  {
    icon: <Zap className="w-6 h-6 text-purple-500" />,
    headline: "Instant",
    subtitle: "avg",
    comparisonTitle: "Cross-border transfers",
    comparisons: [
      { name: "Nivixpe", value: "Instant", barLength: 100, color: "bg-purple-500" },
      { name: "Wise", value: "1-2 days (typical)", barLength: 30, color: "bg-orange-500" },
      { name: "PayPal", value: "1-2 days (typical)", barLength: 30, color: "bg-green-500" },
      { name: "Banks", value: "1–3 days (SWIFT)", barLength: 20, color: "bg-blue-500" },
    ],
    note: "Faster is better.",
    sources: "Wise Help Center, PayPal Help, SWIFT overview.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-green-500" />,
    headline: "0.1-1%",
    subtitle: "avg",
    comparisonTitle: "Competitive pricing",
    comparisons: [
      { name: "Nivixpe", value: "0.1-1%", barLength: 15, color: "bg-purple-500" },
      { name: "Wise", value: "0.5-2%", barLength: 30, color: "bg-gray-500" },
      { name: "PayPal", value: "2.5-4.5%", barLength: 60, color: "bg-green-500" },
      { name: "Banks", value: "3-7%", barLength: 100, color: "bg-blue-500" },
    ],
    note: "Lower is better.",
    isLowerBetter: true,
  },
  {
    icon: <Globe className="w-6 h-6 text-orange-500" />,
    headline: "10+",
    subtitle: "countries",
    comparisonTitle: "Worldwide reach",
    comparisons: [
      { name: "Nivixpe", value: "10+", barLength: 6, color: "bg-purple-500" },
      { name: "Wise", value: "180", barLength: 100, color: "bg-gray-500" },
      { name: "PayPal", value: "150", barLength: 83, color: "bg-green-500" },
      { name: "Banks", value: "100", barLength: 56, color: "bg-blue-500" },
    ],
    note: "Higher is better.",
  },
]

const securityFeatures = [
  "Bank-grade encryption and secure protocols",
  "KYC/AML compliance and regulatory adherence",
  "Multi-factor authentication and verification",
  "Real-time fraud detection and monitoring",
  "Comprehensive security framework with regulatory compliance and proactive monitoring",
]

const targetAudiences = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Indian students paying tuition & living expenses abroad",
    emoji: "🎓",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "MSMEs making international supplier or service payments",
    emoji: "🏢",
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Consultancies & partners facilitating cross-border transactions",
    emoji: "🤝",
  },
]

export const LearnMorePage = () => {
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
              Performance Metrics
            </h1>
            <p
              className="text-xl leading-7 text-[#666666] max-w-3xl mx-auto"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Nivixpe's competitive edge in global payments, visualized through real-world comparisons.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="w-full px-8 py-16 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  {metric.icon}
                  <div>
                    <h3
                      className="text-2xl font-medium text-[#202020]"
                      style={{
                        fontFamily: "var(--font-figtree), Figtree",
                        fontWeight: "500",
                      }}
                    >
                      {metric.headline}
                    </h3>
                    <p
                      className="text-sm text-[#666666]"
                      style={{
                        fontFamily: "var(--font-figtree), Figtree",
                      }}
                    >
                      {metric.subtitle}
                    </p>
                  </div>
                </div>

                <p
                  className="text-sm font-medium text-[#202020] mb-4"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                  }}
                >
                  {metric.comparisonTitle}
                </p>

                <div className="mb-4">
                  <p
                    className="text-xs font-medium text-[#666666] mb-3 uppercase tracking-wide"
                    style={{
                      fontFamily: "var(--font-figtree), Figtree",
                    }}
                  >
                    {metric.comparisonTitle === "Cross-border transfers"
                      ? "Speed vs. competition"
                      : metric.comparisonTitle === "Competitive pricing"
                      ? "Fees vs. competition"
                      : "Countries supported"}
                  </p>
                  <div className="space-y-3">
                    {metric.comparisons.map((comp, idx) => (
                      <div key={idx}>
                        <div className="flex items-center justify-between mb-1">
                          <span
                            className="text-sm font-medium text-[#202020]"
                            style={{
                              fontFamily: "var(--font-figtree), Figtree",
                            }}
                          >
                            {comp.name}
                          </span>
                          <span
                            className="text-xs text-[#666666]"
                            style={{
                              fontFamily: "var(--font-figtree), Figtree",
                            }}
                          >
                            {comp.value}
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${comp.barLength}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 + idx * 0.1 }}
                            className={`h-full ${comp.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p
                  className="text-xs text-[#666666] mb-1"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                  }}
                >
                  {metric.note}
                </p>
                {metric.sources && (
                  <p
                    className="text-xs text-[#999999]"
                    style={{
                      fontFamily: "var(--font-figtree), Figtree",
                    }}
                  >
                    Sources: {metric.sources}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Security Features Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-yellow-500" />
              <h3
                className="text-2xl font-medium text-[#202020]"
                style={{
                  fontFamily: "var(--font-figtree), Figtree",
                  fontWeight: "500",
                }}
              >
                Security Features
              </h3>
            </div>
            <ul className="space-y-3">
              {securityFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span
                    className="text-base text-[#666666]"
                    style={{
                      fontFamily: "var(--font-figtree), Figtree",
                    }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Who Nivixpe is For */}
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
              Who Nivixpe is For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {targetAudiences.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#156d95]/5 to-[#52aee3]/5 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{audience.emoji}</span>
                  <div className="text-[#156d95]">{audience.icon}</div>
                </div>
                <p
                  className="text-lg leading-7 text-[#202020]"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                  }}
                >
                  {audience.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
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
              Security & Compliance
            </h2>
            <p
              className="text-lg leading-7 text-[#666666] max-w-3xl mx-auto"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Nivixpe is designed with:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-sm max-w-4xl mx-auto"
          >
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#156d95] mt-0.5 flex-shrink-0" />
                <span
                  className="text-lg text-[#202020]"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                  }}
                >
                  Strong KYC & AML workflows
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#156d95] mt-0.5 flex-shrink-0" />
                <span
                  className="text-lg text-[#202020]"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                  }}
                >
                  Transaction monitoring & audit trails
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#156d95] mt-0.5 flex-shrink-0" />
                <span
                  className="text-lg text-[#202020]"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                  }}
                >
                  Regulatory alignment for India-first expansion
                </span>
              </li>
            </ul>
            <p
              className="text-base leading-6 text-[#666666] italic"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Compliance is built into the system — not added later.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="w-full px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
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
              className="text-xl leading-7 text-[#666666] max-w-3xl mx-auto"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              To become the default global payments layer for India's students and MSMEs, enabling frictionless international money movement at internet speed.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

