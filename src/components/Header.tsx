import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { ThemeType } from '../types';

const Header: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const location = useLocation();

  const themeOptions = [
    { value: 'theme1' as ThemeType, label: 'Minimalist' },
    { value: 'theme2' as ThemeType, label: 'Dark Elegance' },
    { value: 'theme3' as ThemeType, label: 'Vibrant Joy' },
  ];

  const currentThemeLabel = themeOptions.find(t => t.value === currentTheme)?.label || 'Theme';

  const getHeaderClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-white shadow-md border-b border-gray-200';
      case 'theme2':
        return 'bg-gray-900 shadow-xl border-b border-gray-700';
      case 'theme3':
        return 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 shadow-2xl';
      default:
        return 'bg-white shadow-md';
    }
  };

  const getTextClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-gray-800';
      case 'theme2':
        return 'text-white';
      case 'theme3':
        return 'text-white';
      default:
        return 'text-gray-800';
    }
  };

  const getLinkClasses = (isActive: boolean) => {
    const baseClasses = 'px-3 py-2 rounded-md text-sm font-medium transition-all duration-200';
    
    switch (currentTheme) {
      case 'theme1':
        return `${baseClasses} ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'}`;
      case 'theme2':
        return `${baseClasses} ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`;
      case 'theme3':
        return `${baseClasses} ${isActive ? 'bg-white/20 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}`;
      default:
        return baseClasses;
    }
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${getHeaderClasses()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className={`text-xl font-bold ${getTextClasses()}`}>
              {currentTheme === 'theme3' ? (
                <span className="font-['Pacifico'] text-2xl">ThemeHub</span>
              ) : currentTheme === 'theme2' ? (
                <span className="font-serif text-xl">ThemeHub</span>
              ) : (
                <span className="font-sans text-xl">ThemeHub</span>
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={getLinkClasses(location.pathname === item.href)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Theme Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                currentTheme === 'theme1' 
                  ? 'bg-gray-100 text-gray-800 hover:bg-gray-200' 
                  : currentTheme === 'theme2'
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {currentThemeLabel}
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isThemeDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isThemeDropdownOpen && (
              <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg z-50 ${
                currentTheme === 'theme1' 
                  ? 'bg-white border border-gray-200' 
                  : currentTheme === 'theme2'
                  ? 'bg-gray-800 border border-gray-700'
                  : 'bg-white border border-purple-200'
              }`}>
                <div className="py-1">
                  {themeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setTheme(option.value);
                        setIsThemeDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
                        currentTheme === option.value
                          ? currentTheme === 'theme1'
                            ? 'bg-blue-50 text-blue-700'
                            : currentTheme === 'theme2'
                            ? 'bg-gray-700 text-white'
                            : 'bg-purple-50 text-purple-700'
                          : currentTheme === 'theme1'
                          ? 'text-gray-700 hover:bg-gray-100'
                          : currentTheme === 'theme2'
                          ? 'text-gray-300 hover:bg-gray-700'
                          : 'text-gray-700 hover:bg-purple-50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${getTextClasses()}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden ${getHeaderClasses()}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block ${getLinkClasses(location.pathname === item.href)}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;