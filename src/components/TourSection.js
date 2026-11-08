// src/components/TourSection.js
// Sección de gira, conciertos y venta de entradas

import { tourData } from '../data/tourData.js';

export function renderTourSection() {
  return `
    <section class="section section-alt" id="gira">
      <div class="ambient-glow ambient-rayo"></div>

      <div class="container" style="position: relative; z-index: 2;">
        <div class="section-header">
          <span class="section-tag">CALENDARIO EN VIVO</span>
          <h2 class="section-title">
            <span>Gira &</span>
            <span class="text-gradient-fuego">Próximos Conciertos</span>
          </h2>
          <p class="section-subtitle">
            ${tourData.description}
          </p>
        </div>

        <div class="tour-list">
          ${tourData.upcomingShows.length === 0 ? `
            <p class="section-subtitle">Próximas fechas muy pronto. ¿Nos quieres en tu ciudad? Escríbenos.</p>
          ` : ''}
          ${tourData.upcomingShows.map(show => `
            <div class="tour-card">
              <div class="tour-date-box">
                <span class="tour-date-day">${show.date}</span>
              </div>

              <div class="tour-venue-box">
                <h4 class="tour-city">${show.city}</h4>
                <p class="tour-venue">${show.venue}</p>
              </div>

              <div class="tour-status-box">
                <span class="badge ${
                  show.statusType === 'danger' ? 'badge-sancocho' : 
                  show.statusType === 'warning' ? 'badge-hueso' : 
                  show.statusType === 'neutral' ? 'badge-cromo' :
                  'badge-success'
                }">
                  ${show.status}
                </span>

                ${show.ticketUrl ? `
                <a href="${show.ticketUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                  <span>${show.ticketText}</span>
                </a>` : ''}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Tour Booking CTA Banner -->
        <div class="tour-cta-box">
          <div>
            <h3 style="font-size: 1.45rem; font-weight: 900; margin-bottom: 8px;">${tourData.bookingCta.title}</h3>
            <p style="font-size: 0.95rem; color: var(--color-text-subtle);">${tourData.bookingCta.subtitle}</p>
          </div>
          <button class="btn btn-primary" id="tourCtaBookingBtn">
            <span>${tourData.bookingCta.buttonText}</span>
          </button>
        </div>
      </div>
    </section>
  `;
}

export function initTourSection() {
  const triggerModal = () => {
    document.getElementById('bookingModal')?.classList.add('open');
  };

  document.getElementById('tourCtaBookingBtn')?.addEventListener('click', triggerModal);
}
