// src/components/Hero.js
// Sección Hero con ondas de reverberación en canvas dinámico y llamadas a la acción

import { bandData, isPending } from '../data/bandData.js';
import { latestAlbum, albumPath } from '../data/musicData.js';
import { withFlags } from './flags.js';

export function renderHero() {
  return `
    <header class="hero" id="hero">
      <canvas id="reverbCanvas" class="hero-canvas"></canvas>

      <div class="hero-content">
        <h1 class="hero-title">
          <img src="${bandData.images.logo}" alt="${bandData.name}" class="hero-logo" width="900" height="895" fetchpriority="high" />
        </h1>

        <p class="hero-tagline">${withFlags(bandData.tagline)}</p>

        <p class="hero-location">Desde ${bandData.location}</p>

        ${isPending(bandData.bio.summary) ? '' : `
        <p class="hero-description">${bandData.bio.summary}</p>`}

        <div class="hero-actions">
          <a href="#${albumPath(latestAlbum)}" class="btn btn-primary" id="heroAlbumBtn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span>Escucha ${latestAlbum.title}</span>
          </a>

          ${bandData.social.youtubeSubscribe ? `
          <a href="${bandData.social.youtubeSubscribe}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" id="heroYoutubeBtn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF0000">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>Canal de YouTube</span>
          </a>` : ''}

          <button class="btn btn-secondary" id="heroBookingTrigger">
            <span>Cotizar Fecha</span>
          </button>
        </div>
      </div>
    </header>
  `;
}

export function initHeroCanvas() {
  const canvas = document.getElementById('reverbCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationId;
  let width, height;
  let phase = 0;
  // Colores de la paleta (PALETA.md), leídos de los tokens CSS
  const tokens = getComputedStyle(document.documentElement);
  const [rayo, sancocho, hueso] = ['rayo', 'sancocho', 'hueso'].map(n => tokens.getPropertyValue(`--rgb-${n}`).trim());

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  function drawWave(yOffset, amplitude, frequency, speed, color, lineWidth) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;

    for (let x = 0; x < width; x += 4) {
      // Oscilloscope + spring reverb effect simulation
      const angle = (x * frequency) + (phase * speed);
      const y = yOffset + Math.sin(angle) * amplitude * Math.sin(x / width * Math.PI);
      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    const centerY = height * 0.45;

    // Multiple reverberated wave lines
    drawWave(centerY - 25, 45, 0.007, 0.03, `rgba(${rayo}, 0.3)`, 2.5);
    drawWave(centerY, 60, 0.009, 0.045, `rgba(${sancocho}, 0.35)`, 3.0);
    drawWave(centerY + 25, 50, 0.006, 0.025, `rgba(${hueso}, 0.22)`, 2.0);

    phase += 1;
    animationId = requestAnimationFrame(animate);
  }

  animate();

  // Button actions
  document.getElementById('heroBookingTrigger')?.addEventListener('click', () => {
    document.getElementById('bookingModal')?.classList.add('open');
  });

  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener('resize', resize);
  };
}
