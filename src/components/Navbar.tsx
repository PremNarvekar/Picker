"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Package, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const useDarkText = scrolled || !isHomePage || mobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          useDarkText
            ? "bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 z-[110] relative group">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300 ${
              useDarkText ? "bg-primary" : "bg-white/20"
            }`}>
              <Package className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
              useDarkText ? "text-foreground" : "text-white"
            }`}>
              Picker Packer
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? useDarkText ? "text-primary bg-blue-50" : "text-white bg-white/20"
                      : useDarkText
                        ? "text-gray-600 hover:text-foreground hover:bg-gray-50"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={scrollToContact}
            className={`hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 group ${
              useDarkText
                ? "bg-primary hover:bg-primary/90 text-white"
                : "bg-white text-foreground hover:bg-white/90"
            }`}
          >
            Book Move
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-[110] relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col justify-center items-center gap-[5px]">
              <span className={`block h-[2px] w-6 rounded-full transition-all duration-300 ${
                mobileMenuOpen
                  ? "rotate-45 translate-y-[7px] bg-foreground"
                  : useDarkText ? "bg-foreground" : "bg-white"
              }`} />
              <span className={`block h-[2px] w-4 rounded-full transition-all duration-300 ${
                mobileMenuOpen
                  ? "opacity-0 w-0"
                  : useDarkText ? "bg-foreground" : "bg-white"
              }`} />
              <span className={`block h-[2px] w-6 rounded-full transition-all duration-300 ${
                mobileMenuOpen
                  ? "-rotate-45 -translate-y-[7px] bg-foreground"
                  : useDarkText ? "bg-foreground" : "bg-white"
              }`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu — Completely separate from nav, covers everything */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Full screen white backdrop at highest z-index */}
            <motion.div
              initial={{ clipPath: "circle(0% at calc(100% - 40px) 32px)" }}
              animate={{ clipPath: "circle(150% at calc(100% - 40px) 32px)" }}
              exit={{ clipPath: "circle(0% at calc(100% - 40px) 32px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 bg-white z-[99] lg:hidden"
            >
              <div className="flex flex-col h-full pt-28 pb-10 px-8">
                <div className="flex-1 flex flex-col gap-1">
                  {navLinks.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.06, duration: 0.4, ease: "easeOut" }}
                      >
                        <Link
                          onClick={() => setMobileMenuOpen(false)}
                          href={link.href}
                          className={`block text-4xl font-bold py-3 tracking-tight transition-colors ${
                            isActive ? "text-primary" : "text-foreground hover:text-primary"
                          }`}
                        >
                          {link.label}
                          {isActive && <span className="text-primary ml-2">·</span>}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="space-y-4"
                >
                  <button
                    onClick={scrollToContact}
                    className="w-full bg-primary text-white py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-2 group active:scale-[0.98] transition-transform"
                  >
                    Book a Move
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-gray-400 text-xs">
                    Premium moving solutions, nationwide.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
