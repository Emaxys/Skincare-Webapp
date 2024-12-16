import { type Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Hydrating Serum',
    price: 48,
    image: 'https://images.unsplash.com/photo-1592136957897-b2b6ca21e10d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Deep hydration with hyaluronic acid',
    category: 'Skincare',
    isNew: true
  },
  {
    id: 2,
    name: 'Korean Essence',
    price: 56,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Brightening and hydrating essence',
    category: 'Asian Skincare'
  },
  {
    id: 3,
    name: 'Night Repair',
    price: 65,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Regenerative overnight treatment',
    category: 'Skincare'
  },
  {
    id: 4,
    name: 'Lavender Body Wash',
    price: 32,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Calming lavender body cleanser',
    category: 'Bath & Body'
  },
  {
    id: 5,
    name: 'Rose Perfume',
    price: 75,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Elegant rose fragrance',
    category: 'Fragrance',
    isNew: true
  },
  {
    id: 6,
    name: 'Collagen Supplement',
    price: 45,
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Beauty supplement for skin health',
    category: 'Wellness & Supplements'
  },
  {
    id: 7,
    name: 'Japanese Toner',
    price: 38,
    image: 'https://images.unsplash.com/photo-1612532275214-e4ca76d0e4d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Hydrating Japanese toner',
    category: 'Asian Skincare',
    isNew: true
  },
  {
    id: 8,
    name: 'Body Lotion',
    price: 42,
    image: 'https://images.unsplash.com/photo-1607602132700-068258431c6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Rich moisturizing body lotion',
    category: 'Bath & Body'
  },
  {
    id: 9,
    name: 'Vitamin C Serum',
    price: 52,
    image: 'https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Brightening vitamin C treatment',
    category: 'Skincare'
  }
];

export const categories: Product['category'][] = [
  'New',
  'Asian Skincare',
  'Skincare',
  'Bath & Body',
  'Fragrance',
  'Wellness & Supplements'
];