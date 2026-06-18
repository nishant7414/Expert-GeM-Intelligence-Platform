import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { PricingDetail } from '@/components/sections/pricing-detail'

export const metadata: Metadata = {
  title: 'Pricing | Expert GeM Intelligence Platform',
  description:
    'Flexible pricing plans for businesses of all sizes. Starter, Growth, and Enterprise plans designed for your procurement needs.',
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Pricing Plans"
        description="Choose the perfect plan for your procurement needs"
      />
      <PricingDetail />
    </>
  )
}
