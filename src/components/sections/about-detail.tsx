'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Users } from 'lucide-react'

export function AboutDetail() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering outstanding results for every client',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Open communication and honest guidance throughout our partnership',
    },
    {
      icon: Heart,
      title: 'Trust',
      description: 'Building lasting relationships based on reliability and integrity',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Supporting the growth of India\'s business ecosystem',
    },
  ]

  return (
    <section className="py-16 sm:py-24 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-foreground/70 mb-4">
            Expert GeM Consultancy was founded with a simple mission: to transform how businesses participate in government procurement. We recognized that traditional approaches were inefficient, opaque, and inaccessible to most Indian businesses.
          </p>
          <p className="text-lg text-foreground/70 mb-4">
            What started as a consulting firm has evolved into a comprehensive technology platform combining artificial intelligence, domain expertise, and human support to democratize access to government contract opportunities.
          </p>
          <p className="text-lg text-foreground/70">
            Today, Expert GeM Intelligence Platform serves over 1,000 businesses across 8 industries, supporting procurement value exceeding ₹100 crores, and maintaining a 95% client satisfaction rate.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg border border-secondary/30"
          >
            <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
            <p className="text-foreground/80">
              To empower Indian businesses with intelligent tools, expert guidance, and strategic support to successfully participate in government procurement and win sustainable contracts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg border border-accent/30"
          >
            <h3 className="text-2xl font-bold text-accent mb-4">Our Vision</h3>
            <p className="text-foreground/80">
              To become India's most trusted and advanced government procurement partner, enabling businesses of all sizes to compete confidently for lucrative government contracts.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-card border border-border/50 rounded-lg text-center"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-foreground/70 text-sm">{value.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Leadership */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Leadership Team</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { name: 'Rajesh Kumar', role: 'Founder & CEO', bio: '15+ years in government procurement' },
              { name: 'Priya Sharma', role: 'Chief Technology Officer', bio: 'AI and data platform expert' },
              { name: 'Amit Patel', role: 'VP, Consulting Services', bio: 'Procurement strategy specialist' },
            ].map((leader, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 bg-card border border-border/50 rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                  {leader.name.charAt(0)}
                </div>
                <h3 className="font-bold text-lg mb-1">{leader.name}</h3>
                <p className="text-secondary font-semibold text-sm mb-2">{leader.role}</p>
                <p className="text-foreground/70 text-sm">{leader.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/30 rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-6">Why Choose Expert GeM?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Proven track record with 1000+ successful implementations',
              'AI-powered platform combined with expert consulting',
              '95% client satisfaction rate',
              'Industry-specific solutions for 8+ sectors',
              'Transparent pricing with no hidden costs',
              '24/7 dedicated support and guidance',
            ].map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-2xl text-secondary">✓</span>
                <span className="text-foreground/80">{reason}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
