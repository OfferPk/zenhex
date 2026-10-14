# ZenHex

[![CI](https://github.com/OfferPk/zenhex/actions/workflows/ci.yml/badge.svg)](https://github.com/OfferPk/zenhex/actions/workflows/ci.yml)
[![Deploy GitHub Pages](https://github.com/OfferPk/zenhex/actions/workflows/pages.yml/badge.svg)](https://github.com/OfferPk/zenhex/actions/workflows/pages.yml)
[![Android build](https://github.com/OfferPk/zenhex/actions/workflows/android.yml/badge.svg)](https://github.com/OfferPk/zenhex/actions/workflows/android.yml)

> **ZenHex**: A sleek, calming offline hexagonal tile connection and loop rotation logic puzzle game. Rotate hex glyph tiles across honeycomb clusters to channel harmonious energy flows between colorful sacred runes.

---

## 🌟 Live Demo & Downloads

- **Live Web Demo**: [https://offerpk.github.io/zenhex/](https://offerpk.github.io/zenhex/)
- **Android APK**: Download the latest build from [GitHub Actions Artifacts](https://github.com/OfferPk/zenhex/actions/workflows/android.yml) (`zenhex-apk`) or [Releases](https://github.com/OfferPk/zenhex/releases).

---

## ✨ Features

- **100% Offline & Private**: Zero tracking, zero telemetry, zero advertisements, zero network requests. All level progress, stars, and moves are preserved locally in device storage.
- **50 Solver-Verified Levels Across 5 Packs**:
  - **Pack 1: Dawn Awakening** (10 levels, Radius 1 / 7 tiles): Learn the fundamentals of hexagonal flow rotation.
  - **Pack 2: Emerald Sanctuary** (10 levels, Radius 2 / 19 tiles): Intricate loops, branching streams, and sacred resonant shrines.
  - **Pack 3: Lotus Temple** (10 levels, Radius 2 / 19 tiles): Deep geometric labyrinths and multi-ring circuit alignments.
  - **Pack 4: Astral Honeycomb** (10 levels, Radius 3 / 37 tiles): Grand cosmic matrices with dual energy nodes.
  - **Pack 5: Cosmic Mandala** (10 levels, Radius 3 / 37 tiles): Master-level transcendent mandalas with majestic glowing loops.
- **Procedural Tibetan Singing Bowl Synthesizer**: Realistic Web Audio harmonic overtone simulation. Pure procedural audio with gentle mallet strikes and resonant exponential decay.
- **Intuitive Controls**: Tap / click to rotate clockwise, right-click / double-tap to rotate counter-clockwise.
- **Smart Hint Assistant**: Instant BFS-backed assistant highlights the next hex tile that needs alignment.
- **Unlimited Undo & Restart**: Experiment freely with zero penalty or frustration.
- **Cross-Platform**: Play seamlessly as a Progressive Web App (PWA) in any modern browser or on Android via Capacitor.

---

## 📱 Screenshots

```
+-------------------------------------------------------------+
|  [⬡] ZenHex       Pack 1 • First Light      Moves: 3 / Par: 4|
|                                         [🔊] [↺]           |
|                                                             |
|                           / \                               |
|                         /     \                             |
|                        |   ⬡   |                            |
|                       / \     / \                           |
|                     /     \ /     \                         |
|                    |   ⬡   |   ⬡   |                        |
|                     \     / \     /                         |
|                       \ /     \ /                           |
|                        |   ⬡   |                            |
|                         \     /                             |
|                           \ /                               |
|                                                             |
|     [Levels]         [Undo]         [Hint]         [Guide]   |
+-------------------------------------------------------------+
```

---

## 🛠️ Building & Development

### Prerequisites
- Node.js 18+ (tested on Node 20 & 22)
- npm 9+
- Android Studio / SDK (optional, for local Android builds)

### Commands
```bash
# Clone the repository
git clone https://github.com/OfferPk/zenhex.git
cd zenhex

# Install dependencies
npm ci

# Run unit tests
npm test

# Build runtime web assets to www/
npm run build

# Generate deterministic levels
node scripts/generate_levels.js

# Generate icons
node scripts/generate-icons.js
```

### Android Build (Capacitor)
```bash
# Add Android platform
npx cap add android

# Sync assets
npx cap sync android

# Open in Android Studio
npx cap open android
```

---

## 📄 License

MIT License. Copyright (c) 2026 OfferPk. See [LICENSE](LICENSE) for details.
