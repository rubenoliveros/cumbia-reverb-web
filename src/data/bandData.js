// src/data/bandData.js
// Datos oficiales y biografía de la banda e integrantes.
// IMPORTANTE: solo información real y confirmada por la banda. Lo pendiente queda como
// placeholder (Lorem ipsum / null) para reemplazar cuando la banda entregue el contenido.

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const PLACEHOLDER_PHOTO = "/images/placeholder.svg";

export const bandData = {
  name: "Cumbia Reverb",
  tagline: "Puro Rocanrol Sudaca 🇨🇴 🇦🇷 🇻🇪",
  location: "Medellín, Colombia",
  officialUrl: "https://cumbiareverb.com",
  social: {
    spotify: "https://open.spotify.com/artist/2QDEorhtmjmhWrFEItrp4i",
    // PENDIENTE: canal de YouTube por crear. Cuando exista, poner aquí su URL y la de suscripción.
    youtube: null,
    youtubeSubscribe: null,
    instagram: "https://www.instagram.com/cumbia_reverb/",
    instagramHandle: "@cumbia_reverb",
    email: "booking@cumbiareverb.com",
    // PLACEHOLDER: reemplazar por el número real de Matías (booking y merch) antes de publicar.
    // Formato internacional sin "+" (ej. 57300...).
    whatsappNumber: "573555555555",
    whatsappBookingText: "¡Hola Cumbia Reverb! Me gustaría cotizar un concierto / presentación en vivo con la banda."
  },
  // Página /contacto: una tarjeta por tema (modelo bigthief.net/contact).
  // Por ahora Matías responde todo; si otra persona asume un tema, cambia su contacto aquí.
  contacts: [
    {
      id: "booking",
      icon: "🎟️",
      title: "Booking y conciertos",
      description: "Festivales, salas de conciertos, eventos culturales y de empresa.",
      person: "Matias",
      email: "booking@cumbiareverb.com",
      whatsappText: "¡Hola Cumbia Reverb! Me gustaría cotizar un concierto / presentación en vivo con la banda.",
      bookingForm: true
    },
    {
      id: "prensa",
      icon: "📰",
      title: "Prensa y medios",
      description: "Entrevistas, reseñas, radio y sesiones en vivo.",
      person: "Matias",
      email: "booking@cumbiareverb.com",
      whatsappText: "¡Hola Cumbia Reverb! Les escribo de un medio y me gustaría hablar con la banda."
    }
  ],
  images: {
    heroBanner: null, // PENDIENTE: foto real de la banda (curar desde el Drive)
    logo: "/images/logo/logo-full.webp",       // logo completo (personaje + letras), fondo transparente
    logoText: "/images/logo/logo-letras.webp", // solo letras, fondo transparente
    avatar: "/images/covers/official_avatar.jpg",
    cover: "/images/covers/official_cover.jpg",
    favicon: "/favicon.svg"
  },
  bio: {
    // PENDIENTE: biografía real escrita por la banda
    summary: LOREM,
    full: [LOREM, LOREM]
  },
  members: [
    { id: "celta", name: "Celta", role: "Voz", country: "Colombia", flag: "🇨🇴", image: PLACEHOLDER_PHOTO, bio: LOREM },
    { id: "miguel", name: "Miguel", role: "Guitarra", country: "Colombia", flag: "🇨🇴", image: PLACEHOLDER_PHOTO, bio: LOREM },
    { id: "matias", name: "Matias", role: "Bajo", country: "Argentina", flag: "🇦🇷", image: PLACEHOLDER_PHOTO, bio: LOREM },
    { id: "ruben", name: "Ruben", role: "Batería & Percusión", country: "Venezuela", flag: "🇻🇪", image: PLACEHOLDER_PHOTO, bio: LOREM }
  ]
};
