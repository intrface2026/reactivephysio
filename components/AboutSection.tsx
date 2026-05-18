"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "About Reactive",
    subtitle: "Expert Movement & Pain Therapy",
    text: "Reactive is a modern, home-based physiotherapy and movement service designed to help you heal, strengthen, and perform at your best—all from the comfort of your home. We focus on understanding your body, treating the root cause, and guiding you toward pain-free movement.",
    image: "https://framerusercontent.com/images/Vmy87hcbosCsXxs567jrjv34cMs.jpg",
  },
  {
    title: "Our Clinical Approach",
    subtitle: "Evidence-Based & Active Rehab",
    text: "We believe in hands-on clinical assessment combined with tailored active recovery programs. Led by Dr. Falguni Ambare, we design evidence-based therapies mapping directly to your musculoskeletal, neurological, or sports recovery goals.",
    image: "https://framerusercontent.com/images/xsHrPTPeNjbWr67tG8wdR5p0jTo.jpg",
  },
  {
    title: "Bespoke Treatment Promise",
    subtitle: "Committed to Your Care",
    text: "No rigid packages or template routines. Every treatment session is private, comprehensive, and fully optimized for your home environment. We stand with you through every step of your recovery, rehabilitation, and long-term health journey.",
    image: "https://framerusercontent.com/images/zBCuZABYokbHBIWTQrFAnQDRNY.jpg",
  }
];

export function AboutSection() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Background Image covering the entire section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://framerusercontent.com/images/xsHrPTPeNjbWr67tG8wdR5p0jTo.jpg"
          alt="Physiotherapist assisting patient"
          fill
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-black/20" />
      </div>

      <div className="relative z-10 flex w-full flex-col items-center">
        <div className="relative flex w-full flex-col items-center pt-24 pb-48 sm:pt-32 sm:pb-56 md:pt-40 md:pb-64 px-5">
          {/* Centered Content: Title */}
          <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 text-xs font-bold tracking-widest uppercase text-white/70 flex items-center gap-2"
            >
              <span>// About Reactive</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-3xl text-[24px] leading-[1.3] font-medium tracking-tight text-white sm:text-[32px] md:text-[40px] lg:text-[46px]"
            >
              Our goal is to make healing easier, movement better, and recovery truly convenient—delivering expert care at your preferred time and comfort.
            </motion.h2>
          </div>
        </div>

        {/* Overlapping Horizontal Card */}
        <div className="relative z-20 flex w-full justify-center px-5 -mt-32 sm:-mt-40 md:-mt-48 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex w-full max-w-4xl flex-col overflow-hidden rounded-[24px] bg-white text-surface shadow-2xl border border-black/5 md:flex-row md:items-stretch gap-0"
          >
            {/* Card Image Column */}
            <div className="relative h-[200px] w-full shrink-0 overflow-hidden sm:h-[220px] md:h-auto md:w-[260px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[index].image}
                    alt={slides[index].title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-transparent md:block hidden" />
            </div>

            {/* Card Text & Indicator Column */}
            <div className="flex flex-col justify-between p-6 md:p-8 flex-1 min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-2"
                >
                  <span className="text-xs font-bold bg-linear-to-r from-brand-start to-brand-end bg-clip-text text-transparent uppercase tracking-widest leading-none">
                    {slides[index].subtitle}
                  </span>
                  <h5 className="text-[18px] font-bold text-surface sm:text-[20px] tracking-tight leading-tight">
                    {slides[index].title}
                  </h5>
                  <p className="text-xs sm:text-sm font-medium text-surface/75 leading-relaxed max-w-2xl mt-1">
                    {slides[index].text}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Controls (Indicator Dots & Arrows) */}
              <div className="flex items-center justify-between mt-6 border-t border-black/[0.06] pt-4">
                {/* Dot Indicators */}
                <div className="flex gap-2">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === index ? "w-6 bg-accent" : "w-2.5 bg-black/15 hover:bg-black/30"
                      }`}
                    />
                  ))}
                </div>

                {/* Arrow Navigation */}
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    aria-label="Previous Slide"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-transparent text-surface transition-all duration-200 hover:bg-linear-to-r hover:from-brand-start hover:to-brand-end hover:border-transparent hover:text-white"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Next Slide"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-transparent text-surface transition-all duration-200 hover:bg-linear-to-r hover:from-brand-start hover:to-brand-end hover:border-transparent hover:text-white"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
