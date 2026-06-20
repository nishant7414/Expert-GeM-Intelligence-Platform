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
      description: 'Perfect for small businesses starting out.',
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
      description: 'For growing companies scaling procurement.',
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
      description: 'Custom solutions for large organizations.',
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

  const handleWhatsAppClick = (planName: string) => {
    let message = '';
    if (planName === 'Starter') {
      message = 'Hello Expert GeM Consultancy,\n\nI am interested in the Starter Plan (₹5,999/month).\n\nPlease share complete details, onboarding process, and next steps.';
    } else if (planName === 'Growth') {
      message = 'Hello Expert GeM Consultancy,\n\nI am interested in the Growth Plan (₹15,999/month).\n\nPlease share complete details, onboarding process, and next steps.';
    } else if (planName === 'Enterprise') {
      message = 'Hello Expert GeM Consultancy,\n\nI am interested in the Enterprise Plan.\n\nPlease contact me regarding pricing, custom solutions, and implementation options.';
    }
    
    if (message) {
      window.open(`https://wa.me/+919473727212?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  return (
    <section className="py-20 sm:py-32 bg-[#F6F8FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Pricing</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Transparent Pricing Plans</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Flexible plans designed to scale with your government procurement needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`relative p-8 rounded-[24px] border transition-all flex flex-col bg-white ${
                plan.featured
                  ? 'border-primary shadow-xl ring-1 ring-primary/20'
                  : 'border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full shadow-md tracking-wide">
                  MOST POPULAR
                </div>
              )}

              <h4 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h4>
              <p className="text-sm text-slate-600 mb-8 h-10">{plan.description}</p>

              <div className="mb-8">
                {plan.price === 'Custom' ? (
                  <span className="text-4xl font-extrabold text-slate-900">Custom</span>
                ) : (
                  <>
                    <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                    <span className="text-slate-500 font-medium ml-1">{plan.period}</span>
                  </>
                )}
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleWhatsAppClick(plan.name)}
                className={`w-full py-3 px-4 rounded-xl font-bold transition-all mt-auto border flex items-center justify-center ${
                  plan.featured
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 font-medium mb-4">
            Need a custom solution for your specific requirements?
          </p>
          <Link
            href="/contact"
            className="btn-secondary"
          >
            Contact our Enterprise Team
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
