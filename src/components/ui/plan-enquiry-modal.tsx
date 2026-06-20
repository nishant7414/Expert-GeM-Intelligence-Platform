'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'react-hot-toast'
import { X } from 'lucide-react'
import { useEffect } from 'react'

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  requirements: z.string().min(2, "Business Requirement is required"),
})

type FormData = z.infer<typeof formSchema>

interface PlanEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string;
}

export function PlanEnquiryModal({ isOpen, onClose, selectedPlan }: PlanEnquiryModalProps) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/plan-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, plan: selectedPlan }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Failed to submit')
      toast.success('Thank you! Our team will contact you shortly regarding your selected plan.')
      onClose()
      reset()
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong. Please try again.')
    }
  }

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Plan Enquiry</h2>
              <p className="text-slate-500 mt-1">Please provide your details to request this plan.</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content - Scrollable */}
          <div className="overflow-y-auto p-6">
            <form id="plan-enquiry-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Selected Plan (Read Only) */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700">
                  Selected Plan
                </label>
                <input
                  type="text"
                  value={selectedPlan}
                  readOnly
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg bg-slate-50 text-slate-600 font-medium focus:outline-none cursor-not-allowed"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-slate-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="+91XXXXXXXXXX"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-2 text-slate-700">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    {...register("company")}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Your Company Pvt Ltd"
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="requirements" className="block text-sm font-semibold mb-2 text-slate-700">
                  Business Requirement *
                </label>
                <textarea
                  id="requirements"
                  {...register("requirements")}
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
                {errors.requirements && <p className="text-red-500 text-xs mt-1">{errors.requirements.message}</p>}
              </div>

            </form>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-slate-100 bg-slate-50 mt-auto sticky bottom-0">
            <button
              form="plan-enquiry-form"
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-md disabled:opacity-70 flex justify-center items-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Request Plan"
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
