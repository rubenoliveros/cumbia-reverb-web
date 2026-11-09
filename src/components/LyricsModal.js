// src/components/LyricsModal.js
// Modal para visualización de letras oficiales y créditos de producción

export function renderLyricsModal() {
  return `
    <div class="modal-overlay" id="lyricsModal">
      <div class="modal-window">
        <button class="modal-close-btn" id="closeLyricsModalBtn" aria-label="Cerrar">&times;</button>

        <span class="badge badge-cromo" style="margin-bottom: 12px;">CUMBIA REVERB • LETRAS OFICIALES</span>
        <h3 id="lyricsModalTitle" style="font-size: 1.6rem; font-weight: 900; margin-bottom: 20px;">Título de Canción</h3>

        <div id="lyricsModalBody" style="font-size: 1.05rem; line-height: 1.8; color: var(--color-text-main); margin-bottom: 24px; white-space: pre-wrap; font-family: var(--font-body); background: rgba(0, 0, 0, 0.25); padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle);">
          Cargando letra...
        </div>

        <div style="border-top: 1px solid var(--color-border-subtle); padding-top: 16px;">
          <h5 style="font-size: 0.85rem; font-weight: 700; color: var(--color-hueso); text-transform: uppercase; margin-bottom: 6px;">Créditos de Producción:</h5>
          <p id="lyricsModalCredits" style="font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.5;"></p>
        </div>
      </div>
    </div>
  `;
}

export function initLyricsModal() {
  const modal = document.getElementById('lyricsModal');
  const closeBtn = document.getElementById('closeLyricsModalBtn');

  const closeModal = () => modal?.classList.remove('open');

  closeBtn?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}
