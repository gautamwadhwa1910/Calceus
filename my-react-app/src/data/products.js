import { PRODUCT_CATEGORIES, BRANDS } from '../types/index.js';

export const products = [
  // Nike Products
  {
    id: '1',
    name: 'Air Jordan 1 Retro High',
    brand: BRANDS.NIKE,
    price: 170,
    originalPrice: 200,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg'
    ],
    description: 'The Air Jordan 1 Retro High remakes the classic sneaker, giving you a fresh take on what you know: premium materials, comfortable cushioning, and the iconic silhouette.',
    category: PRODUCT_CATEGORIES.SNEAKERS,
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'],
    colors: ['Black/Red', 'White/Black', 'Royal Blue'],
    rating: 4.8,
    reviews: [
      {
        id: '1',
        userId: '1',
        userName: 'Mike Johnson',
        rating: 5,
        comment: 'Amazing quality and comfort. True to size!',
        date: '2024-01-15'
      },
      {
        id: '2',
        userId: '2',
        userName: 'Sarah Davis',
        rating: 4,
        comment: 'Great sneakers, love the classic design.',
        date: '2024-01-10'
      }
    ],
    inStock: true,
    isNew: true,
    featured: true
  },
  {
    id: '2',
    name: 'Nike Air Force 1',
    brand: BRANDS.NIKE,
    price: 90,
    originalPrice: 110,
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg',
    images: [
      'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg',
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'
    ],
    description: 'The Nike Air Force 1 \'07 is the basketball original. You know it. You love it. This is the classic that put Nike on the map.',
    category: PRODUCT_CATEGORIES.SNEAKERS,
    sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12'],
    colors: ['White', 'Black', 'Triple White'],
    rating: 4.6,
    reviews: [],
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Adidas Ultraboost 22',
    brand: BRANDS.ADIDAS,
    price: 180,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
    images: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'
    ],
    description: 'Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste.',
    category: PRODUCT_CATEGORIES.SNEAKERS,
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11'],
    colors: ['Core Black', 'Cloud White', 'Solar Red'],
    rating: 4.7,
    reviews: [],
    inStock: true,
    isNew: true
  },
  {
    id: '4',
    name: 'Converse Chuck Taylor All Star',
    brand: BRANDS.CONVERSE,
    price: 55,
    originalPrice: 65,
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg',
    images: [
      'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg'
    ],
    description: 'The Converse Chuck Taylor All Star is the most iconic sneaker in the world, recognized for its unmistakable silhouette, star-centered ankle patch and cultural authenticity.',
    category: PRODUCT_CATEGORIES.SNEAKERS,
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'White', 'Red', 'Navy'],
    rating: 4.4,
    reviews: [],
    inStock: true
  },
  {
    id: '5',
    name: 'Premium Sneaker Cleaning Kit',
    brand: 'Calceus',
    price: 25,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'
    ],
    description: 'Keep your sneakers looking fresh with our premium cleaning kit. Includes cleaning solution, brush, and microfiber cloth.',
    category: PRODUCT_CATEGORIES.ACCESSORIES,
    sizes: ['One Size'],
    colors: ['Black'],
    rating: 4.5,
    reviews: [],
    inStock: true,
    featured: true
  },
  {
    id: '6',
    name: 'Sneaker Storage Box',
    brand: 'Calceus',
    price: 15,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
    images: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg'
    ],
    description: 'Transparent storage box perfect for organizing and displaying your sneaker collection.',
    category: PRODUCT_CATEGORIES.ACCESSORIES,
    sizes: ['Standard'],
    colors: ['Clear', 'Black'],
    rating: 4.3,
    reviews: [],
    inStock: true
  }
];

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getProductsByBrand = (brand) => {
  return products.filter(product => product.brand === brand);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getNewProducts = () => {
  return products.filter(product => product.isNew);
};

export const getProductById = (id) => {
  return products.find(product => product.id === id);
};