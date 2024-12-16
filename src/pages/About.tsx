import React from 'react';

export function About() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-4xl font-serif text-gray-900 dark:text-white">Our Story</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Founded in 2020, Lumière was born from a passion for combining natural skincare with scientific innovation. 
              Our journey began with a simple belief: everyone deserves access to effective, gentle skincare that works in harmony with their skin.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Today, we continue to pioneer new formulations that blend the best of nature with cutting-edge dermatological research, 
              creating products that deliver real results while maintaining our commitment to sustainability and ethical practices.
            </p>
          </div>
          <div className="animate-fadeIn" style={{ animationDelay: '150ms' }}>
            <img
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3"
              alt="Our laboratory"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}