"use client";

import { motion } from "framer-motion";
import { PackageCheck, Truck, PackageOpen, Home } from "lucide-react";

const steps = [
  {
    icon: PackageOpen,
    title: "Packing",
    desc: "Expert packers carefully wrap and box every item using premium materials.",
    number: "01"
  },
  {
    icon: PackageCheck,
    title: "Loading",
    desc: "Strategic loading ensures maximum safety during transit with zero shifting.",
    number: "02"
  },
  {
    icon: Truck,
    title: "Moving",
    desc: "GPS-tracked fleet ensures on-time delivery with real-time status updates.",
    number: "03"
  },
  {
    icon: Home,
    title: "Delivered",
    desc: "Careful unloading and placement in your new space, exactly how you want it.",
    number: "04"
  },
];

export default function TruckAnimation() {
  return (
    <div className="w-full py-32 px-6 md:px-12 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
          >
            How it <span className="text-primary italic">works.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 font-light"
          >
            Four simple steps to a stress-free move.
          </motion.p>
        </div>
        
        {/* Steps Grid - works for both mobile and desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 relative group hover:border-gray-200 transition-colors"
              >
                {/* Step Number */}
                <span className="text-8xl font-bold text-gray-50 absolute top-4 right-6 select-none group-hover:text-blue-50 transition-colors">
                  {step.number}
                </span>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
