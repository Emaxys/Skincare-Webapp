import React from 'react';

const ingredients = [
  {
    name: 'Hyaluronic Acid',
    description: 'A powerful humectant that can hold up to 1000x its weight in water, providing deep hydration.',
    source: 'Biotechnology',
    benefits: ['Hydration', 'Plumping', 'Fine line reduction']
  },
  {
    name: 'Niacinamide',
    description: 'Vitamin B3 that helps improve skin barrier function and reduce inflammation.',
    source: 'Synthetic',
    benefits: ['Pore reduction', 'Oil control', 'Brightening']
  },
  {
    name: 'Vitamin C',
    description: 'Potent antioxidant that helps protect against environmental damage and promotes collagen production.',
    source: 'Natural & Synthetic',
    benefits: ['Brightening', 'Anti-aging', 'Protection']
  }
];

export function Ingredients() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-serif text-gray-900 dark:text-white mb-12">Our Key Ingredients</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <div 
              key={ingredient.name}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">{ingredient.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{ingredient.description}</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">Source: {ingredient.source}</p>
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Benefits:</p>
                  <div className="flex flex-wrap gap-2">
                    {ingredient.benefits.map(benefit => (
                      <span 
                        key={benefit}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}