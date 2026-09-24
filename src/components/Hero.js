// src/components/Hero.js
// Sección Hero con ondas de reverberación en canvas dinámico y llamadas a la acción

import { bandData } from '../data/bandData.js';

export function renderHero() {
  return `
    <header class="hero" id="hero">
      <canvas id="reverbCanvas" class="hero-canvas"></canvas>

      <div class="hero-content">
        <div class="hero-pill">
          <span class="badge badge-cyan">
            <span>⚡</span>
            <span>Nuevo Single: "Cumbia Reverb" Ya Disponible</span>
          </span>
        </div>

        <h1 class="hero-title">
          <span class="text-gradient-reverb">Cumbia</span>
          <span>Reverb</span>
        </h1>

        <p class="hero-tagline">${bandData.tagline}</p>

        <p class="hero-description">
          ${bandData.bio.summary}
        </p>

        <div class="hero-actions">
          <button class="btn btn-primary" id="heroPlayBtn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span>Escuchar Himno</span>
          </button>

          <a href="${bandData.social.youtubeSubscribe}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" id="heroYoutubeBtn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF0000">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>Canal de YouTube</span>
          </a>

          <button class="btn btn-secondary" id="heroBookingTrigger">
            <span>Cotizar Fecha</span>
          </button>
        </div>

        <div class="hero-stats">
          ${bandData.bio.highlights.map(h => `
            <div class="hero-stat-item">
              <span class="hero-stat-number">${h.stat}</span>
              <span class="hero-stat-label">${h.label}</span>
            </div>
          `).join('')}
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
    drawWave(centerY - 25, 45, 0.007, 0.03, 'rgba(0, 240, 255, 0.25)', 2.5);
    drawWave(centerY, 60, 0.009, 0.045, 'rgba(255, 42, 133, 0.35)', 3.0);
    drawWave(centerY + 25, 50, 0.006, 0.025, 'rgba(255, 183, 3, 0.22)', 2.0);

    phase += 1;
    animationId = requestAnimationFrame(animate);
  }

  animate();

  // Button actions
  document.getElementById('heroBookingTrigger')?.addEventListener('click', () => {
    document.getElementById('bookingModal')?.classList.add('open');
  });

  document.getElementById('heroPlayBtn')?.addEventListener('click', () => {
    window.cumbiaPlayer?.playTrack(0);
    const toast = document.getElementById('globalToast');
    if (toast) {
      toast.textContent = '🔊 Reproduciendo "Cumbia Reverb" (Himno Oficial)';
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3500);
    }
  });

  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener('resize', resize);
  };
}
