// src/components/MerchSection.js
// Tienda de merchandising oficial con generador de pedidos directos por WhatsApp

import { merchData } from '../data/merchData.js';
import { bandData } from '../data/bandData.js';

export function renderMerchSection() {
  return `
    <section class="section" id="tienda">
      <div class="ambient-glow ambient-magenta"></div>

      <div class="container" style="position: relative; z-index: 2;">
        <div class="section-header">
          <span class="section-tag">TIENDA OFICIAL</span>
          <h2 class="section-title">
            <span>Merch &</span>
            <span class="text-reverb">Coleccionables</span>
          </h2>
          <p class="section-subtitle">
            Lleva la frecuencia de Cumbia Reverb contigo. ${merchData.currencyNotice}
          </p>
        </div>

        <div class="merch-grid">
          ${merchData.products.map(prod => `
            <article class="merch-card" data-product-id="${prod.id}">
              <div class="merch-img-wrap">
                <img src="${prod.image}" alt="${prod.name}" class="merch-img" loading="lazy" />
                <span class="badge badge-sancocho merch-badge">${prod.badge}</span>
              </div>

              <div class="merch-body">
                <span class="badge badge-cromo" style="margin-bottom: 8px;">${prod.tag}</span>
                <h3 class="merch-title">${prod.name}</h3>

                <div class="merch-prices">
                  <span class="price-main">$${prod.priceUSD} USD</span>
                  <span class="price-secondary">(${prod.priceCOP})</span>
                </div>

                <p style="font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.55; margin-bottom: 16px;">
                  ${prod.description}
                </p>

                <div style="margin-top: auto;">
                  <div class="merch-sizes-label">Seleccionar Opción / Talla:</div>
                  <div class="merch-sizes-selector" data-selector="${prod.id}">
                    ${prod.sizes.map((s, idx) => `
                      <button class="size-pill ${idx === 0 ? 'active' : ''}" data-size="${s}">
                        ${s}
                      </button>
                    `).join('')}
                  </div>

                  <button class="btn btn-whatsapp" style="width: 100%;" data-buy-whatsapp="${prod.id}">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.07-.941.07-1.579-.001-3.056-.902-3.856-2.285-.027-.047-.052-.095-.076-.144-.457-.919-.472-1.928-.041-2.774.135-.266.39-.427.674-.427.102 0 .204.021.299.066.257.121.573.743.64 1.002.045.176.023.364-.061.517-.058.106-.134.195-.213.289-.092.109-.19.224-.135.39.117.352.535 1.01 1.085 1.488.584.507 1.139.73 1.472.842.148.05.297.027.4-.083.129-.138.314-.407.452-.619.123-.189.289-.226.471-.157.17.065 1.077.507 1.263.599.186.092.311.138.356.216.045.078.045.452-.099.858z"/>
                    </svg>
                    <span>Pedir por WhatsApp</span>
                  </button>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export function initMerchSection() {
  // Handle size pill selection
  document.querySelectorAll('.merch-sizes-selector').forEach(selector => {
    const pills = selector.querySelectorAll('.size-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
      });
    });
  });

  // Handle WhatsApp purchase trigger
  document.querySelectorAll('[data-buy-whatsapp]').forEach(btn => {
    btn.addEventListener('click', () => {
      const prodId = btn.getAttribute('data-buy-whatsapp');
      const prod = merchData.products.find(p => p.id === prodId);
      const card = btn.closest('.merch-card');
      const activeSize = card.querySelector('.size-pill.active')?.getAttribute('data-size') || 'Estándar';

      const message = `¡Hola Cumbia Reverb! 👋 Deseo pedir el siguiente producto de la tienda oficial:\n\n• Producto: ${prod.name}\n• Opción/Talla: ${activeSize}\n• Precio: $${prod.priceUSD} USD (${prod.priceCOP})\n\n¿Me indican disponibilidad y costos de envío a mi ciudad? ¡Gracias!`;

      const encoded = encodeURIComponent(message);
      const url = `https://wa.me/${bandData.social.whatsappNumber}?text=${encoded}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });
}
