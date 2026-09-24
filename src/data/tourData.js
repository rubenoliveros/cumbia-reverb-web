// src/data/tourData.js
// Fechas de conciertos, festivales y presentaciones en vivo

export const tourData = {
  tourTitle: "Gira Frecuencia Sudaca 2024 - 2025",
  description: "La caravana psicodélica de Cumbia Reverb llevando el rocanrol sudamericano a salas y festivales.",
  upcomingShows: [
    {
      id: "show-1",
      date: "18 OCT 2024",
      rawDate: "2024-10-18",
      city: "Bogotá, Colombia",
      venue: "Teatro La Media Torta / Festival Tropical",
      status: "Últimas Entradas",
      statusType: "warning",
      ticketUrl: "#booking",
      ticketText: "Entradas"
    },
    {
      id: "show-2",
      date: "02 NOV 2024",
      rawDate: "2024-11-02",
      city: "Medellín, Colombia",
      venue: "Parque de los Deseos / Noche de Chicha & Reverb",
      status: "Boletos Disponibles",
      statusType: "success",
      ticketUrl: "#booking",
      ticketText: "Entradas"
    },
    {
      id: "show-3",
      date: "23 NOV 2024",
      rawDate: "2024-11-23",
      city: "Buenos Aires, Argentina",
      venue: "Niceto Club / Fiesta Invasión Psicodélica",
      status: "Agotado",
      statusType: "danger",
      ticketUrl: "#booking",
      ticketText: "Sold Out"
    },
    {
      id: "show-4",
      date: "14 DIC 2024",
      rawDate: "2024-12-14",
      city: "Caracas, Venezuela",
      venue: "Concha Acústica de Bello Monte",
      status: "Boletos Disponibles",
      statusType: "success",
      ticketUrl: "#booking",
      ticketText: "Entradas"
    },
    {
      id: "show-5",
      date: "25 ENE 2025",
      rawDate: "2025-01-25",
      city: "Ciudad de México, México",
      venue: "Foro Indie Rocks! / Frecuencia Latina Fest",
      status: "Próximamente",
      statusType: "neutral",
      ticketUrl: "#booking",
      ticketText: "Preventa"
    }
  ],
  bookingCta: {
    title: "¿Quieres llevar a Cumbia Reverb a tu ciudad o festival?",
    subtitle: "Disponibles para festivales internacionales, salas de conciertos y eventos culturales privados.",
    buttonText: "Cotizar Fecha con la Banda"
  }
};
