import { Vehicle, StoreAccessory } from '../types';

export const vehicles: Vehicle[] = [
  {
    id: 'car-1',
    name: 'Toyota Corolla 2024',
    type: 'car',
    basePrice: 25000,
    category: 'Sedán',
    description: 'Sedán confiable y económico, perfecto para uso diario',
    features: ['Motor 1.8L', 'Transmisión CVT', 'Aire acondicionado', 'Sistema de seguridad Toyota Safety Sense'],
    colors: [
      {
        name: 'Blanco Perla',
        code: '#F8F9FA',
        image: 'https://media.ed.edmunds-media.com/toyota/corolla/2023/oem/2023_toyota_corolla_sedan_xse_fq_oem_1_1280.jpg',
        priceModifier: 0
      },
      {
        name: 'Negro Diamante',
        code: '#212529',
        image: 'https://www.elcarrocolombiano.com/wp-content/uploads/2023/05/202309-TOYOTA-COROLLA-2024-PORTADA.jpg',
        priceModifier: 500
      },
      {
        name: 'Rojo Metálico',
        code: '#DC3545',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRQBCZRB-vlvVbd-1QuGD26KLQ733LjTAkWg&s',
        priceModifier: 800
      },
      {
        name: 'Azul Marino',
        code: '#0F3460',
        image: 'https://images.pexels.com/photos/1054434/pexels-photo-1054434.jpeg?auto=compress&cs=tinysrgb&w=800',
        priceModifier: 600
      }
    ],
    accessories: [
      {
        id: 'car-acc-1',
        name: 'Llantas Deportivas 18"',
        price: 1200,
        category: 'Llantas',
        description: 'Llantas de aleación ligera para mejor rendimiento',
        image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'car-acc-2',
        name: 'Sistema de Audio Premium',
        price: 800,
        category: 'Audio',
        description: 'Sistema de sonido de alta calidad con subwoofer',
        image: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'car-acc-3',
        name: 'Kit de Luces LED',
        price: 450,
        category: 'Iluminación',
        description: 'Luces LED de alta eficiencia para mayor visibilidad',
        image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'car-acc-4',
        name: 'Alarma de Seguridad',
        price: 280,
        category: 'Seguridad',
        description: 'Sistema de alarma con control remoto',
        image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  },
  {
    id: 'car-2',
    name: 'Honda Civic 2024',
    type: 'car',
    basePrice: 28000,
    category: 'Sedán',
    description: 'Deportivo y elegante con tecnología avanzada',
    features: ['Motor 2.0L Turbo', 'Transmisión Manual 6V', 'Honda Sensing', 'Pantalla táctil 9"'],
    colors: [
      {
        name: 'Gris Titanio',
        code: '#6C757D',
        image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
        priceModifier: 0
      },
      {
        name: 'Blanco Alpine',
        code: '#FFFFFF',
        image: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800',
        priceModifier: 300
      },
      {
        name: 'Azul Deportivo',
        code: '#007BFF',
        image: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800',
        priceModifier: 1000
      }
    ],
    accessories: [
      {
        id: 'car-acc-5',
        name: 'Spoiler Deportivo',
        price: 650,
        category: 'Estética',
        description: 'Spoiler aerodinámico para mejor apariencia',
        image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'car-acc-6',
        name: 'Sistema de Audio Premium',
        price: 800,
        category: 'Audio',
        description: 'Sistema de sonido de alta calidad con subwoofer',
        image: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  },
  {
    id: 'moto-1',
    name: 'Yamaha YZF-R3',
    type: 'motorcycle',
    basePrice: 8500,
    category: 'Deportiva',
    description: 'Motocicleta deportiva perfecta para principiantes y expertos',
    features: ['Motor 321cc', 'ABS', 'Tablero LCD', 'Faros LED'],
    colors: [
      {
        name: 'Azul Yamaha',
        code: '#0066CC',
        image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
        priceModifier: 0
      },
      {
        name: 'Negro Mate',
        code: '#2C2C2C',
        image: 'https://images.pexels.com/photos/1715193/pexels-photo-1715193.jpeg?auto=compress&cs=tinysrgb&w=800',
        priceModifier: 400
      },
      {
        name: 'Blanco Racing',
        code: '#F8F9FA',
        image: 'https://images.pexels.com/photos/1715191/pexels-photo-1715191.jpeg?auto=compress&cs=tinysrgb&w=800',
        priceModifier: 600
      }
    ],
    accessories: [
      {
        id: 'moto-acc-1',
        name: 'Escape Deportivo',
        price: 600,
        category: 'Performance',
        description: 'Escape de acero inoxidable para mejor sonido',
        image: 'https://images.pexels.com/photos/1715191/pexels-photo-1715191.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'moto-acc-2',
        name: 'Kit de Luces LED',
        price: 350,
        category: 'Iluminación',
        description: 'Luces LED para mayor visibilidad',
        image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  },
  {
    id: 'moto-2',
    name: 'Honda CB650R',
    type: 'motorcycle',
    basePrice: 12000,
    category: 'Naked',
    description: 'Moto naked moderna con excelente rendimiento urbano',
    features: ['Motor 649cc', 'Sistema HSTC', 'Frenos CBS', 'Suspensión Showa'],
    colors: [
      {
        name: 'Rojo Honda',
        code: '#DC3545',
        image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
        priceModifier: 0
      },
      {
        name: 'Negro Metálico',
        code: '#343A40',
        image: 'https://images.pexels.com/photos/1715193/pexels-photo-1715193.jpeg?auto=compress&cs=tinysrgb&w=800',
        priceModifier: 500
      }
    ],
    accessories: [
      {
        id: 'moto-acc-3',
        name: 'Protector de Motor',
        price: 280,
        category: 'Protección',
        description: 'Protector de motor contra impactos',
        image: 'https://images.pexels.com/photos/1715193/pexels-photo-1715193.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  }
];

export const storeAccessories: StoreAccessory[] = [
  {
    id: 'store-acc-1',
    name: 'Casco Integral Premium',
    price: 350,
    category: 'Seguridad',
    description: 'Casco certificado DOT con visera antivaho',
    image: 'https://images.pexels.com/photos/1715193/pexels-photo-1715193.jpeg?auto=compress&cs=tinysrgb&w=400',
    compatible: ['motorcycle']
  },
  {
    id: 'store-acc-2',
    name: 'Guantes de Cuero',
    price: 120,
    category: 'Seguridad',
    description: 'Guantes de cuero genuino con protección',
    image: 'https://images.pexels.com/photos/1715191/pexels-photo-1715191.jpeg?auto=compress&cs=tinysrgb&w=400',
    compatible: ['motorcycle']
  },
  {
    id: 'store-acc-3',
    name: 'Chaqueta Protectora',
    price: 280,
    category: 'Seguridad',
    description: 'Chaqueta con protecciones en codos y espalda',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400',
    compatible: ['motorcycle']
  },
  {
    id: 'store-acc-4',
    name: 'Fundas para Asientos',
    price: 80,
    category: 'Comodidad',
    description: 'Fundas de cuero sintético para asientos',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400',
    compatible: ['car']
  },
  {
    id: 'store-acc-5',
    name: 'Tapetes Premium',
    price: 150,
    category: 'Comodidad',
    description: 'Tapetes de goma de alta calidad',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400',
    compatible: ['car']
  },
  {
    id: 'store-acc-6',
    name: 'Organizador de Maletero',
    price: 60,
    category: 'Organización',
    description: 'Organizador plegable para maletero',
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=400',
    compatible: ['car']
  },
  {
    id: 'store-acc-7',
    name: 'Cargador USB Dual',
    price: 25,
    category: 'Tecnología',
    description: 'Cargador USB dual para encendedor',
    image: 'https://images.pexels.com/photos/1054434/pexels-photo-1054434.jpeg?auto=compress&cs=tinysrgb&w=400',
    compatible: ['car', 'motorcycle']
  },
  {
    id: 'store-acc-8',
    name: 'Soporte para Teléfono',
    price: 35,
    category: 'Tecnología',
    description: 'Soporte magnético para smartphone',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400',
    compatible: ['car', 'motorcycle']
  }
];