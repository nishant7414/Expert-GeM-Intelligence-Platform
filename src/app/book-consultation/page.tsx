import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ConsultationForm } from '@/components/sections/consultation-form'

export const metadata: Metadata = {
  title: 'Book Consultation | Expert GeM Intelligence Platform',
  description:
    'Schedule a free consultation with our procurement experts to discuss your government contracting goals.',
}

export default function ConsultationPage() {
  return (
    <>
      <PageHero
        title="Book Free Consultation"
        description="Connect with our procurement experts today"
      />
      <ConsultationForm />
    </>
  )
}
