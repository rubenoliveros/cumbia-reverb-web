// src/components/MusicSection.js
// Sección de discografía oficial, catálogo musical y reproductor interactivo

import { musicData } from '../data/musicData.js';

export function renderMusicSection() {
  return `
    <section class="section" id="musica">
      <div class="ambient-glow ambient-cyan"></div>
      
      <div class="container" style="position: relative; z-index: 2;">
        <div class="section-header">
          <span class="section-tag">DISCOGRAFÍA OFICIAL</span>
          <h2 class="section-title">
            <span>Frecuencias &</span>
            <span class="text-gradient-reverb">Lanzamientos</span>
          </h2>
          <p class="section-subtitle">
            Sumérgete en la psicodelia tropical de Cumbia Reverb. Escucha los singles oficiales directamente aquí o en tu plataforma de streaming favorita.
          </p>
        </div>

        <div class="music-grid" id="musicGrid">
          ${musicData.tracks.map((track, idx) => `
            <article class="track-card" data-track-index="${idx}">
              <div class="track-cover-wrap">
                <img src="${track.cover}" alt="${track.title} - Cumbia Reverb" class="track-cover" loading="lazy" />
                <div class="track-play-overlay">
                  <button class="track-play-btn" data-play-track="${idx}" title="Reproducir ${track.title}">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="track-info">
                <div class="track-meta">
                  <span class="badge badge-cyan">${track.type}</span>
                  <span style="font-size: 0.82rem; color: var(--color-text-dim); font-family: var(--font-mono);">${track.duration}</span>
                </div>

                <h3 class="track-title">${track.title}</h3>
                <p class="track-desc">${track.description}</p>

                <div class="track-actions">
                  <button class="btn btn-secondary btn-sm" data-lyrics-track="${idx}">
                    <span>Ver Letra</span>
                  </button>

                  <a href="${track.links.spotify}" target="_blank" rel="noopener noreferrer" class="btn btn-spotify btn-sm" title="Abrir en Spotify">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    <span>Spotify</span>
                  </a>
                </div>
              </div>
            </article>
          `).join('')}
        </div>

        <!-- Spotify Embed Player Showcase -->
        <div class="spotify-embed-box">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; flex-wrap: wrap; gap: 14px;">
            <div>
              <h4 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 4px;">Reproductor Oficial de Spotify</h4>
              <p style="font-size: 0.88rem; color: var(--color-text-muted);">Sigue el perfil verificado de Cumbia Reverb en Spotify para lanzamientos automáticos.</p>
            </div>
            <a href="https://open.spotify.com/artist/${musicData.spotifyArtistId}" target="_blank" rel="noopener noreferrer" class="btn btn-spotify btn-sm">
              <span>Seguir en Spotify</span>
            </a>
          </div>

          <iframe 
            style="border-radius:12px; width: 100%;" 
            src="${musicData.spotifyEmbedUrl}" 
            height="152" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
          </iframe>
        </div>
      </div>
    </section>
  `;
}

export function initMusicSection() {
  // Listeners to play track
  document.querySelectorAll('[data-play-track]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute('data-play-track'), 10);
      window.cumbiaPlayer?.playTrack(idx);
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
        credits.textContent = track.credits;
        modal.classList.add('open');
      }
    });
  });
}
