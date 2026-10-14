/**
 * ZenHex: Core hexagonal geometry, tile connections, and flow logic engine.
 * Pure Vanilla JavaScript (Node.js & Browser compatible).
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ZenHex = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // 6 Pointy-topped hex axial directions (q, r):
  // 0: East (+1, 0)
  // 1: South-East (0, +1)
  // 2: South-West (-1, +1)
  // 3: West (-1, 0)
  // 4: North-West (0, -1)
  // 5: North-East (+1, -1)
  const DIRS = [
    [1, 0],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [0, -1],
    [1, -1]
  ];

  const DIR_NEIGHBORS = DIRS;
  const DIR_NAMES = ['E', 'SE', 'SW', 'W', 'NW', 'NE'];

  function oppositeDir(dir) {
    return (dir + 3) % 6;
  }

  function key(q, r) {
    return `${q},${r}`;
  }

  function cellKey(q, r) {
    return `${q},${r}`;
  }

  function parseKey(k) {
    const parts = k.split(',');
    return { q: Number(parts[0]), r: Number(parts[1]) };
  }

  function axialDistance(q1, r1, q2 = 0, r2 = 0) {
    const dq = q1 - q2;
    const dr = r1 - r2;
    return (Math.abs(dq) + Math.abs(dq + dr) + Math.abs(dr)) / 2;
  }

  function getNeighborCoord(q, r, dir) {
    const d = DIRS[dir];
    return { q: q + d[0], r: r + d[1] };
  }

  /**
   * Rotate a 6-bit direction mask clockwise by 60 * steps degrees
   */
  function rotateMask(mask, steps = 1) {
    const s = ((steps % 6) + 6) % 6;
    if (s === 0) return mask;
    let next = 0;
    for (let d = 0; d < 6; d++) {
      if (mask & (1 << d)) {
        next |= (1 << ((d + s) % 6));
      }
    }
    return next;
  }

  /**
   * Returns active edge directions for a tile given its baseDirs and current rotation.
   */
  function getActiveDirs(tile) {
    const rot = ((tile.rotation % 6) + 6) % 6;
    if (tile.baseDirs && tile.baseDirs.length > 0) {
      return tile.baseDirs.map(d => (d + rot) % 6).sort((a, b) => a - b);
    }
    if (typeof tile.mask === 'number') {
      const active = [];
      const m = tile.mask;
      for (let d = 0; d < 6; d++) {
        if (m & (1 << d)) active.push(d);
      }
      return active;
    }
    return [];
  }

  /**
   * Rotate tile by delta steps (clockwise if positive, counter-clockwise if negative).
   */
  function rotateTile(tile, steps = 1) {
    tile.rotation = (((tile.rotation + steps) % 6) + 6) % 6;
    if (typeof tile.mask === 'number') {
      tile.mask = rotateMask(tile.mask, steps);
    }
    return tile.rotation;
  }

  /**
   * Clone a level board state.
   */
  function cloneBoard(tiles) {
    return tiles.map(t => ({
      id: t.id,
      q: t.q,
      r: t.r,
      baseDirs: t.baseDirs ? [...t.baseDirs] : [],
      rotation: t.rotation || 0,
      mask: t.mask,
      targetMask: t.targetMask,
      isSource: !!t.isSource,
      isResonator: !!t.isResonator,
      color: t.color || 'cyan',
      rune: t.rune || null
    }));
  }

  /**
   * Build a coordinate map for quick lookup.
   */
  function buildTileMap(tiles) {
    const map = new Map();
    for (const t of tiles) {
      map.set(key(t.q, t.r), t);
    }
    return map;
  }

  function createTileMap(tiles) {
    return buildTileMap(tiles);
  }

  /**
   * Analyze energy flow, circuit connections, and open leaks across the board.
   */
  function evaluateBoard(tiles) {
    const tileMap = buildTileMap(tiles);
    const activeDirsMap = new Map();

    for (const t of tiles) {
      activeDirsMap.set(t.id, new Set(getActiveDirs(t)));
    }

    let leaks = 0;
    const matchedEdges = new Set(); // unique edge identifiers e.g. "0-1"

    // Check every active direction of every tile
    for (const t of tiles) {
      const activeDirs = activeDirsMap.get(t.id);
      for (const dir of activeDirs) {
        const neighborCoord = getNeighborCoord(t.q, t.r, dir);
        const neighborKey = key(neighborCoord.q, neighborCoord.r);
        const neighbor = tileMap.get(neighborKey);

        if (!neighbor) {
          // Points outside board bounds -> leak
          leaks++;
        } else {
          const neighborDirs = activeDirsMap.get(neighbor.id);
          const reqOpposite = oppositeDir(dir);
          if (neighborDirs.has(reqOpposite)) {
            // Matched bidirectional conduit!
            const edgeId = t.id < neighbor.id ? `${t.id}-${neighbor.id}` : `${neighbor.id}-${t.id}`;
            matchedEdges.add(edgeId);
          } else {
            // Neighbor tile does not connect back -> leak
            leaks++;
          }
        }
      }
    }

    // Energy Flow: BFS from Source tiles (or from (0,0) if no source flagged)
    const sources = tiles.filter(t => t.isSource);
    const startTiles = sources.length > 0 ? sources : (tiles.length > 0 ? [tiles[0]] : []);

    const energizedTiles = new Set();
    const energizedEdges = new Set();
    const queue = [];

    for (const s of startTiles) {
      energizedTiles.add(s.id);
      queue.push(s);
    }

    while (queue.length > 0) {
      const current = queue.shift();
      const currentDirs = activeDirsMap.get(current.id);

      for (const dir of currentDirs) {
        const neighborCoord = getNeighborCoord(current.q, current.r, dir);
        const neighborKey = key(neighborCoord.q, neighborCoord.r);
        const neighbor = tileMap.get(neighborKey);

        if (neighbor) {
          const neighborDirs = activeDirsMap.get(neighbor.id);
          if (neighborDirs.has(oppositeDir(dir))) {
            const edgeId = current.id < neighbor.id ? `${current.id}-${neighbor.id}` : `${neighbor.id}-${current.id}`;
            energizedEdges.add(edgeId);

            if (!energizedTiles.has(neighbor.id)) {
              energizedTiles.add(neighbor.id);
              queue.push(neighbor);
            }
          }
        }
      }
    }

    // Check completion criteria:
    // 1. Zero leaks
    // 2. All tiles with connections are energized
    // 3. All resonators are energized
    const tilesWithConnections = tiles.filter(t => {
      const dirs = activeDirsMap.get(t.id);
      return dirs && dirs.size > 0;
    });

    const allConnectedEnergized = tilesWithConnections.every(t => energizedTiles.has(t.id));
    const resonators = tiles.filter(t => t.isResonator);
    const allResonatorsEnergized = resonators.every(t => energizedTiles.has(t.id));

    const isSolved = (tilesWithConnections.length > 0) &&
                     (leaks === 0) &&
                     (allConnectedEnergized) &&
                     (allResonatorsEnergized);

    return {
      leaks,
      openLeaks: leaks,
      totalPorts: tilesWithConnections.length,
      matchedEdgeCount: matchedEdges.size,
      energizedTileCount: energizedTiles.size,
      totalConnectedTiles: tilesWithConnections.length,
      energizedTiles,
      energizedEdges,
      isSolved
    };
  }

  /**
   * Hint Assistant:
   * Compares current board rotations with the verified solution target rotations.
   * Returns the best next tile to rotate.
   */
  function getHint(tiles, targetRotations) {
    if (!targetRotations) return null;

    let bestTile = null;
    let minDiff = 999;

    for (const t of tiles) {
      if (!t.baseDirs || t.baseDirs.length === 0) continue;
      const targetRot = targetRotations[t.id];
      if (typeof targetRot !== 'number') continue;

      const currentRot = ((t.rotation % 6) + 6) % 6;
      const diff = (targetRot - currentRot + 6) % 6;

      if (diff !== 0) {
        // shortest moves to target (1, 2, or 3)
        const shortest = diff <= 3 ? diff : 6 - diff;
        if (shortest < minDiff) {
          minDiff = shortest;
          bestTile = {
            id: t.id,
            q: t.q,
            r: t.r,
            currentRotation: currentRot,
            targetRotation: targetRot,
            stepDelta: diff <= 3 ? 1 : -1
          };
        }
      }
    }

    return bestTile;
  }

  /**
   * Scramble a board from its target rotations.
   */
  function scrambleBoard(tiles, targetRotations) {
    for (const t of tiles) {
      if (!t.baseDirs || t.baseDirs.length === 0) continue;
      const offset = 1 + Math.floor(Math.random() * 5);
      t.rotation = (targetRotations[t.id] + offset) % 6;
    }

    const evalResult = evaluateBoard(tiles);
    if (evalResult.isSolved && tiles.length > 1) {
      tiles[0].rotation = (tiles[0].rotation + 1) % 6;
    }

    return tiles;
  }

  /**
   * Generate a hex grid layout with radius R.
   * Total tiles = 3*R*(R+1) + 1 (Radius 1 = 7, Radius 2 = 19, Radius 3 = 37).
   */
  function generateHexGrid(radius) {
    const tiles = [];
    let id = 0;
    for (let q = -radius; q <= radius; q++) {
      const r1 = Math.max(-radius, -q - radius);
      const r2 = Math.min(radius, -q + radius);
      for (let r = r1; r <= r2; r++) {
        tiles.push({
          id: id++,
          q,
          r,
          baseDirs: [],
          rotation: 0,
          isSource: (q === 0 && r === 0),
          isResonator: false,
          color: 'cyan'
        });
      }
    }
    return tiles;
  }

  return {
    DIRS,
    DIR_NEIGHBORS,
    DIR_NAMES,
    oppositeDir,
    key,
    cellKey,
    parseKey,
    axialDistance,
    getNeighborCoord,
    rotateMask,
    getActiveDirs,
    rotateTile,
    cloneBoard,
    buildTileMap,
    createTileMap,
    evaluateBoard,
    getHint,
    scrambleBoard,
    generateHexGrid
  };
});
