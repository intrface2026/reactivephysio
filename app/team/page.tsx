import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Team – Phisio | Expert Physiotherapists",
  description:
    "Meet the Phisio team — highly qualified physiotherapists dedicated to your recovery. Learn about our specialists and their areas of expertise.",
};

const teamMembers = [
  {
    id: 1,
    name: "Mateo R. Albright",
    designation: "Lead Physiotherapist",
    specialties: ["Sports Rehabilitation", "Manual Therapy", "Gait Analysis"],
    bio: "Mateo has over 14 years of experience treating elite athletes and everyday patients alike. He completed his MSc in Sports Physiotherapy at Dublin City University and has served as team physiotherapist for two professional football clubs.",
    image: "https://framerusercontent.com/images/IZLlZCsR8N2MwI5SDbpqgI446M.png",
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
    designation: "Sports Rehab Specialist",
    specialties: ["ACL Recovery", "Post-Surgical Rehab", "Athletic Performance"],
    bio: "Javier specialises in post-surgical rehabilitation for the knee and shoulder. His cutting-edge biomechanical assessments have helped dozens of athletes return to sport safely following surgery.",
    image: "https://framerusercontent.com/images/t1QOMAtulA7DvOsUx3HooiC5xA.png",
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
    designation: "Manual Therapy Expert",
    specialties: ["Spinal Mobilisation", "Dry Needling", "Chronic Pain"],
    bio: "Leonardo is a certified manual therapy specialist with a particular interest in spinal conditions and chronic pain. He combines evidence-based manual techniques with a compassionate, patient-centred approach.",
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
    designation: "Women's Health Physiotherapist",
    specialties: ["Pelvic Floor Rehab", "Prenatal Care", "Postnatal Recovery"],
    bio: "Ricardo is one of the clinic's most in-demand practitioners, renowned for his expertise in women's pelvic health. He holds a post-graduate certificate in Women's Health Physiotherapy from University College London.",
    image: "https://framerusercontent.com/images/brafNVtzcB9RUigLb7pJIdLKIfw.png",
    slug: "ricardo-p-winslow",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    id: 5,
    name: "Sofia L. Reyes",
    designation: "Paediatric Physiotherapist",
    specialties: ["Child Development", "Neurological Rehab", "Musculoskeletal Paediatrics"],
    bio: "Sofia has dedicated her career to child physiotherapy. Her gentle, play-based approach helps children achieve developmental milestones and recover from injuries in a safe, nurturing environment.",
    image: "https://framerusercontent.com/images/IZLlZCsR8N2MwI5SDbpqgI446M.png",
    slug: "sofia-l-reyes",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    id: 6,
    name: "Elian M. Novak",
    designation: "Neurological Rehabilitation Specialist",
    specialties: ["Stroke Rehab", "Parkinson's Disease", "Balance & Vestibular"],
    bio: "Elian specialises in neurological rehabilitation, helping patients affected by strokes, Parkinson's disease, and vestibular disorders to regain independence and quality of life through targeted, progressive programmes.",
    image: "https://framerusercontent.com/images/t1QOMAtulA7DvOsUx3HooiC5xA.png",
    slug: "elian-m-novak",
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
];

export default function TeamPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="w-full bg-surface pt-40 pb-24 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 mb-6">
            <span className="text-brand font-bold">//</span>
            <span className="text-sm font-semibold tracking-wide text-white">Meet The Team</span>
          </div>
          <h1 className="max-w-2xl text-[40px] leading-[1.1] font-bold tracking-tight text-white sm:text-[56px]">
            Our expert<br />
            <span className="text-brand">physiotherapists</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/60 leading-relaxed">
            Every member of our team is a qualified, registered physiotherapist with specialist training and a passion for patient-centred care.
          </p>
        </div>
      </section>

      {/* ── Team Grid ── */}
      <section className="w-full bg-[#f2f2f2] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.id} className="group overflow-hidden rounded-[20px] bg-white">
                <Link href={`/team/${member.slug}`} className="block">
                  <div
                    className="relative w-full overflow-hidden rounded-[20px]"
                    style={{ aspectRatio: "4/4.5" }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.slice(0, 2).map((s) => (
                          <span key={s} className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <Link href={`/team/${member.slug}`} className="block border-b border-black/8 pb-4 mb-4">
                    <h3 className="text-xl font-bold text-surface hover:text-brand transition-colors">{member.name}</h3>
                  </Link>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-brand font-bold text-sm">//</span>
                      <span className="text-surface/60 text-sm font-medium">{member.designation}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <a href={member.socials.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"
                        className="flex h-8 w-8 items-center justify-center rounded bg-[#f2f2f2] text-surface/50 hover:bg-brand/10 hover:text-brand transition-colors">
                        <svg width="13" height="13" viewBox="0 0 14 15" fill="none">
                          <path d="M3.12566 14H0.460547V4.64844H3.12566V14ZM1.79174 3.37109C0.964844 3.37109 0.296875 2.68945 0.296875 1.86255V1.85156C0.296875 1.01367 0.964844 0.332031 1.79174 0.332031C2.61865 0.332031 3.28662 1.01367 3.28662 1.85156V1.86255C3.28662 2.68945 2.61865 3.37109 1.79174 3.37109ZM13.7031 14H11.0479V9.44824C11.0479 8.37402 11.0283 7.00391 9.56934 7.00391C8.08984 7.00391 7.86426 8.16699 7.86426 9.36816V14H5.20898V4.64844H7.75879V5.92578H7.79785C8.15137 5.24414 9.01807 4.52246 10.3228 4.52246C13.0195 4.52246 13.7031 6.28223 13.7031 8.60059V14Z" fill="currentColor"/>
                        </svg>
                      </a>
                      <a href={member.socials.twitter} target="_blank" rel="noopener" aria-label="Twitter/X"
                        className="flex h-8 w-8 items-center justify-center rounded bg-[#f2f2f2] text-surface/50 hover:bg-brand/10 hover:text-brand transition-colors">
                        <svg width="13" height="12" viewBox="0 0 16 14" fill="none">
                          <path d="M14.9469 0.978637L9.11756 7.95178L16 13.9786H11.4615L7.45628 8.86378L2.73988 13.9786H0.608421L6.91017 6.24511L0.338281 0.978637H4.97628L8.67044 5.69003L13.0769 0.978637H14.9469Z" fill="currentColor"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join the Team CTA ── */}
      <section className="w-full bg-surface px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 mb-6">
              <span className="text-brand font-bold">//</span>
              <span className="text-sm font-semibold text-white">We&apos;re Hiring</span>
            </div>
            <h2 className="text-[32px] font-bold text-white sm:text-[40px]">Join the Phisio team</h2>
            <p className="mt-2 text-white/50 max-w-lg text-lg leading-relaxed">
              We are always looking for passionate, qualified physiotherapists to join our growing team.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition-all hover:shadow-[0_8px_24px_rgba(197,110,94,0.5)]"
          >
            Get In Touch
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
