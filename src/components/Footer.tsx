import Link from "next/link";
import { Package } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-primary mb-4">
              <Package className="w-8 h-8 text-accent" />
              Global International<span className="text-accent">.</span>
            </Link>
            <p className="text-gray-500 max-w-sm mt-4 text-sm leading-relaxed">
              Professional Packers and Movers service in Mumbai offering safe shifting, packing, loading and transportation services near Powai and IIT Bombay.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/services" className="hover:text-primary transition-colors">Home Shifting</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Office Relocation</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Vehicle Transport</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Warehouse Storage</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/locations" className="hover:text-primary transition-colors">Locations</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs justify-center text-gray-400">
          <p>© {new Date().getFullYear()} Global International Packers And Movers. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <span>Powered by Next.js</span>
            <span>Made with Care</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
