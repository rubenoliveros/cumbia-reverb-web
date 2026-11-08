// src/components/Footer.js
// Pie de página oficial con enlaces a redes y créditos

import { bandData } from '../data/bandData.js';
import { featureRoutes } from '../routes.js';
import { withFlags } from './flags.js';
import { renderSocialLinks } from './socialIcons.js';

const footerLinks = (group) => featureRoutes
  .filter(r => r.group === group)
  .map(r => `<a href="#${r.path}" class="footer-link">${r.menuLabel}</a>`)
  .join('');

export function renderFooter() {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="footer">
      <div class="footer-container">
        <!-- Col 1: Brand Info -->
        <div>
          <h3 class="footer-brand-title">
            <img src="${bandData.images.logoText}" alt="${bandData.name}" class="footer-brand-logo" width="720" height="292" loading="lazy" />
          </h3>
          <p class="footer-brand-bio">
            ${withFlags(bandData.tagline)}<br>${bandData.location}
          </p>

          <div class="footer-social-links">
            ${renderSocialLinks()}
          </div>
        </div>

        <!-- Col 2: Navigation Links -->
        <div>
          <h4 class="footer-heading">Navegación</h4>
          <div class="footer-links-list">
            <a href="#/" class="footer-link">Inicio</a>
            ${footerLinks('main')}
          </div>
        </div>

        <!-- Col 3: Professional Area -->
        <div>
          <h4 class="footer-heading">Área Profesional</h4>
          <div class="footer-links-list">
            ${footerLinks('pro')}
            <a href="#booking" id="footerBookingLink" class="footer-link">Cotizar Concierto</a>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div>
          © ${currentYear} ${bandData.name}. Todos los derechos reservados.
        </div>
        <div>
          Sitio Oficial en <strong style="color: var(--color-rayo);">${bandData.officialUrl.replace('https://', '')}</strong>
        </div>
      </div>
    </footer>
  `;
}

export function initFooter() {
  document.getElementById('footerBookingLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('bookingModal')?.classList.add('open');
  });
}
