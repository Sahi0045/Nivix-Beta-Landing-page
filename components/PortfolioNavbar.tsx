"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { WaitlistDialog } from "@/components/WaitlistDialog"
const navigationLinks = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Team",
    href: "/team",
  },
  {
    name: "Roadmap",
    href: "/roadmap",
  },
  {
    name: "Resources",
    href: "#resources",
  },
] as any[]

// @component: PortfolioNavbar
export const PortfolioNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isWaitlistDialogOpen, setIsWaitlistDialogOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }
  const handleLinkClick = (href: string) => {
    closeMobileMenu()
    // Check if it's an anchor link (starts with #)
    if (href.startsWith("#")) {
      // If we're on a different page, navigate to home first
      if (pathname !== "/") {
        router.push(`/${href}`)
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
            })
          }
        }, 100)
      } else {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          })
        }
      }
    } else {
      // It's a route, use Next.js navigation
      router.push(href)
    }
  }

  // @return
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
      style={{ paddingTop: "max(0px, env(safe-area-inset-top))" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold text-foreground hover:text-primary transition-colors duration-200"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              <span
                style={{
                  fontFamily: "Figtree",
                  fontWeight: "800",
                }}
              >
                nivixpe
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 sm:ml-10 flex items-baseline space-x-4 sm:space-x-8">
              {navigationLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-foreground hover:text-primary px-2 sm:px-3 py-2 text-sm sm:text-base font-medium transition-colors duration-200 relative group"
                  style={{
                    fontFamily: "Figtree, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  <span>{link.name}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => setIsWaitlistDialogOpen(true)}
              className="bg-[#156d95] text-white px-4 sm:px-[18px] rounded-full text-sm sm:text-base font-semibold hover:bg-[#156d95]/90 transition-all duration-200 hover:rounded-2xl shadow-sm hover:shadow-md whitespace-nowrap leading-4 py-2 sm:py-[15px]"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              <span
                style={{
                  fontFamily: "Figtree",
                  fontWeight: "500",
                }}
              >
                Start Join Waitlist
              </span>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-foreground hover:text-primary p-3 rounded-md transition-colors duration-200 active:scale-95"
              aria-label="Toggle mobile menu"
              style={{ minWidth: "44px", minHeight: "44px" }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border shadow-lg"
          >
            <div className="px-4 py-4 space-y-2" style={{ paddingBottom: "max(16px, env(safe-area-inset-bottom))" }}>
              {navigationLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="block w-full text-left text-foreground hover:text-primary py-3 px-4 text-base font-medium transition-all duration-200 rounded-lg hover:bg-accent/50 active:scale-98"
                  style={{
                    fontFamily: "Figtree, sans-serif",
                    fontWeight: "500",
                    minHeight: "44px",
                  }}
                >
                  <span className="flex items-center">
                    {link.name}
                    <ArrowUpRight className="ml-2 w-4 h-4 opacity-70" />
                  </span>
                </button>
              ))}
              <div className="pt-4 border-t border-border">
                <button
                  onClick={() => {
                    setIsWaitlistDialogOpen(true)
                    closeMobileMenu()
                  }}
                  className="w-full bg-[#156d95] text-white py-3 px-4 rounded-full text-base font-semibold hover:bg-[#156d95]/90 transition-all duration-200 flex items-center justify-center space-x-2 active:scale-98"
                  style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    minHeight: "48px",
                  }}
                >
                  <span>Start Join Waitlist</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <WaitlistDialog
        open={isWaitlistDialogOpen}
        onOpenChange={setIsWaitlistDialogOpen}
      />
    </nav>
  )
}
