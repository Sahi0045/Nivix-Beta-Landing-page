"use client"

import { motion } from "framer-motion"
import { FileText, Download, Mail, Image as ImageIcon, User } from "lucide-react"

export const PressKitPage = () => {
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
              Press Kit
            </h1>
            <p
              className="text-xl leading-7 text-[#666666] max-w-3xl mx-auto"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Nivixpe is an India-focused fintech startup building infrastructure for instant, transparent international payments for students and MSMEs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full px-8 py-16 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2
              className="text-[40px] leading-tight font-normal text-[#202020] tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "400",
              }}
            >
              About Nivixpe
            </h2>
            <p
              className="text-lg leading-7 text-[#666666] mb-6"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Nivixpe is an India-focused fintech startup building infrastructure for instant, transparent international payments for students and MSMEs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What You Can Use Section */}
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
              What You Can Use
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FileText className="w-6 h-6 text-[#156d95]" />,
                title: "Company description",
              },
              {
                icon: <User className="w-6 h-6 text-[#156d95]" />,
                title: "Founder bio",
              },
              {
                icon: <ImageIcon className="w-6 h-6 text-[#156d95]" />,
                title: "Logos & brand assets",
              },
              {
                icon: <Download className="w-6 h-6 text-[#156d95]" />,
                title: "Product screenshots (on request)",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f9f9f9] rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{item.icon}</div>
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

      {/* Contact Section */}
      <section className="w-full px-8 py-24 bg-gradient-to-br from-[#156d95]/5 to-[#52aee3]/5">
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
              Media & Press Contact
            </h2>
            <p
              className="text-lg leading-7 text-[#666666] mb-6"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              For interviews, features, or press coverage
            </p>
            <a
              href="mailto:press@nivixpe.com"
              className="inline-block text-xl text-[#156d95] hover:underline font-medium"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              📧 press@nivixpe.com
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

