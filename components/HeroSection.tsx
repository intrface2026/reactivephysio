"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedButton } from "./AnimatedButton";

const headingText = "Move better, feel stronger, live confidently.";
const words = headingText.split(" ");

/* ─── Card data ─────────────────────────────────────────────── */
const CARDS = [
  {
    id: "photo-1",
    type: "image",
    src: "https://framerusercontent.com/images/Vmy87hcbosCsXxs567jrjv34cMs.jpg",
    alt: "Physiotherapy session",
    priority: true,
  },
  {
    id: "stat-happy",
    type: "stat",
    value: "1.5M+",
    label: "Happy users",
    bg: "brand",
    shapeSrc:
      "https://framerusercontent.com/images/6o42JpDjdSTTNxEBTPLbs0pk7Y.svg",
  },
  {
    id: "stat-rating",
    type: "rating",
    rating: "4.9",
    label: "Ratings",
    avatarSrc:
      "https://framerusercontent.com/images/9zvf6vfWGWvmzKmjvV6Srhakz4.png",
  },
  {
    id: "photo-2",
    type: "image",
    src: "https://framerusercontent.com/images/zBCuZABYokbHBIWTQrFAnQDRNY.jpg",
    alt: "Therapists",
    priority: false,
  },
];

/* ─── Sub-card components ────────────────────────────────────── */
function PhotoCard({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority: boolean;
}) {
  return (
    <div className="group relative w-full h-full overflow-hidden rounded-[22px] ring-1 ring-white/10 shadow-inner">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 70vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        priority={priority}
      />
      {/* Subtle linear overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent rounded-[22px]" />
    </div>
  );
}

function HappyUsersCard({
  value,
  label,
  shapeSrc,
}: {
  value: string;
  label: string;
  shapeSrc: string;
}) {
  return (
    <div className="group relative flex h-full flex-col items-start justify-center overflow-hidden rounded-[22px] bg-linear-to-br from-brand-start to-brand-end p-5 sm:p-9 text-white shadow-xl ring-1 ring-white/20">
      {/* Background decorative shape */}
      <div className="absolute right-[-10px] top-1/2 h-36 w-36 -translate-y-1/2 opacity-25 transition-transform duration-1000 group-hover:rotate-12 group-hover:scale-110 sm:h-40 sm:w-40">
        <Image src={shapeSrc} alt="Shape" fill className="object-contain" />
      </div>
      {/* Shimmer sweep */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/10 transition-transform duration-1000 ease-in-out group-hover:translate-x-[200%]" />
      <h3 className="relative z-10 mb-1 text-[32px] font-bold leading-none tracking-tight sm:mb-2 sm:text-[44px] lg:text-[52px]">
        {value}
      </h3>
      <p className="relative z-10 text-[10px] font-semibold uppercase tracking-wider text-white/90 sm:text-base">
        {label}
      </p>
    </div>
  );
}

function RatingsCard({
  rating,
  label,
  avatarSrc,
}: {
  rating: string;
  label: string;
  avatarSrc: string;
}) {
  return (
    <div className="group flex h-full flex-col justify-center rounded-[22px] bg-surface p-5 sm:p-6 shadow-2xl ring-1 ring-white/15 text-white">
      <div className="mb-4 flex items-center gap-2 sm:mb-5 sm:gap-4">
        <h2 className="text-[28px] font-bold leading-none sm:text-[36px]">
          {rating}
        </h2>
        <div className="flex flex-col gap-1 sm:gap-1.5">
          <div className="flex flex-wrap gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                viewBox="0 0 24 24"
                fill="var(--color-accent)"
                className="h-3 w-3 transition-transform duration-300 group-hover:scale-110 sm:h-4.5 sm:w-4.5"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-white/50 sm:text-sm sm:tracking-widest">
            {label}
          </span>
        </div>
      </div>
      <div className="relative h-8 w-[140px] grayscale transition-all duration-500 group-hover:grayscale-0 sm:h-10 sm:w-[180px]">
        <Image
          src={avatarSrc}
          alt="Happy Users"
          fill
          sizes="(max-width: 640px) 140px, 180px"
          className="object-contain object-left"
        />
      </div>
    </div>
  );
}

/* ─── Mobile Bento Grid ────────────────────────────────────────── */
function MobileBentoGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 w-full auto-rows-fr">
      {/* Card 1: Patient Image (Tall) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative col-span-1 row-span-2 overflow-hidden rounded-[22px] shadow-2xl ring-1 ring-black/5"
      >
        <PhotoCard
          src="https://framerusercontent.com/images/Vmy87hcbosCsXxs567jrjv34cMs.jpg"
          alt="Physiotherapy session"
          priority={true}
        />
      </motion.div>

      {/* Card 2: Happy Users Stat */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="relative col-span-1 row-span-1"
      >
        <HappyUsersCard
          value="1.5M+"
          label="Happy users"
          shapeSrc="https://framerusercontent.com/images/6o42JpDjdSTTNxEBTPLbs0pk7Y.svg"
        />
      </motion.div>

      {/* Card 3: Ratings Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="relative col-span-1 row-span-1"
      >
        <RatingsCard
          rating="4.9"
          label="Ratings"
          avatarSrc="https://framerusercontent.com/images/9zvf6vfWGWvmzKmjvV6Srhakz4.png"
        />
      </motion.div>

      {/* Card 4: Bottom Balance */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className="relative col-span-2 overflow-hidden rounded-[22px] shadow-xl aspect-video"
      >
        <PhotoCard
          src="https://framerusercontent.com/images/zBCuZABYokbHBIWTQrFAnQDRNY.jpg"
          alt="Therapists"
          priority={false}
        />
      </motion.div>
    </div>
  );
}

/* ─── Desktop Masonry Grid ───────────────────────────────────── */
function DesktopMasonryGrid() {
  return (
    <div className="flex w-full gap-5 items-start">
      {/* Left Column */}
      <div className="flex flex-col gap-5 w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative w-full aspect-3/4 overflow-hidden rounded-[22px] shadow-2xl ring-1 ring-black/5"
        >
          <PhotoCard
            src="https://framerusercontent.com/images/Vmy87hcbosCsXxs567jrjv34cMs.jpg"
            alt="Physiotherapy session"
            priority={true}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <RatingsCard
            rating="4.9"
            label="Ratings"
            avatarSrc="https://framerusercontent.com/images/9zvf6vfWGWvmzKmjvV6Srhakz4.png"
          />
        </motion.div>
      </div>

      {/* Right Column — offset down for masonry feel */}
      <div className="flex flex-col gap-5 w-1/2 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="w-full"
        >
          <HappyUsersCard
            value="1.5M+"
            label="Happy users"
            shapeSrc="https://framerusercontent.com/images/6o42JpDjdSTTNxEBTPLbs0pk7Y.svg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="relative w-full overflow-hidden rounded-[22px] shadow-2xl ring-1 ring-black/5 aspect-4/5"
        >
          <PhotoCard
            src="https://framerusercontent.com/images/zBCuZABYokbHBIWTQrFAnQDRNY.jpg"
            alt="Therapists"
            priority={false}
          />
        </motion.div>
      </div>
    </div>
  );
}


/* ─── Main export ────────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slant-lines pt-[140px] pb-16 sm:pt-[160px] sm:pb-20 md:pt-[180px] md:pb-32">
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-8 px-6 text-center md:gap-10 md:px-10">
        {/* Top Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2 shadow-sm"
        >
          <span className="text-accent font-bold">{"//"}</span>
          <span className="text-sm font-semibold tracking-wide text-surface">
            Serve Quality Physiotherapy
          </span>
        </motion.div>

        {/* Heading */}
        <h1 className="text-[32px] sm:text-[46px] md:text-[54px] lg:text-[62px] leading-[1.1] font-medium tracking-tight text-surface">
          {words.map((word, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: idx * 0.08,
              }}
              className="inline-block"
            >
              {word === "stronger," ? (
                <span className="text-brand font-semibold">{word}</span>
              ) : (
                word
              )}
              {idx !== words.length - 1 && "\u00A0"}
            </motion.span>
          ))}
        </h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="max-w-2xl text-sm sm:text-base md:text-lg text-black/60 leading-relaxed"
        >
          Quality physiotherapy can happen right at home. Reactive is a premium home-based physiotherapy and movement studio in Nagpur delivering expert, science-driven care straight to your doorstep.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          <AnimatedButton
            href="/contact"
            text="// Book a Session"
            className="bg-linear-to-r from-brand-start to-brand-end text-white px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-sm sm:text-base font-semibold shadow-md transition-all hover:shadow-[0_8px_24px_rgba(25,79,162,0.2)] hover:scale-[1.02]"
            iconSrc=""
          />
        </motion.div>
      </div>

      {/* Hero Images Below Text */}
      <div className="relative z-10 mx-auto mt-16 max-w-7xl px-6 md:px-10 lg:mt-24">
        <div className="md:hidden">
          <MobileBentoGrid />
        </div>
        <div className="hidden md:block">
          <DesktopMasonryGrid />
        </div>
      </div>
    </section>
  );
}
