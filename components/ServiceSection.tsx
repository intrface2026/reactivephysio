"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedButton } from "./AnimatedButton";

const services = [
  {
    title: "Gait training",
    description: "Customized recovery plans to restore athletic performance.",
    image:
      "https://framerusercontent.com/images/x9BbpMW2l1ETXjm885q6jCtWRYc.jpg",
    link: "/service/gait-training",
  },
  {
    title: "Sports rehabilitation",
    description:
      "Personalized rehabilitation programs designed by peak athletic performance.",
    image:
      "https://framerusercontent.com/images/4NjxubX1dvlVTQPtjdeJOn62UU.jpg",
    link: "/service/sports-rehabilitation",
  },
  {
    title: "Women's therapy",
    description:
      "Tailored recovery strategies to help athletes return stronger and faster.",
    image:
      "https://framerusercontent.com/images/EuE334zfvtYBi9vwSBstq2xqJY.jpg",
    link: "/service/womens-therapy",
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
              <span className="text-brand font-bold">//</span>
              <span className="text-sm font-semibold tracking-wide text-surface">
                Our Expertise
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl text-[40px] leading-[1.1] font-bold tracking-tight text-surface sm:text-[48px] lg:text-[56px]"
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
              className="bg-brand text-white"
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
                <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-8 text-white md:p-10">
                  <h6 className="mb-3 text-[28px] leading-tight font-bold md:text-[32px]">
                    {service.title}
                  </h6>
                  <p className="text-base font-medium text-white/90 md:text-lg">
                    {service.description}
                  </p>
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
            className="bg-brand text-white"
          />
        </motion.div>
      </div>
    </section>
  );
}
