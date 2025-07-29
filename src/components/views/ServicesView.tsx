import React from 'react';
import { Wrench, Shield, Clock, Award, Zap, Settings } from 'lucide-react';
import { ViewType } from '../../types';

interface ServicesViewProps {
  onNavigate: (view: ViewType) => void;
}

const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Mantenimiento General',
      description: 'Cambio de aceite, filtros, revisión completa del motor y sistemas básicos.',
      price: 'Desde $150',
      duration: '2-3 horas'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Sistema Eléctrico',
      description: 'Diagnóstico y reparación de problemas eléctricos, batería y alternador.',
      price: 'Desde $200',
      duration: '3-5 horas'
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: 'Reparación de Motor',
      description: 'Reparación completa o parcial del motor, overhaul y ajustes especializados.',
      price: 'Desde $800',
      duration: '1-3 días'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Frenos y Suspensión',
      description: 'Revisión y reparación del sistema de frenos, amortiguadores y suspensión.',
      price: 'Desde $300',
      duration: '4-6 horas'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Servicio Express',
      description: 'Revisión rápida, diagnóstico básico y servicios de emergencia.',
      price: 'Desde $80',
      duration: '30-60 min'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Inspección Premium',
      description: 'Revisión completa de 50 puntos con reporte detallado y recomendaciones.',
      price: 'Desde $120',
      duration: '2 horas'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Servicios de Reparación
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro equipo de técnicos certificados ofrece servicios de reparación 
            y mantenimiento para mantener tu vehículo en óptimas condiciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-blue-700 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-blue-700">
                  {service.price}
                </span>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {service.duration}
                </span>
              </div>
              <button
                onClick={() => onNavigate('appointments')}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Agendar Servicio
              </button>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Shield className="h-12 w-12 text-orange-500 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Garantía Completa</h4>
            <p className="text-gray-600 text-sm">Todos nuestros servicios incluyen garantía de calidad</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Clock className="h-12 w-12 text-orange-500 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Servicio Rápido</h4>
            <p className="text-gray-600 text-sm">Diagnóstico y reparación en el menor tiempo posible</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Award className="h-12 w-12 text-orange-500 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Técnicos Certificados</h4>
            <p className="text-gray-600 text-sm">Personal especializado y con amplia experiencia</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Wrench className="h-12 w-12 text-orange-500 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Equipos Modernos</h4>
            <p className="text-gray-600 text-sm">Herramientas y equipos de última tecnología</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesView;