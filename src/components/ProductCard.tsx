import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { currentTheme } = useTheme();

  const getCardClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200';
      case 'theme2':
        return 'bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-700';
      case 'theme3':
        return 'bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-gradient-to-r from-pink-300 to-blue-300 hover:scale-105 transform';
      default:
        return 'bg-white rounded-lg shadow-md overflow-hidden';
    }
  };

  const getTextClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-gray-800';
      case 'theme2':
        return 'text-white';
      case 'theme3':
        return 'text-gray-800';
      default:
        return 'text-gray-800';
    }
  };

  const getSecondaryTextClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-gray-600';
      case 'theme2':
        return 'text-gray-300';
      case 'theme3':
        return 'text-gray-600';
      default:
        return 'text-gray-600';
    }
  };

  const getButtonClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center gap-2';
      case 'theme2':
        return 'bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center gap-2 font-serif';
      case 'theme3':
        return 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-2 font-["Pacifico"] text-sm';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md';
    }
  };

  const getPriceClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-2xl font-bold text-blue-600';
      case 'theme2':
        return 'text-2xl font-bold text-gray-100 font-serif';
      case 'theme3':
        return 'text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-["Pacifico"]';
      default:
        return 'text-2xl font-bold text-blue-600';
    }
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className={getCardClasses()}>
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      
      <div className="p-4 space-y-3">
        <h3 className={`font-semibold ${getTextClasses()} ${
          currentTheme === 'theme2' ? 'font-serif' : currentTheme === 'theme3' ? 'font-["Pacifico"]' : ''
        }`}>
          {truncateText(product.title, 50)}
        </h3>
        
        <p className={`text-sm ${getSecondaryTextClasses()}`}>
          {truncateText(product.description, 80)}
        </p>
        
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className={`text-sm ${getSecondaryTextClasses()}`}>
            {product.rating.rate} ({product.rating.count} reviews)
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className={getPriceClasses()}>
            ${product.price}
          </span>
          <button className={getButtonClasses()}>
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;