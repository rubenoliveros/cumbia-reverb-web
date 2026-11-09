// src/components/PreviewBadge.js
// Etiqueta flotante "Versión de prueba" con botón de feedback (solo si preview.enabled).
// Avisa que hay textos y fotos provisionales y lleva al grupo de WhatsApp.

import { preview } from '../data/siteConfig.js';

export function renderPreviewBadge() {
  if (!preview.enabled) return '';
  return `
    <aside class="preview-badge" aria-label="Versión de prueba">
      <span class="preview-badge-text">
        <strong>Versión de prueba · ${preview.label}</strong>
        <span>Algunos textos y fotos son provisionales.</span>
      </span>
      ${preview.feedbackUrl ? `
      <a href="${preview.feedbackUrl}" target="_blank" rel="noopener noreferrer" class="preview-badge-cta">Dar feedback</a>` : ''}
    </aside>
  `;
}
