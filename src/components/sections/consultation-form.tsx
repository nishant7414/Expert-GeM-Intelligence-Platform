'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    industry: '',
    phone: '',
    email: '',
    serviceNeeded: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Consultation form submitted:', formData)
    // Handle form submission here
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
            onSubmit={handleSubmit}
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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-secondary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-secondary transition-colors"
                  placeholder="Your company"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="industry" className="block text-sm font-semibold mb-2">
                  Industry *
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
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
              </div>

              <div>
                <label htmlFor="serviceNeeded" className="block text-sm font-semibold mb-2">
                  Service Needed *
                </label>
                <select
                  id="serviceNeeded"
                  name="serviceNeeded"
                  value={formData.serviceNeeded}
                  onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-secondary transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-secondary transition-colors"
                  placeholder="+91 XXXX-XXXX-XX"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Tell us more about your needs
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-secondary transition-colors resize-none"
                placeholder="Share your procurement goals, current challenges, and what you're looking for..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-secondary to-accent text-primary font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              Book Your Free Consultation
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
              <li>✓ You'll receive a personalized consultation link via email</li>
              <li>✓ Schedule a 30-minute free consultation call</li>
              <li>✓ Receive a customized action plan for your business</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
