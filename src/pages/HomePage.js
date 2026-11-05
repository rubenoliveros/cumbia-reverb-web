// src/pages/HomePage.js
// Página de inicio (landing): Hero + accesos a cada funcionalidad registrada en routes.js

import { renderHero, initHeroCanvas } from '../components/Hero.js';
import { featureRoutes } from '../routes.js';

export function renderHomePage() {
  return `
    ${renderHero()}

    <section class="section" id="explorar">
      <div class="ambient-glow ambient-magenta"></div>
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Explora</span>
          <h2 class="section-title">Bienvenido al <span class="text-reverb">Universo Reverb</span></h2>
          <p class="section-subtitle">Nuestra música, la banda y las próximas fechas.</p>
        </div>

        <div class="feature-grid">
          ${featureRoutes.map(route => `
            <a href="#${route.path}" class="feature-card card-glass">
              <span class="feature-card-icon">${route.icon}</span>
              <h3 class="feature-card-title">${route.menuLabel}</h3>
              <p class="feature-card-desc">${route.description}</p>
              <span class="feature-card-cta">Entrar →</span>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export function initHomePage() {
  return initHeroCanvas();
}
