'use client'

import { motion } from 'framer-motion'
import { Factory, Code2, Hammer, Stethoscope, BookOpen, Truck, Building2, Briefcase } from 'lucide-react'

export function Industries() {
  const industries = [
    { icon: Factory, label: 'Manufacturing' },
    { icon: Code2, label: 'Information Technology' },
    { icon: Hammer, label: 'Construction' },
    { icon: Stethoscope, label: 'Healthcare' },
    { icon: BookOpen, label: 'Education' },
    { icon: Truck, label: 'Logistics' },
    { icon: Building2, label: 'Infrastructure' },
    { icon: Briefcase, label: 'Consulting Services' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Specialized solutions for every sector of the Indian economy
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 bg-card border border-border/50 rounded-lg hover:border-secondary/50 transition-all text-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground">{industry.label}</h3>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
