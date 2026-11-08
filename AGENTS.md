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
3. **Matias** (Argentina 🇦🇷) — Bajo.
4. **Ruben** (Venezuela 🇻🇪) — Batería

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
- **TikTok:** `@reverb.cumbia` (`https://www.tiktok.com/@reverb.cumbia`)
- **Contacto Booking:** `booking@cumbiareverb.com` · Persona de contacto y WhatsApp por definir (la página de contacto muestra "Por definir").

---

## 🎨 4. Sistema de Diseño Visual (Design Tokens)

> [!IMPORTANT]
> **Colores:** lee siempre [`PALETA.md`](PALETA.md) antes de tocar colores. Es la fuente oficial de la paleta (portada de *Sancocho Pa' Ratas* + logos), sus usos y reglas de contraste. Usa solo los tokens de `src/css/variables.css` (`--color-sancocho`, `--color-rayo`, `--color-cromo`, `--color-hueso`, `rgba(var(--rgb-…), α)`); no escribas hex sueltos. Si cambias la paleta, actualiza `PALETA.md` y `variables.css` juntos.

- **Filosofía:** Rock de escenario ("Alto Voltaje"): negro escenario, el rojo de la portada como identidad, amarillo eléctrico para la interacción y cromo como detalle, y Glassmorphism (`backdrop-filter: blur(...)`).
- **Tipografías:**
  - Títulos y Acentos: `'Syne', sans-serif` (Google Fonts, weights: 700, 800, 900)
  - Textos y UI: `'Plus Jakarta Sans', sans-serif` (Google Fonts, weights: 400, 500, 600, 700, 800)

> [!IMPORTANT]
> **Regla de Estilos:** Se utiliza Vanilla CSS modular con variables en `src/css/variables.css`. No usar TailwindCSS a menos que se solicite explícitamente.

> [!NOTE]
> **21st.dev:** se usa solo como catálogo de inspiración (vía su MCP o el "copy prompt"). Sus componentes vienen en React + Tailwind: se reescriben como `renderX()`/`initX()` en JS vanilla con CSS sobre los tokens de `PALETA.md`, respetando `prefers-reduced-motion`. No se instalan React, Tailwind ni shadcn.

---

## 📂 5. Estructura del Código

Vite + JS vanilla, sin framework. Páginas en `src/pages/`, componentes `renderX()`/`initX()` en `src/components/`, datos de la banda en `src/data/`, registro de rutas en `src/routes.js` (fuente única de navegación) y shell persistente en `src/main.js` (el reproductor sigue sonando al navegar). `brand/` guarda los logos originales y no se publica; un MP3 real en `public/audio/` activa el reproductor.

### ➕ Agregar una nueva funcionalidad / página

1. Crea el componente con `renderX()` (retorna HTML) y opcionalmente `initX()` (conecta eventos; puede retornar una función de limpieza que se ejecuta al salir de la página).
2. Agrega una entrada en `featureRoutes` de `src/routes.js` (`path`, `title`, `menuLabel`, `icon`, `description`, `group`).
3. Listo: navbar, menú móvil, footer y la tarjeta en la página de inicio se generan solos.

Menú actual: **Banda · Discos · Gira · Contacto**. Una ruta con `children` se muestra como desplegable (Discos).

### 💿 Agregar un disco

Agrega un objeto al arreglo `albums` de `src/data/musicData.js` (mismos campos que *Sancocho Pa' Ratas*). Su página `#/discos/<slug>`, su entrada en el desplegable "Discos" y su tarjeta en `#/discos` se generan solas. Los discos se ordenan solos por `releaseDate` (más nuevo primero); el último disco publicado es el que se promociona en la Home y el hero. Un disco anunciado que aún no sale lleva `upcoming: true` (hoy: el nuevo EP, placeholder sin título, fecha ni temas). Con `palette` la página del disco usa los colores de su portada (PALETA.md §6).

> [!NOTE]
> Las anclas antiguas de la versión one-page (`#musica`, `#tienda`, …) redirigen automáticamente a la nueva ruta mediante `legacyHash`.

---

## 🌐 6. Despliegue en Producción & Dominio (cumbiareverb.com)

- **Alojamiento Recomendado:** Netlify o Vercel conectado al repositorio de GitHub (`rubenoliveros/cumbia-reverb-web`).
- **Comando de Build:** `npm run build`
- **Publish Directory:** `dist`
- **Configuración DNS en GoDaddy:**
  - Registro `A` (`@`) -> IP del proveedor (Netlify: `75.2.60.5`, Vercel: `76.76.21.21`).
  - Registro `CNAME` (`www`) -> Subdominio asignado (ej. `cumbia-reverb.netlify.app`).
  - SSL/HTTPS gestionado y renovado automáticamente.
