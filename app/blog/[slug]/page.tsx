import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// In a real app this would come from a CMS / database
const posts: Record<string, {
  title: string;
  category: string;
  date: string;
  author: string;
  authorImage: string;
  readTime: string;
  image: string;
  content: string;
}> = {
  "what-you-should-know-about-refractive-lens-exchange-with-others": {
    title: "What you should know about refractive lens exchange with others.",
    category: "Aesthetics",
    date: "December 18, 2025",
    author: "Ricardo P. Winslow",
    authorImage: "https://framerusercontent.com/images/brafNVtzcB9RUigLb7pJIdLKIfw.png",
    readTime: "5 min read",
    image: "https://framerusercontent.com/images/kVZVWId1Q7OCZUYcQQL9WaZygmE.jpg",
    content: `Physiotherapy is one of the most effective forms of healthcare for a wide range of conditions, from acute sports injuries to chronic pain and neurological rehabilitation. Yet many patients come to us with misconceptions about what physiotherapy involves.

## What Does a Physiotherapist Actually Do?

A physiotherapist is a trained healthcare professional who uses evidence-based techniques to help patients recover movement and function. This includes a comprehensive assessment of your condition, development of a personalised treatment plan, hands-on manual therapy where appropriate, guided exercise rehabilitation, and education about your condition and how to manage it long-term.

## The Importance of Personalised Care

No two patients are the same. Even two people with identical diagnoses — say, a herniated disc at L4–L5 — may require completely different treatment approaches based on their age, lifestyle, fitness level, and personal goals.

At Phisio, we spend a significant part of your initial appointment understanding you as a whole person, not just your injury.

## Evidence-Based Techniques We Use

Modern physiotherapy is grounded in research. Some of the evidence-based techniques our team uses include:

- **Manual therapy**: Joint mobilisation and manipulation to improve range of motion
- **Exercise therapy**: Targeted strengthening and flexibility programmes
- **Dry needling**: For trigger point pain and muscle tightness
- **Gait retraining**: For patients with walking or running pattern issues
- **Hydrotherapy**: Gentle aquatic exercise for pain-sensitive patients

## When Should You See a Physiotherapist?

You don't need to wait until you're in severe pain. Early intervention typically leads to faster recovery and prevents acute injuries from becoming chronic problems.

Consider booking if you have persistent pain lasting more than a few days, reduced range of motion, recurring injuries, post-surgical recovery needs, or if you simply want to improve your physical performance.

## Your Next Step

If you have questions about your condition or want to know whether physiotherapy is right for you, book a free 15-minute phone consultation with one of our team. We are here to help.`,
  },
  "refractive-lens-exchange-vs-lasik-which-one-is-right-for-you": {
    title: "What everyone should understand about knee therapy sessions.",
    category: "Wellness",
    date: "December 18, 2025",
    author: "Javier C. Emerson",
    authorImage: "https://framerusercontent.com/images/t1QOMAtulA7DvOsUx3HooiC5xA.png",
    readTime: "4 min read",
    image: "https://framerusercontent.com/images/QMMFsXTskIclW8xuuUxfuYPnQ.jpg",
    content: `Knee injuries are among the most common conditions we treat at Phisio. Whether you are an athlete who has suffered a ligament tear or someone with chronic osteoarthritis, the knee is incredibly responsive to targeted physiotherapy.

## The Anatomy of the Knee

The knee is one of the body's most complex joints. It relies on a balance of four ligaments (ACL, PCL, MCL, LCL), two menisci, the patellofemoral joint, and surrounding musculature — primarily the quadriceps and hamstrings — for stability and function.

## What a Knee Therapy Session Looks Like

Your first appointment will involve a thorough assessment: range of motion testing, strength assessment, functional movement screening, and a detailed injury history.

From there, your physiotherapist will develop a phased rehabilitation plan that typically progresses through pain management, range of motion restoration, strength rebuilding, and functional or sports-specific training.

## Common Mistakes in Knee Rehabilitation

Many patients make the mistake of stopping therapy as soon as pain subsides. This is a critical error — the absence of pain does not mean the knee is fully rehabilitated. Strength deficits and movement pattern issues may persist and lead to re-injury.

## Recovery Timelines

Recovery timelines vary greatly. A mild MCL sprain may resolve in 4–6 weeks, while an ACL reconstruction typically requires 9–12 months for full return to sport. Your physiotherapist will set realistic milestones and adapt your programme as you progress.`,
  },
  "how-modern-physiotherapy-is-changing-recovery": {
    title: "How modern physiotherapy is changing patient recovery timelines.",
    category: "Recovery",
    date: "December 18, 2025",
    author: "Leonardo F. Ashton",
    authorImage: "https://framerusercontent.com/images/cphnFeLljI5C2dQ9FCpjg8HU.png",
    readTime: "6 min read",
    image: "https://framerusercontent.com/images/kVZVWId1Q7OCZUYcQQL9WaZygmE.jpg",
    content: `The field of physiotherapy has undergone a remarkable transformation over the past two decades. What once relied heavily on passive modalities like heat and ultrasound has evolved into a dynamic, patient-centred discipline driven by neuroscience, exercise science, and technology.

## The Shift to Active Rehabilitation

Research has consistently shown that active rehabilitation — where the patient is an engaged participant in their recovery — produces significantly better outcomes than passive treatment. Modern physiotherapy embraces this by empowering patients with knowledge, home exercise programmes, and self-management strategies.

## Technology's Role

Wearable sensors allow us to analyse movement patterns with extraordinary precision. Force plates, pressure mapping, and motion capture technology give us objective data that was previously only available in elite sports settings.

## Neuroscience-Informed Practice

Our understanding of pain has changed dramatically. We now know that pain is a complex neurological experience, not simply a signal of tissue damage. This has revolutionised how we treat chronic pain conditions — with a focus on education, graded exposure, and central sensitisation management.

## Faster, Safer Recovery

The result of these advances is that patients are recovering faster, with lower re-injury rates, and returning to the activities they love sooner than ever before. At Phisio, we are committed to staying at the forefront of these developments.`,
  },
};

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Blog Post – Phisio" };
  return {
    title: `${post.title} – Phisio Blog`,
    description: post.content.substring(0, 160).replace(/[#*]/g, "").trim(),
  };
}

export function generateStaticParams(): Params[] {
  return Object.keys(posts).map((slug) => ({ slug }));
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      key++;
      elements.push(
        <h2 key={key} className="mt-10 mb-4 text-2xl font-bold text-surface">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("- ")) {
      key++;
      elements.push(
        <li key={key} className="mb-2 ml-4 flex items-start gap-2 text-surface/70">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span dangerouslySetInnerHTML={{ __html: line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
        </li>
      );
    } else if (line.trim() === "") {
      key++;
      elements.push(<br key={key} />);
    } else {
      key++;
      elements.push(
        <p key={key} className="mb-4 text-surface/70 leading-relaxed">
          {line}
        </p>
      );
    }
  }
  return elements;
}

// Need React for JSX
import React from "react";

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-6 pt-32">
        <h1 className="text-4xl font-bold text-surface">Post not found</h1>
        <Link href="/blog" className="mt-6 text-brand hover:underline">← Back to Blog</Link>
      </main>
    );
  }

  const relatedPosts = Object.entries(posts)
    .filter(([s]) => s !== slug)
    .slice(0, 3)
    .map(([s, p]) => ({ slug: s, ...p }));

  return (
    <main>
      {/* ── Article Hero ── */}
      <section className="relative w-full bg-surface min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-16 pt-40 md:px-10">
          <div className="flex flex-wrap gap-3 items-center mb-6">
            <span className="rounded-full bg-brand px-4 py-1.5 text-xs font-bold text-white">{post.category}</span>
            <span className="text-white/40 text-sm">{post.date}</span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/40 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-[32px] leading-[1.2] font-bold tracking-tight text-white sm:text-[44px]">
            {post.title}
          </h1>
        </div>
      </section>

      {/* ── Article Body ── */}
      <section className="w-full bg-white px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl">
          {/* Author */}
          <div className="mb-12 flex items-center gap-4 border-b border-black/8 pb-8">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src={post.authorImage}
                alt={post.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-surface">{post.author}</p>
              <p className="text-surface/50 text-sm">Physiotherapist at Phisio</p>
            </div>
          </div>

          {/* Content */}
          <article className="prose-phisio">
            {renderContent(post.content)}
          </article>

          {/* Back link */}
          <div className="mt-16 border-t border-black/8 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-surface hover:text-brand transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </section>

      {/* ── Related Posts ── */}
      {relatedPosts.length > 0 && (
        <section className="w-full bg-[#f2f2f2] px-6 py-20 md:px-10">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-10 text-[32px] font-bold text-surface">More from the blog</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group flex flex-col overflow-hidden rounded-[20px] bg-white transition-shadow hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)]"
                >
                  <div className="relative h-[180px] overflow-hidden">
                    <Image
                      src={rp.image}
                      alt={rp.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-2.5 p-5">
                    <span className="w-fit rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                      {rp.category}
                    </span>
                    <h3 className="text-base font-bold text-surface group-hover:text-brand transition-colors line-clamp-2">
                      {rp.title}
                    </h3>
                    <span className="text-xs text-surface/40">{rp.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="w-full bg-brand px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-[28px] font-bold text-white sm:text-[36px]">Ready to start your recovery?</h2>
            <p className="mt-2 text-white/70">Book a consultation with one of our expert physiotherapists.</p>
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
