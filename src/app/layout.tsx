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
  title: "Picker Packer | Premium Moving Services",
  description: "High-end residential and commercial moving services. Experience a stress-free transition with Picker Packer.",
  openGraph: {
    title: "Picker Packer | Premium Moving Services",
    description: "High-end residential and commercial moving services.",
    type: "website",
    locale: "en_US",
    siteName: "Picker Packer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Picker Packer | Premium Moving Services",
    description: "High-end residential and commercial moving services.",
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
