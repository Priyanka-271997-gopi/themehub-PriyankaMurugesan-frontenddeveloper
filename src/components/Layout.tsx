import React, { ReactNode } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { currentTheme } = useTheme();

  const getLayoutClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-gray-50 min-h-screen';
      case 'theme2':
        return 'bg-gray-900 min-h-screen';
      case 'theme3':
        return 'bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 min-h-screen';
      default:
        return 'bg-gray-50 min-h-screen';
    }
  };

  const getContentClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'pt-16';
      case 'theme2':
        return 'pt-16 md:flex';
      case 'theme3':
        return 'pt-16';
      default:
        return 'pt-16';
    }
  };

  const getSidebarClasses = () => {
    if (currentTheme !== 'theme2') return 'hidden';
    return 'hidden md:block md:w-64 bg-gray-800 min-h-screen pt-8 px-4';
  };

  const getMainContentClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'flex-1';
      case 'theme2':
        return 'flex-1 md:ml-0';
      case 'theme3':
        return 'flex-1';
      default:
        return 'flex-1';
    }
  };

  return (
    <div className={getLayoutClasses()}>
      <Header />
      <div className={getContentClasses()}>
        {/* Sidebar for Theme 2 */}
        <aside className={getSidebarClasses()}>
          <nav className="space-y-4">
            <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-4 font-serif">
              Quick Links
            </div>
            <a href="#products" className="block text-gray-300 hover:text-white transition-colors duration-200 font-serif">
              Products
            </a>
            <a href="#features" className="block text-gray-300 hover:text-white transition-colors duration-200 font-serif">
              Features
            </a>
            <a href="#testimonials" className="block text-gray-300 hover:text-white transition-colors duration-200 font-serif">
              Testimonials
            </a>
            <a href="#contact" className="block text-gray-300 hover:text-white transition-colors duration-200 font-serif">
              Get in Touch
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className={getMainContentClasses()}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;