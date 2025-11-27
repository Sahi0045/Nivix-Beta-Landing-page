"use client"

import * as React from "react"
import { CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

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
  { name: "Zero transaction fees vs SWIFT", included: "all" },
  { name: "Fiat-to-Fiat conversion", included: "all" },
  { name: "Solana + Hyperledger blockchain", included: "all" },
  { name: "Trade finance integration", included: "all" },
  { name: "150+ countries supported", included: "all" },
  { name: "API access for developers", included: "all" },
  { name: "Real-time transaction tracking", included: "all" },
  { name: "Advanced fraud detection", included: "all" },
  { name: "Multi-currency support", included: "all" },
  { name: "Priority beta support", included: "all" },
  { name: "Dedicated onboarding", included: "all" },
  { name: "Early adopter benefits", included: "all" },
  { name: "Future feature access", included: "all" },
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

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-figtree text-[40px] font-normal leading-tight mb-4">Join India-UK Beta</h2>
          <p className="font-figtree text-lg text-muted-foreground max-w-2xl mx-auto">
            Be among the first to experience instant cross-border payments. Zero fees, unlimited transactions, and priority support for beta participants.
          </p>
        </div>

        {/* Beta Launch Timeline */}
        <div className="flex justify-center mb-12">
          <div className="bg-secondary rounded-full px-6 py-3">
            <span className="font-figtree text-lg text-[#156d95] font-medium"> Launching Q1 2026</span>
          </div>
        </div>

        {/* Beta Card - Centered */}
        <div className="max-w-2xl mx-auto mb-12">
          <div
            className={cn(
              "relative p-8 rounded-2xl text-left transition-all border-2",
              selectedPlan === "starter"
                ? "border-[#156d95] bg-[#156d95]/5"
                : "border-border hover:border-[#156d95]/50",
            )}
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#156d95] text-white px-4 py-1 rounded-full text-sm font-figtree">
              Most Popular
            </span>
            <div className="mb-6 text-center">
              <h3 className="font-figtree text-2xl font-medium mb-2">{plans[0].name}</h3>
              <div className="flex items-center justify-center gap-1">
                <span className="font-figtree text-4xl font-medium text-[#156d95]">
                  0 $
                </span>
                <span className="font-figtree text-lg text-muted-foreground">for beta participants</span>
              </div>
            </div>
            <div
              className={cn(
                "w-full py-3 px-6 rounded-full font-figtree text-lg transition-all text-center",
                selectedPlan === "starter" ? "bg-[#156d95] text-white" : "bg-secondary text-foreground",
              )}
            >
              Join Beta
            </div>
          </div>
        </div>

        {/* Features Table */}
        <div className="border border-border rounded-2xl overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <div className="min-w-[768px]">
              {/* Table Header */}
              <div className="flex items-center p-6 bg-secondary border-b border-border">
                <div className="flex-1">
                  <h3 className="font-figtree text-xl font-medium">Features</h3>
                </div>
                <div className="flex items-center gap-8">
                  {plans.map((plan) => (
                    <div key={plan.level} className="w-24 text-center font-figtree text-lg font-medium">
                      {plan.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Rows */}
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className={cn(
                    "flex items-center p-6 transition-colors",
                    index % 2 === 0 ? "bg-background" : "bg-secondary/30",
                    feature.included === selectedPlan && "bg-[#156d95]/5",
                  )}
                >
                  <div className="flex-1">
                    <span className="font-figtree text-lg">{feature.name}</span>
                  </div>
                  <div className="flex items-center gap-8">
                    {plans.map((plan) => (
                      <div key={plan.level} className="w-24 flex justify-center">
                        {shouldShowCheck(feature.included, plan.level) ? (
                          <div className="w-6 h-6 rounded-full bg-[#156d95] flex items-center justify-center">
                            <CheckIcon className="w-4 h-4 text-white" />
                          </div>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button className="bg-[#156d95] text-white px-[18px] py-[15px] rounded-full font-figtree text-lg hover:rounded-2xl transition-all">
            Join India-UK Beta Program
          </button>
        </div>
      </div>
    </section>
  )
}
