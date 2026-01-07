"use client"

import { motion } from "framer-motion"
import { Mail, Handshake, GraduationCap, Building2, MapPin, Globe } from "lucide-react"

export const ContactPage = () => {
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
              Get in Touch
            </h1>
            <p
              className="text-xl leading-7 text-[#666666] max-w-3xl mx-auto"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              We're open to partnerships, collaborations, and discussions about the future of cross-border payments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options Section */}
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
              We're Open To
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <Handshake className="w-6 h-6 text-[#156d95]" />,
                title: "Partnerships",
              },
              {
                icon: <GraduationCap className="w-6 h-6 text-[#156d95]" />,
                title: "Universities & consultancies",
              },
              {
                icon: <Building2 className="w-6 h-6 text-[#156d95]" />,
                title: "MSME collaborations",
              },
              {
                icon: <Globe className="w-6 h-6 text-[#156d95]" />,
                title: "Media & ecosystem discussions",
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

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <Mail className="w-8 h-8 text-[#156d95] mb-4" />
              <h3
                className="text-xl font-medium text-[#202020] mb-4"
                style={{
                  fontFamily: "var(--font-figtree), Figtree",
                  fontWeight: "500",
                }}
              >
                General Inquiries
              </h3>
              <a
                href="mailto:support@nivixpe.com"
                className="text-lg text-[#156d95] hover:underline"
                style={{
                  fontFamily: "var(--font-figtree), Figtree",
                }}
              >
                📧 support@nivixpe.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <Handshake className="w-8 h-8 text-[#156d95] mb-4" />
              <h3
                className="text-xl font-medium text-[#202020] mb-4"
                style={{
                  fontFamily: "var(--font-figtree), Figtree",
                  fontWeight: "500",
                }}
              >
                Partnerships
              </h3>
              <a
                href="mailto:partnerships@nivixpe.com"
                className="text-lg text-[#156d95] hover:underline"
                style={{
                  fontFamily: "var(--font-figtree), Figtree",
                }}
              >
                📧 partnerships@nivixpe.com
              </a>
            </motion.div>
          </div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <MapPin className="w-6 h-6 text-[#156d95] mx-auto mb-2" />
            <p
              className="text-base text-[#666666] mb-2"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              📍 Location: India
            </p>
            <p
              className="text-sm text-[#999999]"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              (Global expansion underway)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compliance Notice */}
      <section className="w-full px-8 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-[#f9f9f9] rounded-2xl p-8 border-l-4 border-[#156d95]"
          >
            <p
              className="text-sm leading-6 text-[#666666]"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              <strong className="text-[#202020]">🔒 Compliance Notice:</strong> Nivixpe operates with a compliance-first approach. Product availability may vary by region and regulatory status.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

