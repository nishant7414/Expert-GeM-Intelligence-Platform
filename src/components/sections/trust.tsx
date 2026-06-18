'use client'

import { motion } from 'framer-motion'

export function Trust() {
  const categories = [
    { label: 'MSMEs', count: '250+' },
    { label: 'Manufacturers', count: '180+' },
    { label: 'Startups', count: '320+' },
    { label: 'Service Providers', count: '410+' },
    { label: 'Enterprises', count: '95+' },
    { label: 'Government Vendors', count: '145+' },
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
    <section className="py-16 sm:py-24 bg-background/50 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by Growing Businesses Across India
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Serving businesses of all sizes and sectors with expert government procurement solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.label}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-4 sm:p-6 bg-card rounded-lg border border-border/50 hover:border-secondary/50 transition-all text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-secondary mb-2">
                {category.count}
              </div>
              <div className="text-sm text-foreground/70">{category.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
