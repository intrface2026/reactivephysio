import type { Metadata } from "next";
import Script from "next/script";
import ContactForm from "./_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us – Reactive | Book Your Home-Based Appointment",
  description:
    "Get in touch with Reactive to book a personalized home-based physiotherapy session in Nagpur. We are here to support your healing and movement.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PhysicalTherapy",
  name: "Reactive Physical Therapy",
  url: "https://reactivephysicaltherapy.in",
  telephone: "+91-98230-12345",
  email: "hello@reactivept.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Home-Based Private Services",
    addressLocality: "Nagpur",
    addressRegion: "Maharashtra",
    postalCode: "440010",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
};

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Coverage Area",
    value: "Home-Based Care Across\nNagpur, Maharashtra, India",
    href: undefined,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 98230 12345",
    href: "tel:+919823012345",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "hello@reactivept.in",
    href: "mailto:hello@reactivept.in",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Hours",
    value: "Mon–Sat: 8am – 8pm\nSunday: By Appointment",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <Script
        id="local-business-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        {/* ── Hero ── */}
        <section className="w-full bg-surface pt-40 pb-24 px-6 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 mb-6">
              <span className="text-accent font-bold">//</span>
              <span className="text-sm font-semibold tracking-wide text-white">Contact Us</span>
            </div>
            <h1 className="max-w-2xl text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.2] font-semibold tracking-tight text-white">
              Let&apos;s get you<br />
              <span className="bg-linear-to-r from-brand-start to-brand-end bg-clip-text text-transparent">moving again</span>
            </h1>
            <p className="mt-6 max-w-lg text-sm sm:text-base text-white/60 leading-relaxed">
              Book a home consultation, ask a clinical question, or simply reach out — we are here and ready to support your rehabilitation.
            </p>
          </div>
        </section>

        {/* ── Form + Info ── */}
        <section className="w-full bg-white px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Contact Form (client component) */}
            <ContactForm />

            {/* Contact Info */}
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="text-[24px] sm:text-[30px] font-semibold text-surface mb-3">Reach us directly</h2>
                <p className="text-xs sm:text-sm text-surface/60 leading-relaxed">
                  We respond to all clinical enquiries within 24 hours. For booking urgent assessments, please call us directly.
                </p>
              </div>

              <ul className="flex flex-col gap-6">
                {contactInfo.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-start/10 text-brand-start">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-surface/30 mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="whitespace-pre-line text-surface font-medium hover:text-brand-start transition-colors text-xs sm:text-sm">
                          {item.value}
                        </a>
                      ) : (
                        <p className="whitespace-pre-line text-surface font-medium text-xs sm:text-sm">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Map Embed Placeholder */}
              <div className="overflow-hidden rounded-[20px] bg-[#f2f2f2] aspect-[4/3] flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223253.98765432!2d78.9619!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a3a5f22f%3A0x6b306443c2c48e8!2sNagpur%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "280px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Reactive Nagpur Coverage Area Map"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
