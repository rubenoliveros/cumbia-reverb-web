// src/main.js
// Orquestador principal de la plataforma oficial de Cumbia Reverb.
// Renderiza el "shell" persistente (navbar, footer, reproductor, modales) una sola vez
// y delega el contenido de <main> al enrutador. Las páginas se registran en routes.js.

import './css/reset.css';
import './css/variables.css';
import './css/paletas-disco.css';
import './css/components.css';
import './css/main.css';

import { routes } from './routes.js';
import { startRouter } from './router.js';
import { renderNavbar, initNavbar } from './components/Navbar.js';
import { renderBookingModal, initBookingModal } from './components/BookingModal.js';
import { renderLyricsModal, initLyricsModal } from './components/LyricsModal.js';
import { renderAudioPlayer, initAudioPlayer } from './components/AudioPlayer.js';
import { renderFooter, initFooter } from './components/Footer.js';

function assembleApp() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <!-- Top Navigation -->
    ${renderNavbar()}

    <!-- Page Outlet (contenido según la ruta activa) -->
    <main id="pageOutlet"></main>

    <!-- Footer -->
    ${renderFooter()}

    <!-- Persistent Bottom Audio Player -->
    ${renderAudioPlayer()}

    <!-- Modals -->
    ${renderBookingModal()}
    ${renderLyricsModal()}

    <!-- Global Floating Toast Notification -->
    <div class="toast-notice" id="globalToast" role="status" aria-live="polite"></div>
  `;

  // Shell persistente: se inicializa una sola vez
  initNavbar();
  initBookingModal();
  initLyricsModal();
  initAudioPlayer();
  initFooter();

  // Páginas
  startRouter({ routes, outlet: document.getElementById('pageOutlet') });

  console.log("🎸 Cumbia Reverb Web App iniciada exitosamente!");
}

document.addEventListener('DOMContentLoaded', assembleApp);
