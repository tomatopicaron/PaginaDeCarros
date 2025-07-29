import React, { useState } from 'react';
import { Plus, Filter } from 'lucide-react';
import { storeAccessories } from '../../data/vehicles';
import { CartItem } from '../../types';

interface AccessoriesViewProps {
  onAddToCart: (item: CartItem) => void;
}

const AccessoriesView: React.FC<AccessoriesViewProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCompatibility, setSelectedCompatibility] = useState<string>('all');

  const categories = ['all', ...new Set(storeAccessories.map(acc => acc.category))];
  const compatibilityOptions = ['all', 'car', 'motorcycle'];
  
  const filteredAccessories = storeAccessories.filter(acc => {
    const categoryMatch = selectedCategory === 'all' || acc.category === selectedCategory;
    const compatibilityMatch = selectedCompatibility === 'all' || acc.compatible.includes(selectedCompatibility);
    return categoryMatch && compatibilityMatch;
  });

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
    alert('¡Accesorio agregado al carrito!');
  };

  const getCompatibilityLabel = (compatible: string[]) => {
    if (compatible.includes('car') && compatible.includes('motorcycle')) {
      return 'Carros y Motos';
    } else if (compatible.includes('car')) {
      return 'Solo Carros';
    } else {
      return 'Solo Motos';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tienda de Accesorios
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra los mejores accesorios para tu vehículo. Desde seguridad hasta comodidad y tecnología.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Filtros</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-700 text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'Todas' : category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Compatible con</label>
              <div className="flex flex-wrap gap-2">
                {compatibilityOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedCompatibility(option)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                      selectedCompatibility === option
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {option === 'all' ? 'Todos' : option === 'car' ? 'Carros' : 'Motos'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Mostrando {filteredAccessories.length} accesorio{filteredAccessories.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAccessories.map((accessory) => (
            <div
              key={accessory.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img 
                  src={accessory.image} 
                  alt={accessory.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-700 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {accessory.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{accessory.name}</h3>
                <p className="text-gray-600 mb-3 text-sm line-clamp-2">{accessory.description}</p>
                
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-1">Compatible con:</div>
                  <div className="text-sm font-medium text-blue-600">
                    {getCompatibilityLabel(accessory.compatible)}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-orange-500">
                    ${accessory.price}
                  </span>
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

        {filteredAccessories.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Filter className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No se encontraron accesorios
            </h3>
            <p className="text-gray-600">
              Intenta cambiar los filtros para ver más productos
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccessoriesView;