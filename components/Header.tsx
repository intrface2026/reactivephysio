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
      <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6 sm:pt-5 md:px-8">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={`relative flex w-full max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-[background,box-shadow] duration-500 sm:px-6 sm:py-3.5 md:px-8 ${
            scrolled
              ? "bg-white/92 shadow-[0_8px_40px_rgba(0,0,0,0.11)] backdrop-blur-2xl"
              : "bg-white/80 shadow-[0_2px_20px_rgba(0,0,0,0.07)] backdrop-blur-xl"
          }`}
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            className="relative z-10 block h-[22px] w-[88px] shrink-0 sm:h-[25px] sm:w-[97px]"
          >
            <Image
              src="https://framerusercontent.com/images/rrpLjor4axo90rojaJ16rWle54.svg"
              alt="Phisio Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* ── Desktop Nav — floating pill pattern ── */}
          <div
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 lg:flex"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {desktopLinks.map((item) =>
              item.type === "dropdown" ? (
                /* Pages dropdown trigger */
                <div
                  key="Pages"
                  className="relative"
                  onMouseEnter={() => { setHoveredLink("Pages"); openPages(); }}
                  onMouseLeave={() => { closePages(); }}
                >
                  <button
                    className={`relative z-10 flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-150 ${
                      hoveredLink === "Pages" ? "text-brand" : "text-foreground/70"
                    }`}
                  >
                    {/* Floating pill behind this item */}
                    {hoveredLink === "Pages" && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-brand/8"
                        transition={{ type: "spring", stiffness: 380, damping: 30, mass: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">Pages</span>
                    <motion.svg
                      width="10" height="6" viewBox="0 0 10 6" fill="none"
                      className="relative z-10"
                      animate={{ rotate: isPagesOpen ? 180 : 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                    >
                      <path
                        fillRule="evenodd" clipRule="evenodd"
                        d="M4.64645 5.35355L0.646447 1.35355L1.35355 0.646446L5 4.29289L8.64645 0.646446L9.35355 1.35355L5.35355 5.35355C5.15829 5.54882 4.84171 5.54882 4.64645 5.35355Z"
                        fill="currentColor"
                      />
                    </motion.svg>
                  </button>

                  {/* Dropdown panel */}
                  <AnimatePresence>
                    {isPagesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        onMouseEnter={openPages}
                        onMouseLeave={closePages}
                        className="absolute left-1/2 top-full mt-2.5 flex w-52 -translate-x-1/2 flex-col overflow-hidden rounded-2xl border border-black/5 bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.14)]"
                      >
                        {pagesLinks.map((sublink, i) => (
                          <motion.div
                            key={sublink.name}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.04, duration: 0.2, ease: "easeOut" }}
                          >
                            <Link
                              href={sublink.href}
                              className="group/item flex items-center justify-between rounded-xl px-4 py-2.5 text-sm text-foreground/75 transition-all duration-200 hover:bg-brand/8 hover:text-brand"
                            >
                              <span className="flex items-center gap-2.5">
                                <span className="h-1 w-1 rounded-full bg-brand/60 transition-transform duration-200 group-hover/item:scale-[2]" />
                                {sublink.name}
                              </span>
                              <svg
                                width="12" height="12" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round"
                                className="-translate-x-1 opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                              >
                                <path d="M9 18l6-6-6-6" />
                              </svg>
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                /* Regular nav link */
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHoveredLink(item.name)}
                >
                  <Link
                    href={item.href}
                    className={`relative z-10 block rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-150 ${
                      hoveredLink === item.name ? "text-brand" : "text-foreground/70"
                    }`}
                  >
                    {/* Shared floating pill — layoutId makes it glide between links */}
                    {hoveredLink === item.name && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-brand/8"
                        transition={{ type: "spring", stiffness: 380, damping: 30, mass: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                </div>
              )
            )}
          </div>

          {/* ── Right Side ── */}
          <div className="flex items-center gap-2.5">
            {/* Desktop CTA */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="hidden items-center gap-2 rounded-full bg-surface px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand lg:flex"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Book A Call
              </Link>
            </motion.div>

            {/* Tablet CTA */}
            <Link
              href="/contact"
              className="hidden items-center justify-center rounded-full bg-surface px-4 py-2 text-xs font-semibold text-white transition-colors duration-300 hover:bg-brand md:flex lg:hidden"
            >
              Book A Call
            </Link>

            {/* Hamburger — animated to X */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              whileTap={{ scale: 0.9 }}
              className={`relative flex h-9 w-9 flex-col items-center justify-center rounded-xl border transition-all duration-300 lg:hidden ${
                isMobileMenuOpen
                  ? "border-brand/25 bg-brand/8"
                  : "border-black/8 bg-transparent hover:bg-black/5"
              }`}
            >
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { rotate: 45, y: 0, width: 18 }
                    : { rotate: 0, y: -5, width: 18 }
                }
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute block h-[1.5px] rounded-full bg-surface origin-center"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.18 }}
                className="absolute block h-[1.5px] w-[12px] rounded-full bg-surface"
              />
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: 0, width: 18 }
                    : { rotate: 0, y: 5, width: 18 }
                }
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute block h-[1.5px] rounded-full bg-surface origin-center"
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
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Full-screen panel — clips open from top */}
            <motion.div
              key="mobile-panel"
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 z-50 flex flex-col overflow-hidden lg:hidden"
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
                    "radial-gradient(circle, rgba(197,110,94,0.35) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full opacity-25"
                style={{
                  background:
                    "radial-gradient(circle, rgba(197,110,94,0.4) 0%, transparent 70%)",
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
                  className="relative block h-[22px] w-[88px]"
                >
                  <Image
                    src="https://framerusercontent.com/images/rrpLjor4axo90rojaJ16rWle54.svg"
                    alt="Phisio Logo"
                    fill
                    className="object-contain"
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
                  className="group flex w-full items-center justify-center gap-2.5 rounded-2xl bg-surface py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand hover:shadow-[0_8px_24px_rgba(197,110,94,0.35)]"
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
