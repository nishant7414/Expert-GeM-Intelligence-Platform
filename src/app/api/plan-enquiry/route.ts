import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import * as z from 'zod'

const formSchema = z.object({
  plan: z.string(),
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(5),
  requirements: z.string().optional(),
})

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_RECEIVER_EMAIL) {
      console.error('Missing Resend configuration')
      return NextResponse.json(
        { error: 'Email service is not configured properly.' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const body = await req.json()
    const validatedData = formSchema.parse(body)

    const response = await resend.emails.send({
      from: 'Expert GeM <onboarding@resend.dev>',
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New Plan Enquiry - ${validatedData.plan}`,
      text: `New Plan Enquiry Details

Selected Plan: ${validatedData.plan}
Name: ${validatedData.name}
Company: ${validatedData.company}
Email: ${validatedData.email}
Phone: ${validatedData.phone}
Business Requirement: ${validatedData.requirements || 'N/A'}
Submitted At: ${new Date().toISOString()}`,
    })

    console.log("RESEND RAW RESPONSE:", response)

    if (response.error) {
      console.error('Resend error:', response.error)
      return NextResponse.json(
        { error: 'Failed to send email via Resend: ' + response.error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data: response.data })
  } catch (error) {
    console.error('Plan Enquiry submission error:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data. Please check your inputs.' },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to submit enquiry. Please try again later.' },
      { status: 500 }
    )
  }
}
