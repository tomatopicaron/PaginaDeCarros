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
        image: 'https://i.pinimg.com/736x/d6/24/dc/d624dc84ab1b68d4bbed3682c37e71c0.jpg',
        priceModifier: 800
      },
      {
        name: 'Azul Marino',
        code: '#0F3460',
        image: 'https://soymotor.com/sites/default/files/2023-02/Toyota%20Corolla%202023%20exterior%201.jpg',
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
        image: 'https://i.pinimg.com/1200x/7b/e6/d2/7be6d26233ad1fe20940ff7727cccf8d.jpg'
      },
      {
        id: 'car-acc-2',
        name: 'Sistema de Audio Premium',
        price: 800,
        category: 'Audio',
        description: 'Sistema de sonido de alta calidad con subwoofer',
        image: 'https://i.pinimg.com/736x/78/58/91/785891a2f4908c9f1e91a83dc8fdd6e4.jpg'
      },
      {
        id: 'car-acc-3',
        name: 'Kit de Luces LED',
        price: 450,
        category: 'Iluminación',
        description: 'Luces LED de alta eficiencia para mayor visibilidad',
        image: 'https://i.pinimg.com/736x/60/fd/3f/60fd3f3281d5438029f548d282b20fed.jpg'
      },
      {
        id: 'car-acc-4',
        name: 'Alarma de Seguridad',
        price: 280,
        category: 'Seguridad',
        description: 'Sistema de alarma con control remoto',
        image: 'https://i.pinimg.com/1200x/60/5f/98/605f98555733b566446f17b8b4f685ec.jpg'
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
        image: 'https://i.pinimg.com/1200x/a5/65/54/a565549b8e04168eab5a20089db757a8.jpg',
        priceModifier: 0
      },
      {
        name: 'Blanco Alpine',
        code: '#FFFFFF',
        image: 'https://i.pinimg.com/1200x/d6/0a/75/d60a75eb3df8e22b0e6837a1a4d8f87f.jpg',
        priceModifier: 300
      },
      {
        name: 'Azul Deportivo',
        code: '#007BFF',
        image: 'https://i.pinimg.com/736x/2b/6d/bc/2b6dbcee8448054e2c78ad73be6cf437.jpg',
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
        image: 'https://i.pinimg.com/736x/81/14/4f/81144f5fcb9005174ab32fd502c65a01.jpg'
      },
      {
        id: 'car-acc-6',
        name: 'Sistema de Audio Premium',
        price: 800,
        category: 'Audio',
        description: 'Sistema de sonido de alta calidad con subwoofer',
        image: 'https://i.pinimg.com/736x/78/58/91/785891a2f4908c9f1e91a83dc8fdd6e4.jpg'
      }
    ]
  },
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
        image: 'https://i.pinimg.com/736x/d6/24/dc/d624dc84ab1b68d4bbed3682c37e71c0.jpg',
        priceModifier: 800
      },
      {
        name: 'Azul Marino',
        code: '#0F3460',
        image: 'https://soymotor.com/sites/default/files/2023-02/Toyota%20Corolla%202023%20exterior%201.jpg',
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
        image: 'https://i.pinimg.com/1200x/7b/e6/d2/7be6d26233ad1fe20940ff7727cccf8d.jpg'
      },
      {
        id: 'car-acc-2',
        name: 'Sistema de Audio Premium',
        price: 800,
        category: 'Audio',
        description: 'Sistema de sonido de alta calidad con subwoofer',
        image: 'https://i.pinimg.com/736x/78/58/91/785891a2f4908c9f1e91a83dc8fdd6e4.jpg'
      },
      {
        id: 'car-acc-3',
        name: 'Kit de Luces LED',
        price: 450,
        category: 'Iluminación',
        description: 'Luces LED de alta eficiencia para mayor visibilidad',
        image: 'https://i.pinimg.com/736x/60/fd/3f/60fd3f3281d5438029f548d282b20fed.jpg'
      },
      {
        id: 'car-acc-4',
        name: 'Alarma de Seguridad',
        price: 280,
        category: 'Seguridad',
        description: 'Sistema de alarma con control remoto',
        image: 'https://i.pinimg.com/1200x/60/5f/98/605f98555733b566446f17b8b4f685ec.jpg'
      }
    ]
  },
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
        image: 'https://i.pinimg.com/736x/d6/24/dc/d624dc84ab1b68d4bbed3682c37e71c0.jpg',
        priceModifier: 800
      },
      {
        name: 'Azul Marino',
        code: '#0F3460',
        image: 'https://soymotor.com/sites/default/files/2023-02/Toyota%20Corolla%202023%20exterior%201.jpg',
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
        image: 'https://i.pinimg.com/1200x/7b/e6/d2/7be6d26233ad1fe20940ff7727cccf8d.jpg'
      },
      {
        id: 'car-acc-2',
        name: 'Sistema de Audio Premium',
        price: 800,
        category: 'Audio',
        description: 'Sistema de sonido de alta calidad con subwoofer',
        image: 'https://i.pinimg.com/736x/78/58/91/785891a2f4908c9f1e91a83dc8fdd6e4.jpg'
      },
      {
        id: 'car-acc-3',
        name: 'Kit de Luces LED',
        price: 450,
        category: 'Iluminación',
        description: 'Luces LED de alta eficiencia para mayor visibilidad',
        image: 'https://i.pinimg.com/736x/60/fd/3f/60fd3f3281d5438029f548d282b20fed.jpg'
      },
      {
        id: 'car-acc-4',
        name: 'Alarma de Seguridad',
        price: 280,
        category: 'Seguridad',
        description: 'Sistema de alarma con control remoto',
        image: 'https://i.pinimg.com/1200x/60/5f/98/605f98555733b566446f17b8b4f685ec.jpg'
      }
    ]
  },
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
        image: 'https://i.pinimg.com/736x/d6/24/dc/d624dc84ab1b68d4bbed3682c37e71c0.jpg',
        priceModifier: 800
      },
      {
        name: 'Azul Marino',
        code: '#0F3460',
        image: 'https://soymotor.com/sites/default/files/2023-02/Toyota%20Corolla%202023%20exterior%201.jpg',
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
        image: 'https://i.pinimg.com/1200x/7b/e6/d2/7be6d26233ad1fe20940ff7727cccf8d.jpg'
      },
      {
        id: 'car-acc-2',
        name: 'Sistema de Audio Premium',
        price: 800,
        category: 'Audio',
        description: 'Sistema de sonido de alta calidad con subwoofer',
        image: 'https://i.pinimg.com/736x/78/58/91/785891a2f4908c9f1e91a83dc8fdd6e4.jpg'
      },
      {
        id: 'car-acc-3',
        name: 'Kit de Luces LED',
        price: 450,
        category: 'Iluminación',
        description: 'Luces LED de alta eficiencia para mayor visibilidad',
        image: 'https://i.pinimg.com/736x/60/fd/3f/60fd3f3281d5438029f548d282b20fed.jpg'
      },
      {
        id: 'car-acc-4',
        name: 'Alarma de Seguridad',
        price: 280,
        category: 'Seguridad',
        description: 'Sistema de alarma con control remoto',
        image: 'https://i.pinimg.com/1200x/60/5f/98/605f98555733b566446f17b8b4f685ec.jpg'
      }
    ]
  },
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
        image: 'https://i.pinimg.com/736x/d6/24/dc/d624dc84ab1b68d4bbed3682c37e71c0.jpg',
        priceModifier: 800
      },
      {
        name: 'Azul Marino',
        code: '#0F3460',
        image: 'https://soymotor.com/sites/default/files/2023-02/Toyota%20Corolla%202023%20exterior%201.jpg',
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
        image: 'https://i.pinimg.com/1200x/7b/e6/d2/7be6d26233ad1fe20940ff7727cccf8d.jpg'
      },
      {
        id: 'car-acc-2',
        name: 'Sistema de Audio Premium',
        price: 800,
        category: 'Audio',
        description: 'Sistema de sonido de alta calidad con subwoofer',
        image: 'https://i.pinimg.com/736x/78/58/91/785891a2f4908c9f1e91a83dc8fdd6e4.jpg'
      },
      {
        id: 'car-acc-3',
        name: 'Kit de Luces LED',
        price: 450,
        category: 'Iluminación',
        description: 'Luces LED de alta eficiencia para mayor visibilidad',
        image: 'https://i.pinimg.com/736x/60/fd/3f/60fd3f3281d5438029f548d282b20fed.jpg'
      },
      {
        id: 'car-acc-4',
        name: 'Alarma de Seguridad',
        price: 280,
        category: 'Seguridad',
        description: 'Sistema de alarma con control remoto',
        image: 'https://i.pinimg.com/1200x/60/5f/98/605f98555733b566446f17b8b4f685ec.jpg'
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
        image: 'https://i.pinimg.com/736x/f0/3e/42/f03e4222848b72d8f75dd387b0d44b1e.jpg',
        priceModifier: 0
      },
      {
        name: 'Negro Mate',
        code: '#2C2C2C',
        image: 'https://i.pinimg.com/736x/c3/4a/f9/c34af93142f0d52d36cdf370b7f6e97f.jpg',
        priceModifier: 400
      },
      {
        name: 'Blanco Racing',
        code: '#F8F9FA',
        image: 'https://i.pinimg.com/1200x/57/73/c2/5773c2a23103e9ac70cc9bea42b0f81c.jpg',
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
        image: 'https://i.pinimg.com/1200x/3a/e5/be/3ae5be9024cc0b3ba4167b7635abf03e.jpg'
      },
      {
        id: 'moto-acc-2',
        name: 'Kit de Luces LED',
        price: 350,
        category: 'Iluminación',
        description: 'Luces LED para mayor visibilidad',
        image: 'https://i.pinimg.com/736x/60/fd/3f/60fd3f3281d5438029f548d282b20fed.jpg'
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
        image: 'https://i.pinimg.com/1200x/8d/25/d8/8d25d858d2169579edf6e9300edf6caa.jpg',
        priceModifier: 0
      },
      {
        name: 'Negro Metálico',
        code: '#343A40',
        image: 'https://i.pinimg.com/1200x/2d/9b/61/2d9b612b42374a8d248f29db5360991c.jpg',
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
    image: 'https://i.pinimg.com/1200x/9c/89/56/9c8956c286d4c7c1463bca2c515ac514.jpg',
    compatible: ['motorcycle']
  },
  {
    id: 'store-acc-2',
    name: 'Guantes de Cuero',
    price: 120,
    category: 'Seguridad',
    description: 'Guantes de cuero genuino con protección',
    image: 'https://i.pinimg.com/736x/d4/3c/8d/d43c8df0fbb9783924c66570d36871f7.jpg',
    compatible: ['motorcycle']
  },
  {
    id: 'store-acc-3',
    name: 'Chaqueta Protectora',
    price: 280,
    category: 'Seguridad',
    description: 'Chaqueta con protecciones en codos y espalda',
    image: 'https://i.pinimg.com/1200x/71/5d/25/715d2570d5feba2388e6c2c02e7a4f5e.jpg',
    compatible: ['motorcycle']
  },
  {
    id: 'store-acc-4',
    name: 'Fundas para Asientos',
    price: 80,
    category: 'Comodidad',
    description: 'Fundas de cuero sintético para asientos',
    image: 'https://i.pinimg.com/736x/28/c2/ef/28c2ef930eaa9fb101dfe550dcff5856.jpg',
    compatible: ['car']
  },
  {
    id: 'store-acc-5',
    name: 'Tapetes Premium',
    price: 150,
    category: 'Comodidad',
    description: 'Tapetes de goma de alta calidad',
    image: 'https://i.pinimg.com/736x/dc/0c/e4/dc0ce40783250e343274a597beb5cbe8.jpg',
    compatible: ['car']
  },
  {
    id: 'store-acc-6',
    name: 'Organizador de Maletero',
    price: 60,
    category: 'Organización',
    description: 'Organizador plegable para maletero',
    image: 'https://i.pinimg.com/1200x/33/7f/a2/337fa2bd9fcde00d57ff0c9c2c251d4d.jpg',
    compatible: ['car']
  },
  {
    id: 'store-acc-7',
    name: 'Cargador USB Dual',
    price: 25,
    category: 'Tecnología',
    description: 'Cargador USB dual para encendedor',
    image: 'https://i.pinimg.com/1200x/ea/bf/96/eabf96f7772bad7170f8cf2fe40f1472.jpg',
    compatible: ['car', 'motorcycle']
  },
  {
    id: 'store-acc-8',
    name: 'Soporte para Teléfono',
    price: 35,
    category: 'Tecnología',
    description: 'Soporte magnético para smartphone',
    image: 'https://i.pinimg.com/1200x/af/76/31/af763154766a6344785610476038fb8a.jpg',
    compatible: ['car', 'motorcycle']
  }
];