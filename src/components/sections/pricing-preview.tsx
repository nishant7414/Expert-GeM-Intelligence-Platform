'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export function PricingPreview() {
  const plans = [
    {
      name: 'Starter',
      price: '₹5,999',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Tender Discovery (50/month)',
        'Basic Analytics',
        'Email Support',
        'Monthly Reports',
      ],
      cta: 'Get Started',
      featured: false,
    },
    {
      name: 'Growth',
      price: '₹15,999',
      period: '/month',
      description: 'For growing companies',
      features: [
        'Tender Discovery (Unlimited)',
        'AI Tender Analysis',
        'Compliance Tracking',
        'Priority Support',
        'Custom Reports',
      ],
      cta: 'Get Started',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations',
      features: [
        'Everything in Growth +',
        'Dedicated Account Manager',
        'Custom Integrations',
        'Advanced Analytics',
        'Training & Consulting',
      ],
      cta: 'Contact Sales',
      featured: false,
    },
  ]

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Flexible plans designed for businesses of all sizes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`relative p-8 rounded-lg border transition-all ${
                plan.featured
                  ? 'bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/50 ring-2 ring-secondary/20'
                  : 'bg-card border-border/50 hover:border-secondary/30'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-primary text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-foreground/60 mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-secondary">{plan.price}</span>
                <span className="text-foreground/60 text-sm">/{plan.period}</span>
              </div>

              <button
                className={`w-full py-2 px-4 rounded-lg font-semibold mb-8 transition-colors ${
                  plan.featured
                    ? 'bg-secondary text-primary hover:bg-secondary/90'
                    : 'border border-secondary text-secondary hover:bg-secondary/10'
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-foreground/70 mb-4">
            Not sure which plan is right for you?
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-2 text-secondary border border-secondary rounded-lg hover:bg-secondary/10 transition-colors"
          >
            Schedule a Demo
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
