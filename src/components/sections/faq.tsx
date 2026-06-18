'use client'

import { motion } from 'framer-motion'
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
    <section className="py-16 sm:py-24 bg-background/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-foreground/70">
            Everything you need to know about Expert GeM Intelligence Platform
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 data-[state=open]:border-secondary/50 data-[state=open]:bg-secondary/5 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-secondary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-foreground/70 mb-4">Still have questions?</p>
          <div className="flex gap-4 justify-center">
            <a href="mailto:hello@expertgem.com" className="text-secondary hover:text-secondary/80 font-semibold">
              Email us
            </a>
            <span className="text-foreground/30">•</span>
            <a href="/contact" className="text-secondary hover:text-secondary/80 font-semibold">
              Contact us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
