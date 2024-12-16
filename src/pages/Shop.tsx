import React from 'react';
import { Products } from '../components/Products';

export function Shop() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-serif text-gray-900 dark:text-white mb-8">Our Products</h1>
        <Products />
      </div>
    </div>
  );
}