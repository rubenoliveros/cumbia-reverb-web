// src/data/bandData.js
// Datos oficiales y biografía de la banda e integrantes.
// IMPORTANTE: solo información real y confirmada por la banda. Lo pendiente queda como
// placeholder (Lorem ipsum / null) para reemplazar cuando la banda entregue el contenido.

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const PLACEHOLDER_PHOTO = "/images/placeholder.svg";

// true si el texto falta o sigue siendo placeholder: la UI no lo muestra.
export const isPending = text => !text || text.startsWith("Lorem ipsum");

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
    tiktok: "https://www.tiktok.com/@reverb.cumbia",
    email: "booking@cumbiareverb.com",
    // PENDIENTE: número de quien atienda booking, formato internacional sin "+" (ej. 57300...).
    // Mientras sea null, los botones de WhatsApp no aparecen y el contacto va por correo.
    whatsappNumber: null,
    whatsappBookingText: "¡Hola Cumbia Reverb! Me gustaría cotizar un concierto / presentación en vivo con la banda."
  },
  // Página /contacto: una tarjeta por tema (modelo bigthief.net/contact).
  // PENDIENTE: la banda aún no decide quién responde cada tema. Mientras `person` sea null,
  // la tarjeta muestra "Por definir" como recordatorio. Pon aquí el nombre cuando se acuerde.
  contacts: [
    {
      id: "booking",
      icon: "🎟️",
      title: "Booking y conciertos",
      description: "Festivales, salas de conciertos, eventos culturales y de empresa.",
      person: null,
      email: "booking@cumbiareverb.com",
      whatsappText: "¡Hola Cumbia Reverb! Me gustaría cotizar un concierto / presentación en vivo con la banda.",
      bookingForm: true
    },
    {
      id: "prensa",
      icon: "📰",
      title: "Prensa y medios",
      description: "Entrevistas, reseñas, radio y sesiones en vivo.",
      person: null,
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
  // Franja "Síguenos" del Home (debajo del hero, antes de los integrantes).
  // PENDIENTE: frase por definir con la banda. Mientras sea Lorem, se muestra como recordatorio.
  followCta: {
    headline: "Lorem ipsum dolor sit amet — frase por definir con la banda"
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
    { id: "ruben", name: "Ruben", role: "Batería", country: "Venezuela", flag: "🇻🇪", image: PLACEHOLDER_PHOTO, bio: LOREM }
  ]
};
