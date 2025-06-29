
import React from 'react';

const categories = [
  { id: 1, name: 'Burgers', icon: '🍔', color: 'bg-red-100 text-red-600' },
  { id: 2, name: 'Chicken', icon: '🍗', color: 'bg-orange-100 text-orange-600' },
  { id: 3, name: 'Breakfast', icon: '🥞', color: 'bg-yellow-100 text-yellow-600' },
  { id: 4, name: 'Salads', icon: '🥗', color: 'bg-green-100 text-green-600' },
  { id: 5, name: 'Drinks', icon: '🥤', color: 'bg-blue-100 text-blue-600' },
  { id: 6, name: 'Desserts', icon: '🍦', color: 'bg-pink-100 text-pink-600' },
  { id: 7, name: 'Sides', icon: '🍟', color: 'bg-purple-100 text-purple-600' },
  { id: 8, name: 'Happy Meal', icon: '🎁', color: 'bg-indigo-100 text-indigo-600' },
];

const MenuCategories = () => {
  return (
    <section id="menu" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600">
            Choose from our delicious selection
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className={`${category.color} rounded-2xl p-8 text-center shadow-lg hover:shadow-xl`}>
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-bold text-lg">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCategories;
