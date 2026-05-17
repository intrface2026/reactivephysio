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
  "physiotherapy-pain-relief": {
    title: "Science-based Physiotherapy & Pain Relief",
    tagline: "Evidence-backed care to target pain and restore natural movement",
    description: "Our Science-based Physiotherapy & Pain Relief program is dedicated to treating both acute and chronic pain. By combining joint mobilisation, advanced modalities, and tailored movement training, we target the root cause of your pain rather than just masking the symptoms. Every plan is carefully designed around current scientific evidence to help you heal faster and safer.",
    image: "https://framerusercontent.com/images/3ReT5xeX5z4tvOwGXq4uK0APU4.jpg",
    benefits: ["Effective, long-term pain relief without heavy medication", "Improved joint flexibility and range of motion", "Reduced muscular tension and muscle spasms", "Better understanding of pain mechanics", "Restored confidence in daily physical activities"],
    conditions: ["Chronic lower back and neck pain", "Osteoarthritis and joint stiffness", "Tendonitis and bursitis", "Sciatica and nerve pain", "Fibromyalgia and myofascial pain"],
    process: [
      { step: "01", title: "Assessment", desc: "Thorough biomechanical and pain pattern evaluation of your body." },
      { step: "02", title: "Pain Modulation", desc: "Evidence-based techniques to reduce acute distress and tissue irritation." },
      { step: "03", title: "Restoring Function", desc: "Gentle corrective exercises to rebuild safe, functional movement." },
      { step: "04", title: "Active Maintenance", desc: "Self-care and targeted strengthening strategies to prevent future pain recurrence." },
    ],
  },
  "personalised-rehab-post-rehabilitation": {
    title: "Personalised Rehab & Post-Rehabilitation",
    tagline: "Step-by-step restoration of strength and daily movement",
    description: "Our Personalised Rehab & Post-Rehabilitation service supports your transition from acute medical care or surgery back to full physical capacity. We design highly individualized recovery programs that respect surgical protocols, rebuild structural tissue capacity, and empower you to move with strength and safety.",
    image: "https://framerusercontent.com/images/x9BbpMW2l1ETXjm885q6jCtWRYc.jpg",
    benefits: ["Safe, structured return to regular activities", "Restored muscle volume and strength after disuse", "Minimized joint stiffness and post-surgical swelling", "Reduced risk of secondary injuries", "Optimized healing times based on evidence-backed protocols"],
    conditions: ["Post-surgical recovery (Knee/Hip replacements)", "ACL, meniscus, or rotator cuff repairs", "Fracture and trauma rehabilitation", "Spinal surgery recovery", "Neurological event recovery (e.g. Stroke, Parkinson's)"],
    process: [
      { step: "01", title: "Initial Evaluation", desc: "Detailed review of medical history and movement constraints." },
      { step: "02", title: "Phase 1: Protection", desc: "Managing inflammation, maintaining joint health, and restoring early range of motion." },
      { step: "03", title: "Phase 2: Loading", desc: "Progressive resistance exercises to rebuild structural tissue and muscle strength." },
      { step: "04", title: "Phase 3: Function", desc: "Sport or activity-specific functional movement training for full return to daily life." },
    ],
  },
  "strength-fitness-training": {
    title: "Strength & Fitness Training",
    tagline: "Science-driven athletic conditioning for premium longevity",
    description: "Our Strength & Fitness Training is a professional, science-guided program tailored to help you build physical capacity, improve cardiovascular fitness, and optimize body composition. Whether you want to lift heavier, run longer, or simply feel more energetic throughout the day, we deliver systematic training straight to your doorstep.",
    image: "https://framerusercontent.com/images/fd7H4g2SyDOLmrGUUi05FNqLbw.jpg",
    benefits: ["Enhanced skeletal muscle strength and endurance", "Increased bone density and joint stability", "Boosted cardiovascular health and stamina", "Better posture, coordination, and athletic mechanics", "Long-term metabolic health and energy elevation"],
    conditions: ["Muscle weakness and sarcopenia", "Low physical stamina and cardiovascular fitness", "Weight management and body composition issues", "Preventative conditioning for aging adults", "Athletic performance enhancement"],
    process: [
      { step: "01", title: "Fitness Profiling", desc: "Testing baseline strength, endurance, flexibility, and motion patterns." },
      { step: "02", title: "Tailored Program", desc: "A customized conditioning plan aligned with your goals and lifestyle." },
      { step: "03", title: "Progressive Overload", desc: "Systematically challenging your physical limits in a safe and structured manner." },
      { step: "04", title: "Biometric Tracking", desc: "Regular assessments to monitor and celebrate your strength and cardiovascular gains." },
    ],
  },
  "posture-correction": {
    title: "Posture Correction",
    tagline: "Align your body, relieve your strain",
    description: "Our Posture Correction program is designed to reverse the effects of modern desk-bound environments and repetitive postural strains. We focus on identifying muscular imbalances, releasing chronically tight structures, strengthening key alignment muscles, and providing ergonomics education for everyday life.",
    image: "https://framerusercontent.com/images/WYxFJy7m3eXg59BXG2MbDNE4M.jpg",
    benefits: ["Relief from chronic neck, shoulder, and lower back strain", "Optimized spinal alignment and load distribution", "Improved respiratory capacity and chest expansion", "Greater visual presence and structural confidence", "Sustainable habits to prevent workplace fatigue"],
    conditions: ["Forward head posture and tech neck", "Hyperkyphosis and rounded shoulders", "Scoliotic posture adaptations", "Repetitive strain injuries (RSI)", "Desk job related chronic tightness"],
    process: [
      { step: "01", title: "Posture Mapping", desc: "Digital and clinical assessment of static and dynamic alignment." },
      { step: "02", title: "Myofascial Release", desc: "Releasing overactive, tight muscles causing structural pull." },
      { step: "03", title: "Core Activation", desc: "Targeting deep stabilizers of the spine and scapular controllers." },
      { step: "04", title: "Ergonomic Habits", desc: "Setting up your home/work workspace and dynamic posture cues." },
    ],
  },
  "sports-rehabilitation": {
    title: "Sports Rehab",
    tagline: "Back to the sport you love, stronger than before",
    description: "Our Sports Rehab service is built for athletes of all disciplines—from recreational weekend runners to competitive competitors. We focus on sport-specific rehabilitation, restoring agility, correcting biomechanical flaws that caused the injury, and implementing advanced conditioning to prevent re-injury on return.",
    image: "https://framerusercontent.com/images/4NjxubX1dvlVTQPtjdeJOn62UU.jpg",
    benefits: ["Safe, evidence-guided return to competitive sport", "Correction of underlying biomechanical imbalances", "Improved agility, explosive strength, and coordination", "Restored psychological confidence in your injured limb", "Reduced overall risk of future athletic injury"],
    conditions: ["Ligament sprains (ACL, PCL, MCL, ankle sprains)", "Muscle strains (Hamstrings, quads, calves)", "Rotator cuff and shoulder instability", "Tennis/Golfer's elbow and patellar tendonitis", "Overuse and running injuries"],
    process: [
      { step: "01", title: "Biomechanical Audit", desc: "Detailed testing of joint angles, motion ranges, and muscle performance." },
      { step: "02", title: "Active Recovery", desc: "Managing pain while keeping uninjured areas fully active." },
      { step: "03", title: "Power & Agility", desc: "Challenging dynamic balance, progressive loading, and deceleration." },
      { step: "04", title: "Return to Play", desc: "Sport-specific drills, high-velocity testing, and full clearance." },
    ],
  },
  "anc-pnc-care": {
    title: "ANC – PNC Care (Antenatal & Postnatal Care)",
    tagline: "Specialist physiotherapy through the journey of motherhood",
    description: "Our ANC – PNC Care program offers specialized, compassionate physical support for women during pregnancy and postpartum. We focus on relieving pregnancy-related pain, preparing your pelvic floor for delivery, safely managing diastasis recti, and rebuilding abdominal and pelvic strength so you can enjoy motherhood pain-free.",
    image: "https://framerusercontent.com/images/EuE334zfvtYBi9vwSBstq2xqJY.jpg",
    benefits: ["Relief from pregnancy-related pelvic and back pain", "Preparation and strengthening of pelvic floor muscles", "Safe management and closure of diastasis recti", "Restored core support and spinal stability postpartum", "Safe transition back to active exercise and fitness"],
    conditions: ["Symphysis pubis dysfunction (SPD) / pelvic girdle pain", "Prenatal and postnatal lower back pain", "Diastasis recti (abdominal separation)", "Pelvic floor weakness and stress incontinence", "Post-caesarean or vaginal birth scar recovery"],
    process: [
      { step: "01", title: "Safe Assessment", desc: "Gentle, mother-centered physical, alignment, and abdominal check." },
      { step: "02", title: "Core & Pelvic Training", desc: "Targeted, safe prenatal or postpartum exercises for stability." },
      { step: "03", title: "Pain Modulation", desc: "Therapeutic massage and alignment tips for maternal comfort." },
      { step: "04", title: "Functional Rebuilding", desc: "Safe progressive load training to support daily baby care." },
    ],
  },
};

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return { title: "Service – Reactive" };
  return {
    title: `${service.title} – Reactive | ${service.tagline}`,
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
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition-all hover:shadow-[0_8px_24px_rgba(0,167,216,0.5)]"
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
