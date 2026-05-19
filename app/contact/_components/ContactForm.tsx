"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    // Simulate async submit
    await new Promise((r) => setTimeout(r, 1500));
    setState("success");
  };

  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-[24px] bg-brand-start/5 border border-brand-start/20 p-16 text-center gap-6"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-start/15 text-brand-start">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        <h3 className="text-2xl font-bold text-surface">Message Sent!</h3>
        <p className="text-surface/60 leading-relaxed max-w-sm">
          Thank you for reaching out. One of our team members will get back to you within 24 hours.
        </p>
        <button
          onClick={() => { setState("idle"); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
          className="rounded-full bg-surface px-6 py-3 text-sm font-semibold text-white hover:bg-linear-to-r hover:from-brand-start hover:to-brand-end transition-all"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <div>
      <h2 className="text-[24px] sm:text-[30px] font-semibold text-surface mb-2">Book an appointment</h2>
      <p className="text-xs sm:text-sm text-surface/60 mb-10 leading-relaxed">
        Fill in your details and we will get back to you with availability.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-surface/40">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="rounded-xl border border-black/10 bg-[#f8f8f8] px-4 py-3.5 text-xs sm:text-sm text-surface placeholder-surface/30 outline-none transition-all focus:border-brand-start/50 focus:ring-2 focus:ring-brand-start/10"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-surface/40">
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="rounded-xl border border-black/10 bg-[#f8f8f8] px-4 py-3.5 text-xs sm:text-sm text-surface placeholder-surface/30 outline-none transition-all focus:border-brand-start/50 focus:ring-2 focus:ring-brand-start/10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-widest text-surface/40">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 234 567 890"
              className="rounded-xl border border-black/10 bg-[#f8f8f8] px-4 py-3.5 text-xs sm:text-sm text-surface placeholder-surface/30 outline-none transition-all focus:border-brand-start/50 focus:ring-2 focus:ring-brand-start/10"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="service" className="text-xs font-semibold uppercase tracking-widest text-surface/40">
              Service Interested In
            </label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              className="rounded-xl border border-black/10 bg-[#f8f8f8] px-4 py-3.5 text-xs sm:text-sm text-surface outline-none transition-all focus:border-brand-start/50 focus:ring-2 focus:ring-brand-start/10"
            >
              <option value="">Select a service…</option>
              <option>Gait Training</option>
              <option>Sports Rehabilitation</option>
              <option>Women&apos;s Therapy</option>
              <option>Manual Therapy</option>
              <option>Pain Management</option>
              <option>Paediatric Physiotherapy</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-surface/40">
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your condition or what you need help with…"
            className="rounded-xl border border-black/10 bg-[#f8f8f8] px-4 py-3.5 text-xs sm:text-sm text-surface placeholder-surface/30 outline-none transition-all focus:border-brand-start/50 focus:ring-2 focus:ring-brand-start/10 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={state === "loading"}
          className="group relative mt-2 inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-linear-to-r from-brand-start to-brand-end px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(25,79,162,0.2)] transition-all hover:shadow-[0_12px_32px_rgba(25,79,162,0.3)] disabled:opacity-60 cursor-pointer"
        >
          <span className="absolute inset-0 translate-x-[-100%] skew-x-[-18deg] bg-white/20 transition-transform duration-500 group-hover:translate-x-[200%]" aria-hidden />
          <span className="relative z-10">
            {state === "loading" ? "Sending…" : "Send Message"}
          </span>
          {state !== "loading" && (
            <svg className="relative z-10 transition-transform group-hover:translate-x-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          )}
        </button>
      </form>
    </div>
  );
}
