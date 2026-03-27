"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="relative w-full overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex w-full flex-col items-center pt-24 pb-[420px] sm:pt-32 sm:pb-[360px] md:min-h-[900px] md:pt-40 md:pb-56"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-black">
          <Image
            src="https://framerusercontent.com/images/xsHrPTPeNjbWr67tG8wdR5p0jTo.jpg"
            alt="Physiotherapist assisting patient"
            fill
            className="object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20" />
        </div>

        {/* Centered Content: Title */}
        <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-xs font-bold tracking-widest uppercase text-white/70 flex items-center gap-2"
          >
            <span>// Restore Your Strength</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl text-[28px] leading-[1.15] font-bold tracking-tight text-white sm:text-[38px] md:text-[48px] lg:text-[56px] xl:text-[64px]"
          >
            Our goal is simple: to get you back to living your best life
          </motion.h2>
        </div>

        {/* Overlapping Horizontal Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-8 z-20 flex w-[90%] max-w-4xl flex-col overflow-hidden rounded-[20px] bg-white text-surface shadow-2xl sm:bottom-10 md:bottom-14 md:flex-row md:items-center gap-0"
        >
          {/* Card Image */}
          <div className="relative h-[180px] w-full shrink-0 overflow-hidden rounded-t-[20px] sm:h-[200px] md:h-[130px] md:w-[200px] md:rounded-t-none md:rounded-l-[20px]">
            <Image
              src="https://framerusercontent.com/images/Vmy87hcbosCsXxs567jrjv34cMs.jpg"
              alt="Mission"
              fill
              className="object-cover"
            />
          </div>

          {/* Card Text */}
          <div className="flex flex-col gap-2 p-4 md:flex-1 md:p-5">
            <h5 className="text-[18px] font-bold text-surface sm:text-[20px] md:text-[22px]">
              Our mission
            </h5>
            <p className="text-sm font-medium text-surface/70 leading-relaxed max-w-md">
              Provide expert physiotherapy that empowers patients to recover
              fully and safely today.
            </p>
          </div>

          {/* Arrow Buttons */}
          <div className="flex gap-2 self-start p-4 pt-0 md:self-center md:pr-5 md:pt-0">
            <button
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-transparent text-surface transition-colors hover:bg-surface hover:text-white"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-transparent text-surface transition-colors hover:bg-surface hover:text-white"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
