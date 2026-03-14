import Image from "next/image";
import { CheckCircle2, TrendingUp, Users, Target } from "lucide-react";

export const metadata = {
  title: "About Us | Global International Packers And Movers",
  description: "Learn more about Global International, your professional moving partner in Mumbai.",
};

export default function AboutPage() {
  const values = [
    "White-glove Service",
    "Punctuality Guaranteed",
    "Transparent Pricing",
    "Fully Insured & Licensed",
    "Eco-Friendly Packing Materials",
    "24/7 Client Support",
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-20 text-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Setting the Standard in <span className="text-primary italic">Relocation.</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed font-light">
            Founded on the principle that moving shouldn't be stressful, Global International has redefined the relocation experience. We combine logistical expertise with uncompromising care.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-50 aspect-video rounded-3xl flex items-center justify-center p-12 text-center text-gray-400 border border-gray-100 italic">
              (High quality team or truck photo will be placed here)
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Core Values</h2>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Every item we touch is treated as if it were our own. From rigorous staff training to outfitting our fleet with air-ride suspension, every detail is considered to ensure a perfect move.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* New Lengthy Timeline / Stats Section */}
        <div className="mt-40 border-t border-gray-100 pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
               <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground tracking-tight">
                 A decade of <br/><span className="text-primary italic">excellence.</span>
               </h2>
               <p className="text-xl text-gray-500 leading-relaxed mb-8">
                 Since our inception in 2014, we've completed over 50,000 successful moves across the nation, maintaining a 99.8% damage-free track record through specialized equipment and rigorous training programs.
               </p>
               <div className="grid grid-cols-2 gap-8 mt-12">
                 <div>
                    <div className="text-5xl font-bold text-primary mb-2">50k+</div>
                    <div className="text-gray-500 font-medium">Moves Completed</div>
                 </div>
                 <div>
                    <div className="text-5xl font-bold text-primary mb-2">99%</div>
                    <div className="text-gray-500 font-medium">Client Satisfaction</div>
                 </div>
                 <div>
                    <div className="text-5xl font-bold text-primary mb-2">150</div>
                    <div className="text-gray-500 font-medium">Fleet Vehicles</div>
                 </div>
                 <div>
                    <div className="text-5xl font-bold text-primary mb-2">400+</div>
                    <div className="text-gray-500 font-medium">Expert Packers</div>
                 </div>
               </div>
            </div>
            
            <div className="space-y-12">
               <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-primary">
                    <TrendingUp size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Continuous Growth</h3>
                    <p className="text-gray-500 leading-relaxed">Expanding our regional footprint year over year to bring premium moving standards to every major metropolitan area.</p>
                  </div>
               </div>
               <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 text-slate-600">
                    <Users size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Community Hubs</h3>
                    <p className="text-gray-500 leading-relaxed">Building local operational centers that provide rapid response times and deep area knowledge for intricate logistical puzzles.</p>
                  </div>
               </div>
               <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-primary">
                    <Target size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Zero Compromise</h3>
                    <p className="text-gray-500 leading-relaxed">Our unified operational protocol guarantees the same meticulous, white-glove service standard from Manhattan to Malibu.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
