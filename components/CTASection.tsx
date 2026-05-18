"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedButton } from "./AnimatedButton";
import Image from "next/image";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="w-full bg-zinc-50 px-6 py-12 pb-24 md:px-10 md:pb-32 md:pt-16">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col items-center overflow-hidden rounded-[40px] bg-zinc-950 px-6 py-20 text-center md:px-16 md:py-32 lg:px-24"
        >
          {/* Premium Ambient Glow Effects */}
          <div className="pointer-events-none absolute left-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-brand-start/20 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-brand-end/20 blur-[120px]" />
          
          <div className="pointer-events-none absolute inset-0 bg-[url('https://framerusercontent.com/images/noise.png')] opacity-[0.03] mix-blend-overlay" />

          {/* Content */}
          <div className="relative z-10 flex max-w-3xl flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-5 py-2 backdrop-blur-md"
            >
              <span className="text-accent font-bold">//</span>
              <span className="text-sm font-semibold tracking-wide text-zinc-300 uppercase tracking-widest">
                Take the first step
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 text-[36px] leading-[1.1] font-bold tracking-tight text-white sm:text-[48px] lg:text-[56px]"
            >
              Ready to start your <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-brand-start to-brand-end bg-clip-text text-transparent">recovery journey?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-10 max-w-xl text-base text-zinc-400 md:text-lg"
            >
              Our expert team is here to guide you back to optimal health with personalized, evidence-based physiotherapy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <AnimatedButton
                href="/contact"
                text="Book Appointment"
                className="bg-white !text-zinc-950 hover:bg-zinc-200 transition-all hover:scale-[1.02] px-8 py-4 text-base font-bold w-full sm:w-auto"
              />
              <Link 
                href="/services" 
                className="group flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-transparent px-8 py-4 text-base font-bold text-white transition-all hover:border-zinc-500 hover:bg-zinc-800 w-full sm:w-auto"
              >
                Explore Services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
