import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ToolsSection from "@/components/ToolsSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CompaniesSection from "@/components/CompaniesSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ToolsSection />
      <FeaturesSection />
      <WhyChooseSection />
      <CompaniesSection />
      <TestimonialSection />
    </>
  );
}
