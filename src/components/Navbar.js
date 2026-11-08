// src/components/Navbar.js
// Barra de navegación responsiva con glassmorphism y menú móvil

import { bandData } from '../data/bandData.js';
import { featureRoutes } from '../routes.js';

// Desplegable para rutas con subpáginas (ej: Discos → un disco por entrada).
// Clic en "Discos" abre la página con todos; al pasar el mouse (o con el foco del
// teclado) se despliega cada disco para ir directo a él.
function renderDropdown(route) {
  const id = `navDropdown-${route.path.slice(1)}`;
  return `
    <div class="nav-dropdown" data-dropdown>
      <a href="#${route.path}" class="nav-link nav-dropdown-toggle" data-route-link="${route.path}"
         aria-expanded="false" aria-controls="${id}" aria-haspopup="true">
        ${route.title}
        <svg class="nav-dropdown-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
      </a>
      <div class="nav-dropdown-menu" id="${id}">
        ${route.children.map(c => `
          <a href="#${c.path}" class="nav-dropdown-item" data-route-link="${c.path}">
            ${c.image ? `<img src="${c.image}" alt="" width="48" height="48" loading="lazy" />` : ''}
            <span>
              <span class="nav-dropdown-item-title">${c.menuLabel}</span>
              ${c.meta ? `<span class="nav-dropdown-item-meta">${c.meta}</span>` : ''}
            </span>
          </a>
        `).join('')}
      </div>
    </div>
  `;
}

export function renderNavbar() {
  return `
    <nav class="navbar" id="mainNavbar">
      <div class="nav-container">
        <a href="#/" class="nav-brand" id="navBrandLink" data-route-link="/">
          <img src="${bandData.images.logoText}" alt="${bandData.name}" class="nav-brand-logo" width="720" height="292" />
        </a>

        <div class="nav-menu" id="navDesktopMenu">
          ${featureRoutes.map(r => r.children ? renderDropdown(r) : `
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
        ${(r.children ?? []).map(c => `
        <a href="#${c.path}" class="mobile-drawer-sublink" data-route-link="${c.path}" data-close-drawer>${c.menuLabel}</a>
        `).join('')}
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

  initDropdowns();
}

function initDropdowns() {
  const dropdowns = [...document.querySelectorAll('[data-dropdown]')];
  const setOpen = (dropdown, open) => {
    dropdown.classList.toggle('open', open);
    dropdown.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', String(open));
  };
  const closeAll = () => dropdowns.forEach(d => setOpen(d, false));

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.nav-dropdown-toggle');
    dropdown.addEventListener('mouseenter', () => setOpen(dropdown, true));
    dropdown.addEventListener('focusin', () => setOpen(dropdown, true));
    dropdown.addEventListener('mouseleave', () => setOpen(dropdown, false));
    dropdown.addEventListener('focusout', e => {
      if (!dropdown.contains(e.relatedTarget)) setOpen(dropdown, false);
    });
    dropdown.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        setOpen(dropdown, false);
        toggle.focus();
      }
    });
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('[data-dropdown]')) closeAll();
  });
  window.addEventListener('routechange', closeAll);
}
