"use client"

import { motion } from "framer-motion"
import { BookOpen, TrendingUp, DollarSign, FileText, Rocket, Users } from "lucide-react"

export const BlogPage = () => {
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
              Insights on Payments, Fintech & Cross-Border Infrastructure
            </h1>
            <p
              className="text-xl leading-7 text-[#666666] max-w-3xl mx-auto"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              The Nivixpe Blog covers real insights from building in fintech. Our goal is to educate, not hype.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Topics Section */}
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
              What We Cover
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <TrendingUp className="w-6 h-6 text-[#156d95]" />,
                title: "Cross-border payments trends",
              },
              {
                icon: <DollarSign className="w-6 h-6 text-[#156d95]" />,
                title: "FX transparency & cost breakdowns",
              },
              {
                icon: <FileText className="w-6 h-6 text-[#156d95]" />,
                title: "Fintech regulation (India & global)",
              },
              {
                icon: <Rocket className="w-6 h-6 text-[#156d95]" />,
                title: "Product updates and launch notes",
              },
              {
                icon: <Users className="w-6 h-6 text-[#156d95]" />,
                title: "Student & MSME payment use cases",
              },
            ].map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">{topic.icon}</div>
                  <p
                    className="text-base leading-6 text-[#202020]"
                    style={{
                      fontFamily: "var(--font-figtree), Figtree",
                    }}
                  >
                    {topic.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="w-full px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <BookOpen className="w-16 h-16 text-[#156d95] mx-auto mb-6" />
            <h2
              className="text-3xl font-medium text-[#202020] mb-4"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "500",
              }}
            >
              New articles coming soon
            </h2>
            <p
              className="text-lg leading-7 text-[#666666]"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              We're working on insightful content about payments, fintech, and cross-border infrastructure. Check back soon for updates.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

