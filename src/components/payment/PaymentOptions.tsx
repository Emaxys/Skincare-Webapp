import React, { useState } from 'react';
import { CreditCard, CircleDollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuthCheck } from '../../hooks/useAuthCheck';
import { Notification } from '../ui/Notification';

interface PaymentOptionsProps {
  total: number;
}

export function PaymentOptions({ total }: PaymentOptionsProps) {
  const navigate = useNavigate();
  const { checkAuthAndProceed } = useAuthCheck();
  const [showNotification, setShowNotification] = useState(false);

  const handlePaymentSelection = (method: 'stripe' | 'mastercard') => {
    checkAuthAndProceed(() => {
      navigate(`/checkout/${method}`, { state: { total } });
    });
  };

  return (
    <div className="space-y-6">
      <Notification
        message="Please sign in to proceed with payment"
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
      />
      
      <h2 className="text-2xl font-serif text-gray-900 dark:text-white mb-6">
        Select Payment Method
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          onClick={() => handlePaymentSelection('stripe')}
          className="flex items-center justify-center space-x-4 p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-white transition-colors duration-200"
        >
          <CircleDollarSign className="h-8 w-8 text-gray-900 dark:text-white" />
          <div className="text-left">
            <h3 className="font-medium text-gray-900 dark:text-white">Pay with Stripe</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Secure payment via Stripe
            </p>
          </div>
        </button>

        <button
          onClick={() => handlePaymentSelection('mastercard')}
          className="flex items-center justify-center space-x-4 p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-white transition-colors duration-200"
        >
          <CreditCard className="h-8 w-8 text-gray-900 dark:text-white" />
          <div className="text-left">
            <h3 className="font-medium text-gray-900 dark:text-white">Pay with Mastercard</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Direct credit card payment
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}