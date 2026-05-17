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

        {/* Services Grid */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="group relative h-[450px] w-full overflow-hidden rounded-[20px] md:h-[550px] lg:h-[600px]"
            >
              <Link href={service.link} className="block h-full w-full">
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6 text-white md:p-8 z-10">
                  <h6 className="mb-2 text-[20px] sm:text-[22px] leading-snug font-bold">
                    {service.title}
                  </h6>
                  <p className="text-xs sm:text-sm font-medium text-white/80">
                    {service.description}
                  </p>
                  
                  {/* Modern interactive slide-up badge */}
                  <div className="mt-5 flex items-center gap-2 text-xs sm:text-sm font-semibold text-accent opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <span>Explore Service</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
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
