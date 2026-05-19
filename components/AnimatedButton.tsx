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
  icon?: React.ReactNode;
}

const MotionLink = motion.create(Link);

export function AnimatedButton({
  href,
  text,
  className,
  iconSrc,
  icon,
}: AnimatedButtonProps) {
  return (
    <MotionLink
      href={href}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={{
        initial: { scale: 1 },
        hover: { 
          scale: 1, 
          boxShadow: "0px 6px 20px rgba(30, 64, 175, 0.15)" 
        },
        tap: { scale: 0.98 }
      }}
      className={`relative flex items-center justify-center overflow-hidden rounded-full px-8 py-4 text-white transition-all duration-300 ${className || "bg-surface hover:bg-black"}`}
    >
      <div className="relative h-5 overflow-hidden flex flex-col justify-center">
        {/* Top Content (Visible, slides up on hover) */}
        <motion.div
          variants={{
            initial: { y: 0, opacity: 1 },
            hover: { y: "-120%", opacity: 0 },
          }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
          className="flex items-center gap-2"
        >
          {icon && <span className="shrink-0 flex items-center justify-center">{icon}</span>}
          {!icon && iconSrc && (
            <div className="relative h-4.5 w-4.5">
              <Image src={iconSrc} alt="icon" fill className="object-contain" />
            </div>
          )}
          <span className="text-sm font-semibold tracking-wide">{text}</span>
        </motion.div>

        {/* Bottom Content (Hidden below, slides up on hover) */}
        <motion.div
          variants={{
            initial: { y: "120%", opacity: 0 },
            hover: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
          className="flex items-center justify-center gap-2 absolute inset-0"
        >
          {icon && <span className="shrink-0 flex items-center justify-center">{icon}</span>}
          {!icon && iconSrc && (
            <div className="relative h-4.5 w-4.5">
              <Image src={iconSrc} alt="icon" fill className="object-contain" />
            </div>
          )}
          <span className="text-sm font-semibold tracking-wide">{text}</span>
        </motion.div>
      </div>
    </MotionLink>
  );
}
