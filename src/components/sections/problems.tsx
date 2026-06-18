'use client'

import { motion } from 'framer-motion'
import { AlertCircle, X } from 'lucide-react'

export function Problems() {
  const challenges = [
    'Finding relevant tenders',
    'Understanding eligibility requirements',
    'Managing documentation',
    'Vendor assessments',
    'OEM authorization challenges',
    'Compliance management',
    'Low bid success rates',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-accent">Common Challenges</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Government Procurement Is Complex
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Most businesses struggle with the intricacies of government tenders and compliance requirements
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {challenges.map((challenge) => (
            <motion.div
              key={challenge}
              variants={itemVariants}
              className="p-6 bg-card/50 border border-border/50 rounded-lg hover:border-red-500/30 hover:bg-red-500/5 transition-all group"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <X className="w-4 h-4 text-red-500" />
                </div>
                <span className="font-medium text-foreground">{challenge}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
