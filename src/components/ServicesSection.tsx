"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-gray-50 relative overflow-hidden" id="services">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-blue-50/50 rounded-l-[100px] -z-10 transform translate-x-1/4"></div>

      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
          >
            Premium <span className="text-primary italic">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl"
          >
            From delicate antiques to complete corporate relocations, our expertise covers every aspect of moving.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-default">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                }}
                className="bg-white p-10 rounded-2xl border border-gray-100 hover:border-black/10 hover:shadow-xl transition-all group relative overflow-hidden"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed font-light">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center text-primary font-medium opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Learn more
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
