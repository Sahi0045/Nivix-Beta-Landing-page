import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

const dataDir = path.join(process.cwd(), "data")
const waitlistFile = path.join(dataDir, "waitlist.json")

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

// Read waitlist data
async function readWaitlist() {
  await ensureDataDir()
  try {
    const fileContents = await fs.readFile(waitlistFile, "utf8")
    return JSON.parse(fileContents)
  } catch {
    return { entries: [] }
  }
}

// Write waitlist data
async function writeWaitlist(data: any) {
  await ensureDataDir()
  await fs.writeFile(waitlistFile, JSON.stringify(data, null, 2), "utf8")
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name } = body

    // Validate input
    if (!email || !name) {
      return NextResponse.json(
        { error: "Email and name are required" },
        { status: 400 },
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      )
    }

    // Read existing waitlist
    const waitlistData = await readWaitlist()

    // Check if email already exists
    const existingEntry = waitlistData.entries.find(
      (entry: any) => entry.email.toLowerCase() === email.toLowerCase(),
    )

    if (existingEntry) {
      return NextResponse.json(
        { error: "This email is already on the waitlist" },
        { status: 409 },
      )
    }

    // Add new entry
    const newEntry = {
      id: Date.now().toString(),
      email: email.toLowerCase(),
      name: name.trim(),
      createdAt: new Date().toISOString(),
      status: "pending", // You can use this to track if you've replied to them
    }

    waitlistData.entries.push(newEntry)

    // Save to file
    await writeWaitlist(waitlistData)

    return NextResponse.json(
      {
        success: true,
        message: "Successfully added to waitlist",
        entry: newEntry,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error processing waitlist request:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    )
  }
}

// Optional: GET endpoint to view waitlist entries (you might want to protect this)
export async function GET() {
  try {
    const waitlistData = await readWaitlist()
    return NextResponse.json(waitlistData, { status: 200 })
  } catch (error) {
    console.error("Error reading waitlist:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    )
  }
}

