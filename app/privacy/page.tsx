import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy – Phisio",
  description: "Read Phisio's privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="w-full bg-surface pt-40 pb-20 px-6 md:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 mb-6">
            <span className="text-brand font-bold">//</span>
            <span className="text-sm font-semibold text-white">Legal</span>
          </div>
          <h1 className="text-[40px] font-bold text-white sm:text-[56px]">Privacy Policy</h1>
          <p className="mt-4 text-white/50">Last updated: 1 January 2026</p>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-20 md:px-10">
        <div className="mx-auto max-w-4xl prose prose-slate">
          {[
            {
              title: "1. Who We Are",
              body: `Phisio ("we", "our", "us") is a physiotherapy and rehabilitation clinic. Our registered address is 123 Healing Way, Suite 100, San Francisco, CA 94105. We are the data controller for personal information collected through this website and in the course of providing our services.`,
            },
            {
              title: "2. Information We Collect",
              body: `We collect personal information you provide directly, including your name, email address, phone number, and any health-related information you share when booking appointments or completing intake forms. We also collect technical data such as IP addresses, browser types, and pages visited through cookies and analytics tools.`,
            },
            {
              title: "3. How We Use Your Information",
              body: `We use your information to schedule and manage appointments, communicate with you about your care, send administrative notifications, improve our services, and comply with legal obligations. We do not sell your personal data to third parties.`,
            },
            {
              title: "4. Health Information",
              body: `Health information is treated with the highest level of confidentiality. It is stored securely and only accessed by authorised clinical staff involved in your care. We comply with all applicable healthcare data protection regulations.`,
            },
            {
              title: "5. Data Retention",
              body: `We retain patient records for a minimum of 7 years in accordance with healthcare regulations. Non-clinical data is retained for 3 years. You may request deletion of your non-clinical data at any time by contacting us.`,
            },
            {
              title: "6. Your Rights",
              body: `You have the right to access, correct, or delete your personal data, restrict processing, and data portability. To exercise these rights, please email us at hello@phisio.com.`,
            },
            {
              title: "7. Cookies",
              body: `We use essential cookies to ensure the website functions correctly. We also use analytics cookies (Google Analytics) to understand how visitors use our site. You can manage cookie preferences through your browser settings.`,
            },
            {
              title: "8. Contact",
              body: `For any privacy-related queries, please contact our Data Protection Officer at hello@phisio.com or write to us at our registered address.`,
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
