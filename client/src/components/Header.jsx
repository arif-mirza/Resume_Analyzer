import React, { useState } from 'react';

const Header = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#2D1B69] text-white py-4 px-6 lg:px-8 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          RESUME WORDED
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
            >
              <span>Products</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isProductsOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Resume Scanner</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Keyword Analyzer</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Word Count Tool</a>
              </div>
            )}
          </div>

          {/* CTA Button */}
          <button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
            Target your resume to a job
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#2D1B69] border-t border-gray-600 py-4">
          <div className="px-6 space-y-4">
            <a href="#" className="block py-2 hover:text-gray-300 transition-colors">Products</a>
            <button className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Target your resume to a job
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
