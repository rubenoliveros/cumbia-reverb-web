// src/components/Navbar.js
// Barra de navegación responsiva con glassmorphism y menú móvil

import { bandData } from '../data/bandData.js';
import { featureRoutes } from '../routes.js';

export function renderNavbar() {
  return `
    <nav class="navbar" id="mainNavbar">
      <div class="nav-container">
        <a href="#/" class="nav-brand" id="navBrandLink" data-route-link="/">
          <img src="${bandData.images.logoText}" alt="${bandData.name}" class="nav-brand-logo" width="720" height="292" />
        </a>

        <div class="nav-menu" id="navDesktopMenu">
          ${featureRoutes.map(r => `
            <a href="#${r.path}" class="nav-link" data-route-link="${r.path}">${r.title}</a>
          `).join('')}
        </div>

        <div class="nav-actions">
          <button class="btn btn-primary btn-sm" id="navBookingBtn">
            <span>Contrataciones</span>
          </button>
          
          <button class="nav-toggle-btn" id="navToggleBtn" aria-label="Abrir Menú">
            <span class="nav-toggle-bar"></span>
            <span class="nav-toggle-bar"></span>
            <span class="nav-toggle-bar"></span>
          </button>
        </div>
      </div>
    </nav>

    <div class="mobile-drawer" id="mobileDrawer">
      ${featureRoutes.map(r => `
        <a href="#${r.path}" class="mobile-drawer-link" data-route-link="${r.path}" data-close-drawer>${r.icon} ${r.menuLabel}</a>
      `).join('')}
      <button class="btn btn-primary" id="mobileBookingBtn" style="margin-top: 10px;">
        <span>Cotizar Concierto</span>
      </button>
    </div>
  `;
}

export function initNavbar() {
  const navbar = document.getElementById('mainNavbar');
  const toggleBtn = document.getElementById('navToggleBtn');
  const drawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('[data-close-drawer]');
  const navBookingBtn = document.getElementById('navBookingBtn');
  const mobileBookingBtn = document.getElementById('mobileBookingBtn');

  // Sticky scroll class
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  toggleBtn?.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  // Close drawer on link click
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });

  // Open booking modal
  const openModal = () => {
    drawer.classList.remove('open');
    const modal = document.getElementById('bookingModal');
    if (modal) modal.classList.add('open');
  };

  navBookingBtn?.addEventListener('click', openModal);
  mobileBookingBtn?.addEventListener('click', openModal);
}
