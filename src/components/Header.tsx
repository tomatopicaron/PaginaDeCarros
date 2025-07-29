import React, { useState } from 'react';
import { Car, ShoppingCart, Menu, X } from 'lucide-react';
import { ViewType } from '../types';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick, currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home' as ViewType, label: 'Inicio' },
    { id: 'vehicles' as ViewType, label: 'Vehículos' },
    { id: 'accessories' as ViewType, label: 'Accesorios' },
    { id: 'services' as ViewType, label: 'Servicios' },
    { id: 'appointments' as ViewType, label: 'Citas' },
    { id: 'support' as ViewType, label: 'Soporte' }
  ];

  const handleNavigate = (view: ViewType) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => handleNavigate('home')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Car className="h-8 w-8 text-blue-700" />
            <span className="text-xl font-bold text-gray-900">AutoElite</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`transition-colors duration-200 ${
                  currentView === item.id
                    ? 'text-blue-700 font-semibold'
                    : 'text-gray-700 hover:text-blue-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-blue-700 transition-colors duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`text-left px-2 py-2 transition-colors duration-200 ${
                    currentView === item.id
                      ? 'text-blue-700 font-semibold'
                      : 'text-gray-700 hover:text-blue-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;