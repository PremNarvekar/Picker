import HeroScrollSequence from "@/components/HeroScrollSequence";
import FeaturesGrid from "@/components/FeaturesGrid";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ReviewSlider from "@/components/ReviewSlider";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Global International Packers And Movers | Packers And Movers In Mumbai",
  description: "Experience cinematic moving with Global International.",
};

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
