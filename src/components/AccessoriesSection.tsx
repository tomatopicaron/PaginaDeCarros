import React, { useState } from 'react';
import { Plus, Filter } from 'lucide-react';
import { accessories } from '../data/vehicles';
import { CartItem } from '../types';

interface AccessoriesSectionProps {
  onAddToCart: (item: CartItem) => void;
}

const AccessoriesSection: React.FC<AccessoriesSectionProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(accessories.map(acc => acc.category))];
  
  const filteredAccessories = selectedCategory === 'all' 
    ? accessories 
    : accessories.filter(acc => acc.category === selectedCategory);

  const handleAddToCart = (accessory: any) => {
    const cartItem: CartItem = {
      id: `${accessory.id}-${Date.now()}`,
      type: 'accessory',
      name: accessory.name,
      price: accessory.price,
      quantity: 1,
      image: accessory.image
    };
    onAddToCart(cartItem);
  };

  return (
    <section id="accessories" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Accesorios Premium
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mejora tu vehículo con nuestros accesorios de alta calidad. 
            Desde performance hasta seguridad y estilo.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'Todos' : category}
            </button>
          ))}
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAccessories.map((accessory) => (
            <div
              key={accessory.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="relative group">
                <img 
                  src={accessory.image} 
                  alt={accessory.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                  {accessory.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{accessory.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{accessory.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-orange-500">
                    ${accessory.price}
                  </span>
                  <div className="text-sm text-gray-500">
                    Compatible: {accessory.compatible.join(', ')}
                  </div>
                </div>

                <button
                  onClick={() => handleAddToCart(accessory)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Agregar al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;