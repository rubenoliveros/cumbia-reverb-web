// src/data/riderData.js
// Rider técnico, Stage Plot y descargas del EPK (página oculta hasta tener el rider real).
// PENDIENTE: input list, posiciones en tarima y monitoreo reales, definidos por la banda.

export const riderData = {
  generalInfo: {
    bandName: "Cumbia Reverb",
    lineupCount: "4 músicos",
    showDuration: null,
    contacts: {
      production: "booking@cumbiareverb.com",
      soundEngineer: null
    }
  },
  stagePositions: [],
  inputList: [],
  monitoring: {
    system: null,
    mixes: []
  },
  pressKitDownloads: []
};
