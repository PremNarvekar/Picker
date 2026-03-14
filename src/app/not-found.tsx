import type { Metadata } from "next";
import Link from "next/link";
import { Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Not Found | Global International Packers And Movers",
  description: "Page not found.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="relative mb-12">
        <h1 className="text-9xl md:text-[150px] font-bold text-gray-200 tracking-tighter">404</h1>
        <div className="absolute inset-0 flex items-center justify-center animate-bounce text-primary">
          <Truck size={80} strokeWidth={1} />
        </div>
      </div>
      
      <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">
        Looks like we took a <span className="text-primary italic">wrong turn.</span>
      </h2>
      
      <p className="text-xl text-gray-500 max-w-lg mb-12">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <Link 
        href="/"
        className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-md flex items-center gap-2 group"
      >
        <Truck className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Return to Home Base
      </Link>
    </div>
  );
}
