import React from 'react';
import ProductCard from '../../components/ProductCard';
import { getNewProducts } from '../../data/products';

const NewArrivals = () => {
  const newProducts = getNewProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">What's New</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the latest arrivals in our sneaker collection. Be the first to get your hands on the newest drops from top brands.
          </p>
        </div>

        {/* Hero Banner */}
        <div className="relative mb-12 rounded-2xl overflow-hidden">
          <div 
            className="h-64 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg)'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold mb-2">Fresh Drops</h2>
                <p className="text-lg">Latest releases from your favorite brands</p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {newProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No new arrivals at the moment.</p>
            <p className="text-gray-400 mt-2">Check back soon for the latest drops!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewArrivals;