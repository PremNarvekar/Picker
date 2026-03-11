"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Award, Globe } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      title: "Unmatched Protection",
      desc: "Our rigorous packing standards and air-ride fleet ensure zero transit damage.",
      icon: ShieldCheck,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Precision Timing",
      desc: "We operate on your schedule. Real-time GPS tracking keeps you informed.",
      icon: Clock,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Award-Winning Crew",
      desc: "Vetted, full-time professionals trained in high-value asset handling.",
      icon: Award,
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Global Reach",
      desc: "Integrated international logistics network spanning 150+ countries.",
      icon: Globe,
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6"
          >
            Built for the <br/><span className="text-primary italic">modern era.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-400 font-light"
          >
            Redefining logistics with technology, transparency, and trust.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-gray-50/50 rounded-3xl p-8 hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-8`}>
                   <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
