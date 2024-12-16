import React, { useState, useMemo } from 'react';
import { ProductCard } from './ProductCard';
import { CategoryFilter } from './CategoryFilter';
import { products } from '../data/products';
import { useSearchStore } from '../store/searchStore';
import type { Product } from '../types/product';

const INITIAL_DISPLAY_COUNT = 6;

export function Products() {
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);
  const [selectedCategory, setSelectedCategory] = useState<Product['category'] | 'all'>('all');
  const searchResults = useSearchStore(state => state.searchResults);
  
  const filteredProducts = useMemo(() => {
    let filtered = searchResults.length > 0 ? searchResults : products;
    
    if (selectedCategory === 'all') {
      return filtered;
    }
    
    if (selectedCategory === 'New') {
      return filtered.filter(product => product.isNew);
    }
    
    return filtered.filter(product => product.category === selectedCategory);
  }, [searchResults, selectedCategory]);

  const hasMoreProducts = displayCount < filteredProducts.length;

  const handleViewMore = () => {
    setDisplayCount(prevCount => prevCount + 6);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center mb-12 text-gray-900 dark:text-white animate-fadeIn">
          {searchResults.length > 0 ? 'Search Results' : 'Our Products'}
        </h2>
        
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            No products found in this category.
          </p>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.slice(0, displayCount).map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product}
            />
          ))}
        </div>
        
        {hasMoreProducts && (
          <div className="mt-12 text-center">
            <button
              onClick={handleViewMore}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}