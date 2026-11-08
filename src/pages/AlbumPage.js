// src/pages/AlbumPage.js
// Página de promoción de un disco (#/discos/<slug>):
// portada + llamada a Spotify, franja de temas, escucha completa y próxima fecha en vivo.

import { bandData } from '../data/bandData.js';
import { renderTrackStrip, initTrackStrip } from '../components/TrackStrip.js';
import { renderMusicSection, initMusicSection } from '../components/MusicSection.js';
import { renderNextShow, initNextShow } from '../components/NextShow.js';

export function renderAlbumPage(album) {
  return `
    <section class="album-hero">
      <div class="album-hero-bg" style="background-image: url('${album.cover}')"></div>
      <div class="container album-hero-grid">
        <div class="album-hero-cover-wrap">
          <img src="${album.cover}" alt="Portada de ${album.title}, disco de ${bandData.name}" class="album-hero-cover" width="640" height="640" fetchpriority="high" />
        </div>

        <div class="album-hero-info">
          <a href="#/discos" class="section-tag album-hero-back">← Discografía</a>
          <h1 class="album-hero-title">${album.title}</h1>
          <p class="album-hero-meta">
            <span class="badge badge-cromo">${album.type}</span>
            ${album.year ? `<span class="disco-year">${album.year}</span>` : ''}
            <span>${album.tracks.length} temas</span>
            <span aria-hidden="true">·</span>
            <span>${album.minutes} min</span>
          </p>

          <div class="album-hero-actions">
            ${album.spotifyUrl ? `
            <a href="${album.spotifyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-spotify">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
              <span>Escuchar en Spotify</span>
            </a>` : ''}
            <a href="${bandData.social.spotify}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
              <span>Seguir a la banda</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    ${renderTrackStrip(album)}

    ${renderMusicSection(album)}

    ${renderNextShow({ title: 'Escúchalo <span class="text-reverb">en vivo</span>' })}
  `;
}

export function initAlbumPage(album) {
  initMusicSection(album);
  initNextShow();
  return initTrackStrip();
}
