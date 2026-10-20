// src/components/Footer.js
// Pie de página oficial con enlaces a redes, newsletter y créditos

import { bandData } from '../data/bandData.js';
import { featureRoutes } from '../routes.js';

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
            <span class="text-gradient-reverb">${bandData.name}</span>
          </h3>
          <p class="footer-brand-bio">
            ${bandData.tagline}. Cumbia psicodélica, surf reverb y chicha moderna conectando los corazones de Colombia, Argentina y Venezuela.
          </p>

          <div class="footer-social-links">
            <a href="${bandData.social.spotify}" target="_blank" rel="noopener noreferrer" class="footer-social-icon" title="Spotify">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </a>

            <a href="${bandData.social.youtube}" target="_blank" rel="noopener noreferrer" class="footer-social-icon" title="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            <a href="${bandData.social.instagram}" target="_blank" rel="noopener noreferrer" class="footer-social-icon" title="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <a href="mailto:${bandData.social.email}" class="footer-social-icon" title="Correo Electrónico">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
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
            <a href="mailto:${bandData.social.email}" class="footer-link">Contacto Directo</a>
          </div>
        </div>

        <!-- Col 4: Newsletter -->
        <div>
          <h4 class="footer-heading">Club de Fans / Newsletter</h4>
          <p style="font-size: 0.88rem; color: var(--color-text-muted); margin-bottom: 14px; line-height: 1.5;">
            Entérate antes que nadie de nuevas fechas de conciertos, lanzamientos y códigos de descuento para merchandising.
          </p>

          <form id="newsletterForm" style="display: flex; gap: 8px;">
            <input type="email" id="newsletterEmail" placeholder="tu@correo.com" class="form-control" style="font-size: 0.88rem; padding: 10px 14px;" required />
            <button type="submit" class="btn btn-primary btn-sm">
              <span>Unirme</span>
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div>
          © ${currentYear} ${bandData.name}. Todos los derechos reservados.
        </div>
        <div>
          Sitio Oficial en <strong style="color: var(--color-neon-cyan);">${bandData.officialUrl.replace('https://', '')}</strong>
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

  const form = document.getElementById('newsletterForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail')?.value;
    const toast = document.getElementById('globalToast');
    if (toast) {
      toast.textContent = `⚡ ¡Bienvenido a la tribu de Cumbia Reverb! Registrado: ${email}`;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 4000);
    }
    form.reset();
  });
}
