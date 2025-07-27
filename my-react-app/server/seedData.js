const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./my-react-app/models/Product');

dotenv.config();

const products = [
  {
    name: 'Air Jordan 1 Retro High',
    brand: 'Nike',
    price: 170,
    originalPrice: 200,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg'
    ],
    description: 'The Air Jordan 1 Retro High remakes the classic sneaker, giving you a fresh take on what you know: premium materials, comfortable cushioning, and the iconic silhouette.',
    category: 'sneakers',
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'],
    colors: ['Black/Red', 'White/Black', 'Royal Blue'],
    rating: 4.8,
    inStock: true,
    isNew: true,
    featured: true,
    stock: 50
  },
  {
    name: 'Nike Air Force 1',
    brand: 'Nike',
    price: 90,
    originalPrice: 110,
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg',
    images: [
      'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg',
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'
    ],
    description: 'The Nike Air Force 1 \'07 is the basketball original. You know it. You love it. This is the classic that put Nike on the map.',
    category: 'sneakers',
    sizes: ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12'],
    colors: ['White', 'Black', 'Triple White'],
    rating: 4.6,
    inStock: true,
    featured: true,
    stock: 75
  },
  {
    name: 'Adidas Ultraboost 22',
    brand: 'Adidas',
    price: 180,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
    images: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'
    ],
    description: 'Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste.',
    category: 'sneakers',
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11'],
    colors: ['Core Black', 'Cloud White', 'Solar Red'],
    rating: 4.7,
    inStock: true,
    isNew: true,
    stock: 30
  },
  {
    name: 'Converse Chuck Taylor All Star',
    brand: 'Converse',
    price: 55,
    originalPrice: 65,
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg',
    images: [
      'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg'
    ],
    description: 'The Converse Chuck Taylor All Star is the most iconic sneaker in the world, recognized for its unmistakable silhouette, star-centered ankle patch and cultural authenticity.',
    category: 'sneakers',
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'White', 'Red', 'Navy'],
    rating: 4.4,
    inStock: true,
    stock: 100
  },
  {
    name: 'Premium Sneaker Cleaning Kit',
    brand: 'Calceus',
    price: 25,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'
    ],
    description: 'Keep your sneakers looking fresh with our premium cleaning kit. Includes cleaning solution, brush, and microfiber cloth.',
    category: 'accessories',
    sizes: ['One Size'],
    colors: ['Black'],
    rating: 4.5,
    inStock: true,
    featured: true,
    stock: 200
  },
  {
    name: 'Sneaker Storage Box',
    brand: 'Calceus',
    price: 15,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
    images: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg'
    ],
    description: 'Transparent storage box perfect for organizing and displaying your sneaker collection.',
    category: 'accessories',
    sizes: ['Standard'],
    colors: ['Clear', 'Black'],
    rating: 4.3,
    inStock: true,
    stock: 150
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert new products
    await Product.insertMany(products);
    console.log('Products seeded successfully');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();