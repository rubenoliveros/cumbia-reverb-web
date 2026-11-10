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

// Franja debajo del hero: frase (bandData.followCta.headline), botones destacados
// (Spotify, Instagram, YouTube) y el resto de redes como íconos secundarios.
// Una red destacada sin URL se muestra como "Pronto" (placeholder, no es enlace).
const STRIP_MAIN = [
  { name: 'spotify', label: 'Seguir en Spotify', url: s => s.spotify },
  { name: 'instagram', label: 'Seguir en Instagram', url: s => s.instagram },
  { name: 'youtube', label: 'Seguir en YouTube', url: s => s.youtubeSubscribe ?? s.youtube }
];

const stripButton = ({ name, label, url }) => {
  const href = url(bandData.social);
  const inner = `${socialIcon(name, 20)}<span>${label}</span>`;
  return href
    ? `<a href="${href}" target="_blank" rel="noopener noreferrer" class="btn btn-${name}">${inner}</a>`
    : `<span class="btn btn-${name} is-soon" aria-disabled="true" title="Canal por crear">${inner}<span class="btn-soon-tag">Pronto</span></span>`;
};

export function renderFollowStrip() {
  const { headline } = bandData.followCta;
  const others = renderSocialLinks({ className: 'follow-strip-icon', size: 22, only: ['tiktok'] });
  return `
    <section class="follow-strip" aria-label="Síguenos en redes">
      <div class="container follow-strip-inner">
        <p class="follow-strip-headline${isPending(headline) ? ' is-pending' : ''}">${headline}</p>
        <div class="follow-strip-actions">
          ${STRIP_MAIN.map(stripButton).join('')}
        </div>
        ${others ? `
        <div class="follow-strip-secondary">
          <span class="follow-strip-more">También en</span>
          ${others}
        </div>` : ''}
      </div>
    </section>
  `;
}
