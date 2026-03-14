import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contact Us | Global International Packers And Movers",
  description: "Get a quote for your next move instantly in Mumbai.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-16 pb-8 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-900">Get in <span className="text-primary italic">Touch</span></h1>
        <p className="text-lg text-gray-500 max-w-2xl">
          Whether you&apos;re moving across town or across the country, we are here to help you plan your perfect move.
        </p>
      </div>
      
      {/* Reusing the Contact Section Component */}
      <div>
        <ContactSection />
      </div>
    </div>
  );
}
