import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation, useNavigate } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export function StripeCheckout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { total } = location.state || { total: 0 };

  useEffect(() => {
    const initializePayment = async () => {
      try {
        const stripe = await stripePromise;
        if (!stripe) throw new Error('Stripe failed to initialize');

        const response = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount: total }),
        });

        const session = await response.json();
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          throw new Error(result.error.message);
        }
      } catch (error) {
        console.error('Payment failed:', error);
        navigate('/checkout/error');
      }
    };

    initializePayment();
  }, [total, navigate]);

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <div className="animate-pulse text-gray-600 dark:text-gray-400">
        Initializing payment...
      </div>
    </div>
  );
}