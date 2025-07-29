export interface Vehicle {
  id: string;
  name: string;
  type: 'car' | 'motorcycle';
  basePrice: number;
  colors: VehicleColor[];
  accessories: VehicleAccessory[];
  category: string;
  description: string;
  features: string[];
}

export interface VehicleColor {
  name: string;
  code: string;
  image: string;
  priceModifier: number;
}

export interface VehicleAccessory {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface StoreAccessory {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  compatible: string[];
}

export interface CartItem {
  id: string;
  type: 'vehicle' | 'accessory';
  name: string;
  price: number;
  quantity: number;
  image: string;
  vehicleConfig?: {
    color: string;
    accessories: string[];
  };
}

export interface Appointment {
  id: string;
  date: string;
  time: string;
  service: string;
  vehicleType: string;
  description: string;
  customerInfo: CustomerInfo;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
}

export type ViewType = 'home' | 'vehicles' | 'accessories' | 'services' | 'appointments' | 'support' | 'vehicle-config';