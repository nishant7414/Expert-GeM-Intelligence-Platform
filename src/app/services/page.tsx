import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ServicesDetail } from '@/components/sections/services-detail'

export const metadata: Metadata = {
  title: 'Services | Expert GeM Intelligence Platform',
  description:
    'Expert GeM registration, tender analysis, vendor assessment, OEM authorization, and comprehensive procurement consulting services.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Expert guidance across the entire government procurement journey"
      />
      <ServicesDetail />
    </>
  )
}
