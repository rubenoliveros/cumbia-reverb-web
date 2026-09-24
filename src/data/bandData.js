// src/data/bandData.js
// Datos oficiales y biografía de Cumbia Reverb

export const bandData = {
  name: "Cumbia Reverb",
  tagline: "Puro Rocanrol Sudaca 🇨🇴 🇦🇷 🇻🇪",
  genre: "Cumbia Psicodélica / Surf Reverb / Chicha Moderna",
  location: "América Latina",
  officialUrl: "https://cumbiareverb.com",
  social: {
    spotify: "https://open.spotify.com/artist/2QDEorhtmjmhWrFEItrp4i",
    youtube: "https://www.youtube.com/channel/UCJDQ5L37qhZuBiu1fbeNc_Q",
    youtubeSubscribe: "https://www.youtube.com/channel/UCJDQ5L37qhZuBiu1fbeNc_Q?sub_confirmation=1",
    instagram: "https://www.instagram.com/cumbia_reverb/",
    instagramHandle: "@cumbia_reverb",
    email: "booking@cumbiareverb.com",
    whatsappNumber: "573001234567", // Número por defecto para booking/merch (configurable)
    whatsappBookingText: "¡Hola Cumbia Reverb! Me gustaría cotizar un concierto / presentación en vivo con la banda."
  },
  images: {
    heroBanner: "/images/hero/cumbia_hero_banner.jpg",
    avatar: "/images/covers/official_avatar.jpg",
    cover: "/images/covers/official_cover.jpg",
    favicon: "/favicon.svg"
  },
  bio: {
    summary: "Nacidos entre el calor del trópico y la electricidad del rock subterráneo, Cumbia Reverb es una máquina de ritmo hipnótico que funde la cadencia bailable de la cumbia tradicional y la chicha psicodélica con el eco húmedo del surf rock, la reverberación a resortes y la potencia visceral de una banda en vivo sin concesiones.",
    full: [
      "Con integrantes de Colombia, Argentina y Venezuela, Cumbia Reverb borra las fronteras de América Latina para construir un sonido mestizo, psicodélico y demoledor.",
      "Guitarras con trémolo empapadas en tanques de reverberación Fender vintage, sintetizadores analógicos chirriantes, una sección rítmica sincopada de güiro, timbales y bajo demoledor, liderados por una voz magnética que convierte cada tarima en una catarsis colectiva de baile y descontrol.",
      "Auténtico rocanrol sudamericano hecho para sudar, soñar y bailar hasta el amanecer."
    ],
    highlights: [
      { stat: "4+", label: "Singles Oficiales" },
      { stat: "3", label: "Naciones Unidas" },
      { stat: "100%", label: "Poder en Vivo" },
      { stat: "∞", label: "Reverb & Frecuencia" }
    ]
  },
  members: [
    {
      id: "celta",
      name: "Celta",
      role: "Voz Principal & Energía Escénica",
      country: "Colombia",
      flag: "🇨🇴",
      image: "/images/members/celta.jpg",
      quote: "El micrófono no es solo para cantar, es para despertar la fiesta en el pecho de la gente.",
      bio: "Presencia escénica electrizante e hipnótica. Combina el fraseo cadencioso del folclor caribeño con la irreverencia cruda del rock de garaje sudaca.",
      gear: "Micrófono Shure SM58 vintage / Efecto Roland Space Echo",
      social: "@celtareverb"
    },
    {
      id: "miguel",
      name: "Miguel",
      role: "Guitarra Surf & Reverb",
      country: "Colombia",
      flag: "🇨🇴",
      image: "/images/members/miguel.jpg",
      quote: "Si la guitarra no gotea reverb como una ola nocturna, no es Cumbia Reverb.",
      bio: "Arquitecto de los riffs hipnóticos y solos de surf psicodélico. Crea los paisajes sonoros acuáticos y espaciales que le dan nombre y alma a la banda.",
      gear: "Fender Jaguar 60s / Fender Twin Reverb '68 / Tanque Spring Reverb a bulbos",
      social: "@miguel_guitarwave"
    },
    {
      id: "javier",
      name: "Javier",
      role: "Teclados & Sintetizadores Tropicales",
      country: "Colombia",
      flag: "🇨🇴",
      image: "/images/members/javier.jpg",
      quote: "El órgano chichero te transporta al espacio exterior sin despegar los pies del piso.",
      bio: "Teje las armonías psicodélicas, texturas cósmicas y melodías de órgano Farfisa que recuerdan a la época dorada de la chicha amazónica y el space-rock tropical.",
      gear: "Nord Electro 6D / Korg Minilogue XD / Leslie Rotating Simulator",
      social: "@javi_keys_cr"
    },
    {
      id: "matias",
      name: "Matias",
      role: "Bajo Eléctrico & Groove Pulmón",
      country: "Argentina",
      flag: "🇦🇷",
      image: "/images/members/matias.jpg",
      quote: "El bajo es el corazón que marca el paso de toda la tribu en la pista.",
      bio: "El motor incombustible de la base rítmica. Aporta la solidez, la profundidad bailable y el empuje rockero argentino que hace retumbar el pecho de la audiencia.",
      gear: "Fender Precision Bass 70s / Cabezal Ampeg SVT-CL / Darkglass Vintage",
      social: "@matias_bassgroove"
    },
    {
      id: "ruben",
      name: "Ruben",
      role: "Batería, Timbales & Percusión",
      country: "Venezuela",
      flag: "🇻🇪",
      image: "/images/members/ruben.jpg",
      quote: "El güiro y el timbal son el llamado de la selva; la batería es el trueno.",
      bio: "Polirritmia caribeña explosiva, síncopa de güiro tradicional y pegada implacable de batería rockera. Responsable de que nadie pueda quedarse sentado durante el show.",
      gear: "Batería Ludwig Classic Maple / Timbales LP Tito Puente / Güiro artesanal metálico",
      social: "@ruben_drums_reverb"
    }
  ]
};
