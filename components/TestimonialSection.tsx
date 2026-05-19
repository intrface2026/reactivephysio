"use client";

import React from "react";

const row1Testimonials = [
  {
    id: 1,
    name: "Sanjay Deshmukh",
    role: "Retired Bank Manager | Chronic Lower Back Pain Recovery",
    text: "I was struggling with chronic lower back pain for three years. After just 6 sessions of personalized home physical therapy, I can walk 5 kilometers pain-free. Outstanding care!",
  },
  {
    id: 2,
    name: "Anjali Sharma",
    role: "State-level Badminton Player | Post-ACL Surgery Rehab",
    text: "Post-ACL surgery rehab at home was a total lifesaver. Dr. Falguni's team was incredibly professional, brought all necessary equipment, and got me back on court ahead of schedule.",
  },
  {
    id: 3,
    name: "Dr. Rajesh Sen",
    role: "Consultant Cardiologist | Parent Coordinator for Stroke Rehab",
    text: "Highly recommend their geriatric services. Dr. Falguni's team has been visiting my 82-year-old father for post-stroke rehab. His mobility and confidence have improved dramatically.",
  },
  {
    id: 4,
    name: "Priyanka Chaudhari",
    role: "Parent of Aarav | Pediatric Coordination Client",
    text: "Excellent pediatric coordination. My son was having developmental balance issues. The therapists made the home sessions feel like play while targeting his core strength.",
  },
];

const row2Testimonials = [
  {
    id: 5,
    name: "Amit Verma",
    role: "Lead Software Architect | WFH Neck & Shoulder Strain",
    text: "Dealing with work-from-home neck and shoulder strain. The ergonomic advice coupled with dry needling and manual therapy sessions at home was exactly what I needed.",
  },
  {
    id: 6,
    name: "Sneha Rao",
    role: "New Mother | Antenatal & Postnatal Pelvic Health",
    text: "Their ANC/PNC physical therapy program is wonderful. The home sessions helped me manage pregnancy pelvic pain and safely rebuild core strength post-delivery.",
  },
  {
    id: 7,
    name: "Vikram Patel",
    role: "Founder, Patel Textiles | Post-Operative Recovery",
    text: "Reactive made home-based post-surgery rehab so seamless. The consistency, therapist punctuality, and professional tracking of recovery metrics was top tier.",
  },
  {
    id: 8,
    name: "Sunita Wankhede",
    role: "Homemaker | Knee Osteoarthritis Care",
    text: "Exceptional manual therapy for knee osteoarthritis. The convenience of not traveling with severe joint pain made a massive difference in my recovery speed.",
  },
];

// Triplicate the lists to guarantee a seamless, infinite loop on all screen sizes
const marqueeRow1 = [...row1Testimonials, ...row1Testimonials, ...row1Testimonials];
const marqueeRow2 = [...row2Testimonials, ...row2Testimonials, ...row2Testimonials];

export function TestimonialSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 sm:py-28 md:py-32">
      {/* Decorative subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-start/5 blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-end/5 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto px-6 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#f8f9fa] px-5 py-2 mb-6 shadow-xs">
            <span className="text-brand-start font-bold">//</span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-700">Patient Success Stories</span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold tracking-tight text-zinc-900 leading-[1.2]">
            Loved by Nagpur's active community
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-zinc-500 leading-relaxed max-w-2xl mx-auto">
            Read how our personalized, evidence-based home physical therapy programs have helped patients recover, regain mobility, and live pain-free.
          </p>
        </div>

        {/* Testimonials Slider Area */}
        <div className="flex flex-col gap-6 sm:gap-8 w-full">
          
          {/* Row 1: Moves Left */}
          <div className="relative flex overflow-hidden w-full py-2">
            {/* Ambient side fading gradients for seamless aesthetics */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex w-max gap-6 animate-marquee-left hover:[animation-play-state:paused] cursor-pointer">
              {marqueeRow1.map((t, idx) => (
                <div
                  key={`row1-${t.id}-${idx}`}
                  className="flex-shrink-0 w-[300px] sm:w-[400px] md:w-[450px] bg-zinc-50 border border-zinc-100 rounded-[28px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-brand-start/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
                >
                  <div>
                    {/* Blue quote mark */}
                    <span className="text-brand-start text-5xl sm:text-6xl font-serif leading-none block mb-2 sm:mb-4 select-none opacity-80">
                      “
                    </span>
                    <p className="text-zinc-900 font-semibold text-sm sm:text-base leading-relaxed tracking-tight mb-6">
                      {t.text}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 text-sm sm:text-base">
                      {t.name}
                    </h4>
                    <p className="text-zinc-500 text-xs sm:text-sm mt-0.5 font-medium">
                      {t.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Moves Right */}
          <div className="relative flex overflow-hidden w-full py-2">
            {/* Ambient side fading gradients for seamless aesthetics */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex w-max gap-6 animate-marquee-right hover:[animation-play-state:paused] cursor-pointer">
              {marqueeRow2.map((t, idx) => (
                <div
                  key={`row2-${t.id}-${idx}`}
                  className="flex-shrink-0 w-[300px] sm:w-[400px] md:w-[450px] bg-zinc-50 border border-zinc-100 rounded-[28px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-brand-start/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
                >
                  <div>
                    {/* Blue quote mark */}
                    <span className="text-brand-start text-5xl sm:text-6xl font-serif leading-none block mb-2 sm:mb-4 select-none opacity-80">
                      “
                    </span>
                    <p className="text-zinc-900 font-semibold text-sm sm:text-base leading-relaxed tracking-tight mb-6">
                      {t.text}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 text-sm sm:text-base">
                      {t.name}
                    </h4>
                    <p className="text-zinc-500 text-xs sm:text-sm mt-0.5 font-medium">
                      {t.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
