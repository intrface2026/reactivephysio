import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service – Reactive",
  description: "Review Reactive's terms of service governing use of our website and clinical services.",
};

export default function TermsPage() {
  return (
    <main>
      <section className="w-full bg-surface pt-40 pb-20 px-6 md:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 mb-6">
            <span className="text-brand font-bold">//</span>
            <span className="text-sm font-semibold text-white">Legal</span>
          </div>
          <h1 className="text-[40px] font-bold text-white sm:text-[56px]">Terms of Service</h1>
          <p className="mt-4 text-white/50">Last updated: 1 January 2026</p>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-20 md:px-10">
        <div className="mx-auto max-w-4xl">
          {[
            {
              title: "1. Acceptance of Terms",
              body: `By accessing and using the Reactive website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.`,
            },
            {
              title: "2. Services Provided",
              body: `Reactive provides professional, home-based physiotherapy and rehabilitation services. The information on this website is for general informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional for medical concerns.`,
            },
            {
              title: "3. Appointments and Cancellations",
              body: `Appointments must be cancelled or rescheduled with at least 24 hours' notice. Failure to do so may result in a late cancellation fee.`,
            },
            {
              title: "4. Payment",
              body: `Payment is due at the time of service unless otherwise agreed. We accept major payment methods including UPI, bank transfers, credit/debit cards.`,
            },
            {
              title: "5. Clinical Disclaimer",
              body: `Physiotherapy involves physical contact and exercise. While we take all reasonable precautions, there is an inherent risk associated with physical activity and manual techniques. Our therapist will explain any risks before commencing treatment.`,
            },
            {
              title: "6. Intellectual Property",
              body: `All content on this website, including text, images, logos, and design, is the property of Reactive and is protected by copyright law. You may not reproduce or distribute any content without express written permission.`,
            },
            {
              title: "7. Limitation of Liability",
              body: `To the fullest extent permitted by law, Reactive shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services, except where caused by our negligence.`,
            },
            {
              title: "8. Governing Law",
              body: `These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Nagpur, Maharashtra, India.`,
            },
            {
              title: "9. Changes to Terms",
              body: `We reserve the right to update these Terms at any time. Continued use of our services after changes are posted constitutes acceptance of the updated Terms.`,
            },
            {
              title: "10. Contact",
              body: `For questions about these Terms, please contact us at hello@reactivept.in or call +91 98230 12345.`,
            },
          ].map((section) => (
            <div key={section.title} className="mb-10">
              <h2 className="text-xl font-bold text-surface mb-3">{section.title}</h2>
              <p className="text-surface/60 leading-relaxed">{section.body}</p>
            </div>
          ))}

          <div className="mt-12 border-t border-black/8 pt-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
