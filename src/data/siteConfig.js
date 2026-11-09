// src/data/siteConfig.js
// Interruptores de la versión de prueba (preview en *.workers.dev).
// El día del lanzamiento en cumbiareverb.com: preview.enabled = false
// y borrar la línea "X-Robots-Tag" de public/_headers.

export const preview = {
  enabled: true,
  // Se muestra en la etiqueta flotante; cámbialo cada semana para que el feedback diga a qué versión se refiere.
  label: 'Semana 1',
  // Enlace de invitación del grupo de WhatsApp (https://chat.whatsapp.com/...). Mientras sea null, no hay botón.
  feedbackUrl: null
};
