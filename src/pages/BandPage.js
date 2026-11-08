// src/pages/BandPage.js
// Página de la banda (#/banda): presentación de Cumbia Reverb y luego los integrantes.
// Solo datos confirmados (AGENTS.md §1-2). La bio larga aparece cuando la banda la entregue.

import { bandData, isPending } from '../data/bandData.js';
import { latestAlbum, albumPath } from '../data/musicData.js';
import { renderMembersSection } from '../components/MembersSection.js';
import { withFlags } from '../components/flags.js';

// Estilo de la banda (AGENTS.md §1)
export const BAND_STYLES = ['Cumbia psicodélica', 'Surf reverb', 'Chicha moderna', 'Garage tropical'];

export function renderBandPage() {
  const bio = bandData.bio.full.filter(p => !isPending(p));

  return `
    <section class="section band-intro">
      <div class="ambient-glow ambient-magenta"></div>
      <div class="container band-intro-grid">
        <div class="band-intro-visual">
          <img src="${bandData.images.heroBanner ?? bandData.images.logo}" alt="${bandData.name}" width="900" height="895" />
        </div>

        <div class="band-intro-info">
          <span class="section-tag">Quiénes somos</span>
          <h1 class="band-intro-title">${bandData.name}</h1>
          <p class="band-intro-tagline">${withFlags(bandData.tagline)}</p>

          <!-- PENDIENTE: presentación corta de la banda. Se deja el Lorem ipsum visible a
               propósito, como recordatorio, hasta que la banda escriba el texto (bio.summary). -->
          <p class="band-intro-lead">${bandData.bio.summary}</p>
          ${bio.map(p => `<p class="band-intro-text">${p}</p>`).join('')}

          <div class="album-hero-actions">
            <a href="#${albumPath(latestAlbum)}" class="btn btn-primary"><span>Escucha ${latestAlbum.title}</span></a>
            <button class="btn btn-secondary" data-open-booking><span>Cotizar Fecha</span></button>
          </div>
        </div>
      </div>
    </section>

    ${renderMembersSection()}
  `;
}

export function initBandPage() {
  document.querySelectorAll('[data-open-booking]').forEach(btn => {
    btn.addEventListener('click', () => document.getElementById('bookingModal')?.classList.add('open'));
  });
}
