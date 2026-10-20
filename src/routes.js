// src/routes.js
// Registro central de páginas. Para agregar una nueva funcionalidad:
//   1. Crea su componente (render + init opcional) en src/components/ o src/pages/
//   2. Agrega una entrada aquí. El navbar, el menú móvil, el footer y las
//      tarjetas de la página de inicio se generan automáticamente.
//
// Campos:
//   path        Ruta hash (ej: '/musica' → cumbiareverb.com/#/musica)
//   title       Nombre corto (navbar, título de la pestaña)
//   menuLabel   Nombre largo (menú móvil, footer, tarjeta de inicio)
//   icon        Emoji para menú móvil y tarjeta de inicio
//   description Texto de la tarjeta en la página de inicio
//   group       'main' (Navegación) o 'pro' (Área Profesional) en el footer
//   legacyHash  Ancla antigua de la versión one-page (#musica) para no romper enlaces
//   render      Función que retorna el HTML de la página
//   init        Función opcional que conecta eventos; puede retornar una función de limpieza

import { renderHomePage, initHomePage } from './pages/HomePage.js';
import { renderMusicSection, initMusicSection } from './components/MusicSection.js';
import { renderVideosSection } from './components/VideosSection.js';
import { renderMembersSection } from './components/MembersSection.js';
import { renderTourSection, initTourSection } from './components/TourSection.js';
import { renderMerchSection, initMerchSection } from './components/MerchSection.js';
import { renderEpkSection, initEpkSection } from './components/EpkSection.js';

export const homeRoute = {
  path: '/',
  title: 'Inicio',
  legacyHash: 'hero',
  render: renderHomePage,
  init: initHomePage
};

export const featureRoutes = [
  {
    path: '/musica',
    title: 'Música',
    menuLabel: 'Música & Discografía',
    icon: '🎵',
    description: 'Escucha nuestros sencillos, lee las letras y síguenos en Spotify.',
    group: 'main',
    legacyHash: 'musica',
    render: renderMusicSection,
    init: initMusicSection
  },
  {
    path: '/videos',
    title: 'Videos',
    menuLabel: 'Videos & YouTube',
    icon: '📺',
    description: 'Sesiones en vivo, clips y shorts desde nuestro canal oficial.',
    group: 'main',
    legacyHash: 'videos',
    render: renderVideosSection
  },
  {
    path: '/banda',
    title: 'Banda',
    menuLabel: 'Integrantes',
    icon: '⚡',
    description: 'Conoce a los cinco músicos de Colombia, Argentina y Venezuela.',
    group: 'main',
    legacyHash: 'integrantes',
    render: renderMembersSection
  },
  {
    path: '/gira',
    title: 'Gira',
    menuLabel: 'Gira & Conciertos',
    icon: '🎟️',
    description: 'Próximas fechas, boletería y presentaciones en vivo.',
    group: 'main',
    legacyHash: 'gira',
    render: renderTourSection,
    init: initTourSection
  },
  {
    path: '/tienda',
    title: 'Tienda',
    menuLabel: 'Tienda Oficial',
    icon: '👕',
    description: 'Camisetas, vinilos y más, con pedido directo por WhatsApp.',
    group: 'main',
    legacyHash: 'tienda',
    render: renderMerchSection,
    init: initMerchSection
  },
  {
    path: '/epk',
    title: 'EPK / Rider',
    menuLabel: 'EPK & Rider Técnico',
    icon: '📋',
    description: 'Stage plot, input list, monitoreo y descargas para prensa y festivales.',
    group: 'pro',
    legacyHash: 'epk',
    render: renderEpkSection,
    init: initEpkSection
  }
];

export const routes = [homeRoute, ...featureRoutes];
