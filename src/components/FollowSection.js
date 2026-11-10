// src/components/FollowSection.js
// Llamado a seguir a la banda en redes: una tarjeta grande por red (Instagram, Spotify, TikTok).
// Solo muestra las redes con URL en bandData.social. Sin cifras de seguidores (regla de contenido).

import { bandData } from '../data/bandData.js';
import { socialIcon } from './socialIcons.js';

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
