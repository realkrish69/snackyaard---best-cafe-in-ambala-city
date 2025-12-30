
import React from 'react';
import { MenuItem, Review } from './types';

export const RESTAURANT_DETAILS = {
  name: "Snackyaard",
  tagline: "Aesthetic Café | Top Momos & Chinese Food in Ambala City",
  address: "Shop No. 6, Club Market, Model Town, Ambala, Haryana 134003",
  phone: "093509 91531",
  hours: "Open daily – Closes at 12:00 AM",
  priceRange: "₹1–200 per person",
  mapsUrl: "https://maps.app.goo.gl/mXxNVY974MPdz4rY8?g_st=aw",
  plusCode: "9Q6V+X5 Ambala, Haryana"
};

export const MENU_ITEMS: MenuItem[] = [
  { 
    id: '1', 
    name: 'Steamed Paneer Momos', 
    description: 'Hand-crafted dumplings filled with soft, spiced paneer and herbs.', 
    price: 120, 
    category: 'Momos', 
    image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: '2', 
    name: 'Kurkure Veg Momos', 
    description: 'Crunchy, golden-fried vegetable momos with a signature crisp texture.', 
    price: 140, 
    category: 'Momos', 
    image: 'src/assets/images/kurkure_momos.jpg' 
  },
  { 
    id: '3', 
    name: 'Veg Manchurian Dry', 
    description: 'Crispy veg balls tossed in a savory, tangy Indo-Chinese garlic sauce.', 
    price: 160, 
    category: 'Chinese', 
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: '4', 
    name: 'Hakka Noodles', 
    description: 'Wok-tossed noodles with fresh seasonal vegetables and oriental spices.', 
    price: 150, 
    category: 'Chinese', 
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: '5', 
    name: 'Cheese Garlic Bread', 
    description: 'Toasted baguette topped with rich molten cheese and aromatic garlic butter.', 
    price: 110, 
    category: 'Snacks', 
    image: 'src/assets/images/cheesy_garlic_bread.jpg' 
  },
  { 
    id: '6', 
    name: 'Crispy Corn', 
    description: 'Spicy, golden corn kernels deep-fried to perfection and tossed in herbs.', 
    price: 130, 
    category: 'Snacks', 
    image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: '7', 
    name: 'Virgin Mojito', 
    description: 'A refreshing, zesty blend of lime, fresh mint leaves, and bubbly soda.', 
    price: 90, 
    category: 'Beverages', 
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: '8', 
    name: 'Cold Coffee with Ice Cream', 
    description: 'Creamy blended coffee topped with a decadent scoop of vanilla ice cream.', 
    price: 120, 
    category: 'Beverages', 
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80' 
  },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Rahul Sharma',
    rating: 5,
    text: 'Best momos in Ambala! The ambiance is so cozy and premium. Highly recommended for couples and friends.',
    date: '2 weeks ago',
    avatar: 'https://picsum.photos/100/100?random=11'
  },
  {
    id: '2',
    author: 'Priya Verma',
    rating: 5,
    text: 'Great food quality and aesthetic vibes. Their Chinese dishes are authentic and very reasonably priced.',
    date: '1 month ago',
    avatar: 'https://picsum.photos/100/100?random=12'
  },
  {
    id: '3',
    author: 'Ankit Gupta',
    rating: 4,
    text: 'Loved the cold coffee and snacks. The service is fast. Perfect spot in Model Town.',
    date: '3 weeks ago',
    avatar: 'https://picsum.photos/100/100?random=13'
  }
];

export const ChiliIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 inline-block mr-2 animate-pulse">
    <path d="M11 2s.5 2 1 4 2 2 3 4" />
    <path d="M12.5 10c1 1 2 3 2 5a7 7 0 0 1-7 7c-3 0-5.5-2-5.5-5 0-3 3-9 8-10z" />
  </svg>
);
