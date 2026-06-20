import { Metadata } from 'next'
import { FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | Expert GeM',
  description: 'Terms of Service for Expert GeM Consultancy.',
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 text-primary mb-6">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            Last Updated: January 2025
          </p>
        </div>

        <div className="enterprise-card p-8 sm:p-12">
          <div className="prose prose-slate max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-600 leading-relaxed">
                By accessing or using the Expert GeM Intelligence Platform (&quot;Platform&quot;) and any associated consulting services (&quot;Services&quot;) provided by Expert GeM Consultancy (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you may not access or use the Platform or Services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Service</h2>
              <p className="text-slate-600 leading-relaxed">
                Expert GeM provides a Software-as-a-Service (SaaS) platform that aggregates, analyzes, and delivers intelligence related to government procurement on the Government e-Marketplace (GeM) and other portals. We also provide professional consulting services, including GeM registration, vendor assessment support, OEM authorization assistance, and bid management.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Accounts</h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>Registration:</strong> You must provide accurate, current, and complete information during the registration process.</li>
                <li><strong>Security:</strong> You are responsible for safeguarding your password and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.</li>
                <li><strong>Responsibility:</strong> We cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Acceptable Use</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                You agree not to use the Platform for any unlawful purpose or in any way that interrupts, damages, or impairs the service. Specifically, you agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Scrape, datamine, or reverse-engineer the Platform.</li>
                <li>Share your account credentials with unauthorized third parties.</li>
                <li>Upload malicious code, viruses, or disruptive data.</li>
                <li>Use the Platform to gain an unfair competitive advantage through illegal or unethical means.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Payment and Fees</h2>
              <p className="text-slate-600 leading-relaxed">
                Fees for the Platform and Services are outlined in your specific subscription plan or service agreement. All payments are non-refundable unless otherwise explicitly stated. We reserve the right to modify our pricing with at least 30 days&apos; notice before your next billing cycle.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Intellectual Property</h2>
              <p className="text-slate-600 leading-relaxed">
                All content, features, functionalities, and algorithms on the Platform—including but not limited to text, graphics, logos, and software—are the exclusive property of Expert GeM Consultancy and are protected by Indian and international copyright, trademark, and intellectual property laws. You retain all ownership rights to the data you input into the Platform.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed">
                Expert GeM Consultancy provides the Platform and Services on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We do not guarantee that you will win any specific government contract or tender. In no event shall Expert GeM Consultancy be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of your use or inability to use the Platform.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Termination</h2>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right to suspend or terminate your account at any time, for any reason, including but not limited to a breach of these Terms of Service. Upon termination, your right to use the Platform will immediately cease. You may terminate your account at any time by contacting our support team.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Governing Law</h2>
              <p className="text-slate-600 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of India. Any dispute arising out of or related to these terms shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact Information</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 not-prose">
                <p className="text-slate-900 font-bold mb-1">Expert GeM Consultancy</p>
                <p className="text-slate-600 mb-1">New Delhi, India</p>
                <p className="text-slate-600 mb-1">Email: expertgemconsulting@gmail.com</p>
                <p className="text-slate-600">Phone: +91 94737 27212</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
