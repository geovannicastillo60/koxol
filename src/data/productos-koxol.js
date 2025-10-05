// K'oxol - Datos de Productos
// Catálogo completo de productos repelentes naturales 🌿
// Este archivo contiene los datos de ejemplo para configurar en Wix Stores

export const PRODUCTOS_KOXOL = {
  // =================== SPRAYS REPELENTES ===================
  sprays: [
    {
      id: "spray-antimosquitos-250ml",
      name: "Spray Anti-mosquitos K'oxol 250ml",
      slug: "spray-antimosquitos-koxol-250ml",
      description: "Spray repelente natural con citronela y alcohol. Protección efectiva contra mosquitos por hasta 8 horas. Fórmula 100% natural, segura para toda la familia.",
      longDescription: `
        Nuestro Spray Anti-mosquitos K'oxol es la protección natural más efectiva para tu familia. 
        
        ✅ **Ingredientes Naturales:**
        • Citronela pura mexicana
        • Alcohol natural
        • Aceites esenciales
        • Sin químicos dañinos
        
        ✅ **Beneficios:**
        • Protección hasta 8 horas
        • Aroma fresco y natural
        • No mancha la ropa
        • Seguro para niños mayores de 2 años
        • Hecho en México con ingredientes locales
        
        ✅ **Modo de uso:**
        Agita bien antes de usar. Aplica desde 15cm de distancia sobre la piel expuesta. 
        Evita contacto con ojos y boca. Reaplica cada 6-8 horas según necesidad.
      `,
      category: "Sprays",
      price: 299.00,
      comparePrice: 349.00,
      currency: "MXN",
      sku: "KOX-SPR-250",
      weight: 250,
      dimensions: {
        height: 18,
        width: 6,
        depth: 6
      },
      images: [
        "/images/productos/spray-antimosquitos-principal.jpg",
        "/images/productos/spray-antimosquitos-uso.jpg",
        "/images/productos/spray-antimosquitos-ingredientes.jpg"
      ],
      stock: 150,
      variants: [
        {
          name: "250ml",
          price: 299.00,
          sku: "KOX-SPR-250",
          stock: 150
        },
        {
          name: "500ml",
          price: 549.00,
          sku: "KOX-SPR-500", 
          stock: 80
        }
      ],
      tags: ["repelente", "natural", "citronela", "mosquitos", "familia"],
      featured: true,
      bestseller: true,
      organic: true,
      madeInMexico: true
    },
    
    {
      id: "spray-familiar-150ml",
      name: "Spray Familiar K'oxol 150ml",
      slug: "spray-familiar-koxol-150ml",
      description: "Versión suave especial para niños y piel sensible. Protección natural sin irritaciones.",
      price: 249.00,
      comparePrice: 289.00,
      category: "Sprays",
      sku: "KOX-SPR-FAM-150",
      stock: 200,
      featured: true,
      tags: ["niños", "familia", "suave", "natural"]
    }
  ],

  // =================== VELAS AROMÁTICAS ===================
  velas: [
    {
      id: "vela-citronela-grande",
      name: "Vela Aromática Repelente K'oxol Grande",
      slug: "vela-aromatica-repelente-grande",
      description: "Vela de cera natural con citronela. Crea un ambiente protegido y aromático en espacios interiores y exteriores.",
      longDescription: `
        Transforma tu hogar en un espacio protegido con nuestras Velas Aromáticas K'oxol.
        
        ✅ **Características:**
        • Cera 100% natural de soya
        • Citronela pura concentrada
        • Duración: 40-50 horas
        • Aroma relajante y repelente
        • Mecha de algodón natural
        
        ✅ **Ideal para:**
        • Cenas al aire libre
        • Terrazas y jardines
        • Salas y dormitorios
        • Oficinas y espacios de trabajo
        
        ✅ **Cuidados:**
        Corta la mecha a 1cm antes de cada uso. No dejes encendida sin supervisión.
        Mantén alejada de niños y mascotas.
      `,
      category: "Velas",
      price: 199.00,
      comparePrice: 239.00,
      sku: "KOX-VELA-GDE",
      weight: 300,
      burnTime: "40-50 horas",
      images: [
        "/images/productos/vela-citronela-principal.jpg",
        "/images/productos/vela-citronela-encendida.jpg",
        "/images/productos/vela-citronela-ambiente.jpg"
      ],
      stock: 120,
      variants: [
        {
          name: "Grande (300g)",
          price: 199.00,
          burnTime: "40-50 horas"
        },
        {
          name: "Mediana (200g)", 
          price: 149.00,
          burnTime: "25-30 horas"
        },
        {
          name: "Pequeña (100g)",
          price: 99.00,
          burnTime: "12-15 horas"
        }
      ],
      tags: ["vela", "citronela", "aromática", "natural", "ambiente"],
      featured: true
    }
  ],

  // =================== PULSERAS REPELENTES ===================
  pulseras: [
    {
      id: "pulsera-repelente-adulto",
      name: "Pulsera Repelente Natural K'oxol Adulto",
      slug: "pulsera-repelente-natural-adulto",
      description: "Pulsera repelente reutilizable con aceites naturales. Protección discreta y cómoda para uso diario.",
      longDescription: `
        Protección natural que llevas contigo. Nuestras Pulseras Repelentes K'oxol ofrecen 
        una solución cómoda y efectiva contra insectos.
        
        ✅ **Características:**
        • Materiales hipoalergénicos
        • Aceites naturales de citronela y eucalipto
        • Reutilizable hasta 240 horas
        • Resistente al agua
        • Ajustable para todas las tallas
        
        ✅ **Beneficios:**
        • Sin productos químicos en la piel
        • Ideal para actividades al aire libre
        • Perfecto para deportes y ejercicio
        • Apto para uso nocturno
        • Diseño discreto y elegante
        
        ✅ **Uso:**
        Úsala en muñeca o tobillo. Reemplaza las pastillas aromáticas cada 15 días.
        Guarda en lugar fresco y seco cuando no esté en uso.
      `,
      category: "Pulseras",
      price: 149.00,
      comparePrice: 179.00,
      sku: "KOX-PULS-ADU",
      weight: 15,
      images: [
        "/images/productos/pulsera-repelente-adulto.jpg",
        "/images/productos/pulsera-repelente-uso.jpg",
        "/images/productos/pulsera-repelente-colores.jpg"
      ],
      stock: 300,
      variants: [
        {
          name: "Verde Natural",
          color: "#2D5016",
          price: 149.00
        },
        {
          name: "Café Tierra",
          color: "#8B4513", 
          price: 149.00
        },
        {
          name: "Negro Elegante",
          color: "#000000",
          price: 149.00
        }
      ],
      tags: ["pulsera", "portable", "natural", "deportes", "viajes"],
      featured: true,
      bestseller: true
    },

    {
      id: "pulsera-repelente-infantil",
      name: "Pulsera Repelente Infantil K'oxol",
      slug: "pulsera-repelente-infantil",
      description: "Pulsera especial para niños con fórmula extra suave y diseños divertidos.",
      price: 129.00,
      category: "Pulseras",
      sku: "KOX-PULS-NIÑO",
      stock: 250,
      tags: ["niños", "infantil", "suave", "colores"]
    }
  ],

  // =================== CREMAS PROTECTORAS ===================
  cremas: [
    {
      id: "crema-familiar-100ml",
      name: "Crema Protectora Familiar K'oxol 100ml",
      slug: "crema-protectora-familiar",
      description: "Crema hidratante con repelente natural. Nutre la piel mientras la protege de insectos molestos.",
      longDescription: `
        Doble protección en un solo producto. Nuestra Crema Protectora K'oxol hidrata 
        profundamente mientras repele insectos de forma natural.
        
        ✅ **Ingredientes activos:**
        • Citronela orgánica
        • Aloe vera mexicano
        • Manteca de karité
        • Vitamina E natural
        • Aceite de coco virgen
        
        ✅ **Beneficios:**
        • Hidratación profunda 24 horas
        • Protección contra mosquitos 6-8 horas
        • Rápida absorción, no grasa
        • Aroma fresco y natural
        • Para todo tipo de piel
        
        ✅ **Aplicación:**
        Aplica generosamente sobre la piel limpia. Masajea hasta completa absorción.
        Reaplica después del baño o cada 6 horas en exteriores.
      `,
      category: "Cremas",
      price: 249.00,
      comparePrice: 299.00,
      sku: "KOX-CREMA-FAM",
      weight: 100,
      images: [
        "/images/productos/crema-familiar-principal.jpg",
        "/images/productos/crema-familiar-textura.jpg",
        "/images/productos/crema-familiar-aplicacion.jpg"
      ],
      stock: 180,
      variants: [
        {
          name: "100ml Familiar",
          price: 249.00,
          target: "Toda la familia"
        },
        {
          name: "50ml Viajero",
          price: 149.00,
          target: "Viajes y deportes"
        }
      ],
      tags: ["crema", "hidratante", "familia", "natural", "aloe"],
      featured: true
    }
  ],

  // =================== ACEITES ESENCIALES ===================
  aceites: [
    {
      id: "aceite-citronela-30ml",
      name: "Aceite Esencial de Citronela K'oxol 30ml",
      slug: "aceite-esencial-citronela",
      description: "Aceite puro de citronela mexicana. Úsalo solo o mezcla con otros productos para potenciar la protección.",
      longDescription: `
        La esencia pura de la protección natural. Nuestro Aceite de Citronela K'oxol 
        es extraído de las mejores plantas mexicanas mediante destilación natural.
        
        ✅ **Características:**
        • 100% puro, sin diluir
        • Extracción por vapor natural
        • Citronela Cymbopogon winterianus
        • Cultivada en México
        • Frasco con gotero de precisión
        
        ✅ **Usos múltiples:**
        • Difusor aromático (5-10 gotas)
        • Mezclar con cremas neutras (3-5 gotas por 100ml)
        • Aplicación directa diluida (1:10 con aceite portador)
        • Ambientador natural para espacios
        • Ingrediente para productos caseros
        
        ✅ **Precauciones:**
        Siempre diluir antes de aplicar en piel. No usar en niños menores de 3 años.
        Realizar prueba de sensibilidad antes del primer uso.
      `,
      category: "Aceites Esenciales", 
      price: 179.00,
      comparePrice: 219.00,
      sku: "KOX-ACEITE-CIT",
      weight: 30,
      concentration: "100% puro",
      images: [
        "/images/productos/aceite-citronela-principal.jpg",
        "/images/productos/aceite-citronela-gotero.jpg",
        "/images/productos/aceite-citronela-usos.jpg"
      ],
      stock: 100,
      variants: [
        {
          name: "30ml Concentrado",
          price: 179.00,
          concentration: "100%"
        },
        {
          name: "15ml Travel", 
          price: 99.00,
          concentration: "100%"
        }
      ],
      tags: ["aceite esencial", "puro", "citronela", "aromaterapia", "concentrado"],
      featured: true
    },

    {
      id: "aceite-eucalipto-30ml", 
      name: "Aceite Esencial de Eucalipto K'oxol 30ml",
      slug: "aceite-esencial-eucalipto",
      description: "Aceite puro de eucalipto con propiedades repelentes y aromáticas. Perfecto para difusores y mezclas.",
      price: 169.00,
      category: "Aceites Esenciales",
      sku: "KOX-ACEITE-EUC",
      stock: 85,
      tags: ["eucalipto", "respiratorio", "natural", "aromático"]
    }
  ],

  // =================== COMBOS Y PAQUETES ===================
  combos: [
    {
      id: "combo-familia-completo",
      name: "Combo Familia Completa K'oxol",
      slug: "combo-familia-completa",
      description: "Protección total para toda la familia. Incluye spray, crema, vela y pulseras para uso diario.",
      longDescription: `
        El paquete más completo para proteger a toda tu familia de forma natural.
        
        ✅ **Incluye:**
        • 1x Spray Anti-mosquitos 250ml
        • 1x Crema Protectora Familiar 100ml
        • 1x Vela Aromática Grande
        • 2x Pulseras Repelentes (adulto e infantil)
        • 1x Aceite de Citronela 15ml
        
        ✅ **Ahorro:**
        • Valor individual: $1,095 MXN
        • Precio combo: $899 MXN
        • ¡Ahorras $196 pesos!
        
        ✅ **Perfecto para:**
        • Familias con niños
        • Hogares con jardín o terraza
        • Viajes familiares
        • Regalo ideal para seres queridos
      `,
      category: "Combos",
      price: 899.00,
      comparePrice: 1095.00,
      sku: "KOX-COMBO-FAM",
      savings: 196.00,
      includes: [
        "Spray Anti-mosquitos 250ml",
        "Crema Protectora 100ml", 
        "Vela Aromática Grande",
        "2 Pulseras Repelentes",
        "Aceite Citronela 15ml"
      ],
      images: [
        "/images/productos/combo-familia-completo.jpg",
        "/images/productos/combo-familia-productos.jpg"
      ],
      stock: 50,
      bestseller: true,
      giftBox: true
    }
  ]
};

// =================== CATEGORÍAS ===================
export const CATEGORIAS_KOXOL = [
  {
    id: "sprays",
    name: "Sprays Repelentes",
    description: "Protección inmediata y efectiva para toda la familia",
    icon: "🧴",
    color: "#2D5016",
    image: "/images/categorias/sprays-categoria.jpg"
  },
  {
    id: "velas",
    name: "Velas Aromáticas", 
    description: "Ambiente protegido con aromas naturales relajantes",
    icon: "🕯️",
    color: "#6B8E23",
    image: "/images/categorias/velas-categoria.jpg"
  },
  {
    id: "pulseras",
    name: "Pulseras Repelentes",
    description: "Protección portable y discreta para uso diario",
    icon: "⭕",
    color: "#F4D03F",
    image: "/images/categorias/pulseras-categoria.jpg"
  },
  {
    id: "cremas",
    name: "Cremas Protectoras",
    description: "Hidratación y protección natural en un solo producto", 
    icon: "💧",
    color: "#FF8C42",
    image: "/images/categorias/cremas-categoria.jpg"
  },
  {
    id: "aceites",
    name: "Aceites Esenciales",
    description: "Esencias puras para múltiples usos naturales",
    icon: "🧪", 
    color: "#2C3E50",
    image: "/images/categorias/aceites-categoria.jpg"
  }
];

// =================== CONFIGURACIÓN DE TIENDA ===================
export const CONFIG_TIENDA = {
  moneda: "MXN",
  pais: "México", 
  idioma: "es-MX",
  envio: {
    nacional: {
      costo: 150,
      tiempoEntrega: "3-5 días hábiles",
      gratis: 800 // Envío gratis en compras mayores a $800
    },
    express: {
      costo: 250,
      tiempoEntrega: "1-2 días hábiles",
      disponible: ["CDMX", "Guadalajara", "Monterrey"]
    }
  },
  impuestos: {
    iva: 0.16 // 16% IVA
  },
  metodosPago: [
    "Tarjetas de crédito/débito",
    "PayPal", 
    "OXXO Pay",
    "Transferencia bancaria"
  ],
  politicas: {
    devolucion: "30 días",
    garantia: "Satisfacción garantizada",
    soporte: "Lun-Vie 9am-6pm"
  }
};

// =================== SEO Y METADATOS ===================
export const SEO_PRODUCTOS = {
  keywords: [
    "repelente natural",
    "antimosquitos mexico", 
    "citronela natural",
    "productos naturales familia",
    "repelente sin químicos",
    "koxol repelente",
    "spray natural mosquitos",
    "velas repelentes",
    "pulseras antimosquitos",
    "aceites esenciales mexico"
  ],
  metaDescription: "K'oxol - Repelentes naturales 100% mexicanos. Protege a tu familia con productos naturales efectivos: sprays, velas, pulseras y más. ¡Envío gratis en compras mayores a $800!",
  titleTemplate: "{producto} | K'oxol Repelentes Naturales México"
};

export default PRODUCTOS_KOXOL;
