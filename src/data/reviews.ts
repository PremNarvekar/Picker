export interface Review {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Home Relocation",
    content: "Picker Packer made our house move completely stress-free. The team was punctual, handled our fragile items with immense care, and finished ahead of schedule. Truly premium service.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Office Relocation",
    content: "Moving our entire tech startup was daunting, but they handled the servers, monitors, and desks flawlessly. Minimal downtime and maximum efficiency.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Vehicle Transport",
    content: "Shipped my vintage car across the country. They provided regular updates and the car arrived in pristine condition. Highly recommend their enclosed transport service.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Long Distance Move",
    content: "From packing to unloading 2000 miles away, every step was seamless. The tracking system gave us peace of mind. Excellent communication throughout.",
    rating: 5,
  }
];
