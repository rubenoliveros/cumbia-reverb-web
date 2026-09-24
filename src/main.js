// src/main.js
// Orquestador principal de la plataforma oficial de Cumbia Reverb

import './css/reset.css';
import './css/variables.css';
import './css/components.css';
import './css/main.css';

import { renderNavbar, initNavbar } from './components/Navbar.js';
import { renderHero, initHeroCanvas } from './components/Hero.js';
import { renderMusicSection, initMusicSection } from './components/MusicSection.js';
import { renderVideosSection } from './components/VideosSection.js';
import { renderMembersSection } from './components/MembersSection.js';
import { renderTourSection, initTourSection } from './components/TourSection.js';
import { renderMerchSection, initMerchSection } from './components/MerchSection.js';
import { renderEpkSection, initEpkSection } from './components/EpkSection.js';
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

    <!-- Main Content -->
    <main>
      ${renderHero()}
      ${renderMusicSection()}
      ${renderVideosSection()}
      ${renderMembersSection()}
      ${renderTourSection()}
      ${renderMerchSection()}
      ${renderEpkSection()}
    </main>

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

  // Initialize interactive logic
  initNavbar();
  initHeroCanvas();
  initMusicSection();
  initTourSection();
  initMerchSection();
  initEpkSection();
  initBookingModal();
  initLyricsModal();
  initAudioPlayer();
  initFooter();

  console.log("🎸 Cumbia Reverb Web App iniciada exitosamente!");
}

document.addEventListener('DOMContentLoaded', assembleApp);
