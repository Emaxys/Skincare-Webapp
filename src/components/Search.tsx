import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { useSearchStore } from '../store/searchStore';
import { products } from '../data/products';

export function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const setSearchResults = useSearchStore(state => state.setSearchResults);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const results = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setSearchResults(results);
  };

  return (
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <form 
          onSubmit={handleSearch}
          className="max-w-2xl mx-auto flex gap-4 animate-fadeIn"
        >
          <div className="relative flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-transparent"
            />
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition duration-150 ease-in-out flex items-center gap-2"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}