import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedButton } from "@/components/AnimatedButton";
import { ShieldCheck, Clock, MapPin, DollarSign, ArrowRight, UserCheck, UserPlus, FileKey, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers – Join Nagpur's Premier Home Therapy Network",
  description:
    "Join Reactive as a physical therapist. Earn competitive rates, set your own flexible hours, and enjoy dispute-free billing using our advanced Dual-OTP session verification portal.",
};

const stats = [
  { value: "Flexible", label: "Hours & Locations" },
  { value: "Dispute-Free", label: "Dual-OTP Verification" },
  { value: "Secure", label: "Onboarding Data Privacy" },
  { value: "Premium", label: "Weekly Payout Rates" },
];

const benefits = [
  {
    icon: <DollarSign className="h-6 w-6 text-brand-start" />,
    title: "Premium Earning Potential",
    description:
      "We believe in rewarding expertise. Earn highly competitive weekly payout rates for home-based sessions, fully tracked on your dashboard.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-brand-start" />,
    title: "Zero Billing Disputes",
    description:
      "Our unique Dual-OTP system (check-in and check-out verification codes) secures absolute attendance and billing accountability. Get paid for every single minute of therapy.",
  },
  {
    icon: <Clock className="h-6 w-6 text-brand-start" />,
    title: "Flexible Hours",
    description:
      "Manage your own caseload. Set your availability, choose your daily session limits, and work full-time or part-time around your other commitments.",
  },
  {
    icon: <MapPin className="h-6 w-6 text-brand-start" />,
    title: "Choose Your Service Areas",
    description:
      "Specify your preferred micro-neighborhoods in Nagpur. We prioritize matching you with clients in Ramdaspeth, Dharampeth, Pratap Nagar, or nearby areas to reduce travel time.",
  },
  {
    icon: <FileKey className="h-6 w-6 text-brand-start" />,
    title: "Strict Data Privacy",
    description:
      "Your credentials and personal ID proofs are uploaded to private, secure storage buckets. Once verified, the ID proofs are permanently deleted to ensure your privacy.",
  },
  {
    icon: <Zap className="h-6 w-6 text-brand-start" />,
    title: "Mobile-Optimized Portal",
    description:
      "Log into your mobile portal on-the-go to view client profiles, scheduled sessions, daily itineraries, and enter verification OTPs seamlessly.",
  },
];

const steps = [
  {
    number: "01",
    title: "Apply & Upload Credentials",
    description: "Register on our secure portal and upload your medical qualifications and identity proofs.",
  },
  {
    number: "02",
    title: "Secure Verification Check",
    description: "Our administrative team reviews your credentials. To protect your data, uploaded ID proofs are permanently deleted post-verification.",
  },
  {
    number: "03",
    title: "Set Area & Schedule",
    description: "Input your preferred working hours and target service neighborhoods across Nagpur.",
  },
  {
    number: "04",
    title: "Deliver Expert Care",
    description: "Conduct evidence-based therapy sessions and verify arrivals/departures with the client's OTPs.",
  },
];

export default function CareersPage() {
  return (
    <main className="overflow-hidden">
      {/* ── Hero ── */}
      <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-surface pt-20">
        <div className="absolute inset-0">
          <Image
            src="/doctor-helping-patient-rehabilitation.jpg"
            alt="Physical therapist aiding rehab"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/65 to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-10 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 mb-6 backdrop-blur-md">
            <span className="text-accent font-bold">//</span>
            <span className="text-sm font-semibold tracking-wide text-white uppercase tracking-widest">Join the Network</span>
          </div>
          
          <h1 className="max-w-4xl text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.1] font-semibold tracking-tight text-white">
            Empower your practice.<br />
            <span className="bg-linear-to-r from-brand-start to-brand-end bg-clip-text text-transparent">Deliver expert care.</span>
          </h1>
          
          <p className="mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
            Reactive connects Nagpur's top certified physiotherapists with clients seeking premium, evidence-based rehabilitation at home. Work on your schedule, track earnings transparently, and eliminate billing disputes.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <AnimatedButton
              href="https://portal.reactivephysio.in/auth/physio/register"
              text="Apply Now"
              className="bg-gradient-to-r from-brand-start to-brand-end text-white px-8 py-4 font-bold shadow-lg transition-all"
              icon={<UserPlus className="h-5 w-5" />}
            />
            <a
              href="#why-join"
              className="group flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-4 text-sm font-bold text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              Explore Benefits
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="w-full bg-linear-to-r from-brand-start to-brand-end">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-1">
                <span className="text-[24px] sm:text-[32px] font-bold leading-none text-white tracking-tight">{stat.value}</span>
                <span className="text-xs sm:text-sm font-medium text-white/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits Grid ── */}
      <section id="why-join" className="w-full bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-20 flex flex-col items-center text-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#f9f9f9] px-5 py-2">
              <span className="text-accent font-bold">//</span>
              <span className="text-sm font-semibold tracking-wide text-surface uppercase tracking-widest">Why Reactive</span>
            </div>
            <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.2] font-semibold tracking-tight text-surface">
              Designed around physical therapists
            </h2>
            <p className="max-w-2xl text-sm sm:text-base text-surface/60">
              We leverage modern operational software so you can focus entirely on clinical excellence and patient recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex flex-col gap-4 rounded-[28px] border border-zinc-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-zinc-200/60"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-start/5 text-brand-start">
                  {b.icon}
                </span>
                <h3 className="text-xl font-bold text-surface tracking-tight">{b.title}</h3>
                <p className="text-surface/60 leading-relaxed text-sm sm:text-base">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stepper: How it Works ── */}
      <section className="w-full bg-[#f8f9fa] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-black/10 bg-white px-5 py-2">
                <span className="text-accent font-bold">//</span>
                <span className="text-sm font-semibold tracking-wide text-surface uppercase tracking-widest">The Process</span>
              </div>
              <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.2] font-semibold tracking-tight text-surface">
                Get started in four steps
              </h2>
            </div>
            <p className="max-w-md text-sm sm:text-base text-surface/60 leading-relaxed">
              Our onboarding process is fully digital, rapid, and respects your privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.number} className="relative flex flex-col gap-4 rounded-[28px] bg-white p-8 border border-zinc-100 shadow-xs">
                <span className="text-5xl font-extrabold bg-gradient-to-r from-brand-start/30 to-brand-end/10 bg-clip-text text-transparent select-none">
                  {s.number}
                </span>
                <h3 className="text-lg font-bold text-surface tracking-tight">{s.title}</h3>
                <p className="text-surface/60 leading-relaxed text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full bg-linear-to-r from-brand-start to-brand-end px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 bg-white/5 backdrop-blur-md">
            <span className="text-accent font-bold">//</span>
            <span className="text-sm font-semibold tracking-wide text-white uppercase tracking-widest">Apply Today</span>
          </div>
          <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.2] font-semibold tracking-tight text-white max-w-2xl">
            Ready to elevate your therapy practice?
          </h2>
          <p className="max-w-lg text-white/70 text-sm leading-relaxed">
            Apply as a partner today and start accepting home-care client visits in your preferred Nagpur neighborhoods on your own schedule.
          </p>
          <AnimatedButton
            href="https://portal.reactivephysio.in/auth/physio/register"
            text="Apply as a Physio"
            className="bg-white hover:bg-zinc-100 !text-black transition-all border-0 shadow-md px-8 py-4 font-bold"
            icon={<UserCheck className="h-5 w-5 text-black" />}
          />
        </div>
      </section>
    </main>
  );
}
