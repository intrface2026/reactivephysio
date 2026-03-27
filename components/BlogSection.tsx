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
      {/* Ticker Section */}
      <div className="w-full overflow-hidden bg-white py-6">
        <div className="relative flex gap-8">
          <motion.div
            className="flex shrink-0 items-center gap-8"
            animate={{ x: [0, -1500] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...tickerItems, ...tickerItems].map((item, idx) => (
              <div
                key={idx}
                className="flex shrink-0 items-center gap-4 rounded-full border border-black/10 px-6 py-3"
              >
                <div className="relative h-8 w-8 overflow-hidden rounded-full">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <h5 className="whitespace-nowrap text-base font-bold text-surface">
                  {item.label}
                </h5>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Blog Section */}
      <section className="w-full bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto w-full max-w-7xl">
          {/* Header */}
          <div className="mb-16 flex flex-col items-center gap-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2"
            >
              <span className="text-brand font-bold">//</span>
              <span className="text-sm font-semibold tracking-wide text-surface">
                Insights
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[40px] leading-[1.1] font-bold tracking-tight text-surface sm:text-[48px]"
            >
              Company blog &amp; insights
            </motion.h2>
          </div>

          {/* Blog Cards */}
          <div className="flex flex-col divide-y divide-black/10 rounded-2xl border border-black/10">
            {blogPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col items-start gap-6 px-6 py-8 transition-colors hover:bg-gray-50 md:flex-row md:items-center md:px-10 md:py-10"
                >
                  {/* Left: Meta */}
                  <div className="flex shrink-0 flex-col gap-4 md:w-48">
                    <span className="inline-flex w-fit items-center rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-white">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-surface/60 text-sm">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.author}</span>
                    </div>
                  </div>

                  {/* Center: Content */}
                  <div className="flex flex-1 flex-col gap-3">
                    <h5 className="text-xl font-bold leading-snug text-surface transition-colors group-hover:text-brand md:text-2xl">
                      {post.title}
                    </h5>
                    <p className="text-surface/60 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-2 flex items-center gap-1.5 text-surface font-semibold text-sm">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        <path
                          d="M3 8H13M13 8L9 4M13 8L9 12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Read More</span>
                    </div>
                  </div>

                  {/* Right: Image */}
                  <div className="relative h-[160px] w-full overflow-hidden rounded-[10px] md:h-[120px] md:w-[180px] lg:w-[300px]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(min-width: 1024px) 300px, (min-width: 768px) 180px, 100vw"
                    />
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
