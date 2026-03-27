import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedButton } from "@/components/AnimatedButton";

export const metadata: Metadata = {
  title: "About Us – Phisio | Expert Physiotherapy & Rehabilitation",
  description:
    "Learn about Phisio's mission, our world-class team of physiotherapists, and our evidence-based approach to restoring movement and improving lives.",
};

const stats = [
  { value: "500+", label: "Patients Healed" },
  { value: "12+", label: "Years Experience" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Support Available" },
];

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Patient-First Care",
    description:
      "Every decision we make is guided by what's best for our patients' long-term wellbeing and recovery.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Evidence-Based",
    description:
      "We rely on the latest peer-reviewed research and clinical evidence to deliver treatments that work.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Community Focused",
    description:
      "We're more than a clinic — we're a support system for athletes, seniors, workers, and families.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Continuous Innovation",
    description:
      "From dry needling to advanced gait analysis, we continuously adopt the best modern physiotherapy techniques.",
  },
];

const team = [
  {
    name: "Mateo R. Albright",
    role: "Lead Physiotherapist",
    image: "https://framerusercontent.com/images/IZLlZCsR8N2MwI5SDbpqgI446M.png",
  },
  {
    name: "Javier C. Emerson",
    role: "Sports Rehab Specialist",
    image: "https://framerusercontent.com/images/t1QOMAtulA7DvOsUx3HooiC5xA.png",
  },
  {
    name: "Leonardo F. Ashton",
    role: "Manual Therapy Expert",
    image: "https://framerusercontent.com/images/cphnFeLljI5C2dQ9FCpjg8HU.png",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative w-full min-h-[70vh] flex items-end overflow-hidden bg-surface">
        <div className="absolute inset-0">
          <Image
            src="https://framerusercontent.com/images/xsHrPTPeNjbWr67tG8wdR5p0jTo.jpg"
            alt="Physiotherapy clinic"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 md:px-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 mb-6">
            <span className="text-brand font-bold">//</span>
            <span className="text-sm font-semibold tracking-wide text-white">About Phisio</span>
          </div>
          <h1 className="max-w-3xl text-[40px] leading-[1.1] font-bold tracking-tight text-white sm:text-[56px] lg:text-[72px]">
            Restoring movement,<br />
            <span className="text-brand">one patient at a time</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/60 leading-relaxed">
            We are a team of licensed physiotherapists dedicated to helping patients restore movement, reduce pain, and prevent long-term injuries through evidence-based care.
          </p>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="w-full bg-brand">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-1">
                <span className="text-[44px] font-bold leading-none text-white">{stat.value}</span>
                <span className="text-sm font-medium text-white/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission + Story ── */}
      <section className="w-full bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2 mb-8">
              <span className="text-brand font-bold">//</span>
              <span className="text-sm font-semibold tracking-wide text-surface">Our Mission</span>
            </div>
            <h2 className="text-[36px] leading-[1.1] font-bold tracking-tight text-surface sm:text-[48px] mb-6">
              We exist to get you back to your best
            </h2>
            <p className="text-surface/60 leading-relaxed text-lg mb-6">
              Founded in 2012, Phisio began with a simple belief: every patient deserves exceptional, personalised care. Our clinic was born from a frustration with one-size-fits-all rehabilitation and a passion for treating the person — not just the injury.
            </p>
            <p className="text-surface/60 leading-relaxed text-lg mb-10">
              Today, we have grown into a full-service physiotherapy centre with specialists across sports rehabilitation, manual therapy, womens health, neurological rehab, and paediatric physiotherapy.
            </p>
            <AnimatedButton href="/contact" text="Book a Consultation" className="bg-brand text-white" />
          </div>
          <div className="relative w-full lg:w-1/2 aspect-[4/3] overflow-hidden rounded-[24px]">
            <Image
              src="https://framerusercontent.com/images/Vmy87hcbosCsXxs567jrjv34cMs.jpg"
              alt="Our mission"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="w-full bg-[#f2f2f2] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-16 flex flex-col items-center text-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2">
              <span className="text-brand font-bold">//</span>
              <span className="text-sm font-semibold tracking-wide text-surface">Our Values</span>
            </div>
            <h2 className="text-[36px] leading-[1.1] font-bold tracking-tight text-surface sm:text-[48px]">
              What we believe in
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="flex flex-col gap-4 rounded-[20px] bg-white p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  {v.icon}
                </span>
                <h3 className="text-xl font-bold text-surface">{v.title}</h3>
                <p className="text-surface/60 leading-relaxed text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Preview ── */}
      <section className="w-full bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2 mb-6">
                <span className="text-brand font-bold">//</span>
                <span className="text-sm font-semibold tracking-wide text-surface">Meet The Team</span>
              </div>
              <h2 className="text-[36px] leading-[1.1] font-bold tracking-tight text-surface sm:text-[48px]">
                Our expert physiotherapists
              </h2>
            </div>
            <AnimatedButton href="/team" text="View All Team" className="bg-surface text-white shrink-0" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="group overflow-hidden rounded-[20px] bg-[#f2f2f2]">
                <div className="relative w-full overflow-hidden rounded-[20px]" style={{ aspectRatio: "1/1" }}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-bold text-surface">{member.name}</h4>
                  <p className="text-surface/60 text-sm mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full bg-surface px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2">
            <span className="text-brand font-bold">//</span>
            <span className="text-sm font-semibold tracking-wide text-white">Get Started</span>
          </div>
          <h2 className="text-[36px] leading-[1.1] font-bold tracking-tight text-white sm:text-[56px] max-w-2xl">
            Ready to begin your recovery?
          </h2>
          <p className="max-w-lg text-white/50 text-lg leading-relaxed">
            Book your initial assessment today and one of our specialists will create a personalised plan to get you moving again.
          </p>
          <AnimatedButton href="/contact" text="Book A Call" className="bg-brand text-white" />
        </div>
      </section>
    </main>
  );
}
