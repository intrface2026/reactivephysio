import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const teamMembers: Record<string, {
  name: string;
  designation: string;
  specialties: string[];
  bio: string;
  education: string[];
  image: string;
  socials: { facebook: string; twitter: string; linkedin: string };
}> = {
  "mateo-r-albright": {
    name: "Mateo R. Albright",
    designation: "Lead Physiotherapist",
    specialties: ["Sports Rehabilitation", "Manual Therapy", "Gait Analysis"],
    bio: "Mateo has over 14 years of experience treating elite athletes and everyday patients alike. He completed his MSc in Sports Physiotherapy at Dublin City University and has served as team physiotherapist for two professional football clubs. His approach combines precision biomechanical assessment with hands-on manual therapy and a deep understanding of athletic performance.\n\nHe is passionate about helping patients not just recover, but come back stronger than before — regardless of whether they are a professional sportsperson or a weekend warrior.",
    education: ["MSc Sports Physiotherapy – Dublin City University", "BSc Physiotherapy – University College Cork", "Certified Manual Therapist (CMT)", "FIFA Medical Certificate"],
    image: "https://framerusercontent.com/images/IZLlZCsR8N2MwI5SDbpqgI446M.png",
    socials: { facebook: "https://www.facebook.com/", twitter: "https://x.com/", linkedin: "https://www.linkedin.com/" },
  },
  "javier-c-emerson": {
    name: "Javier C. Emerson",
    designation: "Sports Rehab Specialist",
    specialties: ["ACL Recovery", "Post-Surgical Rehab", "Athletic Performance"],
    bio: "Javier specialises in post-surgical rehabilitation for the knee and shoulder. His cutting-edge biomechanical assessments have helped dozens of athletes return to sport safely following surgery. With a background in competitive athletics himself, he understands the psychological as well as physical demands of recovery.\n\nHe takes a progressive, phased approach to rehabilitation that prioritises safety without sacrificing speed of recovery.",
    education: ["BSc Physiotherapy – Trinity College Dublin", "Post-Grad Certificate in Sports Rehabilitation", "Certified Strength & Conditioning Specialist (CSCS)", "Return-to-Sport Protocols Certification"],
    image: "https://framerusercontent.com/images/t1QOMAtulA7DvOsUx3HooiC5xA.png",
    socials: { facebook: "https://www.facebook.com/", twitter: "https://x.com/", linkedin: "https://www.linkedin.com/" },
  },
  "leonardo-f-ashton": {
    name: "Leonardo F. Ashton",
    designation: "Manual Therapy Expert",
    specialties: ["Spinal Mobilisation", "Dry Needling", "Chronic Pain"],
    bio: "Leonardo is a certified manual therapy specialist with a particular interest in spinal conditions and chronic pain. He combines evidence-based manual techniques with a compassionate, patient-centred approach that addresses the biopsychosocial aspects of pain.\n\nHe regularly lectures at continuing professional development events and is a strong advocate for pain education as a core component of physiotherapy.",
    education: ["MSc Advanced Physiotherapy – University College Dublin", "Post-Graduate Diploma in Manual Therapy", "Dry Needling Certification (Level 1 & 2)", "Pain Neuroscience Education Certified Practitioner"],
    image: "https://framerusercontent.com/images/cphnFeLljI5C2dQ9FCpjg8HU.png",
    socials: { facebook: "https://www.facebook.com/", twitter: "https://x.com/", linkedin: "https://www.linkedin.com/" },
  },
  "ricardo-p-winslow": {
    name: "Ricardo P. Winslow",
    designation: "Women's Health Physiotherapist",
    specialties: ["Pelvic Floor Rehab", "Prenatal Care", "Postnatal Recovery"],
    bio: "Ricardo is one of the clinic's most in-demand practitioners, renowned for his expertise in women's pelvic health. He holds a post-graduate certificate in Women's Health Physiotherapy from University College London.\n\nHis sensitive, evidence-based approach helps women navigate the challenges of prenatal and postnatal health, pelvic floor dysfunction, and hormonal transitions with confidence and dignity.",
    education: ["BSc Physiotherapy – Royal College of Surgeons Ireland", "Post-Graduate Certificate in Women's Health – UCL", "Pelvic Floor Assessment & Treatment Certification", "Continence Foundation of Ireland Member"],
    image: "https://framerusercontent.com/images/brafNVtzcB9RUigLb7pJIdLKIfw.png",
    socials: { facebook: "https://www.facebook.com/", twitter: "https://x.com/", linkedin: "https://www.linkedin.com/" },
  },
};

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembers[slug];
  if (!member) return { title: "Team Member – Phisio" };
  return {
    title: `${member.name} – Phisio | ${member.designation}`,
    description: `Learn about ${member.name}, ${member.designation} at Phisio. Specialising in ${member.specialties.slice(0, 2).join(" and ")}.`,
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
        <h1 className="text-4xl font-bold text-surface">Team member not found</h1>
        <Link href="/team" className="mt-6 text-brand hover:underline">← Back to Team</Link>
      </main>
    );
  }

  return (
    <main>
      {/* ── Hero ── */}
      <section className="w-full bg-[#f2f2f2] pt-40 pb-0 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Link href="/team" className="inline-flex items-center gap-2 text-sm font-semibold text-surface/50 hover:text-brand transition-colors mb-10">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Team
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
              <div className="flex items-center gap-3">
                {[
                  { href: member.socials.linkedin, label: "LinkedIn", icon: <svg width="13" height="14" viewBox="0 0 14 15" fill="none"><path d="M3.12566 14H0.460547V4.64844H3.12566V14ZM1.79174 3.37109C0.964844 3.37109 0.296875 2.68945 0.296875 1.86255V1.85156C0.296875 1.01367 0.964844 0.332031 1.79174 0.332031C2.61865 0.332031 3.28662 1.01367 3.28662 1.85156V1.86255C3.28662 2.68945 2.61865 3.37109 1.79174 3.37109ZM13.7031 14H11.0479V9.44824C11.0479 8.37402 11.0283 7.00391 9.56934 7.00391C8.08984 7.00391 7.86426 8.16699 7.86426 9.36816V14H5.20898V4.64844H7.75879V5.92578H7.79785C8.15137 5.24414 9.01807 4.52246 10.3228 4.52246C13.0195 4.52246 13.7031 6.28223 13.7031 8.60059V14Z" fill="currentColor"/></svg> },
                  { href: member.socials.twitter, label: "Twitter/X", icon: <svg width="14" height="12" viewBox="0 0 16 14" fill="none"><path d="M14.9469 0.978637L9.11756 7.95178L16 13.9786H11.4615L7.45628 8.86378L2.73988 13.9786H0.608421L6.91017 6.24511L0.338281 0.978637H4.97628L8.67044 5.69003L13.0769 0.978637H14.9469Z" fill="currentColor"/></svg> },
                  { href: member.socials.facebook, label: "Facebook", icon: <svg width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M9 1H7C5.067 1 3.5 2.567 3.5 4.5V7H1V10H3.5V15H6.5V10H8.5L9 7H6.5V4.5C6.5 4.22386 6.72386 4 7 4H9V1Z" fill="currentColor"/></svg> },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-surface/50 hover:border-brand/30 hover:bg-brand/10 hover:text-brand transition-all"
                  >
                    {social.icon}
                  </a>
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
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-[0_8px_24px_rgba(197,110,94,0.5)]"
              >
                Book with {member.name.split(" ")[0]}
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
