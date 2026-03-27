import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const servicesData: Record<string, {
  title: string;
  tagline: string;
  description: string;
  image: string;
  benefits: string[];
  conditions: string[];
  process: { step: string; title: string; desc: string }[];
}> = {
  "gait-training": {
    title: "Gait Training",
    tagline: "Restore your natural movement",
    description: "Gait training focuses on improving the way you walk. Whether recovering from a neurological event like a stroke, a lower limb injury, or dealing with a degenerative condition, our gait specialists use advanced analysis and progressive exercises to restore natural movement patterns.",
    image: "https://framerusercontent.com/images/x9BbpMW2l1ETXjm885q6jCtWRYc.jpg",
    benefits: ["Improved walking efficiency and speed", "Reduced pain during movement", "Better balance and fall prevention", "Increased confidence in mobility", "Long-term independence"],
    conditions: ["Post-stroke rehabilitation", "Parkinson's disease", "Knee and hip replacement recovery", "Foot drop", "Musculoskeletal injuries"],
    process: [
      { step: "01", title: "Gait Analysis", desc: "We perform a detailed video and clinical analysis of your walking pattern." },
      { step: "02", title: "Targeted Exercises", desc: "A programme of progressive strength and mobility exercises is designed for your needs." },
      { step: "03", title: "Assisted Practice", desc: "Guided practice sessions with real-time feedback to correct movement patterns." },
      { step: "04", title: "Independence Training", desc: "Progressing to unsupported walking and community ambulation." },
    ],
  },
  "sports-rehabilitation": {
    title: "Sports Rehabilitation",
    tagline: "Back to the sport you love",
    description: "Our sports rehabilitation programme is designed for athletes at all levels. From ACL reconstructions to rotator cuff repairs, our certified sports physiotherapists develop individualised, phase-based programmes to ensure a safe, efficient return to peak performance.",
    image: "https://framerusercontent.com/images/4NjxubX1dvlVTQPtjdeJOn62UU.jpg",
    benefits: ["Safe, phased return to sport", "Improved athletic performance", "Reduced re-injury risk", "Sport-specific conditioning", "Psychological readiness support"],
    conditions: ["ACL and PCL injuries", "Shoulder dislocations and instability", "Hamstring and quad tears", "Ankle sprains", "Rotator cuff injuries"],
    process: [
      { step: "01", title: "Injury Assessment", desc: "Comprehensive physical and functional testing to understand your injury." },
      { step: "02", title: "Phase 1: Protection", desc: "Pain management, swelling control, and early range of motion work." },
      { step: "03", title: "Phase 2: Strengthening", desc: "Progressive loading and neuromuscular retraining." },
      { step: "04", title: "Return to Sport", desc: "Sport-specific drills and performance testing before full clearance." },
    ],
  },
  "womens-therapy": {
    title: "Women's Therapy",
    tagline: "Specialist care throughout every stage of life",
    description: "Women's health physiotherapy addresses the unique physical challenges women face throughout their lives — from pregnancy and postnatal recovery to menopause and pelvic floor dysfunction. Our specialist team provides confidential, evidence-based care in a safe and supportive environment.",
    image: "https://framerusercontent.com/images/EuE334zfvtYBi9vwSBstq2xqJY.jpg",
    benefits: ["Pelvic floor strength and function", "Reduced incontinence symptoms", "Improved postnatal recovery", "Pain-free pregnancy and postpartum", "Menopausal symptom management"],
    conditions: ["Stress and urge incontinence", "Pelvic organ prolapse", "Diastasis recti", "Prenatal back and pelvic pain", "Vaginismus and dyspareunia"],
    process: [
      { step: "01", title: "Confidential Assessment", desc: "A thorough, respectful internal and external pelvic assessment." },
      { step: "02", title: "Education", desc: "Understanding your condition, bladder and bowel habits, and lifestyle factors." },
      { step: "03", title: "Pelvic Floor Training", desc: "Individualised programme of pelvic floor rehabilitation exercises." },
      { step: "04", title: "Functional Return", desc: "Progressive return to daily activities, sport, and intimacy." },
    ],
  },
  "manual-therapy": {
    title: "Manual Therapy",
    tagline: "Healing through expert hands",
    description: "Manual therapy uses skilled, hands-on techniques to treat musculoskeletal pain and dysfunction. Our certified manual therapists apply joint mobilisation, manipulation, soft tissue massage, and myofascial release to reduce pain, improve flexibility, and restore normal movement.",
    image: "https://framerusercontent.com/images/fd7H4g2SyDOLmrGUUi05FNqLbw.jpg",
    benefits: ["Immediate pain relief", "Improved joint range of motion", "Reduced muscle tension and spasm", "Enhanced circulation", "Faster overall recovery"],
    conditions: ["Neck and back pain", "Shoulder stiffness", "Hip and knee restrictions", "Headaches and TMJ disorders", "Postural dysfunction"],
    process: [
      { step: "01", title: "Assessment", desc: "Identifying joint restrictions, soft tissue tightness, and movement impairments." },
      { step: "02", title: "Joint Mobilisation", desc: "Graduated techniques to restore joint mechanics and reduce pain." },
      { step: "03", title: "Soft Tissue Work", desc: "Massage, trigger point therapy, and myofascial techniques." },
      { step: "04", title: "Exercise Integration", desc: "Combining manual therapy with targeted exercise for lasting results." },
    ],
  },
  "pain-management": {
    title: "Pain Management",
    tagline: "Drug-free solutions for lasting relief",
    description: "Chronic pain affects every aspect of life. Our physiotherapy-led pain management programme combines modern pain neuroscience education, targeted exercise, manual therapy, and lifestyle coaching to help patients regain control and live actively despite their pain.",
    image: "https://framerusercontent.com/images/3ReT5xeX5z4tvOwGXq4uK0APU4.jpg",
    benefits: ["Reduced pain intensity and frequency", "Improved sleep and energy", "Less reliance on medication", "Better understanding of your pain", "Restored confidence in movement"],
    conditions: ["Chronic lower back pain", "Fibromyalgia", "Complex regional pain syndrome", "Persistent headaches", "Central sensitisation"],
    process: [
      { step: "01", title: "Pain Education", desc: "Understanding pain neuroscience and how the brain processes pain signals." },
      { step: "02", title: "Graded Exposure", desc: "Progressively challenging movements to reduce pain-related fear." },
      { step: "03", title: "Active Management", desc: "Exercise therapy, breathing techniques, and relaxation strategies." },
      { step: "04", title: "Self-Management", desc: "Tools and strategies to independently manage pain long-term." },
    ],
  },
};

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return { title: "Service – Phisio" };
  return {
    title: `${service.title} – Phisio | ${service.tagline}`,
    description: service.description.substring(0, 160),
  };
}

export function generateStaticParams(): Params[] {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-6 pt-32">
        <h1 className="text-4xl font-bold text-surface">Service not found</h1>
        <Link href="/services" className="mt-6 text-brand hover:underline">← All Services</Link>
      </main>
    );
  }

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative w-full min-h-[65vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-black/20" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 md:px-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 mb-6">
            <span className="text-brand font-bold">//</span>
            <span className="text-sm font-semibold tracking-wide text-white">{service.tagline}</span>
          </div>
          <h1 className="text-[40px] leading-[1.1] font-bold tracking-tight text-white sm:text-[64px]">
            {service.title}
          </h1>
        </div>
      </section>

      {/* ── Description + Benefits ── */}
      <section className="w-full bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-[32px] font-bold text-surface mb-6">What is {service.title}?</h2>
            <p className="text-surface/60 leading-relaxed text-lg">{service.description}</p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition-all hover:shadow-[0_8px_24px_rgba(197,110,94,0.5)]"
            >
              Book This Service
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div>
            <h2 className="text-[32px] font-bold text-surface mb-8">Key benefits</h2>
            <ul className="flex flex-col gap-4">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-surface/70 font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Conditions ── */}
      <section className="w-full bg-[#f2f2f2] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-[28px] font-bold text-surface mb-8">Conditions we treat</h2>
          <div className="flex flex-wrap gap-3">
            {service.conditions.map((c) => (
              <span key={c} className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-surface">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="w-full bg-surface px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 mb-6">
              <span className="text-brand font-bold">//</span>
              <span className="text-sm font-semibold text-white">Our Process</span>
            </div>
            <h2 className="text-[36px] font-bold text-white sm:text-[48px]">How it works</h2>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step) => (
              <div key={step.step} className="flex flex-col gap-4 border-t border-white/10 pt-6">
                <span className="text-[48px] font-bold leading-none text-brand/30">{step.step}</span>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full bg-brand px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-[28px] font-bold text-white sm:text-[36px]">Ready to get started?</h2>
            <p className="mt-2 text-white/70">Book your {service.title} session with a specialist today.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-surface px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
}
