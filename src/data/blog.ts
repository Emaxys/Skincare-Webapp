import type { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Science Behind Hyaluronic Acid",
    excerpt: "Discover why this miracle molecule is essential for skin hydration",
    content: "Hyaluronic acid is a naturally occurring substance in our skin...",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3",
    author: {
      name: "Dr. Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3"
    },
    date: "2024-02-20",
    category: "Skincare Science",
    readTime: 5
  },
  {
    id: 2,
    title: "Building Your Perfect Morning Skincare Routine",
    excerpt: "Step-by-step guide to creating an effective morning ritual",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3",
    author: {
      name: "Lisa Park",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3"
    },
    date: "2024-02-18",
    category: "Skincare Tips",
    readTime: 4,
    content: "The key to a great skincare routine is consistency..."
  },
  {
    id: 3,
    title: "Understanding Clean Beauty",
    excerpt: "What makes skincare truly clean and why it matters",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3",
    author: {
      name: "James Miller",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
    },
    date: "2024-02-15",
    category: "Clean Beauty",
    readTime: 6,
    content: "Clean beauty goes beyond just natural ingredients..."
  }
];