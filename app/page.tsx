import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServiceSection } from "@/components/ServiceSection";
import { ChooseUsSection } from "@/components/ChooseUsSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { TeamSection } from "@/components/TeamSection";
import { BlogSection } from "@/components/BlogSection";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ChooseUsSection />
      <CaseStudySection />
      <TestimonialSection />
      <TeamSection />
      <BlogSection />
      <CTASection />
    </main>
  );
}
