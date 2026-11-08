// src/pages/AlbumPage.js
// Página de un disco (#/discos/<slug>):
//   publicado → portada + Spotify, franja de temas, escucha completa y próxima fecha.
//   upcoming  → placeholder "Próximamente" sin temas ni Spotify.
// Si el disco tiene `palette`, la página usa los colores de su portada (paletas-disco.css).

import { bandData } from '../data/bandData.js';
import { renderTrackStrip, initTrackStrip } from '../components/TrackStrip.js';
import { renderMusicSection, initMusicSection } from '../components/MusicSection.js';
import { renderNextShow, initNextShow } from '../components/NextShow.js';

export function renderAlbumPage(album) {
  const page = album.upcoming ? renderUpcoming(album) : renderReleased(album);
  return album.palette
    ? `<div class="album-palette" data-palette="${album.palette}">${page}</div>`
    : page;
}

function renderHero(album, { meta, lead = '', actions }) {
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
          <p class="album-hero-meta">${meta}</p>
          ${lead}
          <div class="album-hero-actions">${actions}</div>
        </div>
      </div>
    </section>
  `;
}

function renderReleased(album) {
  return `
    ${renderHero(album, {
      meta: `
        <span class="badge badge-cromo">${album.type}</span>
        ${album.year ? `<span class="disco-year">${album.year}</span>` : ''}
        <span>${album.tracks.length} temas</span>
        <span aria-hidden="true">·</span>
        <span>${album.minutes} min</span>`,
      actions: `
        ${album.spotifyUrl ? `
        <a href="${album.spotifyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-spotify">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
          <span>Escuchar en Spotify</span>
        </a>` : ''}
        <a href="${bandData.social.spotify}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <span>Seguir a la banda</span>
        </a>`
    })}

    ${renderTrackStrip(album)}

    ${renderMusicSection(album)}

    ${renderNextShow({ title: 'Escúchalo <span class="text-reverb">en vivo</span>' })}
  `;
}

function renderUpcoming(album) {
  return `
    ${renderHero(album, {
      meta: `
        <span class="badge badge-cromo">${album.type}</span>
        <span class="disco-year">Próximamente</span>`,
      lead: `<p class="album-hero-lead">Estamos preparando un ${album.type} nuevo. Título, fecha y temas muy pronto: síguenos para enterarte primero.</p>`,
      actions: `
        <a href="${bandData.social.spotify}" target="_blank" rel="noopener noreferrer" class="btn btn-spotify">
          <span>Seguir en Spotify</span>
        </a>
        <a href="${bandData.social.instagram}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <span>Instagram ${bandData.social.instagramHandle}</span>
        </a>`
    })}

    ${renderNextShow()}
  `;
}

export function initAlbumPage(album) {
  initNextShow();
  if (album.upcoming) return;
  initMusicSection(album);
  return initTrackStrip();
}
