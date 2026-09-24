// src/components/Navbar.js
// Barra de navegación responsiva con glassmorphism y menú móvil

import { bandData } from '../data/bandData.js';

export function renderNavbar() {
  return `
    <nav class="navbar" id="mainNavbar">
      <div class="nav-container">
        <a href="#hero" class="nav-brand" id="navBrandLink">
          <img src="${bandData.images.favicon}" alt="Cumbia Reverb Logo" class="nav-brand-logo" width="38" height="38" />
          <span>${bandData.name}</span>
        </a>

        <div class="nav-menu" id="navDesktopMenu">
          <a href="#musica" class="nav-link" id="navLinkMusic">Música</a>
          <a href="#videos" class="nav-link" id="navLinkVideos">Videos</a>
          <a href="#integrantes" class="nav-link" id="navLinkMembers">Banda</a>
          <a href="#gira" class="nav-link" id="navLinkTour">Gira</a>
          <a href="#tienda" class="nav-link" id="navLinkMerch">Tienda</a>
          <a href="#epk" class="nav-link" id="navLinkEpk">EPK / Rider</a>
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
      <a href="#musica" class="mobile-drawer-link" data-close-drawer>🎵 Música & Discografía</a>
      <a href="#videos" class="mobile-drawer-link" data-close-drawer>📺 Videos & YouTube</a>
      <a href="#integrantes" class="mobile-drawer-link" data-close-drawer>⚡ Integrantes</a>
      <a href="#gira" class="mobile-drawer-link" data-close-drawer>🎟️ Gira & Conciertos</a>
      <a href="#tienda" class="mobile-drawer-link" data-close-drawer>👕 Tienda Oficial</a>
      <a href="#epk" class="mobile-drawer-link" data-close-drawer>📋 EPK & Rider Técnico</a>
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
