import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing – Reactive | Transparent Physiotherapy Pricing",
  description:
    "View Reactive's clear, transparent pricing plans for physiotherapy sessions. No hidden fees — just expert care at fair prices.",
};

const plans = [
  {
    name: "Single Session",
    price: "€80",
    period: "per session",
    description: "Perfect for targeting a specific issue with one focused treatment.",
    features: [
      "60-minute assessment & treatment",
      "Personalised exercise programme",
      "Post-session recovery guidance",
      "Email follow-up within 48hrs",
    ],
    cta: "Book Now",
    featured: false,
  },
  {
    name: "Recovery Pack",
    price: "€350",
    period: "6 sessions",
    description: "Our most popular plan — ideal for acute injuries and post-surgical rehab.",
    features: [
      "6 × 60-minute sessions",
      "Full initial assessment included",
      "Custom recovery programme",
      "Priority booking access",
      "Weekly progress tracking",
      "Unlimited email support",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Performance Plan",
    price: "€799",
    period: "12 sessions + extras",
    description: "Comprehensive care for athletes and those with complex ongoing conditions.",
    features: [
      "12 × 60-minute sessions",
      "Gait & movement analysis",
      "Sport-specific programming",
      "Monthly physio review",
      "On-demand video consultations",
      "Personalised nutrition notes",
      "Priority emergency slots",
    ],
    cta: "Contact Us",
    featured: false,
  },
];

const faqs = [
  {
    q: "Do I need a GP referral to book?",
    a: "No referral is needed. You can book directly via our contact page or by phone. Our physiotherapists are primary contact practitioners.",
  },
  {
    q: "Is physiotherapy covered by insurance?",
    a: "We work with most major health insurance providers. We recommend checking your policy ahead of your appointment and we can provide all necessary receipts.",
  },
  {
    q: "How long is each session?",
    a: "Initial assessments are 60 minutes. Follow-up sessions are typically 45–60 minutes depending on your treatment plan.",
  },
  {
    q: "What should I wear to my appointment?",
    a: "Wear comfortable, loose-fitting clothing that allows easy access to the area being treated. For lower limb conditions, shorts are ideal.",
  },
  {
    q: "Can I cancel or reschedule?",
    a: "Yes. We ask for at least 24 hours' notice for cancellations or rescheduling to avoid a late cancellation fee of 50% of the session cost.",
  },
];

export default function PricingPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="w-full bg-surface pt-40 pb-24 px-6 md:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 mb-6">
            <span className="text-brand font-bold">//</span>
            <span className="text-sm font-semibold tracking-wide text-white">Transparent Pricing</span>
          </div>
          <h1 className="text-[40px] leading-[1.1] font-bold tracking-tight text-white sm:text-[56px]">
            Simple, honest pricing
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg text-white/60 leading-relaxed">
            No hidden fees, no surprise bills — just exceptional physiotherapy at fair, transparent prices.
          </p>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="w-full bg-[#f2f2f2] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-[24px] p-8 lg:p-10 ${
                  plan.featured
                    ? "bg-surface text-white shadow-[0_24px_80px_rgba(0,0,0,0.2)] ring-2 ring-brand"
                    : "bg-white text-surface"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand px-5 py-1.5 text-xs font-bold text-white shadow-lg">
                    Most Popular
                  </span>
                )}
                <div className="mb-8">
                  <h2 className={`text-xl font-bold mb-2 ${plan.featured ? "text-white" : "text-surface"}`}>
                    {plan.name}
                  </h2>
                  <p className={`text-sm leading-relaxed ${plan.featured ? "text-white/60" : "text-surface/60"}`}>
                    {plan.description}
                  </p>
                </div>
                <div className="mb-8 flex items-baseline gap-2">
                  <span className={`text-[52px] font-bold leading-none ${plan.featured ? "text-white" : "text-surface"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.featured ? "text-white/50" : "text-surface/50"}`}>
                    {plan.period}
                  </span>
                </div>
                <ul className="mb-10 flex flex-col gap-3.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className={`mt-0.5 font-bold ${plan.featured ? "text-brand" : "text-brand"}`}>//</span>
                      <span className={`text-sm leading-relaxed ${plan.featured ? "text-white/80" : "text-surface/70"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold transition-all duration-300 ${
                    plan.featured
                      ? "bg-brand text-white hover:shadow-[0_8px_24px_rgba(0,167,216,0.5)]"
                      : "bg-surface text-white hover:bg-brand"
                  }`}
                >
                  {plan.cta}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-surface/40">
            All prices include VAT. Corporate and group packages available — <Link href="/contact" className="text-brand hover:underline">contact us</Link> for a custom quote.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="w-full bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2 mb-6">
              <span className="text-brand font-bold">//</span>
              <span className="text-sm font-semibold tracking-wide text-surface">FAQ</span>
            </div>
            <h2 className="text-[36px] leading-[1.1] font-bold tracking-tight text-surface sm:text-[48px]">
              Common questions
            </h2>
          </div>
          <div className="flex flex-col divide-y divide-black/8">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-6">
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-lg font-semibold text-surface list-none">
                  <span>{faq.q}</span>
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-black/10 text-surface/40 transition-transform group-open:rotate-45">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-surface/60 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full bg-brand px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-[32px] font-bold text-white sm:text-[40px]">Ready to feel the difference?</h2>
            <p className="mt-2 text-white/70 text-lg">Book your first session — no commitment required.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-surface px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            Book Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
