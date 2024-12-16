export type ProductCategory = 
  | 'New'
  | 'Asian Skincare'
  | 'Skincare'
  | 'Bath & Body'
  | 'Fragrance'
  | 'Wellness & Supplements';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: ProductCategory;
  isNew?: boolean;
}