import { Metadata } from 'next'
import { Hero } from '@/components/sections/hero'
import { Trust } from '@/components/sections/trust'
import { Problems } from '@/components/sections/problems'
import { Solutions } from '@/components/sections/solutions'
import { PlatformShowcase } from '@/components/sections/platform-showcase'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Industries } from '@/components/sections/industries'
import { SuccessMetrics } from '@/components/sections/success-metrics'
import { Testimonials } from '@/components/sections/testimonials'
import { PricingPreview } from '@/components/sections/pricing-preview'
import { FAQ } from '@/components/sections/faq'
import { FinalCTA } from '@/components/sections/final-cta'

export const metadata: Metadata = {
  title: 'Home | Expert GeM Intelligence Platform',
  description:
    'Win more government contracts with confidence. Expert GeM Intelligence Platform combines procurement intelligence, AI-powered insights, and expert consulting.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Problems />
      <Solutions />
      <PlatformShowcase />
      <HowItWorks />
      <Industries />
      <SuccessMetrics />
      <Testimonials />
      <PricingPreview />
      <FAQ />
      <FinalCTA />
    </>
  )
}
