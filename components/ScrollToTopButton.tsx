"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
} from "framer-motion";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Track scroll progress to fill the SVG ring
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Show button after scrolling past 5% of the page
      if (latest > 0.05) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.4, y: 50, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          exit={{
            opacity: 0,
            scale: 0.4,
            y: 50,
            rotate: 15,
            transition: { duration: 0.3, ease: "backIn" },
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          // Positioned above the WhatsApp button
          className="fixed bottom-[88px] right-6 sm:bottom-[112px] sm:right-10 z-50 flex items-center justify-end"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group relative flex items-center justify-center overflow-hidden rounded-full border border-white/40 bg-white/10 p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-2xl transition-all duration-500 hover:border-white/80 hover:bg-white/30 hover:shadow-[0_16px_48px_rgba(30,64,175,0.25)]"
          >
            {/* The SVG Scroll Progress Ring Container */}
            <div className="relative flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-white/50 shadow-inner sm:h-[46px] sm:w-[46px]">
              {/* Scroll Progress Ring */}
              <svg
                className="absolute inset-0 h-full w-full -rotate-90 transform drop-shadow-sm"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="rgba(0,0,0,0.06)"
                  strokeWidth="6"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="var(--color-brand)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  style={{ pathLength }}
                  className="transition-opacity duration-300 group-hover:opacity-100 opacity-80"
                />
              </svg>

              {/* Continuous Flowing Arrow Icon */}
              <div className="relative z-10 h-[18px] w-[18px] overflow-hidden sm:h-[20px] sm:w-[20px]">
                <motion.div
                  animate={isHovered ? { y: ["0%", "-50%"] } : { y: "0%" }}
                  transition={
                    isHovered
                      ? { repeat: Infinity, duration: 0.8, ease: "linear" }
                      : { type: "spring", stiffness: 300, damping: 20 }
                  }
                  className="flex flex-col items-center"
                >
                  {/* Primary Arrow */}
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-brand h-[18px] sm:h-[20px]"
                  >
                    <path d="M12 19V5M5 12l7-7 7 7" />
                  </svg>
                  {/* Secondary Arrow for the infinite flow illusion */}
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-brand h-[18px] sm:h-[20px]"
                  >
                    <path d="M12 19V5M5 12l7-7 7 7" />
                  </svg>
                </motion.div>
              </div>
            </div>

            {/* Ambient internal hover glow */}
            <motion.div
              className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-brand/10 to-brand-light/10 opacity-0 blur-lg transition-opacity duration-300"
              animate={{ opacity: isHovered ? 1 : 0 }}
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
