// src/data/merchData.js
// Catálogo de merchandising oficial y generador de pedidos por WhatsApp

export const merchData = {
  currencyNotice: "Envíos directos a toda Colombia, Argentina, Venezuela e internacional.",
  products: [
    {
      id: "tshirt-rocanrol",
      name: "Camiseta 'Puro Rocanrol Sudaca'",
      tag: "Merch Oficial",
      priceUSD: "28",
      priceCOP: "$95.000 COP",
      image: "/images/merch/tshirt.jpg",
      sizes: ["S", "M", "L", "XL", "XXL"],
      badge: "Más Vendido",
      description: "Camiseta de algodón peinado 240g negro profundo. Serigrafía neón de alta definición con ondas psicodélicas, tipografía retro y calce relajado unisex.",
      details: ["100% Algodón de alto gramaje", "Estampado tacto cero resistente a lavados", "Etiqueta tejida oficial Cumbia Reverb"]
    },
    {
      id: "vinyl-splatter",
      name: "Vinilo 12'' Edición Splatter Neón",
      tag: "Edición Limitada",
      priceUSD: "38",
      priceCOP: "$145.000 COP",
      image: "/images/merch/vinyl.jpg",
      sizes: ["12 Pulgadas (180g)"],
      badge: "Coleccionista",
      description: "Edición de lujo prensada en vinilo virgen de 180 gramos con efecto marmoleado splatter (cian y magenta neón). Incluye inserto con letras y póster desplegable.",
      details: ["Masterizado especialmente para vinilo", "Carpeta desplegable Gatefold mate", "Numerado a mano (Tiraje de 300 unidades)"]
    }
  ],
  faq: [
    {
      q: "¿Cómo realizo mi pedido?",
      a: "Haz clic en 'Pedir por WhatsApp' en el producto que desees. Se abrirá una conversación con nuestro equipo de logística con el producto y talla ya seleccionados para coordinar el pago y envío."
    },
    {
      q: "¿Qué medios de pago aceptan?",
      a: "Transferencia bancaria local (Bancolombia, Nequi, Daviplata en Colombia; Transferencia CBU/Mercado Pago en Argentina), y PayPal / Tarjeta de Crédito para envíos internacionales."
    }
  ]
};
