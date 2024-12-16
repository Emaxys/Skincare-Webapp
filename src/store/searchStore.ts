import { create } from 'zustand';
import type { Product } from '../types/product';

interface SearchState {
  searchResults: Product[];
  setSearchResults: (results: Product[]) => void;
  clearResults: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchResults: [],
  setSearchResults: (results) => set({ searchResults: results }),
  clearResults: () => set({ searchResults: [] })
}));