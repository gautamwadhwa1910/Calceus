import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { getProductsByBrand } from '../../data/products';
import { BRANDS } from '../../types';

const Brands = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [products, setProducts] = useState([]);

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    setProducts(getProductsByBrand(brand));
  };

  const brandLogos = {
    [BRANDS.NIKE]: '✓',
    [BRANDS.ADIDAS]: '⚡',
    [BRANDS.JORDAN]: '🏀',
    [BRANDS.PUMA]: '🐾',
    [BRANDS.CONVERSE]: '⭐',
    [BRANDS.VANS]: '🛹'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop by Brand</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover sneakers from the world's most iconic brands. Each brand brings its unique style, innovation, and heritage to the sneaker world.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {Object.values(BRANDS).map((brand) => (
            <button
              key={brand}
              onClick={() => handleBrandSelect(brand)}
              className={`bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 ${
                selectedBrand === brand ? 'ring-2 ring-black' : ''
              }`}
            >
              <div className="text-4xl mb-2">{brandLogos[brand]}</div>
              <h3 className="font-semibold text-gray-900">{brand}</h3>
            </button>
          ))}
        </div>

        {/* Brand Hero Section */}
        {!selectedBrand && (
          <div className="relative mb-12 rounded-2xl overflow-hidden">
            <div 
              className="h-80 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg)'
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                <div className="text-center text-white max-w-3xl">
                  <h2 className="text-4xl font-bold mb-4">Iconic Brands, Legendary Sneakers</h2>
                  <p className="text-xl mb-6">
                    From Nike's innovation to Adidas' performance, from Jordan's legacy to Converse's timeless appeal - find your perfect pair from the brands that defined sneaker culture.
                  </p>
                  <p className="text-lg">Select a brand above to explore their collection</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Selected Brand Products */}
        {selectedBrand && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedBrand}</h2>
              <p className="text-gray-600">
                {products.length} product{products.length !== 1 ? 's' : ''} available
              </p>
            </div>

            {products.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products available from {selectedBrand} at the moment.</p>
                <p className="text-gray-400 mt-2">Check back soon for new arrivals!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Brand Information */}
        {!selectedBrand && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Heritage Brands</h3>
              <p className="text-gray-600 mb-4">
                Discover sneakers from brands with decades of history and innovation in athletic footwear.
              </p>
              <div className="flex space-x-2">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Nike</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Adidas</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Converse</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Performance Focus</h3>
              <p className="text-gray-600 mb-4">
                Brands that prioritize athletic performance and cutting-edge technology in their designs.
              </p>
              <div className="flex space-x-2">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Nike</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Adidas</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Puma</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Lifestyle & Culture</h3>
              <p className="text-gray-600 mb-4">
                Brands that have transcended sports to become cultural icons and lifestyle statements.
              </p>
              <div className="flex space-x-2">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Jordan</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Vans</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Converse</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Brands;