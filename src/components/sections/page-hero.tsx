'use client'

import { motion } from 'framer-motion'

export function PageHero({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
