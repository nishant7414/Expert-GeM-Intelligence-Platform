'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'react-hot-toast'
import { trackEvent } from '@/lib/analytics'
import { WHATSAPP_LINK } from '@/lib/constants'



const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  message: z.string().optional(),
})
type FormData = z.infer<typeof formSchema>

export function ContactDetail() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, formName: 'Contact Form' }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Failed to submit')
      toast.success('Thank you! Our team will contact you shortly.')
      reset()
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-foreground/70">
                Have questions about our platform or services? We&apos;re here to help. Reach out to us through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-foreground/70">expertgemconsulting@gmail.com</p>
                  <p className="text-sm text-foreground/50">Response within 24 hours</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-foreground/70">+91 94737 27212</p>
                  <p className="text-sm text-foreground/50">Mon-Fri, 9 AM - 6 PM IST</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <p className="text-foreground/70">+91 94737 27212</p>
                  <p className="text-sm text-foreground/50">Quick responses available</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Office</h3>
                  <p className="text-foreground/70">New Delhi, India</p>
                  <p className="text-sm text-foreground/50">With remote team across India</p>
                </div>
              </div>
            </div>

            {/* Animated Map */}
            <div className="w-full bg-slate-50 rounded-2xl border border-slate-200 relative overflow-hidden flex flex-col items-center justify-center p-8 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-6 text-center">Our Presence Across India</h3>
              <div className="relative w-full max-w-[320px] aspect-[612/696]">
                <img src="/india-map.svg" alt="India Map" className="absolute inset-0 w-full h-full opacity-[0.08] mix-blend-darken pointer-events-none" />

                {/* Map Markers */}
                {[
                  { name: 'Delhi', top: '25%', left: '33%', delay: 0.1 },
                  { name: 'Gurugram', top: '26%', left: '32%', delay: 0.3 },
                  { name: 'Noida', top: '26%', left: '34%', delay: 0.2 },
                  { name: 'Jaipur', top: '35%', left: '26%', delay: 0.5 },
                  { name: 'Kanpur', top: '40%', left: '46%', delay: 0.7 },
                  { name: 'Patna', top: '44%', left: '60%', delay: 0.9 },
                  { name: 'Bangalore', top: '78%', left: '33%', delay: 1.1 },
                ].map((loc) => (
                  <motion.div
                    key={loc.name}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: loc.delay, type: 'spring', stiffness: 300, damping: 15 }}
                    className="absolute"
                    style={{ top: loc.top, left: loc.left }}
                  >
                    <div className="relative group cursor-pointer -translate-x-1/2 -translate-y-1/2">
                      <div className="absolute inset-[-4px] bg-primary/40 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
                      <div className="relative w-3.5 h-3.5 bg-primary rounded-full border-2 border-white shadow-md group-hover:scale-125 transition-transform"></div>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-slate-900 text-white text-[11px] font-bold rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                        {loc.name}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-slate-900"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-8 bg-card border border-border/50 rounded-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-secondary transition-colors"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  {...register("company")}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-secondary transition-colors"
                  placeholder="Your company name"
                />
                {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-secondary transition-colors"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-secondary transition-colors"
                  placeholder="+91 xxxx-xxxx-xx"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-secondary transition-colors resize-none"
                  placeholder="Tell us about your procurement needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              <p className="text-xs text-foreground/60 text-center">
                We&apos;ll get back to you within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Dedicated WhatsApp Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#F0FDF4] border border-[#25D366]/30 rounded-2xl p-8 sm:p-12 text-center"
        >
          <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Chat With Our Experts</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Get quick assistance on GeM registration, tender participation, vendor assessment, OEM authorization, and procurement consulting.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_click', { source: 'contact_page' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-lg transition-all hover:scale-105 shadow-md"
          >
            <MessageCircle size={24} />
            Start WhatsApp Chat
          </a>
        </motion.div>
      </div>
    </section>
  )
}
