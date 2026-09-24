// src/data/riderData.js
// Rider técnico, Stage Plot y especificaciones profesionales para promotores y festivales

export const riderData = {
  generalInfo: {
    bandName: "Cumbia Reverb",
    lineupCount: "5 Músicos en Escenario + 1 Ingeniero de Sonido (FOH)",
    showDuration: "60 a 90 minutos de repertorio continuo",
    contacts: {
      production: "produccion@cumbiareverb.com",
      soundEngineer: "sonido@cumbiareverb.com"
    }
  },
  stagePositions: [
    { position: "Centro Atrás", musician: "Ruben", role: "Batería & Timbales", requirements: "Tarima 2x2m, alfombra antideslizante, toma corriente 110V/220V" },
    { position: "Izquierda Atrás", musician: "Javier", role: "Teclados & Sintes", requirements: "Soporte doble para teclado, 2 cajas directas (DI) activas estéreo, toma 110V/220V" },
    { position: "Derecha Atrás", musician: "Matias", role: "Bajo Eléctrico", requirements: "Caja directa activa balanceada, amplificador de bajo tipo Ampeg SVT o similar" },
    { position: "Derecha Adelante", musician: "Miguel", role: "Guitarra Surf Reverb", requirements: "Amplificador Fender Twin Reverb / Deluxe Reverb a bulbos con micrófono Shure SM57" },
    { position: "Centro Adelante", musician: "Celta", role: "Voz Principal", requirements: "Pedestal recto pesado, micrófono inalámbrico o cable Shure Beta58/SM58" }
  ],
  inputList: [
    { ch: 1, instrument: "Bombo (Kick)", mic: "Shure Beta 52A / AKG D112", stand: "Bajo corto", phantom: "No" },
    { ch: 2, instrument: "Redoblante (Snare Top)", mic: "Shure SM57", stand: "Corto con pinza", phantom: "No" },
    { ch: 3, instrument: "Hi-Hat", mic: "Shure SM81 / AKG C451", stand: "Jirafa", phantom: "Sí (+48V)" },
    { ch: 4, instrument: "Timbal Hembra", mic: "Sennheiser e604 / SM57", stand: "Pinza", phantom: "No" },
    { ch: 5, instrument: "Timbal Macho", mic: "Sennheiser e604 / SM57", stand: "Pinza", phantom: "No" },
    { ch: 6, instrument: "Campana / Güiro", mic: "Shure SM57", stand: "Jirafa", phantom: "No" },
    { ch: 7, instrument: "Bajo Eléctrico (DI)", mic: "Radial J48 / BSS AR-133", stand: "Directo", phantom: "Sí (+48V)" },
    { ch: 8, instrument: "Bajo (Mic Amp)", mic: "Electro-Voice RE20 / Sennheiser MD421", stand: "Corto", phantom: "No" },
    { ch: 9, instrument: "Guitarra Surf (Mic)", mic: "Shure SM57 / Royer R-121", stand: "Corto", phantom: "No" },
    { ch: 10, instrument: "Teclado L (Sinte)", mic: "Caja Directa DI (Radial/BSS)", stand: "Línea", phantom: "Sí" },
    { ch: 11, instrument: "Teclado R (Sinte)", mic: "Caja Directa DI (Radial/BSS)", stand: "Línea", phantom: "Sí" },
    { ch: 12, instrument: "Voz Principal (Celta)", mic: "Shure Beta 58A / SM58", stand: "Recto", phantom: "No" },
    { ch: 13, instrument: "Voz Coro (Guitarra)", mic: "Shure SM58", stand: "Jirafa", phantom: "No" },
    { ch: 14, instrument: "Voz Coro (Bajo)", mic: "Shure SM58", stand: "Jirafa", phantom: "No" }
  ],
  monitoring: {
    system: "Preferiblemente sistema In-Ear (IEM) con 4 envíos estéreo independientes + 2 mezclas de cuña (wedges) de suelo en centro y batería.",
    mixes: [
      { mix: "Mix 1", user: "Celta (Voz)", type: "IEM Estéreo / Wedge", balance: "Voz principal 60%, guitarra 20%, teclado 10%, tempo 10%" },
      { mix: "Mix 2", user: "Miguel (Guitarra)", type: "IEM / Wedge", balance: "Guitarra 50%, voz 20%, base rítmica 30%" },
      { mix: "Mix 3", user: "Matias (Bajo)", type: "IEM / Wedge", balance: "Bajo 40%, bombo/timbal 40%, voces 20%" },
      { mix: "Mix 4", user: "Javier (Teclados)", type: "IEM / Wedge", balance: "Teclados 50%, guitarra 20%, base 30%" },
      { mix: "Mix 5", user: "Ruben (Batería)", type: "Wedge / Drum Fill", balance: "Bajo 40%, voz 30%, teclados/guitarra 30%" }
    ]
  },
  pressKitDownloads: [
    { title: "Rider Técnico Completo & Stage Plot (PDF)", filename: "Cumbia_Reverb_Rider_Tecnico_2024.pdf", size: "2.4 MB" },
    { title: "Dossier Oficial de Prensa / EPK (PDF)", filename: "Cumbia_Reverb_EPK_Dossier_2024.pdf", size: "8.1 MB" },
    { title: "Pack de Fotos Promocionales en Alta Resolución (ZIP)", filename: "Cumbia_Reverb_Press_Photos_HR.zip", size: "45 MB" },
    { title: "Logotipos Oficiales Vectoriales (SVG / PNG / AI)", filename: "Cumbia_Reverb_Logos_Vector.zip", size: "4.8 MB" }
  ]
};
