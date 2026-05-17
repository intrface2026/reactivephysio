"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  "Personalized treatment plans tailored for each patient",
  "Modern equipment and advanced techniques",
  "Comfortable clinic environment with private rooms",
  "Trusted by athletes, professionals, and families",
];

const stats = [
  { value: "50k+", label: "Healing stories we've been part of" },
  { value: "15+", label: "Years of trusted physiotherapy care" },
  { value: "98%", label: "Customer satisfaction rate achieved" },
  { value: "2M+", label: "Improvement in client recovery outcomes" },
];

export function ChooseUsSection() {
  return (
    <section className="w-full bg-surface px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
        {/* Left Content: Title & Features */}
        <div className="flex w-full flex-col lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/5 px-5 py-2"
          >
            <span className="text-accent font-bold">//</span>
            <span className="text-sm font-semibold tracking-wide text-white">
              Why Choose Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 text-[30px] leading-[1.2] font-semibold tracking-tight text-white sm:text-[36px] lg:text-[44px]"
          >
            Highly experienced, certified <br className="hidden md:block" />
            physiotherapists
          </motion.h2>

          <div className="flex flex-col gap-6 md:flex-row md:items-stretch lg:flex-col xl:flex-row">
            {/* Features List */}
            <div className="flex flex-1 flex-col gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-accent mt-1 font-bold leading-none">
                    //
                  </span>
                  <p className="text-sm sm:text-base text-white/90">{feature}</p>
                </motion.div>
              ))}
            </div>

            {/* Video Inline Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative min-h-[240px] w-full flex-1 overflow-hidden rounded-[24px] md:min-h-full xl:min-h-[240px]"
            >
              <video
                src="https://framerusercontent.com/assets/2rzzRdxmSPfkHwfLgGAVLglyqnY.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Content: Counters Grid */}
        <div className="grid w-full grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:w-5/12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
              className="flex flex-col border-t border-white/10 pt-6"
            >
              <div className="mb-2 flex items-baseline gap-1 font-bold text-white">
                <span className="text-[44px] leading-none tracking-tight md:text-[52px]">
                  {stat.value.replace(/[^0-9.]/g, "")}
                </span>
                <span className="bg-linear-to-r from-brand-start to-brand-end bg-clip-text text-transparent text-[32px] leading-none md:text-[40px]">
                  {stat.value.replace(/[0-9.]/g, "")}
                </span>
              </div>
              <p className="text-sm sm:text-base text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
