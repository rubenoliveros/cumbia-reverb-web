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
//   children    Subpáginas: se muestran en un menú desplegable (ej: un disco por entrada)
//   image, meta Miniatura y texto corto de cada subpágina en el desplegable
//   aliases     Rutas viejas que abren esta misma página (ej: '/musica')
//   legacyHash  Ancla antigua de la versión one-page (#musica) para no romper enlaces
//   render      Función que retorna el HTML de la página
//   init        Función opcional que conecta eventos; puede retornar una función de limpieza

import { renderHomePage, initHomePage } from './pages/HomePage.js';
import { renderAlbumPage, initAlbumPage } from './pages/AlbumPage.js';
import { renderDiscosPage } from './pages/DiscosPage.js';
import { renderBandPage, initBandPage } from './pages/BandPage.js';
import { albums, albumPath, albumMeta } from './data/musicData.js';
import { renderTourSection, initTourSection } from './components/TourSection.js';
import { renderContactSection, initContactSection } from './components/ContactSection.js';

export const homeRoute = {
  path: '/',
  title: 'Inicio',
  legacyHash: 'hero',
  render: renderHomePage,
  init: initHomePage
};

// Una página por disco (src/data/musicData.js). El primero hereda los enlaces viejos.
const albumRoutes = albums.map((album, i) => ({
  path: albumPath(album),
  title: album.title,
  menuLabel: album.title,
  image: album.cover,
  meta: albumMeta(album),
  ...(i === 0 && { aliases: ['/sancocho', '/musica'], legacyHash: 'musica' }),
  render: () => renderAlbumPage(album),
  init: () => initAlbumPage(album)
}));

export const featureRoutes = [
  {
    path: '/banda',
    title: 'Banda',
    menuLabel: 'La Banda',
    icon: '⚡',
    description: 'Quiénes somos y los cuatro músicos de Colombia, Argentina y Venezuela.',
    group: 'main',
    legacyHash: 'integrantes',
    render: renderBandPage,
    init: initBandPage
  },
  {
    path: '/discos',
    title: 'Discos',
    menuLabel: 'Discos',
    icon: '💿',
    description: 'Nuestra discografía, completa para escuchar en Spotify.',
    group: 'main',
    render: renderDiscosPage,
    children: albumRoutes
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
    path: '/contacto',
    title: 'Contacto',
    menuLabel: 'Contacto & Booking',
    icon: '✉️',
    description: 'Booking, prensa y medios: escríbele directo a quien lleva cada tema.',
    group: 'pro',
    legacyHash: 'contacto',
    render: renderContactSection,
    init: initContactSection
  }
  // Fase 2 (ocultas hasta tener contenido real): '/videos' (VideosSection.js),
  // '/tienda' (MerchSection.js) y '/epk' (EpkSection.js). Para activarlas, vuelve a
  // importar su componente y agrega su entrada aquí.
];

export const routes = [homeRoute, ...featureRoutes.flatMap(r => [r, ...(r.children ?? [])])];
