// src/components/TrackStrip.js
// Franja con los nombres de los temas del disco en dos filas que se mueven en
// sentidos opuestos y aceleran con la velocidad del scroll.
// Adaptado de "Scroll Velocity Text" (cnippet-dev, 21st.dev) a JS vanilla.


const BASE_VELOCITY = 4;   // % del ancho de una fila por segundo
const MAX_BOOST = 5;       // multiplicador extra máximo por scroll
const BOOST_AT = 1000;     // px/s de scroll que dan el boost máximo

export function renderTrackStrip(album) {
  const half = Math.ceil(album.tracks.length / 2);
  const rows = [album.tracks.slice(0, half), album.tracks.slice(half)];

  return `
    <section class="track-strip" aria-label="Temas del disco ${album.title}">
      ${rows.map((tracks, i) => `
        <div class="track-strip-row" data-direction="${i % 2 ? -1 : 1}">
          <div class="track-strip-track">
            <ul class="track-strip-block">
              ${tracks.map(t => `<li class="track-strip-item">${t.title}</li>`).join('')}
            </ul>
          </div>
        </div>
      `).join('')}
    </section>
  `;
}

const wrap = (max, v) => ((v % max) + max) % max;

export function initTrackStrip() {
  const strip = document.querySelector('.track-strip');
  if (!strip) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const rowState = [...strip.querySelectorAll('.track-strip-row')].map(row => {
    const direction = Number(row.dataset.direction);
    return {
      row,
      track: row.querySelector('.track-strip-track'),
      block: row.querySelector('.track-strip-block'),
      direction,
      current: direction,
      offset: 0,
      width: 0
    };
  });

  let frameId = null;
  let inView = true;
  let lastTime = 0;
  let lastScrollY = window.scrollY;
  let smoothVelocity = 0;

  // Clona el bloque las veces necesarias para cubrir el ancho sin huecos.
  function layout() {
    for (const r of rowState) {
      r.track.querySelectorAll('[data-clone]').forEach(n => n.remove());
      r.width = r.block.getBoundingClientRect().width;
      if (!r.width || reducedMotion.matches) continue;
      const copies = Math.max(3, Math.ceil(r.row.offsetWidth / r.width) + 2);
      for (let i = 1; i < copies; i++) {
        const clone = r.block.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        clone.dataset.clone = '';
        r.track.append(clone);
      }
    }
  }

  function tick(time) {
    frameId = requestAnimationFrame(tick);
    const dt = Math.min((time - lastTime) / 1000 || 0, 0.1);
    lastTime = time;

    const scrollY = window.scrollY;
    const velocity = dt > 0 ? (scrollY - lastScrollY) / dt : 0;
    lastScrollY = scrollY;
    smoothVelocity += (velocity - smoothVelocity) * (1 - Math.exp(-dt * 12));

    if (!inView) return;

    const boost = Math.min(MAX_BOOST, (Math.abs(smoothVelocity) / BOOST_AT) * MAX_BOOST);
    const scrollSign = smoothVelocity < 0 ? -1 : 1;

    for (const r of rowState) {
      if (!r.width) continue;
      // Al hacer scroll hacia arriba, las filas invierten su sentido.
      if (boost > 0.1) r.current = r.direction * scrollSign;
      const pxPerSecond = (r.width * BASE_VELOCITY) / 100;
      r.offset += r.current * pxPerSecond * (1 + boost) * dt;
      r.track.style.transform = `translate3d(${-wrap(r.width, r.offset)}px, 0, 0)`;
    }
  }

  function start() {
    strip.classList.remove('is-static');
    layout();
    if (frameId === null) {
      lastTime = performance.now();
      lastScrollY = window.scrollY;
      frameId = requestAnimationFrame(tick);
    }
  }

  function stop() {
    if (frameId !== null) cancelAnimationFrame(frameId);
    frameId = null;
    strip.classList.add('is-static');
    rowState.forEach(r => { r.track.style.transform = ''; });
    layout();
  }

  const applyMotionPreference = () => (reducedMotion.matches ? stop() : start());

  const resizeObserver = new ResizeObserver(layout);
  resizeObserver.observe(strip);
  rowState.forEach(r => resizeObserver.observe(r.block));

  const intersectionObserver = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
  });
  intersectionObserver.observe(strip);

  reducedMotion.addEventListener('change', applyMotionPreference);
  applyMotionPreference();

  return () => {
    if (frameId !== null) cancelAnimationFrame(frameId);
    frameId = null;
    resizeObserver.disconnect();
    intersectionObserver.disconnect();
    reducedMotion.removeEventListener('change', applyMotionPreference);
  };
}
