// src/data/musicData.js
// Discografía de Cumbia Reverb (datos tomados de Spotify).
// Campos opcionales por pista (se muestran solo si existen):
//   audioPreview  ruta a un MP3 real en /public/audio (activa el reproductor persistente)
//   lyrics        letra oficial entregada por la banda
//   credits       créditos reales de composición / producción

const track = (id, title, spotifyId, duration) => ({
  id,
  title,
  duration,
  cover: "/images/covers/official_cover.jpg",
  links: { spotify: `https://open.spotify.com/track/${spotifyId}` }
});

export const musicData = {
  spotifyArtistId: "2QDEorhtmjmhWrFEItrp4i",
  album: {
    title: "Sancocho Pa' Ratas",
    cover: "/images/covers/official_cover.jpg",
    spotifyUrl: "https://open.spotify.com/album/4QuTFlEuHSPElog6YmUZxb",
    embedUrl: "https://open.spotify.com/embed/album/4QuTFlEuHSPElog6YmUZxb?utm_source=generator&theme=0"
  },
  tracks: [
    track("si-era-tan-listo", "Si Era Tan Listo", "5pssssi3vu4ELrYzBNaqLm", "1:58"),
    track("fuego-rojo", "Fuego Rojo", "4Pu4QqYgYrvu6V22cNLrbF", "3:18"),
    track("la-arana", "La Araña", "0aihLpQfQHktmfNOFx5gR7", "4:40"),
    track("presunto-persecuto", "Presunto Persecuto", "4TfbRs4tZBNHVULuSnT29I", "5:37"),
    track("surfeando-en-la-nieve", "Surfeando en la Nieve", "6gx4gadyfw1rEWfVRa3hoY", "2:59"),
    track("ana-funk", "Ana Funk (Cenizas de un Recuerdo)", "60GdyNFXmJDrqcfxBSUtCA", "2:50"),
    track("cumbia-reverb", "Cumbia Reverb", "4VfZv53L30cKAkn8jRJJIt", "3:40"),
    track("el-bazuko", "El Bazuko", "3FVaZg7xOwzht8aYenDZXk", "3:59"),
    track("primavera-fria", "Primavera Fria", "5dXF0gzNIS3F2uZBpDqP0d", "3:05"),
    track("ciudad-sin-luz", "Ciudad Sin Luz", "0UyypPQ7nxtSQ36bQLf0Cc", "4:48"),
    track("de-malas", "De Malas", "7lwyK1R5M82HmQW37N4WVb", "3:18"),
    track("el-fin-del-mundo", "El Fin del Mundo", "4F3UMA1d97XDHCIohtYvOw", "3:55")
  ]
};

export const playableTracks = musicData.tracks.filter(t => t.audioPreview);
