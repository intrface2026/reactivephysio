"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MapPin, Mail, Phone, ArrowRight, Shield } from "lucide-react";

const patientLinks = [
  { name: "Book an Appointment", href: "https://portal.reactivephysicaltherapy.com/register?role=patient" },
  { name: "Musculoskeletal Therapy", href: "/service/physiotherapy-muskulo" },
  { name: "Neurological Rehab", href: "/service/physiotherapy-neuro" },
  { name: "ANC / PNC Maternity Care", href: "/service/anc-pnc-care" },
  { name: "Geriatric Care", href: "/service/geriatric-care" },
  { name: "Functional Training", href: "/service/functional-training" },
];

const providerLinks = [
  { name: "Join the Provider Network", href: "/careers" },
  { name: "Apply as a Therapist", href: "https://portal.reactivephysicaltherapy.com/register?role=pt" },
  { name: "Practitioner Portal Login", href: "https://portal.reactivephysicaltherapy.com/login" },
  { name: "Credentialing Guidelines", href: "/careers#process" },
  { name: "Dispute-Free Payouts Info", href: "/careers#why-join" },
];

const companyLinks = [
  { name: "About Dr. Falguni", href: "/team" },
  { name: "Our Core Mission", href: "/about" },
  { name: "Pricing Plans", href: "/pricing" },
  { name: "Client Testimonials", href: "/case-studies" },
  { name: "Contact & FAQ", href: "/contact" },
];

const socials = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
      </svg>
    ),
  },
];

function FooterLink({ name, href }: { name: string; href: string }) {
  const isExternal = href.startsWith("http");
  return (
    <li>
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="group relative inline-flex items-center gap-1.5 text-xs sm:text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
      >
        <span className="absolute -left-3.5 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-brand-start opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:scale-125" />
        {name}
        {isExternal && <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />}
      </Link>
    </li>
  );
}

export function Footer() {
  const rootRef = useRef<HTMLElement>(null);
  const isInView = useInView(rootRef, { once: true, margin: "-60px" });

  return (
    <footer
      ref={rootRef}
      className="relative w-full overflow-hidden bg-zinc-950 text-white border-t border-zinc-900"
    >
      {/* ── Background Aesthetic Glow Orbs ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, var(--color-brand) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute -bottom-40 right-10 h-[400px] w-[400px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, rgba(99,179,237,0.5) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        {/* Fine background mesh pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>


      {/* ── Main Links Grid ── */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">
          
          {/* Brand Info Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="relative block h-10 w-[200px]">
              <Image
                src="/logo/Reactive Physical Therapy (2).svg"
                alt="Reactive Physical Therapy Logo"
                fill
                className="object-contain object-left"
              />
            </Link>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-[280px]">
              Nagpur's premier home-based physiotherapy studio. Delivering evidence-based clinical assessments and specialized rehabilitation programs directly to your doorstep.
            </p>

            {/* Active Coverage Indicator Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-950/20 px-4 py-2 self-start">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-semibold text-emerald-400 tracking-wide uppercase">
                Active in Nagpur
              </span>
            </div>

            {/* Verification / Security Badge */}
            <div className="flex items-center gap-2 text-zinc-500 text-[11px] font-medium border-t border-zinc-900 pt-4">
              <Shield className="h-4 w-4 text-brand-start" />
              <span>Dual-OTP Verified Sessions &amp; Secure Cloud Data</span>
            </div>
          </div>

          {/* Column 2: Patients links */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">
              For Patients
            </h4>
            <ul className="flex flex-col gap-3">
              {patientLinks.map((l) => (
                <FooterLink key={l.name} {...l} />
              ))}
            </ul>
          </div>

          {/* Column 3: Providers links */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">
              For Providers
            </h4>
            <ul className="flex flex-col gap-3">
              {providerLinks.map((l) => (
                <FooterLink key={l.name} {...l} />
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office Info */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">
              Get In Touch
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4.5 w-4.5 text-brand-start shrink-0 mt-0.5" />
                <span className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Home assessment visits available across Ramdaspeth, Dharampeth, Pratap Nagar &amp; surrounding areas in Nagpur, MH.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4.5 w-4.5 text-brand-start shrink-0" />
                <a href="mailto:hello@reactivept.in" className="text-zinc-400 text-xs sm:text-sm hover:text-white transition-colors">
                  hello@reactivept.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4.5 w-4.5 text-brand-start shrink-0" />
                <a href="tel:+919823012345" className="text-zinc-400 text-xs sm:text-sm hover:text-white transition-colors font-medium">
                  +91 98230 12345
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Footer Bottom Bar & Social Row ── */}
      <div className="relative border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-md">
        
        {/* Laser line horizontal scanning animation */}
        <motion.div
          aria-hidden
          className="absolute left-0 top-0 h-px w-full"
          style={{ background: "linear-gradient(90deg, transparent 0%, var(--color-brand) 50%, transparent 100%)" }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
        />

        <div className="mx-auto max-w-7xl px-6 py-8 md:px-10">
          <div className="flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between">
            
            {/* Copyright & Info */}
            <div className="flex flex-col gap-2">
              <p className="text-xs text-zinc-500">
                &copy; {new Date().getFullYear()} Reactive Physical Therapy. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-[10px] text-zinc-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Certified Clinical Therapists in Nagpur, Maharashtra</span>
              </div>
            </div>

            {/* Legal Pages & Social Links */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8">
              <div className="flex items-center gap-4 text-xs text-zinc-500">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-zinc-800">|</span>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>

              {/* Social Buttons */}
              <div className="flex items-center gap-2.5">
                {socials.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/30 text-zinc-400 transition-all hover:border-brand-start hover:bg-brand-start hover:text-white"
                  >
                    {s.icon}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
