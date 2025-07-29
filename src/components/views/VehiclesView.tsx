import React, { useState } from 'react';
import { Car, Bike, Eye } from 'lucide-react';
import { vehicles } from '../../data/vehicles';
import { ViewType, Vehicle } from '../../types';

interface VehiclesViewProps {
  onNavigate: (view: ViewType, vehicleId?: string) => void;
}

const VehiclesView: React.FC<VehiclesViewProps> = ({ onNavigate }) => {
  const [selectedType, setSelectedType] = useState<'all' | 'car' | 'motorcycle'>('all');

  const filteredVehicles = selectedType === 'all' 
    ? vehicles 
    : vehicles.filter(v => v.type === selectedType);

  const handleConfigureVehicle = (vehicle: Vehicle) => {
    onNavigate('vehicle-config', vehicle.id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Vehículos
          </h1>
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
            <div
              key={vehicle.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative group">
                <img 
                  src={vehicle.colors[0].image} 
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={() => handleConfigureVehicle(vehicle)}
                    className="bg-white text-gray-900 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2"
                  >
                    <Eye className="h-4 w-4" />
                    Personalizar
                  </button>
                </div>
                <div className="absolute top-4 left-4 bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {vehicle.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                <p className="text-gray-600 mb-4">{vehicle.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Características:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {vehicle.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-blue-700">
                      ${vehicle.basePrice.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500 block">Precio base</span>
                  </div>
                  <button
                    onClick={() => handleConfigureVehicle(vehicle)}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Personalizar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehiclesView;