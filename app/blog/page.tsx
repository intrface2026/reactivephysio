import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog – Phisio | Physiotherapy Insights & Recovery Tips",
  description:
    "Expert physiotherapy advice, recovery tips, and health insights from the Phisio team. Stay informed and live better.",
};

const categories = ["All", "Wellness", "Recovery", "Aesthetics", "Sports", "Women's Health"];

const posts = [
  {
    id: 1,
    title: "What you should know about refractive lens exchange with others.",
    excerpt:
      "We are a team of licensed physiotherapists dedicated to helping patients restore movement, reduce pain, and prevent long-term injuries.",
    category: "Aesthetics",
    date: "Dec 18, 2025",
    author: "Ricardo P. Winslow",
    readTime: "5 min read",
    image: "https://framerusercontent.com/images/kVZVWId1Q7OCZUYcQQL9WaZygmE.jpg",
    slug: "what-you-should-know-about-refractive-lens-exchange-with-others",
    featured: true,
  },
  {
    id: 2,
    title: "What everyone should understand about knee therapy sessions.",
    excerpt:
      "Our team of certified physiotherapists is committed to improving mobility, relieving pain, and supporting long-term recovery for every patient who walks through our doors.",
    category: "Wellness",
    date: "Dec 18, 2025",
    author: "Javier C. Emerson",
    readTime: "4 min read",
    image: "https://framerusercontent.com/images/QMMFsXTskIclW8xuuUxfuYPnQ.jpg",
    slug: "refractive-lens-exchange-vs-lasik-which-one-is-right-for-you",
    featured: false,
  },
  {
    id: 3,
    title: "How modern physiotherapy is changing patient recovery timelines.",
    excerpt:
      "Physiotherapy has evolved dramatically in recent years. Modern techniques and evidence-based approaches are transforming how quickly patients recover.",
    category: "Recovery",
    date: "Dec 18, 2025",
    author: "Leonardo F. Ashton",
    readTime: "6 min read",
    image: "https://framerusercontent.com/images/kVZVWId1Q7OCZUYcQQL9WaZygmE.jpg",
    slug: "how-modern-physiotherapy-is-changing-recovery",
    featured: false,
  },
  {
    id: 4,
    title: "Five signs you need to see a physiotherapist today.",
    excerpt:
      "Many people live with avoidable pain. Learn the five red-flag signs that indicate it's time to book a physiotherapy appointment.",
    category: "Wellness",
    date: "Nov 30, 2025",
    author: "Mateo R. Albright",
    readTime: "3 min read",
    image: "https://framerusercontent.com/images/QMMFsXTskIclW8xuuUxfuYPnQ.jpg",
    slug: "five-signs-you-need-to-see-a-physiotherapist",
    featured: false,
  },
  {
    id: 5,
    title: "The complete guide to recovering from sports injuries.",
    excerpt:
      "Sports injuries can be devastating. This comprehensive guide walks you through the stages of recovery and what to expect at each phase.",
    category: "Sports",
    date: "Nov 22, 2025",
    author: "Javier C. Emerson",
    readTime: "8 min read",
    image: "https://framerusercontent.com/images/kVZVWId1Q7OCZUYcQQL9WaZygmE.jpg",
    slug: "complete-guide-to-recovering-from-sports-injuries",
    featured: false,
  },
  {
    id: 6,
    title: "Pelvic floor health: what every woman should know.",
    excerpt:
      "Pelvic floor dysfunction affects millions of women globally, yet few talk about it. Our specialists explain what it is, why it matters, and how physiotherapy can help.",
    category: "Women's Health",
    date: "Nov 15, 2025",
    author: "Leonardo F. Ashton",
    readTime: "7 min read",
    image: "https://framerusercontent.com/images/QMMFsXTskIclW8xuuUxfuYPnQ.jpg",
    slug: "pelvic-floor-health-what-every-woman-should-know",
    featured: false,
  },
];

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <main>
      {/* ── Hero ── */}
      <section className="w-full bg-surface pt-40 pb-24 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 mb-6">
            <span className="text-brand font-bold">//</span>
            <span className="text-sm font-semibold tracking-wide text-white">Insights</span>
          </div>
          <h1 className="max-w-2xl text-[40px] leading-[1.1] font-bold tracking-tight text-white sm:text-[56px]">
            Company blog &amp;<br />
            <span className="text-brand">insights</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/60 leading-relaxed">
            Expert physiotherapy advice, recovery tips, and health insights from the Phisio clinical team.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto w-full max-w-7xl">
          {/* Featured Post */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group mb-16 flex flex-col overflow-hidden rounded-[24px] border border-black/8 bg-white transition-shadow hover:shadow-[0_24px_80px_rgba(0,0,0,0.12)] lg:flex-row"
            >
              <div className="relative h-[280px] w-full overflow-hidden lg:h-auto lg:w-1/2">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <span className="absolute left-5 top-5 rounded-full bg-brand px-4 py-1.5 text-xs font-bold text-white">
                  Featured
                </span>
              </div>
              <div className="flex flex-col justify-center gap-5 p-8 lg:w-1/2 lg:p-12">
                <span className="inline-flex w-fit rounded-full bg-brand/10 px-3.5 py-1.5 text-xs font-semibold text-brand">
                  {featured.category}
                </span>
                <h2 className="text-[28px] font-bold leading-snug text-surface group-hover:text-brand transition-colors sm:text-[36px]">
                  {featured.title}
                </h2>
                <p className="text-surface/60 leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center gap-3 text-sm text-surface/40">
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <div className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-surface">
                  Read Article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          )}

          {/* Category Filter – decorative only on static build */}
          <div className="mb-10 flex flex-wrap gap-3">
            {categories.map((c) => (
              <span
                key={c}
                className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  c === "All" ? "bg-surface text-white" : "bg-[#f2f2f2] text-surface hover:bg-brand/10 hover:text-brand"
                }`}
              >
                {c}
              </span>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-[20px] border border-black/8 bg-white transition-shadow hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-3.5 p-6 flex-1">
                  <span className="inline-flex w-fit rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                    {post.category}
                  </span>
                  <h2 className="text-lg font-bold leading-snug text-surface group-hover:text-brand transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-surface/60 text-sm leading-relaxed line-clamp-2 flex-1">{post.excerpt}</p>
                  <div className="mt-auto flex items-center gap-2 text-xs text-surface/40">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
