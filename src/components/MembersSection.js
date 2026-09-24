// src/components/MembersSection.js
// Sección interactiva de integrantes con micro-interacciones inspiradas en Pato el Pez

import { bandData } from '../data/bandData.js';

export function renderMembersSection() {
  return `
    <section class="section" id="integrantes">
      <div class="ambient-glow ambient-gold"></div>

      <div class="container" style="position: relative; z-index: 2;">
        <div class="section-header">
          <span class="section-tag">ALINEACIÓN OFICIAL</span>
          <h2 class="section-title">
            <span>Los Músicos de</span>
            <span class="text-gradient-reverb">Cumbia Reverb</span>
          </h2>
          <p class="section-subtitle">
            Cinco identidades, tres naciones y un solo pulso hipnótico. Conoce a los creadores de la frecuencia surf cumbiera.
          </p>
        </div>

        <div class="members-grid">
          ${bandData.members.map(member => `
            <article class="member-card" id="member-${member.id}">
              <div class="member-photo-wrap">
                <img src="${member.image}" alt="${member.name} - ${member.role}" class="member-photo" loading="lazy" />
                <div class="member-photo-overlay"></div>
                
                <div class="member-flag-badge">
                  <span>${member.flag}</span>
                  <span>${member.country}</span>
                </div>
              </div>

              <div class="member-info">
                <h3 class="member-name">${member.name}</h3>
                <p class="member-role">${member.role}</p>

                <p class="member-quote">"${member.quote}"</p>

                <p style="font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.55; margin-bottom: 16px;">
                  ${member.bio}
                </p>

                <div class="member-gear">
                  <strong>Equipamiento:</strong> ${member.gear}
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
