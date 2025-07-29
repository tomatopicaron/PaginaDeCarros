import React, { useState } from 'react';
import { Car, Bike } from 'lucide-react';
import VehicleCard from './VehicleCard';
import { vehicles } from '../data/vehicles';
import { CartItem } from '../types';

interface VehicleSectionProps {
  onAddToCart: (item: CartItem) => void;
}

const VehicleSection: React.FC<VehicleSectionProps> = ({ onAddToCart }) => {
  const [selectedType, setSelectedType] = useState<'all' | 'car' | 'motorcycle'>('all');

  const filteredVehicles = selectedType === 'all' 
    ? vehicles 
    : vehicles.filter(v => v.type === selectedType);

  return (
    <section id="vehicles" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Vehículos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra selección de carros y motos de las mejores marcas. 
            Personaliza tu vehículo con colores y accesorios únicos.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                selectedType === 'all'
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-700'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setSelectedType('car')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedType === 'car'
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-700'
              }`}
            >
              <Car className="h-4 w-4" />
              Carros
            </button>
            <button
              onClick={() => setSelectedType('motorcycle')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedType === 'motorcycle'
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-700'
              }`}
            >
              <Bike className="h-4 w-4" />
              Motos
            </button>
          </div>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleSection;