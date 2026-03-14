"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Phone, User, ArrowRight, Star, Share2, Bookmark, Copy, ExternalLink, MessageCircle } from "lucide-react";

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

Hi Global International, I would like to get a quote for my upcoming move.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "918816903044";

    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-gray-50 relative overflow-hidden" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center max-w-6xl mx-auto">

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 leading-[1.2]">
                Global International <br />
                <span className="text-primary italic">Packers And Movers</span>
              </h2>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <div className="flex items-center bg-yellow-50 border border-yellow-100 px-3 py-1.5 rounded-full">
                  <span className="text-yellow-700 font-bold mr-1.5">4.7</span>
                  <div className="flex gap-0.5 text-yellow-500">
                    <Star size={14} className="fill-current" />
                  </div>
                  <span className="text-yellow-800 text-sm ml-2 font-semibold"> (105 Reviews)</span>
                </div>
                <span className="text-gray-300 hidden sm:inline">•</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-tight">Packaging Company</span>
              </div>

              <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed font-normal">
                Professional Packers and Movers service in Mumbai offering safe shifting, packing, loading and transportation services near Powai and IIT Bombay.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 text-gray-600 group">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      Call Us Directly
                      <a
                        href="https://wa.me/918816903044"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-600 transition-colors"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle size={20} className="fill-current" />
                      </a>
                    </h4>
                    <p className="font-medium text-lg">+91 88169 03044</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-600 group">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Headquarters</h4>
                    <p className="max-w-xs text-sm leading-relaxed">
                      Bldg first floor 103, Shiv Krupa, Main Gate Rd, near Powai Hospital, opp. IIT Bombay, Gokhale Nagar, Tirandaz, Powai, Mumbai, Maharashtra 400072
                    </p>
                    <p className="text-xs text-primary mt-1 font-semibold">4WG9+4H Mumbai, Maharashtra</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Business Status</h4>
                    <p className="text-emerald-600 font-bold text-sm">Open <span className="text-gray-400 font-normal">· Closes 11:30 PM</span></p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Shiv+Krupa,+Main+Gate+Rd,+Powai+Hospital,+IIT+Bombay,+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:bg-blue-50/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center mb-2 group-hover:bg-primary group-hover:text-white transition-all">
                    <ExternalLink size={20} />
                  </div>
                  <span className="text-xs font-bold text-gray-600 group-hover:text-primary">Directions</span>
                </a>
                <button
                  onClick={() => alert('Bookmarked!')}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:bg-blue-50/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center mb-2 group-hover:bg-primary group-hover:text-white transition-all">
                    <Bookmark size={20} />
                  </div>
                  <span className="text-xs font-bold text-gray-600 group-hover:text-primary">Save</span>
                </button>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: 'Global International Packers And Movers', url: window.location.href });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Link copied!');
                    }
                  }}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:bg-blue-50/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center mb-2 group-hover:bg-primary group-hover:text-white transition-all">
                    <Share2 size={20} />
                  </div>
                  <span className="text-xs font-bold text-gray-600 group-hover:text-primary">Share</span>
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('+91 88169 03044');
                    alert('Phone number copied!');
                  }}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:bg-blue-50/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center mb-2 group-hover:bg-primary group-hover:text-white transition-all">
                    <Copy size={20} />
                  </div>
                  <span className="text-xs font-bold text-gray-600 group-hover:text-primary">Send to Phone</span>
                </button>
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
