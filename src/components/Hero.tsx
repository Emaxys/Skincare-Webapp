import React from 'react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3"
          alt="Skincare products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Discover Your Natural Radiance
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Clean, effective skincare powered by science and nature.
          </p>
          <button className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-8 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}