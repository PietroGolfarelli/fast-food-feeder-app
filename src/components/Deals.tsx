
import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Star, Flame } from 'lucide-react';

const deals = [
  {
    id: 1,
    title: "Big Mac Meal Deal",
    description: "Big Mac + Medium Fries + Medium Drink",
    originalPrice: 12.99,
    dealPrice: 9.99,
    savings: 3.00,
    icon: <Star className="h-6 w-6" />,
    badge: "Popular",
    badgeColor: "bg-yellow-500"
  },
  {
    id: 2,
    title: "2 for $6 Mix & Match",
    description: "Choose any 2: McChicken, McDouble, or Fish Filet",
    originalPrice: 8.98,
    dealPrice: 6.00,
    savings: 2.98,
    icon: <Flame className="h-6 w-6" />,
    badge: "Hot Deal",
    badgeColor: "bg-red-500"
  },
  {
    id: 3,
    title: "Happy Hour Drinks",
    description: "50% off all McCafé beverages 2-5 PM",
    originalPrice: 4.99,
    dealPrice: 2.49,
    savings: 2.50,
    icon: <Clock className="h-6 w-6" />,
    badge: "Limited Time",
    badgeColor: "bg-blue-500"
  }
];

const Deals = () => {
  return (
    <section id="deals" className="py-16 bg-gradient-to-br from-red-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🔥 Today's Deals
          </h2>
          <p className="text-xl text-gray-600">
            Limited time offers you don't want to miss!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-red-200"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-red-600">
                    {deal.icon}
                    <span className={`${deal.badgeColor} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                      {deal.badge}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{deal.title}</h3>
                <p className="text-gray-600 mb-4">{deal.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-red-600">${deal.dealPrice}</span>
                    <span className="text-lg text-gray-500 line-through">${deal.originalPrice}</span>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                    Save ${deal.savings.toFixed(2)}
                  </div>
                </div>
                
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3">
                  Claim Deal
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;
