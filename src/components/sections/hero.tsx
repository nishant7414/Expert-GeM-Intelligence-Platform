'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="relative min-h-screen pt-20 pb-12 sm:pt-32 sm:pb-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-4">
                <span className="text-sm font-medium text-secondary flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  Government Procurement Intelligence
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Win More{' '}
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Government Contracts
                </span>{' '}
                with Confidence
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/70 max-w-xl"
            >
              Expert GeM Intelligence Platform helps businesses discover opportunities, analyze tenders, manage compliance, participate strategically, and improve procurement success through expert guidance and intelligent technology.
            </motion.p>

            {/* Features */}
            <motion.div variants={itemVariants} className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span className="text-foreground/80">1000+ businesses assisted in winning contracts</span>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span className="text-foreground/80">95% client satisfaction rate</span>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span className="text-foreground/80">AI-powered tender analysis & insights</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                href="/book-consultation"
                className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-primary font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 group"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-secondary text-secondary hover:bg-secondary/10 font-semibold rounded-lg transition-colors"
              >
                Get Free Assessment
              </Link>
            </motion.div>
          </div>

          {/* Right - Dashboard Mockup */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 sm:h-[500px] hidden md:block"
          >
            {/* Dashboard Cards */}
            <div className="absolute inset-0 space-y-4">
              {/* Card 1 - Active Opportunities */}
              <motion.div
                animate={{ y: [-20, 20, -20] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-0 left-0 w-48 sm:w-64 bg-card/80 glass-morphism-dark p-4 rounded-lg border border-secondary/20 shadow-xl"
              >
                <div className="text-xs text-foreground/60 mb-2">Active Opportunities</div>
                <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1">2,847</div>
                <div className="text-xs text-green-400">+14% this month</div>
                <div className="mt-3 h-2 bg-border rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-gradient-to-r from-secondary to-accent rounded-full"></div>
                </div>
              </motion.div>

              {/* Card 2 - Tender Match Score */}
              <motion.div
                animate={{ y: [20, -20, 20] }}
                transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                className="absolute top-32 right-0 w-48 sm:w-64 bg-card/80 glass-morphism-dark p-4 rounded-lg border border-accent/20 shadow-xl"
              >
                <div className="text-xs text-foreground/60 mb-2">Tender Match Score</div>
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">94%</div>
                <div className="text-xs text-foreground/70">Excellent Match</div>
                <div className="mt-3 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 h-1 bg-accent/30 rounded-full"
                      style={{ width: `${(i + 1) * 20}%` }}
                    ></div>
                  ))}
                </div>
              </motion.div>

              {/* Card 3 - Compliance Status */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-0 left-1/4 w-48 sm:w-64 bg-card/80 glass-morphism-dark p-4 rounded-lg border border-secondary/20 shadow-xl"
              >
                <div className="text-xs text-foreground/60 mb-2">Compliance Status</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-secondary">100%</div>
                    <div className="text-xs text-green-400">All Documents Ready</div>
                  </div>
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">✓</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 4 - Bid Success Rate */}
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5.5, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-20 right-1/4 w-48 sm:w-64 bg-card/80 glass-morphism-dark p-4 rounded-lg border border-accent/20 shadow-xl"
              >
                <div className="text-xs text-foreground/60 mb-2">Bid Success Rate</div>
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">78%</div>
                <div className="text-xs text-foreground/70">Above Average</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
