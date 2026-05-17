import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const teamMembers: Record<string, {
  name: string;
  designation: string;
  specialties: string[];
  bio: string;
  education: string[];
  image: string;
  socials: { facebook?: string; twitter?: string; linkedin?: string; instagram?: string };
}> = {
  "falguni-ambare": {
    name: "Dr. Falguni Ambare",
    designation: "Physiotherapist & Founder",
    specialties: [
      "Women's Health & Pelvic Floor Rehab",
      "Spine Care & Postural Reintegration",
      "Sports Injury & Movement Rehab",
      "Pediatric Developmental Therapy",
    ],
    bio: "Dr. Falguni Ambare is the founder and leading practitioner at Reactive. With over a decade of dedicated clinical experience, she has successfully guided hundreds of patients in Nagpur toward pain-free movement, optimal physical strength, and complete recovery.\n\nHer treatment philosophy combines precise biomechanical assessments, hands-on advanced manual therapy, and highly tailored movement rehabilitation. She is deeply passionate about empowering her patients with root-cause physical therapy that goes beyond symptomatic relief to restore long-term comfort and total structural integrity.",
    education: [
      "Bachelor of Physiotherapy (BPT)",
      "Certified Manual Therapist (CMT)",
      "Specialized Practitioner in Obstetric & Pelvic Rehabilitation",
      "Advanced Postural & Movement Reintegration Certified",
    ],
    image: "https://framerusercontent.com/images/cphnFeLljI5C2dQ9FCpjg8HU.png",
    socials: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" },
  }
};

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembers[slug];
  if (!member) return { title: "Team Member – Reactive" };
  return {
    title: `${member.name} – Reactive | ${member.designation}`,
    description: `Learn about ${member.name}, ${member.designation} at Reactive in Nagpur. Specialising in ${member.specialties.slice(0, 2).join(" and ")}.`,
  };
}

export function generateStaticParams(): Params[] {
  return Object.keys(teamMembers).map((slug) => ({ slug }));
}

export default async function TeamMemberPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const member = teamMembers[slug];

  if (!member) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-6 pt-32">
        <h1 className="text-4xl font-bold text-surface">Practitioner not found</h1>
        <Link href="/about" className="mt-6 text-brand hover:underline">← Back to About Us</Link>
      </main>
    );
  }

  return (
    <main>
      {/* ── Hero ── */}
      <section className="w-full bg-[#f2f2f2] pt-40 pb-0 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-surface/50 hover:text-brand transition-colors mb-10">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to About Us
          </Link>
          <div className="flex flex-col gap-12 lg:flex-row lg:items-end">
            <div className="relative w-full overflow-hidden rounded-[24px] lg:w-[380px] shrink-0" style={{ aspectRatio: "3/3.5" }}>
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="pb-16 lg:pb-20">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2 mb-6">
                <span className="text-brand font-bold">//</span>
                <span className="text-sm font-semibold text-surface">{member.designation}</span>
              </div>
              <h1 className="text-[40px] leading-[1.1] font-bold tracking-tight text-surface sm:text-[56px] mb-6">
                {member.name}
              </h1>
              <div className="flex flex-wrap gap-2 mb-8">
                {member.specialties.map((s) => (
                  <span key={s} className="rounded-full bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bio + Education ── */}
      <section className="w-full bg-white px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-16 lg:grid-cols-[1fr_380px]">
          <div>
            <h2 className="text-2xl font-bold text-surface mb-6">About {member.name.split(" ")[0]}</h2>
            {member.bio.split("\n\n").map((para, i) => (
              <p key={i} className="text-surface/60 leading-relaxed text-lg mb-4">{para}</p>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-surface mb-6">Education & Qualifications</h2>
            <ul className="flex flex-col gap-4">
              {member.education.map((edu) => (
                <li key={edu} className="flex items-start gap-3">
                  <span className="mt-1 font-bold text-brand">//</span>
                  <span className="text-surface/70 leading-relaxed">{edu}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-[0_8px_24px_rgba(0,167,216,0.5)]"
              >
                Schedule an Appointment
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
