// src/components/EpkSection.js
// Electronic Press Kit (EPK) profesional y Rider Técnico interactivo para promotores y festivales

import { riderData } from '../data/riderData.js';
import { bandData } from '../data/bandData.js';

export function renderEpkSection() {
  return `
    <section class="section section-alt" id="epk">
      <div class="ambient-glow ambient-cyan"></div>

      <div class="container" style="position: relative; z-index: 2;">
        <div class="section-header">
          <span class="section-tag">PRESS KIT & RIDER TÉCNICO</span>
          <h2 class="section-title">
            <span>Área Profesional &</span>
            <span class="text-gradient-reverb">Festivales</span>
          </h2>
          <p class="section-subtitle">
            Información técnica, distribución de tarima (Stage Plot), lista de canales (Input List) y material descargable en alta resolución para programadores, prensa y directores técnicos.
          </p>
        </div>

        <!-- Navigation Tabs -->
        <div class="epk-tabs">
          <button class="epk-tab-btn active" data-tab="tab-stageplot">Stage Plot Visual</button>
          <button class="epk-tab-btn" data-tab="tab-inputs">Input List (14 Canales)</button>
          <button class="epk-tab-btn" data-tab="tab-monitoring">Monitoreo & Backline</button>
          <button class="epk-tab-btn" data-tab="tab-downloads">Descargas & Prensa</button>
        </div>

        <!-- Tab 1: Stage Plot -->
        <div class="epk-tab-pane active" id="tab-stageplot">
          <div class="stage-plot-container">
            <div class="stage-plot-header">
              <span class="badge badge-cyan" style="margin-bottom: 8px;">DISTRIBUCIÓN EN TARIMA (STAGE PLOT)</span>
              <h4 style="font-size: 1.15rem; font-weight: 800;">Cumbia Reverb — 5 Músicos en Escenario</h4>
              <p style="font-size: 0.82rem; color: var(--color-text-dim);">Visto desde la perspectiva de la audiencia hacia el escenario</p>
            </div>

            <!-- Backline Row -->
            <div class="stage-plot-backline">
              <div class="musician-pod">
                <div class="pod-name">🎹 Javier</div>
                <div class="pod-role">Teclados & Sintes</div>
                <div class="pod-req">${riderData.stagePositions[1].requirements}</div>
              </div>

              <div class="musician-pod" style="border-color: var(--color-neon-cyan);">
                <div class="pod-name">🥁 Ruben</div>
                <div class="pod-role">Batería & Timbales</div>
                <div class="pod-req">${riderData.stagePositions[0].requirements}</div>
              </div>

              <div class="musician-pod">
                <div class="pod-name">🎸 Matias</div>
                <div class="pod-role">Bajo Eléctrico</div>
                <div class="pod-req">${riderData.stagePositions[2].requirements}</div>
              </div>
            </div>

            <!-- Frontline Row -->
            <div class="stage-plot-frontline">
              <div class="musician-pod" style="border-color: var(--color-solar-gold);">
                <div class="pod-name">🏄 Miguel</div>
                <div class="pod-role">Guitarra Surf Reverb</div>
                <div class="pod-req">${riderData.stagePositions[3].requirements}</div>
              </div>

              <div class="musician-pod" style="border-color: var(--color-neon-magenta);">
                <div class="pod-name">🎤 Celta</div>
                <div class="pod-role">Voz Principal</div>
                <div class="pod-req">${riderData.stagePositions[4].requirements}</div>
              </div>
            </div>

            <div class="stage-apron-indicator">
              ▼ FRENTE DE ESCENARIO / AUDIENCIA ▼
            </div>
          </div>
        </div>

        <!-- Tab 2: Input List -->
        <div class="epk-tab-pane" id="tab-inputs">
          <div class="input-table-wrap">
            <table class="input-table">
              <thead>
                <tr>
                  <th>CH</th>
                  <th>Instrumento / Fuente</th>
                  <th>Micrófono / DI Sugerido</th>
                  <th>Pedestal</th>
                  <th>+48V</th>
                </tr>
              </thead>
              <tbody>
                ${riderData.inputList.map(item => `
                  <tr>
                    <td style="font-family: var(--font-mono); font-weight: 700; color: var(--color-neon-cyan);">${item.ch}</td>
                    <td style="font-weight: 700;">${item.instrument}</td>
                    <td>${item.mic}</td>
                    <td style="color: var(--color-text-muted);">${item.stand}</td>
                    <td><span class="badge ${item.phantom === 'Sí (+48V)' || item.phantom === 'Sí' ? 'badge-gold' : 'badge-cyan'}" style="font-size: 0.7rem;">${item.phantom}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Tab 3: Monitoring & Backline -->
        <div class="epk-tab-pane" id="tab-monitoring">
          <div class="card-glass" style="max-width: 960px; margin: 0 auto; padding: 36px;">
            <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 12px; color: var(--color-neon-cyan);">Sistema de Monitoreo</h3>
            <p style="color: var(--color-text-subtle); line-height: 1.6; margin-bottom: 24px;">
              ${riderData.monitoring.system}
            </p>

            <h4 style="font-size: 1.1rem; font-weight: 800; margin-bottom: 16px;">Mezclas de Monitores Individuales:</h4>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              ${riderData.monitoring.mixes.map(m => `
                <div style="background: rgba(255, 255, 255, 0.03); border-radius: var(--radius-md); padding: 16px; border: 1px solid var(--color-border-subtle);">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; flex-wrap: wrap;">
                    <span style="font-weight: 800; color: var(--color-solar-gold);">${m.mix}: ${m.user}</span>
                    <span class="badge badge-cyan">${m.type}</span>
                  </div>
                  <div style="font-size: 0.85rem; color: var(--color-text-muted);">
                    <strong>Balance prioritario:</strong> ${m.balance}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Tab 4: Downloads -->
        <div class="epk-tab-pane" id="tab-downloads">
          <div class="epk-downloads-grid">
            ${riderData.pressKitDownloads.map(dl => `
              <div class="epk-download-card">
                <div>
                  <h4 style="font-size: 1rem; font-weight: 800; margin-bottom: 4px;">${dl.title}</h4>
                  <span style="font-size: 0.82rem; color: var(--color-neon-cyan); font-family: var(--font-mono);">${dl.size}</span>
                </div>
                <button class="btn btn-secondary btn-sm" data-download-epk="${dl.filename}">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                  </svg>
                  <span>Descargar</span>
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initEpkSection() {
  const tabs = document.querySelectorAll('.epk-tab-btn');
  const panes = document.querySelectorAll('.epk-tab-pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.getAttribute('data-tab');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  // Download notification toast
  document.querySelectorAll('[data-download-epk]').forEach(btn => {
    btn.addEventListener('click', () => {
      const filename = btn.getAttribute('data-download-epk');
      const toast = document.getElementById('globalToast');
      if (toast) {
        toast.textContent = `📥 Preparando descarga: ${filename}`;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3500);
      }
    });
  });
}
