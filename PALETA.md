# 🎨 PALETA.md — Paleta oficial de Cumbia Reverb: "Alto Voltaje"

Fuente única de los colores del sitio. **Todo agente o desarrollador debe leer este archivo antes de tocar colores.**

- **Decisión (2026-11-07):** la banda eligió "Alto Voltaje" entre 4 opciones (Sancocho, Alto Voltaje, Funk Sudaca y Cartel de Garaje). Buscan la energía del rock de escenario, del nivel de ruido de AC/DC o Red Hot Chili Peppers, sin copiar a nadie.
- **Idea:** negro de escenario, rojo de amplificador (el mismo rojo de la portada de *Sancocho Pa' Ratas*), amarillo eléctrico para todo lo que se toca y cromo para los detalles.
- **Implementación:** los tokens viven en `src/css/variables.css`. Si cambias un color aquí, cámbialo allá (y viceversa) en el mismo commit.

---

## 1. Colores medidos (referencia: portada y logos)

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
| `--color-sancocho` | `#f2332c` | **Acento principal: rojo amplificador.** Viene del rojo de la portada. | Etiquetas de sección, roles de los integrantes, CTAs |
| `--color-rayo` | `#ffd000` | **Interacción: amarillo eléctrico.** | Hover, foco, menú activo, enlaces del pie, reproductor |
| `--color-cromo` | `#c9ccd1` | **Secundario puntual: cromo.** | Fechas de shows, badges (`.badge-cromo`) |
| `--color-hueso` | `#f4f1ea` | Texto principal y texto sobre botones rojos | — |
| `--color-carmesi` | `#c4161c` | Inicio del degradado de botones | — |
| `--color-sangre` | `#7a0f12` | Fin de degradados | — |

Para transparencias usa los canales RGB: `rgba(var(--rgb-rayo), 0.12)`, `rgba(var(--rgb-sancocho), 0.3)`, `rgba(var(--rgb-cromo), 0.12)`, `rgba(var(--rgb-hueso), 0.08)`, `rgba(var(--rgb-bg), 0.85)`.

### Fondos (negro escenario, neutro con un toque frío)
| Token | Hex |
|---|---|
| `--color-bg-primary` | `#0b0b0c` |
| `--color-bg-secondary` | `#121214` |
| `--color-bg-surface` | `#1a1a1d` |
| `--color-bg-surface-elevated` | `#242428` |

### Texto
| Token | Hex | Contraste sobre `#0b0b0c` |
|---|---|---|
| `--color-text-main` | `#f4f1ea` (Hueso) | 17.4:1 |
| `--color-text-subtle` | `#dcd6cc` | 13.6:1 |
| `--color-text-muted` | `#aaa49b` | 8:1 |
| `--color-text-dim` | `#7c776f` | 4.4:1. Solo texto secundario o grande |

### Degradados y efectos
| Token / clase | Definición | Uso |
|---|---|---|
| `--gradient-reverb` | Carmesí → Rojo Sangre | Botón principal y botones activos. Texto Hueso: 5.4:1 o más. |
| `--gradient-fuego` | Rojo Sancocho → Rojo Sangre | Botón `.btn-fuego` (texto Hueso, en negrita) |
| `.text-reverb` | Texto Hueso con sombra amarilla a la izquierda y roja a la derecha | Palabras destacadas en títulos. Eco del desfase 3D del logo. |
| `.text-gradient-fuego` | Hueso → Rojo Sancocho | Títulos alternos (Gira) |

## 3. Colores funcionales (no son de la paleta)
Se permiten solo para estos usos:
- **Estado "confirmado":** `--color-success` `#6bbf59`.
- **Marcas de terceros:** Spotify `#1db954`, YouTube `#ff0000`, WhatsApp `#25d366`. Van solo en sus botones e íconos.
- **Banderas** (`src/components/flags.js`): colores oficiales de Colombia, Argentina y Venezuela.

## 4. Logos
Los logos (`public/images/logo/`, originales en `brand/`) se usan **con sus colores originales**: blanco con desfase cian/rojo. No se recolorean ni se les aplican degradados o filtros de color, y van siempre sobre fondo oscuro. El cian del logo es el único cian del sitio; la interfaz no lo usa.

## 5. Reglas
1. **No escribir hex ni rgba sueltos** en CSS o JS: usa los tokens. Excepciones: las de la sección 3, negro puro `#000` detrás de iframes de video y sombras negras.
2. Texto sobre fondos oscuros: Hueso, `--color-text-subtle` o `--color-text-muted`. Nunca Rojo Sangre ni Carmesí como texto.
3. Contrastes medidos sobre `#0b0b0c`:
   - Rojo Sancocho como texto: 5:1. Cumple AA.
   - Rayo: 13.4:1. Cromo: 12.2:1.
   - Hueso sobre Carmesí: 5.4:1. Hueso sobre Rojo Sangre: 9.8:1.
   - Hueso sobre Rojo Sancocho: 3.5:1. Solo para texto grande; en botones usa `--gradient-reverb`.
   - Sobre fondo Rayo (amarillo) el texto va en negro de fondo (`--color-bg-primary`): 13.4:1. Nunca Hueso sobre amarillo.
4. **No inviertas los papeles:** el amarillo es interacción, el rojo es identidad y llamada a la acción, y el cromo es un detalle puntual. Si un elemento nuevo no encaja en ninguno, usa Hueso.
5. Si la banda publica una nueva portada o un nuevo logo, revisa que el rojo principal siga conviviendo con ella antes de tocar el CSS.
