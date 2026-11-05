# 🤖 AGENTS.md — Memoria Persistente & Directrices de Desarrollo

Este archivo sirve como memoria persistente, contexto de arquitectura y guía operativa para cualquier agente de IA o desarrollador que trabaje en el proyecto **Cumbia Reverb Web** (`CR_Site`).

---

## 🎸 1. Contexto del Proyecto & Misión

- **Banda:** **Cumbia Reverb**
- **Dominio Oficial:** [cumbiareverb.com](https://cumbiareverb.com)
- **Lema / Esencia:** *"Puro Rocanrol Sudaca 🇨🇴 🇦🇷 🇻🇪 — Sancocho pa' Ratas"*
- **Género / Estilo:** Cumbia Psicodélica / Surf Reverb / Chicha Moderna / Garage Tropical
- **Benchmark / Referencia:** [Pato el Pez](https://patoelpez.netlify.app/)
  - Arquitectura moderna Single Page.
  - Reproductor de audio continuo sin cortes al navegar.
  - Tarjetas de integrantes con micro-interacciones vivas y equipamiento (*gear*).
  - Hub protagónico de YouTube y catálogo musical de Spotify.
  - Tienda de merchandising directa vía WhatsApp sin fricción de carritos complejos.
  - Electronic Press Kit (EPK) y Rider Técnico interactivo para programadores de festivales.

---

## 👥 2. Alineación Oficial de la Banda (Lineup)

Base: **Medellín, Colombia**. Banda de canciones originales.

1. **Celta** (Colombia 🇨🇴) — Voz
2. **Miguel** (Colombia 🇨🇴) — Guitarra
3. **Matias** (Argentina 🇦🇷) — Bajo. Responde booking, WhatsApp y correo.
4. **Ruben** (Venezuela 🇻🇪) — Batería & Percusión

> [!IMPORTANT]
> **Regla de contenido:** no inventar datos (bios, citas, equipos, fechas, cifras, vistas, productos, precios, letras, créditos, fotos o audios generados). Lo que la banda no haya confirmado va como placeholder (`Lorem ipsum` / `null`) y la UI lo oculta o lo marca como pendiente.

**Objetivos:** darse a conocer, tocar en festivales grandes de Antioquia y Colombia, y organizar eventos propios de 500+ personas. No hacen matrimonios; sí eventos de empresa.

---

## 🔗 3. Canales Digitales & IDs Oficiales

- **Spotify Artist ID:** `2QDEorhtmjmhWrFEItrp4i` (`https://open.spotify.com/artist/2QDEorhtmjmhWrFEItrp4i`)
  - Disco: *Sancocho Pa' Ratas*, 12 temas (`https://open.spotify.com/album/4QuTFlEuHSPElog6YmUZxb`). Portada: `public/images/covers/official_cover.jpg`.
  - Tracklist completo en `src/data/musicData.js`.
- **YouTube:** pendiente, el canal está por crear (`bandData.social.youtube = null`).
- **Instagram:** `@cumbia_reverb` (`https://www.instagram.com/cumbia_reverb/`)
- **Contacto Booking:** `booking@cumbiareverb.com` · WhatsApp de Matías pendiente.

---

## 🎨 4. Sistema de Diseño Visual (Design Tokens)

> [!IMPORTANT]
> **Colores:** lee siempre [`PALETA.md`](PALETA.md) antes de tocar colores. Es la fuente oficial de la paleta (portada de *Sancocho Pa' Ratas* + logos), sus usos y reglas de contraste. Usa solo los tokens de `src/css/variables.css` (`--color-sancocho`, `--color-cian`, `--color-llama`, `--color-hueso`, `rgba(var(--rgb-…), α)`); no escribas hex sueltos. Si cambias la paleta, actualiza `PALETA.md` y `variables.css` juntos.

- **Filosofía:** Psicodelia tropical sobre fondo vino casi negro, con los rojos y el hueso de la portada, el cian del logo para la interacción y el oro como detalle, y Glassmorphism (`backdrop-filter: blur(...)`).
- **Tipografías:**
  - Títulos y Acentos: `'Syne', sans-serif` (Google Fonts, weights: 700, 800, 900)
  - Textos y UI: `'Plus Jakarta Sans', sans-serif` (Google Fonts, weights: 400, 500, 600, 700, 800)

> [!IMPORTANT]
> **Regla de Estilos:** Se utiliza Vanilla CSS modular con variables en `src/css/variables.css`. No usar TailwindCSS a menos que se solicite explícitamente.

---

## 📂 5. Estructura del Código

```
c:/Projects/CR_Site/
├── index.html                   # Entry point con SEO semántico y Schema.org JSON-LD
├── package.json                 # Dependencias y scripts Vite
├── vite.config.js               # Configuración Vite (puerto 3000, build a dist/)
├── AGENTS.md                    # Memoria persistente del proyecto (este archivo)
├── PALETA.md                    # Paleta oficial de colores (consultar siempre)
├── brand/                       # Logos originales en alta resolución (fuente, no se publican)
├── .gitignore                   # Exclusión de node_modules, dist, logs
├── public/
│   ├── favicon.svg              # Isotipo vectorial de Cumbia Reverb
│   ├── audio/                   # MP3 reales de la banda (vacío; activa el reproductor)
│   ├── images/
│   │   ├── logo/                # logo-full (personaje + letras) y logo-letras, .webp/.png transparentes
│   │   ├── og-image.jpg         # Imagen para compartir en redes (1200×630)
│   │   ├── covers/official_avatar.jpg (avatar), official_cover.jpg (portada del disco)
│   │   └── placeholder.svg      # Foto pendiente (integrantes)
│   └── docs/                    # PDFs del EPK y rider (pendientes)
└── src/
    ├── css/
    │   ├── reset.css            # Normalización y custom scrollbars
    │   ├── variables.css        # Tokens de diseño (colores según PALETA.md)
    │   ├── components.css       # Tarjetas, botones luminosos, player flotante, modales
    │   └── main.css             # Layouts responsivos y breakpoints
    ├── data/
    │   ├── bandData.js          # Datos y biografía de la banda e integrantes
    │   ├── musicData.js         # Discografía, letras de canciones y créditos
    │   ├── videosData.js        # Hub de YouTube, clips y shorts
    │   ├── tourData.js          # Fechas de gira y estado de boletos
    │   ├── merchData.js         # Productos de merchandising y FAQ
    │   └── riderData.js         # Rider técnico y stage plot (pendiente)
    ├── components/
    │   ├── Navbar.js            # Menú superior fijo con glassmorphism y drawer móvil
    │   ├── Hero.js              # Canvas interactivo con osciloscopio de ondas sonoras
    │   ├── AudioPlayer.js       # Reproductor persistente inferior (cumbiaPlayer API)
    │   ├── MusicSection.js      # Catálogo con preview de audio y embed Spotify
    │   ├── VideosSection.js     # Sección YouTube con CTA de suscripción rápida
    │   ├── MembersSection.js    # Fichas interactivas de músicos
    │   ├── TourSection.js       # Conciertos y llamadas a booking
    │   ├── MerchSection.js      # Catálogo con generador de pedidos por WhatsApp
    │   ├── EpkSection.js        # Pestañas de Rider Técnico, Stage Plot y descargas
    │   ├── BookingModal.js      # Formulario de cotización de fechas
    │   ├── LyricsModal.js       # Modal para leer letras completas de los temas
    │   └── Footer.js            # Redes, newsletter y pie de página
    ├── pages/
    │   └── HomePage.js          # Landing: Hero + tarjetas generadas desde routes.js
    ├── routes.js                # Registro central de páginas (fuente única de navegación)
    ├── router.js                # Enrutador hash (#/musica) sin recarga; el reproductor sigue sonando
    └── main.js                  # Shell persistente (navbar, footer, player, modales) + arranque del router
```

### ➕ Agregar una nueva funcionalidad / página

1. Crea el componente con `renderX()` (retorna HTML) y opcionalmente `initX()` (conecta eventos; puede retornar una función de limpieza que se ejecuta al salir de la página).
2. Agrega una entrada en `featureRoutes` de `src/routes.js` (`path`, `title`, `menuLabel`, `icon`, `description`, `group`).
3. Listo: navbar, menú móvil, footer y la tarjeta en la página de inicio se generan solos.

> [!NOTE]
> Las anclas antiguas de la versión one-page (`#musica`, `#tienda`, …) redirigen automáticamente a la nueva ruta mediante `legacyHash`.

---

## 🛠️ 6. Comandos y Flujo de Trabajo

- **Iniciar servidor de desarrollo:**
  ```powershell
  npm run dev
  # o npx vite --port 3000
  ```
- **Compilar para producción:**
  ```powershell
  npm run build
  ```
- **Previsualizar bundle de producción:**
  ```powershell
  npm run preview
  ```

---

## 🌐 7. Despliegue en Producción & Dominio (cumbiareverb.com)

- **Alojamiento Recomendado:** Netlify o Vercel conectado al repositorio de GitHub (`rubenoliveros/cumbia-reverb-web`).
- **Comando de Build:** `npm run build`
- **Publish Directory:** `dist`
- **Configuración DNS en GoDaddy:**
  - Registro `A` (`@`) -> IP del proveedor (Netlify: `75.2.60.5`, Vercel: `76.76.21.21`).
  - Registro `CNAME` (`www`) -> Subdominio asignado (ej. `cumbia-reverb.netlify.app`).
  - SSL/HTTPS gestionado y renovado automáticamente.
