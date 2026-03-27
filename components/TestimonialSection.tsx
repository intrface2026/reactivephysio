"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Tyler Walker",
    date: "29 Jan, 2025",
    text: `"I had an amazing experience from start to finish. The team listened carefully to my needs, offered clear guidance, and delivered results that exceeded my expectations."`,
  },
  {
    id: 2,
    name: "Sean Kendy",
    date: "29 Jan, 2025",
    text: `"Working with this team was a pleasure from beginning to end. They understood my goals, provided expert advice, and delivered results that truly impressed me."`,
  },
  {
    id: 3,
    name: "Paul Howard",
    date: "29 Jan, 2025",
    text: `"The entire experience was seamless and professional. Their attention to detail, clear communication, and dedication ensured outcomes far beyond what I expected."`,
  },
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="#C56E5E"
          />
        </svg>
      ))}
    </div>
  );
}

function QuoteIcon() {
  return (
    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F2F2]">
      <svg
        width="24"
        height="24"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5 45C13.701 45 9 40.299 9 34.5V30H19.5V15H4.5V34.5C4.5 42.7843 11.2157 49.5 19.5 49.5V45ZM49.5 45C43.701 45 39 40.299 39 34.5V30H49.5V15H34.5V34.5C34.5 42.7843 41.2157 49.5 49.5 49.5V45Z"
          fill="#232323"
        />
      </svg>
    </div>
  );
}

function TestimonialCard({
  testimonial,
  delay,
}: {
  testimonial: (typeof testimonials)[0];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col rounded-[24px] border border-black/16 p-8"
    >
      <QuoteIcon />
      <div className="mb-4 flex flex-col border-b border-black/16 pb-4">
        <p className="text-base font-semibold text-surface">
          {testimonial.name}
        </p>
        <div className="my-2 h-px w-full bg-black/16" />
        <p className="text-sm font-medium text-[#555555]">{testimonial.date}</p>
      </div>
      <p className="mb-6 flex-1 text-[18px] leading-relaxed text-surface">
        {testimonial.text}
      </p>
      <StarRating />
    </motion.div>
  );
}

export function TestimonialSection() {
  return (
    <section className="w-full bg-white px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-7xl">
        {/* Two-column layout: LEFT = intro + stat card | RIGHT = 3 testimonials */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-10">
          {/* ── Left Column ── */}
          <div className="flex w-full flex-col gap-8 lg:w-[360px] lg:shrink-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 px-5 py-2"
            >
              <span className="text-brand font-bold">//</span>
              <span className="text-sm font-semibold tracking-wide text-surface">
                Testimonials
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[40px] font-bold leading-[1.1] tracking-tight text-surface"
            >
              Happy users says
              <br />
              about
              <br />
              our company
            </motion.h2>

            {/* Stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center justify-center rounded-[24px] border border-black/10 px-8 py-10 text-center"
            >
              <div className="relative mx-auto mb-6 h-12 w-32">
                <Image
                  src="https://framerusercontent.com/images/ARAnvOCepfXCTzIv22gIbhpXA.png"
                  alt="Happy Customers avatars"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[32px] font-bold leading-none text-surface">
                3,500<span className="text-brand">+</span>
              </h3>
              <p className="mt-1 font-medium text-surface/60">Happy customer</p>
            </motion.div>
          </div>

          {/* ── Right Column: Testimonial cards ── */}
          <div className="flex flex-1 flex-col gap-6">
            {/* Top row: 2 cards side by side */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <TestimonialCard testimonial={testimonials[0]} delay={0} />
              <TestimonialCard testimonial={testimonials[1]} delay={0.15} />
            </div>
            {/* Bottom: 1 wide card */}
            <TestimonialCard testimonial={testimonials[2]} delay={0.3} />
          </div>
        </div>
      </div>
    </section>
  );
}
