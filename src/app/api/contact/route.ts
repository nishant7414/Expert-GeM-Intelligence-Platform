import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

// Remove top level Resend initialization

// Zod Schema for validation
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  industry: z.string().optional(),
  serviceNeeded: z.string().optional(),
  message: z.string().optional(),
  formName: z.string(),
})

export async function POST(req: Request) {
  try {
    // Check for required env variables
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_RECEIVER_EMAIL) {
      console.error("Missing Resend API Key or Contact Receiver Email")
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    
    const body = await req.json()
    
    // Validate request body
    const validatedData = contactSchema.parse(body)

    // Send email via Resend
    const data = await resend.emails.send({
      from: 'Expert GeM <onboarding@resend.dev>', // Resend's default testing domain
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: 'New Lead Received - Expert GeM Consultancy',
      text: `
Name: ${validatedData.name}
Phone: ${validatedData.phone}
Email: ${validatedData.email}
Company: ${validatedData.company}
Industry: ${validatedData.industry || 'Not Provided'}
Service: ${validatedData.serviceNeeded || 'Not Provided'}
Message: ${validatedData.message || 'No message provided'}
Submitted At: ${new Date().toISOString()}
Source Form: ${validatedData.formName}
      `,
    })

    if (data.error) {
      console.error("Resend Error:", data.error)
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation error", details: error.issues },
        { status: 400 }
      )
    }
    
    console.error("API Error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
