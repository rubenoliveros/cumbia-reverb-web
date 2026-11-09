// src/components/flags.js
// Banderas en SVG: Windows no dibuja los emojis de bandera (muestra "CO", "AR", "VE").
// withFlags(texto) reemplaza 🇨🇴 🇦🇷 🇻🇪 por su SVG; flag('🇨🇴') devuelve uno solo.
// Los colores son los oficiales de cada bandera, no de la paleta de la banda.

const svg = (label, body) =>
  `<svg class="flag" viewBox="0 0 30 20" role="img" aria-label="${label}"><title>${label}</title>${body}</svg>`;

const VE_STARS = [-50, -36, -22, -7, 7, 22, 36, 50]
  .map(deg => {
    const rad = (deg * Math.PI) / 180;
    return `<circle cx="${(15 + 4.6 * Math.sin(rad)).toFixed(2)}" cy="${(11.6 - 4.6 * Math.cos(rad)).toFixed(2)}" r="0.55" fill="#fff"/>`;
  })
  .join('');

const FLAGS = {
  '🇨🇴': svg('Colombia',
    '<rect width="30" height="10" fill="#fcd116"/><rect y="10" width="30" height="5" fill="#003893"/><rect y="15" width="30" height="5" fill="#ce1126"/>'),
  '🇦🇷': svg('Argentina',
    '<rect width="30" height="20" fill="#74acdf"/><rect y="6.67" width="30" height="6.66" fill="#fff"/><circle cx="15" cy="10" r="2.1" fill="#f6b40e"/>'),
  '🇻🇪': svg('Venezuela',
    `<rect width="30" height="6.67" fill="#ffcc00"/><rect y="6.67" width="30" height="6.66" fill="#00247d"/><rect y="13.33" width="30" height="6.67" fill="#cf142b"/>${VE_STARS}`)
};

export const flag = emoji => FLAGS[emoji] ?? emoji;

export const withFlags = text =>
  Object.entries(FLAGS).reduce((out, [emoji, icon]) => out.split(emoji).join(icon), text);
