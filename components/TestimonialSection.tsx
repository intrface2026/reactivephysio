"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Robert",
    role: "28 years old, HR analyst",
    treatment_title: "Condition",
    treatment: "Wants to recover quickly from a sports injury, but does not have the time to visit clinics daily, making home-care highly profitable.",
    experience_title: "Experience",
    experience: "Expects the therapist and the treatment will meet his needs and the recovery will be pleasant and comfortable for reasonable money.",
  },
  {
    id: 2,
    name: "Thomas",
    role: "34 years old, Designer",
    treatment_title: "Condition",
    treatment: "Looking for premium, personalized care without leaving his studio. Values highly skilled professionals with modern techniques.",
    experience_title: "Experience",
    experience: "Expects an individualized plan that fixes his chronic back pain effectively without disrupting his busy daily routine.",
  },
  {
    id: 3,
    name: "Maria",
    role: "42 years old, Manager",
    treatment_title: "Condition",
    treatment: "Needs gentle but effective joint mobility exercises after a minor surgery. Seeks a trustworthy professional for home visits.",
    experience_title: "Experience",
    experience: "Expects clear communication, compassionate care, and a structured recovery timeline that ensures safe rehabilitation.",
  },
  {
    id: 4,
    name: "Sarah",
    role: "55 years old, Teacher",
    treatment_title: "Condition",
    treatment: "Wants to improve overall posture and reduce daily strain from long standing hours. Prefers familiar environments for sessions.",
    experience_title: "Experience",
    experience: "Expects the therapist to be patient, provide easy-to-follow exercises, and ensure her daily comfort significantly improves.",
  },
  {
    id: 5,
    name: "David",
    role: "30 years old, Developer",
    treatment_title: "Condition",
    treatment: "Suffers from severe neck pain due to continuous screen time. Needs immediate and sustainable ergonomic corrections.",
    experience_title: "Experience",
    experience: "Expects scientific, evidence-based methods and actionable advice on workstation setup along with pain relief therapies.",
  }
];

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getCardStyles = (index: number) => {
    let offset = index - activeIndex;
    const length = testimonials.length;
    
    // Wrap around logic for infinite carousel feel
    if (offset > Math.floor(length / 2)) {
      offset -= length;
    } else if (offset < -Math.floor(length / 2)) {
      offset += length;
    }

    if (offset === 0) {
      return {
        zIndex: 3,
        scale: 1,
        x: "0%",
        rotateY: 0,
        opacity: 1,
        filter: "blur(0px)",
      };
    } else if (offset === 1) {
      return {
        zIndex: 2,
        scale: 0.85,
        x: "105%",
        rotateY: -20,
        opacity: 0.8,
        filter: "blur(2px)",
      };
    } else if (offset === -1) {
      return {
        zIndex: 2,
        scale: 0.85,
        x: "-105%",
        rotateY: 20,
        opacity: 0.8,
        filter: "blur(2px)",
      };
    } else {
      return {
        zIndex: 1,
        scale: 0.7,
        x: offset > 0 ? "150%" : "-150%",
        rotateY: offset > 0 ? -30 : 30,
        opacity: 0,
        filter: "blur(8px)",
      };
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#FAFBFF] px-6 py-24 md:py-32 flex justify-center">
      {/* Decorative ambient background blobs for glassmorphism contrast */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#5A87F2]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1200px] w-full flex flex-col items-center">
        
        {/* Top Badge */}
        <div className="bg-white/60 backdrop-blur-md border border-white/40 shadow-sm px-5 py-2 rounded-full mb-12">
          <span className="text-[13px] font-semibold text-[#4A5568]">// Patient Stories</span>
        </div>

        {/* 3D Carousel Container */}
        <div 
          style={{ perspective: 1200 }} 
          className="relative h-[480px] sm:h-[440px] w-full max-w-[900px] flex justify-center items-center"
        >
          {testimonials.map((t, idx) => {
            const styles = getCardStyles(idx);
            const isCenter = idx === activeIndex;
            const initials = t.name.split(" ").map((n) => n[0]).join("");

            return (
              <motion.div
                key={t.id}
                animate={styles}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.8 }}
                className={`absolute w-[90vw] max-w-[360px] bg-white/40 backdrop-blur-xl border border-white/60 rounded-[24px] p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)] ${
                  !isCenter ? "pointer-events-none" : ""
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6 sm:mb-8 border-b border-black/5 pb-4 sm:pb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-white/80 backdrop-blur-md shadow-sm border border-white/50 text-[16px] font-bold text-[#5A87F2]">
                    {initials}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-[20px] font-semibold text-[#1C2024] leading-tight">{t.name}</h3>
                    <p className="text-[13px] text-[#556275] mt-0.5">{t.role}</p>
                  </div>
                </div>

                {/* Motivation Section */}
                <div className="mb-6">
                  <h4 className="text-[13px] font-semibold uppercase tracking-wider text-[#6B7A90] mb-2">{t.treatment_title}</h4>
                  <p className="text-[14px] text-[#2D333E] leading-relaxed font-medium">
                    {t.treatment}
                  </p>
                </div>

                {/* Expectations Section */}
                <div>
                  <h4 className="text-[13px] font-semibold uppercase tracking-wider text-[#6B7A90] mb-2">{t.experience_title}</h4>
                  <p className="text-[14px] text-[#2D333E] leading-relaxed font-medium">
                    {t.experience}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2.5 mt-8">
          {testimonials.map((t, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={t.id}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  isActive ? "w-8 bg-[#5A87F2]" : "w-2.5 bg-black/10 hover:bg-black/20"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
