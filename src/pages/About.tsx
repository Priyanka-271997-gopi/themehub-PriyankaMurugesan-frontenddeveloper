import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { currentTheme } = useTheme();

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

  const getTitleClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8';
      case 'theme2':
        return 'text-4xl md:text-5xl font-bold text-white text-center mb-8 font-serif';
      case 'theme3':
        return 'text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-center mb-8 font-["Pacifico"]';
      default:
        return 'text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8';
    }
  };

  const getTextClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-gray-700';
      case 'theme2':
        return 'text-gray-300';
      case 'theme3':
        return 'text-gray-700';
      default:
        return 'text-gray-700';
    }
  };

  const getCardClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300';
      case 'theme2':
        return 'bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700';
      case 'theme3':
        return 'bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform border-2 border-gradient-to-r from-pink-300 to-blue-300';
      default:
        return 'bg-white p-8 rounded-lg shadow-md';
    }
  };

  const getIconClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-blue-600';
      case 'theme2':
        return 'text-gray-300';
      case 'theme3':
        return 'text-purple-600';
      default:
        return 'text-blue-600';
    }
  };

  const getSectionTitleClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-2xl font-bold text-gray-900 mb-4';
      case 'theme2':
        return 'text-2xl font-bold text-white mb-4 font-serif';
      case 'theme3':
        return 'text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4 font-["Pacifico"]';
      default:
        return 'text-2xl font-bold text-gray-900 mb-4';
    }
  };

  const values = [
    {
      icon: <Users className="h-12 w-12" />,
      title: 'User-Centric Design',
      description: 'We believe great design starts with understanding user needs and creating intuitive experiences that delight.'
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: 'Innovation Focus',
      description: 'We constantly push boundaries to create cutting-edge solutions that set new standards in digital experience.'
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: 'Quality Excellence',
      description: 'Every line of code, every design element is crafted with precision and attention to detail.'
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: 'Passion Driven',
      description: 'Our love for beautiful, functional design drives us to create experiences that truly matter.'
    }
  ];

  return (
    <div className={getContainerClasses()}>
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className={getTitleClasses()}>About ThemeHub</h1>
        <p className={`text-xl ${getTextClasses()} max-w-4xl mx-auto leading-relaxed`}>
          We're passionate about creating beautiful, functional, and accessible web experiences. 
          ThemeHub represents our vision of how dynamic theming can transform user interfaces 
          and create more personalized digital experiences.
        </p>
      </section>

      {/* Story Section */}
      <section className="mb-16">
        <div className={getCardClasses()}>
          <h2 className={getSectionTitleClasses()}>Our Story</h2>
          <div className={`text-lg ${getTextClasses()} space-y-4 leading-relaxed`}>
            <p>
              Founded in 2024, ThemeHub emerged from a simple observation: users crave personalization 
              in their digital experiences. We noticed how the same interface could feel completely 
              different with just a change in color scheme, typography, or layout structure.
            </p>
            <p>
              What started as an experiment in dynamic theming has evolved into a comprehensive 
              design system that demonstrates the power of adaptive interfaces. Our three distinct 
              themes showcase how the same content can be presented in radically different ways, 
              each optimized for different user preferences and contexts.
            </p>
            <p>
              Today, ThemeHub serves as both a working application and a proof of concept for 
              the future of adaptive web design. We believe that giving users control over 
              their interface isn't just about aesthetics—it's about creating more inclusive, 
              accessible, and enjoyable digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className={`text-3xl font-bold text-center mb-12 ${
          currentTheme === 'theme1' ? 'text-gray-900' : 
          currentTheme === 'theme2' ? 'text-white font-serif' : 
          'text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-["Pacifico"]'
        }`}>
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className={getCardClasses()}>
              <div className={`${getIconClasses()} mb-6`}>
                {value.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-4 ${
                currentTheme === 'theme1' ? 'text-gray-900' : 
                currentTheme === 'theme2' ? 'text-white font-serif' : 
                'text-gray-900 font-["Pacifico"]'
              }`}>
                {value.title}
              </h3>
              <p className={getTextClasses()}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section>
        <div className={getCardClasses()}>
          <h2 className={getSectionTitleClasses()}>Our Mission & Vision</h2>
          <div className={`${getTextClasses()} space-y-4`}>
            <p>
              At ThemeHub, we believe that great user experiences start with giving users control 
              over their digital environment. Our mission is to demonstrate how thoughtful design 
              systems can create more inclusive and personalized web experiences.
            </p>
            <p>
              <strong>Our Vision:</strong> We envision a web where every user can customize their 
              interface to match their preferences, needs, and accessibility requirements. Whether 
              someone prefers minimalist designs, needs high contrast for better readability, or 
              enjoys vibrant, playful interfaces - the web should adapt to them.
            </p>
            <p>
              <strong>Why It Matters:</strong> Different users have different needs. A busy professional 
              might prefer clean, distraction-free interfaces, while a creative individual might thrive 
              with colorful, expressive designs. By providing multiple theme options, we're not just 
              changing colors - we're creating more inclusive digital experiences.
            </p>
            <p>
              <strong>Our Commitment:</strong> We're committed to pushing the boundaries of what's 
              possible in web design while maintaining the highest standards of accessibility, 
              performance, and user experience. Every line of code, every design decision is made 
              with the user's needs at the forefront.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;