"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

type LegalPageProps = {
  title: string
  lastUpdated: string
  content: string
}

// Simple markdown parser for basic formatting
const parseMarkdown = (content: string): ReactNode[] => {
  const lines = content.split("\n")
  const elements: ReactNode[] = []
  let currentList: string[] = []
  let inList = false

  lines.forEach((line, index) => {
    // Headers
    if (line.startsWith("# ")) {
      if (inList && currentList.length > 0) {
        elements.push(
          <ul key={`list-${index}`} className="list-disc list-inside space-y-2 mb-6 ml-4">
            {currentList.map((item, i) => (
              <li key={i} className="text-base text-[#666666]">{item}</li>
            ))}
          </ul>
        )
        currentList = []
        inList = false
      }
      elements.push(
        <h1
          key={index}
          className="text-3xl font-medium text-[#202020] mb-6 mt-8"
          style={{ fontFamily: "var(--font-figtree), Figtree", fontWeight: "500" }}
        >
          {line.replace(/^# /, "")}
        </h1>
      )
    } else if (line.startsWith("## ")) {
      if (inList && currentList.length > 0) {
        elements.push(
          <ul key={`list-${index}`} className="list-disc list-inside space-y-2 mb-6 ml-4">
            {currentList.map((item, i) => (
              <li key={i} className="text-base text-[#666666]">{item}</li>
            ))}
          </ul>
        )
        currentList = []
        inList = false
      }
      elements.push(
        <h2
          key={index}
          className="text-2xl font-medium text-[#202020] mb-4 mt-8"
          style={{ fontFamily: "var(--font-figtree), Figtree", fontWeight: "500" }}
        >
          {line.replace(/^## /, "")}
        </h2>
      )
    } else if (line.startsWith("### ")) {
      if (inList && currentList.length > 0) {
        elements.push(
          <ul key={`list-${index}`} className="list-disc list-inside space-y-2 mb-6 ml-4">
            {currentList.map((item, i) => (
              <li key={i} className="text-base text-[#666666]">{item}</li>
            ))}
          </ul>
        )
        currentList = []
        inList = false
      }
      elements.push(
        <h3
          key={index}
          className="text-xl font-medium text-[#202020] mb-3 mt-6"
          style={{ fontFamily: "var(--font-figtree), Figtree", fontWeight: "500" }}
        >
          {line.replace(/^### /, "")}
        </h3>
      )
    } else if (line.startsWith("- ")) {
      // List items
      inList = true
      currentList.push(line.replace(/^- /, ""))
    } else if (line.trim() === "") {
      // Empty line - close list if open
      if (inList && currentList.length > 0) {
        elements.push(
          <ul key={`list-${index}`} className="list-disc list-inside space-y-2 mb-6 ml-4">
            {currentList.map((item, i) => (
              <li key={i} className="text-base text-[#666666]">{item}</li>
            ))}
          </ul>
        )
        currentList = []
        inList = false
      }
    } else if (line.trim().startsWith("**") && line.trim().endsWith("**")) {
      // Bold text
      if (inList && currentList.length > 0) {
        elements.push(
          <ul key={`list-${index}`} className="list-disc list-inside space-y-2 mb-6 ml-4">
            {currentList.map((item, i) => (
              <li key={i} className="text-base text-[#666666]">{item}</li>
            ))}
          </ul>
        )
        currentList = []
        inList = false
      }
      const boldText = line.replace(/\*\*/g, "")
      elements.push(
        <p
          key={index}
          className="text-base font-medium text-[#202020] mb-4"
          style={{ fontFamily: "var(--font-figtree), Figtree" }}
        >
          {boldText}
        </p>
      )
    } else if (line.trim() !== "") {
      // Regular paragraph
      if (inList && currentList.length > 0) {
        elements.push(
          <ul key={`list-${index}`} className="list-disc list-inside space-y-2 mb-6 ml-4">
            {currentList.map((item, i) => (
              <li key={i} className="text-base text-[#666666]">{item}</li>
            ))}
          </ul>
        )
        currentList = []
        inList = false
      }
      elements.push(
        <p
          key={index}
          className="text-base leading-7 text-[#666666] mb-4"
          style={{ fontFamily: "var(--font-figtree), Figtree" }}
        >
          {line}
        </p>
      )
    }
  })

  // Close any remaining list
  if (inList && currentList.length > 0) {
    elements.push(
      <ul key="list-final" className="list-disc list-inside space-y-2 mb-6 ml-4">
        {currentList.map((item, i) => (
          <li key={i} className="text-base text-[#666666]">{item}</li>
        ))}
      </ul>
    )
  }

  return elements
}

export const LegalPage = ({ title, lastUpdated, content }: LegalPageProps) => {
  const parsedContent = parseMarkdown(content)

  return (
    <div className="w-full bg-white">
      <section className="w-full px-8 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1
              className="text-[56px] leading-[60px] tracking-tight text-[#202020] mb-4"
              style={{
                fontWeight: "500",
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              {title}
            </h1>
            <p
              className="text-base text-[#666666]"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              <strong>Last Updated:</strong> {lastUpdated}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {parsedContent}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

