"use client";

import React from "react";

import { motion } from "framer-motion";
import { AnimatedButton } from "./AnimatedButton";

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
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center justify-center gap-2.5 rounded-full border border-slate-200/80 bg-white px-5 py-2 shadow-sm transition-all duration-300 hover:border-brand/20"
        >
          <span className="text-brand font-extrabold text-xs tracking-wider animate-pulse">{"//"}</span>
          <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-slate-800 uppercase">
            Physiotherapy studio Nagpur
          </span>
        </motion.div>

        {/* Heading */}
        <h1 className="text-[34px] sm:text-[46px] md:text-[54px] lg:text-[62px] leading-[1.08] font-normal tracking-tight text-slate-900">
          {words.map((word, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 18, filter: "blur(3px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: idx * 0.06,
              }}
              className="inline-block"
            >
              {word === "stronger," ? (
                <span className="text-brand font-medium bg-gradient-to-r from-brand-start to-brand-mid bg-clip-text text-transparent">{word}</span>
              ) : (
                word
              )}
              {idx !== words.length - 1 && "\u00A0"}
            </motion.span>
          ))}
        </h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-500 font-medium leading-relaxed"
        >
          Quality physiotherapy can happen right at home. Reactive is a premium home-based physiotherapy and movement studio in Nagpur, delivering expert care across Ramdaspeth, Dharampeth, Pratap Nagar, and surrounding areas straight to your doorstep.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
        >
          <AnimatedButton
            href="/contact"
            text="// Book a Session"
            className="bg-gradient-to-r from-brand-start to-brand-end text-white px-9 py-4 sm:px-11 sm:py-4.5 rounded-full text-sm sm:text-base font-bold shadow-lg transition-all hover:shadow-[0_8px_28px_rgba(30,64,175,0.3)] hover:scale-[1.03]"
            iconSrc=""
          />
        </motion.div>
      </div>
    </section>
  );
}
