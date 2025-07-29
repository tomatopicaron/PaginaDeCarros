import React, { useState } from 'react';
import { ArrowLeft, Palette, Wrench, ShoppingCart } from 'lucide-react';
import { vehicles } from '../../data/vehicles';
import { ViewType, Vehicle, VehicleColor, VehicleAccessory, CartItem } from '../../types';

interface VehicleConfigViewProps {
  vehicleId: string;
  onNavigate: (view: ViewType) => void;
  onAddToCart: (item: CartItem) => void;
}

const VehicleConfigView: React.FC<VehicleConfigViewProps> = ({ vehicleId, onNavigate, onAddToCart }) => {
  const vehicle = vehicles.find(v => v.id === vehicleId);
  
  if (!vehicle) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vehículo no encontrado</h2>
          <button
            onClick={() => onNavigate('vehicles')}
            className="bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Volver a Vehículos
          </button>
        </div>
      </div>
    );
  }

  const [selectedColor, setSelectedColor] = useState<VehicleColor>(vehicle.colors[0]);
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);

  const toggleAccessory = (accessoryId: string) => {
    setSelectedAccessories(prev => 
      prev.includes(accessoryId) 
        ? prev.filter(id => id !== accessoryId)
        : [...prev, accessoryId]
    );
  };

  const calculateTotalPrice = () => {
    const colorPrice = selectedColor.priceModifier;
    const accessoriesPrice = selectedAccessories.reduce((total, accId) => {
      const accessory = vehicle.accessories.find(acc => acc.id === accId);
      return total + (accessory?.price || 0);
    }, 0);
    return vehicle.basePrice + colorPrice + accessoriesPrice;
  };

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: `${vehicle.id}-${Date.now()}`,
      type: 'vehicle',
      name: `${vehicle.name} - ${selectedColor.name}`,
      price: calculateTotalPrice(),
      quantity: 1,
      image: selectedColor.image,
      vehicleConfig: {
        color: selectedColor.name,
        accessories: selectedAccessories
      }
    };
    onAddToCart(cartItem);
    alert('¡Vehículo agregado al carrito!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => onNavigate('vehicles')}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Volver a Vehículos
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Personalizar {vehicle.name}</h1>
          <div></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image and Colors */}
          <div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
              <img 
                src={selectedColor.image} 
                alt={vehicle.name}
                className="w-full h-80 object-cover"
              />
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Palette className="h-5 w-5 text-blue-700" />
                Selecciona el Color
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {vehicle.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedColor.name === color.name
                        ? 'border-blue-500 bg-blue-50 shadow-md'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-8 h-8 rounded-full border-2 border-gray-300 shadow-sm"
                        style={{ backgroundColor: color.code }}
                      />
                      <div className="text-left">
                        <div className="font-medium text-gray-900">{color.name}</div>
                        {color.priceModifier > 0 ? (
                          <div className="text-sm text-green-600 font-semibold">
                            +${color.priceModifier}
                          </div>
                        ) : (
                          <div className="text-sm text-gray-500">Incluido</div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Accessories and Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Wrench className="h-5 w-5 text-blue-700" />
                Accesorios Disponibles
              </h3>
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {vehicle.accessories.map((accessory) => (
                  <div
                    key={accessory.id}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                      selectedAccessories.includes(accessory.id)
                        ? 'border-blue-500 bg-blue-50 shadow-md'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                    onClick={() => toggleAccessory(accessory.id)}
                  >
                    <div className="flex items-center gap-4">
                      <img 
                        src={accessory.image} 
                        alt={accessory.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{accessory.name}</div>
                        <div className="text-sm text-gray-600 mb-1">{accessory.description}</div>
                        <div className="text-sm text-blue-600 font-medium">{accessory.category}</div>
                        <div className="text-lg font-bold text-green-600">
                          +${accessory.price}
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={selectedAccessories.includes(accessory.id)}
                        onChange={() => toggleAccessory(accessory.id)}
                        className="w-5 h-5 text-blue-600 rounded"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Resumen de Precio</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Precio base:</span>
                  <span className="font-semibold">${vehicle.basePrice.toLocaleString()}</span>
                </div>
                {selectedColor.priceModifier > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Color {selectedColor.name}:</span>
                    <span className="font-semibold text-green-600">+${selectedColor.priceModifier}</span>
                  </div>
                )}
                {selectedAccessories.map(accId => {
                  const acc = vehicle.accessories.find(a => a.id === accId);
                  return acc ? (
                    <div key={accId} className="flex justify-between items-center">
                      <span className="text-gray-600">{acc.name}:</span>
                      <span className="font-semibold text-green-600">+${acc.price}</span>
                    </div>
                  ) : null;
                })}
                <div className="border-t pt-3 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">Total:</span>
                  <span className="text-3xl font-bold text-blue-700">
                    ${calculateTotalPrice().toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleConfigView;