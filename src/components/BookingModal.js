// src/components/BookingModal.js
// Modal de contratación y cotización de shows para promotores y eventos privados

import { bandData } from '../data/bandData.js';

export function renderBookingModal() {
  return `
    <div class="modal-overlay" id="bookingModal">
      <div class="modal-window">
        <button class="modal-close-btn" id="closeBookingModalBtn" aria-label="Cerrar">&times;</button>

        <div style="margin-bottom: 24px;">
          <span class="badge badge-llama" style="margin-bottom: 8px;">BOOKING & CONTRATACIONES</span>
          <h3 style="font-size: 1.8rem; font-weight: 900; margin-bottom: 6px;">Cotizar Concierto</h3>
          <p style="font-size: 0.92rem; color: var(--color-text-muted);">
            Lleva a Cumbia Reverb a tu festival, sala de conciertos o evento. Completa los datos para enviar tu solicitud directamente.
          </p>
        </div>

        <form id="bookingForm">
          <div class="form-group">
            <label class="form-label" for="bookingEventName">Nombre del Evento o Festival *</label>
            <input type="text" id="bookingEventName" class="form-control" placeholder="Ej: Festival Selva Viva 2025" required />
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div class="form-group">
              <label class="form-label" for="bookingCity">Ciudad y País *</label>
              <input type="text" id="bookingCity" class="form-control" placeholder="Ej: Bogotá, Colombia" required />
            </div>

            <div class="form-group">
              <label class="form-label" for="bookingDate">Fecha Estimada *</label>
              <input type="date" id="bookingDate" class="form-control" required />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="bookingType">Tipo de Evento *</label>
            <select id="bookingType" class="form-control">
              <option value="Festival de Música">Festival al Aire Libre / Masivo</option>
              <option value="Sala de Conciertos / Club">Sala de Conciertos / Club Nocturno</option>
              <option value="Evento Cultural / Institucional">Evento Cultural o Universitario</option>
              <option value="Evento de Empresa">Evento de Empresa</option>
              <option value="Otro Formato">Otro Formato</option>
            </select>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div class="form-group">
              <label class="form-label" for="bookingContactName">Tu Nombre o Productora *</label>
              <input type="text" id="bookingContactName" class="form-control" placeholder="Ej: Juan Producciones" required />
            </div>

            <div class="form-group">
              <label class="form-label" for="bookingPhone">Teléfono / WhatsApp *</label>
              <input type="tel" id="bookingPhone" class="form-control" placeholder="+57 300 000 0000" required />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="bookingMessage">Detalles Adicionales / Requerimientos</label>
            <textarea id="bookingMessage" class="form-control" rows="3" placeholder="Aforo estimado, rider disponible, horarios..."></textarea>
          </div>

          <div style="display: flex; gap: 14px; flex-wrap: wrap; margin-top: 10px;">
            ${bandData.social.whatsappNumber ? `
            <button type="button" class="btn btn-whatsapp" id="sendBookingWhatsappBtn" style="flex: 1;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.07-.941.07-1.579-.001-3.056-.902-3.856-2.285-.027-.047-.052-.095-.076-.144-.457-.919-.472-1.928-.041-2.774.135-.266.39-.427.674-.427.102 0 .204.021.299.066.257.121.573.743.64 1.002.045.176.023.364-.061.517-.058.106-.134.195-.213.289-.092.109-.19.224-.135.39.117.352.535 1.01 1.085 1.488.584.507 1.139.73 1.472.842.148.05.297.027.4-.083.129-.138.314-.407.452-.619.123-.189.289-.226.471-.157.17.065 1.077.507 1.263.599.186.092.311.138.356.216.045.078.045.452-.099.858z"/>
              </svg>
              <span>Enviar por WhatsApp</span>
            </button>` : ''}

            <button type="button" class="btn btn-secondary" id="sendBookingEmailBtn" style="flex: 1;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>Enviar por Correo</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

export function initBookingModal() {
  const modal = document.getElementById('bookingModal');
  const closeBtn = document.getElementById('closeBookingModalBtn');
  const sendWhatsappBtn = document.getElementById('sendBookingWhatsappBtn');
  const sendEmailBtn = document.getElementById('sendBookingEmailBtn');

  const closeModal = () => modal?.classList.remove('open');

  closeBtn?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  function getFormData() {
    const eventName = document.getElementById('bookingEventName')?.value || 'Evento';
    const city = document.getElementById('bookingCity')?.value || 'Por definir';
    const date = document.getElementById('bookingDate')?.value || 'Por definir';
    const type = document.getElementById('bookingType')?.value || 'General';
    const contact = document.getElementById('bookingContactName')?.value || 'Promotor';
    const phone = document.getElementById('bookingPhone')?.value || '';
    const message = document.getElementById('bookingMessage')?.value || 'Sin notas adicionales';

    return { eventName, city, date, type, contact, phone, message };
  }

  sendWhatsappBtn?.addEventListener('click', () => {
    const data = getFormData();
    const text = `¡Hola Cumbia Reverb! 🎸🌴 Deseo cotizar una fecha con la banda:\n\n• Evento: ${data.eventName}\n• Tipo: ${data.type}\n• Ciudad/País: ${data.city}\n• Fecha tentativa: ${data.date}\n• Contacto: ${data.contact} (${data.phone})\n• Notas: ${data.message}\n\nQuedo atento a disponibilidad y propuesta económica. ¡Gracias!`;

    const url = `https://wa.me/${bandData.social.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    closeModal();
  });

  sendEmailBtn?.addEventListener('click', () => {
    const data = getFormData();
    const subject = encodeURIComponent(`Solicitud de Concierto: ${data.eventName} (${data.city})`);
    const body = encodeURIComponent(`Estimado equipo de Cumbia Reverb,\n\nMe pongo en contacto para solicitar disponibilidad y cotización para el siguiente evento:\n\nEvento: ${data.eventName}\nTipo: ${data.type}\nCiudad/País: ${data.city}\nFecha: ${data.date}\nContacto: ${data.contact}\nTeléfono: ${data.phone}\n\nDetalles adicionales:\n${data.message}\n\nSaludos cordiales,\n${data.contact}`);

    window.location.href = `mailto:${bandData.social.email}?subject=${subject}&body=${body}`;
    closeModal();
  });
}
