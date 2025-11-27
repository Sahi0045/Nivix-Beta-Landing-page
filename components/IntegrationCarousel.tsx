"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
type IntegrationApp = {
  name: string
  logo: string
}
type IntegrationCarouselProps = {
  buttonText?: string
  buttonHref?: string
  title?: string
  subtitle?: string
  apps?: IntegrationApp[]
}
const defaultApps: IntegrationApp[] = [
  {
    name: "Solana",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Solana-sol-logo-horizontal-2025.svg",
  },
  {
    name: "Times of India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_times_of_india.svg",
  },
  {
    name: "Bennett University",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Bennett_University_.jpg",
  },
  {
    name: "Solana",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Solana-sol-logo-horizontal-2025.svg",
  },
  {
    name: "Times of India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_times_of_india.svg",
  },
  {
    name: "Bennett University",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Bennett_University_.jpg",
  },
  {
    name: "Solana",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Solana-sol-logo-horizontal-2025.svg",
  },
  {
    name: "Times of India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_times_of_india.svg",
  },
  {
    name: "Bennett University",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Bennett_University_.jpg",
  },
]

// @component: IntegrationCarousel
export const IntegrationCarousel = ({
  buttonText = "Explore Blockchain Integrations",
  buttonHref = "#",
  title = "Trusted by leading technology and education partners.",
  subtitle = "Nivix partners with Solana blockchain, Bennett University, and Times of India to deliver innovative payment solutions.",
  apps = defaultApps,
}: IntegrationCarouselProps) => {
  const rowRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let animationId: number
    let position = 0
    const animateRow = () => {
      if (rowRef.current) {
        position -= 0.5
        if (Math.abs(position) >= rowRef.current.scrollWidth / 2) {
          position = 0
        }
        rowRef.current.style.transform = `translateX(${position}px)` 
      }
      animationId = requestAnimationFrame(animateRow)
    }
    animationId = requestAnimationFrame(animateRow)
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  // @return
  return (
    <div className="w-full py-24 bg-white">
      <div className="max-w-[680px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#156d95]/10 to-[#52aee3]/10 rounded-full px-4 py-2 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#156d95] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#156d95]"></span>
            </span>
            <span className="font-figtree text-sm font-medium text-[#156d95]">Trusted Partners</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h2
              className="text-[48px] leading-tight font-normal text-[#222222] text-center tracking-tight mb-0 bg-gradient-to-r from-[#156d95] via-[#52aee3] to-[#9ed2fc] bg-clip-text text-transparent"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "400",
                fontSize: "48px",
              }}
            >
              {title}
            </h2>
            <p
              className="text-xl leading-7 text-[#666666] text-center max-w-[700px] mt-4"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              {subtitle}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="flex gap-3 mt-6"
          >
            <a
              href={buttonHref}
              className="inline-block px-5 py-2.5 rounded-full bg-white text-[#222222] text-[15px] font-medium leading-6 text-center whitespace-nowrap transition-all duration-75 ease-out w-[182px] cursor-pointer hover:shadow-lg"
              style={{
                boxShadow:
                  "0 -1px 0 0 rgb(181, 181, 181) inset, -1px 0 0 0 rgb(227, 227, 227) inset, 1px 0 0 0 rgb(227, 227, 227) inset, 0 1px 0 0 rgb(227, 227, 227) inset",
                backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.06) 80%, rgba(255, 255, 255, 0.12))",
              }}
            >
              {buttonText}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="h-[150px] -mt-6 mb-0 pb-0 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div
          className="absolute top-0 right-0 bottom-0 w-32 h-[150px] z-10 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0), rgb(255, 255, 255))",
          }}
        />


        <div
          className="absolute top-0 left-0 bottom-0 w-32 h-[150px] z-10 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255), rgba(255, 255, 255, 0))",
          }}
        />


        <div
          ref={rowRef}
          className="flex items-center gap-8 absolute top-8 whitespace-nowrap"
          style={{
            willChange: "transform",
          }}
        >
          {[...apps, ...apps].map((app, index) => (
            <motion.div
              key={`app-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="flex items-center justify-center w-36 h-36 rounded-2xl flex-shrink-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <img src={app.logo || "/placeholder.svg"} alt={app.name} className="w-20 h-20 block object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
