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
    id: 'car-3',
    name: 'Ford Raptor 2024',
    type: 'car',
    basePrice: 45000,
    category: 'Sedán',
    description: 'Camioneta pick up fuerte',
    features: ['Motor 5.0L', 'Transmisión CVT', 'Aire acondicionado'],
    colors: [
      {
        name: 'rojo fuego',
        code: '#F8F9FA',
        image: 'https://i.pinimg.com/1200x/68/73/9a/68739a765b4bd1d8a5f07ca92519dfd9.jpg',
        priceModifier: 0
      },
      {
        name: 'azul ford',
        code: '#212529',
        image: 'https://i.pinimg.com/1200x/e5/e0/3b/e5e03bdb63903606df2983c0fa7dbee0.jpg',
        priceModifier: 500
      },
      {
        name: 'negro medianoche',
        code: '#DC3545',
        image: 'https://i.pinimg.com/1200x/1a/1d/3f/1a1d3f468fdc1aad3e04aee9d2cf1ce4.jpg',
        priceModifier: 800
      },
      {
        name: 'blanco ford',
        code: '#0F3460',
        image: 'https://i.pinimg.com/1200x/dd/4c/6a/dd4c6ae34570e6bba3ef9ba7eda97458.jpg',
        priceModifier: 600
      }
    ],
    accessories: [
      {
        id: 'car-acc-7',
        name: 'Llantas Deportivas 18"',
        price: 1200,
        category: 'Llantas',
        description: 'Llantas de aleación ligera para mejor rendimiento',
        image: 'https://i.pinimg.com/1200x/7b/e6/d2/7be6d26233ad1fe20940ff7727cccf8d.jpg'
      },
      {
        id: 'car-acc-8',
        name: 'Sistema de Audio Premium',
        price: 800,
        category: 'Audio',
        description: 'Sistema de sonido de alta calidad con subwoofer',
        image: 'https://i.pinimg.com/736x/78/58/91/785891a2f4908c9f1e91a83dc8fdd6e4.jpg'
      },
      {
        id: 'car-acc-9',
        name: 'Kit de Luces LED',
        price: 450,
        category: 'Iluminación',
        description: 'Luces LED de alta eficiencia para mayor visibilidad',
        image: 'https://i.pinimg.com/736x/60/fd/3f/60fd3f3281d5438029f548d282b20fed.jpg'
      },
      {
        id: 'car-acc-10',
        name: 'Alarma de Seguridad',
        price: 280,
        category: 'Seguridad',
        description: 'Sistema de alarma con control remoto',
        image: 'https://i.pinimg.com/1200x/60/5f/98/605f98555733b566446f17b8b4f685ec.jpg'
      }
    ]
  },
  {
    id: 'car-4',
    name: 'Dodge challnger srt hellcat',
    type: 'car',
    basePrice: 85000,
    category: 'Sedán',
    description: 'Poder absoluto, velocidad punta increible',
    features: ['Motor 6.2L', 'Aire acondicionado', 'modo sport, servicio tecnico especial'],
    colors: [
      {
        name: 'rojo torino',
        code: '#F8F9FA',
        image: 'https://i.pinimg.com/1200x/2d/c0/72/2dc07292a670a5f28704c3bfc17e8a31.jpg',
        priceModifier: 0
      },
      {
        name: 'Negro demonio',
        code: '#212529',
        image: 'https://i.pinimg.com/736x/69/89/15/698915d1dd064248f3d3baaad5471536.jpg',
        priceModifier: 500
      },
      {
        name: 'blanco angel',
        code: '#DC3545',
        image: 'https://i.pinimg.com/1200x/6b/ef/c5/6befc55a08e2925a52850d1487fe5446.jpg',
        priceModifier: 800
      },
      {
        name: 'amarillo sol',
        code: '#0F3460',
        image: 'https://i.pinimg.com/1200x/74/4e/39/744e39da44a0f4782c6a5c29ed829222.jpg',
        priceModifier: 600
      }
    ],
    accessories: [
      {
        id: 'car-acc-11',
        name: 'Llantas Deportivas 18"',
        price: 1200,
        category: 'Llantas',
        description: 'Llantas de aleación ligera para mejor rendimiento',
        image: 'https://i.pinimg.com/1200x/7b/e6/d2/7be6d26233ad1fe20940ff7727cccf8d.jpg'
      },
      {
        id: 'car-acc-12',
        name: 'Sistema de Audio Premium',
        price: 800,
        category: 'Audio',
        description: 'Sistema de sonido de alta calidad con subwoofer',
        image: 'https://i.pinimg.com/736x/78/58/91/785891a2f4908c9f1e91a83dc8fdd6e4.jpg'
      },
      {
        id: 'car-acc-13',
        name: 'Kit de Luces LED',
        price: 450,
        category: 'Iluminación',
        description: 'Luces LED de alta eficiencia para mayor visibilidad',
        image: 'https://i.pinimg.com/736x/60/fd/3f/60fd3f3281d5438029f548d282b20fed.jpg'
      },
      {
        id: 'car-acc-14',
        name: 'Alarma de Seguridad',
        price: 280,
        category: 'Seguridad',
        description: 'Sistema de alarma con control remoto',
        image: 'https://i.pinimg.com/1200x/60/5f/98/605f98555733b566446f17b8b4f685ec.jpg'
      }
    ]
  },
  {
    id: 'car-5',
    name: 'Zastaba topolino',
    type: 'car',
    basePrice: 20000,
    category: 'Sedán',
    description: 'Clasico, full estado, full equipo',
    features: ['Motor 600L', 'Transmisión manual', 'Aire acondicionado', 'Techo solar Topolino'],
    colors: [
      {
        name: 'Blanco Zastaba',
        code: '#F8F9FA',
        image: 'https://i.pinimg.com/1200x/18/bf/77/18bf7756aa65bd64ad74ceeeb02fac91.jpg',
        priceModifier: 0
      },
      {
        name: 'Rojo topo',
        code: '#212529',
        image: 'https://i.pinimg.com/1200x/72/ad/c8/72adc84d1401bc24b755c4a4e8218369.jpg',
        priceModifier: 500
      },
      {
        name: 'Azul cielo',
        code: '#DC3545',
        image: 'https://i.pinimg.com/736x/1e/d2/f1/1ed2f1a1f86308eb7a25458b59ce72a2.jpg',
        priceModifier: 800
      },
      {
        name: 'Amarillo carreras',
        code: '#0F3460',
        image: 'https://i.pinimg.com/736x/bd/b2/b9/bdb2b96fade9b8367c316ccec7b8ed3b.jpg',
        priceModifier: 600
      }
    ],
    accessories: [
      {
        id: 'car-acc-15',
        name: 'Llantas Deportivas 14"',
        price: 1200,
        category: 'Llantas',
        description: 'Llantas de aleación ligera para mejor rendimiento',
        image: 'https://i.pinimg.com/1200x/7b/e6/d2/7be6d26233ad1fe20940ff7727cccf8d.jpg'
      },
      {
        id: 'car-acc-16',
        name: 'Sistema de Audio Premium',
        price: 800,
        category: 'Audio',
        description: 'Sistema de sonido de alta calidad con subwoofer',
        image: 'https://i.pinimg.com/736x/78/58/91/785891a2f4908c9f1e91a83dc8fdd6e4.jpg'
      },
      {
        id: 'car-acc-17',
        name: 'Kit de Luces LED',
        price: 450,
        category: 'Iluminación',
        description: 'Luces LED de alta eficiencia para mayor visibilidad',
        image: 'https://i.pinimg.com/736x/60/fd/3f/60fd3f3281d5438029f548d282b20fed.jpg'
      },
      {
        id: 'car-acc-18',
        name: 'Alarma de Seguridad',
        price: 280,
        category: 'Seguridad',
        description: 'Sistema de alarma con control remoto',
        image: 'https://i.pinimg.com/1200x/60/5f/98/605f98555733b566446f17b8b4f685ec.jpg'
      }
    ]
  },
  {
    id: 'car-6',
    name: 'Mazda Cx-5',
    type: 'car',
    basePrice: 180000,
    category: 'Sedán',
    description: 'Suv compacta, practica para ciudad y carretera',
    features: ['Motor 2.0L', 'Transmisión automatica', 'techo corredizo', 'rines de lujo'],
    colors: [
      {
        name: 'Gris mate',
        code: '#F8F9FA',
        image: 'https://i.pinimg.com/736x/e4/52/9d/e4529dbd079f34a5850b4d6aa84377b7.jpg',
        priceModifier: 0
      },
      {
        name: 'Rojo mazda',
        code: '#212529',
        image: 'https://i.pinimg.com/1200x/22/f3/eb/22f3eb6632768d96da385ba685661697.jpg',
        priceModifier: 500
      }
    ],
    accessories: [
      {
        id: 'car-acc-19',
        name: 'Llantas Deportivas 18"',
        price: 1200,
        category: 'Llantas',
        description: 'Llantas de aleación ligera para mejor rendimiento',
        image: 'https://i.pinimg.com/1200x/7b/e6/d2/7be6d26233ad1fe20940ff7727cccf8d.jpg'
      },
      {
        id: 'car-acc-20',
        name: 'Sistema de Audio Premium',
        price: 800,
        category: 'Audio',
        description: 'Sistema de sonido de alta calidad con subwoofer',
        image: 'https://i.pinimg.com/736x/78/58/91/785891a2f4908c9f1e91a83dc8fdd6e4.jpg'
      },
      {
        id: 'car-acc-21',
        name: 'Kit de Luces LED',
        price: 450,
        category: 'Iluminación',
        description: 'Luces LED de alta eficiencia para mayor visibilidad',
        image: 'https://i.pinimg.com/736x/60/fd/3f/60fd3f3281d5438029f548d282b20fed.jpg'
      },
      {
        id: 'car-acc-22',
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