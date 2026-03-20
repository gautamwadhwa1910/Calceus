import React from 'react';
import ProductCard from '../../components/ProductCard';
import { getProductsByCategory } from '../../data/products';
import { PRODUCT_CATEGORIES } from '../../types';

const Accessories = () => {
  const accessories = getProductsByCategory(PRODUCT_CATEGORIES.ACCESSORIES);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Accessories</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete your sneaker game with our premium accessories. From cleaning kits to storage solutions, we have everything you need to keep your collection fresh.
          </p>
        </div>

        {/* Hero Banner */}
        <div className="relative mb-12 rounded-2xl overflow-hidden">
          <div 
            className="h-64 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg)'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold mb-2">Sneaker Care Essentials</h2>
                <p className="text-lg">Keep your kicks looking fresh with our premium accessories</p>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🧽</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Cleaning Kits</h3>
            <p className="text-gray-600 text-sm">Professional-grade cleaning solutions for all sneaker materials</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">📦</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Storage</h3>
            <p className="text-gray-600 text-sm">Organize and display your collection with style</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🛡️</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Protection</h3>
            <p className="text-gray-600 text-sm">Shield your sneakers from wear and weather</p>
          </div>
        </div>

        {/* Products Grid */}
        {accessories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No accessories available at the moment.</p>
            <p className="text-gray-400 mt-2">Check back soon for new products!</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900">
                All Accessories ({accessories.length})
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {accessories.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Accessories;