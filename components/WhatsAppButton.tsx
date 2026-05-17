"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/919823012345?text=Hello%20Reactive%20Physical%20Therapy!%20I'd%20like%20to%20book%20an%20appointment.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center sm:bottom-10 sm:right-10 cursor-pointer"
    >
      {/* Tooltip on hover */}
      <span className="absolute right-14 scale-0 group-hover:scale-100 transition-all duration-300 origin-right whitespace-nowrap bg-surface text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-md mr-2 select-none border border-white/10">
        Chat with us on WhatsApp
      </span>

      {/* Outer Pulse ring */}
      <span className="absolute inset-0 rounded-[18px] bg-[#25D366] opacity-35 animate-ping" />

      {/* Button Body */}
      <motion.div
        className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[18px] bg-linear-to-tr from-[#128C7E] to-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] transition-all duration-300"
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sm:w-[30px] sm:h-[30px]"
        >
          {/* Custom elegant SVG render of WhatsApp icon path */}
          <path
            fill="currentColor"
            stroke="none"
            d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.97L2 22l5.233-1.372a9.957 9.957 0 0 0 4.777 1.218h.005c5.505 0 9.988-4.478 9.99-9.986A9.988 9.988 0 0 0 12.012 2zm4.7 13.913c-.258.725-1.298 1.327-1.782 1.411-.486.085-1.077.155-3.238-.696-2.756-1.089-4.524-3.886-4.66-4.067-.139-.18-1.12-1.488-1.12-2.839 0-1.35.706-2.014.957-2.278.25-.264.67-.323.957-.323.096 0 .185.004.264.009.232.012.395.029.566.442.213.518.73 1.78.793 1.91.064.13.107.28.02.45-.085.172-.128.28-.256.43-.128.15-.27.336-.384.45-.128.13-.263.27-.113.528.15.258.665 1.096 1.428 1.776.985.876 1.815 1.148 2.072 1.277.257.129.408.107.56-.065.15-.172.643-.75.815-1.007.172-.258.344-.215.58-.129.237.086 1.503.71 1.761.84.258.128.43.193.494.301.064.107.064.623-.194 1.348z"
          />
        </svg>
      </motion.div>
    </a>
  );
}
