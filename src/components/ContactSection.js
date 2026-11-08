// src/components/ContactSection.js
// Página de contacto: una tarjeta por tema (booking, prensa…) con la persona responsable

import { bandData } from '../data/bandData.js';

const whatsappUrl = (text) =>
  `https://wa.me/${bandData.social.whatsappNumber}?text=${encodeURIComponent(text)}`;

export function renderContactSection() {
  return `
    <section class="section" id="contacto">
      <div class="ambient-glow ambient-magenta"></div>

      <div class="container" style="position: relative; z-index: 2;">
        <div class="section-header">
          <span class="section-tag">CONTACTO</span>
          <h2 class="section-title">
            <span>Hablemos con</span>
            <span class="text-reverb">Cumbia Reverb</span>
          </h2>
          <p class="section-subtitle">
            Escríbenos directo a la persona que lleva cada tema. Respondemos desde ${bandData.location}.
          </p>
        </div>

        <div class="contact-grid">
          ${bandData.contacts.map(c => `
            <article class="contact-card card-glass">
              <span class="feature-card-icon">${c.icon}</span>
              <h3 class="contact-card-title">${c.title}</h3>
              <p class="contact-card-desc">${c.description}</p>
              <p class="contact-card-person">Contacto: ${c.person
                ? `<strong>${c.person}</strong>`
                : `<span class="contact-card-pending">Por definir</span>`}</p>

              <div class="contact-card-actions">
                ${bandData.social.whatsappNumber ? `
                <a href="${whatsappUrl(c.whatsappText)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
                  <span>WhatsApp</span>
                </a>` : ''}
                <a href="mailto:${c.email}" class="btn btn-secondary btn-sm">
                  <span>${c.email}</span>
                </a>
                ${c.bookingForm ? `
                <button type="button" class="btn btn-primary btn-sm" data-open-booking>
                  <span>Cotizar concierto</span>
                </button>` : ''}
              </div>
            </article>
          `).join('')}
        </div>

        <p class="contact-social">
          También estamos en
          <a href="${bandData.social.instagram}" target="_blank" rel="noopener noreferrer">Instagram ${bandData.social.instagramHandle}</a>
          y <a href="${bandData.social.spotify}" target="_blank" rel="noopener noreferrer">Spotify</a>.
        </p>
      </div>
    </section>
  `;
}

export function initContactSection() {
  document.querySelectorAll('[data-open-booking]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('bookingModal')?.classList.add('open');
    });
  });
}
