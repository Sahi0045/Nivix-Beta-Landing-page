"use client"

import { motion } from "framer-motion"
import { Wrench, FlaskConical, Rocket, Users, Crown, Target, FileText, Database, CheckCircle2 } from "lucide-react"

type TimelineStage = {
  icon: React.ReactNode
  title: string
  dateRange: string
  status: "completed" | "current" | "upcoming"
  description?: string
}

const timelineStages: TimelineStage[] = [
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Project Development",
    dateRange: "2024 - Q3 2025",
    status: "current",
    description: "Building core infrastructure and platform features",
  },
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: "Beta Testing",
    dateRange: "Q3 - Q4 2025",
    status: "upcoming",
    description: "India-UK beta launch with select partners",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Global Launch",
    dateRange: "Q4 2025",
    status: "upcoming",
    description: "Public launch with full feature set",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Market Expansion",
    dateRange: "2026 - 2030",
    status: "upcoming",
    description: "Expanding to new markets and regions",
  },
  {
    icon: <Crown className="w-6 h-6" />,
    title: "Platform Dominance",
    dateRange: "2030+",
    status: "upcoming",
    description: "Leading the global payments infrastructure",
  },
]

type StatusCard = {
  icon: React.ReactNode
  title: string
  status: string
  color: string
}

const statusCards: StatusCard[] = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Backend Status",
    status: "Complete",
    color: "text-green-500",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Frontend Status",
    status: "In progress",
    color: "text-purple-500",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Launch ETA",
    status: "Global launch by end of 2025",
    color: "text-[#156d95]",
  },
]

const milestones = [
  { milestone: "Backend foundation complete", date: "Q3 2025" },
  { milestone: "Frontend feature completion", date: "Q4 2025" },
  { milestone: "Compliance & readiness", date: "Q4 2025" },
  { milestone: "Global launch", date: "Dec 2025" },
]

const deliverables = ["Payment APIs", "Mobile Apps", "Web Dashboard"]

export const RoadmapSection = () => {
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
              className="text-[56px] leading-[60px] tracking-tight text-[#202020] mb-4"
              style={{
                fontWeight: "500",
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Nivixpe Development Timeline
            </h1>
            <p
              className="text-xl leading-7 text-[#666666]"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Roadmap 2024-2030+
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full px-8 py-16 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Timeline Line - Desktop */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-300 hidden lg:block" />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "20%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute top-12 left-0 h-0.5 bg-[#156d95] hidden lg:block"
            />

            {/* Timeline Stages */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {timelineStages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Icon Circle */}
                    <div
                      className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 relative z-10 ${
                        stage.status === "completed"
                          ? "bg-green-500 text-white"
                          : stage.status === "current"
                          ? "bg-[#156d95] text-white shadow-lg"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {stage.icon}
                    </div>

                    {/* Stage Info */}
                    <h3
                      className="text-lg font-medium text-[#202020] mb-2"
                      style={{
                        fontFamily: "var(--font-figtree), Figtree",
                        fontWeight: "500",
                      }}
                    >
                      {stage.title}
                    </h3>
                    <p
                      className="text-sm text-[#156d95] font-medium mb-2"
                      style={{
                        fontFamily: "var(--font-figtree), Figtree",
                      }}
                    >
                      {stage.dateRange}
                    </p>
                    {stage.description && (
                      <p
                        className="text-xs text-[#666666]"
                        style={{
                          fontFamily: "var(--font-figtree), Figtree",
                        }}
                      >
                        {stage.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Progress Overview Section */}
      <section className="w-full px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#1a1a1a] rounded-3xl p-8 lg:p-12 text-white"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h2
                className="text-3xl font-medium text-white"
                style={{
                  fontFamily: "var(--font-figtree), Figtree",
                  fontWeight: "500",
                }}
              >
                Frontend Development 2025
              </h2>
              <span className="px-4 py-1.5 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                In Progress
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-sm text-gray-400"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                  }}
                >
                  Progress
                </span>
                <span
                  className="text-sm font-medium text-white"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                  }}
                >
                  85%
                </span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full bg-purple-500 rounded-full"
                />
              </div>
            </div>

            {/* Status Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {statusCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6"
                >
                  <div className={`${card.color} mb-4`}>{card.icon}</div>
                  <h3
                    className="text-sm font-medium text-gray-400 mb-2"
                    style={{
                      fontFamily: "var(--font-figtree), Figtree",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-lg font-medium ${card.color}`}
                    style={{
                      fontFamily: "var(--font-figtree), Figtree",
                    }}
                  >
                    {card.status}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Milestones and Deliverables */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Key Milestones */}
              <div>
                <h3
                  className="text-xl font-medium text-white mb-6"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                    fontWeight: "500",
                  }}
                >
                  Key Milestones
                </h3>
                <div className="space-y-4">
                  {milestones.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                      <div className="flex-1">
                        <p
                          className="text-base text-white mb-1"
                          style={{
                            fontFamily: "var(--font-figtree), Figtree",
                          }}
                        >
                          {item.milestone}
                        </p>
                        <p
                          className="text-sm text-gray-400"
                          style={{
                            fontFamily: "var(--font-figtree), Figtree",
                          }}
                        >
                          {item.date}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h3
                  className="text-xl font-medium text-white mb-6"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                    fontWeight: "500",
                  }}
                >
                  Deliverables
                </h3>
                <div className="space-y-4">
                  {deliverables.map((deliverable, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="inline-block mr-3 mb-3"
                    >
                      <span
                        className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg text-sm font-medium border border-purple-500/30"
                        style={{
                          fontFamily: "var(--font-figtree), Figtree",
                        }}
                      >
                        {deliverable}
                      </span>
                    </motion.div>
                  ))}
                  <div className="mt-6">
                    <p
                      className="text-sm text-gray-400"
                      style={{
                        fontFamily: "var(--font-figtree), Figtree",
                      }}
                    >
                      Target completion: Q3 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

