"use client";

import React from "react";

import { motion } from "framer-motion";
import { AnimatedButton } from "./AnimatedButton";

import { CalendarCheck } from "lucide-react";

const headingText = "Move better, feel stronger, live confidently.";
const words = headingText.split(" ");



/* ─── Main export ────────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slant-lines pt-[140px] pb-16 sm:pt-[160px] sm:pb-20 md:pt-[180px] md:pb-28">
      {/* Top Background Glow Elements */}
      <div className="absolute top-0 left-1/4 h-[350px] w-[500px] rounded-full bg-brand-light/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-1/4 h-[250px] w-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-8 px-6 text-center md:gap-9 md:px-10">
        {/* Top Premium Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/40 px-5 py-2 backdrop-blur-md shadow-xs"
        >
          <span className="text-accent font-bold">//</span>
          <span className="text-xs font-bold tracking-widest uppercase text-slate-800">
            Nagpur's Premier Home Physiotherapy
          </span>
        </motion.div>

        {/* Dynamic Typography Heading */}
        <h1 className="text-[34px] sm:text-[50px] md:text-[62px] leading-[1.1] font-semibold tracking-tight text-slate-900 max-w-3xl">
          {words.map((word, index) => {
            const isBlue = word.toLowerCase().includes("better") || word.toLowerCase().includes("stronger") || word.toLowerCase().includes("confidently.");
            return (
              <motion.span
                key={index}
                className={
                  isBlue
                    ? "bg-gradient-to-r from-brand-start to-brand-end bg-clip-text text-transparent inline-block mr-1.5 sm:mr-2 md:mr-3.5"
                    : "inline-block mr-1.5 sm:mr-2 md:mr-3.5"
                }
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 + index * 0.05 }}
              >
                {word}
              </motion.span>
            );
          })}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-slate-500 font-medium"
        >
          Skip the clinic commute. Recover in comfort with Nagpur's most trusted certified physiotherapists delivering custom, evidence-based care straight to your door.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
        >
          <AnimatedButton
            href="https://portal.reactivephysicaltherapy.com/register?role=patient"
            text="Book an Appointment"
            className="bg-gradient-to-r from-brand-start to-brand-end text-white px-9 py-4 sm:px-11 sm:py-4.5 rounded-full text-sm sm:text-base font-bold shadow-lg transition-all hover:shadow-[0_8px_28px_rgba(30,64,175,0.3)]"
            icon={<CalendarCheck className="h-5 w-5" />}
          />
        </motion.div>
      </div>
    </section>
  );
}
