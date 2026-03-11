"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function HeroScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [frameCount, setFrameCount] = useState(120);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 177 : 120;
    const folder = isMobile ? "packer-mobile" : "packer";
    
    setFrameCount(count);

    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= count; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(3, "0");
      img.src = `/${folder}/ezgif-frame-${frameNumber}.jpg`;
      img.onload = () => {
        loadedCount++;
        setProgress(Math.round((loadedCount / count) * 100));
        if (loadedCount === count) {
          setImagesLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return;

    const renderFrame = (index: number) => {
      const activeIdx = Math.min(Math.max(Math.floor(index), 0), frameCount - 1);
      const img = images[activeIdx];
      
      if (!img || !img.complete || img.naturalWidth === 0) return;

      // Get CSS pixel dimensions
      const cssW = canvas.clientWidth;
      const cssH = canvas.clientHeight;

      const imgAspectRatio = img.naturalWidth / img.naturalHeight;
      const viewAspectRatio = cssW / cssH;

      let drawWidth: number;
      let drawHeight: number;

      // Cover fit: scale image to cover the entire viewport, then center
      if (viewAspectRatio > imgAspectRatio) {
        drawWidth = cssW;
        drawHeight = cssW / imgAspectRatio;
      } else {
        drawHeight = cssH;
        drawWidth = cssH * imgAspectRatio;
      }

      const offsetX = (cssW - drawWidth) / 2;
      const offsetY = (cssH - drawHeight) / 2;

      // Clear and draw at CSS pixel scale (canvas is already DPR-scaled)
      context.clearRect(0, 0, cssW, cssH);
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const cssW = canvas.clientWidth;
      const cssH = canvas.clientHeight;

      // Set the actual pixel buffer to DPR-scaled size for sharpness
      canvas.width = cssW * dpr;
      canvas.height = cssH * dpr;

      // Reset transform and scale the context so we can draw in CSS pixels
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      renderFrame(frameIndex.get());
    };

    const unsubscribe = frameIndex.on("change", (latest) => {
      renderFrame(latest);
    });

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // Draw initial frame

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      unsubscribe();
    };
  }, [imagesLoaded, images, frameIndex, frameCount]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {!imagesLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111] z-20 text-white gap-4">
            <div className="w-16 h-16 border-4 border-gray-700 border-t-primary rounded-full animate-spin"></div>
            <p className="font-medium tracking-widest uppercase text-sm">{progress}% Loaded</p>
          </div>
        )}

        {/* Rounded container for the video/canvas */}
        <div className="absolute inset-x-0 top-0 bottom-0 overflow-hidden" style={{ borderRadius: '0 0 40px 40px' }}>
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-0"
          />
          
          {/* Cinematic Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10 pointer-events-none"></div>
        </div>

        {/* Text Content - centered in the viewport */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 md:px-12 z-20 pointer-events-none"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 0, 0, 1]) }}
        >
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 text-center tracking-tighter"
          >
            Move With <br className="md:hidden" /><span className="text-primary tracking-tight">Precision.</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-200 text-center max-w-2xl font-light tracking-wide mb-10"
          >
            Experience the seamless transition. Scroll to unpack.
          </motion.p>

          {/* Floating CTA Button at bottom center */}
          <motion.a
            href="#contact"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="pointer-events-auto bg-white/15 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full text-base font-semibold hover:bg-white/25 transition-all cursor-pointer flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              else window.location.href = "/contact";
            }}
          >
            Book a Move
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
