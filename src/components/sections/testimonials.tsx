'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'TechInnovate Solutions',
      industry: 'Information Technology',
      challenge: 'Could not identify relevant government tenders',
      result: 'Won 8 contracts worth ₹2.5 Cr in first year',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      company: 'Premium Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'OEM authorization was a major barrier',
      result: 'Secured 5 OEM authorizations and ₹1.8 Cr in contracts',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      company: 'BuildRight Infrastructure',
      industry: 'Construction',
      challenge: 'Compliance requirements were overwhelming',
      result: 'Achieved 100% compliance and increased bid success to 82%',
      rating: 5,
    },
    {
      name: 'Neha Singh',
      company: 'HealthCare Innovations',
      industry: 'Healthcare',
      challenge: 'Limited knowledge of procurement process',
      result: 'Successfully bid on 12 tenders, won 9 of them',
      rating: 5,
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real businesses, real results with Expert GeM Intelligence Platform
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-6 bg-card border border-border/50 rounded-lg hover:border-secondary/50 transition-all"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Challenge & Result */}
              <div className="mb-4">
                <p className="text-sm text-foreground/60 mb-2">
                  <span className="font-semibold text-foreground">Challenge:</span> {testimonial.challenge}
                </p>
                <p className="text-sm text-secondary/80">
                  <span className="font-semibold text-secondary">Result:</span> {testimonial.result}
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-border/30 pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.company}</p>
                <p className="text-xs text-foreground/50">{testimonial.industry}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
