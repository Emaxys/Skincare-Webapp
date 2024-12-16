export interface PriceCalculation {
  subtotal: number;
  shipping: number;
  total: number;
}

export const calculatePrice = (subtotal: number): PriceCalculation => {
  // Free shipping for orders over $100
  const shippingThreshold = 100;
  const standardShipping = 10;
  
  const shipping = subtotal >= shippingThreshold ? 0 : standardShipping;
  const total = subtotal + shipping;

  return {
    subtotal,
    shipping,
    total
  };
};