'use client'

import { motion } from 'framer-motion'
import { MessageCircleQuestion, Mail, PhoneCall } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQ() {
  const faqs = [
    {
      question: 'What is Expert GeM Intelligence Platform?',
      answer:
        'Expert GeM Intelligence Platform is a modern SaaS solution that combines AI-powered procurement intelligence, expert consulting, and comprehensive tools to help businesses discover, analyze, and win government contracts on GeM.',
    },
    {
      question: 'How does the Tender Discovery feature work?',
      answer:
        'Our AI-powered system continuously monitors GeM and other government portals to identify tenders matching your business profile. We match opportunities based on your industry, capabilities, and past performance.',
    },
    {
      question: 'What support does Expert GeM provide?',
      answer:
        'We provide end-to-end support including GeM registration guidance, tender analysis, eligibility assessment, vendor assessment assistance, OEM authorization support, compliance management, and dedicated account management.',
    },
    {
      question: 'Do you help with OEM Authorization?',
      answer:
        'Yes, we provide comprehensive guidance for obtaining OEM authorizations, including understanding requirements, document preparation, vendor coordination, and follow-up management.',
    },
    {
      question: 'How accurate is the AI Tender Analysis?',
      answer:
        'Our AI model is trained on thousands of government tenders and has an accuracy rate of 94% in eligibility assessment and 87% in bid success prediction based on historical data.',
    },
    {
      question: 'Can you help with compliance documentation?',
      answer:
        'Absolutely. Our Compliance Center tracks all required documents, provides checklists, sends reminders for certifications, and helps you maintain vendor readiness at all times.',
    },
    {
      question: 'What is the typical ROI from using your platform?',
      answer:
        'On average, our clients see 3-5x ROI within the first year. Most clients report winning 2-3x more contracts and increasing their bid success rate by 40-60%.',
    },
    {
      question: 'How quickly can we get started?',
      answer:
        'Most businesses can get started within 24-48 hours. We handle your GeM registration or account activation, set up your profile, and start identifying relevant opportunities immediately.',
    },
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes! We offer a free assessment and consultation. You can also get started with our Starter plan to explore the platform with limited features.',
    },
    {
      question: 'Do you provide training and support?',
      answer:
        'Yes. All plans include email support. Growth and Enterprise plans include dedicated account managers, training sessions, and strategic consulting.',
    },
  ]

  return (
    <section className="py-24 sm:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Sticky Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="lg:sticky lg:top-32 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <MessageCircleQuestion className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold tracking-wider text-slate-600 uppercase">Knowledge Base</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Questions</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Everything you need to know about the Expert GeM Platform. Can&apos;t find the answer you&apos;re looking for?
              </p>

              {/* Support Contact Boxes */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:expertgemconsulting@gmail.com" className="enterprise-card flex items-center gap-4 p-4 hover:-translate-y-1 transition-all group">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:border-blue-100 transition-colors">
                    <Mail className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Email Support</div>
                    <div className="text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors">expertgemconsulting@gmail.com</div>
                  </div>
                </a>
                <a href="/contact" className="enterprise-card flex items-center gap-4 p-4 hover:-translate-y-1 transition-all group">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:border-blue-100 transition-colors">
                    <PhoneCall className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Contact Sales</div>
                    <div className="text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors">Book a Call</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Accordion Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="enterprise-card p-2 sm:p-6 lg:p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-slate-100 last:border-0 px-4 group"
                  >
                    <AccordionTrigger className="text-left font-bold text-slate-900 group-hover:text-primary transition-colors py-6 text-base sm:text-lg hover:no-underline [&[data-state=open]]:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6 pr-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
