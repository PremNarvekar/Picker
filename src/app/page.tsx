export const metadata = {
  title: "Picker Packer | Home",
  description: "Experience cinematic moving with Picker Packer.",
};

import HeroScrollSequence from "@/components/HeroScrollSequence";
import FeaturesGrid from "@/components/FeaturesGrid";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ReviewSlider from "@/components/ReviewSlider";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroScrollSequence />
      <FeaturesGrid />
      <ServicesSection />
      <ProcessSection />
      <ReviewSlider />
      <ContactSection />
    </>
  );
}
