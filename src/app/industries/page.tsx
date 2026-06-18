import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { IndustriesDetail } from '@/components/sections/industries-detail'

export const metadata: Metadata = {
  title: 'Industries | Expert GeM Intelligence Platform',
  description:
    'Industry-specific solutions for manufacturing, IT, construction, healthcare, education, logistics, infrastructure, and consulting.',
}

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industry Solutions"
        description="Tailored procurement strategies for every industry"
      />
      <IndustriesDetail />
    </>
  )
}
