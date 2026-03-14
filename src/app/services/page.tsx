import ServicesSection from "@/components/ServicesSection";

export const metadata = {
  title: "Services | Global International Packers And Movers",
  description: "Explore our premium moving services in Mumbai.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Comprehensive <br/><span className="text-primary italic">Relocation Services.</span>
          </h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            From studio apartments to corporate headquarters, we offer end-to-end moving solutions tailored to your timeline and budget.
          </p>
        </div>
      </div>
      <ServicesSection />
    </div>
  );
}
