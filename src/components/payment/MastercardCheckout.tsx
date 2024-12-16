import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormInput } from '../ui/FormInput';

export function MastercardCheckout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { total } = location.state || { total: 0 };
  
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/process-mastercard-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: total,
          ...formData
        }),
      });

      if (!response.ok) throw new Error('Payment failed');

      navigate('/checkout/success');
    } catch (error) {
      console.error('Payment failed:', error);
      navigate('/checkout/error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-serif text-gray-900 dark:text-white mb-6">
          Mastercard Payment
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            label="Card Number"
            name="cardNumber"
            type="text"
            placeholder="1234 5678 9012 3456"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="Expiry Date"
              name="expiryDate"
              type="text"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleChange}
              required
            />

            <FormInput
              label="CVV"
              name="cvv"
              type="text"
              placeholder="123"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </div>

          <FormInput
            label="Cardholder Name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 px-4 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition duration-150 ease-in-out"
            >
              Pay ${total.toFixed(2)}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}