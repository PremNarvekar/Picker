"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-8">
        <AlertTriangle size={48} strokeWidth={1.5} />
      </div>
      
      <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">
        Something went <span className="text-red-500 italic">wrong.</span>
      </h2>
      
      <p className="text-xl text-gray-500 max-w-lg mb-12">
        We encountered an unexpected error while trying to process your request. Our team has been notified.
      </p>
      
      <div className="flex gap-4 flex-col sm:flex-row">
        <button
          onClick={() => reset()}
          className="bg-foreground hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-transform transform hover:scale-105 active:scale-95 shadow-md flex items-center justify-center gap-2 group"
        >
          <RotateCcw className="w-5 h-5 group-hover:-rotate-90 transition-transform duration-500" />
          Try Again
        </button>
        <Link 
          href="/"
          className="bg-gray-100 hover:bg-gray-200 text-foreground px-8 py-4 rounded-full font-semibold transition-colors flex items-center justify-center"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
