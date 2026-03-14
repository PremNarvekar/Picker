import { MapPin, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Locations | Global International Packers And Movers",
  description: "View our coverage map and regional service centers in Mumbai.",
};

export default function LocationsPage() {
  const locations = [
    {
      city: "Mumbai Headquarters",
      address: "Bldg first floor 103, Shiv Krupa, Main Gate Rd, near Powai Hospital, opp. IIT Bombay, Gokhale Nagar, Tirandaz",
      region: "Powai, Mumbai, Maharashtra 400072",
      phone: "+91 88169 03044",
      email: "contact@globalinternational.com"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16 text-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Our <span className="text-primary italic">Locations.</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed font-light">
            Providing premium moving solutions coast-to-coast through our integrated national network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {locations.map((loc, index) => (
            <div key={index} className="bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:border-black/10 transition-colors">
              <div className="flex items-center gap-3 text-primary mb-6">
                <MapPin size={24} />
                <h3 className="text-2xl font-bold text-foreground">{loc.city}</h3>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <p className="font-medium text-lg">{loc.address}<br/>{loc.region}</p>
                
                <div className="pt-6 border-t border-gray-200 space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-gray-400" />
                    <span>{loc.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-gray-400" />
                    <span className="text-primary font-medium">{loc.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 max-w-4xl mx-auto text-center border-t border-gray-100 pt-16">
            <h3 className="text-2xl font-bold text-foreground mb-4">Moving internationally?</h3>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">We accommodate global relocations through our trusted international shipping partners. Contact logistics support for international quotes.</p>
            <a href="/contact" className="inline-block bg-white text-foreground border border-gray-200 hover:border-black/20 hover:bg-gray-50 px-8 py-3 rounded-full font-semibold transition-colors shadow-sm">
                Get International Quote
            </a>
        </div>
      </div>
    </div>
  );
}
