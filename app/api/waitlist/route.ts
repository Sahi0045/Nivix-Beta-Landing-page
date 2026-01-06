import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { supabaseServerClient } from "@/lib/supabaseServer"

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

    // Optionally store in Supabase if configured
    let supabaseSaved = false
    try {
      if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
        const supabase = supabaseServerClient()

        // Check if email already exists
        const { data: existing, error: existingError } = await supabase
          .from("waitlist_signups")
          .select("id")
          .eq("email", email.toLowerCase())
          .maybeSingle()

        if (existingError) {
          console.error("[waitlist] Error checking existing Supabase entry:", existingError)
        } else if (!existing) {
          const { error: insertError } = await supabase.from("waitlist_signups").insert({
            email: email.toLowerCase(),
            name: name.trim(),
            status: "pending",
          })

          if (insertError) {
            console.error("[waitlist] Error inserting Supabase entry:", insertError)
          } else {
            supabaseSaved = true
          }
        } else {
          supabaseSaved = true
        }
      } else {
        console.warn("[waitlist] Supabase env vars not set; skipping DB storage.")
      }
    } catch (supabaseError) {
      console.error("[waitlist] Unexpected Supabase error:", supabaseError)
    }

    // Ensure SMTP is configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("[waitlist] SMTP environment variables are not fully configured.")
      return NextResponse.json(
        { error: "Email service is not configured on the server." },
        { status: 500 },
      )
    }

    const notifyEmail = process.env.WAITLIST_NOTIFY_EMAIL || "nivix394@gmail.com"

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Internal notification to founder / team
    await transporter.sendMail({
      from: `"NivixPe Waitlist" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: notifyEmail,
      subject: "New NivixPe waitlist signup",
      text: `New waitlist signup:

Name: ${name}
Email: ${email}
Saved to Supabase: ${supabaseSaved ? "yes" : "no (check env / table config)"}`,
    })

    // Friendly confirmation email to the person who joined the waitlist
    await transporter.sendMail({
      from: `"NivixPe" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for joining the NivixPe waitlist",
      text: `Dear ${name},

Thank you for joining the NivixPe beta waitlist.

You’re now on our early access list for the upcoming cross-border payments testing phase. 
As we progress with our India–UK beta and obtain the necessary regulatory clearances for production, 
we'll reach out with updates, timelines, and next steps.

Please do not share any sensitive banking information over email. Our team will only contact you from official NivixPe channels.

Warm regards,
Team NivixPe
contact@nivixpe.com`,
    })

    return NextResponse.json(
      {
        success: true,
        message: "Successfully sent waitlist details",
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

