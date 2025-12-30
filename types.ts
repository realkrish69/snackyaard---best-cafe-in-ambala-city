
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Momos' | 'Chinese' | 'Snacks' | 'Beverages';
  image?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}
