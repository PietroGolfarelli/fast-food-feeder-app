
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            I'm Lovin' It
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Delicious food, delivered fast. Order now and taste the difference!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg"
            >
              Order Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg"
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
