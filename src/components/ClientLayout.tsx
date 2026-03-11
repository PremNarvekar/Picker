"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  // Fallback to ensure loader doesn't get stuck in dev environments
  useEffect(() => {
    const backupTimeout = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(backupTimeout);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    </>
  );
}
