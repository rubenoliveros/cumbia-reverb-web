// src/pages/DiscosPage.js
// Índice de la discografía (#/discos): un bloque grande por disco de musicData.albums,
// cada uno con acceso directo a su página.

import { albums, albumPath } from '../data/musicData.js';

export function renderDiscosPage() {
  return `
    <section class="section">
      <div class="container">
        <header class="discografia-header">
          <h1 class="discografia-title">Discografía</h1>
          <span class="discografia-count">${albums.length} ${albums.length === 1 ? 'disco' : 'discos'}</span>
        </header>

        <ol class="discos-list">
          ${albums.map((album, i) => `
            <li class="disco-feature">
              <a href="#${albumPath(album)}" class="disco-feature-cover-link" aria-label="Ver el disco ${album.title}">
                <img src="${album.cover}" alt="Portada de ${album.title}" class="disco-feature-cover" width="480" height="480" loading="lazy" />
              </a>
              <div>
                <span class="disco-feature-num">${String(albums.length - i).padStart(2, '0')}</span>
                <h2 class="disco-feature-title"><a href="#${albumPath(album)}">${album.title}</a></h2>
                <p class="album-hero-meta">
                  <span class="badge badge-cromo">${album.type}</span>
                  <span>${album.tracks.length} temas</span>
                  <span aria-hidden="true">·</span>
                  <span>${album.minutes} min</span>
                </p>
                <div class="album-hero-actions">
                  <a href="#${albumPath(album)}" class="btn btn-primary"><span>Ver el disco</span></a>
                  ${album.spotifyUrl ? `
                  <a href="${album.spotifyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><span>Spotify ↗</span></a>` : ''}
                </div>
              </div>
            </li>
          `).join('')}
        </ol>
      </div>
    </section>
  `;
}
