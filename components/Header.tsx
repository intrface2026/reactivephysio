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
              whileTap={{ scale: 0.9 }}
              className="relative flex h-10 w-10 flex-col items-center justify-center"
            >
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { rotate: 45, y: 1.5, width: 20 }
                    : { rotate: 0, y: -3, width: 20 }
                }
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute block h-[1.5px] rounded-full bg-black origin-center"
              />
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -1.5, width: 20 }
                    : { rotate: 0, y: 3, width: 20 }
                }
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute block h-[1.5px] rounded-full bg-black origin-center"
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
              className="fixed inset-0 z-50 flex flex-col overflow-hidden"
              style={{
                background:
                  "linear-gradient(145deg, #ffffff 0%, #fdf8f7 55%, #faeae6 100%)",
              }}
            >
              {/* Ambient glow orb — purely decorative */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-40"
                style={{
                  background:
                    "radial-gradient(circle, rgba(14,165,233,0.35) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full opacity-25"
                style={{
                  background:
                    "radial-gradient(circle, rgba(14,165,233,0.4) 0%, transparent 70%)",
                  filter: "blur(50px)",
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
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/8 text-foreground/60 transition-colors hover:bg-brand/10 hover:text-brand hover:border-brand/20"
                >
                  <svg
                    width="15" height="15" viewBox="0 0 24 24" fill="none"
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
                        <span className="mr-5 w-5 shrink-0 text-right text-[11px] font-medium tabular-nums text-black/20 transition-colors duration-200 group-hover:text-brand/50">
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* Link text */}
                        <span className="flex-1 text-[22px] font-semibold tracking-tight text-foreground/85 transition-colors duration-200 group-hover:text-brand">
                          {link.name}
                        </span>

                        {/* Arrow icon */}
                        <motion.span
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/8 text-black/30 transition-all duration-200 group-hover:border-brand/30 group-hover:bg-brand/8 group-hover:text-brand"
                          whileHover={{ x: 2 }}
                        >
                          <svg
                            width="13" height="13" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round"
                          >
                            <path d="M7 17L17 7M17 7H7M17 7v10" />
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
                   className="group flex w-full items-center justify-center gap-2.5 rounded-2xl bg-surface py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand hover:shadow-[0_8px_24px_rgba(30,64,175,0.3)]"
                >
                  <svg
                    width="15" height="15" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Book A Call
                  <motion.svg
                    width="13" height="13" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </motion.svg>
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
