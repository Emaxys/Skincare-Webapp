import React from 'react';
import { Leaf, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "Carefully sourced botanical ingredients that work in harmony with your skin.",
    bgColor: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-600 dark:text-green-400"
  },
  {
    icon: Shield,
    title: "Dermatologist Tested",
    description: "All products are tested and approved by leading dermatologists.",
    bgColor: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: Sparkles,
    title: "Proven Results",
    description: "Scientifically proven formulas that deliver visible results.",
    bgColor: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-600 dark:text-purple-400"
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="text-center animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-12 h-12 mx-auto mb-6 flex items-center justify-center ${feature.bgColor} rounded-full transition-transform duration-300 hover:scale-110`}>
                  <Icon className={`h-6 w-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}