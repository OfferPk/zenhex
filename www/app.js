/**
 * ZenHex Game Application Controller & Canvas Renderer
 * Pure Vanilla JavaScript. Offline-first, responsive, and accessible.
 */

(function () {
  'use strict';

  // Game state
  let currentLevelIndex = 0;
  let currentLevel = null;
  let boardTiles = [];
  let boardEvaluation = null;
  let movesCount = 0;
  let undoStack = [];
  let hintTile = null;
  let hintTimeout = null;
  let isLevelCompleted = false;
  let unlockedLevelIndex = 0;
  let levelStarsMap = {};
  let currentPackIndex = 0;
  let animFrameId = null;
  let pulsePhase = 0;
  let focusedTileId = 0;

  // Canvas & layout
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  let canvasWidth = 0;
  let canvasHeight = 0;
  let hexRadius = 40;
  let boardCenter = { x: 0, y: 0 };

  // DOM elements
  const srAnnouncer = document.getElementById('sr-announcer');
  const displayLevelName = document.getElementById('display-level-name');
  const displayMoves = document.getElementById('display-moves');
  const btnSound = document.getElementById('btn-sound');
  const iconSoundOn = document.getElementById('icon-sound-on');
  const iconSoundOff = document.getElementById('icon-sound-off');
  const btnRestart = document.getElementById('btn-restart');
  const btnLevels = document.getElementById('btn-levels');
  const btnHome = document.getElementById('btn-home');
  const btnUndo = document.getElementById('btn-undo');
  const btnHint = document.getElementById('btn-hint');
  const btnHelp = document.getElementById('btn-help');

  // Start Screen Modal
  const modalStart = document.getElementById('modal-start');
  const btnStartPlay = document.getElementById('btn-start-play');
  const btnStartLevels = document.getElementById('btn-start-levels');
  const startContinueLevel = document.getElementById('start-continue-level');

  // Victory Modal
  const modalVictory = document.getElementById('modal-victory');
  const victoryCard = modalVictory.querySelector('.victory-card');
  const victoryLevel = document.getElementById('victory-level');
  const victorySubtitle = document.getElementById('victory-subtitle');
  const victoryStars = document.getElementById('victory-stars');
  const victoryMoves = document.getElementById('victory-moves');
  const victoryPar = document.getElementById('victory-par');
  const victoryRating = document.getElementById('victory-rating');
  const victoryNextLabel = document.getElementById('victory-next-label');
  const victoryNextDetail = document.getElementById('victory-next-detail');
  const btnNextLevel = document.getElementById('btn-next-level');
  const btnVictoryReplay = document.getElementById('btn-victory-replay');
  const vStar1 = document.getElementById('v-star-1');
  const vStar2 = document.getElementById('v-star-2');
  const vStar3 = document.getElementById('v-star-3');

  // Level Selector Modal
  const modalLevels = document.getElementById('modal-levels');
  const packTabsContainer = document.getElementById('pack-tabs-container');
  const levelGridContainer = document.getElementById('level-grid-container');
  const btnCloseLevels = document.getElementById('btn-close-levels');

  // Help Modal
  const modalHelp = document.getElementById('modal-help');
  const btnCloseHelp = document.getElementById('btn-close-help');

  // Screen Reader Announcer
  function announce(text) {
    if (srAnnouncer) {
      srAnnouncer.textContent = '';
      setTimeout(() => {
        srAnnouncer.textContent = text;
      }, 50);
    }
  }

  // Persistence
  function loadProgress() {
    try {
      const u = localStorage.getItem('zenhex_unlocked');
      if (u !== null) unlockedLevelIndex = parseInt(u, 10) || 0;
      const s = localStorage.getItem('zenhex_stars');
      if (s !== null) levelStarsMap = JSON.parse(s) || {};
    } catch (e) {
      unlockedLevelIndex = 0;
      levelStarsMap = {};
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem('zenhex_unlocked', String(unlockedLevelIndex));
      localStorage.setItem('zenhex_stars', JSON.stringify(levelStarsMap));
    } catch (e) {
      // Storage unavailable
    }
  }

  function updateSoundIcon() {
    if (ZenHexAudio.enabled) {
      iconSoundOn.style.display = 'block';
      iconSoundOff.style.display = 'none';
    } else {
      iconSoundOn.style.display = 'none';
      iconSoundOff.style.display = 'block';
    }
  }

  // Coordinate Conversion
  // Pointy-topped axial (q, r) to Cartesian (x, y) relative to board center
  function axialToScreen(q, r) {
    const x = boardCenter.x + hexRadius * Math.sqrt(3) * (q + r / 2);
    const y = boardCenter.y + hexRadius * 1.5 * r;
    return { x, y };
  }

  // Resize canvas to fill viewport with high-DPI scaling
  function resizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvasWidth = rect.width;
    canvasHeight = rect.height;

    canvas.width = Math.round(canvasWidth * dpr);
    canvas.height = Math.round(canvasHeight * dpr);

    ctx.resetTransform();
    ctx.scale(dpr, dpr);

    boardCenter = {
      x: canvasWidth / 2,
      y: canvasHeight / 2
    };

    if (currentLevel) {
      // Calculate hex radius based on level radius to fit nicely with padding
      const maxAxial = currentLevel.radius || 2;
      const boardExtentW = (maxAxial * 2 + 1) * Math.sqrt(3);
      const boardExtentH = (maxAxial * 2 + 1) * 1.5;

      const availW = canvasWidth * 0.88;
      const availH = canvasHeight * 0.82;

      const radW = availW / boardExtentW;
      const radH = availH / boardExtentH;

      hexRadius = Math.max(20, Math.min(radW, radH, 50));
    }
  }

  // Load a level by index
  function loadLevel(index) {
    if (index < 0 || index >= ZenHexLevels.LEVELS.length) {
      index = 0;
    }

    currentLevelIndex = index;
    currentLevel = ZenHexLevels.LEVELS[index];
    currentPackIndex = currentLevel.packId - 1;

    boardTiles = ZenHex.cloneBoard(currentLevel.tiles);
    // Initialize animation display angles
    for (const t of boardTiles) {
      t.targetAngle = t.rotation * (Math.PI / 3);
      t.displayAngle = t.targetAngle;
    }

    focusedTileId = boardTiles.length > 0 ? boardTiles[0].id : 0;
    movesCount = 0;
    undoStack = [];
    hintTile = null;
    if (hintTimeout) clearTimeout(hintTimeout);
    isLevelCompleted = false;

    displayLevelName.textContent = `Pack ${currentLevel.packId} • ${currentLevel.name}`;
    displayMoves.textContent = `Moves: 0 / Par: ${currentLevel.parMoves}`;
    if (startContinueLevel) {
      startContinueLevel.textContent = `${currentLevel.id}`;
    }

    boardEvaluation = ZenHex.evaluateBoard(boardTiles);
    announce(`Loaded Level ${currentLevel.id}: ${currentLevel.name}. Rotate tiles to connect the closed loop.`);

    resizeCanvas();
  }

  // Rotate a tile
  function handleTileRotate(tile, direction = 1) {
    if (isLevelCompleted) return;
    if (!tile.baseDirs || tile.baseDirs.length === 0) return;

    focusedTileId = tile.id;
    const newRot = ZenHex.rotateTile(tile, direction);
    tile.targetAngle += direction * (Math.PI / 3);

    movesCount++;
    displayMoves.textContent = `Moves: ${movesCount} / Par: ${currentLevel.parMoves}`;

    undoStack.push({
      tileId: tile.id,
      direction: -direction
    });

    hintTile = null;
    ZenHexAudio.playRotate();

    const prevMatched = boardEvaluation ? boardEvaluation.matchedEdgeCount : 0;
    boardEvaluation = ZenHex.evaluateBoard(boardTiles);

    if (boardEvaluation.matchedEdgeCount > prevMatched) {
      ZenHexAudio.playConnect();
    }

    announce(`Rotated tile at axial ${tile.q}, ${tile.r}. Moves: ${movesCount}. Active leaks: ${boardEvaluation.leaks}`);

    if (boardEvaluation.isSolved && !isLevelCompleted) {
      onLevelCompleted();
    }
  }

  function handleUndo() {
    if (isLevelCompleted || undoStack.length === 0) return;

    const action = undoStack.pop();
    const tile = boardTiles.find(t => t.id === action.tileId);
    if (tile) {
      ZenHex.rotateTile(tile, action.direction);
      tile.targetAngle += action.direction * (Math.PI / 3);

      if (movesCount > 0) movesCount--;
      displayMoves.textContent = `Moves: ${movesCount} / Par: ${currentLevel.parMoves}`;

      hintTile = null;
      boardEvaluation = ZenHex.evaluateBoard(boardTiles);
      ZenHexAudio.playUndo();
      announce(`Undid last rotation. Moves: ${movesCount}`);
    }
  }

  function handleHint() {
    if (isLevelCompleted) return;

    hintTile = ZenHex.getHint(boardTiles, currentLevel.targetRotations);
    if (hintTile) {
      focusedTileId = hintTile.id;
      ZenHexAudio.playHint();
      announce(`Hint highlighted tile at ${hintTile.q}, ${hintTile.r}`);
      if (hintTimeout) clearTimeout(hintTimeout);
      hintTimeout = setTimeout(() => {
        hintTile = null;
      }, 4500);
    }
  }

  function onLevelCompleted() {
    isLevelCompleted = true;
    ZenHexAudio.playVictory();

    // Calculate stars
    let earnedStars = 1;
    if (movesCount <= currentLevel.parMoves) {
      earnedStars = 3;
    } else if (movesCount <= Math.round(currentLevel.parMoves * 1.5)) {
      earnedStars = 2;
    }

    const prevStars = levelStarsMap[currentLevel.id] || 0;
    if (earnedStars > prevStars) {
      levelStarsMap[currentLevel.id] = earnedStars;
    }

    if (currentLevelIndex + 1 > unlockedLevelIndex && currentLevelIndex + 1 < ZenHexLevels.LEVELS.length) {
      unlockedLevelIndex = currentLevelIndex + 1;
    }

    saveProgress();

    // Update the level-complete summary.
    victoryCard.dataset.rating = String(earnedStars);
    victoryLevel.textContent = `PACK ${currentLevel.packId} · LEVEL ${currentLevel.id}`;
    victoryMoves.textContent = String(movesCount);
    victoryPar.textContent = String(currentLevel.parMoves);
    victoryRating.textContent = `${earnedStars} / 3`;
    victoryStars.setAttribute('aria-label', `${earnedStars} out of 3 stars earned`);

    if (earnedStars === 3) {
      victorySubtitle.textContent = 'A perfectly tuned loop — you met the target par.';
    } else if (earnedStars === 2) {
      victorySubtitle.textContent = 'A smooth solve. Refine your route to earn the full three-star flow.';
    } else {
      victorySubtitle.textContent = 'Loop restored. Replay anytime to find a more balanced route.';
    }

    const nextLevel = ZenHexLevels.LEVELS[currentLevelIndex + 1];
    if (nextLevel) {
      victoryNextLabel.textContent = 'Continue';
      victoryNextDetail.textContent = `Pack ${nextLevel.packId} · Level ${nextLevel.id}`;
    } else {
      victoryNextLabel.textContent = 'Choose another level';
      victoryNextDetail.textContent = 'All 50 levels complete';
    }

    [vStar1, vStar2, vStar3].forEach((starEl, idx) => {
      if (idx < earnedStars) {
        starEl.classList.add('active');
      } else {
        starEl.classList.remove('active');
      }
    });

    announce(`Harmony Restored! Completed Level ${currentLevel.id} in ${movesCount} moves with ${earnedStars} stars.`);

    setTimeout(() => {
      modalVictory.classList.add('active');
    }, 600);
  }

  // Canvas Hit Testing
  function getTileAtPoint(px, py) {
    const innerRadius = hexRadius * 0.96;
    for (const tile of boardTiles) {
      const pos = axialToScreen(tile.q, tile.r);
      const dx = px - pos.x;
      const dy = py - pos.y;
      if (dx * dx + dy * dy <= innerRadius * innerRadius) {
        return tile;
      }
    }
    return null;
  }

  // Keyboard navigation among hexes
  function moveFocus(dirX, dirY) {
    const curr = boardTiles.find(t => t.id === focusedTileId) || boardTiles[0];
    if (!curr) return;

    let bestCandidate = null;
    let bestScore = Infinity;

    for (const t of boardTiles) {
      if (t.id === curr.id) continue;
      const dq = t.q - curr.q;
      const dr = t.r - curr.r;
      const screenCurr = axialToScreen(curr.q, curr.r);
      const screenT = axialToScreen(t.q, t.r);
      const dx = screenT.x - screenCurr.x;
      const dy = screenT.y - screenCurr.y;

      // Project onto desired navigation vector
      const dot = dx * dirX + dy * dirY;
      if (dot > 0.1) {
        const distSq = dx * dx + dy * dy;
        const perpDistSq = (dx * (-dirY) + dy * dirX) ** 2;
        const score = distSq + perpDistSq * 2;
        if (score < bestScore) {
          bestScore = score;
          bestCandidate = t;
        }
      }
    }

    if (bestCandidate) {
      focusedTileId = bestCandidate.id;
      announce(`Focused tile at ${bestCandidate.q}, ${bestCandidate.r}`);
    }
  }

  // Render Loop
  function drawHexPolygon(cx, cy, r, fillStyle, strokeStyle, lineWidth = 1) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const vx = cx + r * Math.cos(angle + Math.PI / 6);
      const vy = cy + r * Math.sin(angle + Math.PI / 6);
      if (i === 0) ctx.moveTo(vx, vy);
      else ctx.lineTo(vx, vy);
    }
    ctx.closePath();

    if (fillStyle) {
      ctx.fillStyle = fillStyle;
      ctx.fill();
    }
    if (strokeStyle) {
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    }
  }

  function render() {
    pulsePhase += 0.04;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    if (!currentLevel || boardTiles.length === 0) {
      animFrameId = requestAnimationFrame(render);
      return;
    }

    const apothem = (hexRadius * Math.sqrt(3)) / 2;
    const evalResult = boardEvaluation || { energizedTiles: new Set(), energizedEdges: new Set() };
    const tileMap = ZenHex.buildTileMap(boardTiles);

    // 1. Draw Hex Tiles Background & Borders
    for (const tile of boardTiles) {
      const pos = axialToScreen(tile.q, tile.r);

      // Smooth rotation interpolation
      tile.displayAngle += (tile.targetAngle - tile.displayAngle) * 0.22;

      const isHint = hintTile && (hintTile.id === tile.id);
      const isFocused = focusedTileId === tile.id;
      const isEnergized = evalResult.energizedTiles && evalResult.energizedTiles.has(tile.id);

      // Tile background
      let fill = '#0d1526';
      let stroke = '#1e293b';
      let strokeW = 1.5;

      if (tile.isSource) {
        fill = '#152538';
        stroke = '#00f2fe';
        strokeW = 2.5;
      } else if (tile.isResonator) {
        fill = isEnergized ? '#261b36' : '#141829';
        stroke = isEnergized ? '#c084fc' : '#475569';
        strokeW = 2;
      }

      if (isHint) {
        stroke = '#fbbf24';
        strokeW = 3;
      }

      drawHexPolygon(pos.x, pos.y, hexRadius - 2, fill, stroke, strokeW);

      // Visible Keyboard Focus Ring
      if (isFocused) {
        ctx.save();
        drawHexPolygon(pos.x, pos.y, hexRadius + 2, null, '#00f2fe', 2);
        drawHexPolygon(pos.x, pos.y, hexRadius + 4, null, 'rgba(255, 255, 255, 0.4)', 1);
        ctx.restore();
      }

      // Ambient breathing halo for Source
      if (tile.isSource) {
        const pulse = Math.sin(pulsePhase) * 4;
        ctx.save();
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, hexRadius * 0.42 + pulse, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 242, 254, 0.12)';
        ctx.fill();
        ctx.restore();
      }

      // Hint pulsating aura
      if (isHint) {
        const hPulse = Math.sin(pulsePhase * 2) * 5;
        ctx.save();
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, hexRadius * 0.65 + hPulse, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(251, 191, 36, 0.7)';
        ctx.lineWidth = 2.5;
        ctx.stroke();
        ctx.restore();
      }
    }

    // 2. Draw Conduits and Pathways
    for (const tile of boardTiles) {
      if (!tile.baseDirs || tile.baseDirs.length === 0) continue;
      const pos = axialToScreen(tile.q, tile.r);
      const isEnergized = evalResult.energizedTiles && evalResult.energizedTiles.has(tile.id);
      const activeDirs = ZenHex.getActiveDirs(tile);

      ctx.save();
      ctx.translate(pos.x, pos.y);
      ctx.rotate(tile.displayAngle);

      const conduitWidth = Math.max(4, hexRadius * 0.16);

      for (const baseDir of tile.baseDirs) {
        const angle = (Math.PI / 3) * baseDir;
        const ex = apothem * Math.cos(angle);
        const ey = apothem * Math.sin(angle);

        // Check if this conduit is a leak (non-color visual feedback)
        // Determine current effective direction in world coords
        const rot = ((tile.rotation % 6) + 6) % 6;
        const worldDir = (baseDir + rot) % 6;
        const nCoord = ZenHex.getNeighborCoord(tile.q, tile.r, worldDir);
        const neighbor = tileMap.get(ZenHex.key(nCoord.q, nCoord.r));
        const opp = ZenHex.oppositeDir(worldDir);
        const isMatched = neighbor && ZenHex.getActiveDirs(neighbor).includes(opp);

        // Draw conduit line from center to edge
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(ex, ey);

        if (isEnergized && isMatched) {
          ctx.strokeStyle = '#00f2fe';
          ctx.lineWidth = conduitWidth;
          ctx.lineCap = 'round';
          ctx.shadowColor = '#00f2fe';
          ctx.shadowBlur = 12;
          ctx.stroke();

          // Inner high-intensity core
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(ex, ey);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = conduitWidth * 0.35;
          ctx.shadowBlur = 0;
          ctx.stroke();
        } else {
          ctx.strokeStyle = '#334155';
          ctx.lineWidth = conduitWidth;
          ctx.lineCap = 'round';
          ctx.shadowBlur = 0;
          ctx.stroke();

          // Non-color indicator: If it's an open leak, draw distinct terminal indicator
          if (!isMatched) {
            ctx.beginPath();
            ctx.arc(ex * 0.88, ey * 0.88, conduitWidth * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = '#f87171';
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Center node orb
      ctx.beginPath();
      ctx.arc(0, 0, conduitWidth * 1.15, 0, Math.PI * 2);
      if (tile.isSource) {
        ctx.fillStyle = '#fbbf24';
        ctx.shadowColor = '#fbbf24';
        ctx.shadowBlur = 14;
      } else if (tile.isResonator) {
        ctx.fillStyle = isEnergized ? '#c084fc' : '#64748b';
        ctx.shadowColor = '#c084fc';
        ctx.shadowBlur = isEnergized ? 14 : 0;
      } else {
        ctx.fillStyle = isEnergized ? '#00f2fe' : '#475569';
        ctx.shadowColor = '#00f2fe';
        ctx.shadowBlur = isEnergized ? 8 : 0;
      }
      ctx.fill();

      ctx.restore();
    }

    // 3. Victory cosmic aura around the entire mandala
    if (evalResult.isSolved) {
      ctx.save();
      const vPulse = Math.sin(pulsePhase * 1.5) * 6;
      ctx.beginPath();
      ctx.arc(boardCenter.x, boardCenter.y, hexRadius * (currentLevel.radius + 0.6) * 1.4 + vPulse, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.28)';
      ctx.lineWidth = 3;
      ctx.shadowColor = '#00f2fe';
      ctx.shadowBlur = 16;
      ctx.stroke();
      ctx.restore();
    }

    animFrameId = requestAnimationFrame(render);
  }

  // Event Listeners
  function attachEvents() {
    window.addEventListener('resize', resizeCanvas);

    // Canvas click / touch
    function onPointerDown(e) {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);

      if (typeof clientX !== 'number') return;

      const px = clientX - rect.left;
      const py = clientY - rect.top;

      const tile = getTileAtPoint(px, py);
      if (tile) {
        const isRightClick = e.button === 2 || e.shiftKey;
        handleTileRotate(tile, isRightClick ? -1 : 1);
      }
    }

    canvas.addEventListener('click', onPointerDown);
    canvas.addEventListener('contextmenu', e => e.preventDefault());

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      // If modal is active, handle modal-specific keys
      const activeModal = document.querySelector('.modal-overlay.active');
      if (activeModal) {
        if (e.key === 'Escape') {
          activeModal.classList.remove('active');
        }
        return;
      }

      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        e.preventDefault();
        moveFocus(0, -1);
      } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        e.preventDefault();
        moveFocus(0, 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        moveFocus(-1, 0);
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        moveFocus(1, 0);
      } else if (e.key === 'Enter' || e.key === ' ' || e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        const tile = boardTiles.find(t => t.id === focusedTileId);
        if (tile) {
          const dir = (e.shiftKey || e.key === 'q' || e.key === 'Q') ? -1 : 1;
          handleTileRotate(tile, dir);
        }
      } else if (e.key === 'z' || e.key === 'Z') {
        e.preventDefault();
        handleUndo();
      } else if (e.key === 'h' || e.key === 'H') {
        e.preventDefault();
        handleHint();
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        ZenHexAudio.toggle();
        updateSoundIcon();
      }
    });

    // Start Screen buttons
    if (btnStartPlay) {
      btnStartPlay.addEventListener('click', () => {
        modalStart.classList.remove('active');
        canvas.focus();
      });
    }

    if (btnStartLevels) {
      btnStartLevels.addEventListener('click', () => {
        modalStart.classList.remove('active');
        openLevelSelector();
      });
    }

    // Header Controls
    btnSound.addEventListener('click', () => {
      ZenHexAudio.toggle();
      updateSoundIcon();
    });

    btnRestart.addEventListener('click', () => {
      loadLevel(currentLevelIndex);
      ZenHexAudio.playRotate();
    });

    // Footer Controls
    btnUndo.addEventListener('click', handleUndo);
    btnHint.addEventListener('click', handleHint);

    btnHelp.addEventListener('click', () => {
      modalHelp.classList.add('active');
    });

    btnCloseHelp.addEventListener('click', () => {
      modalHelp.classList.remove('active');
    });

    // Level selector
    btnLevels.addEventListener('click', openLevelSelector);
    btnHome.addEventListener('click', openLevelSelector);
    btnHome.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLevelSelector();
      }
    });

    btnCloseLevels.addEventListener('click', () => {
      modalLevels.classList.remove('active');
    });

    // Victory modal
    btnNextLevel.addEventListener('click', () => {
      modalVictory.classList.remove('active');
      if (currentLevelIndex + 1 < ZenHexLevels.LEVELS.length) {
        loadLevel(currentLevelIndex + 1);
      } else {
        openLevelSelector();
      }
    });

    btnVictoryReplay.addEventListener('click', () => {
      modalVictory.classList.remove('active');
      loadLevel(currentLevelIndex);
    });
  }

  function openLevelSelector() {
    packTabsContainer.innerHTML = '';
    levelGridContainer.innerHTML = '';

    ZenHexLevels.PACKS.forEach((pack, pIdx) => {
      const tab = document.createElement('div');
      tab.className = `pack-tab ${pIdx === currentPackIndex ? 'active' : ''}`;
      tab.textContent = `Pack ${pack.id}: ${pack.name}`;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('tabindex', '0');
      tab.setAttribute('aria-selected', pIdx === currentPackIndex ? 'true' : 'false');

      function selectTab() {
        currentPackIndex = pIdx;
        openLevelSelector();
      }

      tab.addEventListener('click', selectTab);
      tab.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectTab();
        }
      });
      packTabsContainer.appendChild(tab);
    });

    const activePack = ZenHexLevels.PACKS[currentPackIndex];
    const packLevels = ZenHexLevels.LEVELS.filter(l => l.packId === activePack.id);

    packLevels.forEach(lvl => {
      const card = document.createElement('div');
      const lvlIndex = lvl.id - 1;
      const isLocked = lvlIndex > unlockedLevelIndex;
      const isCurr = lvlIndex === currentLevelIndex;
      const starsEarned = levelStarsMap[lvl.id] || 0;

      card.className = `level-card ${isLocked ? 'locked' : ''} ${isCurr ? 'current' : ''}`;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', isLocked ? '-1' : '0');
      card.setAttribute('aria-label', `Level ${lvl.id}: ${lvl.name}. ${isLocked ? 'Locked' : `${starsEarned} stars earned`}`);
      card.innerHTML = `
        <span>${lvl.id}</span>
        <div class="card-stars">${isLocked ? '🔒' : (starsEarned > 0 ? '★'.repeat(starsEarned) : '—')}</div>
      `;

      if (!isLocked) {
        function chooseLevel() {
          modalLevels.classList.remove('active');
          loadLevel(lvlIndex);
        }
        card.addEventListener('click', chooseLevel);
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            chooseLevel();
          }
        });
      }

      levelGridContainer.appendChild(card);
    });

    modalLevels.classList.add('active');
  }

  // Register PWA Service Worker
  function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(() => {
        // SW registration failed (offline or insecure origin)
      });
    }
  }

  // Initialization
  function init() {
    loadProgress();
    updateSoundIcon();
    attachEvents();
    loadLevel(unlockedLevelIndex || 0);
    registerServiceWorker();
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
