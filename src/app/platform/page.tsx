import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { PlatformDetails } from '@/components/sections/platform-details'

export const metadata: Metadata = {
  title: 'Platform | Expert GeM Intelligence Platform',
  description:
    'Explore our comprehensive Government Procurement Intelligence Platform with Tender Intelligence, AI Analysis, Compliance Center, and Analytics.',
}

export default function PlatformPage() {
  return (
    <>
      <PageHero
        title="Procurement Intelligence Platform"
        description="Comprehensive tools and insights for government procurement success"
      />
      <PlatformDetails />
    </>
  )
}
