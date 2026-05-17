import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Meet the Founder – Reactive | Lead Physiotherapist Dr. Falguni Ambare",
  description:
    "Meet Dr. Falguni Ambare, founder and lead physiotherapist at Reactive in Nagpur. Discover her science-driven patient recovery philosophy.",
};

export default function TeamPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="w-full bg-surface pt-40 pb-24 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 mb-6">
            <span className="text-accent font-bold">//</span>
            <span className="text-sm font-semibold tracking-wide text-white">Lead Practitioner</span>
          </div>
          <h1 className="max-w-2xl text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.2] font-semibold tracking-tight text-white">
            Meet our founder &amp;<br />
            <span className="bg-linear-to-r from-brand-start to-brand-end bg-clip-text text-transparent">lead physiotherapist</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm sm:text-base text-white/60 leading-relaxed">
            Delivering science-driven, bespoke movement rehabilitation and wellness therapies directly to your home in Nagpur.
          </p>
        </div>
      </section>

      {/* ── Spotlight Section ── */}
      <section className="w-full bg-[#f2f2f2] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[380px_1fr] items-start">
            {/* Left Box: Image Card */}
            <div className="bg-white rounded-[24px] p-4 border border-black/8 shadow-sm">
              <div className="relative overflow-hidden rounded-[20px]" style={{ aspectRatio: "3/3.5" }}>
                <Image
                  src="https://framerusercontent.com/images/cphnFeLljI5C2dQ9FCpjg8HU.png"
                  alt="Dr. Falguni Ambare"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="mt-6 text-center pb-2">
                <h3 className="text-xl font-bold text-surface">Dr. Falguni Ambare</h3>
                <p className="bg-linear-to-r from-brand-start to-brand-end bg-clip-text text-transparent font-semibold text-sm mt-1">Founder &amp; Principal Therapist</p>
              </div>
            </div>

            {/* Right Box: Bio details & Credentials */}
            <div className="flex flex-col gap-8 bg-white rounded-[24px] p-8 lg:p-12 border border-black/8 shadow-sm">
              <div>
                <h2 className="text-xl font-semibold text-surface mb-4">Dr. Falguni's Treatment Philosophy</h2>
                <p className="text-surface/75 text-sm sm:text-base leading-relaxed mb-6 font-medium italic border-l-2 border-accent pl-4">
                  "Physical therapy is not just about correcting isolated dysfunction; it is about restoring the holistic harmony of your movement system. By understanding the root biomechanical issues, we can deliver therapies that restore long-term comfort, structural integrity, and confidence."
                </p>
                <p className="text-surface/60 text-xs sm:text-sm leading-relaxed mb-4">
                  Dr. Falguni holds over a decade of clinical rehabilitation experience in treating complex cases across orthopedic, prenatal/postnatal pelvic health, sports injuries, and postural reintegration. With a patient-centric, science-driven approach, she is dedicated to giving each client a customized, highly focused home recovery experience in Nagpur.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-surface mb-4">Areas of Clinical Expertise</h3>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Women's Health & Pelvic Floor Recovery",
                    "Spine Care & Postural Alignment",
                    "Joint Strengthening & Movement Rehab",
                    "Pediatric Developmental Physiotherapy",
                    "Chronic Pain Management & Manual Therapy"
                  ].map((specialty) => (
                    <span key={specialty} className="rounded-full bg-brand-start/10 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-brand-start">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-black/8 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-surface/50 mb-1">Clinic Coverage</h4>
                  <p className="text-xs sm:text-sm text-surface font-semibold">Nagpur, Maharashtra, India</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-brand-start to-brand-end px-8 py-4 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(25,79,162,0.25)]"
                >
                  Book an Assessment
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy Quote Board ── */}
      <section className="w-full bg-surface px-6 py-24 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-accent text-[80px] leading-none font-serif mb-4">&ldquo;</p>
          <blockquote className="text-[20px] sm:text-[26px] font-medium leading-relaxed text-white">
            Your movement is your freedom. Healing is not just about relieving pain—it is about reclaiming your active life.
          </blockquote>
          <p className="mt-6 text-accent font-bold uppercase tracking-widest text-sm">— Dr. Falguni Ambare</p>
        </div>
      </section>
    </main>
  );
}
