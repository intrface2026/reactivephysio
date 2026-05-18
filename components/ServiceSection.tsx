"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedButton } from "./AnimatedButton";

const services = [
  {
    title: "Science-based Physiotherapy & Pain Relief",
    description: "Evidence-backed care to target pain, reduce inflammation, and restore natural movement patterns.",
    image: "https://framerusercontent.com/images/3ReT5xeX5z4tvOwGXq4uK0APU4.jpg",
    link: "/service/physiotherapy-pain-relief",
  },
  {
    title: "Personalised Rehab & Post-Rehabilitation",
    description: "Customized rehabilitation programs designed to rebuild strength and safety after injury or surgery.",
    image: "https://framerusercontent.com/images/x9BbpMW2l1ETXjm885q6jCtWRYc.jpg",
    link: "/service/personalised-rehab-post-rehabilitation",
  },
  {
    title: "Strength & Fitness Training",
    description: "Science-driven athletic conditioning to elevate physical capacity, endurance, and overall performance.",
    image: "https://framerusercontent.com/images/fd7H4g2SyDOLmrGUUi05FNqLbw.jpg",
    link: "/service/strength-fitness-training",
  },
  {
    title: "Posture Correction",
    description: "Targeted posture training and corrective exercises to relieve strain and restore alignment.",
    image: "https://framerusercontent.com/images/WYxFJy7m3eXg59BXG2MbDNE4M.jpg",
    link: "/service/posture-correction",
  },
  {
    title: "Sports Rehab",
    description: "Elite physical rehabilitation tailored to get athletes back in action safely and rapidly.",
    image: "https://framerusercontent.com/images/4NjxubX1dvlVTQPtjdeJOn62UU.jpg",
    link: "/service/sports-rehabilitation",
  },
  {
    title: "ANC – PNC Care",
    description: "Specialized, compassionate therapy supporting mothers before and after childbirth with pelvic health.",
    image: "https://framerusercontent.com/images/EuE334zfvtYBi9vwSBstq2xqJY.jpg",
    link: "/service/anc-pnc-care",
  },
];

export function ServiceSection() {
  return (
    <section className="w-full bg-white px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-16 text-center md:items-start md:text-left">
        {/* Header */}
        <div className="flex w-full flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="flex flex-col items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2"
            >
              <span className="text-accent font-bold">{"//"}</span>
              <span className="text-sm font-semibold tracking-wide text-surface">
                Our Expertise
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl text-[30px] leading-[1.2] font-semibold tracking-tight text-surface sm:text-[36px] lg:text-[44px]"
            >
              Personalised treatment <br className="hidden md:block" />
              plans tailored for each patient
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:block"
          >
            <AnimatedButton
              href="/service"
              text="All Services"
              className="bg-linear-to-r from-brand-start to-brand-end hover:brightness-110 text-white font-semibold shadow-md transition-all hover:shadow-[0_8px_24px_rgba(25,79,162,0.2)] hover:scale-[1.02]"
            />
          </motion.div>
        </div>

        {/* Services Card Stack */}
        <div className="relative flex flex-col gap-8 w-full max-w-5xl mx-auto mt-12 pb-24">
          {services.map((service, index) => {
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="group relative h-[450px] w-full overflow-hidden rounded-[32px] md:h-[500px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] sticky border border-black/5 origin-top"
                style={{
                  top: `calc(120px + ${index * 30}px)`,
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.4, ease: "easeOut" } }}
              >
                <Link href={service.link} className="block h-full w-full">
                  {/* Background Image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05]"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-black/10 opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-8 md:p-12 text-white z-10">
                    <h6 className="mb-3 text-[24px] sm:text-[32px] md:text-[40px] leading-tight font-bold tracking-tight">
                      {service.title}
                    </h6>
                    <p className="text-sm sm:text-base font-medium text-white/80 max-w-2xl leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Modern interactive slide-up badge */}
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand-start opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      <span>Explore Service</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-4 md:hidden"
        >
          <AnimatedButton
            href="/service"
            text="All Services"
            className="bg-linear-to-r from-brand-start to-brand-end hover:brightness-110 text-white font-semibold shadow-md transition-all hover:shadow-[0_8px_24px_rgba(25,79,162,0.2)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
