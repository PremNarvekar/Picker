import { Truck, Building, Car, Package, Warehouse, LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: "home-shifting",
    title: "Home Shifting",
    description: "Stress-free residential moving with comprehensive packing, safe transport, and careful unpacking at your new home.",
    icon: Truck,
  },
  {
    id: "office-relocation",
    title: "Office Relocation",
    description: "Minimize downtime with our efficient corporate relocation services. We handle delicate electronics and heavy furniture safely.",
    icon: Building,
  },
  {
    id: "vehicle-transport",
    title: "Vehicle Transport",
    description: "Secure, enclosed or open transport for your cars and motorcycles, ensuring they arrive without a scratch.",
    icon: Car,
  },
  {
    id: "packing-services",
    title: "Packing Services",
    description: "Professional packing using premium materials to safeguard your most treasured and fragile belongings.",
    icon: Package,
  },
  {
    id: "warehouse-storage",
    title: "Warehouse Storage",
    description: "Climate-controlled, secure storage facilities for short-term or long-term safekeeping of your items.",
    icon: Warehouse,
  }
];
