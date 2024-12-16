import React from 'react';
import { useCartStore } from '../store/cartStore';
import { Tag } from 'lucide-react';
import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore(state => state.addItem);

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fadeIn relative"
    >
      {product.isNew && (
        <div className="absolute top-4 left-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          <Tag className="h-4 w-4" />
          New
        </div>
      )}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">{product.name}</h3>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {product.category}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium text-gray-900 dark:text-white">${product.price}</span>
          <button 
            onClick={() => addItem(product)}
            className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}