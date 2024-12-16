import type { Review } from '../types/review';

export const reviews: Review[] = [
  {
    id: 1,
    userName: "Sarah Johnson",
    userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
    rating: 5,
    comment: "The Hydrating Serum has completely transformed my skincare routine. My skin feels so much more plump and hydrated!",
    productName: "Hydrating Serum",
    date: "2024-02-15",
    verified: true
  },
  {
    id: 2,
    userName: "Emily Chen",
    userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
    rating: 5,
    comment: "I've been using the Korean Essence for a month now, and the results are amazing. My skin is glowing!",
    productName: "Korean Essence",
    date: "2024-02-10",
    verified: true
  },
  {
    id: 3,
    userName: "Michael Brown",
    userImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3",
    rating: 4,
    comment: "The Night Repair cream works wonders. I wake up with such refreshed skin.",
    productName: "Night Repair",
    date: "2024-02-05",
    verified: true
  }
];