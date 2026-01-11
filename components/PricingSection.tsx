"use client"

import * as React from "react"
import { CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { WaitlistDialog } from "@/components/WaitlistDialog"

type PlanLevel = "starter" | "pro" | "enterprise"

interface PricingFeature {
  name: string
  included: PlanLevel | "all"
}

interface PricingPlan {
  name: string
  level: PlanLevel
  price: {
    monthly: number
    yearly: number
  }
  popular?: boolean
}

const features: PricingFeature[] = [
  { name: "Instant cross-border payments (< 3s)", included: "all" },
  { name: "Zero transaction fees", included: "all" },
  { name: "150+ countries supported", included: "all" },
  { name: "Fiat-to-Fiat conversion", included: "all" },
  { name: "Real-time transaction tracking", included: "all" },
  { name: "Advanced fraud detection", included: "all" },
  { name: "API access for developers", included: "all" },
  { name: "Priority beta support", included: "all" },
]

const plans: PricingPlan[] = [
  {
    name: "India-UK Beta",
    price: { monthly: 0, yearly: 0 },
    level: "starter",
    popular: true,
  },
]

function shouldShowCheck(included: PricingFeature["included"], level: PlanLevel): boolean {
  if (included === "all") return true
  if (included === "enterprise" && level === "enterprise") return true
  if (included === "pro" && (level === "pro" || level === "enterprise")) return true
  if (included === "starter") return true
  return false
}

export function PricingSection() {
  const [isYearly, setIsYearly] = React.useState(false)
  const [selectedPlan, setSelectedPlan] = React.useState<PlanLevel>("pro")
  const [isWaitlistDialogOpen, setIsWaitlistDialogOpen] = React.useState(false)

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-figtree text-2xl sm:text-3xl md:text-[40px] font-normal leading-tight mb-3 sm:mb-4">Join India-UK Beta</h2>
          <p className="font-figtree text-base sm:text-lg leading-6 sm:leading-7 text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Be among the first to experience instant cross-border payments. Zero fees, unlimited transactions, and priority support for beta participants.
          </p>
        </div>

        {/* Beta Launch Timeline */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
          <div className="bg-secondary rounded-full px-4 sm:px-6 py-2 sm:py-3">
            <span className="font-figtree text-base sm:text-lg text-[#156d95] font-medium"> Launching Q1 2026</span>
          </div>
        </div>

        {/* Beta Card - Centered */}
        <div className="max-w-2xl mx-auto mb-10 sm:mb-12">
          <div
            className={cn(
              "relative p-8 rounded-2xl text-left transition-all border-2",
              selectedPlan === "starter"
                ? "border-[#156d95] bg-[#156d95]/5"
                : "border-border hover:border-[#156d95]/50",
            )}
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#156d95] text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-figtree">
              Most Popular
            </span>
            <div className="mb-6 text-center">
              <h3 className="font-figtree text-xl sm:text-2xl font-medium mb-2">{plans[0].name}</h3>
              <div className="flex items-center justify-center gap-1 flex-wrap">
                <span className="font-figtree text-3xl sm:text-4xl font-medium text-[#156d95]">
                  0 $
                </span>
                <span className="font-figtree text-sm sm:text-base md:text-lg text-muted-foreground">for beta participants</span>
              </div>
            </div>
            <button
              onClick={() => setIsWaitlistDialogOpen(true)}
              className={cn(
                "w-full py-3 px-6 rounded-full font-figtree text-base sm:text-lg transition-all text-center active:scale-98",
                selectedPlan === "starter" ? "bg-[#156d95] text-white" : "bg-secondary text-foreground",
              )}
              style={{ minHeight: "48px" }}
            >
              Join Beta
            </button>
          </div>
        </div>

        {/* Features Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="p-6 rounded-2xl border border-border bg-card hover:border-[#156d95]/50 transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#156d95] flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-figtree text-base sm:text-lg font-medium mb-2">{feature.name}</h4>
                  <p className="font-figtree text-sm leading-5 text-muted-foreground">
                    Included in all beta plans with full access and priority support.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Competitive Comparison */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h3 className="font-figtree text-xl sm:text-2xl md:text-[32px] font-normal leading-tight mb-3 sm:mb-4">Why Choose Nivix Over Traditional Options</h3>
            <p className="font-figtree text-base sm:text-lg leading-6 sm:leading-7 text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Compare our revolutionary cross-border payment solution with existing market players.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {[
              { name: "Nivix", time: "< 3 seconds", fees: "0.5-1.3%", highlight: true },
              { name: "Wise", time: "1-2 days", fees: "2-3%", highlight: false },
              { name: "PayPal", time: "2-4 days", fees: "2.5-4%", highlight: false },
              { name: "Lemfi", time: "1-3 days", fees: "1-3%", highlight: false },
              { name: "Banks/SWIFT", time: "3-5 days", fees: "3-8%", highlight: false },
            ].map((provider) => (
              <div
                key={provider.name}
                className={cn(
                  "p-6 rounded-2xl border text-center transition-all",
                  provider.highlight
                    ? "border-[#156d95] bg-[#156d95]/5 shadow-lg"
                    : "border-border bg-card hover:border-[#156d95]/50"
                )}
              >
                <h4 className="font-figtree text-base sm:text-lg font-medium mb-3 sm:mb-4">{provider.name}</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-figtree text-sm text-muted-foreground mb-1">Transfer Time</p>
                    <p className={cn(
                      "font-figtree text-xl font-bold",
                      provider.highlight ? "text-[#156d95]" : "text-foreground"
                    )}>
                      {provider.time}
                    </p>
                  </div>
                  <div>
                    <p className="font-figtree text-sm text-muted-foreground mb-1">Fees</p>
                    <p className={cn(
                      "font-figtree text-xl font-bold",
                      provider.highlight ? "text-[#156d95]" : "text-foreground"
                    )}>
                      {provider.fees}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <button
            onClick={() => setIsWaitlistDialogOpen(true)}
            className="bg-[#156d95] text-white px-5 sm:px-[18px] py-3 sm:py-[15px] rounded-full font-figtree text-base sm:text-lg hover:rounded-2xl transition-all active:scale-98"
            style={{ minHeight: "48px" }}
          >
            Join India-UK Beta Program
          </button>
        </div>
      </div>
      <WaitlistDialog
        open={isWaitlistDialogOpen}
        onOpenChange={setIsWaitlistDialogOpen}
      />
    </section>
  )
}
