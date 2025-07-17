// Datos de las colecciones con productos detallados
export const collectionsData = {
  1: {
    id: 1,
    name: 'Playeras Artísticas',
    description: 'Diseños únicos y creativos plasmados en playeras de alta calidad. Cada pieza cuenta una historia diferente.',
    products: [
      {
        id: 101,
        name: 'Playera Corazón Adornado',
        image: '/PlayerasPrimeraColeccion/MujerCorazonAdornado.jpeg',
        price: '$220',
        description: 'Elegante diseño femenino con corazón decorativo y detalles ornamentales. Perfecta para ocasiones especiales con un toque romántico y sofisticado.'
      },
      {
        id: 103,
        name: 'Playera Corazón con Cruz',
        image: '/PlayerasPrimeraColeccion/MujerCorazonConCruz.jpeg',
        price: '$220',
        description: 'Diseño espiritual que combina el corazón con elementos de cruz. Perfecta para expresar fe y amor con un estilo contemporáneo y significativo.'
      },
      {
        id: 104,
        name: 'Playera Torre Eiffel',
        image: '/PlayerasPrimeraColeccion/MujerTorreEifel.jpeg',
        price: '$220',
        description: 'Diseño parisino inspirado en la icónica Torre Eiffel. Ideal para amantes de París y el estilo francés con un toque bohemio y viajero.'
      },
      {
        id: 105,
        name: 'Playera Silueta Vestida',
        image: '/PlayerasPrimeraColeccion/MujerSiluetaVestida.jpeg',
        price: '$220',
        description: 'Elegante silueta femenina vestida con detalles sofisticados. Representa la feminidad y elegancia en un diseño minimalista pero impactante.'
      },
      {
        id: 106,
        name: 'Playera Monociclo',
        image: '/PlayerasPrimeraColeccion/MujerMonoCiclo.jpeg',
        price: '$220',
        description: 'Diseño artístico y único con temática de monociclo. Perfecta para personalidades creativas que buscan destacar con originalidad y estilo.'
      },
      {
        id: 107,
        name: 'Playera Rosa Amore',
        image: '/PlayerasPrimeraColeccion/HombreRosaAmore.jpeg',
        price: '$220',
        description: 'Diseño masculino con rosa y texto "Amore". Combina romanticismo con masculinidad en un estilo italiano contemporáneo y sofisticado.'
      },
      {
        id: 108,
        name: 'Playera Michael Jackson',
        image: '/PlayerasPrimeraColeccion/HombreMichaelJackson.jpeg',
        price: '$220',
        description: 'Homenaje al rey del pop con diseño artístico inspirado en Michael Jackson. Para amantes de la música y el estilo retro con personalidad única.'
      },
      {
        id: 109,
        name: 'Playera Conejos',
        image: '/PlayerasPrimeraColeccion/HombreConejos.jpeg',
        price: '$220',
        description: 'Diseño divertido y original con temática de conejos. Perfecto para personalidades juguetona que buscan expresar creatividad y humor.'
      },
      {
        id: 110,
        name: 'Playera Conejo en Pegaso',
        image: '/PlayerasPrimeraColeccion/HombreConejoEnPegaso.jpeg',
        price: '$220',
        description: 'Diseño fantástico que combina un conejo montando un pegaso. Arte surrealista para quienes buscan piezas únicas llenas de imaginación y magia.'
      }
    ]
  },
  2: {
    id: 2,
    name: 'Vestidos de Día',
    description: 'Vestidos exclusivos para eventos y ocasiones especiales durante el día.',
    products: [
      {
        id: 201,
        name: 'Vestido Primavera',
        image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: '$220',
        description: 'Vestido fresco y ligero con estampado floral. Perfecto para reuniones matutinas y eventos al aire libre.'
      }
    ]
  },
  3: {
    id: 3,
    name: 'Casual',
    description: 'Prendas sofisticadas para el día a día con un toque de elegancia.',
    products: [
      {
        id: 301,
        name: 'Vestido Casual Chic',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: '$220',
        description: 'Vestido cómodo y elegante para uso diario con detalles únicos.'
      }
    ]
  },
  4: {
    id: 4,
    name: 'XV`s',
    description: 'Nuestra línea de alta costura con piezas únicas hechas a mano.',
    products: [
      {
        id: 401,
        name: 'Vestido de XV Años',
        image: 'https://images.unsplash.com/photo-1594612076104-5e636c0f1f5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: '$220',
        description: 'Vestido de quinceañera con falda amplia y detalles de encaje.'
      }
    ]
  },
  5: {
    id: 5,
    name: 'De Novia',
    description: 'Complementos que realzan cualquier look con estilo y personalidad.',
    products: [
      {
        id: 501,
        name: 'Vestido de Novia Clásico',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: '$220',
        description: 'Vestido de novia elegante con cola larga y detalles únicos.'
      }
    ]
  },
  6: {
    id: 6,
    name: 'Vito: Diseños',
    description: 'Colección exclusiva con pocas unidades disponibles.',
    products: [
      {
        id: 601,
        name: 'Diseño Vito Exclusivo',
        image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: '$220',
        description: 'Pieza única de diseño exclusivo con acabados artesanales.'
      }
    ]
  }
};

export const priceDisclaimer = {
  title: 'Información de Precios',
  message: 'Los precios mostrados son aproximados. El costo final puede variar según:',
  factors: [
    '• El tipo y calidad de tela seleccionada',
    '• Las horas de trabajo requeridas para cada prenda',
    '• Modificaciones y personalizaciones especiales',
    '• Detalles adicionales como bordados o pedrería',
    '• Talla y ajustes específicos'
  ],
  note: 'Para obtener un presupuesto exacto, por favor contáctanos con los detalles específicos de tu pedido.'
};
