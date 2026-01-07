"use client"

import { motion } from "framer-motion"
import { FileText, Rocket, Shield, Bug, Sparkles } from "lucide-react"

export const ChangelogPage = () => {
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
              Changelog
            </h1>
            <p
              className="text-xl leading-7 text-[#666666] max-w-3xl mx-auto"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Product Updates & Releases
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Cover */}
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
              What We Track
            </h2>
            <p
              className="text-lg leading-7 text-[#666666] max-w-3xl mx-auto"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              The changelog keeps users and partners informed about:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Sparkles className="w-6 h-6 text-[#156d95]" />,
                title: "New features",
              },
              {
                icon: <Rocket className="w-6 h-6 text-[#156d95]" />,
                title: "Performance improvements",
              },
              {
                icon: <Shield className="w-6 h-6 text-[#156d95]" />,
                title: "Security updates",
              },
              {
                icon: <Bug className="w-6 h-6 text-[#156d95]" />,
                title: "Bug fixes",
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
                <p
                  className="text-base leading-6 text-[#202020]"
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

      {/* Latest Updates */}
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
              Latest
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#f9f9f9] rounded-2xl p-8 max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-4 mb-6">
              <FileText className="w-6 h-6 text-[#156d95] mt-1 flex-shrink-0" />
              <div>
                <h3
                  className="text-xl font-medium text-[#202020] mb-3"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                    fontWeight: "500",
                  }}
                >
                  Beta platform in development
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#156d95] mt-2 flex-shrink-0" />
                    <p
                      className="text-base text-[#666666]"
                      style={{
                        fontFamily: "var(--font-figtree), Figtree",
                      }}
                    >
                      Core payment flows under testing
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <p
              className="text-base text-[#666666]"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              More updates will be published as we move toward launch.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

