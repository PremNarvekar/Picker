"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Phone, User, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    movingFrom: "",
    movingTo: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, phone, movingFrom, movingTo, date } = formData;
    
    const message = `*New Moving Inquiry*
    
*Name:* ${name}
*Phone:* ${phone}
*From:* ${movingFrom}
*To:* ${movingTo}
*Date:* ${date}

Hi Picker Packer, I would like to get a quote for my upcoming move.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "1234567890"; // In a real app, use the actual business number
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="py-32 px-6 md:px-12 bg-gray-50 relative overflow-hidden" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
                Ready to make <br />
                <span className="text-primary italic">your move?</span>
              </h2>
              <p className="text-xl text-gray-500 mb-10 leading-relaxed font-light">
                Fill out the form with your moving details, and our team will get back to you instantly via WhatsApp with a customized quote.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Call Us Directly</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Headquarters</h4>
                    <p>123 Packer Lane, Suite 100, NY 10001</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 relative"
            >
              {/* Glass subtle highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

              <h3 className="text-2xl font-bold mb-8 text-foreground">Get a free quote</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 block">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <User size={18} />
                      </div>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all outline-none text-foreground font-medium" 
                        placeholder="John Doe" 
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 block">Phone Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <Phone size={18} />
                      </div>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all outline-none text-foreground font-medium" 
                        placeholder="+1 (555) 000-0000" 
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 block">Moving From</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <MapPin size={18} />
                      </div>
                      <input 
                        type="text" 
                        name="movingFrom"
                        required
                        value={formData.movingFrom}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all outline-none text-foreground font-medium" 
                        placeholder="Current Zip / City" 
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 block">Moving To</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <MapPin size={18} />
                      </div>
                      <input 
                        type="text" 
                        name="movingTo"
                        required
                        value={formData.movingTo}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all outline-none text-foreground font-medium" 
                        placeholder="Destination Zip / City" 
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 block">Expected Move Date</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <Calendar size={18} />
                    </div>
                    <input 
                      type="date" 
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all outline-none text-foreground font-medium" 
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 group transition-colors shadow-md"
                >
                  Send via WhatsApp
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
