import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { AnimatePresence } from "framer-motion";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Global International Packers And Movers | Packers And Movers In Mumbai",
  description: "Professional Packers and Movers service in Mumbai offering safe shifting, packing, loading and transportation services near Powai and IIT Bombay.",
  openGraph: {
    title: "Global International Packers And Movers | Packers And Movers In Mumbai",
    description: "Professional Packers and Movers service in Mumbai offering safe shifting, packing, loading and transportation services near Powai and IIT Bombay.",
    type: "website",
    locale: "en_US",
    siteName: "Global International Packers And Movers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global International Packers And Movers | Packers And Movers In Mumbai",
    description: "Professional Packers and Movers service in Mumbai offering safe shifting, packing, loading and transportation services near Powai and IIT Bombay.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${outfit.variable} antialiased bg-white text-foreground selection:bg-primary selection:text-white`}>
        <ClientLayout>
            {children}
        </ClientLayout>
      </body>
    </html>
  );
}
