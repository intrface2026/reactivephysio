"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedButtonProps {
  href: string;
  text: string;
  className?: string;
  iconSrc?: string;
}

export function AnimatedButton({
  href,
  text,
  className,
  iconSrc = "https://framerusercontent.com/images/LNDtE4roheXGGABhHaopiGKt90.svg",
}: AnimatedButtonProps) {
  return (
    <Link
      href={href}
      className={`relative flex flex-col items-center justify-center overflow-hidden rounded-full px-6 py-3 text-white transition-colors ${className || "bg-surface hover:bg-black"}`}
    >
      <motion.div
        className="flex flex-col"
        initial="initial"
        whileHover="hover"
      >
        {/* Top Content (Visible) */}
        <motion.div
          variants={{
            initial: { y: 0 },
            hover: { y: "-100%" },
          }}
          transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
          className="flex items-center gap-2"
        >
          {iconSrc && (
            <div className="relative h-4 w-4">
              <Image src={iconSrc} alt="icon" fill className="object-contain" />
            </div>
          )}
          <span className="text-sm font-semibold">{text}</span>
        </motion.div>

        {/* Bottom Content (Hidden, slides up on hover) */}
        <motion.div
          variants={{
            initial: { y: "100%", position: "absolute" },
            hover: { y: 0, position: "absolute" },
          }}
          transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
          className="flex items-center gap-2"
          style={{
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            justifyContent: "center",
          }}
        >
          {iconSrc && (
            <div className="relative h-4 w-4">
              <Image src={iconSrc} alt="icon" fill className="object-contain" />
            </div>
          )}
          <span className="text-sm font-semibold">{text}</span>
        </motion.div>
      </motion.div>
    </Link>
  );
}
