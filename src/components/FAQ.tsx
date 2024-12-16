import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What makes Lumière skincare products unique?",
    answer: "Our products combine natural ingredients with scientific innovation, creating effective formulas that are gentle on your skin. Each product is dermatologist-tested and free from harmful chemicals."
  },
  {
    question: "Are your products suitable for sensitive skin?",
    answer: "Yes, our products are formulated with sensitive skin in mind. We use gentle, non-irritating ingredients and conduct extensive testing to ensure they're safe for all skin types."
  },
  {
    question: "Do you test on animals?",
    answer: "No, we are proudly cruelty-free. We never test our products or ingredients on animals, and we work only with suppliers who share our commitment to ethical practices."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, you can return it for a full refund within 30 days of delivery."
  },
  {
    question: "How long does shipping take?",
    answer: "We process orders within 1-2 business days. Standard shipping typically takes 3-5 business days within the continental US. International shipping times vary by location."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <h2 className="text-3xl font-serif text-center mb-12 text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden transition-all duration-200 ease-in-out"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {item.question}
                </span>
                <span className="ml-4 flex-shrink-0 text-gray-500 dark:text-gray-400">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </span>
              </button>
              
              <div
                className={`transition-all duration-200 ease-in-out ${
                  openIndex === index
                    ? 'max-h-48 opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <p className="px-6 pb-4 text-gray-600 dark:text-gray-300 animate-slideIn">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}