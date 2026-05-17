import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedButton } from "@/components/AnimatedButton";

export const metadata: Metadata = {
  title: "About Us – Reactive | Expert Home-Based Physiotherapy",
  description:
    "Learn about Reactive's mission, our founder Dr. Falguni Ambare, and our science-driven approach to home-based physiotherapy in Nagpur.",
};

const stats = [
  { value: "500+", label: "Patients Healed" },
  { value: "12+", label: "Years Experience" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "Flexible", label: "Home Scheduling" },
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
      "Every treatment plan is fully customized around your specific movement patterns, recovery speed, and lifestyle goals.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Science-Driven",
    description:
      "We strictly rely on the latest peer-reviewed research and clinical biomechanical evidence to deliver treatments that work.",
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
    title: "Nagpur Community Dedicated",
    description:
      "Delivering world-class private clinical care straight to Nagpur residents, making recovery simple, comfortable, and completely convenient.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Continuous Innovation",
    description:
      "From specialized pelvic wellness and posture retraining to sports agility rehab, we continuously implement modern physical therapy advancements.",
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
            alt="Physiotherapy session"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 md:px-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 mb-6">
            <span className="text-accent font-bold">//</span>
            <span className="text-sm font-semibold tracking-wide text-white">About Reactive</span>
          </div>
          <h1 className="max-w-3xl text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.2] font-semibold tracking-tight text-white">
            Restoring movement,<br />
            <span className="bg-linear-to-r from-brand-start to-brand-end bg-clip-text text-transparent">one home at a time</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm sm:text-base text-white/60 leading-relaxed">
            Reactive is a premium home-based physiotherapy and movement studio in Nagpur delivering expert, science-driven care straight to your doorstep.
          </p>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="w-full bg-linear-to-r from-brand-start to-brand-end">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-1">
                <span className="text-[32px] sm:text-[40px] font-bold leading-none text-white">{stat.value}</span>
                <span className="text-xs sm:text-sm font-medium text-white/70">{stat.label}</span>
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
              <span className="text-accent font-bold">//</span>
              <span className="text-sm font-semibold tracking-wide text-surface">Our Vision</span>
            </div>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.2] font-semibold tracking-tight text-surface mb-6">
              We exist to get you back to your best
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-surface/60 leading-relaxed mb-6">
              Reactive was founded with a simple belief: every individual deserves exceptional, personalised movement care. We reject one-size-fits-all rehabilitation in favor of customized treatments that treat the root cause—not just the symptoms.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-surface/60 leading-relaxed mb-10">
              Today, we deliver premium home-based physiotherapy and movement training across Nagpur, specializing in science-based pain relief, post-surgical rehab, posture correction, and prenatal/postnatal pelvic health care.
            </p>
            <AnimatedButton href="/contact" text="Book a Consultation" className="bg-linear-to-r from-brand-start to-brand-end hover:shadow-[0_8px_24px_rgba(25,79,162,0.25)] hover:scale-[1.02] text-white transition-all duration-300 border-0" />
          </div>
          <div className="relative w-full lg:w-1/2 aspect-[4/3] overflow-hidden rounded-[24px]">
            <Image
              src="https://framerusercontent.com/images/Vmy87hcbosCsXxs567jrjv34cMs.jpg"
              alt="Our vision and execution"
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
              <span className="text-accent font-bold">//</span>
              <span className="text-sm font-semibold tracking-wide text-surface">Our Values</span>
            </div>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.2] font-semibold tracking-tight text-surface">
              What we believe in
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="flex flex-col gap-4 rounded-[20px] bg-white p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-start/10 text-brand-start">
                  {v.icon}
                </span>
                <h3 className="text-xl font-bold text-surface">{v.title}</h3>
                <p className="text-surface/60 leading-relaxed text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet the Founder ── */}
      <section className="w-full bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1.5fr] lg:gap-20 items-center">
            
            {/* Left Column: Image */}
            <div className="relative overflow-hidden rounded-[20px] bg-[#fcf9f8] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.05)] w-full max-w-[420px] aspect-[4/5] mx-auto lg:mx-0">
              <div className="relative w-full h-full overflow-hidden rounded-[14px]">
                <Image
                  src="https://framerusercontent.com/images/cphnFeLljI5C2dQ9FCpjg8HU.png"
                  alt="Dr. Falguni Ambare"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 35vw, 100vw"
                />
              </div>
            </div>

            {/* Right Column: Founder details and story */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2 mb-2 self-start shadow-sm">
                  <span className="text-accent font-bold">//</span>
                  <span className="text-xs font-bold tracking-widest uppercase text-surface">Meet The Founder</span>
                </div>
                <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.2] font-semibold tracking-tight text-surface">
                  Dr. Falguni Ambare
                </h2>
                <p className="bg-linear-to-r from-brand-start to-brand-end bg-clip-text text-transparent font-semibold text-base sm:text-lg tracking-tight">
                  Physiotherapist and Founder of Reactive
                </p>
              </div>

              <div className="flex flex-col gap-4 text-surface/70 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
                <p>
                  Reactive was created with a vision to deliver expert, science-driven care with a personalised touch. My practice focuses on restoring functional movement, enhancing strength, and providing long-term solutions for pain and recovery.
                </p>
                <p>
                  Every treatment plan is thoughtfully designed to meet the unique needs of each individual. I am committed to offering a refined, results-oriented physiotherapy experience that supports you in moving, healing, and living better.
                </p>
              </div>

              <div className="relative pl-6 py-2 border-l-2 border-accent italic text-surface/80 text-sm sm:text-base md:text-lg max-w-xl font-medium bg-black/[0.01] pr-4 rounded-r-lg">
                "Your movement is your freedom. Healing is not just about relieving pain—it is about reclaiming your active life."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full bg-linear-to-r from-brand-start to-brand-end px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2">
            <span className="text-accent font-bold">//</span>
            <span className="text-sm font-semibold tracking-wide text-white">Get Started</span>
          </div>
          <h2 className="text-[30px] sm:text-[36px] lg:text-[44px] leading-[1.2] font-semibold tracking-tight text-white max-w-2xl">
            Ready to begin your recovery?
          </h2>
          <p className="max-w-lg text-white/70 text-xs sm:text-sm leading-relaxed">
            Book your initial home assessment today and we will create a personalised plan to get you moving again.
          </p>
          <AnimatedButton href="/contact" text="Book A Call" className="bg-white hover:bg-white/95 text-surface transition-all border-0 shadow-md hover:scale-[1.02]" />
        </div>
      </section>
    </main>
  );
}
