import React from 'react';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const { currentTheme } = useTheme();
  const { products, loading, error } = useProducts();

  const getContainerClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12';
      case 'theme2':
        return 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12';
      case 'theme3':
        return 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12';
      default:
        return 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12';
    }
  };

  const getHeroClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-center mb-16';
      case 'theme2':
        return 'text-center mb-16';
      case 'theme3':
        return 'text-center mb-16 relative';
      default:
        return 'text-center mb-16';
    }
  };

  const getTitleClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-4xl md:text-6xl font-bold text-gray-900 mb-6';
      case 'theme2':
        return 'text-4xl md:text-6xl font-bold text-white mb-6 font-serif';
      case 'theme3':
        return 'text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 mb-6 font-["Pacifico"]';
      default:
        return 'text-4xl md:text-6xl font-bold text-gray-900 mb-6';
    }
  };

  const getSubtitleClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-xl text-gray-600 mb-8 max-w-3xl mx-auto';
      case 'theme2':
        return 'text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-serif';
      case 'theme3':
        return 'text-xl text-gray-700 mb-8 max-w-3xl mx-auto';
      default:
        return 'text-xl text-gray-600 mb-8 max-w-3xl mx-auto';
    }
  };

  const getButtonClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-flex items-center gap-2 shadow-lg hover:shadow-xl';
      case 'theme2':
        return 'bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-flex items-center gap-2 shadow-lg hover:shadow-xl font-serif';
      case 'theme3':
        return 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 font-["Pacifico"]';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg';
    }
  };

  const getGridClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8';
      case 'theme2':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
      case 'theme3':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6';
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8';
    }
  };

  const getSectionTitleClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-3xl font-bold text-gray-900 text-center mb-12';
      case 'theme2':
        return 'text-3xl font-bold text-white text-center mb-12 font-serif';
      case 'theme3':
        return 'text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 text-center mb-12 font-["Pacifico"]';
      default:
        return 'text-3xl font-bold text-gray-900 text-center mb-12';
    }
  };

  const features = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Beautiful Themes',
      description: 'Three distinct themes that completely transform your experience'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure & Reliable',
      description: 'Built with security best practices and TypeScript for reliability'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Lightning Fast',
      description: 'Optimized performance with smooth animations and transitions'
    }
  ];

  const getFeatureCardClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300';
      case 'theme2':
        return 'bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700';
      case 'theme3':
        return 'bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform border-2 border-gradient-to-r from-pink-300 to-blue-300';
      default:
        return 'bg-white p-6 rounded-lg shadow-md';
    }
  };

  const getFeatureTextClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-gray-900';
      case 'theme2':
        return 'text-white';
      case 'theme3':
        return 'text-gray-900';
      default:
        return 'text-gray-900';
    }
  };

  const getFeatureDescClasses = () => {
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

  if (error) {
    return (
      <div className={getContainerClasses()}>
        <div className="text-center">
          <h2 className={getSectionTitleClasses()}>Oops! Something went wrong</h2>
          <p className={getSubtitleClasses()}>
            Unable to load products: {error}
          </p>
          <button
            onClick={() => window.location.reload()}
            className={getButtonClasses()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={getContainerClasses()}>
      {/* Hero Section */}
      <section className={getHeroClasses()}>
        {currentTheme === 'theme3' && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-32 right-16 w-16 h-16 bg-purple-300 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        )}
        
        <h1 className={getTitleClasses()}>
          Welcome to ThemeHub
        </h1>
        <p className={getSubtitleClasses()}>
          Experience the power of dynamic theming with our beautiful, responsive design system. 
          Switch between three unique themes and discover how design can transform user experience.
        </p>
        <button className={getButtonClasses()}>
          Explore Products
          <ArrowRight className="h-5 w-5" />
        </button>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className={getSectionTitleClasses()}>Why Choose ThemeHub?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={getFeatureCardClasses()}>
              <div className={`${currentTheme === 'theme1' ? 'text-blue-600' : currentTheme === 'theme2' ? 'text-gray-300' : 'text-purple-600'} mb-4`}>
                {feature.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${getFeatureTextClasses()} ${
                currentTheme === 'theme2' ? 'font-serif' : currentTheme === 'theme3' ? 'font-["Pacifico"]' : ''
              }`}>
                {feature.title}
              </h3>
              <p className={getFeatureDescClasses()}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section id="products">
        <h2 className={getSectionTitleClasses()}>Featured Products</h2>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, index) => (
              <div key={index} className={`${getFeatureCardClasses()} animate-pulse`}>
                <div className="aspect-square bg-gray-300 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded mb-4"></div>
                <div className="h-6 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className={getGridClasses()}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;