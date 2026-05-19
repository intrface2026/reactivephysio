"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, UserCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="w-full bg-zinc-50 px-6 py-16 pb-24 md:px-10 md:pb-32">
      <div className="mx-auto w-full max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2 shadow-xs"
          >
            <span className="text-brand-start font-bold">//</span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-700 uppercase tracking-widest">
              Take the first step
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold tracking-tight text-zinc-900 leading-[1.2]"
          >
            Ready to start your journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-xs sm:text-sm md:text-base text-zinc-500 leading-relaxed max-w-2xl mx-auto"
          >
            Whether you are seeking expert home physical therapy as a patient or looking to grow your clinical practice as a provider, select your path below.
          </motion.p>
        </div>

        {/* Dual Conversion Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          
          {/* Patient Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-950 p-8 sm:p-10 flex flex-col justify-between gap-8 min-h-[300px] shadow-lg"
          >
            {/* Watermark Icon */}
            <div className="absolute right-8 top-8 opacity-[0.03] text-white transition-transform duration-500 group-hover:scale-105 pointer-events-none select-none">
              <Calendar className="h-32 w-32" />
            </div>
            {/* Glow */}
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-brand-start/15 blur-[60px] pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-start">
                For Clients &amp; Patients
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-3">
                Restore your health at home
              </h3>
              <p className="text-zinc-400 text-sm mt-3 leading-relaxed max-w-sm">
                Connect with verified physical therapists delivering personalized, evidence-based care directly to your door in Nagpur.
              </p>
            </div>
            
            <Link
              href="https://portal.reactivephysicaltherapy.com/register?role=patient"
              className="relative z-10 inline-flex items-center justify-center gap-2.5 self-start rounded-full bg-white px-8 py-4 text-sm font-bold !text-black transition-colors hover:bg-zinc-200 w-full sm:w-auto"
            >
              <Calendar className="h-4.5 w-4.5" />
              <span>Book an Appointment</span>
            </Link>
          </motion.div>

          {/* Provider Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-950 p-8 sm:p-10 flex flex-col justify-between gap-8 min-h-[300px] shadow-lg"
          >
            {/* Watermark Icon */}
            <div className="absolute right-8 top-8 opacity-[0.03] text-white transition-transform duration-500 group-hover:scale-105 pointer-events-none select-none">
              <UserCheck className="h-32 w-32" />
            </div>
            {/* Glow */}
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-accent/15 blur-[60px] pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[10px] font-bold tracking-widest uppercase text-accent">
                For Physiotherapists
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-3">
                Grow your caseload with freedom
              </h3>
              <p className="text-zinc-400 text-sm mt-3 leading-relaxed max-w-sm">
                Join our premium home care network in Nagpur. Earn top rates, choose your schedule, and access secure, hassle-free billing.
              </p>
            </div>
            
            <Link
              href="/careers"
              className="relative z-10 inline-flex items-center justify-center gap-2.5 self-start rounded-full border border-zinc-700 bg-transparent px-8 py-4 text-sm font-bold text-white transition-all hover:border-zinc-500 hover:bg-zinc-900 w-full sm:w-auto"
            >
              <UserCheck className="h-4.5 w-4.5" />
              <span>Join Nagpur's Elite PT Network</span>
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
