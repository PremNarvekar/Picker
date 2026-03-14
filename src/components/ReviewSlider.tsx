"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { reviews } from "@/data/reviews";

export default function ReviewSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideLeft = useCallback(() => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  }, []);

  const slideRight = useCallback(() => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      slideRight();
    }, 5000); // 5 seconds auto-slide

    return () => clearInterval(timer);
  }, [slideRight]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section className="py-32 px-6 md:px-12 bg-white overflow-hidden relative" id="reviews">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center tracking-tight text-foreground">
          Client <span className="text-primary italic">Stories</span>
        </h2>

        <div className="relative max-w-4xl mx-auto h-[400px] md:h-[300px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_e: any, { offset, velocity }: any) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  slideRight();
                } else if (swipe > swipeConfidenceThreshold) {
                  slideLeft();
                }
              }}
              className="absolute w-full px-4 md:px-16"
            >
              <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center cursor-grab active:cursor-grabbing">
                <div className="flex-shrink-0 text-primary opacity-20 hidden md:block">
                  <Quote size={80} className="fill-current" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1 mb-6 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={20} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl font-light text-foreground leading-relaxed mb-8">
                    "{reviews[index].content}"
                  </p>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">{reviews[index].name}</h4>
                    <p className="text-primary font-medium text-sm mt-1 uppercase tracking-wider">{reviews[index].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-between z-10 pointer-events-none">
            <button
              onClick={slideLeft}
              className="pointer-events-auto w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors transform -translate-x-1/2 md:-translate-x-6"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={slideRight}
              className="pointer-events-auto w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors transform translate-x-1/2 md:translate-x-6"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-primary w-8" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
