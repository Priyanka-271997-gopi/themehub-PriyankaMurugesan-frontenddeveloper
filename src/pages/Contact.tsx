import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact: React.FC = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

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

  const getCardClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300';
      case 'theme2':
        return 'bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700';
      case 'theme3':
        return 'bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gradient-to-r from-pink-300 to-blue-300';
      default:
        return 'bg-white p-8 rounded-lg shadow-md';
    }
  };

  const getInputClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200';
      case 'theme2':
        return 'w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 font-serif';
      case 'theme3':
        return 'w-full px-4 py-3 border-2 border-pink-200 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-200';
      default:
        return 'w-full px-4 py-3 border border-gray-300 rounded-lg';
    }
  };

  const getLabelClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'block text-sm font-medium text-gray-700 mb-2';
      case 'theme2':
        return 'block text-sm font-medium text-gray-300 mb-2 font-serif';
      case 'theme3':
        return 'block text-sm font-medium text-gray-700 mb-2 font-["Pacifico"]';
      default:
        return 'block text-sm font-medium text-gray-700 mb-2';
    }
  };

  const getButtonClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2';
      case 'theme2':
        return 'w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 font-serif';
      case 'theme3':
        return 'w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white py-3 px-6 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2 font-["Pacifico"]';
      default:
        return 'w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg';
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

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: 'hello@themehub.com',
      link: 'mailto:hello@themehub.com'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      details: '123 Design Street, Creative City, CC 12345',
      link: '#'
    }
  ];

  if (isSubmitted) {
    return (
      <div className={getContainerClasses()}>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className={`${getCardClasses()} text-center max-w-md`}>
            <CheckCircle className={`h-16 w-16 ${getIconClasses()} mx-auto mb-4`} />
            <h2 className={`text-2xl font-bold mb-4 ${
              currentTheme === 'theme1' ? 'text-gray-900' : 
              currentTheme === 'theme2' ? 'text-white font-serif' : 
              'text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-["Pacifico"]'
            }`}>
              Message Sent!
            </h2>
            <p className={getTextClasses()}>
              Thank you for reaching out. We'll get back to you soon!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={getContainerClasses()}>
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className={getTitleClasses()}>Get In Touch</h1>
        <p className={`text-xl ${getTextClasses()} max-w-3xl mx-auto`}>
          Have questions about ThemeHub? Want to collaborate or just say hello? 
          We'd love to hear from you.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <h2 className={`text-2xl font-bold mb-6 ${
            currentTheme === 'theme1' ? 'text-gray-900' : 
            currentTheme === 'theme2' ? 'text-white font-serif' : 
            'text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-["Pacifico"]'
          }`}>
            Contact Information
          </h2>
          
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className={getCardClasses()}>
                <div className="flex items-start gap-4">
                  <div className={getIconClasses()}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-1 ${
                      currentTheme === 'theme1' ? 'text-gray-900' : 
                      currentTheme === 'theme2' ? 'text-white font-serif' : 
                      'text-gray-900'
                    }`}>
                      {info.title}
                    </h3>
                    <a 
                      href={info.link}
                      className={`${getTextClasses()} hover:${getIconClasses()} transition-colors duration-200`}
                    >
                      {info.details}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`${getCardClasses()} mt-6`}>
            <h3 className={`font-semibold mb-3 ${
              currentTheme === 'theme1' ? 'text-gray-900' : 
              currentTheme === 'theme2' ? 'text-white font-serif' : 
              'text-gray-900 font-["Pacifico"]'
            }`}>
              Business Hours
            </h3>
            <div className={`space-y-2 text-sm ${getTextClasses()}`}>
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className={getCardClasses()}>
            <h2 className={`text-2xl font-bold mb-6 ${
              currentTheme === 'theme1' ? 'text-gray-900' : 
              currentTheme === 'theme2' ? 'text-white font-serif' : 
              'text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-["Pacifico"]'
            }`}>
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={getLabelClasses()}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={getInputClasses()}
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className={getLabelClasses()}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={getInputClasses()}
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className={getLabelClasses()}>
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={getInputClasses()}
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className={getLabelClasses()}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className={`${getInputClasses()} ${currentTheme === 'theme3' ? 'rounded-2xl' : ''}`}
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              
              <button type="submit" className={getButtonClasses()}>
                Send Message
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;