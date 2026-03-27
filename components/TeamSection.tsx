"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Mateo R. Albright",
    designation: "Physician",
    image:
      "https://framerusercontent.com/images/IZLlZCsR8N2MwI5SDbpqgI446M.png",
    slug: "mateo-r-albright",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    id: 2,
    name: "Javier C. Emerson",
    designation: "Physician",
    image:
      "https://framerusercontent.com/images/t1QOMAtulA7DvOsUx3HooiC5xA.png",
    slug: "javier-c-emerson",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    id: 3,
    name: "Leonardo F. Ashton",
    designation: "Physician",
    image: "https://framerusercontent.com/images/cphnFeLljI5C2dQ9FCpjg8HU.png",
    slug: "leonardo-f-ashton",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    id: 4,
    name: "Ricardo P. Winslow",
    designation: "Physician",
    image:
      "https://framerusercontent.com/images/brafNVtzcB9RUigLb7pJIdLKIfw.png",
    slug: "ricardo-p-winslow",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
];

export function TeamSection() {
  return (
    <section className="w-full bg-[#f2f2f2] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 self-start rounded-full border border-black/10 bg-white px-5 py-2"
            >
              <span className="text-brand font-bold">//</span>
              <span className="text-sm font-semibold tracking-wide text-surface">
                Meet The Team
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[40px] leading-[1.1] font-bold tracking-tight text-surface sm:text-[48px]"
            >
              Meet with our
              <br />
              happy avengers
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/team"
              className="group inline-flex items-center gap-3 rounded-full bg-surface px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand"
            >
              <span className="text-brand group-hover:text-white">//</span>
              <span>More Team</span>
              <span className="text-brand group-hover:text-white">//</span>
            </Link>
          </motion.div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="group overflow-hidden rounded-[10px] bg-[#f2f2f2]"
            >
              {/* Image */}
              <Link href={`/team/${member.slug}`} className="block">
                <div
                  className="relative w-full overflow-hidden rounded-[10px]"
                  style={{ aspectRatio: "604/660" }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </Link>

              {/* Card Content */}
              <div className="rounded-b-[10px] bg-[#f2f2f2] pt-4">
                {/* Name */}
                <Link
                  href={`/team/${member.slug}`}
                  className="block border-b border-black/10 pb-4"
                >
                  <h5 className="text-xl font-bold text-surface transition-colors hover:text-brand">
                    {member.name}
                  </h5>
                </Link>

                {/* Designation & Social */}
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-1.5">
                    <span className="text-brand font-bold text-sm">//</span>
                    <span className="text-surface/60 text-sm font-medium">
                      {member.designation}
                    </span>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-2">
                    <a
                      href={member.socials.facebook}
                      target="_blank"
                      rel="noopener"
                      className="flex h-8 w-8 items-center justify-center rounded bg-white shadow-sm transition-shadow hover:shadow-md"
                    >
                      <svg
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 1H7C5.067 1 3.5 2.567 3.5 4.5V7H1V10H3.5V15H6.5V10H8.5L9 7H6.5V4.5C6.5 4.22386 6.72386 4 7 4H9V1Z"
                          fill="#232323"
                        />
                      </svg>
                    </a>
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener"
                      className="flex h-8 w-8 items-center justify-center rounded bg-white shadow-sm transition-shadow hover:shadow-md"
                    >
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.9469 0.978637L9.11756 7.95178L16 13.9786H11.4615L7.45628 8.86378L2.73988 13.9786H0.608421L6.91017 6.24511L0.338281 0.978637H4.97628L8.67044 5.69003L13.0769 0.978637H14.9469Z"
                          fill="#232323"
                        />
                      </svg>
                    </a>
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener"
                      className="flex h-8 w-8 items-center justify-center rounded bg-white shadow-sm transition-shadow hover:shadow-md"
                    >
                      <svg
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.12566 14H0.460547V4.64844H3.12566V14ZM1.79174 3.37109C0.964844 3.37109 0.296875 2.68945 0.296875 1.86255V1.85156C0.296875 1.01367 0.964844 0.332031 1.79174 0.332031C2.61865 0.332031 3.28662 1.01367 3.28662 1.85156V1.86255C3.28662 2.68945 2.61865 3.37109 1.79174 3.37109ZM13.7031 14H11.0479V9.44824C11.0479 8.37402 11.0283 7.00391 9.56934 7.00391C8.08984 7.00391 7.86426 8.16699 7.86426 9.36816V14H5.20898V4.64844H7.75879V5.92578H7.79785C8.15137 5.24414 9.01807 4.52246 10.3228 4.52246C13.0195 4.52246 13.7031 6.28223 13.7031 8.60059V14Z"
                          fill="#232323"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
