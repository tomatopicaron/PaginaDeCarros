import React, { useState } from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import HomeView from './components/views/HomeView';
import VehiclesView from './components/views/VehiclesView';
import VehicleConfigView from './components/views/VehicleConfigView';
import AccessoriesView from './components/views/AccessoriesView';
import ServicesView from './components/views/ServicesView';
import AppointmentsView from './components/views/AppointmentsView';
import SupportView from './components/views/SupportView';
import { CartItem, ViewType } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleNavigate = (view: ViewType, vehicleId?: string) => {
    setCurrentView(view);
    if (vehicleId) {
      setSelectedVehicleId(vehicleId);
    }
  };

  const addToCart = (item: CartItem) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => 
        cartItem.id === item.id || 
        (cartItem.type === 'vehicle' && item.type === 'vehicle' && cartItem.name === item.name)
      );
      
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === existingItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      
      return [...prev, item];
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (itemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView onNavigate={handleNavigate} />;
      case 'vehicles':
        return <VehiclesView onNavigate={handleNavigate} />;
      case 'vehicle-config':
        return (
          <VehicleConfigView
            vehicleId={selectedVehicleId}
            onNavigate={handleNavigate}
            onAddToCart={addToCart}
          />
        );
      case 'accessories':
        return <AccessoriesView onAddToCart={addToCart} />;
      case 'services':
        return <ServicesView onNavigate={handleNavigate} />;
      case 'appointments':
        return <AppointmentsView />;
      case 'support':
        return <SupportView />;
      default:
        return <HomeView onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
        currentView={currentView}
        onNavigate={handleNavigate}
      />
      
      {renderCurrentView()}
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </div>
  );
}

export default App;