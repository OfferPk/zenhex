/**
 * Logic unit tests for ZenHex engine
 * Node.js built-in test runner (node --test)
 */

const test = require('node:test');
const assert = require('node:assert');
const ZenHex = require('../src/hex.js');
const Levels = require('../src/levels.js');

test('Hex axial geometry and direction opposites', () => {
  assert.equal(ZenHex.DIRS.length, 6);
  for (let d = 0; d < 6; d++) {
    const opp = ZenHex.oppositeDir(d);
    assert.equal(ZenHex.oppositeDir(opp), d);
    // Opposites must sum to (0, 0) in axial vector space
    const v1 = ZenHex.DIRS[d];
    const v2 = ZenHex.DIRS[opp];
    assert.equal(v1[0] + v2[0], 0);
    assert.equal(v1[1] + v2[1], 0);
  }
});

test('Axial distance calculations', () => {
  assert.equal(ZenHex.axialDistance(0, 0, 0, 0), 0);
  assert.equal(ZenHex.axialDistance(1, 0, 0, 0), 1);
  assert.equal(ZenHex.axialDistance(0, 1, 0, 0), 1);
  assert.equal(ZenHex.axialDistance(-1, 1, 0, 0), 1);
  assert.equal(ZenHex.axialDistance(2, -2, 0, 0), 2);
  assert.equal(ZenHex.axialDistance(-3, 1, 0, 0), 3);
  // Also supports 2-argument form from origin (0, 0)
  assert.equal(ZenHex.axialDistance(2, -2), 2);
  assert.equal(ZenHex.axialDistance(0, 0), 0);
});

test('Hex grid generation tile counts for Radius 1, 2, 3', () => {
  // Formula: 3*R*(R+1) + 1
  const r1 = ZenHex.generateHexGrid(1);
  assert.equal(r1.length, 7);

  const r2 = ZenHex.generateHexGrid(2);
  assert.equal(r2.length, 19);

  const r3 = ZenHex.generateHexGrid(3);
  assert.equal(r3.length, 37);
});

test('Tile rotation and active directions mapping', () => {
  const tile = {
    id: 0,
    q: 0,
    r: 0,
    baseDirs: [0, 2], // 120 degree angle
    rotation: 0
  };

  assert.deepEqual(ZenHex.getActiveDirs(tile), [0, 2]);

  ZenHex.rotateTile(tile, 1);
  assert.equal(tile.rotation, 1);
  assert.deepEqual(ZenHex.getActiveDirs(tile), [1, 3]);

  ZenHex.rotateTile(tile, 5); // 1 + 5 = 6 -> 0
  assert.equal(tile.rotation, 0);
  assert.deepEqual(ZenHex.getActiveDirs(tile), [0, 2]);

  ZenHex.rotateTile(tile, -1); // 0 - 1 = 5
  assert.equal(tile.rotation, 5);
  assert.deepEqual(ZenHex.getActiveDirs(tile), [1, 5]);
});

test('Leak detection on open conduits', () => {
  // Tile 0 at (0,0) pointing East (dir 0)
  // Tile 1 at (1,0) pointing West (dir 3) -> valid match!
  const tiles = [
    { id: 0, q: 0, r: 0, baseDirs: [0], rotation: 0, isSource: true },
    { id: 1, q: 1, r: 0, baseDirs: [3], rotation: 0, isSource: false }
  ];

  const evalMatched = ZenHex.evaluateBoard(tiles);
  assert.equal(evalMatched.leaks, 0);
  assert.equal(evalMatched.isSolved, true);

  // Rotate tile 1 so it points North-West (dir 4) -> leak!
  tiles[1].rotation = 1;
  const evalLeaking = ZenHex.evaluateBoard(tiles);
  assert.ok(evalLeaking.leaks > 0);
  assert.equal(evalLeaking.isSolved, false);
});

test('Energy flow propagation reaches all connected tiles', () => {
  // 3-tile linear chain: (0,0) [E:0] -> (1,0) [W:3, E:0] -> (2,0) [W:3]
  const tiles = [
    { id: 0, q: 0, r: 0, baseDirs: [0], rotation: 0, isSource: true },
    { id: 1, q: 1, r: 0, baseDirs: [0, 3], rotation: 0, isSource: false },
    { id: 2, q: 2, r: 0, baseDirs: [3], rotation: 0, isSource: false }
  ];

  const evalResult = ZenHex.evaluateBoard(tiles);
  assert.equal(evalResult.leaks, 0);
  assert.equal(evalResult.energizedTileCount, 3);
  assert.equal(evalResult.isSolved, true);
});

test('Hint Assistant recommends correct next move towards target', () => {
  const tiles = [
    { id: 0, q: 0, r: 0, baseDirs: [0], rotation: 0, isSource: true },
    { id: 1, q: 1, r: 0, baseDirs: [3], rotation: 2, isSource: false } // Target is 0, current is 2
  ];
  const targets = { 0: 0, 1: 0 };

  const hint = ZenHex.getHint(tiles, targets);
  assert.ok(hint);
  assert.equal(hint.id, 1);
  assert.equal(hint.targetRotation, 0);
});

test('Undo and reset operations accurately preserve and restore board rotations', () => {
  const originalTiles = [
    { id: 0, q: 0, r: 0, baseDirs: [0], rotation: 2 },
    { id: 1, q: 1, r: 0, baseDirs: [3], rotation: 5 }
  ];

  const cloned = ZenHex.cloneBoard(originalTiles);
  assert.equal(cloned[0].rotation, 2);
  assert.equal(cloned[1].rotation, 5);

  // Simulate moves and undo stack
  const undoStack = [];

  // Move 1: rotate tile 0 by 1 step
  ZenHex.rotateTile(cloned[0], 1);
  undoStack.push({ tileId: 0, direction: -1 });
  assert.equal(cloned[0].rotation, 3);

  // Move 2: rotate tile 1 by 1 step
  ZenHex.rotateTile(cloned[1], 1);
  undoStack.push({ tileId: 1, direction: -1 });
  assert.equal(cloned[1].rotation, 0);

  // Undo Move 2
  const undo2 = undoStack.pop();
  ZenHex.rotateTile(cloned.find(t => t.id === undo2.tileId), undo2.direction);
  assert.equal(cloned[1].rotation, 5);

  // Undo Move 1
  const undo1 = undoStack.pop();
  ZenHex.rotateTile(cloned.find(t => t.id === undo1.tileId), undo1.direction);
  assert.equal(cloned[0].rotation, 2);

  // Full reset back to original
  const resetTiles = ZenHex.cloneBoard(originalTiles);
  assert.deepEqual(resetTiles[0].rotation, 2);
  assert.deepEqual(resetTiles[1].rotation, 5);
});

test('All 50 levels in src/levels.js are valid and solve cleanly', () => {
  assert.equal(Levels.PACKS.length, 5);
  assert.equal(Levels.LEVELS.length, 50);

  for (const lvl of Levels.LEVELS) {
    assert.ok(lvl.id >= 1 && lvl.id <= 50);
    assert.ok(lvl.name && lvl.name.length > 0);
    assert.ok(lvl.tiles.length >= 7);
    assert.ok(lvl.parMoves >= 3);

    // Verify solved state
    const testTiles = ZenHex.cloneBoard(lvl.tiles);
    for (const t of testTiles) {
      t.rotation = lvl.targetRotations[t.id];
    }

    const evalResult = ZenHex.evaluateBoard(testTiles);
    assert.equal(evalResult.isSolved, true, `Level ${lvl.id} (${lvl.name}) should be solved at target rotations`);
    assert.equal(evalResult.leaks, 0, `Level ${lvl.id} should have zero leaks`);
  }
});
