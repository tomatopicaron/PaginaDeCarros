import React from 'react';
import { ArrowRight, Car, Wrench, Shield } from 'lucide-react';
import { ViewType } from '../../types';

interface HomeViewProps {
  onNavigate: (view: ViewType) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tu Próximo Vehículo
            <span className="block text-orange-400">Te Está Esperando</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra amplia selección de carros y motos. Venta, reparación y accesorios de la más alta calidad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => onNavigate('vehicles')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver Vehículos
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Servicios de Reparación
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
              <Car className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Venta de Vehículos</h3>
              <p className="text-gray-200">Carros y motos nuevos con garantía completa</p>
            </div>
            <div className="text-center p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
              <Wrench className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Servicios de Reparación</h3>
              <p className="text-gray-200">Mantenimiento y reparación especializada</p>
            </div>
            <div className="text-center p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
              <Shield className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Garantía Extendida</h3>
              <p className="text-gray-200">Protección completa para tu inversión</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;