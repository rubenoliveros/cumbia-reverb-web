// src/components/FollowSection.js
// "Síguenos": va justo debajo del hero, antes de los integrantes.
// Frase por definir (bandData.followCta.headline) y una tarjeta por red, en filas de tres;
// la última fila se centra (1 tarjeta → al centro, 2 → centradas). Sin cifras de seguidores (regla de contenido).
// Una red destacada sin URL se muestra como "Pronto" (no es enlace).

import { bandData, isPending } from '../data/bandData.js';
import { socialIcon } from './socialIcons.js';

const handleOf = url => '@' + url.replace(/\/+$/, '').split('/').pop().replace(/^@/, '');

// Orden de las tarjetas = orden de este arreglo
const MAIN = [
  { name: 'instagram', label: 'Instagram', what: 'Fotos y novedades de la banda', url: s => s.instagram, handle: s => s.instagramHandle ?? handleOf(s.instagram) },
  { name: 'youtube', label: 'YouTube', what: 'Videos de la banda', url: s => s.youtubeSubscribe ?? s.youtube, handle: () => bandData.name },
  { name: 'spotify', label: 'Spotify', what: 'Toda nuestra música, y el EP nuevo apenas salga', url: s => s.spotify, handle: () => bandData.name },
  { name: 'tiktok', label: 'TikTok', what: 'Videos cortos de la banda', url: s => s.tiktok, handle: s => handleOf(s.tiktok) }
];

function renderCard(n) {
  const href = n.url(bandData.social);
  const body = `
    <span class="follow-icon">${socialIcon(n.name, 36)}</span>
    <span class="follow-label">${n.label}</span>
    <span class="follow-handle">${href ? n.handle(bandData.social) : 'Canal por crear'}</span>
    <span class="follow-what">${n.what}</span>
    <span class="follow-cta btn btn-${n.name}">
      ${href ? `Seguir en ${n.label} <span aria-hidden="true">↗</span>` : `Seguir en ${n.label}<span class="btn-soon-tag">Pronto</span>`}
    </span>`;
  return href
    ? `<li><a href="${href}" target="_blank" rel="noopener noreferrer" class="follow-card card-glass" data-network="${n.name}">${body}</a></li>`
    : `<li><div class="follow-card card-glass is-soon" data-network="${n.name}" aria-disabled="true">${body}</div></li>`;
}

export function renderFollowSection() {
  const { headline } = bandData.followCta;
  return `
    <section class="section follow-section" id="siguenos">
      <div class="ambient-glow ambient-rayo"></div>
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Síguenos</span>
          <h2 class="section-title follow-headline${isPending(headline) ? ' is-pending' : ''}">${headline}</h2>
        </div>

        <ul class="follow-grid">
          ${MAIN.map(renderCard).join('')}
        </ul>
      </div>
    </section>
  `;
}
