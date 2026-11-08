// src/components/NextShow.js
// Próxima fecha en vivo + llamada a booking. Se usa en la Home y en la página del disco.

import { tourData } from '../data/tourData.js';

export function renderNextShow({ title = 'Próximo <span class="text-reverb">concierto</span>' } = {}) {
  const show = tourData.upcomingShows[0];

  return `
    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">En vivo</span>
          <h2 class="section-title">${title}</h2>
        </div>

        <div class="next-show">
          ${show ? `
            <div class="next-show-card">
              <span class="next-show-date">${show.date}</span>
              <div>
                <h3 class="next-show-city">${show.city}</h3>
                <p class="next-show-venue">${show.venue}</p>
              </div>
              <a href="#/gira" class="btn btn-secondary btn-sm"><span>Ver la gira</span></a>
            </div>
          ` : `
            <p class="section-subtitle">Próximas fechas muy pronto.</p>
          `}

          <div class="next-show-cta">
            <p>${tourData.bookingCta.subtitle}</p>
            <button class="btn btn-primary" data-open-booking><span>Cotizar Fecha</span></button>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initNextShow() {
  document.querySelectorAll('[data-open-booking]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('bookingModal')?.classList.add('open');
    });
  });
}
