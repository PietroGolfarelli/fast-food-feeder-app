
import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-red-600">McDonald's</div>
              <div className="ml-2 text-yellow-500 text-3xl">🍟</div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#menu" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Menu</a>
              <a href="#deals" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Deals</a>
              <a href="#locations" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Locations</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">About</a>
            </nav>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-700 hover:text-red-600 transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-700"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#menu" className="text-gray-700 hover:text-red-600 font-medium">Menu</a>
                <a href="#deals" className="text-gray-700 hover:text-red-600 font-medium">Deals</a>
                <a href="#locations" className="text-gray-700 hover:text-red-600 font-medium">Locations</a>
                <a href="#about" className="text-gray-700 hover:text-red-600 font-medium">About</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
