"use client"

import { motion } from "framer-motion"
import { TrendingUp, DollarSign, FileText, Rocket, Users, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

type BlogPost = {
  slug: string
  category: string
  title: string
  excerpt: string
  readTime: string
  icon: React.ReactNode
  pillar?: boolean
}

const blogPosts: BlogPost[] = [
  // Pillar pages (highest SEO priority)
  {
    slug: "cross-border-payments-india-guide",
    category: "Pillar Guide",
    title: "The Complete Guide to Cross-Border Payments from India (2026)",
    excerpt:
      "Everything you need to know about sending money internationally from India — SWIFT, UPI, blockchain, FEMA rules, fees, and the fastest options available today.",
    readTime: "12 min read",
    icon: <TrendingUp className="w-5 h-5" />,
    pillar: true,
  },
  {
    slug: "swift-vs-blockchain-payments-india",
    category: "Pillar Guide",
    title: "SWIFT vs Blockchain Payments: Why India's Businesses Are Switching",
    excerpt:
      "A deep-dive comparison of SWIFT and blockchain-based cross-border payment rails — settlement times, fees, FX transparency, and compliance. Built for Indian MSMEs.",
    readTime: "10 min read",
    icon: <DollarSign className="w-5 h-5" />,
    pillar: true,
  },
  {
    slug: "international-money-transfer-india-guide",
    category: "Pillar Guide",
    title: "How to Send Money Abroad from India: The 2026 Definitive Guide",
    excerpt:
      "Compare all methods to send money internationally from India — banks, PayPal, Wise, blockchain — with real fees, speed data, and FEMA/RBI compliance details.",
    readTime: "14 min read",
    icon: <FileText className="w-5 h-5" />,
    pillar: true,
  },
  // Blog articles
  {
    slug: "best-way-send-money-abroad-india",
    category: "Money Transfer",
    title: "Best Ways to Send Money Abroad from India in 2026",
    excerpt:
      "We compared SWIFT, Wise, PayPal, UPI, and blockchain payments for transferring money from India. Here's what actually works — ranked by speed, cost, and ease.",
    readTime: "7 min read",
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    slug: "how-swift-works-and-why-its-slow",
    category: "Fintech Education",
    title: "How SWIFT Works (And Why It's Slow and Expensive for India)",
    excerpt:
      "SWIFT has dominated global payments for 50 years. But for Indian students and exporters, it means 5-day delays and fees up to ₹2,000. Here's what's actually happening behind the scenes.",
    readTime: "6 min read",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    slug: "paypal-vs-banks-vs-blockchain-fees",
    category: "Fee Comparison",
    title: "Real Fee Comparison: PayPal vs Banks vs Blockchain for Indian Transfers",
    excerpt:
      "Sending ₹1,00,000 abroad? We ran the actual numbers across PayPal, SBI, HDFC, Wise, and blockchain-based platforms. The hidden FX markup difference will surprise you.",
    readTime: "5 min read",
    icon: <DollarSign className="w-5 h-5" />,
  },
  {
    slug: "indian-student-abroad-money-transfer",
    category: "Students Abroad",
    title: "How Indian Students Abroad Can Save ₹50,000+ on International Transfers",
    excerpt:
      "From tuition payments to monthly living expenses, Indian students studying in the UK, USA, and Australia face enormous cross-border payment costs. Here's how to reduce them.",
    readTime: "8 min read",
    icon: <Users className="w-5 h-5" />,
  },
  {
    slug: "msme-cross-border-payments-india",
    category: "MSME",
    title: "Cross-Border Payments for Indian MSMEs: A Practical Guide",
    excerpt:
      "Over 60 million Indian MSMEs engage in international trade. Most overpay massively on SWIFT transfers. This guide covers FEMA compliance, hedging, and faster payment rails.",
    readTime: "9 min read",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    slug: "blockchain-cross-border-payments-explained",
    category: "Blockchain",
    title: "How Blockchain Makes Cross-Border Payments Instant (Without Crypto Risk)",
    excerpt:
      "Blockchain payments don't have to mean Bitcoin volatility. Fiat-to-fiat blockchain rails settle in seconds with no crypto exposure. Here's the technology explained simply.",
    readTime: "7 min read",
    icon: <Rocket className="w-5 h-5" />,
  },
]

const pillarPosts = blogPosts.filter((p) => p.pillar)
const regularPosts = blogPosts.filter((p) => !p.pillar)

const categoryColors: Record<string, string> = {
  "Pillar Guide": "#156d95",
  "Money Transfer": "#2d7a6b",
  "Fintech Education": "#7c3f8a",
  "Fee Comparison": "#c4722a",
  "Students Abroad": "#1e5fa8",
  MSME: "#3b7a3b",
  Blockchain: "#5b47c4",
}

export const BlogPage = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full px-4 sm:px-8 pt-24 sm:pt-32 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <span
              className="inline-block text-xs font-mono uppercase tracking-widest text-[#156d95] mb-4 px-3 py-1 bg-[#eaf4fa] rounded-full"
              style={{ fontFamily: "var(--font-geist-mono), monospace" }}
            >
              Fintech Insights
            </span>
            <h1
              className="text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] tracking-tight text-[#202020] mb-5 max-w-4xl mx-auto"
              style={{
                fontWeight: "500",
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Insights on Payments, Fintech & Cross-Border Infrastructure
            </h1>
            <p
              className="text-lg leading-7 text-[#666666] max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-figtree), Figtree" }}
            >
              Real insights from building in fintech. We cover cross-border payments, SWIFT alternatives, fee
              comparisons, and what it actually takes to send money internationally from India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillar Pages — Featured */}
      <section className="w-full px-4 sm:px-8 py-12 bg-[#f4f8fb]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2
              className="text-2xl sm:text-[32px] font-normal text-[#202020] tracking-tight"
              style={{ fontFamily: "var(--font-figtree), Figtree", fontWeight: "500" }}
            >
              Pillar Guides
            </h2>
            <p className="text-sm text-[#666666] mt-1" style={{ fontFamily: "var(--font-figtree)" }}>
              In-depth, definitive resources on cross-border payments from India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {pillarPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full bg-white rounded-2xl p-6 border border-[#e5e5e5] hover:border-[#156d95] hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                      style={{ backgroundColor: categoryColors[post.category] || "#156d95" }}
                    >
                      {post.icon}
                    </div>
                    <span
                      className="text-xs font-medium uppercase tracking-wide"
                      style={{ color: categoryColors[post.category] || "#156d95", fontFamily: "var(--font-figtree)" }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-medium text-[#202020] mb-3 leading-snug group-hover:text-[#156d95] transition-colors"
                    style={{ fontFamily: "var(--font-figtree), Figtree", fontWeight: "500" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#666666] leading-6 flex-1 mb-4" style={{ fontFamily: "var(--font-figtree)" }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#f0f0f0]">
                    <span className="flex items-center gap-1 text-xs text-[#999]" style={{ fontFamily: "var(--font-figtree)" }}>
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#156d95] group-hover:gap-2 transition-all" style={{ fontFamily: "var(--font-figtree)" }}>
                      Read guide <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="w-full px-4 sm:px-8 py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2
              className="text-2xl sm:text-[32px] font-normal text-[#202020] tracking-tight"
              style={{ fontFamily: "var(--font-figtree), Figtree", fontWeight: "500" }}
            >
              Latest Articles
            </h2>
            <p className="text-sm text-[#666666] mt-1" style={{ fontFamily: "var(--font-figtree)" }}>
              Practical guides, fee breakdowns, and fintech explainers for India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full bg-white rounded-2xl p-6 border border-[#e5e5e5] hover:border-[#156d95] hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs font-medium uppercase tracking-wide px-2 py-0.5 rounded-full"
                      style={{
                        color: categoryColors[post.category] || "#156d95",
                        backgroundColor: `${categoryColors[post.category] || "#156d95"}18`,
                        fontFamily: "var(--font-figtree)",
                      }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <h3
                    className="text-base font-medium text-[#202020] mb-3 leading-snug group-hover:text-[#156d95] transition-colors"
                    style={{ fontFamily: "var(--font-figtree), Figtree", fontWeight: "500" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#666666] leading-6 flex-1 mb-4" style={{ fontFamily: "var(--font-figtree)" }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-[#f0f0f0]">
                    <span className="flex items-center gap-1 text-xs text-[#999]" style={{ fontFamily: "var(--font-figtree)" }}>
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#156d95] group-hover:gap-2 transition-all" style={{ fontFamily: "var(--font-figtree)" }}>
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics We Cover */}
      <section className="w-full px-4 sm:px-8 py-12 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2
              className="text-2xl sm:text-[32px] font-normal text-[#202020] tracking-tight mb-2"
              style={{ fontFamily: "var(--font-figtree), Figtree", fontWeight: "400" }}
            >
              What We Cover
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <TrendingUp className="w-5 h-5 text-[#156d95]" />, title: "Cross-border payment trends in India" },
              { icon: <DollarSign className="w-5 h-5 text-[#156d95]" />, title: "FX transparency & fee breakdowns" },
              { icon: <FileText className="w-5 h-5 text-[#156d95]" />, title: "Fintech regulation (RBI, FEMA, DPDPA)" },
              { icon: <Rocket className="w-5 h-5 text-[#156d95]" />, title: "Product updates & beta launch notes" },
              { icon: <Users className="w-5 h-5 text-[#156d95]" />, title: "Indian students abroad payment use cases" },
              { icon: <TrendingUp className="w-5 h-5 text-[#156d95]" />, title: "MSME international trade finance" },
            ].map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="bg-white rounded-xl p-5 border border-[#e5e5e5] flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-9 h-9 bg-[#eaf4fa] rounded-lg flex items-center justify-center">
                  {topic.icon}
                </div>
                <p
                  className="text-sm leading-5 text-[#202020]"
                  style={{ fontFamily: "var(--font-figtree), Figtree" }}
                >
                  {topic.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
