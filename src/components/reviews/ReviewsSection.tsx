import React from 'react';
import { ReviewsCarousel } from './ReviewsCarousel';

export function ReviewsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-12 text-gray-900 dark:text-white">
          What Our Customers Say
        </h2>
        <ReviewsCarousel />
      </div>
    </section>
  );
}