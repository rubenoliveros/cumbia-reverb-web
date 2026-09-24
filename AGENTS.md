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

1. **Celta** (Colombia 🇨🇴) — *Voz Principal & Energía Escénica*
   - Micrófono Shure SM58 / Efecto Roland Space Echo vintage.
2. **Miguel** (Colombia 🇨🇴) — *Guitarra Surf & Reverb*
   - Fender Jaguar '65 / Fender Twin Reverb '68 / Tanque Spring Reverb a bulbos.
3. **Javier** (Colombia 🇨🇴) — *Teclados & Sintetizadores Tropicales*
   - Nord Electro 6D / Korg Minilogue XD / Leslie Simulator.
4. **Matias** (Argentina 🇦🇷) — *Bajo Eléctrico & Groove Pulmón*
   - Fender Precision Bass / Ampeg SVT-CL / Darkglass Vintage.
5. **Ruben** (Venezuela 🇻🇪) — *Batería, Timbales & Percusión*
   - Batería Ludwig Classic Maple / Timbales LP Tito Puente / Güiro artesanal metálico.

---

## 🔗 3. Canales Digitales & IDs Oficiales

- **Spotify Artist ID:** `2QDEorhtmjmhWrFEItrp4i`
  - URL Perfil: `https://open.spotify.com/artist/2QDEorhtmjmhWrFEItrp4i`
  - Canciones en catálogo:
    1. *Cumbia Reverb* (Single / Himno)
    2. *Surfeando en la Nieve*
    3. *Fuego Rojo*
    4. *Si Era Tan Listo*
- **YouTube Channel ID:** `UCJDQ5L37qhZuBiu1fbeNc_Q`
  - URL Canal: `https://www.youtube.com/channel/UCJDQ5L37qhZuBiu1fbeNc_Q`
  - Enlace Suscripción Rápida: `https://www.youtube.com/channel/UCJDQ5L37qhZuBiu1fbeNc_Q?sub_confirmation=1`
- **Instagram:** `@cumbia_reverb` (`https://www.instagram.com/cumbia_reverb/`)
- **Contacto Booking:** `booking@cumbiareverb.com`

---

## 🎨 4. Sistema de Diseño Visual (Design Tokens)

- **Filosofía:** Psicodelia Tropical Neón sobre Vinilo Profundo con Glassmorphism (`backdrop-filter: blur(...)`).
- **Paleta de Colores:**
  - Fondo primario: `--color-bg-primary: #07090e`
  - Superficie midnight: `--color-bg-surface: #101522`
  - Cian Neón (Onda Reverb): `--color-neon-cyan: #00f0ff`
  - Magenta Neón Eléctrico: `--color-neon-magenta: #ff2a85`
  - Oro Solar Tropical: `--color-solar-gold: #ffb703`
  - Verde Selva: `--color-tropical-green: #06d6a0`
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
├── .gitignore                   # Exclusión de node_modules, dist, logs
├── public/
│   ├── favicon.svg              # Isotipo vectorial de Cumbia Reverb
│   ├── audio/
│   │   └── cumbia_reverb_preview.wav  # Pista de audio sintetizada real
│   ├── images/
│   │   ├── hero/cumbia_hero_banner.jpg
│   │   ├── covers/official_avatar.jpg, official_cover.jpg
│   │   ├── members/celta.jpg, javier.jpg, matias.jpg, miguel.jpg, ruben.jpg
│   │   └── merch/tshirt.jpg, vinyl.jpg
│   └── docs/
└── src/
    ├── css/
    │   ├── reset.css            # Normalización y custom scrollbars
    │   ├── variables.css        # Sistema de tokens y colores
    │   ├── components.css       # Tarjetas, botones luminosos, player flotante, modales
    │   └── main.css             # Layouts responsivos y breakpoints
    ├── data/
    │   ├── bandData.js          # Datos y biografía de la banda e integrantes
    │   ├── musicData.js         # Discografía, letras de canciones y créditos
    │   ├── videosData.js        # Hub de YouTube, clips y shorts
    │   ├── tourData.js          # Fechas de gira y estado de boletos
    │   ├── merchData.js         # Productos de merchandising y FAQ
    │   └── riderData.js         # Input list (14 CH), Stage Plot y monitoreo
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
    └── main.js                  # Ensamblador principal y listener DOMContentLoaded
```

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
