import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services – Reactive | Home-Based Physiotherapy",
  description:
    "Explore our comprehensive range of home-based physiotherapy services in Nagpur including musculoskeletal, neuro, ANC/PNC care, functional training, and geriatric care.",
};

const services = [
  {
    title: "Physiotherapy - Musculoskeletal",
    slug: "physiotherapy-muskulo",
    description:
      "Expert care for muscle and joint pain, focusing on mobility and strength recovery.",
    image: "/images/muskulo_physio.png",
    tags: ["Pain Relief", "Mobility", "Strength"],
  },
  {
    title: "Physiotherapy - Neuro",
    slug: "physiotherapy-neuro",
    description:
      "Specialized neurological rehabilitation to restore movement, balance, and function.",
    image: "/images/neuro_physio.png",
    tags: ["Neurology", "Rehab", "Balance"],
  },
  {
    title: "ANC / PNC Care",
    slug: "anc-pnc-care",
    description:
      "Compassionate antenatal and postnatal care supporting maternal health and recovery.",
    image: "/images/anc_pnc_physio.png",
    tags: ["Maternal Care", "Prenatal", "Postnatal"],
  },
  {
    title: "Functional Training",
    slug: "functional-training",
    description:
      "Science-driven athletic conditioning to elevate physical capacity and overall performance.",
    image: "/images/functional_training.png",
    tags: ["Fitness", "Performance", "Conditioning"],
  },
  {
    title: "Geriatric Care",
    slug: "geriatric-care",
    description:
      "Tailored physical therapy for seniors to improve mobility, balance, and quality of life.",
    image: "/images/geriatric_physio.png",
    tags: ["Seniors", "Mobility", "Care"],
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative w-full bg-surface overflow-hidden pt-40 pb-24 px-6 md:px-10">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 mb-6">
            <span className="text-accent font-bold">//</span>
            <span className="text-sm font-semibold tracking-wide text-white">Our Services</span>
          </div>
          <h1 className="max-w-3xl text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.2] font-semibold tracking-tight text-white">
            Personalised treatment<br />
            <span className="bg-linear-to-r from-brand-start to-brand-end bg-clip-text text-transparent">for every patient</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm sm:text-base text-white/60 leading-relaxed">
            From elite sports rehabilitation to chronic pain management, Reactive delivers evidence-based physiotherapy tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="w-full bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/service/${service.slug}`}
                className="group flex flex-col overflow-hidden rounded-[20px] border border-black/8 bg-white transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
              >
                <div className="relative h-[240px] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="flex flex-col gap-4 p-7">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-start/10 px-3 py-1 text-xs font-semibold text-brand-start"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-semibold text-surface group-hover:text-brand-start transition-colors duration-200">
                    {service.title}
                  </h2>
                  <p className="text-surface/60 leading-relaxed text-xs sm:text-sm flex-1">{service.description}</p>
                  <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-surface">
                    <span>Learn More</span>
                    <svg
                      width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Strip ── */}
      <section className="w-full bg-[#f2f2f2] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2 mb-6">
              <span className="text-accent font-bold">//</span>
              <span className="text-sm font-semibold tracking-wide text-surface">How It Works</span>
            </div>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.2] font-semibold tracking-tight text-surface">
              Your recovery journey
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Book Online", desc: "Schedule your initial assessment with our easy online booking system." },
              { step: "02", title: "Assessment", desc: "Our physio conducts a thorough evaluation of your condition and goals." },
              { step: "03", title: "Treatment Plan", desc: "A personalised recovery programme is created just for you." },
              { step: "04", title: "Recovery & Progress", desc: "We track your progress and adjust treatment as you improve." },
            ].map((item) => (
              <div key={item.step} className="flex flex-col gap-4">
                <span className="text-[56px] font-bold leading-none text-brand-start/20">{item.step}</span>
                <h3 className="text-xl font-bold text-surface">{item.title}</h3>
                <p className="text-surface/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full bg-linear-to-r from-brand-start to-brand-end px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-[26px] sm:text-[32px] font-semibold text-white">Not sure which service is right for you?</h2>
            <p className="mt-2 text-white/70 text-sm sm:text-base">Book a free 15-minute consultation and we will guide you.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-surface px-8 py-4 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.02] hover:brightness-110"
          >
            Book Free Consult
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
