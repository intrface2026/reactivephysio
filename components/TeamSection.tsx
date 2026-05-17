"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function TeamSection() {
  return (
    <section className="w-full bg-[#f8f8f8] px-6 py-24 md:px-10 md:py-32 overflow-hidden relative">
      {/* Decorative radial background orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, var(--color-brand) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1.5fr] lg:gap-20 items-center">
          
          {/* Left Column: Image with premium floating framing */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Elegant double-border frame background */}
            <div className="absolute -bottom-4 -left-4 -right-4 -top-4 rounded-[24px] border border-black/[0.04] bg-black/[0.01] pointer-events-none" />
            <div className="absolute -bottom-2 -left-2 -right-2 -top-2 rounded-[22px] border border-black/[0.06] bg-black/[0.01] pointer-events-none" />
            
            <div className="relative overflow-hidden rounded-[20px] bg-white p-3 shadow-[0_20px_50px_rgba(0,0,0,0.06)] w-full max-w-[440px] aspect-[4/5]">
              <div className="relative w-full h-full overflow-hidden rounded-[14px] bg-[#fdfaf9]">
                <Image
                  src="https://framerusercontent.com/images/cphnFeLljI5C2dQ9FCpjg8HU.png"
                  alt="Dr. Falguni Ambare"
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Founder details and story */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 self-start rounded-full border border-black/10 bg-white px-5 py-2 shadow-sm"
              >
                <span className="text-accent font-bold">//</span>
                <span className="text-xs font-bold tracking-widest uppercase text-surface">
                  Meet The Founder
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[28px] leading-[1.2] font-semibold tracking-tight text-surface sm:text-[34px] lg:text-[40px]"
              >
                Dr. Falguni Ambare
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-linear-to-r from-brand-start to-brand-end bg-clip-text text-transparent font-semibold text-base sm:text-lg tracking-tight -mt-2"
              >
                Physiotherapist and Founder of Reactive
              </motion.p>
            </div>

            {/* Biography text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4 text-surface/70 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl font-medium"
            >
              <p>
                Reactive was created with a vision to deliver expert, science-driven care with a personalised touch. My practice focuses on restoring functional movement, enhancing strength, and providing long-term solutions for pain and recovery.
              </p>
              <p>
                Every treatment plan is thoughtfully designed to meet the unique needs of each individual. I am committed to offering a refined, results-oriented physiotherapy experience that supports you in moving, healing, and living better.
              </p>
            </motion.div>

            {/* Philosophy quote board */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative pl-6 py-2 border-l-2 border-accent italic text-surface/80 text-sm sm:text-base md:text-lg max-w-xl font-medium bg-black/[0.01] pr-4 rounded-r-lg"
            >
              "Your movement is your freedom. Healing is not just about relieving pain—it is about reclaiming your active life."
            </motion.div>

            {/* Socials & Contact Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 pt-4 border-t border-black/[0.06] max-w-2xl"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-surface px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-linear-to-r hover:from-brand-start hover:to-brand-end hover:shadow-[0_8px_24px_rgba(25,79,162,0.25)] hover:scale-[1.02]"
              >
                <span className="text-accent group-hover:text-white transition-colors">//</span>
                <span>Get in Touch</span>
                <span className="text-accent group-hover:text-white transition-colors">//</span>
              </Link>

              {/* Social icons */}
              <div className="flex items-center gap-2">
                {[
                  {
                    name: "LinkedIn",
                    href: "#",
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    )
                  },
                  {
                    name: "Instagram",
                    href: "#",
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                      </svg>
                    )
                  }
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm border border-black/[0.05] text-surface/60 transition-all hover:text-brand-start hover:border-brand-start/40 hover:shadow-md"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
