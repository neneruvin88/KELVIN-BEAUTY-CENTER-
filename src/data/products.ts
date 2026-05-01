export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Women' | 'Men' | 'Kids' | 'Shoes' | 'Accessories';
  subCategory?: string;
  images: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  inStock: boolean;
  stockCount?: number;
  rating: number;
  reviews: number;
  isNewArrival?: boolean;
  isBestseller?: boolean;
}

export const products: Product[] = [
  {
    id: 'p-1',
    name: 'Silk Slip Midi Dress',
    description: 'An elegant midi dress crafted from 100% premium silk. Perfect for evening occasions or weddings. Features a cowl neckline, adjustable straps, and a side slit for ease of movement.',
    price: 8500,
    category: 'Women',
    subCategory: 'Dresses',
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Mocha', hex: '#8B5A2B' },
      { name: 'Black', hex: '#000000' }
    ],
    inStock: true,
    stockCount: 4,
    rating: 4.8,
    reviews: 42,
    isBestseller: true
  },
  {
    id: 'p-2',
    name: 'Minimalist Leather Sneakers',
    description: 'Premium white leather sneakers with a low-profile silhouette. Lightweight, comfortable, and versatile enough for casual weekends or smart-casual office days.',
    price: 6000,
    category: 'Shoes',
    subCategory: 'Sneakers',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80'
    ],
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'White', hex: '#FFFFFF' }
    ],
    inStock: true,
    stockCount: 15,
    rating: 4.9,
    reviews: 128,
    isBestseller: true
  },
  {
    id: 'p-3',
    name: 'Linen Blend Blazer',
    description: 'A relaxed, unstructured blazer made from a breathable linen-cotton blend. Ideal for Nairobi weather.',
    price: 9500,
    category: 'Men',
    subCategory: 'Outerwear',
    images: [
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&q=80'
    ],
    sizes: ['48', '50', '52', '54'],
    colors: [
      { name: 'Sand', hex: '#D2B48C' },
      { name: 'Navy', hex: '#000080' }
    ],
    inStock: true,
    stockCount: 2,
    rating: 4.5,
    reviews: 18,
    isNewArrival: true
  },
  {
    id: 'p-4',
    name: 'Structured Leather Tote',
    description: 'A spacious, structured tote bag perfect for work. Fits up to a 15-inch laptop, complete with inner zip pockets.',
    price: 12000,
    category: 'Accessories',
    subCategory: 'Bags',
    images: [
      'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80'
    ],
    sizes: ['OS'],
    colors: [
      { name: 'Tan', hex: '#D2B48C' },
      { name: 'Olive', hex: '#556B2F' }
    ],
    inStock: true,
    rating: 4.7,
    reviews: 56,
    isBestseller: true
  },
  {
    id: 'p-5',
    name: 'Pleated Wide-Leg Trousers',
    description: 'High-waisted tailored trousers with a drapey wide-leg fit. The ultimate day-to-night transitional piece.',
    price: 5200,
    category: 'Women',
    subCategory: 'Bottoms',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80'
    ],
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Charcoal', hex: '#36454F' },
      { name: 'Cream', hex: '#FFFFF0' }
    ],
    inStock: true,
    stockCount: 8,
    rating: 4.6,
    reviews: 31,
    isNewArrival: true
  },
  {
    id: 'p-6',
    name: 'Classic Oxford Shirt',
    description: 'A wardrobe staple. 100% cotton oxford cloth button-down shirt with a tailored but comfortable fit.',
    price: 4500,
    category: 'Men',
    subCategory: 'Shirts',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Light Blue', hex: '#ADD8E6' },
      { name: 'White', hex: '#FFFFFF' }
    ],
    inStock: true,
    rating: 4.9,
    reviews: 210,
    isBestseller: true
  }
];
