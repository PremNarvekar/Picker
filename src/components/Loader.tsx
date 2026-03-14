"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // Simulate loading progress
    const duration = 2500; // 2.5 seconds total loading time
    const intervalTime = 25;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          document.body.style.overflow = ""; // restore scrolling
          onComplete();
        }, 400); // slight delay after 100% before firing complete
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} 
      className="fixed inset-0 z-[100] bg-blue-600 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="flex items-center gap-12 sm:gap-24 w-full max-w-4xl px-8">
        
        {/* Truck Container */}
        <div className="relative w-48 h-32 sm:w-64 sm:h-40 flex-shrink-0">
            {/* The Truck Outline (Background layer) */}
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              className="absolute inset-0 w-full h-full text-white/20 stroke-current stroke-[0.5]"
            >
              <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
              <path d="M14 9h4l4 4v5h-3" />
              <circle cx="7" cy="18" r="2" />
              <circle cx="17" cy="18" r="2" />
            </svg>

            {/* The Water Fill (Clipped by the changing height based on progress) */}
            <div 
              className="absolute bottom-0 left-0 w-full overflow-hidden transition-all duration-75"
              style={{ height: `${progress}%` }}
            >
              {/* The filled SVG sitting exactly at the bottom */}
              <div className="absolute bottom-0 w-48 h-32 sm:w-64 sm:h-40">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-full h-full text-white"
                >
                  <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
                  <path d="M14 9h4l4 4v5h-3" />
                  <circle cx="7" cy="18" r="2" />
                  <circle cx="17" cy="18" r="2" />
                </svg>
              </div>

              {/* Animated Wave sitting on top of the "water line" */}
              <motion.div
                 animate={{ x: ["-50%", "0%"] }}
                 transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
                 className="absolute top-0 w-[200%] h-4 -translate-y-1/2 opacity-50 flex"
              >
                  {/* CSS waves created with radial gradients for a smooth sine-wave look */}
                   <div className="w-1/2 h-full bg-[radial-gradient(ellipse_at_top,_transparent_50%,_white_51%)] bg-[length:20px_100%]"></div>
                   <div className="w-1/2 h-full bg-[radial-gradient(ellipse_at_top,_transparent_50%,_white_51%)] bg-[length:20px_100%]"></div>
              </motion.div>
            </div>
        </div>

        {/* Counter */}
        <div className="flex-1 flex justify-end">
          <div className="text-6xl sm:text-8xl md:text-9xl font-bold text-white tracking-tighter tabular-nums flex items-baseline">
            {progress}<span className="text-3xl sm:text-5xl md:text-6xl text-white/50">%</span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
