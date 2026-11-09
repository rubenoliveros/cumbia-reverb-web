// src/data/tourData.js
// Fechas de conciertos. Solo fechas confirmadas por la banda.
// Campos: id, date (texto visible), rawDate (YYYY-MM-DD), city, venue,
//         status, statusType ('success' | 'warning' | 'danger' | 'neutral'), ticketUrl, ticketText

export const tourData = {
  description: "Próximas presentaciones en vivo de Cumbia Reverb.",
  upcomingShows: [
    {
      id: "show-2026-11-14",
      date: "14 NOV 2026",
      rawDate: "2026-11-14",
      city: "Medellín, Colombia",
      venue: "Parque Biblioteca La Quintana · Sonido Bestial Contra la Violencia · 12 PM – 7 PM",
      status: "Próximamente",
      statusType: "neutral",
      ticketUrl: null,
      ticketText: "Más info"
    }
  ],
  bookingCta: {
    title: "¿Quieres a Cumbia Reverb en tu festival o evento?",
    subtitle: "Disponibles para festivales, salas de conciertos y eventos de empresa.",
    buttonText: "Cotizar Fecha con la Banda"
  }
};
