"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedButton } from "./AnimatedButton";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-r from-brand-start to-brand-end px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 text-center md:flex-row md:items-start md:text-left">
        {/* Left Content */}
        <div className="flex max-w-2xl flex-col items-center md:items-start z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2"
          >
            <span className="text-white font-bold">//</span>
            <span className="text-sm font-semibold tracking-wide text-white">
              Get Started
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-[30px] leading-[1.2] font-semibold tracking-tight text-white sm:text-[36px] lg:text-[44px]"
          >
            Ready to start your recovery journey?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatedButton
              href="/contact"
              text="Book Appointment"
              className="bg-accent !text-slate-950 hover:bg-accent-hover shadow-md transition-all hover:scale-[1.02] w-fit"
            />
          </motion.div>
        </div>
      </div>

      {/* Background Pattern/Graphic (Optional) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute right-[-10%] top-[-20%] h-[600px] w-[600px] rounded-full bg-white/5 blur-3xl"
      />
    </section>
  );
}
