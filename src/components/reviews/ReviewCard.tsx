import React from 'react';
import { Star } from 'lucide-react';
import type { Review } from '../../types/review';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fadeIn mx-4">
      <div className="flex items-center mb-6">
        <img
          src={review.userImage}
          alt={review.userName}
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
        />
        <div className="ml-4">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            {review.userName}
          </h3>
          <div className="flex items-center mt-1">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-current text-yellow-400"
              />
            ))}
          </div>
        </div>
        {review.verified && (
          <span className="ml-auto text-sm text-green-600 dark:text-green-400 font-medium">
            Verified Purchase
          </span>
        )}
      </div>
      
      <blockquote className="text-gray-600 dark:text-gray-300 text-lg italic mb-4">
        "{review.comment}"
      </blockquote>
      
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>{review.productName}</span>
        <span>{new Date(review.date).toLocaleDateString()}</span>
      </div>
    </div>
  );
}