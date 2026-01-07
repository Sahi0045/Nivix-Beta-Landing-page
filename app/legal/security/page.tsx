import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { LegalPage } from "@/components/LegalPage"
import { Footer } from "@/components/Footer"
import { readFileSync } from "fs"
import { join } from "path"

function getLegalContent(filename: string) {
  try {
    const filePath = join(process.cwd(), "legal", `${filename}.md`)
    const content = readFileSync(filePath, "utf-8")
    
    const lines = content.split("\n")
    const title = lines[0].replace(/^# /, "")
    const lastUpdatedMatch = content.match(/\*\*Last Updated:\*\* (.+)/)
    const lastUpdated = lastUpdatedMatch ? lastUpdatedMatch[1] : "January 7, 2025"
    
    const contentWithoutHeader = content
      .replace(/^# .+\n\n/, "")
      .replace(/\*\*Last Updated:\*\* .+\n\n/, "")
    
    return { title, lastUpdated, content: contentWithoutHeader }
  } catch (error) {
    console.error(`Error reading ${filename}.md:`, error)
    return {
      title: "Security",
      lastUpdated: "January 7, 2025",
      content: "Content not available.",
    }
  }
}

export default function SecurityPage() {
  const { title, lastUpdated, content } = getLegalContent("security")

  return (
    <>
      <PortfolioNavbar />
      <LegalPage title={title} lastUpdated={lastUpdated} content={content} />
      <Footer />
    </>
  )
}

