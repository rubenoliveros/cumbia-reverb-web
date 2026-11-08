// src/router.js
// Enrutador hash minimalista: renderiza la página activa dentro del outlet
// sin recargar el sitio, así el reproductor de audio sigue sonando al navegar.

const BASE_TITLE = document.title;
const BAND_NAME = 'Cumbia Reverb';

export function startRouter({ routes, outlet }) {
  let cleanup = null;

  function currentPath() {
    const hash = window.location.hash;
    if (!hash.startsWith('#/')) return '/';
    return hash.slice(1).split('?')[0] || '/';
  }

  // Enlaces antiguos de la versión one-page (ej: cumbiareverb.com/#musica)
  function redirectLegacyHash() {
    const hash = window.location.hash;
    if (!hash || hash.startsWith('#/')) return false;
    const legacy = routes.find(r => r.legacyHash === hash.slice(1));
    if (!legacy) return false;
    window.location.replace(`#${legacy.path}`);
    return true;
  }

  function render() {
    if (redirectLegacyHash()) return;

    const path = currentPath();
    const route = routes.find(r => r.path === path || r.aliases?.includes(path)) ?? routes[0];

    cleanup?.();
    cleanup = null;

    const isHome = route.path === '/';
    outlet.innerHTML = isHome ? route.render() : `<div class="page">${route.render()}</div>`;

    const result = route.init?.();
    if (typeof result === 'function') cleanup = result;

    document.title = isHome ? BASE_TITLE : `${route.title} | ${BAND_NAME}`;

    document.querySelectorAll('[data-route-link]').forEach(link => {
      const linkPath = link.getAttribute('data-route-link');
      link.classList.toggle('active', route.path === linkPath || route.path.startsWith(`${linkPath}/`));
    });

    window.scrollTo(0, 0);
    window.dispatchEvent(new CustomEvent('routechange', { detail: { path: route.path } }));
  }

  window.addEventListener('hashchange', render);
  render();
}
