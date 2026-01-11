"use client"

import { motion } from "framer-motion"

type TeamMember = {
  name: string
  role: string
  focusAreas: string[]
  responsibilities: string[]
}

const teamMembers: TeamMember[] = [
  {
    name: "Sahith",
    role: "Founder & CEO",
    focusAreas: ["Strategy", "Partnerships", "Regulatory", "Technology Oversight"],
    responsibilities: [
      "Company vision & execution",
      "RBI licensing & compliance alignment",
      "UAE & global partner coordination",
      "Active involvement in tech architecture, product decisions, and blockchain strategy",
    ],
  },
  {
    name: "Shubham",
    role: "CTO",
    focusAreas: ["Tech Architecture", "Blockchain"],
    responsibilities: [
      "Solana–Hyperledger stack",
      "FX engine & settlement logic",
      "Platform scalability & security",
    ],
  },
  {
    name: "Swaraag",
    role: "CSA (Chief Strategy Advisor)",
    focusAreas: ["Strategy", "Business Development"],
    responsibilities: [
      "Investor relations",
      "Partnership structuring & deal-making",
    ],
  },
  {
    name: "Abhiram",
    role: "CMO",
    focusAreas: ["Marketing", "Growth", "Brand"],
    responsibilities: [
      "GTM strategy",
      "Consultancy partnerships",
      "CAC optimization",
    ],
  },
  {
    name: "Harika",
    role: "Marketing Lead",
    focusAreas: ["Marketing Execution", "Campus Activation"],
    responsibilities: [
      "Campaign execution",
      "University & campus outreach",
      "Brand operations support",
    ],
  },
  {
    name: "Siddharth",
    role: "research and Analytics Lead",
    focusAreas: ["Research", "Analytics"],
    responsibilities: [
      "Research",
      "Analytics",
    ],
  },
]

const advisor: TeamMember = {
  name: "Vimal",
  role: "Advisor (Blockchain Education Department)",
  focusAreas: ["Blockchain Education", "Technical Guidance"],
  responsibilities: [
    "Educational and academic guidance in blockchain",
    "Technical mentorship support",
    "Not regulatory or compliance advisor",
  ],
}

export const TeamSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-[40px] leading-tight font-normal text-[#202020] tracking-tight mb-3 sm:mb-4"
            style={{
              fontFamily: "var(--font-figtree), Figtree",
              fontWeight: "400",
            }}
          >
            Leadership & Core Team
          </h2>
          <p
            className="text-base sm:text-lg leading-5 sm:leading-6 text-[#666666] max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--font-figtree), Figtree",
            }}
          >
            Incubated by Bennett University (Times of India Group)
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="bg-[#f9f9f9] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3
                className="text-xl sm:text-2xl font-medium text-[#202020] mb-1"
                style={{
                  fontFamily: "var(--font-figtree), Figtree",
                  fontWeight: "500",
                }}
              >
                {member.name}
              </h3>
              <p
                className="text-sm sm:text-base text-[#156d95] mb-4"
                style={{
                  fontFamily: "var(--font-figtree), Figtree",
                  fontWeight: "500",
                }}
              >
                {member.role}
              </p>

              <div className="mb-4">
                <p
                  className="text-sm font-medium text-[#202020] mb-2"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                  }}
                >
                  Focus Areas:
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.focusAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-[#156d95]/10 text-[#156d95] rounded-full"
                      style={{
                        fontFamily: "var(--font-figtree), Figtree",
                      }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p
                  className="text-sm font-medium text-[#202020] mb-2"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                  }}
                >
                  Key Responsibilities:
                </p>
                <ul className="space-y-1">
                  {member.responsibilities.map((responsibility, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-[#666666] flex items-start"
                      style={{
                        fontFamily: "var(--font-figtree), Figtree",
                      }}
                    >
                      <span className="text-[#156d95] mr-2">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisor Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="bg-gradient-to-r from-[#156d95]/5 to-[#52aee3]/5 rounded-2xl p-8 border border-[#156d95]/20"
        >
          <h3
            className="text-xl sm:text-2xl font-medium text-[#202020] mb-1"
            style={{
              fontFamily: "var(--font-figtree), Figtree",
              fontWeight: "500",
            }}
          >
            {advisor.name}
          </h3>
          <p
            className="text-sm sm:text-base text-[#156d95] mb-4"
            style={{
              fontFamily: "var(--font-figtree), Figtree",
              fontWeight: "500",
            }}
          >
            {advisor.role}
          </p>

          <div className="mb-4">
            <p
              className="text-sm font-medium text-[#202020] mb-2"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Focus Areas:
            </p>
            <div className="flex flex-wrap gap-2">
              {advisor.focusAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 bg-[#156d95]/10 text-[#156d95] rounded-full"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                  }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p
              className="text-sm font-medium text-[#202020] mb-2"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Role at Nivixpe:
            </p>
            <ul className="space-y-1">
              {advisor.responsibilities.map((responsibility, idx) => (
                <li
                  key={idx}
                  className="text-sm text-[#666666] flex items-start"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                  }}
                >
                  <span className="text-[#156d95] mr-2">•</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

