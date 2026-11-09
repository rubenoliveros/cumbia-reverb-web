// src/components/AudioPlayer.js
// Reproductor de audio flotante persistente con visualizador de ecualizador y control continuo.
// Solo aparece si alguna pista de musicData tiene `audioPreview` (MP3 real en /public/audio).

import { playableTracks } from '../data/musicData.js';
import { bandData } from '../data/bandData.js';

export function renderAudioPlayer() {
  if (playableTracks.length === 0) return '';
  const currentTrack = playableTracks[0];

  return `
    <div class="audio-player-bar" id="audioPlayerBar">
      <audio id="cumbiaAudioElement" src="${currentTrack.audioPreview}" preload="metadata"></audio>

      <div class="player-container">
        <!-- Track Info -->
        <div class="player-track-info">
          <img src="${currentTrack.cover}" alt="${currentTrack.title}" class="player-thumb" id="playerThumb" width="48" height="48" />
          <div class="player-meta">
            <span class="player-title" id="playerTitle">${currentTrack.title}</span>
            <span class="player-artist" id="playerArtist">${bandData.name}</span>
          </div>

          <div class="player-eq" id="playerEq">
            <span class="eq-bar"></span>
            <span class="eq-bar"></span>
            <span class="eq-bar"></span>
            <span class="eq-bar"></span>
          </div>
        </div>

        <!-- Controls & Scrubber -->
        <div class="player-controls">
          <div class="player-buttons">
            <button class="player-btn-sub" id="playerPrevBtn" title="Pista Anterior">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/>
              </svg>
            </button>

            <button class="player-btn-main" id="playerPlayBtn" title="Reproducir / Pausar">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" id="playerPlayIcon">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>

            <button class="player-btn-sub" id="playerNextBtn" title="Siguiente Pista">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="m6 18 8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
              </svg>
            </button>
          </div>

          <div class="player-progress-wrap">
            <span class="player-time" id="playerCurrentTime">0:00</span>
            <div class="player-progress-bar" id="playerProgressBar">
              <div class="player-progress-fill" id="playerProgressFill"></div>
            </div>
            <span class="player-time" id="playerDuration">0:00</span>
          </div>
        </div>

        <!-- Volume & External Streaming -->
        <div class="player-volume-wrap">
          <a href="${bandData.social.spotify}" target="_blank" rel="noopener noreferrer" class="btn btn-spotify btn-sm" id="playerSpotifyBtn" title="Abrir en Spotify">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            <span>Spotify</span>
          </a>
        </div>
      </div>
    </div>
  `;
}

export function initAudioPlayer() {
  const audio = document.getElementById('cumbiaAudioElement');
  if (!audio) return;
  const playBtn = document.getElementById('playerPlayBtn');
  const playIcon = document.getElementById('playerPlayIcon');
  const prevBtn = document.getElementById('playerPrevBtn');
  const nextBtn = document.getElementById('playerNextBtn');
  const progressBar = document.getElementById('playerProgressBar');
  const progressFill = document.getElementById('playerProgressFill');
  const currentTimeEl = document.getElementById('playerCurrentTime');
  const durationEl = document.getElementById('playerDuration');
  const eq = document.getElementById('playerEq');
  const thumb = document.getElementById('playerThumb');
  const titleEl = document.getElementById('playerTitle');

  let currentTrackIndex = 0;
  let isPlaying = false;

  function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  function updatePlayIcon(playing) {
    if (playing) {
      playIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
      eq.classList.add('playing');
    } else {
      playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
      eq.classList.remove('playing');
    }
  }

  function loadTrack(index) {
    currentTrackIndex = (index + playableTracks.length) % playableTracks.length;
    const track = playableTracks[currentTrackIndex];
    audio.src = track.audioPreview;
    titleEl.textContent = track.title;
    thumb.src = track.cover;

    highlightTrackCard();
  }

  // Highlight card in music section if present
  function highlightTrackCard() {
    const playingId = playableTracks[currentTrackIndex].id;
    document.querySelectorAll('.track-row').forEach(row => {
      row.classList.toggle('is-playing', row.querySelector('[data-play-track]')?.getAttribute('data-play-track') === playingId);
    });
  }

  // Re-apply highlight when the music page is rendered again after navigation
  window.addEventListener('routechange', highlightTrackCard);

  function play() {
    audio.play().then(() => {
      isPlaying = true;
      updatePlayIcon(true);
    }).catch(err => {
      console.warn("Autoplay bloqueado o archivo en carga:", err);
    });
  }

  function pause() {
    audio.pause();
    isPlaying = false;
    updatePlayIcon(false);
  }

  function togglePlay() {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }

  playBtn?.addEventListener('click', togglePlay);

  prevBtn?.addEventListener('click', () => {
    loadTrack(currentTrackIndex - 1);
    play();
  });

  nextBtn?.addEventListener('click', () => {
    loadTrack(currentTrackIndex + 1);
    play();
  });

  audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
      const pct = (audio.currentTime / audio.duration) * 100;
      progressFill.style.width = `${pct}%`;
      currentTimeEl.textContent = formatTime(audio.currentTime);
      durationEl.textContent = formatTime(audio.duration);
    }
  });

  audio.addEventListener('ended', () => {
    // Loop track or jump to next
    loadTrack(currentTrackIndex + 1);
    play();
  });

  progressBar?.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = clickX / rect.width;
    if (audio.duration) {
      audio.currentTime = pct * audio.duration;
    }
  });

  // Global API exposed to buttons on track cards
  window.cumbiaPlayer = {
    playTrack: (trackId) => {
      loadTrack(Math.max(0, playableTracks.findIndex(t => t.id === trackId)));
      play();
    },
    togglePlay,
    pause,
    play
  };
}
