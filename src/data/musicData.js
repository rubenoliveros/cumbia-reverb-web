// src/data/musicData.js
// Discografía de Cumbia Reverb (datos tomados de Spotify).
//
// AGREGAR UN DISCO: añade un objeto a `albums` con los mismos campos, en cualquier
// posición. Los discos se ordenan solos por `releaseDate` (el más nuevo primero) en el
// menú "Discos", la discografía y la Home. `releaseDate` sale de Spotify (AAAA-MM-DD);
// si falta, el disco va al final y no muestra año. Cada disco tiene su página en
// #/discos/<slug>.
//
// Campos opcionales por disco:
//   upcoming  true = disco anunciado que aún no sale (placeholder). Va primero, muestra
//             "Próximamente" y su página no tiene temas ni Spotify. Al salir, quita
//             `upcoming` y completa título, portada, fecha, Spotify y temas.
//   palette   paleta propia para la página del disco (ver src/css/paletas-disco.css)
//   aliases / legacyHash  enlaces viejos que deben abrir este disco
//
// Campos opcionales por pista (se muestran solo si existen):
//   audioPreview  ruta a un MP3 real en /public/audio (activa el reproductor persistente)
//   lyrics        letra oficial entregada por la banda
//   credits       créditos reales de composición / producción

const track = (id, title, spotifyId, duration, cover) => ({
  id,
  title,
  duration,
  cover,
  links: { spotify: `https://open.spotify.com/track/${spotifyId}` }
});

const SANCOCHO_COVER = "/images/covers/official_cover.jpg";

export const spotifyArtistId = "2QDEorhtmjmhWrFEItrp4i";

export const albums = [
  {
    // PLACEHOLDER: EP nuevo en camino. Título, portada, fecha y temas por confirmar.
    slug: "nuevo-ep",
    title: "Nuevo EP",
    type: "EP",
    upcoming: true,
    releaseDate: null,
    cover: "/images/covers/ep-proximamente.svg",
    spotifyUrl: null,
    embedUrl: null,
    tracks: []
  },
  {
    slug: "sancocho-pa-ratas",
    title: "Sancocho Pa' Ratas",
    type: "Álbum",
    releaseDate: "2025-09-25", // Spotify: 25 de septiembre de 2025
    palette: "sancocho",       // colores de su portada en su página
    aliases: ["/sancocho", "/musica"],
    legacyHash: "musica",
    cover: SANCOCHO_COVER,
    spotifyUrl: "https://open.spotify.com/album/4QuTFlEuHSPElog6YmUZxb",
    embedUrl: "https://open.spotify.com/embed/album/4QuTFlEuHSPElog6YmUZxb?utm_source=generator&theme=0",
    tracks: [
      ["si-era-tan-listo", "Si Era Tan Listo", "5pssssi3vu4ELrYzBNaqLm", "1:58"],
      ["fuego-rojo", "Fuego Rojo", "4Pu4QqYgYrvu6V22cNLrbF", "3:18"],
      ["la-arana", "La Araña", "0aihLpQfQHktmfNOFx5gR7", "4:40"],
      ["presunto-persecuto", "Presunto Persecuto", "4TfbRs4tZBNHVULuSnT29I", "5:37"],
      ["surfeando-en-la-nieve", "Surfeando en la Nieve", "6gx4gadyfw1rEWfVRa3hoY", "2:59"],
      ["ana-funk", "Ana Funk (Cenizas de un Recuerdo)", "60GdyNFXmJDrqcfxBSUtCA", "2:50"],
      ["cumbia-reverb", "Cumbia Reverb", "4VfZv53L30cKAkn8jRJJIt", "3:40"],
      ["el-bazuko", "El Bazuko", "3FVaZg7xOwzht8aYenDZXk", "3:59"],
      ["primavera-fria", "Primavera Fria", "5dXF0gzNIS3F2uZBpDqP0d", "3:05"],
      ["ciudad-sin-luz", "Ciudad Sin Luz", "0UyypPQ7nxtSQ36bQLf0Cc", "4:48"],
      ["de-malas", "De Malas", "7lwyK1R5M82HmQW37N4WVb", "3:18"],
      ["el-fin-del-mundo", "El Fin del Mundo", "4F3UMA1d97XDHCIohtYvOw", "3:55"]
    ].map(([id, title, spotifyId, duration]) => track(id, title, spotifyId, duration, SANCOCHO_COVER))
  }
];

// Duración total en minutos, calculada de las pistas (ej: 44)
const toMinutes = tracks => Math.round(
  tracks.reduce((sum, t) => {
    const [m, s] = t.duration.split(':').map(Number);
    return sum + m * 60 + s;
  }, 0) / 60
);
albums.forEach(album => {
  album.minutes = toMinutes(album.tracks);
  album.year = album.releaseDate ? album.releaseDate.slice(0, 4) : null;
});

// Próximos primero, luego del más nuevo al más viejo; los discos sin fecha van al final
albums.sort((a, b) =>
  Number(!!b.upcoming) - Number(!!a.upcoming) ||
  (b.releaseDate ?? '').localeCompare(a.releaseDate ?? ''));

// Último disco ya publicado: el que se promociona en la Home y el hero
export const latestAlbum = albums.find(a => !a.upcoming);
export const albumPath = album => `/discos/${album.slug}`;
export const albumMeta = album => [
  album.upcoming ? 'Próximamente' : album.year,
  album.type,
  album.tracks.length && `${album.tracks.length} temas`,
  album.tracks.length && `${album.minutes} min`
].filter(Boolean).join(' · ');

export const playableTracks = albums.flatMap(a => a.tracks).filter(t => t.audioPreview);
