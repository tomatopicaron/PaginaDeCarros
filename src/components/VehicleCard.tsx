import React, { useState } from 'react';
import { Plus, Palette, Wrench, Eye } from 'lucide-react';
import { Vehicle, VehicleColor, Accessory, CartItem } from '../types';
import { accessories } from '../data/vehicles';

interface VehicleCardProps {
  vehicle: Vehicle;
  onAddToCart: (item: CartItem) => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState<VehicleColor>(vehicle.colors[0]);
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);
  const [showConfig, setShowConfig] = useState(false);

  const compatibleAccessories = accessories.filter(acc => 
    acc.compatible.includes(vehicle.type)
  );

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
      const accessory = accessories.find(acc => acc.id === accId);
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
    setShowConfig(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative group">
        <img 
          src={selectedColor.image} 
          alt={vehicle.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <button
            onClick={() => setShowConfig(true)}
            className="bg-white text-gray-900 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2"
          >
            <Eye className="h-4 w-4" />
            Configurar
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
              ${calculateTotalPrice().toLocaleString()}
            </span>
            {selectedAccessories.length > 0 && (
              <span className="text-sm text-gray-500 block">
                Precio base: ${vehicle.basePrice.toLocaleString()}
              </span>
            )}
          </div>
          <button
            onClick={() => setShowConfig(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Personalizar
          </button>
        </div>
      </div>

      {/* Configuration Modal */}
      {showConfig && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Configurar {vehicle.name}</h2>
                <button
                  onClick={() => setShowConfig(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image and Colors */}
                <div>
                  <img 
                    src={selectedColor.image} 
                    alt={vehicle.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Palette className="h-5 w-5" />
                      Color
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {vehicle.colors.map((color) => (
                        <button
                          key={color.name}
                          onClick={() => setSelectedColor(color)}
                          className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                            selectedColor.name === color.name
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-6 h-6 rounded-full border-2 border-gray-300"
                              style={{ backgroundColor: color.code }}
                            />
                            <div className="text-left">
                              <div className="font-medium">{color.name}</div>
                              {color.priceModifier > 0 && (
                                <div className="text-sm text-green-600">
                                  +${color.priceModifier}
                                </div>
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Accessories */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Wrench className="h-5 w-5" />
                    Accesorios
                  </h3>
                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {compatibleAccessories.map((accessory) => (
                      <div
                        key={accessory.id}
                        className={`p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                          selectedAccessories.includes(accessory.id)
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => toggleAccessory(accessory.id)}
                      >
                        <div className="flex items-center gap-3">
                          <img 
                            src={accessory.image} 
                            alt={accessory.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <div className="font-medium">{accessory.name}</div>
                            <div className="text-sm text-gray-600">{accessory.description}</div>
                            <div className="text-lg font-bold text-green-600">
                              +${accessory.price}
                            </div>
                          </div>
                          <input
                            type="checkbox"
                            checked={selectedAccessories.includes(accessory.id)}
                            onChange={() => toggleAccessory(accessory.id)}
                            className="w-5 h-5 text-blue-600"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Price Summary */}
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Precio base:</span>
                        <span>${vehicle.basePrice.toLocaleString()}</span>
                      </div>
                      {selectedColor.priceModifier > 0 && (
                        <div className="flex justify-between">
                          <span>Color {selectedColor.name}:</span>
                          <span>+${selectedColor.priceModifier}</span>
                        </div>
                      )}
                      {selectedAccessories.map(accId => {
                        const acc = accessories.find(a => a.id === accId);
                        return acc ? (
                          <div key={accId} className="flex justify-between">
                            <span>{acc.name}:</span>
                            <span>+${acc.price}</span>
                          </div>
                        ) : null;
                      })}
                      <div className="border-t pt-2 flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span className="text-blue-700">${calculateTotalPrice().toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
                  >
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleCard;