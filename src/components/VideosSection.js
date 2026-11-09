// src/components/VideosSection.js
// Hub audiovisual de la banda y canal de YouTube

import { videosData } from '../data/videosData.js';

export function renderVideosSection() {
  return `
    <section class="section section-alt" id="videos">
      <div class="ambient-glow ambient-magenta"></div>

      <div class="container" style="position: relative; z-index: 2;">
        <div class="section-header">
          <span class="section-tag">CANAL DE YOUTUBE OFICIAL</span>
          <h2 class="section-title">
            <span>Sesiones en Vivo &</span>
            <span class="text-gradient-fuego">Videoclips</span>
          </h2>
          <p class="section-subtitle">
            Vive la energía de Cumbia Reverb en tarima y en el estudio. Suscríbete a nuestro canal oficial para no perderte ningún estreno ni sesión en directo.
          </p>
        </div>

        <!-- YouTube Fast Subscribe Banner -->
        <div class="youtube-subscribe-banner">
          <div class="yt-sub-info">
            <h4>
              <span class="yt-sub-bell">🔔</span>
              <span>¡Únete a la Comunidad Cumbia Reverb en YouTube!</span>
            </h4>
            <p style="font-size: 0.92rem; color: var(--color-text-subtle);">
              Suscríbete ahora con un solo clic y sé el primero en ver las nuevas sesiones en vivo, solos de guitarra surf y contenido de ensayo exclusivo.
            </p>
          </div>

          <a href="${videosData.channelInfo.subscribeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-youtube" id="ytFastSubscribeBtn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>Suscribirse al Canal</span>
          </a>
        </div>

        <!-- Featured Video Showcase -->
        <div class="video-featured-wrapper">
          <div class="video-featured-inner">
            <img src="${videosData.featured.thumbnail}" alt="${videosData.featured.title}" class="video-featured-poster" />
            <div class="video-featured-overlay">
              <span class="badge badge-sancocho" style="margin-bottom: 12px;">${videosData.featured.category} • ${videosData.featured.duration}</span>
              <h3 class="video-featured-title">${videosData.featured.title}</h3>
              <p style="font-size: 0.95rem; color: var(--color-text-subtle); max-width: 700px; margin-bottom: 20px;">
                ${videosData.featured.description}
              </p>
              <div>
                <a href="${videosData.featured.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" id="watchFeaturedVideoBtn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <span>Ver en YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Video Clips Grid -->
        <h3 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 24px;">Lanzamientos & Sesiones</h3>
        <div class="videos-grid">
          ${videosData.clips.map(clip => `
            <a href="${clip.url}" target="_blank" rel="noopener noreferrer" class="video-clip-card">
              <div class="video-clip-thumb">
                <img src="${clip.thumbnail}" alt="${clip.title}" loading="lazy" />
                <span class="badge badge-cromo" style="position: absolute; bottom: 8px; right: 8px; font-size: 0.75rem;">
                  ${clip.duration}
                </span>
              </div>
              <div class="video-clip-info">
                <span style="font-size: 0.75rem; color: var(--color-sancocho); font-weight: 700; text-transform: uppercase;">${clip.tag}</span>
                <h4 class="video-clip-title">${clip.title}</h4>
                <span style="font-size: 0.8rem; color: var(--color-text-dim);">${clip.views}</span>
              </div>
            </a>
          `).join('')}
        </div>

        <!-- Shorts & Micro-clips -->
        <h3 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 20px;">Shorts & Momentos en Tarima</h3>
        <div class="shorts-container">
          ${videosData.shorts.map(s => `
            <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="short-card">
              <div>
                <span class="badge badge-hueso" style="margin-bottom: 12px; font-size: 0.72rem;">${s.instrument}</span>
                <h4 style="font-size: 1.05rem; font-weight: 800; line-height: 1.35; color: var(--color-text-main); margin-bottom: 8px;">${s.title}</h4>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--color-border-subtle); padding-top: 12px;">
                <span style="font-size: 0.82rem; color: var(--color-text-muted);">${s.views}</span>
                <span style="color: var(--color-sancocho); font-weight: 800; font-size: 0.85rem;">Ver Short ↗</span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
