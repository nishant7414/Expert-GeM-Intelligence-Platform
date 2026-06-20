'use client'

import { motion } from 'framer-motion'

export function ServicesDetail() {
  const services = [
    {
      title: 'GeM Registration Support',
      description: 'Complete guidance for new business registrations on Government e-Marketplace',
      process: ['Document preparation', 'Profile optimization', 'Seller registration', 'Account activation'],
      benefits: ['Fast-track approval', 'Optimized profile', 'Increased visibility'],
    },
    {
      title: 'GeM Account Management',
      description: 'Ongoing optimization and management of your GeM seller profile',
      process: ['Profile optimization', 'Category expansion', 'Performance monitoring', 'Quarterly reviews'],
      benefits: ['Higher visibility', 'Better ratings', 'Increased opportunities'],
    },
    {
      title: 'Tender Participation',
      description: 'Expert guidance through the entire tender bidding process',
      process: ['Opportunity identification', 'Bid preparation', 'Documentation', 'Submission support'],
      benefits: ['Higher success rate', 'Better pricing', 'Reduced risks'],
    },
    {
      title: 'Vendor Assessment',
      description: 'Comprehensive evaluation of vendor readiness and capabilities',
      process: ['Capability analysis', 'Gap identification', 'Roadmap development', 'Progress tracking'],
      benefits: ['Clear roadmap', 'Measurable progress', 'Expert guidance'],
    },
    {
      title: 'OEM Authorization Support',
      description: 'Navigate OEM authorization requirements and obtain necessary approvals',
      process: ['Requirement analysis', 'Vendor coordination', 'Documentation support', 'Follow-up management'],
      benefits: ['Successful authorizations', 'Expanded categories', 'New opportunities'],
    },
    {
      title: 'Compliance Consulting',
      description: 'Ensure compliance with all government procurement regulations',
      process: ['Compliance audit', 'Documentation review', 'Training delivery', 'Ongoing monitoring'],
      benefits: ['Full compliance', 'Reduced risk', 'Peace of mind'],
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
            <p className="text-lg text-slate-600 mb-8">{service.description}</p>

            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
              <div>
                <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
                  <span className="w-8 h-px bg-slate-300"></span>
                  Our Process
                </h4>
                <div className="space-y-3">
                  {service.process.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
                  <span className="w-8 h-px bg-slate-300"></span>
                  Key Benefits
                </h4>
                <div className="space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
