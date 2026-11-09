// src/components/MusicSection.js
// Bloque "Escúchalo completo" de la página de un disco: embed de Spotify + lista de temas

export function renderMusicSection(album) {
  return `
    <section class="section" id="musica">
      <div class="container" style="position: relative; z-index: 2;">
        <div class="section-header">
          <span class="section-tag">Escúchalo completo</span>
          <h2 class="section-title">Los <span class="text-reverb">${album.tracks.length} temas</span></h2>
        </div>

        <div class="listen-grid">
          ${album.embedUrl ? `
          <iframe
            class="album-embed"
            src="${album.embedUrl}"
            height="452"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="${album.title} en Spotify">
          </iframe>` : ''}

          <ol class="tracklist">
            ${album.tracks.map((track, idx) => `
              <li class="track-row">
                <span class="track-row-num">${String(idx + 1).padStart(2, '0')}</span>
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
      </div>
    </section>
  `;
}

export function initMusicSection(album) {
  document.querySelectorAll('[data-play-track]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      window.cumbiaPlayer?.playTrack(btn.getAttribute('data-play-track'));
    });
  });

  document.querySelectorAll('[data-lyrics-track]').forEach(btn => {
    btn.addEventListener('click', () => {
      const track = album.tracks[parseInt(btn.getAttribute('data-lyrics-track'), 10)];
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
