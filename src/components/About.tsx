import React from 'react';
import { Leaf, Shield, Heart } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "We source only the finest natural ingredients, ensuring each product is gentle yet effective."
  },
  {
    icon: Shield,
    title: "Clean Beauty",
    description: "Our commitment to clean beauty means no harmful chemicals or synthetic additives."
  },
  {
    icon: Heart,
    title: "Cruelty Free",
    description: "We never test on animals and work only with ethical suppliers who share our values."
  }
];

export function About() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slideIn">
            <h2 className="text-3xl font-serif text-gray-900 dark:text-white">
              Clean Beauty for 
              <span className="block text-4xl mt-2">Radiant Skin</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              At Lumière, we believe in the power of nature combined with scientific innovation. 
              Our mission is to create skincare products that enhance your natural beauty while 
              being gentle on your skin and the environment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">98%</span>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Natural Ingredients</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">100%</span>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Cruelty Free</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={value.title}
                  className="flex items-start space-x-4 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg animate-slideIn"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="bg-gray-900 dark:bg-white p-3 rounded-full">
                    <Icon className="h-6 w-6 text-white dark:text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}