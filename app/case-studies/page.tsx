import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies – Phisio | Real Patient Recovery Stories",
  description:
    "Explore real recovery stories from Phisio patients — from elite athletes to everyday people reclaiming their movement and quality of life.",
};

const caseStudies = [
  {
    id: 1,
    title: "ACL Recovery in 12 Weeks",
    category: "Sports Rehabilitation",
    patient: "Professional Footballer",
    outcome: "Full return to competitive play",
    duration: "12 weeks",
    sessions: 24,
    image: "https://framerusercontent.com/images/fd7H4g2SyDOLmrGUUi05FNqLbw.jpg",
    excerpt:
      "A professional midfielder faced a career-threatening ACL tear. Our sports rehab team developed a sport-specific programme that returned him to full training in record time.",
    tags: ["ACL", "Football", "Sports"],
  },
  {
    id: 2,
    title: "Chronic Back Pain Resolution",
    category: "Pain Management",
    patient: "Office Professional, 42",
    outcome: "95% pain reduction, full mobility restored",
    duration: "8 weeks",
    sessions: 16,
    image: "https://framerusercontent.com/images/3ReT5xeX5z4tvOwGXq4uK0APU4.jpg",
    excerpt:
      "After years of chronic lower back pain exacerbated by desk work, this patient regained full mobility through a combination of manual therapy and targeted corrective exercises.",
    tags: ["Back Pain", "Manual Therapy", "Chronic"],
  },
  {
    id: 3,
    title: "Post-Stroke Gait Rehabilitation",
    category: "Gait Training",
    patient: "Retired Teacher, 68",
    outcome: "Independent walking restored",
    duration: "16 weeks",
    sessions: 32,
    image: "https://framerusercontent.com/images/WYxFJy7m3eXg59BXG2MbDNE4M.jpg",
    excerpt:
      "Following a mild stroke, this patient was unable to walk without assistance. Through progressive gait training and neurological rehabilitation, she regained independent mobility.",
    tags: ["Stroke", "Gait", "Neurological"],
  },
  {
    id: 4,
    title: "Postnatal Pelvic Floor Recovery",
    category: "Women's Therapy",
    patient: "New Mother, 31",
    outcome: "Full pelvic floor function restored",
    duration: "10 weeks",
    sessions: 10,
    image: "https://framerusercontent.com/images/fd7H4g2SyDOLmrGUUi05FNqLbw.jpg",
    excerpt:
      "Following a difficult delivery, this new mother experienced significant pelvic floor dysfunction. Our women's health specialist designed a comprehensive recovery programme.",
    tags: ["Pelvic Floor", "Postnatal", "Women's Health"],
  },
  {
    id: 5,
    title: "Young Athlete Shoulder Rehabilitation",
    category: "Sports Rehabilitation",
    patient: "Competitive Swimmer, 17",
    outcome: "Full return to competitive swimming",
    duration: "10 weeks",
    sessions: 20,
    image: "https://framerusercontent.com/images/3ReT5xeX5z4tvOwGXq4uK0APU4.jpg",
    excerpt:
      "A promising young swimmer suffered a rotator cuff impingement that threatened her season. Sport-specific rehab with biomechanical analysis restored her performance.",
    tags: ["Shoulder", "Swimming", "Youth"],
  },
  {
    id: 6,
    title: "Hip Replacement Recovery",
    category: "Post-Surgical Rehab",
    patient: "Retired Engineer, 72",
    outcome: "Full independence restored in 14 weeks",
    duration: "14 weeks",
    sessions: 28,
    image: "https://framerusercontent.com/images/WYxFJy7m3eXg59BXG2MbDNE4M.jpg",
    excerpt:
      "Post total hip replacement, this patient progressed from assisted walking to hiking — exceeding both his and his surgeon's expectations for recovery speed.",
    tags: ["Hip", "Surgery", "Older Adults"],
  },
];

const stats = [
  { value: "500+", label: "Patients Treated" },
  { value: "97%", label: "Positive Outcomes" },
  { value: "8.2", label: "Avg. Recovery Weeks" },
  { value: "4.9/5", label: "Patient Rating" },
];

export default function CaseStudiesPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative w-full bg-surface min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://framerusercontent.com/images/xsHrPTPeNjbWr67tG8wdR5p0jTo.jpg"
            alt="Physiotherapy treatment"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 md:px-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 mb-6">
            <span className="text-brand font-bold">//</span>
            <span className="text-sm font-semibold tracking-wide text-white">Case Studies</span>
          </div>
          <h1 className="max-w-3xl text-[40px] leading-[1.1] font-bold tracking-tight text-white sm:text-[56px]">
            Real recoveries,<br />
            <span className="text-brand">real results</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/60 leading-relaxed">
            Each case study demonstrates our evidence-based approach and the transformative impact of expert physiotherapy on our patients' lives.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="w-full bg-brand">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <span className="text-[44px] font-bold text-white block leading-none">{s.value}</span>
                <span className="text-sm text-white/70 mt-1 block">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies Grid ── */}
      <section className="w-full bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <article key={cs.id} className="group flex flex-col overflow-hidden rounded-[20px] border border-black/8 bg-white transition-shadow hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-brand px-3.5 py-1.5 text-xs font-semibold text-white">
                    {cs.category}
                  </span>
                </div>
                <div className="flex flex-col gap-4 p-7 flex-1">
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-brand/8 px-3 py-1 text-xs font-semibold text-brand">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold text-surface group-hover:text-brand transition-colors">
                    {cs.title}
                  </h2>
                  <p className="text-surface/60 text-sm leading-relaxed flex-1">{cs.excerpt}</p>

                  {/* Outcome Metrics */}
                  <div className="mt-2 rounded-xl bg-[#f8f8f8] p-4 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-surface/50 font-medium">Patient</span>
                      <span className="text-surface font-semibold">{cs.patient}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-surface/50 font-medium">Duration</span>
                      <span className="text-surface font-semibold">{cs.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-surface/50 font-medium">Outcome</span>
                      <span className="text-brand font-semibold text-right max-w-[180px]">{cs.outcome}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial Pull Quote ── */}
      <section className="w-full bg-[#f2f2f2] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-brand text-[80px] leading-none font-serif mb-4">&ldquo;</p>
          <blockquote className="text-[24px] font-bold leading-relaxed text-surface sm:text-[32px]">
            I walked in barely able to move. Six weeks later I ran my first 5K — the Phisio team gave me my life back.
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src="https://framerusercontent.com/images/BnLllAEXMitvWmh3OnOxe4QLA6Q.png"
                alt="Lorenzo S. Whitman"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-bold text-surface">Lorenzo S. Whitman</p>
              <p className="text-surface/50 text-sm">Sports Rehabilitation Patient</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full bg-surface px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-[32px] font-bold text-white sm:text-[40px]">Write your own recovery story</h2>
            <p className="mt-2 text-white/50 text-lg">Book your initial assessment and let us build a plan for you.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition-all hover:shadow-[0_8px_24px_rgba(197,110,94,0.5)]"
          >
            Book An Assessment
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
