// src/pages/HomePage.js
// Página de inicio: quién es Cumbia Reverb.
// Hero → franja Síguenos → la banda (estilo + integrantes) → el disco (teaser) → próximo concierto → síguenos en redes.

import { renderHero, initHeroCanvas } from '../components/Hero.js';
import { renderNextShow, initNextShow } from '../components/NextShow.js';
import { bandData, isPending } from '../data/bandData.js';
import { latestAlbum as album, albumPath } from '../data/musicData.js';
import { renderFollowSection, renderFollowStrip } from '../components/FollowSection.js';
import { flag } from '../components/flags.js';
import { BAND_STYLES as STYLES } from './BandPage.js';


export function renderHomePage() {
  return `
    ${renderHero()}

    ${renderFollowStrip()}

    <section class="section" id="la-banda">
      <div class="ambient-glow ambient-magenta"></div>
      <div class="container">
        <div class="section-header">
          <span class="section-tag">La banda</span>
          <h2 class="section-title">Puro <span class="text-reverb">rocanrol sudaca</span></h2>
          <p class="section-subtitle">
            Canciones originales hechas por ${bandData.members.length} músicos de Colombia, Argentina y Venezuela, desde ${bandData.location}.
          </p>
          ${isPending(bandData.bio.summary) ? '' : `<p class="section-subtitle">${bandData.bio.summary}</p>`}
        </div>

        <ul class="style-chips" aria-label="Estilo">
          ${STYLES.map(s => `<li class="style-chip">${s}</li>`).join('')}
        </ul>

        <div class="lineup">
          ${bandData.members.map(m => `
            <a href="#/banda" class="lineup-card card-glass">
              <span class="lineup-flag">${flag(m.flag)}</span>
              <span class="lineup-name">${m.name}</span>
              <span class="lineup-role">${m.role}</span>
              <span class="lineup-country">${m.country}</span>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section section-alt" id="el-disco">
      <div class="container album-teaser">
        <a href="#${albumPath(album)}" class="album-teaser-cover-link" aria-label="Ver el disco ${album.title}">
          <img src="${album.cover}" alt="Portada de ${album.title}" class="album-teaser-cover" width="480" height="480" loading="lazy" />
        </a>
        <div class="album-teaser-info">
          <span class="section-tag">El disco</span>
          <h2 class="album-teaser-title">${album.title}</h2>
          <p class="album-hero-meta">
            <span class="badge badge-cromo">${album.type}</span>
            ${album.year ? `<span class="disco-year">${album.year}</span>` : ''}
            <span>${album.tracks.length} temas</span>
            <span aria-hidden="true">·</span>
            <span>${album.minutes} min</span>
          </p>
          <div class="album-hero-actions">
            <a href="#${albumPath(album)}" class="btn btn-primary"><span>Conoce el disco</span></a>
            <a href="${album.spotifyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><span>Spotify ↗</span></a>
          </div>
        </div>
      </div>
    </section>

    ${renderNextShow()}

    ${renderFollowSection()}
  `;
}

export function initHomePage() {
  initNextShow();
  return initHeroCanvas();
}
