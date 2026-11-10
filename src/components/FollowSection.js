// src/components/FollowSection.js
// renderFollowStrip(): franja de una sola acción debajo del hero (Spotify principal + íconos).
// Llamado a seguir a la banda en redes: una tarjeta grande por red (Instagram, Spotify, TikTok).
// Solo muestra las redes con URL en bandData.social. Sin cifras de seguidores (regla de contenido).

import { bandData, isPending } from '../data/bandData.js';
import { socialIcon, renderSocialLinks } from './socialIcons.js';

const handleOf = url => '@' + url.replace(/\/+$/, '').split('/').pop().replace(/^@/, '');

const FOLLOW = [
  { name: 'instagram', label: 'Instagram', what: 'Fotos y novedades de la banda', cta: 'Seguir', url: s => s.instagram, handle: s => s.instagramHandle ?? handleOf(s.instagram) },
  { name: 'spotify', label: 'Spotify', what: 'Toda nuestra música, y el EP nuevo apenas salga', cta: 'Seguir', url: s => s.spotify, handle: () => bandData.name },
  { name: 'tiktok', label: 'TikTok', what: 'Videos de la banda', cta: 'Seguir', url: s => s.tiktok, handle: s => handleOf(s.tiktok) }
];

export function renderFollowSection() {
  const nets = FOLLOW.filter(n => n.url(bandData.social));
  if (!nets.length) return '';
  return `
    <section class="section follow-section" id="siguenos">
      <div class="ambient-glow ambient-rayo"></div>
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Síguenos</span>
          <h2 class="section-title">Que no te lo <span class="text-reverb">cuenten</span></h2>
          <p class="section-subtitle">Temas nuevos, fechas y el EP que viene: entérate primero en nuestras redes.</p>
        </div>

        <ul class="follow-grid">
          ${nets.map(n => `
          <li>
            <a href="${n.url(bandData.social)}" target="_blank" rel="noopener noreferrer" class="follow-card card-glass" data-network="${n.name}">
              <span class="follow-icon">${socialIcon(n.name, 36)}</span>
              <span class="follow-label">${n.label}</span>
              <span class="follow-handle">${n.handle(bandData.social)}</span>
              <span class="follow-what">${n.what}</span>
              <span class="follow-cta btn btn-primary btn-sm">${n.cta} <span aria-hidden="true">↗</span></span>
            </a>
          </li>`).join('')}
        </ul>
      </div>
    </section>
  `;
}

// Franja debajo del hero: frase (bandData.followCta.headline), botón grande a Spotify,
// Instagram y TikTok como íconos secundarios.
export function renderFollowStrip() {
  const { headline } = bandData.followCta;
  const { spotify } = bandData.social;
  return `
    <section class="follow-strip" aria-label="Síguenos en redes">
      <div class="container follow-strip-inner">
        <p class="follow-strip-headline${isPending(headline) ? ' is-pending' : ''}">${headline}</p>
        <div class="follow-strip-actions">
          ${spotify ? `
          <a href="${spotify}" target="_blank" rel="noopener noreferrer" class="btn btn-spotify">
            ${socialIcon('spotify', 20)}
            <span>Seguir en Spotify</span>
          </a>` : ''}
          <div class="follow-strip-secondary">
            ${renderSocialLinks({ className: 'follow-strip-icon', size: 22, only: ['instagram', 'tiktok'] })}
          </div>
        </div>
      </div>
    </section>
  `;
}
