'use client'

import { motion } from 'framer-motion'
import { Users, TrendingUp, IndianRupee, Smile } from 'lucide-react'

export function SuccessMetrics() {
  const metrics = [
    { icon: Users, value: '1000+', label: 'Businesses Assisted' },
    { icon: TrendingUp, value: '5000+', label: 'Tender Opportunities Evaluated' },
    { icon: IndianRupee, value: '₹100 Cr+', label: 'Procurement Value Supported' },
    { icon: Smile, value: '95%', label: 'Client Satisfaction' },
  ]

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl font-bold text-secondary mb-2"
                >
                  {metric.value}
                </motion.div>
                <p className="text-foreground/70">{metric.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
