"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const cases = [
  {
    id: 1,
    image:
      "https://framerusercontent.com/images/fd7H4g2SyDOLmrGUUi05FNqLbw.jpg",
  },
  {
    id: 2,
    image:
      "https://framerusercontent.com/images/3ReT5xeX5z4tvOwGXq4uK0APU4.jpg",
  },
  {
    id: 3,
    image: "https://framerusercontent.com/images/WYxFJy7m3eXg59BXG2MbDNE4M.jpg",
  },
];

export function CaseStudySection() {
  return (
    <section className="w-full bg-white px-6 py-24 md:px-10 md:py-32 overflow-hidden">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
        {/* Left Content */}
        <div className="flex w-full flex-col lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 self-start rounded-full border border-black/10 px-5 py-2"
          >
            <span className="text-brand font-bold">//</span>
            <span className="text-sm font-semibold tracking-wide text-surface">
              Case Study
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[40px] leading-[1.1] font-bold tracking-tight text-surface sm:text-[48px]"
          >
            Trusted by athletes, professionals, & families
          </motion.h2>

          {/* Author snippet (Lorenzo S. Whitman) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 hidden items-center gap-4 lg:flex"
          >
            <div className="relative h-16 w-16 overflow-hidden rounded-md">
              <Image
                src="https://framerusercontent.com/images/BnLllAEXMitvWmh3OnOxe4QLA6Q.png"
                alt="Lorenzo S. Whitman"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h6 className="font-semibold text-surface">Lorenzo S. Whitman</h6>
              <p className="text-surface/60 text-sm">
                /CEO of <span className="text-brand font-medium">Adobe</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Content: Case Cards */}
        <div className="flex w-full gap-6 overflow-x-auto pb-8 lg:w-2/3 lg:overflow-visible lg:pb-0 hide-scrollbar">
          {cases.map((caseItem, idx) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: 0.2 + idx * 0.1,
                ease: "easeOut",
              }}
              className="group relative min-w-[280px] flex-1 shrink-0 overflow-hidden rounded-[20px] bg-gray-100 sm:min-w-[320px] lg:min-w-0"
              style={{ aspectRatio: idx === 1 ? "4/5" : "5/4" }} // Staggered aspect ratios based on design
            >
              <Image
                src={caseItem.image}
                alt={`Case Study ${caseItem.id}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/50 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src="https://framerusercontent.com/images/BuhskHFr4QxdIXXL54tvz0AGKs.svg"
                    alt="Play"
                    width={32}
                    height={32}
                    className="ml-1"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
