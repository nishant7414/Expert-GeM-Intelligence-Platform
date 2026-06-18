'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Business Assessment',
      description: 'Evaluate your current procurement status and capabilities',
    },
    {
      number: '02',
      title: 'Procurement Readiness Analysis',
      description: 'Identify gaps and opportunities for improvement',
    },
    {
      number: '03',
      title: 'Opportunity Discovery',
      description: 'Find relevant government contracts and tenders',
    },
    {
      number: '04',
      title: 'Tender Participation Support',
      description: 'Expert guidance through the entire bidding process',
    },
    {
      number: '05',
      title: 'Compliance Management',
      description: 'Ensure all requirements are met and documented',
    },
    {
      number: '06',
      title: 'Contract Success',
      description: 'Win contracts and continue partnership support',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our proven process to help you succeed in government procurement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary/20 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Number Badge */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="bg-card border border-border/50 rounded-lg p-6 h-full">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>

              {/* Checkmark */}
              <CheckCircle2 className="absolute -top-3 -right-3 w-6 h-6 bg-background border-2 border-secondary rounded-full text-secondary" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
