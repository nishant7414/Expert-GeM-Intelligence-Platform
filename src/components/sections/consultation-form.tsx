'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'react-hot-toast'



const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  industry: z.string().min(1, "Industry is required"),
  serviceNeeded: z.string().min(1, "Service is required"),
  message: z.string().optional(),
})
type FormData = z.infer<typeof formSchema>

export function ConsultationForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, formName: 'Book Consultation Form' }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Failed to submit')
      toast.success('Thank you! Our team will contact you shortly.')
      reset()
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong. Please try again.')
    }
  }

  const industries = [
    'Manufacturing',
    'Information Technology',
    'Construction',
    'Healthcare',
    'Education',
    'Logistics',
    'Infrastructure',
    'Consulting Services',
    'Other',
  ]

  const services = [
    'GeM Registration',
    'Tender Consultation',
    'Vendor Assessment',
    'OEM Authorization',
    'Compliance Support',
    'Platform Demo',
    'General Inquiry',
  ]

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Trust Signals */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-secondary">95%</div>
              <p className="text-sm text-foreground/70">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">1000+</div>
              <p className="text-sm text-foreground/70">Happy Clients</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">24h</div>
              <p className="text-sm text-foreground/70">Response Time</p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 p-8 bg-card border border-border/50 rounded-lg"
          >
            <div className="grid md:grid-cols-2 gap-6">
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
                  placeholder="Your company"
                />
                {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="industry" className="block text-sm font-semibold mb-2">
                  Industry *
                </label>
                <select
                  id="industry"
                  {...register("industry")}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-secondary transition-colors"
                >
                  <option value="">Select your industry</option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
                {errors.industry && <p className="text-red-500 text-xs mt-1">{errors.industry.message}</p>}
              </div>

              <div>
                <label htmlFor="serviceNeeded" className="block text-sm font-semibold mb-2">
                  Service Needed *
                </label>
                <select
                  id="serviceNeeded"
                  {...register("serviceNeeded")}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-secondary transition-colors"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.serviceNeeded && <p className="text-red-500 text-xs mt-1">{errors.serviceNeeded.message}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
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
                  placeholder="+91 XXXX-XXXX-XX"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Tell us more about your needs
              </label>
              <textarea
                id="message"
                {...register("message")}
                rows={5}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-secondary transition-colors resize-none"
                placeholder="Share your procurement goals, current challenges, and what you're looking for..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-secondary to-accent text-primary font-bold rounded-lg hover:opacity-90 transition-opacity"
             disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Book Your Free Consultation"}
            </button>

            <p className="text-sm text-center text-foreground/60">
              ✓ Free consultation • ✓ No credit card required • ✓ 24-hour response
            </p>
          </form>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/5 border border-secondary/30 rounded-lg p-6"
          >
            <h3 className="font-bold mb-4">What happens after I submit this form?</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>✓ Our team will review your submission within 2 hours</li>
              <li>✓ You&apos;ll receive a personalized consultation link via email</li>
              <li>✓ Schedule a 30-minute free consultation call</li>
              <li>✓ Receive a customized action plan for your business</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
