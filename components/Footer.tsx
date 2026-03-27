"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Gait Training", href: "/service/gait-training" },
  { name: "Sports Rehab", href: "/service/sports-rehabilitation" },
  { name: "Women's Therapy", href: "/service/womens-therapy" },
  { name: "Manual Therapy", href: "/service/manual-therapy" },
  { name: "Pain Management", href: "/service/pain-management" },
];

const socials = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M4 4l16 16M4 20 20 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

/** Tilt card wrapper — mouse-tracking 3D perspective */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 22 });
  const springY = useSpring(y, { stiffness: 180, damping: 22 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Animated link with underline slide */
function FooterLink({ name, href }: { name: string; href: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group relative inline-flex items-center gap-2 text-sm text-white/45 transition-colors duration-300 hover:text-white"
      >
        <span
          className="absolute -left-3 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-brand opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-150"
        />
        {name}
        <span className="absolute bottom-0 left-0 h-px w-0 bg-brand transition-all duration-300 group-hover:w-full" />
      </Link>
    </li>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Footer
// ─────────────────────────────────────────────────────────────────────────────

export function Footer() {
  const rootRef = useRef<HTMLElement>(null);
  const isInView = useInView(rootRef, { once: true, margin: "-60px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <footer
      ref={rootRef}
      className="relative w-full overflow-hidden bg-[#0e0e0e] text-white"
    >
      {/* ── Ambient background orbs ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top-left warm orb */}
        <div
          className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(197,110,94,0.6) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Bottom-right cold orb */}
        <div
          className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(100,120,200,0.5) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* ── CTA Banner ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative border-b border-white/8"
      >
        <TiltCard className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16">
          <div
            className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl px-8 py-12 md:flex-row md:gap-4 md:px-12"
            style={{
              background:
                "linear-gradient(135deg, rgba(197,110,94,0.18) 0%, rgba(197,110,94,0.04) 60%, rgba(100,120,200,0.08) 100%)",
              border: "1px solid rgba(197,110,94,0.2)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            {/* Shine sweep */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)",
                backgroundSize: "200% 100%",
              }}
              animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            />

            <div className="relative text-center md:text-left">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand/70">
                Ready to heal?
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                Book your free consultation
              </h2>
            </div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="group relative inline-flex shrink-0 items-center gap-2.5 overflow-hidden rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_32px_rgba(197,110,94,0.4)] transition-all duration-300 hover:shadow-[0_0_48px_rgba(197,110,94,0.65)]"
              >
                {/* Button inner shine */}
                <span
                  aria-hidden
                  className="absolute inset-0 translate-x-[-100%] skew-x-[-18deg] bg-white/20 transition-transform duration-500 group-hover:translate-x-[200%]"
                />
                <span className="relative z-10">Get Started Today</span>
                <svg
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </TiltCard>
      </motion.div>

      {/* ── Main Grid ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 md:px-10 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] lg:gap-10 lg:py-20"
      >
        {/* Brand column */}
        <motion.div variants={fadeUp} className="flex flex-col gap-7">
          <Link href="/" className="inline-block w-fit">
            <span className="text-2xl font-bold tracking-tight text-white">
              Phisio<span className="text-brand">.</span>
            </span>
          </Link>

          <p className="max-w-[260px] text-sm leading-relaxed text-white/40">
            Leading physical therapy and rehabilitation center dedicated to restoring your movement and improving your quality of life.
          </p>

          {/* Stats row */}
          <div className="flex gap-6">
            {[
              { value: "500+", label: "Patients Healed" },
              { value: "12+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-xl font-bold text-white">{stat.value}</span>
                <span className="text-[11px] text-white/35">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="group flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-white/40 transition-all duration-300 hover:border-brand/50 hover:bg-brand/15 hover:text-brand"
                style={{ backdropFilter: "blur(8px)" }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeUp} className="flex flex-col gap-6">
          <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/30">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3.5 pl-3">
            {quickLinks.map((l) => (
              <FooterLink key={l.name} {...l} />
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div variants={fadeUp} className="flex flex-col gap-6">
          <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/30">
            Our Services
          </h4>
          <ul className="flex flex-col gap-3.5 pl-3">
            {services.map((l) => (
              <FooterLink key={l.name} {...l} />
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={fadeUp} className="flex flex-col gap-6">
          <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/30">
            Contact Info
          </h4>
          <ul className="flex flex-col gap-5">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                label: "Location",
                value: "123 Healing Way, Suite 100\nSan Francisco, CA 94105",
                href: undefined,
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                label: "Email",
                value: "hello@phisio.com",
                href: "mailto:hello@phisio.com",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                ),
                label: "Phone",
                value: "+1 (234) 567-890",
                href: "tel:+1234567890",
              },
            ].map((item) => (
              <li key={item.label} className="group flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/8 text-brand/70 transition-all duration-300 group-hover:border-brand/30 group-hover:bg-brand/10 group-hover:text-brand">
                  {item.icon}
                </span>
                <div>
                  <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-widest text-white/25">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="whitespace-pre-line text-sm text-white/50">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* ── Bottom bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative border-t border-white/[0.07]"
      >
        {/* Scanning line animation */}
        <motion.div
          aria-hidden
          className="absolute left-0 top-0 h-px w-full"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(197,110,94,0.6) 50%, transparent 100%)" }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
        />

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-white/25 md:flex-row md:px-10">
          <p>© {new Date().getFullYear()} Phisio. All rights reserved.</p>

          <div className="flex items-center gap-1">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-brand/60" />
            <span className="ml-1 text-white/20">Powered by phisio care</span>
          </div>

          <div className="flex items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <span className="text-white/10">|</span>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
            <span className="text-white/10">|</span>
            <Link href="/blog" className="transition-colors hover:text-white">
              Blog
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
