import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import Link from "next/link"

export default function SitemapPage() {
  const sitemap = {
    product: [
      { name: "Features", href: "/features" },
      { name: "Integrations", href: "/integrations" },
      { name: "Pricing", href: "/pricing" },
      { name: "API Docs", href: "/api-docs" },
      { name: "Changelog", href: "/changelog" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Press Kit", href: "/press-kit" },
      { name: "Contact", href: "/contact" },
      { name: "Team", href: "/team" },
      { name: "Roadmap", href: "/roadmap" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/legal/privacy-policy" },
      { name: "Terms of Service", href: "/legal/terms-of-service" },
      { name: "Security", href: "/legal/security" },
      { name: "Compliance", href: "/legal/compliance" },
      { name: "Cookie Policy", href: "/legal/cookie-policy" },
    ],
    resources: [
      { name: "Learn More", href: "/learn-more" },
    ],
  }

  return (
    <>
      <PortfolioNavbar />
      <div className="w-full bg-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-8">
          <h1
            className="text-[56px] leading-[60px] tracking-tight text-[#202020] mb-4"
            style={{
              fontWeight: "500",
              fontFamily: "var(--font-figtree), Figtree",
            }}
          >
            Sitemap
          </h1>
          <p
            className="text-xl leading-7 text-[#666666] mb-12"
            style={{
              fontFamily: "var(--font-figtree), Figtree",
            }}
          >
            All pages and sections of the Nivixpe website
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(sitemap).map(([category, links]) => (
              <div key={category}>
                <h2
                  className="text-lg font-medium text-[#202020] mb-4 uppercase tracking-wide"
                  style={{ fontFamily: "Figtree", fontWeight: "500" }}
                >
                  {category}
                </h2>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#666666] hover:text-[#202020] transition-colors duration-150"
                        style={{ fontFamily: "Figtree" }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-[#e5e5e5]">
            <h2
              className="text-lg font-medium text-[#202020] mb-4"
              style={{ fontFamily: "Figtree", fontWeight: "500" }}
            >
              Company Information
            </h2>
            <p
              className="text-sm text-[#666666] mb-2"
              style={{ fontFamily: "Figtree" }}
            >
              <strong>NivixPe Private Limited</strong>
            </p>
            <p
              className="text-sm text-[#666666]"
              style={{ fontFamily: "Figtree" }}
            >
              📍 Miryalaguda S.v gardens, Telangana, India
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

