/**
 * ZenHex Procedural Web Audio Engine
 * Pure procedural synthesis for Tibetan singing bowls, crystal bells, and ambient tones.
 * Zero external audio assets, zero network requests, 100% offline.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ZenHexAudio = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // Pentatonic scale frequencies in Hz
  const SCALE = [
    261.63, // C4
    293.66, // D4
    329.63, // E4
    392.00, // G4
    440.00, // A4
    523.25, // C5
    587.33, // D5
    659.25, // E5
    783.99, // G5
    880.00  // A5
  ];

  class AudioManager {
    constructor() {
      this.ctx = null;
      this.enabled = true;
      this.masterGain = null;
      this.lastPitchIndex = 0;
      this.loadPreference();
    }

    loadPreference() {
      try {
        const stored = localStorage.getItem('zenhex_sound_enabled');
        if (stored !== null) {
          this.enabled = stored === 'true';
        }
      } catch (e) {
        this.enabled = true;
      }
    }

    savePreference() {
      try {
        localStorage.setItem('zenhex_sound_enabled', String(this.enabled));
      } catch (e) {
        // Ignore storage errors
      }
    }

    toggle() {
      this.enabled = !this.enabled;
      this.savePreference();
      if (this.enabled) {
        this.init();
        this.playRotate();
      }
      return this.enabled;
    }

    init() {
      if (!this.ctx && typeof AudioContext !== 'undefined') {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    /**
     * Synthesize a Tibetan singing bowl strike with fundamental + overtones.
     */
    playSingingBowl(freq, duration = 2.0, volume = 0.25) {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // Overtones of singing bowls typically include 2.76x and 5.4x fundamental
      const harmonics = [
        { fRatio: 1.0, gain: 0.8, decay: duration },
        { fRatio: 2.76, gain: 0.35, decay: duration * 0.7 },
        { fRatio: 5.4, gain: 0.15, decay: duration * 0.4 }
      ];

      for (const h of harmonics) {
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq * h.fRatio, now);

        // Subtle slow vibrato / binaural beat
        const lfo = this.ctx.createOscillator();
        const lfoGain = this.ctx.createGain();
        lfo.frequency.setValueAtTime(3.5, now);
        lfoGain.gain.setValueAtTime(1.5, now);
        lfo.connect(osc.frequency);
        lfo.start(now);
        lfo.stop(now + h.decay);

        // Gentle mallet envelope: fast attack, exponential decay
        gainNode.gain.setValueAtTime(0.0001, now);
        gainNode.gain.exponentialRampToValueAtTime(volume * h.gain, now + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + h.decay);

        osc.connect(gainNode);
        gainNode.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + h.decay);
      }
    }

    /**
     * Soft click / crystal tap when rotating a hex tile.
     */
    playRotate() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      this.lastPitchIndex = (this.lastPitchIndex + 1) % SCALE.length;
      const freq = SCALE[this.lastPitchIndex];

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.05, now + 0.06);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.12);
    }

    /**
     * Harmonious singing chime when a valid connection is energized.
     */
    playConnect() {
      if (!this.enabled) return;
      const note = SCALE[Math.floor(Math.random() * SCALE.length)];
      this.playSingingBowl(note, 1.2, 0.18);
    }

    /**
     * Soft resonant droplet on Undo.
     */
    playUndo() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(260, now + 0.14);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.14);
    }

    /**
     * Celestial chime on Hint.
     */
    playHint() {
      if (!this.enabled) return;
      const notes = [SCALE[4], SCALE[6], SCALE[8]];
      notes.forEach((f, idx) => {
        setTimeout(() => {
          this.playSingingBowl(f, 1.5, 0.2);
        }, idx * 120);
      });
    }

    /**
     * Full transcendent choral singing bowl cascade on Level Complete!
     */
    playVictory() {
      if (!this.enabled) return;
      const chords = [
        SCALE[0], // C4
        SCALE[2], // E4
        SCALE[3], // G4
        SCALE[5], // C5
        SCALE[7]  // E5
      ];

      chords.forEach((freq, idx) => {
        setTimeout(() => {
          this.playSingingBowl(freq, 3.2, 0.28);
        }, idx * 180);
      });
    }
  }

  return new AudioManager();
});
