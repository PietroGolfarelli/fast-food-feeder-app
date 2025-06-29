
import React from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '../context/CartContext';

const featuredItems = [
  {
    id: '1',
    name: 'Big Mac',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    description: 'Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.'
  },
  {
    id: '2',
    name: 'McChicken',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1606755962773-d324e9a13086?w=400&h=300&fit=crop',
    description: 'Crispy chicken breast with lettuce and mayo on a perfectly toasted bun.'
  },
  {
    id: '3',
    name: 'French Fries',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
    description: 'Golden, crispy fries made from premium potatoes, lightly salted to perfection.'
  },
  {
    id: '4',
    name: 'McFlurry Oreo',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    description: 'Creamy vanilla soft serve mixed with crunchy Oreo cookie pieces.'
  },
  {
    id: '5',
    name: 'Quarter Pounder',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop',
    description: 'Fresh beef quarter pound patty with cheese, pickles, onions, ketchup and mustard.'
  },
  {
    id: '6',
    name: 'Chicken McNuggets',
    price: 5.49,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop',
    description: 'Tender, juicy chicken pieces in a crispy tempura coating. 10 pieces.'
  }
];

const FeaturedItems = () => {
  const { addItem } = useCart();

  const handleAddToCart = (item: typeof featuredItems[0]) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Items
          </h2>
          <p className="text-xl text-gray-600">
            Our most popular menu items
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  ${item.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                
                <Button
                  onClick={() => handleAddToCart(item)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
