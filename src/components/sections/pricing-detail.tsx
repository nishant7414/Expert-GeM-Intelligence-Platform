'use client'

import { motion } from 'framer-motion'
import { Check, Clock, Package, Briefcase } from 'lucide-react'
import { useState } from 'react'
import { ServiceBookingModal } from '../ui/service-booking-modal'
import { PlanEnquiryModal } from '../ui/plan-enquiry-modal'

export function PricingDetail() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')
  const services = [
    {
      name: 'GeM Registration',
      price: '₹1,099',
      timeline: '2-3 Days',
      deliverables: [
        'Profile Creation & Verification',
        'Category Selection',
        'Document Compilation',
        'Basic Dashboard Training',
      ],
      popular: false,
    },
    {
      name: 'GeM Account Management',
      price: '₹4,999',
      interval: '/month',
      timeline: 'Monthly',
      deliverables: [
        'End-to-End Catalog Management',
        'Order Processing & Tracking',
        'Payment Follow-ups',
        'Account Health Monitoring',
      ],
      popular: true,
    },
    {
      name: 'Vendor Assessment',
      price: '₹10,999',
      timeline: '7-10 Days',
      deliverables: [
        'Desktop Assessment Prep',
        'Video Assessment Support',
        'QCI Coordination',
        'Final Assessment Report',
      ],
      popular: false,
    },
    {
      name: 'OEM Authorization',
      price: '₹1,999 - ₹6,999',
      interval: '(Depends on OEM)',
      timeline: '3-5 Days',
      deliverables: [
        'Brand Registration',
        'Reseller Authorization Code',
        'Documentation Support',
        'Approval Tracking',
      ],
      popular: false,
    },
    {
      name: 'Tender Participation',
      price: '₹1,999',
      interval: '/tender',
      timeline: 'Per Tender',
      deliverables: [
        'Complete Bid Preparation',
        'Document Compilation',
        'BOQ Preparation & Pricing',
        'Final Portal Submission',
      ],
      popular: true,
    },
    {
      name: 'Tender Documentation',
      price: '₹999',
      interval: '/tender',
      timeline: '1-2 Days',
      deliverables: [
        'Eligibility Criteria Check',
        'Experience Document Prep',
        'Financial Document Review',
        'Deficiency Correction',
      ],
      popular: false,
    },
    {
      name: 'Compliance Support',
      price: '₹3,999',
      interval: '/month',
      timeline: 'Monthly',
      deliverables: [
        'Incident Management',
        'Show Cause Notice Replies',
        'Account Revival Strategy',
        'Policy Adherence Checks',
      ],
      popular: false,
    },
    {
      name: 'Procurement Consulting',
      price: 'Custom',
      timeline: 'Project Based',
      deliverables: [
        'Custom Strategy Development',
        'Vendor Identification',
        'Process Optimization',
        'Spend Analytics',
      ],
      popular: false,
    },
    {
      name: 'End-to-End Management',
      price: '₹15,999',
      interval: '/month',
      timeline: 'Monthly',
      deliverables: [
        'Dedicated Account Manager',
        'All Tenders Participation',
        'Complete Lifecycle Support',
        'Performance Analytics',
      ],
      popular: true,
    },
  ]

  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const platformPlans = [
    {
      name: 'Free',
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: 'Basic access to GeM Intelligence',
      features: ['Basic Tender Search', '5 Saved Alerts', 'Community Support'],
      highlighted: false,
    },
    {
      name: 'Pro',
      monthlyPrice: 1999,
      yearlyPrice: 19990,
      description: 'Advanced tools for professionals',
      features: ['Advanced Search Filters', 'Unlimited Alerts', 'Competitor Analysis', 'Priority Email Support'],
      highlighted: true,
    },
    {
      name: 'Business',
      monthlyPrice: 4999,
      yearlyPrice: 49990,
      description: 'For teams and growing businesses',
      features: ['Everything in Pro', 'Team Accounts (Up to 5)', 'AI Tender Summaries', 'API Access (Limited)'],
      highlighted: false,
    },
    {
      name: 'Enterprise',
      monthlyPrice: null,
      yearlyPrice: null,
      description: 'Custom solutions at scale',
      features: ['Unlimited Everything', 'Dedicated Server', 'Custom Integrations', 'Whitelabel Dashboard'],
      highlighted: false,
    },
  ]

  return (
    <div className="flex flex-col w-full">
      {/* Services Pricing Section - High Visual Emphasis */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Our Core Business</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Expert Consulting & Services</h3>
            <p className="text-lg text-slate-600">
              Comprehensive managed services tailored to maximize your success on the GeM portal. Partner with our experts for guaranteed results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`relative rounded-2xl flex flex-col h-full bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
                  service.popular ? 'border-2 border-primary ring-4 ring-primary/10' : 'border border-slate-200 hover:border-slate-300'
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl z-10 shadow-sm tracking-wide">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="p-8 pb-0">
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">{service.name}</h4>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Starts at</span>
                    </div>
                    <div className="flex items-baseline mt-1">
                      {service.price === 'Custom' ? (
                        <span className="text-4xl font-extrabold text-slate-900">Custom</span>
                      ) : (
                        <>
                          <span className="text-4xl font-extrabold text-slate-900">{service.price}</span>
                          {service.interval && (
                            <span className="text-lg text-slate-500 font-medium ml-1">{service.interval}</span>
                          )}
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-100 p-3 rounded-lg mb-8">
                    <Clock className="w-4 h-4 text-slate-600" />
                    <span>Timeline: {service.timeline}</span>
                  </div>
                </div>

                <div className="p-8 pt-0 flex-grow flex flex-col justify-between bg-white">
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-5">
                      <Package className="w-4 h-4 text-primary" />
                      <h5 className="font-bold text-slate-900 uppercase tracking-wider text-sm">Deliverables:</h5>
                    </div>
                    <ul className="space-y-4">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600 font-medium text-sm leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => {
                      setSelectedService(service.name)
                      setIsBookingModalOpen(true)
                    }}
                    className={`w-full py-4 rounded-xl font-bold transition-all mt-auto ${
                    service.popular 
                      ? 'bg-primary text-white hover:bg-blue-700 shadow-md' 
                      : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}>
                    Book Service
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Pricing Section - Lower Visual Emphasis */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-sm font-bold tracking-wider text-slate-500 uppercase mb-3">Self-Serve</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Platform Software Access</h3>
            <p className="text-lg text-slate-600">
              Prefer to do it yourself? Access our powerful AI-driven intelligence platform with flexible subscription tiers.
            </p>
          </div>

          {/* Billing Toggle for Platform */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-slate-100 border border-slate-200 rounded-xl p-1.5 shadow-sm">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2.5 text-sm rounded-lg font-bold transition-colors ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2.5 text-sm rounded-lg font-bold transition-colors relative ${
                  billingCycle === 'yearly'
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Yearly
                <span className="absolute -top-3 -right-3 text-[10px] bg-emerald-100 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full whitespace-nowrap font-extrabold">
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {platformPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl flex flex-col transition-all border ${
                  plan.highlighted
                    ? 'bg-white border-primary/50 shadow-md ring-1 ring-primary/20'
                    : 'bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 bg-primary text-white text-[10px] font-black tracking-wider uppercase rounded-full shadow-sm">
                    POPULAR
                  </div>
                )}

                <h4 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h4>
                <p className="text-sm text-slate-500 mb-6 h-10">{plan.description}</p>

                <div className="mb-8">
                  {plan.monthlyPrice !== null ? (
                    <>
                      <span className="text-4xl font-extrabold text-slate-900">
                        ₹{billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      {plan.monthlyPrice > 0 && (
                        <span className="text-slate-500 font-medium text-sm ml-1">
                          /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                        </span>
                      )}
                    </>
                  ) : (
                    <div className="text-4xl font-extrabold text-slate-900">Custom</div>
                  )}
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium text-sm leading-tight">{feature}</span>
                    </div>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    if (plan.monthlyPrice !== null) {
                      setSelectedPlan(plan.name)
                      setIsPlanModalOpen(true)
                    } else {
                      window.open('https://wa.me/+919473727212?text=Hello%20Expert%20GeM%20Consultancy,%20I%20would%20like%20to%20know%20more%20about%20your%20services.%20Please%20contact%20me.', '_blank')
                    }
                  }}
                  className={`w-full py-3 px-4 rounded-xl text-sm font-bold transition-all mt-auto ${
                    plan.highlighted
                      ? 'bg-primary text-white hover:bg-blue-700 shadow-sm'
                      : 'bg-white border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  {plan.monthlyPrice !== null ? 'Choose Plan' : 'Contact Us'}
                </button>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <ServiceBookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
        selectedService={selectedService} 
      />

      <PlanEnquiryModal 
        isOpen={isPlanModalOpen} 
        onClose={() => setIsPlanModalOpen(false)} 
        selectedPlan={selectedPlan} 
      />
    </div>
  )
}
