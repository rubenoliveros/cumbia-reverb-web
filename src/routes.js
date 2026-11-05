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
import { renderMembersSection } from './components/MembersSection.js';
import { renderTourSection, initTourSection } from './components/TourSection.js';

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
    description: 'Escucha nuestra música y síguenos en Spotify.',
    group: 'main',
    legacyHash: 'musica',
    render: renderMusicSection,
    init: initMusicSection
  },
  {
    path: '/banda',
    title: 'Banda',
    menuLabel: 'Integrantes',
    icon: '⚡',
    description: 'Conoce a los cuatro músicos de Colombia, Argentina y Venezuela.',
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
  }
  // Fase 2 (ocultas hasta tener contenido real): '/videos' (VideosSection.js),
  // '/tienda' (MerchSection.js) y '/epk' (EpkSection.js). Para activarlas, vuelve a
  // importar su componente y agrega su entrada aquí.
];

export const routes = [homeRoute, ...featureRoutes];
