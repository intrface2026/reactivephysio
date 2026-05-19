"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedButton } from "./AnimatedButton";

import { Activity } from "lucide-react";

const services = [
  {
    title: "Physiotherapy - Musculoskeletal",
    description: "Expert care for muscle and joint pain, focusing on mobility and strength recovery.",
    image: "/images/muskulo_physio.png",
    link: "/service/physiotherapy-muskulo",
    pricing: [
      { label: "Daily", price: "₹800" },
      { label: "7 Sessions", price: "₹5,600" },
      { label: "15 Sessions", price: "₹12,000" },
      { label: "24 Sessions", price: "₹19,000" },
    ]
  },
  {
    title: "Physiotherapy - Neuro",
    description: "Specialized neurological rehabilitation to restore movement, balance, and function.",
    image: "/images/neuro_physio.png",
    link: "/service/physiotherapy-neuro",
    pricing: [
      { label: "Daily", price: "₹1,000" },
      { label: "7 Sessions", price: "₹7,000" },
      { label: "15 Sessions", price: "₹15,000" },
      { label: "24 Sessions", price: "₹20,000" },
    ]
  },
  {
    title: "ANC / PNC Care",
    description: "Compassionate antenatal and postnatal care supporting maternal health and recovery.",
    image: "/images/anc_pnc_physio.png",
    link: "/service/anc-pnc-care",
    pricing: [
      { label: "Daily", price: "₹700" },
      { label: "7 Sessions", price: "₹5,200" },
      { label: "24 Sessions", price: "₹18,000" },
    ]
  },
  {
    title: "Functional Training",
    description: "Science-driven athletic conditioning to elevate physical capacity and overall performance.",
    image: "/images/functional_training.png",
    link: "/service/functional-training",
    pricing: [
      { label: "Daily", price: "₹800" },
    ]
  },
  {
    title: "Geriatric Care",
    description: "Tailored physical therapy for seniors to improve mobility, balance, and quality of life.",
    image: "/images/geriatric_physio.png",
    link: "/service/geriatric-care",
    pricing: [
      { label: "Daily", price: "₹700" },
      { label: "7 Sessions", price: "₹5,200" },
      { label: "24 Sessions", price: "₹18,000" },
    ]
  }
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
                Our Services
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl text-[30px] leading-[1.2] font-semibold tracking-tight text-surface sm:text-[36px] lg:text-[44px]"
            >
              Explore our services <br className="hidden md:block" />
              with transparent pricing
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
              href="/services"
              text="All Services"
              className="bg-linear-to-r from-brand-start to-brand-end hover:brightness-110 text-white font-semibold shadow-md transition-all hover:shadow-[0_8px_24px_rgba(25,79,162,0.2)]"
              icon={<Activity className="h-4 w-4" />}
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
                  <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-black/10 opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                  {/* Content */}
                  <div 
                    className="absolute inset-x-0 bottom-0 flex flex-col justify-end px-8 pt-8 sm:px-10 md:px-12 md:pt-12 text-white z-10"
                    style={{
                      paddingBottom: `calc(2.5rem + ${index * 30}px)`
                    }}
                  >
                    <h6 className="mb-3 text-[24px] sm:text-[32px] md:text-[36px] leading-tight font-bold tracking-tight">
                      {service.title}
                    </h6>
                    <p className="text-sm sm:text-base font-medium text-white/80 max-w-2xl leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    {service.pricing && (
                      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
                        {service.pricing.map((priceItem, i) => (
                          <div key={i} className="flex flex-col border-l-[3px] border-brand-start pl-4 py-1 backdrop-blur-sm bg-black/10 rounded-r-md">
                            <span className="text-[11px] sm:text-xs font-semibold text-white/70 uppercase tracking-widest mb-1">{priceItem.label}</span>
                            <span className="text-lg sm:text-xl font-bold text-white tracking-tight">{priceItem.price}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
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
            href="/services"
            text="All Services"
            className="bg-linear-to-r from-brand-start to-brand-end hover:brightness-110 text-white font-semibold shadow-md transition-all hover:shadow-[0_8px_24px_rgba(25,79,162,0.2)]"
            icon={<Activity className="h-4 w-4" />}
          />
        </motion.div>
      </div>
    </section>
  );
}
