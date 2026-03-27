import type { Metadata } from "next";
import Script from "next/script";
import ContactForm from "./_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us – Phisio | Book Your Appointment",
  description:
    "Get in touch with Phisio to book an appointment, ask a question, or find our clinic location. We are here to help you recover.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PhysicalTherapy",
  name: "Phisio",
  url: "https://phisio.com",
  telephone: "+1-234-567-890",
  email: "hello@phisio.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Healing Way, Suite 100",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94105",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.7749,
    longitude: -122.4194,
  },
};

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Our Clinic",
    value: "123 Healing Way, Suite 100\nSan Francisco, CA 94105",
    href: undefined,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "hello@phisio.com",
    href: "mailto:hello@phisio.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Hours",
    value: "Mon–Fri: 8am – 6pm\nSat: 9am – 2pm",
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
              <span className="text-brand font-bold">//</span>
              <span className="text-sm font-semibold tracking-wide text-white">Contact Us</span>
            </div>
            <h1 className="max-w-2xl text-[40px] leading-[1.1] font-bold tracking-tight text-white sm:text-[56px]">
              Let&apos;s get you<br />
              <span className="text-brand">moving again</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/60 leading-relaxed">
              Book an appointment, ask a question, or simply reach out — our team is here and ready to help.
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
                <h2 className="text-[32px] font-bold text-surface sm:text-[40px] mb-4">Reach us directly</h2>
                <p className="text-surface/60 leading-relaxed">
                  We aim to respond to all enquiries within 24 hours. For urgent matters, please call us directly.
                </p>
              </div>

              <ul className="flex flex-col gap-6">
                {contactInfo.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-surface/30 mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="whitespace-pre-line text-surface font-medium hover:text-brand transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="whitespace-pre-line text-surface font-medium">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Map Embed Placeholder */}
              <div className="overflow-hidden rounded-[20px] bg-[#f2f2f2] aspect-[4/3] flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0198765432!2d-122.41941!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "280px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Phisio Clinic Location"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
