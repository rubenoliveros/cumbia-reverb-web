# 🎨 PALETA.md — Paleta oficial de Cumbia Reverb

Fuente única de los colores del sitio. **Todo agente o desarrollador debe leer este archivo antes de tocar colores.**

- **Origen:** la portada del disco *Sancocho Pa' Ratas* (`public/images/covers/official_cover.jpg`) y los logos (`brand/`). Los colores se midieron sobre las imágenes: k-means de 10 grupos en la portada y mediana de los píxeles de cada color en los logos.
- **Idea:** el fondo y los rojos vienen de la portada, que es cálida y de fuego. El cian viene del desfase 3D del logo, que es frío y digital. El rojo es el puente entre los dos.
- **Implementación:** los tokens viven en `src/css/variables.css`. Si cambias un color aquí, cámbialo allá (y viceversa) en el mismo commit.

---

## 1. Colores medidos

### Portada
| Muestra | Hex | Presencia | Dónde aparece |
|---|---|---|---|
| Rojo Sancocho (original) | `#d54440` | 19.7 % | Rojo principal del fondo y la lengua |
| Ladrillo | `#992c27` | 13.4 % | Sombras medias del rojo |
| Carmesí | `#c42121` | 12.8 % | Rojo saturado de los trazos |
| Hueso | `#f6ebd8` | 11.6 % | Calavera, letras, dientes |
| Rojo Sangre | `#8f1112` | 9.4 % | Rojo profundo |
| Granate | `#5e1110` | 8.2 % | Sombras oscuras |
| Oro Llama | `#ebac11` | 7.4 % | Llamas y tabla de surf |
| Vino Negro | `#490909` | 7.2 % | Las sombras más oscuras |
| Piel | `#c89a88` | 6.4 % | Medios tonos rosados |
| Óxido | `#6f1e1d` | 3.8 % | Transición entre rojos oscuros |

### Logos
| Muestra | Hex | Dónde aparece |
|---|---|---|
| Cian Reverb | `#00e5fd` | Desfase 3D izquierdo (logo completo; en el de letras se ve como `#1cd4ea`) |
| Rojo Logo | `#ff0000` | Desfase 3D derecho |
| Blanco | `#ffffff` | Letras y personaje |

## 2. Roles en el sitio (`src/css/variables.css`)

| Token | Hex | Rol | Ejemplos |
|---|---|---|---|
| `--color-sancocho` | `#e63a33` | **Acento principal.** Es el rojo de la portada llevado hacia el rojo del logo. | Etiquetas de sección, roles de los integrantes, CTAs |
| `--color-cian` | `#00e5fd` | **Interacción.** | Hover, foco, menú activo, enlaces del pie, reproductor |
| `--color-llama` | `#ebac11` | **Secundario puntual.** | Fechas de shows, badges (`.badge-llama`) |
| `--color-hueso` | `#f6ebd8` | Texto principal y texto sobre botones rojos | — |
| `--color-carmesi` | `#c42121` | Inicio del degradado de botones | — |
| `--color-sangre` | `#8f1112` | Fin de degradados | — |

Para transparencias usa los canales RGB: `rgba(var(--rgb-cian), 0.12)`, `rgba(var(--rgb-sancocho), 0.3)`, `rgba(var(--rgb-llama), 0.12)`, `rgba(var(--rgb-hueso), 0.08)`, `rgba(var(--rgb-bg), 0.85)`.

### Fondos (derivados de Vino Negro, casi negros con tinte rojo)
| Token | Hex |
|---|---|
| `--color-bg-primary` | `#0f0605` |
| `--color-bg-secondary` | `#160908` |
| `--color-bg-surface` | `#1f0d0b` |
| `--color-bg-surface-elevated` | `#2b1210` |

### Texto
| Token | Hex | Contraste sobre `#0f0605` |
|---|---|---|
| `--color-text-main` | `#f6ebd8` (Hueso) | 17:1 |
| `--color-text-subtle` | `#e3d1bd` | 13.5:1 |
| `--color-text-muted` | `#c89a88` (Piel) | 8:1 |
| `--color-text-dim` | `#8a6a60` | 4.1:1. Solo texto secundario o grande |

### Degradados y efectos
| Token / clase | Definición | Uso |
|---|---|---|
| `--gradient-reverb` | Carmesí → Rojo Sangre | Botón principal y botones activos. Texto Hueso: 5:1 o más. |
| `--gradient-fuego` | Rojo Sancocho → Rojo Sangre | Botón `.btn-fuego` (texto Hueso, en negrita) |
| `.text-reverb` | Texto Hueso con sombra cian a la izquierda y roja a la derecha | Palabras destacadas en títulos ("Cumbia Reverb"). Imita el desfase del logo. |
| `.text-gradient-fuego` | Hueso → Rojo Sancocho | Títulos alternos (Gira) |

## 3. Colores funcionales (no salen de la portada ni de los logos)
Se permiten solo para estos usos:
- **Estado "confirmado":** `--color-success` `#6bbf59`.
- **Marcas de terceros:** Spotify `#1db954`, YouTube `#ff0000`, WhatsApp `#25d366`. Van solo en sus botones e íconos.

## 4. Logos
Los logos (`public/images/logo/`, originales en `brand/`) se usan **con sus colores originales**: blanco con desfase cian/rojo. No se recolorean ni se les aplican degradados o filtros de color, y van siempre sobre fondo oscuro.

## 5. Reglas
1. **No escribir hex ni rgba sueltos** en CSS o JS: usa los tokens. Excepciones: colores de marca de terceros, negro puro `#000` detrás de iframes de video y sombras negras.
2. Texto sobre fondos oscuros: Hueso, `--color-text-subtle` o Piel. Nunca Rojo Sangre, Granate ni Vino Negro como texto.
3. Contrastes medidos:
   - Rojo Sancocho como texto sobre el fondo: 4.8:1. Cumple AA.
   - Cian sobre el fondo: 13:1.
   - Oro Llama sobre el fondo: 10:1.
   - Hueso sobre Carmesí: 5:1.
   - Hueso sobre Rojo Sangre: 7.9:1.
   - Hueso sobre Rojo Sancocho: 3.5:1. Solo para texto grande; en botones usa `--gradient-reverb`.
4. **No inviertas los papeles:** el cian es interacción, el rojo es identidad y llamada a la acción, y el oro es un detalle puntual. Si un elemento nuevo no encaja en ninguno, usa Hueso.
5. Si la banda publica una nueva portada o un nuevo logo, se repite la medición y se actualiza este archivo antes que el CSS.
