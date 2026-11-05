// src/components/MusicSection.js
// Sección de música: disco en Spotify y lista de temas

import { musicData } from '../data/musicData.js';

export function renderMusicSection() {
  const { album } = musicData;

  return `
    <section class="section" id="musica">
      <div class="ambient-glow ambient-cyan"></div>
      
      <div class="container" style="position: relative; z-index: 2;">
        <div class="section-header">
          <span class="section-tag">MÚSICA</span>
          <h2 class="section-title">
            <span>Escucha a</span>
            <span class="text-reverb">Cumbia Reverb</span>
          </h2>
          <p class="section-subtitle">
            Nuestro disco está completo en Spotify.
          </p>
        </div>

        <div class="album-block">
          <img src="${album.cover}" alt="Portada de ${album.title} - Cumbia Reverb" class="album-cover" loading="lazy" />

          <div class="album-info">
            <span class="badge badge-llama">Álbum · ${musicData.tracks.length} temas</span>
            <h3 class="album-title">${album.title}</h3>

            <div class="album-actions">
              <a href="${album.spotifyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-spotify btn-sm">
                <span>Escuchar el disco en Spotify</span>
              </a>
              <a href="https://open.spotify.com/artist/${musicData.spotifyArtistId}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                <span>Seguir a la banda</span>
              </a>
            </div>

            <iframe
              class="album-embed"
              src="${album.embedUrl}"
              height="352"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="${album.title} en Spotify">
            </iframe>
          </div>
        </div>

        <ol class="tracklist">
          ${musicData.tracks.map((track, idx) => `
            <li class="track-row">
              <span class="track-row-num">${idx + 1}</span>
              <span class="track-row-title">${track.title}</span>
              <span class="track-row-actions">
                ${track.audioPreview ? `
                <button class="btn btn-secondary btn-sm" data-play-track="${track.id}" title="Reproducir ${track.title}">▶</button>` : ''}
                ${track.lyrics ? `
                <button class="btn btn-secondary btn-sm" data-lyrics-track="${idx}">Letra</button>` : ''}
                <a href="${track.links.spotify}" target="_blank" rel="noopener noreferrer" class="track-row-link" title="Abrir ${track.title} en Spotify">Spotify ↗</a>
              </span>
              <span class="track-row-duration">${track.duration}</span>
            </li>
          `).join('')}
        </ol>
      </div>
    </section>
  `;
}

export function initMusicSection() {
  // Listeners to play track
  document.querySelectorAll('[data-play-track]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      window.cumbiaPlayer?.playTrack(btn.getAttribute('data-play-track'));
    });
  });

  // Listeners to view lyrics
  document.querySelectorAll('[data-lyrics-track]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-lyrics-track'), 10);
      const track = musicData.tracks[idx];
      const modal = document.getElementById('lyricsModal');
      const title = document.getElementById('lyricsModalTitle');
      const body = document.getElementById('lyricsModalBody');
      const credits = document.getElementById('lyricsModalCredits');

      if (modal && title && body && credits) {
        title.textContent = `${track.title} — Letra Oficial`;
        body.innerHTML = track.lyrics.replace(/\n/g, '<br>');
        credits.textContent = track.credits || '';
        modal.classList.add('open');
      }
    });
  });
}
