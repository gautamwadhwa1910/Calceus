import React from 'react';
import ProductCard from '../../components/ProductCard';
import { getProductsByCategory } from '../../data/products';
import { PRODUCT_CATEGORIES } from '../../types';

const Sneakers = () => {
  const sneakers = getProductsByCategory(PRODUCT_CATEGORIES.SNEAKERS);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sneakers</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our extensive collection of premium sneakers from the world's most iconic brands. From classic silhouettes to cutting-edge designs.
          </p>
        </div>

        {/* Hero Banner */}
        <div className="relative mb-12 rounded-2xl overflow-hidden">
          <div 
            className="h-80 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent flex items-center">
              <div className="max-w-lg ml-8 text-white">
                <h2 className="text-4xl font-bold mb-4">Premium Sneakers</h2>
                <p className="text-lg mb-6">
                  Step up your game with our curated selection of the finest sneakers from Nike, Adidas, Jordan, and more.
                </p>
                <div className="flex space-x-4">
                  <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
                    Free Shipping
                  </span>
                  <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
                    Authentic Guarantee
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {sneakers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No sneakers available at the moment.</p>
            <p className="text-gray-400 mt-2">Check back soon for new arrivals!</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900">
                All Sneakers ({sneakers.length})
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sneakers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sneakers;