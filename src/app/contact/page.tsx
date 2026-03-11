export const metadata = {
  title: "Contact Us | Picker Packer",
  description: "Get a quote for your next move instantly.",
};

import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 md:px-12 py-12 text-center text-foreground">
        <h1 className="text-5xl font-bold mb-6 tracking-tight">Get in <span className="text-primary">Touch</span></h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Whether you're moving across town or across the country, we are here to help you plan your perfect move.
        </p>
      </div>
      
      {/* Reusing the Contact Section Component */}
      <div className="-mt-16">
        <ContactSection />
      </div>
    </div>
  );
}
