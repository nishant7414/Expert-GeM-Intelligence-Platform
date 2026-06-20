import { Metadata } from 'next'
import { ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Expert GeM',
  description: 'Learn how Expert GeM Consultancy collects, uses, and protects your information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 text-primary mb-6">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            Last Updated: January 2025
          </p>
        </div>

        <div className="enterprise-card p-8 sm:p-12">
          <div className="prose prose-slate max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p className="text-slate-600 leading-relaxed">
                At Expert GeM Consultancy, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our government procurement intelligence platform and consulting services. We are committed to protecting your personal information and your right to privacy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We collect information that you voluntarily provide to us when registering for the platform, expressing an interest in obtaining information about us or our products and services, or otherwise contacting us.
              </p>
              
              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>Name and Contact Data:</strong> We collect your first and last name, email address, postal address, phone number, and other similar contact data.</li>
                <li><strong>Company and Business Information:</strong> Details regarding your organization, GeM registration status, GST details, catalog products, and business objectives.</li>
                <li><strong>Credentials:</strong> Passwords, password hints, and similar security information used for authentication and account access.</li>
              </ul>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Technical Information</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                When you visit our platform, our servers automatically collect certain technical information.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>IP Address:</strong> To prevent fraud, ensure security, and provide localized experiences.</li>
                <li><strong>Browser and Device Information:</strong> Such as device type, browser type, operating system, and hardware details to optimize platform rendering.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to maintain your session, store preferences, and track aggregate analytics to improve our services.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Information</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent. Specifically, we use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>Provide Services:</strong> Facilitate account creation, deliver tender intelligence, and provide our consulting and vendor assessment services.</li>
                <li><strong>Improve Platform Experience:</strong> Analyze usage trends to optimize dashboard workflows and AI tender matching algorithms.</li>
                <li><strong>Respond to Inquiries:</strong> Provide customer support and address any questions or issues you experience on the platform.</li>
                <li><strong>Send Updates and Alerts:</strong> Deliver time-sensitive tender notifications, compliance renewal reminders, and platform updates.</li>
                <li><strong>Analytics and Reporting:</strong> Monitor performance metrics and compile aggregate reports to enhance the value we deliver.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
              <p className="text-slate-600 leading-relaxed">
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. This includes encryption in transit (HTTPS) and at rest, secure database access protocols, and regular vulnerability assessments. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>The right to request access to the personal data we hold about you.</li>
                <li>The right to request that we correct any inaccuracies in your personal data.</li>
                <li>The right to request the deletion of your personal data, subject to certain legal exceptions (e.g., records required for tax or compliance).</li>
                <li>The right to opt-out of marketing communications at any time by clicking the &quot;unsubscribe&quot; link in our emails.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have questions or comments about this Privacy Policy, please contact our Data Protection Officer at:
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
