
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MenuCategories from '../components/MenuCategories';
import FeaturedItems from '../components/FeaturedItems';
import Footer from '../components/Footer';
import { CartProvider } from '../context/CartContext';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Hero />
        <MenuCategories />
        <FeaturedItems />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
