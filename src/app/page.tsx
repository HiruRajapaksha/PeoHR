import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import ProcessSection from "@/components/home/ProcessSection";
import WhoWeWorkWith from "@/components/home/WhoWeWorkWith";
import BusinessImpact from "@/components/home/BusinessImpact";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "PeoHR Solutions | HR Outsourcing & HR Consulting",
  description:
    "Professional HR outsourcing, payroll management, and HR consulting services designed to help businesses build strong HR systems.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <ProcessSection />
      <WhoWeWorkWith />
      <BusinessImpact />
      <CTASection />
    </>
  );
}
