export const metadata = {
  title: "FAQ | Picker Packer",
  description: "Frequently Asked Questions about our moving services.",
};

import { HelpCircle } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      question: "How far in advance should I book my move?",
      answer: "We recommend booking your move at least 2-4 weeks in advance, especially during the summer months or at the end of the month, which are peak times for moving.",
    },
    {
      question: "Do you provide packing materials?",
      answer: "Yes, we offer a full range of premium packing materials including custom-sized boxes, bubble wrap, packing paper, and specialized crates for fragile items.",
    },
    {
      question: "Are your moving services insured?",
      answer: "Absolutely. We are fully licensed, bonded, and insured. We offer basic valuation coverage, as well as comprehensive replacement value protection for total peace of mind.",
    },
    {
      question: "How is the cost of the move determined?",
      answer: "For local moves, pricing is typically based on an hourly rate determined by the size of the crew and truck needed. For long-distance moves, pricing is based on the total weight of your items and the distance traveled.",
    },
    {
      question: "Can I leave clothes in my dresser drawers?",
      answer: "Yes, you can leave lightweight clothing in sturdy dressers. However, please remove heavy items, books, fragile objects, or valuable items from all drawers.",
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16 text-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Frequently Asked <span className="text-primary italic">Questions.</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed font-light">
            Everything you need to know about your upcoming move, packing, and our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-start hover:border-black/5 transition-colors">
              <div className="flex-shrink-0 text-primary mt-1">
                <HelpCircle size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">{faq.question}</h3>
                <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h3>
            <p className="text-gray-500 mb-8">Our support team is ready to help you coordinate the perfect move.</p>
            <a href="/contact" className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-sm">
                Contact Support
            </a>
        </div>
      </div>
    </div>
  );
}
