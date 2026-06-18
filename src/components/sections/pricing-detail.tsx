'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useState } from 'react'

export function PricingDetail() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 5999,
      yearlyPrice: 59990,
      description: 'Perfect for small businesses exploring opportunities',
      features: [
        'Tender Discovery (50/month)',
        'Basic Analytics Dashboard',
        'Email Support',
        'Monthly Reports',
        'Limited API Access',
      ],
      highlighted: false,
    },
    {
      name: 'Growth',
      monthlyPrice: 15999,
      yearlyPrice: 159990,
      description: 'For growing companies scaling their procurement',
      features: [
        'Unlimited Tender Discovery',
        'AI Tender Analysis',
        'Compliance Tracking',
        'Advanced Analytics',
        'Priority Email Support',
        'Custom Reports',
        'Full API Access',
        'Dedicated Account Manager (3 hours/month)',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      monthlyPrice: null,
      yearlyPrice: null,
      description: 'Custom solution for large organizations',
      features: [
        'Everything in Growth +',
        'Dedicated Account Manager (40 hours/month)',
        'Custom Integrations',
        'Advanced Security Features',
        'Training & Onboarding',
        'Strategic Consulting',
        'SLA Guarantees',
        'White-label Options',
      ],
      highlighted: false,
    },
  ]

  const comparisonFeatures = [
    'Tender Discovery',
    'AI Analysis Engine',
    'Compliance Tracking',
    'Analytics Dashboard',
    'Priority Support',
    'Account Manager',
    'Custom Reports',
    'API Access',
  ]

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-card border border-border/50 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-md font-semibold transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-secondary text-primary'
                  : 'text-foreground hover:text-secondary'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-md font-semibold transition-colors relative ${
                billingCycle === 'yearly'
                  ? 'bg-secondary text-primary'
                  : 'text-foreground hover:text-secondary'
              }`}
            >
              Yearly
              <span className="absolute -top-8 right-0 text-xs bg-accent text-primary px-2 py-1 rounded whitespace-nowrap font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-lg border transition-all ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/50 ring-2 ring-secondary/20'
                  : 'bg-card border-border/50 hover:border-secondary/30'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-primary text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-foreground/60 mb-6 h-8">{plan.description}</p>

              <div className="mb-6">
                {plan.monthlyPrice ? (
                  <>
                    <span className="text-4xl font-bold text-secondary">
                      ₹{billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-foreground/60 text-sm">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </>
                ) : (
                  <div className="text-2xl font-bold text-secondary">Custom Pricing</div>
                )}
              </div>

              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold mb-8 transition-colors ${
                  plan.highlighted
                    ? 'bg-secondary text-primary hover:bg-secondary/90'
                    : 'border border-secondary text-secondary hover:bg-secondary/10'
                }`}
              >
                {plan.monthlyPrice ? 'Get Started' : 'Contact Sales'}
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

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border/50 rounded-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-secondary">Starter</th>
                  <th className="px-6 py-4 text-center font-semibold text-secondary">Growth</th>
                  <th className="px-6 py-4 text-center font-semibold text-secondary">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-border/20 last:border-b-0">
                    <td className="px-6 py-4">{feature}</td>
                    <td className="px-6 py-4 text-center">
                      {[true, true, true].includes(true) && <Check className="w-5 h-5 text-secondary mx-auto" />}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {[true, true, true].includes(true) && <Check className="w-5 h-5 text-secondary mx-auto" />}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {[true, true, true].includes(true) && <Check className="w-5 h-5 text-secondary mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
