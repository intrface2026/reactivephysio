"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const tickerItems = [
  {
    id: 1,
    label: "Manual Therapy & Massage",
    icon: "https://framerusercontent.com/images/vZujpjKusA8BjNFvjzZm1CSfAFc.svg",
  },
  {
    id: 2,
    label: "Paediatric Physiotherapy",
    icon: "https://framerusercontent.com/images/av2Xawbk3OEOrxncl9xdAP5jU.svg",
  },
  {
    id: 3,
    label: "Neurological Rehabilitation",
    icon: "https://framerusercontent.com/images/vZujpjKusA8BjNFvjzZm1CSfAFc.svg",
  },
  {
    id: 4,
    label: "Spinal & Back Care",
    icon: "https://framerusercontent.com/images/2KWZMdZMkydAkZkxfZHKCt0x4E.svg",
  },
  {
    id: 5,
    label: "Manual Therapy & Massage",
    icon: "https://framerusercontent.com/images/vZujpjKusA8BjNFvjzZm1CSfAFc.svg",
  },
  {
    id: 6,
    label: "Paediatric Physiotherapy",
    icon: "https://framerusercontent.com/images/av2Xawbk3OEOrxncl9xdAP5jU.svg",
  },
  {
    id: 7,
    label: "Neurological Rehabilitation",
    icon: "https://framerusercontent.com/images/vZujpjKusA8BjNFvjzZm1CSfAFc.svg",
  },
  {
    id: 8,
    label: "Spinal & Back Care",
    icon: "https://framerusercontent.com/images/2KWZMdZMkydAkZkxfZHKCt0x4E.svg",
  },
];

const blogPosts = [
  {
    id: 1,
    title: "What you should know about refractive lens exchange with others.",
    excerpt:
      "We are a team of licensed physiotherapists dedicated to helping patients restore movement, reduce pain, and prevent long-term injuries.",
    category: "Aesthetics",
    date: "Dec 18, 2025",
    author: "Ricardo P.",
    image:
      "https://framerusercontent.com/images/kVZVWId1Q7OCZUYcQQL9WaZygmE.jpg",
    slug: "what-you-should-know-about-refractive-lens-exchange-with-others",
  },
  {
    id: 2,
    title: "What everyone should understand about knee therapy sessions.",
    excerpt:
      "Our team of certified physiotherapists is committed to improving mobility, relieving pain, and supporting long-term recovery for every patient.",
    category: "Wellness",
    date: "Dec 18, 2025",
    author: "Javier C.",
    image: "https://framerusercontent.com/images/QMMFsXTskIclW8xuuUxfuYPnQ.jpg",
    slug: "refractive-lens-exchange-vs-lasik-which-one-is-right-for-you",
  },
  {
    id: 3,
    title: "How modern physiotherapy is changing patient recovery timelines.",
    excerpt:
      "Physiotherapy has evolved dramatically in recent years. Modern techniques and evidence-based approaches are transforming how quickly patients recover.",
    category: "Recovery",
    date: "Dec 18, 2025",
    author: "Leonardo F.",
    image:
      "https://framerusercontent.com/images/kVZVWId1Q7OCZUYcQQL9WaZygmE.jpg",
    slug: "how-modern-physiotherapy-is-changing-recovery",
  },
];

export function BlogSection() {
  return (
    <>
      {/* Premium Ticker Section */}
      <div className="w-full overflow-hidden bg-zinc-50 py-8 border-y border-zinc-200/50">
        <div className="relative flex gap-8">
          <motion.div
            className="flex shrink-0 items-center gap-12"
            animate={{ x: [0, -1500] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...tickerItems, ...tickerItems].map((item, idx) => (
              <div
                key={idx}
                className="group flex shrink-0 items-center gap-4 rounded-full bg-white px-6 py-3 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all hover:scale-105"
              >
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-zinc-100 bg-zinc-50 p-2">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    fill
                    className="object-cover p-1.5 transition-transform group-hover:rotate-12"
                  />
                </div>
                <h5 className="whitespace-nowrap text-[15px] font-semibold text-zinc-800">
                  {item.label}
                </h5>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Premium Insights Section */}
      <section className="w-full bg-zinc-50 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto w-full max-w-7xl">
          {/* Header */}
          <div className="mb-16 flex flex-col items-center gap-5 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2 shadow-sm"
            >
              <span className="text-accent font-bold">//</span>
              <span className="text-sm font-semibold tracking-wide text-zinc-800 uppercase tracking-widest">
                Our Journal
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-2xl text-[36px] leading-[1.1] font-bold tracking-tight text-zinc-950 sm:text-[44px] lg:text-[52px]"
            >
              Insights for a pain-free life
            </motion.h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2">
            {/* Featured Post (Spans 2 columns & 2 rows) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="md:col-span-2 md:row-span-2"
            >
              <Link
                href={`/blog/${blogPosts[0].slug}`}
                className="group relative flex h-full min-h-[450px] w-full flex-col justify-end overflow-hidden rounded-[32px] bg-zinc-900 shadow-2xl transition-all hover:-translate-y-1 hover:shadow-3xl"
              >
                {/* Image Background */}
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover opacity-80 transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(min-width: 768px) 66vw, 100vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col gap-4 p-8 md:p-12">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-accent/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-zinc-950 backdrop-blur-sm">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-sm font-medium text-zinc-300">
                      {blogPosts[0].date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight text-white md:text-4xl lg:text-5xl lg:leading-[1.1]">
                    {blogPosts[0].title}
                  </h3>
                  <p className="mt-2 max-w-xl text-base text-zinc-300/90 md:text-lg">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-accent">
                    Read Article 
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Smaller Posts */}
            {blogPosts.slice(1).map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                className="md:col-span-1 md:row-span-1"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[32px] bg-white ring-1 ring-zinc-200/50 shadow-xl shadow-zinc-200/20 transition-all hover:-translate-y-1 hover:shadow-2xl hover:ring-zinc-300"
                >
                  <div className="relative h-48 w-full overflow-hidden sm:h-56">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                    <div className="absolute left-4 top-4">
                       <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-zinc-900 backdrop-blur-md shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
                        <span>{post.date}</span>
                        <span className="h-1 w-1 rounded-full bg-zinc-300" />
                        <span>{post.author}</span>
                      </div>
                      <h4 className="text-xl font-bold leading-snug text-zinc-900 transition-colors group-hover:text-brand-start">
                        {post.title}
                      </h4>
                    </div>
                    <div className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 transition-colors group-hover:bg-accent group-hover:text-black">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
