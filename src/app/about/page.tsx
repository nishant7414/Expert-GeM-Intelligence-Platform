import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { AboutDetail } from '@/components/sections/about-detail'

export const metadata: Metadata = {
  title: 'About | Expert GeM Intelligence Platform',
  description:
    'Learn about Expert GeM Consultancy, our mission, vision, values, and leadership team committed to government procurement success.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        description="India's most advanced government procurement partner"
      />
      <AboutDetail />
    </>
  )
}
