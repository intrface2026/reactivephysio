"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
];

const pagesLinks = [
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const allMobileLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blogs", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

// All desktop link keys in order (for the floating pill)
const desktopLinks = [
  ...navLinks.map((l) => ({ ...l, type: "link" as const })),
  { name: "Pages", href: "#", type: "dropdown" as const },
  { name: "Blogs", href: "/blog", type: "link" as const },
];

// ─────────────────────────────────────────────────────────────────────────────
// Animation variants
// ─────────────────────────────────────────────────────────────────────────────

const overlayVariants: Variants = {
  closed: { opacity: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
  open: { opacity: 1, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
};

const panelVariants: Variants = {
  closed: {
    clipPath: "inset(0% 0% 100% 0% round 0px)",
    transition: {
      duration: 0.42,
      ease: [0.76, 0, 0.24, 1],
      when: "afterChildren",
      staggerChildren: 0,
    },
  },
  open: {
    clipPath: "inset(0% 0% 0% 0% round 0px)",
    transition: {
      duration: 0.52,
      ease: [0.76, 0, 0.24, 1],
      when: "beforeChildren",
      staggerChildren: 0.055,
      delayChildren: 0.1,
    },
  },
};

const linkItemVariants: Variants = {
  closed: {
    opacity: 0,
    y: 28,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const footerVariants: Variants = {
  closed: { opacity: 0, y: 16, transition: { duration: 0.2 } },
  open: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.38, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Header Component
// ─────────────────────────────────────────────────────────────────────────────

export function Header() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const pagesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  // Debounced close for Pages dropdown so moving to it doesn't flicker
  const openPages = () => {
    if (pagesTimeout.current) clearTimeout(pagesTimeout.current);
    setIsPagesOpen(true);
  };
  const closePages = () => {
    pagesTimeout.current = setTimeout(() => setIsPagesOpen(false), 120);
  };

  return (
    <>
      <header className={`fixed left-0 right-0 top-0 z-50 flex justify-center transition-all duration-300 px-6 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-black/[0.04] py-3 shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
          : "bg-transparent pt-6 md:pt-8"
      } md:px-12`}>
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex w-full max-w-7xl items-center justify-between"
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            className={`relative z-10 block overflow-hidden transition-all duration-300 ${
              scrolled
                ? "w-[180px] h-[50px] sm:w-[240px] sm:h-[62px]"
                : "w-[260px] h-[72px] sm:w-[350px] sm:h-[90px]"
            }`}
          >
            <Image
              src="/logo/Reactive Physical Therapy.svg"
              alt="Reactive Physical Therapy Logo"
              width={1500}
              height={1500}
              className="absolute left-1/2 top-1/2 h-[300%] w-[300%] -translate-x-1/2 -translate-y-1/2 object-contain"
              priority
            />
          </Link>

          {/* ── Right Side ── */}
          <div className="flex items-center">
            {/* Hamburger — animated to X */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              whileTap={{ scale: 0.95 }}
              className={`relative flex h-11 w-11 flex-col items-center justify-center rounded-full border transition-all duration-300 ${
                scrolled
                  ? "border-black/10 bg-white/80 shadow-sm"
                  : "border-black/5 bg-white/40 hover:bg-white/60"
              } backdrop-blur-md`}
            >
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { rotate: 45, y: 1.5, width: 20, backgroundColor: "#1e40af" } // var(--color-brand)
                    : { rotate: 0, y: -4, width: 22, backgroundColor: "#0f172a" } // var(--color-foreground)
                }
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute block h-[1.5px] rounded-full origin-center"
              />
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -1.5, width: 20, backgroundColor: "#1e40af" }
                    : { rotate: 0, y: 4, width: 16, backgroundColor: "#0f172a" }
                }
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute block h-[1.5px] rounded-full origin-center"
              />
            </motion.button>
          </div>
        </motion.nav>
      </header>

      {/* ── Full-Screen Mobile Menu Overlay ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Full-screen panel — clips open from top */}
            <motion.div
              key="mobile-panel"
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-white/95 backdrop-blur-2xl"
            >
              {/* Premium Slant Lines overlay (optional) */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                backgroundImage: `repeating-linear-gradient(135deg, #0f172a 0px, #0f172a 1.5px, transparent 1.5px, transparent 10px)`
              }} />

              {/* Ambient glow orb — using brand colors */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-30"
                style={{
                  background:
                    "radial-gradient(circle, var(--color-brand-light) 0%, transparent 70%)",
                  filter: "blur(60px)",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-16 -left-16 h-80 w-80 rounded-full opacity-15"
                style={{
                  background:
                    "radial-gradient(circle, var(--color-brand) 0%, transparent 70%)",
                  filter: "blur(60px)",
                }}
              />

              {/* Panel header */}
              <motion.div
                variants={linkItemVariants}
                className="flex items-center justify-between border-b border-black/5 px-6 py-5 shrink-0"
              >
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative z-10 block overflow-hidden w-[220px] h-[60px]"
                >
                  <Image
                    src="/logo/Reactive Physical Therapy.svg"
                    alt="Reactive Physical Therapy Logo"
                    width={1500}
                    height={1500}
                    className="absolute left-1/2 top-1/2 h-[300%] w-[300%] -translate-x-1/2 -translate-y-1/2 object-contain"
                    priority
                  />
                </Link>
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  whileTap={{ scale: 0.9, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/50 text-foreground/80 backdrop-blur-md shadow-sm transition-colors hover:bg-brand hover:text-white hover:border-brand/20"
                >
                  <svg
                    width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </motion.button>
              </motion.div>

              {/* Navigation links */}
              <nav className="flex flex-1 flex-col overflow-y-auto px-6 py-8">
                <motion.p
                  variants={linkItemVariants}
                  className="mb-6 text-[10px] font-semibold uppercase tracking-[0.14em] text-black/30"
                >
                  Navigation
                </motion.p>

                <div className="flex flex-col">
                  {allMobileLinks.map((link, i) => (
                    <motion.div key={link.name} variants={linkItemVariants}>
                      <Link
                        href={link.href}
                        onClick={() => {
                          setActiveLink(link.name);
                          setIsMobileMenuOpen(false);
                        }}
                        className="group relative flex items-center justify-between border-b border-black/5 py-4 last:border-none"
                      >
                        {/* Index number */}
                        <span className="mr-5 w-6 shrink-0 text-right text-[12px] font-medium tabular-nums text-black/20 transition-colors duration-300 group-hover:text-brand/50">
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* Link text */}
                        <span className="flex-1 text-[26px] md:text-[32px] font-display font-medium tracking-tight text-foreground/90 transition-all duration-300 group-hover:text-brand group-hover:translate-x-2">
                          {link.name}
                        </span>

                        {/* Arrow icon */}
                        <motion.span
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 text-black/30 transition-all duration-300 group-hover:border-brand/30 group-hover:bg-brand/5 group-hover:text-brand"
                          whileHover={{ x: 4 }}
                        >
                          <svg
                            width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2.5"
                            strokeLinecap="round" strokeLinejoin="round"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* Panel footer */}
              <motion.div
                variants={footerVariants}
                className="shrink-0 border-t border-black/6 px-6 pb-8 pt-5"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                   className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-surface py-4.5 text-[15px] font-semibold text-white transition-all duration-300 hover:shadow-[0_8px_24px_rgba(30,64,175,0.3)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-mid to-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative z-10 flex items-center gap-2">
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Book A Call
                    <motion.svg
                      width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="ml-1 transition-transform duration-200 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </motion.svg>
                  </span>
                </Link>

                <p className="mt-4 text-center text-[11px] leading-relaxed text-black/30">
                  Professional physiotherapy — tailored for you
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
