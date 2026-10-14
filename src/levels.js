/**
 * ZenHex: 50 Handcrafted and Solver-Verified Levels Across 5 Packs
 * Generated deterministically with verified solutions.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ZenHexLevels = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const PACKS = [
  {
    "id": 1,
    "name": "Dawn Awakening",
    "radius": 1,
    "count": 10,
    "theme": "cyan"
  },
  {
    "id": 2,
    "name": "Emerald Sanctuary",
    "radius": 2,
    "count": 10,
    "theme": "emerald"
  },
  {
    "id": 3,
    "name": "Lotus Temple",
    "radius": 2,
    "count": 10,
    "theme": "amethyst"
  },
  {
    "id": 4,
    "name": "Astral Honeycomb",
    "radius": 3,
    "count": 10,
    "theme": "amber"
  },
  {
    "id": 5,
    "name": "Cosmic Mandala",
    "radius": 3,
    "count": 10,
    "theme": "radiance"
  }
];
  const LEVELS = [
  {
    "id": 1,
    "packId": 1,
    "packName": "Dawn Awakening",
    "name": "First Light",
    "radius": 1,
    "parMoves": 11,
    "tiles": [
      {
        "id": 0,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -1,
        "r": 1,
        "baseDirs": [
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": 0,
        "r": -1,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": 0,
        "r": 0,
        "baseDirs": [
          1,
          3,
          5
        ],
        "rotation": 1,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 4,
        "q": 0,
        "r": 1,
        "baseDirs": [
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": 1,
        "r": -1,
        "baseDirs": [
          1,
          2,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": 1,
        "r": 0,
        "baseDirs": [
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  {
    "id": 2,
    "packId": 1,
    "packName": "Dawn Awakening",
    "name": "Sunburst",
    "radius": 1,
    "parMoves": 9,
    "tiles": [
      {
        "id": 0,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -1,
        "r": 1,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": 0,
        "r": -1,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          3,
          4,
          5
        ],
        "rotation": 4,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 4,
        "q": 0,
        "r": 1,
        "baseDirs": [
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": 1,
        "r": -1,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": 1,
        "r": 0,
        "baseDirs": [
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  {
    "id": 3,
    "packId": 1,
    "packName": "Dawn Awakening",
    "name": "Morning Ray",
    "radius": 1,
    "parMoves": 16,
    "tiles": [
      {
        "id": 0,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -1,
        "r": 1,
        "baseDirs": [
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": 0,
        "r": -1,
        "baseDirs": [
          0
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2,
          3,
          5
        ],
        "rotation": 3,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 4,
        "q": 0,
        "r": 1,
        "baseDirs": [
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": 1,
        "r": -1,
        "baseDirs": [
          1,
          2,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": 1,
        "r": 0,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  {
    "id": 4,
    "packId": 1,
    "packName": "Dawn Awakening",
    "name": "Triforce Hex",
    "radius": 1,
    "parMoves": 15,
    "tiles": [
      {
        "id": 0,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -1,
        "r": 1,
        "baseDirs": [
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": 0,
        "r": -1,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          1,
          3,
          4
        ],
        "rotation": 1,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 4,
        "q": 0,
        "r": 1,
        "baseDirs": [
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": 1,
        "r": -1,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": 1,
        "r": 0,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  {
    "id": 5,
    "packId": 1,
    "packName": "Dawn Awakening",
    "name": "Zenith",
    "radius": 1,
    "parMoves": 14,
    "tiles": [
      {
        "id": 0,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -1,
        "r": 1,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": 0,
        "r": -1,
        "baseDirs": [
          0
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          2,
          3
        ],
        "rotation": 4,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 4,
        "q": 0,
        "r": 1,
        "baseDirs": [
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": 1,
        "r": -1,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": 1,
        "r": 0,
        "baseDirs": [
          2,
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  {
    "id": 6,
    "packId": 1,
    "packName": "Dawn Awakening",
    "name": "Solar Loop",
    "radius": 1,
    "parMoves": 13,
    "tiles": [
      {
        "id": 0,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -1,
        "r": 1,
        "baseDirs": [
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": 0,
        "r": -1,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2,
          3,
          4
        ],
        "rotation": 3,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 4,
        "q": 0,
        "r": 1,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": 1,
        "r": -1,
        "baseDirs": [
          3
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": 1,
        "r": 0,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  {
    "id": 7,
    "packId": 1,
    "packName": "Dawn Awakening",
    "name": "Chakra Ring",
    "radius": 1,
    "parMoves": 10,
    "tiles": [
      {
        "id": 0,
        "q": -1,
        "r": 0,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -1,
        "r": 1,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": 0,
        "r": -1,
        "baseDirs": [
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          2,
          5
        ],
        "rotation": 1,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 4,
        "q": 0,
        "r": 1,
        "baseDirs": [
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": 1,
        "r": -1,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": 1,
        "r": 0,
        "baseDirs": [
          2,
          3,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  {
    "id": 8,
    "packId": 1,
    "packName": "Dawn Awakening",
    "name": "Aura Pulse",
    "radius": 1,
    "parMoves": 15,
    "tiles": [
      {
        "id": 0,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -1,
        "r": 1,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": 0,
        "r": -1,
        "baseDirs": [
          1
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          2,
          3,
          4,
          5
        ],
        "rotation": 5,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 4,
        "q": 0,
        "r": 1,
        "baseDirs": [
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": 1,
        "r": -1,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": 1,
        "r": 0,
        "baseDirs": [
          2,
          3,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  {
    "id": 9,
    "packId": 1,
    "packName": "Dawn Awakening",
    "name": "Prism Dawn",
    "radius": 1,
    "parMoves": 14,
    "tiles": [
      {
        "id": 0,
        "q": -1,
        "r": 0,
        "baseDirs": [
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -1,
        "r": 1,
        "baseDirs": [
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": 0,
        "r": -1,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2,
          4,
          5
        ],
        "rotation": 3,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 4,
        "q": 0,
        "r": 1,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": 1,
        "r": -1,
        "baseDirs": [
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": 1,
        "r": 0,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  {
    "id": 10,
    "packId": 1,
    "packName": "Dawn Awakening",
    "name": "Harmonic Ring",
    "radius": 1,
    "parMoves": 12,
    "tiles": [
      {
        "id": 0,
        "q": -1,
        "r": 0,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -1,
        "r": 1,
        "baseDirs": [
          0,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": 0,
        "r": -1,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": 0,
        "r": 0,
        "baseDirs": [
          1,
          2,
          4
        ],
        "rotation": 2,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 4,
        "q": 0,
        "r": 1,
        "baseDirs": [
          3,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": 1,
        "r": -1,
        "baseDirs": [
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": 1,
        "r": 0,
        "baseDirs": [
          2
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  {
    "id": 11,
    "packId": 2,
    "packName": "Emerald Sanctuary",
    "name": "Breeze Conduits",
    "radius": 2,
    "parMoves": 40,
    "tiles": [
      {
        "id": 0,
        "q": -2,
        "r": 0,
        "baseDirs": [
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 1,
        "q": -2,
        "r": 1,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -2,
        "r": 2,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -1,
        "r": -1,
        "baseDirs": [
          2,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -1,
        "r": 1,
        "baseDirs": [
          0,
          3,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -1,
        "r": 2,
        "baseDirs": [
          0,
          3,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": 0,
        "r": -2,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": 0,
        "r": -1,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": 0,
        "r": 0,
        "baseDirs": [
          2,
          3,
          4
        ],
        "rotation": 4,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 10,
        "q": 0,
        "r": 1,
        "baseDirs": [
          1,
          2,
          3,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": 0,
        "r": 2,
        "baseDirs": [
          3,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": 1,
        "r": -2,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": 1,
        "r": -1,
        "baseDirs": [
          0,
          3,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": 1,
        "r": 0,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 1,
        "r": 1,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 2,
        "r": -2,
        "baseDirs": [
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 17,
        "q": 2,
        "r": -1,
        "baseDirs": [
          1,
          3,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 2,
        "r": 0,
        "baseDirs": [
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    }
  },
  {
    "id": 12,
    "packId": 2,
    "packName": "Emerald Sanctuary",
    "name": "Forest Gateway",
    "radius": 2,
    "parMoves": 37,
    "tiles": [
      {
        "id": 0,
        "q": -2,
        "r": 0,
        "baseDirs": [
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 1,
        "q": -2,
        "r": 1,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -2,
        "r": 2,
        "baseDirs": [
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 3,
        "q": -1,
        "r": -1,
        "baseDirs": [
          0,
          2,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -1,
        "r": 1,
        "baseDirs": [
          3,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -1,
        "r": 2,
        "baseDirs": [
          0
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 7,
        "q": 0,
        "r": -2,
        "baseDirs": [
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 8,
        "q": 0,
        "r": -1,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2,
          3,
          4
        ],
        "rotation": 5,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 10,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          1,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": 0,
        "r": 2,
        "baseDirs": [
          3,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": 1,
        "r": -2,
        "baseDirs": [
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 13,
        "q": 1,
        "r": -1,
        "baseDirs": [
          0,
          1,
          4,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": 1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          3,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 1,
        "r": 1,
        "baseDirs": [
          2,
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 2,
        "r": -2,
        "baseDirs": [
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 17,
        "q": 2,
        "r": -1,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 2,
        "r": 0,
        "baseDirs": [
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    }
  },
  {
    "id": 13,
    "packId": 2,
    "packName": "Emerald Sanctuary",
    "name": "Jade Ripple",
    "radius": 2,
    "parMoves": 38,
    "tiles": [
      {
        "id": 0,
        "q": -2,
        "r": 0,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -2,
        "r": 1,
        "baseDirs": [
          0,
          1,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -2,
        "r": 2,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -1,
        "r": -1,
        "baseDirs": [
          1,
          2,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -1,
        "r": 0,
        "baseDirs": [
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -1,
        "r": 1,
        "baseDirs": [
          0,
          1,
          3,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -1,
        "r": 2,
        "baseDirs": [
          0,
          3,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": 0,
        "r": -2,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": 0,
        "r": -1,
        "baseDirs": [
          0
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2,
          5
        ],
        "rotation": 1,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 10,
        "q": 0,
        "r": 1,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": 0,
        "r": 2,
        "baseDirs": [
          3,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": 1,
        "r": -2,
        "baseDirs": [
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 13,
        "q": 1,
        "r": -1,
        "baseDirs": [
          0,
          1,
          2,
          3
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": 1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 1,
        "r": 1,
        "baseDirs": [
          2,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 2,
        "r": -2,
        "baseDirs": [
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 17,
        "q": 2,
        "r": -1,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 2,
        "r": 0,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    }
  },
  {
    "id": 14,
    "packId": 2,
    "packName": "Emerald Sanctuary",
    "name": "Spruce Spiral",
    "radius": 2,
    "parMoves": 34,
    "tiles": [
      {
        "id": 0,
        "q": -2,
        "r": 0,
        "baseDirs": [
          0
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 1,
        "q": -2,
        "r": 1,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -2,
        "r": 2,
        "baseDirs": [
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 3,
        "q": -1,
        "r": -1,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -1,
        "r": 0,
        "baseDirs": [
          3,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -1,
        "r": 1,
        "baseDirs": [
          0,
          1,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -1,
        "r": 2,
        "baseDirs": [
          0,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": 0,
        "r": -2,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": 0,
        "r": -1,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": 0,
        "r": 0,
        "baseDirs": [
          5
        ],
        "rotation": 1,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 10,
        "q": 0,
        "r": 1,
        "baseDirs": [
          1,
          2,
          3,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": 0,
        "r": 2,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": 1,
        "r": -2,
        "baseDirs": [
          0,
          1,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": 1,
        "r": -1,
        "baseDirs": [
          1,
          2,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": 1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 1,
        "r": 1,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 2,
        "r": -2,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 2,
        "r": -1,
        "baseDirs": [
          1,
          2,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 2,
        "r": 0,
        "baseDirs": [
          2,
          3,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    }
  },
  {
    "id": 15,
    "packId": 2,
    "packName": "Emerald Sanctuary",
    "name": "Emerald Ring",
    "radius": 2,
    "parMoves": 34,
    "tiles": [
      {
        "id": 0,
        "q": -2,
        "r": 0,
        "baseDirs": [
          0
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 1,
        "q": -2,
        "r": 1,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -2,
        "r": 2,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -1,
        "r": -1,
        "baseDirs": [
          0,
          1,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          3,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -1,
        "r": 1,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -1,
        "r": 2,
        "baseDirs": [
          0,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": 0,
        "r": -2,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": 0,
        "r": -1,
        "baseDirs": [
          2,
          3,
          4,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": 0,
        "r": 0,
        "baseDirs": [
          3
        ],
        "rotation": 2,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 10,
        "q": 0,
        "r": 1,
        "baseDirs": [
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": 0,
        "r": 2,
        "baseDirs": [
          3
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 12,
        "q": 1,
        "r": -2,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": 1,
        "r": -1,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": 1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 1,
        "r": 1,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 2,
        "r": -2,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 2,
        "r": -1,
        "baseDirs": [
          1
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 18,
        "q": 2,
        "r": 0,
        "baseDirs": [
          2,
          3,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    }
  },
  {
    "id": 16,
    "packId": 2,
    "packName": "Emerald Sanctuary",
    "name": "Verdant Flow",
    "radius": 2,
    "parMoves": 34,
    "tiles": [
      {
        "id": 0,
        "q": -2,
        "r": 0,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -2,
        "r": 1,
        "baseDirs": [
          0,
          1,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -2,
        "r": 2,
        "baseDirs": [
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 3,
        "q": -1,
        "r": -1,
        "baseDirs": [
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 4,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          2,
          3,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -1,
        "r": 1,
        "baseDirs": [
          0,
          1,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -1,
        "r": 2,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": 0,
        "r": -2,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": 0,
        "r": -1,
        "baseDirs": [
          2,
          4,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          1,
          3
        ],
        "rotation": 3,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 10,
        "q": 0,
        "r": 1,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": 0,
        "r": 2,
        "baseDirs": [
          3
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 12,
        "q": 1,
        "r": -2,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": 1,
        "r": -1,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": 1,
        "r": 0,
        "baseDirs": [
          1,
          3,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 1,
        "r": 1,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 2,
        "r": -2,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 2,
        "r": -1,
        "baseDirs": [
          1,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 2,
        "r": 0,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    }
  },
  {
    "id": 17,
    "packId": 2,
    "packName": "Emerald Sanctuary",
    "name": "Vine Lattice",
    "radius": 2,
    "parMoves": 33,
    "tiles": [
      {
        "id": 0,
        "q": -2,
        "r": 0,
        "baseDirs": [
          0
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 1,
        "q": -2,
        "r": 1,
        "baseDirs": [
          0,
          1,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -2,
        "r": 2,
        "baseDirs": [
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 3,
        "q": -1,
        "r": -1,
        "baseDirs": [
          0
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 4,
        "q": -1,
        "r": 0,
        "baseDirs": [
          1,
          2,
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -1,
        "r": 1,
        "baseDirs": [
          1,
          3,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -1,
        "r": 2,
        "baseDirs": [
          0,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": 0,
        "r": -2,
        "baseDirs": [
          1
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 8,
        "q": 0,
        "r": -1,
        "baseDirs": [
          3,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2,
          5
        ],
        "rotation": 4,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 10,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          1,
          2,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": 0,
        "r": 2,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": 1,
        "r": -2,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": 1,
        "r": -1,
        "baseDirs": [
          0,
          1,
          2,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": 1,
        "r": 0,
        "baseDirs": [
          1,
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 1,
        "r": 1,
        "baseDirs": [
          3,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 2,
        "r": -2,
        "baseDirs": [
          1
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 17,
        "q": 2,
        "r": -1,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 2,
        "r": 0,
        "baseDirs": [
          2
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    }
  },
  {
    "id": 18,
    "packId": 2,
    "packName": "Emerald Sanctuary",
    "name": "Spring Well",
    "radius": 2,
    "parMoves": 30,
    "tiles": [
      {
        "id": 0,
        "q": -2,
        "r": 0,
        "baseDirs": [
          0,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -2,
        "r": 1,
        "baseDirs": [
          0,
          1,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -2,
        "r": 2,
        "baseDirs": [
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 3,
        "q": -1,
        "r": -1,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -1,
        "r": 0,
        "baseDirs": [
          2,
          3,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -1,
        "r": 1,
        "baseDirs": [
          3,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -1,
        "r": 2,
        "baseDirs": [
          0,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": 0,
        "r": -2,
        "baseDirs": [
          1
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 8,
        "q": 0,
        "r": -1,
        "baseDirs": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "rotation": 0,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          2,
          4,
          5
        ],
        "rotation": 3,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 10,
        "q": 0,
        "r": 1,
        "baseDirs": [
          1,
          2,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": 0,
        "r": 2,
        "baseDirs": [
          3,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": 1,
        "r": -2,
        "baseDirs": [
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 13,
        "q": 1,
        "r": -1,
        "baseDirs": [
          0,
          1,
          2,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": 1,
        "r": 0,
        "baseDirs": [
          1,
          2,
          3,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 1,
        "r": 1,
        "baseDirs": [
          2,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 2,
        "r": -2,
        "baseDirs": [
          1
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 17,
        "q": 2,
        "r": -1,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 2,
        "r": 0,
        "baseDirs": [
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    }
  },
  {
    "id": 19,
    "packId": 2,
    "packName": "Emerald Sanctuary",
    "name": "Moss Pathway",
    "radius": 2,
    "parMoves": 33,
    "tiles": [
      {
        "id": 0,
        "q": -2,
        "r": 0,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -2,
        "r": 1,
        "baseDirs": [
          1,
          4,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -2,
        "r": 2,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -1,
        "r": -1,
        "baseDirs": [
          1
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 4,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "rotation": 0,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -1,
        "r": 1,
        "baseDirs": [
          0,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -1,
        "r": 2,
        "baseDirs": [
          0,
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": 0,
        "r": -2,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": 0,
        "r": -1,
        "baseDirs": [
          1,
          2,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": 0,
        "r": 0,
        "baseDirs": [
          2,
          3,
          4
        ],
        "rotation": 3,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 10,
        "q": 0,
        "r": 1,
        "baseDirs": [
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": 0,
        "r": 2,
        "baseDirs": [
          3,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": 1,
        "r": -2,
        "baseDirs": [
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 13,
        "q": 1,
        "r": -1,
        "baseDirs": [
          0,
          1,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": 1,
        "r": 0,
        "baseDirs": [
          1,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 1,
        "r": 1,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 2,
        "r": -2,
        "baseDirs": [
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 17,
        "q": 2,
        "r": -1,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 2,
        "r": 0,
        "baseDirs": [
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    }
  },
  {
    "id": 20,
    "packId": 2,
    "packName": "Emerald Sanctuary",
    "name": "Canopy Sanctum",
    "radius": 2,
    "parMoves": 31,
    "tiles": [
      {
        "id": 0,
        "q": -2,
        "r": 0,
        "baseDirs": [
          0
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 1,
        "q": -2,
        "r": 1,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -2,
        "r": 2,
        "baseDirs": [
          0,
          4,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -1,
        "r": -1,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -1,
        "r": 0,
        "baseDirs": [
          1,
          2,
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -1,
        "r": 1,
        "baseDirs": [
          1,
          2,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -1,
        "r": 2,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": 0,
        "r": -2,
        "baseDirs": [
          0
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 8,
        "q": 0,
        "r": -1,
        "baseDirs": [
          0,
          1,
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": 0,
        "r": 0,
        "baseDirs": [
          4
        ],
        "rotation": 1,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 10,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": 0,
        "r": 2,
        "baseDirs": [
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "emerald"
      },
      {
        "id": 12,
        "q": 1,
        "r": -2,
        "baseDirs": [
          0,
          1,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": 1,
        "r": -1,
        "baseDirs": [
          0,
          1,
          3,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": 1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 1,
        "r": 1,
        "baseDirs": [
          2,
          3,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 2,
        "r": -2,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 2,
        "r": -1,
        "baseDirs": [
          1,
          3,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 2,
        "r": 0,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    }
  },
  {
    "id": 21,
    "packId": 3,
    "packName": "Lotus Temple",
    "name": "Petal Array",
    "radius": 2,
    "parMoves": 34,
    "tiles": [
      {
        "id": 0,
        "q": -2,
        "r": 0,
        "baseDirs": [
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 1,
        "q": -2,
        "r": 1,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -2,
        "r": 2,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -1,
        "r": -1,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -1,
        "r": 0,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -1,
        "r": 1,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -1,
        "r": 2,
        "baseDirs": [
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 7,
        "q": 0,
        "r": -2,
        "baseDirs": [
          1
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 8,
        "q": 0,
        "r": -1,
        "baseDirs": [
          1,
          3,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          1,
          4,
          5
        ],
        "rotation": 2,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 10,
        "q": 0,
        "r": 1,
        "baseDirs": [
          1,
          2,
          3,
          4,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": 0,
        "r": 2,
        "baseDirs": [
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 12,
        "q": 1,
        "r": -2,
        "baseDirs": [
          0
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 13,
        "q": 1,
        "r": -1,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": 1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2,
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 1,
        "r": 1,
        "baseDirs": [
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 16,
        "q": 2,
        "r": -2,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 2,
        "r": -1,
        "baseDirs": [
          1,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 2,
        "r": 0,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    }
  },
  {
    "id": 22,
    "packId": 3,
    "packName": "Lotus Temple",
    "name": "Lotus Core",
    "radius": 2,
    "parMoves": 29,
    "tiles": [
      {
        "id": 0,
        "q": -2,
        "r": 0,
        "baseDirs": [
          1
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 1,
        "q": -2,
        "r": 1,
        "baseDirs": [
          1,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -2,
        "r": 2,
        "baseDirs": [
          0,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -1,
        "r": -1,
        "baseDirs": [
          0
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 4,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -1,
        "r": 1,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -1,
        "r": 2,
        "baseDirs": [
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 7,
        "q": 0,
        "r": -2,
        "baseDirs": [
          0
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 8,
        "q": 0,
        "r": -1,
        "baseDirs": [
          0,
          3,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          3
        ],
        "rotation": 1,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 10,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": 0,
        "r": 2,
        "baseDirs": [
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 12,
        "q": 1,
        "r": -2,
        "baseDirs": [
          0,
          1,
          2,
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": 1,
        "r": -1,
        "baseDirs": [
          1,
          3,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": 1,
        "r": 0,
        "baseDirs": [
          0,
          2,
          3,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 1,
        "r": 1,
        "baseDirs": [
          2,
          3,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 2,
        "r": -2,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 2,
        "r": -1,
        "baseDirs": [
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 18,
        "q": 2,
        "r": 0,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    }
  },
  {
    "id": 23,
    "packId": 3,
    "packName": "Lotus Temple",
    "name": "Serene Spire",
    "radius": 2,
    "parMoves": 31,
    "tiles": [
      {
        "id": 0,
        "q": -2,
        "r": 0,
        "baseDirs": [
          0,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -2,
        "r": 1,
        "baseDirs": [
          1
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 2,
        "q": -2,
        "r": 2,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -1,
        "r": -1,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          3,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -1,
        "r": 1,
        "baseDirs": [
          1,
          2,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -1,
        "r": 2,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": 0,
        "r": -2,
        "baseDirs": [
          0
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 8,
        "q": 0,
        "r": -1,
        "baseDirs": [
          1,
          2,
          3,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          2,
          3,
          4
        ],
        "rotation": 4,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 10,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": 0,
        "r": 2,
        "baseDirs": [
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 12,
        "q": 1,
        "r": -2,
        "baseDirs": [
          1,
          2,
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": 1,
        "r": -1,
        "baseDirs": [
          1,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": 1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          3,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 1,
        "r": 1,
        "baseDirs": [
          2,
          3,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 2,
        "r": -2,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 2,
        "r": -1,
        "baseDirs": [
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 18,
        "q": 2,
        "r": 0,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    }
  },
  {
    "id": 24,
    "packId": 3,
    "packName": "Lotus Temple",
    "name": "Chime Spiral",
    "radius": 2,
    "parMoves": 37,
    "tiles": [
      {
        "id": 0,
        "q": -2,
        "r": 0,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -2,
        "r": 1,
        "baseDirs": [
          1,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -2,
        "r": 2,
        "baseDirs": [
          0,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -1,
        "r": -1,
        "baseDirs": [
          0,
          2,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -1,
        "r": 1,
        "baseDirs": [
          0,
          1,
          2,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -1,
        "r": 2,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": 0,
        "r": -2,
        "baseDirs": [
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 8,
        "q": 0,
        "r": -1,
        "baseDirs": [
          0,
          2,
          3,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": 0,
        "r": 0,
        "baseDirs": [
          1,
          2,
          3,
          5
        ],
        "rotation": 4,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 10,
        "q": 0,
        "r": 1,
        "baseDirs": [
          1,
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": 0,
        "r": 2,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": 1,
        "r": -2,
        "baseDirs": [
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 13,
        "q": 1,
        "r": -1,
        "baseDirs": [
          0,
          1,
          2,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": 1,
        "r": 0,
        "baseDirs": [
          1,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 1,
        "r": 1,
        "baseDirs": [
          2,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 2,
        "r": -2,
        "baseDirs": [
          1
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 17,
        "q": 2,
        "r": -1,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 2,
        "r": 0,
        "baseDirs": [
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    }
  },
  {
    "id": 25,
    "packId": 3,
    "packName": "Lotus Temple",
    "name": "Temple Crest",
    "radius": 2,
    "parMoves": 32,
    "tiles": [
      {
        "id": 0,
        "q": -2,
        "r": 0,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -2,
        "r": 1,
        "baseDirs": [
          1,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -2,
        "r": 2,
        "baseDirs": [
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 3,
        "q": -1,
        "r": -1,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -1,
        "r": 0,
        "baseDirs": [
          1,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -1,
        "r": 1,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -1,
        "r": 2,
        "baseDirs": [
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 7,
        "q": 0,
        "r": -2,
        "baseDirs": [
          0
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 8,
        "q": 0,
        "r": -1,
        "baseDirs": [
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": 0,
        "r": 0,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 5,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 10,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          2,
          3,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": 0,
        "r": 2,
        "baseDirs": [
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 12,
        "q": 1,
        "r": -2,
        "baseDirs": [
          0,
          1,
          2,
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": 1,
        "r": -1,
        "baseDirs": [
          0,
          1,
          2,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": 1,
        "r": 0,
        "baseDirs": [
          1,
          2,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 1,
        "r": 1,
        "baseDirs": [
          2,
          3,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 2,
        "r": -2,
        "baseDirs": [
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 17,
        "q": 2,
        "r": -1,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 2,
        "r": 0,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    }
  },
  {
    "id": 26,
    "packId": 3,
    "packName": "Lotus Temple",
    "name": "Mystic Petals",
    "radius": 2,
    "parMoves": 36,
    "tiles": [
      {
        "id": 0,
        "q": -2,
        "r": 0,
        "baseDirs": [
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 1,
        "q": -2,
        "r": 1,
        "baseDirs": [
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 2,
        "q": -2,
        "r": 2,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -1,
        "r": -1,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -1,
        "r": 1,
        "baseDirs": [
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -1,
        "r": 2,
        "baseDirs": [
          0,
          3,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": 0,
        "r": -2,
        "baseDirs": [
          0
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 8,
        "q": 0,
        "r": -1,
        "baseDirs": [
          0,
          3,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          3
        ],
        "rotation": 1,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 10,
        "q": 0,
        "r": 1,
        "baseDirs": [
          2,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": 0,
        "r": 2,
        "baseDirs": [
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 12,
        "q": 1,
        "r": -2,
        "baseDirs": [
          0,
          2,
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": 1,
        "r": -1,
        "baseDirs": [
          0,
          1,
          3,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": 1,
        "r": 0,
        "baseDirs": [
          1,
          2,
          3,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 1,
        "r": 1,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 2,
        "r": -2,
        "baseDirs": [
          1,
          2,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 2,
        "r": -1,
        "baseDirs": [
          1,
          3,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 2,
        "r": 0,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    }
  },
  {
    "id": 27,
    "packId": 3,
    "packName": "Lotus Temple",
    "name": "Zenith Loop",
    "radius": 2,
    "parMoves": 36,
    "tiles": [
      {
        "id": 0,
        "q": -2,
        "r": 0,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -2,
        "r": 1,
        "baseDirs": [
          1,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -2,
        "r": 2,
        "baseDirs": [
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 3,
        "q": -1,
        "r": -1,
        "baseDirs": [
          0,
          1,
          2,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -1,
        "r": 1,
        "baseDirs": [
          0,
          1,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -1,
        "r": 2,
        "baseDirs": [
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 7,
        "q": 0,
        "r": -2,
        "baseDirs": [
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 8,
        "q": 0,
        "r": -1,
        "baseDirs": [
          0,
          1,
          2,
          3
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          3,
          4
        ],
        "rotation": 2,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 10,
        "q": 0,
        "r": 1,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": 0,
        "r": 2,
        "baseDirs": [
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 12,
        "q": 1,
        "r": -2,
        "baseDirs": [
          0
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 13,
        "q": 1,
        "r": -1,
        "baseDirs": [
          0,
          1,
          3,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": 1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          3,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 1,
        "r": 1,
        "baseDirs": [
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 16,
        "q": 2,
        "r": -2,
        "baseDirs": [
          1,
          2,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 2,
        "r": -1,
        "baseDirs": [
          1,
          3,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 2,
        "r": 0,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    }
  },
  {
    "id": 28,
    "packId": 3,
    "packName": "Lotus Temple",
    "name": "Sanctuary Bells",
    "radius": 2,
    "parMoves": 34,
    "tiles": [
      {
        "id": 0,
        "q": -2,
        "r": 0,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -2,
        "r": 1,
        "baseDirs": [
          1,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -2,
        "r": 2,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -1,
        "r": -1,
        "baseDirs": [
          2,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -1,
        "r": 1,
        "baseDirs": [
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -1,
        "r": 2,
        "baseDirs": [
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 7,
        "q": 0,
        "r": -2,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": 0,
        "r": -1,
        "baseDirs": [
          1,
          2,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "rotation": 0,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 10,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          1,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": 0,
        "r": 2,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": 1,
        "r": -2,
        "baseDirs": [
          0,
          1,
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": 1,
        "r": -1,
        "baseDirs": [
          0,
          1,
          2,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": 1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2,
          3,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 1,
        "r": 1,
        "baseDirs": [
          2,
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 2,
        "r": -2,
        "baseDirs": [
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 17,
        "q": 2,
        "r": -1,
        "baseDirs": [
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 18,
        "q": 2,
        "r": 0,
        "baseDirs": [
          3
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    }
  },
  {
    "id": 29,
    "packId": 3,
    "packName": "Lotus Temple",
    "name": "Sacred Geometric",
    "radius": 2,
    "parMoves": 37,
    "tiles": [
      {
        "id": 0,
        "q": -2,
        "r": 0,
        "baseDirs": [
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 1,
        "q": -2,
        "r": 1,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -2,
        "r": 2,
        "baseDirs": [
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 3,
        "q": -1,
        "r": -1,
        "baseDirs": [
          0,
          2,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -1,
        "r": 0,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -1,
        "r": 1,
        "baseDirs": [
          1,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -1,
        "r": 2,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": 0,
        "r": -2,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": 0,
        "r": -1,
        "baseDirs": [
          0,
          1,
          3,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": 0,
        "r": 0,
        "baseDirs": [
          1,
          2,
          4,
          5
        ],
        "rotation": 3,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 10,
        "q": 0,
        "r": 1,
        "baseDirs": [
          2,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": 0,
        "r": 2,
        "baseDirs": [
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 12,
        "q": 1,
        "r": -2,
        "baseDirs": [
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 13,
        "q": 1,
        "r": -1,
        "baseDirs": [
          2,
          3,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": 1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 1,
        "r": 1,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 2,
        "r": -2,
        "baseDirs": [
          2
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 17,
        "q": 2,
        "r": -1,
        "baseDirs": [
          1
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 18,
        "q": 2,
        "r": 0,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    }
  },
  {
    "id": 30,
    "packId": 3,
    "packName": "Lotus Temple",
    "name": "Lotus Nirvana",
    "radius": 2,
    "parMoves": 30,
    "tiles": [
      {
        "id": 0,
        "q": -2,
        "r": 0,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -2,
        "r": 1,
        "baseDirs": [
          0,
          1,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -2,
        "r": 2,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -1,
        "r": -1,
        "baseDirs": [
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 4,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -1,
        "r": 1,
        "baseDirs": [
          0,
          1,
          3,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -1,
        "r": 2,
        "baseDirs": [
          3,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": 0,
        "r": -2,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": 0,
        "r": -1,
        "baseDirs": [
          1,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": 0,
        "r": 0,
        "baseDirs": [
          2,
          3,
          4
        ],
        "rotation": 4,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 10,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          2,
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": 0,
        "r": 2,
        "baseDirs": [
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amethyst"
      },
      {
        "id": 12,
        "q": 1,
        "r": -2,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": 1,
        "r": -1,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": 1,
        "r": 0,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 1,
        "r": 1,
        "baseDirs": [
          2,
          3,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 2,
        "r": -2,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 2,
        "r": -1,
        "baseDirs": [
          1,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 2,
        "r": 0,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    }
  },
  {
    "id": 31,
    "packId": 4,
    "packName": "Astral Honeycomb",
    "name": "Starlight Stream",
    "radius": 3,
    "parMoves": 77,
    "tiles": [
      {
        "id": 0,
        "q": -3,
        "r": 0,
        "baseDirs": [
          0
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 1,
        "q": -3,
        "r": 1,
        "baseDirs": [
          0,
          1,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -3,
        "r": 2,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -3,
        "r": 3,
        "baseDirs": [
          0,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -2,
        "r": -1,
        "baseDirs": [
          0,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -2,
        "r": 0,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -2,
        "r": 1,
        "baseDirs": [
          3,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": -2,
        "r": 2,
        "baseDirs": [
          0,
          1,
          2,
          3,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": -2,
        "r": 3,
        "baseDirs": [
          0,
          3,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": -1,
        "r": -2,
        "baseDirs": [
          2,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 10,
        "q": -1,
        "r": -1,
        "baseDirs": [
          0,
          3,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": -1,
        "r": 0,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": -1,
        "r": 1,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": -1,
        "r": 2,
        "baseDirs": [
          2,
          3,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": -1,
        "r": 3,
        "baseDirs": [
          3,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 0,
        "r": -3,
        "baseDirs": [
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 16,
        "q": 0,
        "r": -2,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 0,
        "r": -1,
        "baseDirs": [
          3,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 0,
        "r": 0,
        "baseDirs": [
          5
        ],
        "rotation": 1,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 19,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 20,
        "q": 0,
        "r": 2,
        "baseDirs": [
          2,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 21,
        "q": 0,
        "r": 3,
        "baseDirs": [
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 22,
        "q": 1,
        "r": -3,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 23,
        "q": 1,
        "r": -2,
        "baseDirs": [
          0,
          2,
          3,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 24,
        "q": 1,
        "r": -1,
        "baseDirs": [
          0,
          1,
          2,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 25,
        "q": 1,
        "r": 0,
        "baseDirs": [
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 26,
        "q": 1,
        "r": 1,
        "baseDirs": [
          0,
          1,
          2,
          3,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 27,
        "q": 1,
        "r": 2,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 28,
        "q": 2,
        "r": -3,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 29,
        "q": 2,
        "r": -2,
        "baseDirs": [
          0,
          2,
          3,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 30,
        "q": 2,
        "r": -1,
        "baseDirs": [
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 31,
        "q": 2,
        "r": 0,
        "baseDirs": [
          0,
          2,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 32,
        "q": 2,
        "r": 1,
        "baseDirs": [
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 33,
        "q": 3,
        "r": -3,
        "baseDirs": [
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 34,
        "q": 3,
        "r": -2,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 35,
        "q": 3,
        "r": -1,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 36,
        "q": 3,
        "r": 0,
        "baseDirs": [
          3
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0
    }
  },
  {
    "id": 32,
    "packId": 4,
    "packName": "Astral Honeycomb",
    "name": "Orion Circuit",
    "radius": 3,
    "parMoves": 74,
    "tiles": [
      {
        "id": 0,
        "q": -3,
        "r": 0,
        "baseDirs": [
          0,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -3,
        "r": 1,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -3,
        "r": 2,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -3,
        "r": 3,
        "baseDirs": [
          0,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -2,
        "r": -1,
        "baseDirs": [
          2,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -2,
        "r": 0,
        "baseDirs": [
          0,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -2,
        "r": 1,
        "baseDirs": [
          1,
          2,
          3,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": -2,
        "r": 2,
        "baseDirs": [
          0,
          2,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": -2,
        "r": 3,
        "baseDirs": [
          0,
          3,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": -1,
        "r": -2,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 10,
        "q": -1,
        "r": -1,
        "baseDirs": [
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": -1,
        "r": 0,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": -1,
        "r": 1,
        "baseDirs": [
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": -1,
        "r": 2,
        "baseDirs": [
          2,
          3,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": -1,
        "r": 3,
        "baseDirs": [
          3,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 0,
        "r": -3,
        "baseDirs": [
          0
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 16,
        "q": 0,
        "r": -2,
        "baseDirs": [
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 0,
        "r": -1,
        "baseDirs": [
          1,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 0,
        "r": 0,
        "baseDirs": [
          1,
          4,
          5
        ],
        "rotation": 3,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 19,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          1,
          2,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 20,
        "q": 0,
        "r": 2,
        "baseDirs": [
          1,
          2,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 21,
        "q": 0,
        "r": 3,
        "baseDirs": [
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 22,
        "q": 1,
        "r": -3,
        "baseDirs": [
          0,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 23,
        "q": 1,
        "r": -2,
        "baseDirs": [
          1,
          2,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 24,
        "q": 1,
        "r": -1,
        "baseDirs": [
          0,
          2,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 25,
        "q": 1,
        "r": 0,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 26,
        "q": 1,
        "r": 1,
        "baseDirs": [
          0,
          1,
          2,
          3
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 27,
        "q": 1,
        "r": 2,
        "baseDirs": [
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 28,
        "q": 2,
        "r": -3,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 29,
        "q": 2,
        "r": -2,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 30,
        "q": 2,
        "r": -1,
        "baseDirs": [
          0,
          3,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 31,
        "q": 2,
        "r": 0,
        "baseDirs": [
          0,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 32,
        "q": 2,
        "r": 1,
        "baseDirs": [
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 33,
        "q": 3,
        "r": -3,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 34,
        "q": 3,
        "r": -2,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 35,
        "q": 3,
        "r": -1,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 36,
        "q": 3,
        "r": 0,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0
    }
  },
  {
    "id": 33,
    "packId": 4,
    "packName": "Astral Honeycomb",
    "name": "Nova Branch",
    "radius": 3,
    "parMoves": 64,
    "tiles": [
      {
        "id": 0,
        "q": -3,
        "r": 0,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -3,
        "r": 1,
        "baseDirs": [
          0,
          1,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -3,
        "r": 2,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -3,
        "r": 3,
        "baseDirs": [
          0,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -2,
        "r": -1,
        "baseDirs": [
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 5,
        "q": -2,
        "r": 0,
        "baseDirs": [
          1,
          2,
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -2,
        "r": 1,
        "baseDirs": [
          1,
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": -2,
        "r": 2,
        "baseDirs": [
          1,
          2,
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": -2,
        "r": 3,
        "baseDirs": [
          3,
          4,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": -1,
        "r": -2,
        "baseDirs": [
          0,
          2,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 10,
        "q": -1,
        "r": -1,
        "baseDirs": [
          1
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": -1,
        "r": 1,
        "baseDirs": [
          1,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": -1,
        "r": 2,
        "baseDirs": [
          1,
          2,
          4,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": -1,
        "r": 3,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 0,
        "r": -3,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 0,
        "r": -2,
        "baseDirs": [
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 0,
        "r": -1,
        "baseDirs": [
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 0,
        "r": 0,
        "baseDirs": [
          1,
          3,
          5
        ],
        "rotation": 4,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 19,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          1,
          2,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 20,
        "q": 0,
        "r": 2,
        "baseDirs": [
          0,
          1,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 21,
        "q": 0,
        "r": 3,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 22,
        "q": 1,
        "r": -3,
        "baseDirs": [
          0,
          1,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 23,
        "q": 1,
        "r": -2,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 24,
        "q": 1,
        "r": -1,
        "baseDirs": [
          0,
          2,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 25,
        "q": 1,
        "r": 0,
        "baseDirs": [
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 26,
        "q": 1,
        "r": 1,
        "baseDirs": [
          0,
          2,
          3,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 27,
        "q": 1,
        "r": 2,
        "baseDirs": [
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 28,
        "q": 2,
        "r": -3,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 29,
        "q": 2,
        "r": -2,
        "baseDirs": [
          0,
          2,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 30,
        "q": 2,
        "r": -1,
        "baseDirs": [
          0,
          2,
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 31,
        "q": 2,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 32,
        "q": 2,
        "r": 1,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 33,
        "q": 3,
        "r": -3,
        "baseDirs": [
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 34,
        "q": 3,
        "r": -2,
        "baseDirs": [
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 35,
        "q": 3,
        "r": -1,
        "baseDirs": [
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 36,
        "q": 3,
        "r": 0,
        "baseDirs": [
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0
    }
  },
  {
    "id": 34,
    "packId": 4,
    "packName": "Astral Honeycomb",
    "name": "Celestial Honeycomb",
    "radius": 3,
    "parMoves": 56,
    "tiles": [
      {
        "id": 0,
        "q": -3,
        "r": 0,
        "baseDirs": [
          0
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 1,
        "q": -3,
        "r": 1,
        "baseDirs": [
          0,
          1,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -3,
        "r": 2,
        "baseDirs": [
          1,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -3,
        "r": 3,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -2,
        "r": -1,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -2,
        "r": 0,
        "baseDirs": [
          2,
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -2,
        "r": 1,
        "baseDirs": [
          0,
          3,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": -2,
        "r": 2,
        "baseDirs": [
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": -2,
        "r": 3,
        "baseDirs": [
          0
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 9,
        "q": -1,
        "r": -2,
        "baseDirs": [
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 10,
        "q": -1,
        "r": -1,
        "baseDirs": [
          0,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": -1,
        "r": 1,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": -1,
        "r": 2,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": -1,
        "r": 3,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 0,
        "r": -3,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 0,
        "r": -2,
        "baseDirs": [
          0,
          1,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 0,
        "r": -1,
        "baseDirs": [
          1,
          2,
          3,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 0,
        "r": 0,
        "baseDirs": [
          1,
          3,
          4,
          5
        ],
        "rotation": 1,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 19,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          1,
          2,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 20,
        "q": 0,
        "r": 2,
        "baseDirs": [
          0,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 21,
        "q": 0,
        "r": 3,
        "baseDirs": [
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 22,
        "q": 1,
        "r": -3,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 23,
        "q": 1,
        "r": -2,
        "baseDirs": [
          1,
          2,
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 24,
        "q": 1,
        "r": -1,
        "baseDirs": [
          1,
          2,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 25,
        "q": 1,
        "r": 0,
        "baseDirs": [
          2,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 26,
        "q": 1,
        "r": 1,
        "baseDirs": [
          0,
          2,
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 27,
        "q": 1,
        "r": 2,
        "baseDirs": [
          2,
          3,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 28,
        "q": 2,
        "r": -3,
        "baseDirs": [
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 29,
        "q": 2,
        "r": -2,
        "baseDirs": [
          1
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 30,
        "q": 2,
        "r": -1,
        "baseDirs": [
          1,
          2,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 31,
        "q": 2,
        "r": 0,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 32,
        "q": 2,
        "r": 1,
        "baseDirs": [
          2,
          3,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 33,
        "q": 3,
        "r": -3,
        "baseDirs": [
          1
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 34,
        "q": 3,
        "r": -2,
        "baseDirs": [
          1,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 35,
        "q": 3,
        "r": -1,
        "baseDirs": [
          1,
          2,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 36,
        "q": 3,
        "r": 0,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0
    }
  },
  {
    "id": 35,
    "packId": 4,
    "packName": "Astral Honeycomb",
    "name": "Cosmic Grid",
    "radius": 3,
    "parMoves": 73,
    "tiles": [
      {
        "id": 0,
        "q": -3,
        "r": 0,
        "baseDirs": [
          0,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -3,
        "r": 1,
        "baseDirs": [
          0,
          1,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -3,
        "r": 2,
        "baseDirs": [
          0,
          1,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -3,
        "r": 3,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -2,
        "r": -1,
        "baseDirs": [
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 5,
        "q": -2,
        "r": 0,
        "baseDirs": [
          0,
          2,
          3,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -2,
        "r": 1,
        "baseDirs": [
          2,
          3,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": -2,
        "r": 2,
        "baseDirs": [
          0,
          1,
          2,
          3
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": -2,
        "r": 3,
        "baseDirs": [
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 9,
        "q": -1,
        "r": -2,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 10,
        "q": -1,
        "r": -1,
        "baseDirs": [
          2,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          2,
          3,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": -1,
        "r": 1,
        "baseDirs": [
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": -1,
        "r": 2,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": -1,
        "r": 3,
        "baseDirs": [
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 15,
        "q": 0,
        "r": -3,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 0,
        "r": -2,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 0,
        "r": -1,
        "baseDirs": [
          1,
          2,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          2,
          3,
          4,
          5
        ],
        "rotation": 3,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 19,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          1,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 20,
        "q": 0,
        "r": 2,
        "baseDirs": [
          1,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 21,
        "q": 0,
        "r": 3,
        "baseDirs": [
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 22,
        "q": 1,
        "r": -3,
        "baseDirs": [
          0
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 23,
        "q": 1,
        "r": -2,
        "baseDirs": [
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 24,
        "q": 1,
        "r": -1,
        "baseDirs": [
          2,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 25,
        "q": 1,
        "r": 0,
        "baseDirs": [
          0,
          2,
          3,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 26,
        "q": 1,
        "r": 1,
        "baseDirs": [
          0,
          1,
          2,
          3,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 27,
        "q": 1,
        "r": 2,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 28,
        "q": 2,
        "r": -3,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 29,
        "q": 2,
        "r": -2,
        "baseDirs": [
          2,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 30,
        "q": 2,
        "r": -1,
        "baseDirs": [
          1,
          2,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 31,
        "q": 2,
        "r": 0,
        "baseDirs": [
          1,
          2,
          3,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 32,
        "q": 2,
        "r": 1,
        "baseDirs": [
          2,
          3,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 33,
        "q": 3,
        "r": -3,
        "baseDirs": [
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 34,
        "q": 3,
        "r": -2,
        "baseDirs": [
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 35,
        "q": 3,
        "r": -1,
        "baseDirs": [
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 36,
        "q": 3,
        "r": 0,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0
    }
  },
  {
    "id": 36,
    "packId": 4,
    "packName": "Astral Honeycomb",
    "name": "Pleiades Web",
    "radius": 3,
    "parMoves": 72,
    "tiles": [
      {
        "id": 0,
        "q": -3,
        "r": 0,
        "baseDirs": [
          1
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 1,
        "q": -3,
        "r": 1,
        "baseDirs": [
          0,
          1,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -3,
        "r": 2,
        "baseDirs": [
          1,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -3,
        "r": 3,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -2,
        "r": -1,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -2,
        "r": 0,
        "baseDirs": [
          1,
          2,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -2,
        "r": 1,
        "baseDirs": [
          0,
          1,
          3,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": -2,
        "r": 2,
        "baseDirs": [
          1,
          2,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": -2,
        "r": 3,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": -1,
        "r": -2,
        "baseDirs": [
          1,
          2,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 10,
        "q": -1,
        "r": -1,
        "baseDirs": [
          1,
          2,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": -1,
        "r": 0,
        "baseDirs": [
          1,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": -1,
        "r": 1,
        "baseDirs": [
          1,
          3,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": -1,
        "r": 2,
        "baseDirs": [
          1,
          2,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": -1,
        "r": 3,
        "baseDirs": [
          0,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 0,
        "r": -3,
        "baseDirs": [
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 16,
        "q": 0,
        "r": -2,
        "baseDirs": [
          2,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 0,
        "r": -1,
        "baseDirs": [
          2,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 4,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 19,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 20,
        "q": 0,
        "r": 2,
        "baseDirs": [
          2,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 21,
        "q": 0,
        "r": 3,
        "baseDirs": [
          3,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 22,
        "q": 1,
        "r": -3,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 23,
        "q": 1,
        "r": -2,
        "baseDirs": [
          1,
          2,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 24,
        "q": 1,
        "r": -1,
        "baseDirs": [
          1,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 25,
        "q": 1,
        "r": 0,
        "baseDirs": [
          3,
          4,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 26,
        "q": 1,
        "r": 1,
        "baseDirs": [
          0,
          1,
          2,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 27,
        "q": 1,
        "r": 2,
        "baseDirs": [
          2,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 28,
        "q": 2,
        "r": -3,
        "baseDirs": [
          0,
          2,
          3
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 29,
        "q": 2,
        "r": -2,
        "baseDirs": [
          0,
          1,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 30,
        "q": 2,
        "r": -1,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 31,
        "q": 2,
        "r": 0,
        "baseDirs": [
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 32,
        "q": 2,
        "r": 1,
        "baseDirs": [
          2,
          3,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 33,
        "q": 3,
        "r": -3,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 34,
        "q": 3,
        "r": -2,
        "baseDirs": [
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 35,
        "q": 3,
        "r": -1,
        "baseDirs": [
          1
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 36,
        "q": 3,
        "r": 0,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0
    }
  },
  {
    "id": 37,
    "packId": 4,
    "packName": "Astral Honeycomb",
    "name": "Solar Corona",
    "radius": 3,
    "parMoves": 55,
    "tiles": [
      {
        "id": 0,
        "q": -3,
        "r": 0,
        "baseDirs": [
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 1,
        "q": -3,
        "r": 1,
        "baseDirs": [
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 2,
        "q": -3,
        "r": 2,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -3,
        "r": 3,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -2,
        "r": -1,
        "baseDirs": [
          2,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -2,
        "r": 0,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -2,
        "r": 1,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": -2,
        "r": 2,
        "baseDirs": [
          2,
          3,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": -2,
        "r": 3,
        "baseDirs": [
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 9,
        "q": -1,
        "r": -2,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 10,
        "q": -1,
        "r": -1,
        "baseDirs": [
          0,
          1,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": -1,
        "r": 0,
        "baseDirs": [
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": -1,
        "r": 1,
        "baseDirs": [
          2,
          3,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": -1,
        "r": 2,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": -1,
        "r": 3,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 0,
        "r": -3,
        "baseDirs": [
          0
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 16,
        "q": 0,
        "r": -2,
        "baseDirs": [
          0,
          1,
          2,
          3,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 0,
        "r": -1,
        "baseDirs": [
          1,
          3,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          2,
          4
        ],
        "rotation": 1,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 19,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          1,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 20,
        "q": 0,
        "r": 2,
        "baseDirs": [
          0,
          1,
          2,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 21,
        "q": 0,
        "r": 3,
        "baseDirs": [
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 22,
        "q": 1,
        "r": -3,
        "baseDirs": [
          0,
          1,
          2,
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 23,
        "q": 1,
        "r": -2,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 24,
        "q": 1,
        "r": -1,
        "baseDirs": [
          0,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 25,
        "q": 1,
        "r": 0,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 26,
        "q": 1,
        "r": 1,
        "baseDirs": [
          0,
          2,
          3,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 27,
        "q": 1,
        "r": 2,
        "baseDirs": [
          3,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 28,
        "q": 2,
        "r": -3,
        "baseDirs": [
          0,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 29,
        "q": 2,
        "r": -2,
        "baseDirs": [
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 30,
        "q": 2,
        "r": -1,
        "baseDirs": [
          0,
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 31,
        "q": 2,
        "r": 0,
        "baseDirs": [
          2,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 32,
        "q": 2,
        "r": 1,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 33,
        "q": 3,
        "r": -3,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 34,
        "q": 3,
        "r": -2,
        "baseDirs": [
          1,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 35,
        "q": 3,
        "r": -1,
        "baseDirs": [
          1,
          2,
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 36,
        "q": 3,
        "r": 0,
        "baseDirs": [
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0
    }
  },
  {
    "id": 38,
    "packId": 4,
    "packName": "Astral Honeycomb",
    "name": "Vortex Rings",
    "radius": 3,
    "parMoves": 64,
    "tiles": [
      {
        "id": 0,
        "q": -3,
        "r": 0,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -3,
        "r": 1,
        "baseDirs": [
          0,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -3,
        "r": 2,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -3,
        "r": 3,
        "baseDirs": [
          0,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -2,
        "r": -1,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -2,
        "r": 0,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -2,
        "r": 1,
        "baseDirs": [
          0,
          2,
          3,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": -2,
        "r": 2,
        "baseDirs": [
          1,
          2,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": -2,
        "r": 3,
        "baseDirs": [
          0,
          3,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": -1,
        "r": -2,
        "baseDirs": [
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 10,
        "q": -1,
        "r": -1,
        "baseDirs": [
          0,
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": -1,
        "r": 0,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": -1,
        "r": 1,
        "baseDirs": [
          2,
          3,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": -1,
        "r": 2,
        "baseDirs": [
          1
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": -1,
        "r": 3,
        "baseDirs": [
          3,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 0,
        "r": -3,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 0,
        "r": -2,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 0,
        "r": -1,
        "baseDirs": [
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 2,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 19,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 20,
        "q": 0,
        "r": 2,
        "baseDirs": [
          0,
          2,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 21,
        "q": 0,
        "r": 3,
        "baseDirs": [
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 22,
        "q": 1,
        "r": -3,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 23,
        "q": 1,
        "r": -2,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 24,
        "q": 1,
        "r": -1,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 25,
        "q": 1,
        "r": 0,
        "baseDirs": [
          0,
          3,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 26,
        "q": 1,
        "r": 1,
        "baseDirs": [
          0,
          2,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 27,
        "q": 1,
        "r": 2,
        "baseDirs": [
          2,
          3,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 28,
        "q": 2,
        "r": -3,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 29,
        "q": 2,
        "r": -2,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 30,
        "q": 2,
        "r": -1,
        "baseDirs": [
          1,
          3,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 31,
        "q": 2,
        "r": 0,
        "baseDirs": [
          0,
          1,
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 32,
        "q": 2,
        "r": 1,
        "baseDirs": [
          2,
          3,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 33,
        "q": 3,
        "r": -3,
        "baseDirs": [
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 34,
        "q": 3,
        "r": -2,
        "baseDirs": [
          1,
          2,
          3
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 35,
        "q": 3,
        "r": -1,
        "baseDirs": [
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 36,
        "q": 3,
        "r": 0,
        "baseDirs": [
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0
    }
  },
  {
    "id": 39,
    "packId": 4,
    "packName": "Astral Honeycomb",
    "name": "Pulsar Pathway",
    "radius": 3,
    "parMoves": 63,
    "tiles": [
      {
        "id": 0,
        "q": -3,
        "r": 0,
        "baseDirs": [
          1
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 1,
        "q": -3,
        "r": 1,
        "baseDirs": [
          0,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -3,
        "r": 2,
        "baseDirs": [
          0
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 3,
        "q": -3,
        "r": 3,
        "baseDirs": [
          0
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 4,
        "q": -2,
        "r": -1,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -2,
        "r": 0,
        "baseDirs": [
          1,
          2,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -2,
        "r": 1,
        "baseDirs": [
          0,
          3,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": -2,
        "r": 2,
        "baseDirs": [
          3,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": -2,
        "r": 3,
        "baseDirs": [
          0,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": -1,
        "r": -2,
        "baseDirs": [
          1
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 10,
        "q": -1,
        "r": -1,
        "baseDirs": [
          1,
          3,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": -1,
        "r": 1,
        "baseDirs": [
          2,
          3,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": -1,
        "r": 2,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": -1,
        "r": 3,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 0,
        "r": -3,
        "baseDirs": [
          1
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 16,
        "q": 0,
        "r": -2,
        "baseDirs": [
          0,
          1,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 0,
        "r": -1,
        "baseDirs": [
          1,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 0,
        "r": 0,
        "baseDirs": [
          1,
          3,
          4
        ],
        "rotation": 4,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 19,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          1,
          2,
          4,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 20,
        "q": 0,
        "r": 2,
        "baseDirs": [
          1,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 21,
        "q": 0,
        "r": 3,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 22,
        "q": 1,
        "r": -3,
        "baseDirs": [
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 23,
        "q": 1,
        "r": -2,
        "baseDirs": [
          0,
          1,
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 24,
        "q": 1,
        "r": -1,
        "baseDirs": [
          1,
          4,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 25,
        "q": 1,
        "r": 0,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 26,
        "q": 1,
        "r": 1,
        "baseDirs": [
          0,
          2,
          3,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 27,
        "q": 1,
        "r": 2,
        "baseDirs": [
          2,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 28,
        "q": 2,
        "r": -3,
        "baseDirs": [
          0
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 29,
        "q": 2,
        "r": -2,
        "baseDirs": [
          1,
          2,
          3,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 30,
        "q": 2,
        "r": -1,
        "baseDirs": [
          0,
          1,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 31,
        "q": 2,
        "r": 0,
        "baseDirs": [
          0,
          2,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 32,
        "q": 2,
        "r": 1,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 33,
        "q": 3,
        "r": -3,
        "baseDirs": [
          1,
          2,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 34,
        "q": 3,
        "r": -2,
        "baseDirs": [
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 35,
        "q": 3,
        "r": -1,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 36,
        "q": 3,
        "r": 0,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0
    }
  },
  {
    "id": 40,
    "packId": 4,
    "packName": "Astral Honeycomb",
    "name": "Supernova Gate",
    "radius": 3,
    "parMoves": 71,
    "tiles": [
      {
        "id": 0,
        "q": -3,
        "r": 0,
        "baseDirs": [
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 1,
        "q": -3,
        "r": 1,
        "baseDirs": [
          0
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 2,
        "q": -3,
        "r": 2,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -3,
        "r": 3,
        "baseDirs": [
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 4,
        "q": -2,
        "r": -1,
        "baseDirs": [
          2,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -2,
        "r": 0,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -2,
        "r": 1,
        "baseDirs": [
          0,
          1,
          2,
          3,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": -2,
        "r": 2,
        "baseDirs": [
          1,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": -2,
        "r": 3,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": -1,
        "r": -2,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 10,
        "q": -1,
        "r": -1,
        "baseDirs": [
          1,
          2,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": -1,
        "r": 1,
        "baseDirs": [
          1,
          2,
          3
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": -1,
        "r": 2,
        "baseDirs": [
          1,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": -1,
        "r": 3,
        "baseDirs": [
          0,
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 0,
        "r": -3,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 0,
        "r": -2,
        "baseDirs": [
          0,
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 0,
        "r": -1,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 0,
        "r": 0,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 5,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 19,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          1,
          2,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 20,
        "q": 0,
        "r": 2,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 21,
        "q": 0,
        "r": 3,
        "baseDirs": [
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "amber"
      },
      {
        "id": 22,
        "q": 1,
        "r": -3,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 23,
        "q": 1,
        "r": -2,
        "baseDirs": [
          0,
          3,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 24,
        "q": 1,
        "r": -1,
        "baseDirs": [
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 25,
        "q": 1,
        "r": 0,
        "baseDirs": [
          0
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 26,
        "q": 1,
        "r": 1,
        "baseDirs": [
          0,
          1,
          2,
          3
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 27,
        "q": 1,
        "r": 2,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 28,
        "q": 2,
        "r": -3,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 29,
        "q": 2,
        "r": -2,
        "baseDirs": [
          3,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 30,
        "q": 2,
        "r": -1,
        "baseDirs": [
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 31,
        "q": 2,
        "r": 0,
        "baseDirs": [
          0,
          3,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 32,
        "q": 2,
        "r": 1,
        "baseDirs": [
          2,
          3,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 33,
        "q": 3,
        "r": -3,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 34,
        "q": 3,
        "r": -2,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 35,
        "q": 3,
        "r": -1,
        "baseDirs": [
          1,
          2,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 36,
        "q": 3,
        "r": 0,
        "baseDirs": [
          2,
          3,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0
    }
  },
  {
    "id": 41,
    "packId": 5,
    "packName": "Cosmic Mandala",
    "name": "Zen Mandala",
    "radius": 3,
    "parMoves": 60,
    "tiles": [
      {
        "id": 0,
        "q": -3,
        "r": 0,
        "baseDirs": [
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 1,
        "q": -3,
        "r": 1,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -3,
        "r": 2,
        "baseDirs": [
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 3,
        "q": -3,
        "r": 3,
        "baseDirs": [
          0
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 4,
        "q": -2,
        "r": -1,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -2,
        "r": 0,
        "baseDirs": [
          0,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -2,
        "r": 1,
        "baseDirs": [
          0,
          1,
          2,
          3,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": -2,
        "r": 2,
        "baseDirs": [
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": -2,
        "r": 3,
        "baseDirs": [
          3,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": -1,
        "r": -2,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 10,
        "q": -1,
        "r": -1,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2,
          3,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": -1,
        "r": 1,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": -1,
        "r": 2,
        "baseDirs": [
          1,
          2,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": -1,
        "r": 3,
        "baseDirs": [
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 15,
        "q": 0,
        "r": -3,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 0,
        "r": -2,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 0,
        "r": -1,
        "baseDirs": [
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 0,
        "r": 0,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 2,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 19,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          1,
          2,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 20,
        "q": 0,
        "r": 2,
        "baseDirs": [
          0,
          1,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 21,
        "q": 0,
        "r": 3,
        "baseDirs": [
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 22,
        "q": 1,
        "r": -3,
        "baseDirs": [
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 23,
        "q": 1,
        "r": -2,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 24,
        "q": 1,
        "r": -1,
        "baseDirs": [
          1,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 25,
        "q": 1,
        "r": 0,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 26,
        "q": 1,
        "r": 1,
        "baseDirs": [
          2,
          3,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 27,
        "q": 1,
        "r": 2,
        "baseDirs": [
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 28,
        "q": 2,
        "r": -3,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 29,
        "q": 2,
        "r": -2,
        "baseDirs": [
          0,
          1,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 30,
        "q": 2,
        "r": -1,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 31,
        "q": 2,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 32,
        "q": 2,
        "r": 1,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 33,
        "q": 3,
        "r": -3,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 34,
        "q": 3,
        "r": -2,
        "baseDirs": [
          1,
          2,
          3,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 35,
        "q": 3,
        "r": -1,
        "baseDirs": [
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 36,
        "q": 3,
        "r": 0,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0
    }
  },
  {
    "id": 42,
    "packId": 5,
    "packName": "Cosmic Mandala",
    "name": "Solaris Wheel",
    "radius": 3,
    "parMoves": 65,
    "tiles": [
      {
        "id": 0,
        "q": -3,
        "r": 0,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -3,
        "r": 1,
        "baseDirs": [
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 2,
        "q": -3,
        "r": 2,
        "baseDirs": [
          0
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 3,
        "q": -3,
        "r": 3,
        "baseDirs": [
          0
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 4,
        "q": -2,
        "r": -1,
        "baseDirs": [
          0,
          1,
          2,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -2,
        "r": 0,
        "baseDirs": [
          1,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -2,
        "r": 1,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": -2,
        "r": 2,
        "baseDirs": [
          0,
          1,
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": -2,
        "r": 3,
        "baseDirs": [
          0,
          3,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": -1,
        "r": -2,
        "baseDirs": [
          2,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 10,
        "q": -1,
        "r": -1,
        "baseDirs": [
          2,
          3,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": -1,
        "r": 0,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": -1,
        "r": 1,
        "baseDirs": [
          3,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": -1,
        "r": 2,
        "baseDirs": [
          1,
          2,
          3,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": -1,
        "r": 3,
        "baseDirs": [
          0,
          3,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 0,
        "r": -3,
        "baseDirs": [
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 16,
        "q": 0,
        "r": -2,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 0,
        "r": -1,
        "baseDirs": [
          1,
          2,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          2,
          4
        ],
        "rotation": 1,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 19,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          1,
          2,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 20,
        "q": 0,
        "r": 2,
        "baseDirs": [
          2,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 21,
        "q": 0,
        "r": 3,
        "baseDirs": [
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 22,
        "q": 1,
        "r": -3,
        "baseDirs": [
          0
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 23,
        "q": 1,
        "r": -2,
        "baseDirs": [
          0,
          1,
          3,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 24,
        "q": 1,
        "r": -1,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 25,
        "q": 1,
        "r": 0,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 26,
        "q": 1,
        "r": 1,
        "baseDirs": [
          0,
          2,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 27,
        "q": 1,
        "r": 2,
        "baseDirs": [
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 28,
        "q": 2,
        "r": -3,
        "baseDirs": [
          0,
          2,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 29,
        "q": 2,
        "r": -2,
        "baseDirs": [
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 30,
        "q": 2,
        "r": -1,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 31,
        "q": 2,
        "r": 0,
        "baseDirs": [
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 32,
        "q": 2,
        "r": 1,
        "baseDirs": [
          2,
          3,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 33,
        "q": 3,
        "r": -3,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 34,
        "q": 3,
        "r": -2,
        "baseDirs": [
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 35,
        "q": 3,
        "r": -1,
        "baseDirs": [
          1
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 36,
        "q": 3,
        "r": 0,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0
    }
  },
  {
    "id": 43,
    "packId": 5,
    "packName": "Cosmic Mandala",
    "name": "Eternal Blossom",
    "radius": 3,
    "parMoves": 64,
    "tiles": [
      {
        "id": 0,
        "q": -3,
        "r": 0,
        "baseDirs": [
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 1,
        "q": -3,
        "r": 1,
        "baseDirs": [
          0
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 2,
        "q": -3,
        "r": 2,
        "baseDirs": [
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 3,
        "q": -3,
        "r": 3,
        "baseDirs": [
          0
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 4,
        "q": -2,
        "r": -1,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -2,
        "r": 0,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -2,
        "r": 1,
        "baseDirs": [
          0,
          2,
          3,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": -2,
        "r": 2,
        "baseDirs": [
          0
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": -2,
        "r": 3,
        "baseDirs": [
          0,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": -1,
        "r": -2,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 10,
        "q": -1,
        "r": -1,
        "baseDirs": [
          1,
          3,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": -1,
        "r": 0,
        "baseDirs": [
          3,
          4,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": -1,
        "r": 1,
        "baseDirs": [
          0,
          1,
          3,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": -1,
        "r": 2,
        "baseDirs": [
          1,
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": -1,
        "r": 3,
        "baseDirs": [
          0,
          3,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 0,
        "r": -3,
        "baseDirs": [
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 16,
        "q": 0,
        "r": -2,
        "baseDirs": [
          0
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 0,
        "r": -1,
        "baseDirs": [
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 5,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 19,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          1,
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 20,
        "q": 0,
        "r": 2,
        "baseDirs": [
          2,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 21,
        "q": 0,
        "r": 3,
        "baseDirs": [
          3,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 22,
        "q": 1,
        "r": -3,
        "baseDirs": [
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 23,
        "q": 1,
        "r": -2,
        "baseDirs": [
          0,
          3,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 24,
        "q": 1,
        "r": -1,
        "baseDirs": [
          0,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 25,
        "q": 1,
        "r": 0,
        "baseDirs": [
          0,
          3,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 26,
        "q": 1,
        "r": 1,
        "baseDirs": [
          0,
          2,
          3,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 27,
        "q": 1,
        "r": 2,
        "baseDirs": [
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 28,
        "q": 2,
        "r": -3,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 29,
        "q": 2,
        "r": -2,
        "baseDirs": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "rotation": 0,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 30,
        "q": 2,
        "r": -1,
        "baseDirs": [
          0,
          1,
          2,
          3,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 31,
        "q": 2,
        "r": 0,
        "baseDirs": [
          2,
          3,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 32,
        "q": 2,
        "r": 1,
        "baseDirs": [
          3,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 33,
        "q": 3,
        "r": -3,
        "baseDirs": [
          1,
          2,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 34,
        "q": 3,
        "r": -2,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 35,
        "q": 3,
        "r": -1,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 36,
        "q": 3,
        "r": 0,
        "baseDirs": [
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0
    }
  },
  {
    "id": 44,
    "packId": 5,
    "packName": "Cosmic Mandala",
    "name": "Singing Bowls",
    "radius": 3,
    "parMoves": 64,
    "tiles": [
      {
        "id": 0,
        "q": -3,
        "r": 0,
        "baseDirs": [
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 1,
        "q": -3,
        "r": 1,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -3,
        "r": 2,
        "baseDirs": [
          0,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -3,
        "r": 3,
        "baseDirs": [
          0
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 4,
        "q": -2,
        "r": -1,
        "baseDirs": [
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 5,
        "q": -2,
        "r": 0,
        "baseDirs": [
          0,
          2,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -2,
        "r": 1,
        "baseDirs": [
          0,
          1,
          2,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": -2,
        "r": 2,
        "baseDirs": [
          0,
          1,
          3,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": -2,
        "r": 3,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": -1,
        "r": -2,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 10,
        "q": -1,
        "r": -1,
        "baseDirs": [
          0,
          1,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": -1,
        "r": 0,
        "baseDirs": [
          1,
          2,
          3,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": -1,
        "r": 1,
        "baseDirs": [
          0,
          1,
          3,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": -1,
        "r": 2,
        "baseDirs": [
          1,
          3,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": -1,
        "r": 3,
        "baseDirs": [
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 15,
        "q": 0,
        "r": -3,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 0,
        "r": -2,
        "baseDirs": [
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 0,
        "r": -1,
        "baseDirs": [
          1,
          2,
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          2,
          4
        ],
        "rotation": 1,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 19,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          1,
          3,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 20,
        "q": 0,
        "r": 2,
        "baseDirs": [
          0,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 21,
        "q": 0,
        "r": 3,
        "baseDirs": [
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 22,
        "q": 1,
        "r": -3,
        "baseDirs": [
          0,
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 23,
        "q": 1,
        "r": -2,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 24,
        "q": 1,
        "r": -1,
        "baseDirs": [
          1,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 25,
        "q": 1,
        "r": 0,
        "baseDirs": [
          0,
          2,
          3,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 26,
        "q": 1,
        "r": 1,
        "baseDirs": [
          1,
          2,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 27,
        "q": 1,
        "r": 2,
        "baseDirs": [
          2,
          3,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 28,
        "q": 2,
        "r": -3,
        "baseDirs": [
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 29,
        "q": 2,
        "r": -2,
        "baseDirs": [
          0,
          3,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 30,
        "q": 2,
        "r": -1,
        "baseDirs": [
          2,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 31,
        "q": 2,
        "r": 0,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 32,
        "q": 2,
        "r": 1,
        "baseDirs": [
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 33,
        "q": 3,
        "r": -3,
        "baseDirs": [
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 34,
        "q": 3,
        "r": -2,
        "baseDirs": [
          1,
          2,
          3
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 35,
        "q": 3,
        "r": -1,
        "baseDirs": [
          1,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 36,
        "q": 3,
        "r": 0,
        "baseDirs": [
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0
    }
  },
  {
    "id": 45,
    "packId": 5,
    "packName": "Cosmic Mandala",
    "name": "Infinity Hex",
    "radius": 3,
    "parMoves": 69,
    "tiles": [
      {
        "id": 0,
        "q": -3,
        "r": 0,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -3,
        "r": 1,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -3,
        "r": 2,
        "baseDirs": [
          1
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 3,
        "q": -3,
        "r": 3,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -2,
        "r": -1,
        "baseDirs": [
          2,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -2,
        "r": 0,
        "baseDirs": [
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -2,
        "r": 1,
        "baseDirs": [
          0,
          1,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": -2,
        "r": 2,
        "baseDirs": [
          0,
          1,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": -2,
        "r": 3,
        "baseDirs": [
          3,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": -1,
        "r": -2,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 10,
        "q": -1,
        "r": -1,
        "baseDirs": [
          0
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": -1,
        "r": 1,
        "baseDirs": [
          0,
          3,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": -1,
        "r": 2,
        "baseDirs": [
          1,
          2,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": -1,
        "r": 3,
        "baseDirs": [
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 15,
        "q": 0,
        "r": -3,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 0,
        "r": -2,
        "baseDirs": [
          0,
          3,
          4,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 0,
        "r": -1,
        "baseDirs": [
          3,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 0,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2,
          3,
          5
        ],
        "rotation": 3,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 19,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          1,
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 20,
        "q": 0,
        "r": 2,
        "baseDirs": [
          0,
          1,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 21,
        "q": 0,
        "r": 3,
        "baseDirs": [
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 22,
        "q": 1,
        "r": -3,
        "baseDirs": [
          0,
          2,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 23,
        "q": 1,
        "r": -2,
        "baseDirs": [
          2,
          3,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 24,
        "q": 1,
        "r": -1,
        "baseDirs": [
          2,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 25,
        "q": 1,
        "r": 0,
        "baseDirs": [
          3,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 26,
        "q": 1,
        "r": 1,
        "baseDirs": [
          0,
          1,
          2,
          3,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 27,
        "q": 1,
        "r": 2,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 28,
        "q": 2,
        "r": -3,
        "baseDirs": [
          1,
          2,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 29,
        "q": 2,
        "r": -2,
        "baseDirs": [
          2,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 30,
        "q": 2,
        "r": -1,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 31,
        "q": 2,
        "r": 0,
        "baseDirs": [
          2,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 32,
        "q": 2,
        "r": 1,
        "baseDirs": [
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 33,
        "q": 3,
        "r": -3,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 34,
        "q": 3,
        "r": -2,
        "baseDirs": [
          1,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 35,
        "q": 3,
        "r": -1,
        "baseDirs": [
          1,
          2,
          3,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 36,
        "q": 3,
        "r": 0,
        "baseDirs": [
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0
    }
  },
  {
    "id": 46,
    "packId": 5,
    "packName": "Cosmic Mandala",
    "name": "Chrono Ring",
    "radius": 3,
    "parMoves": 57,
    "tiles": [
      {
        "id": 0,
        "q": -3,
        "r": 0,
        "baseDirs": [
          0,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -3,
        "r": 1,
        "baseDirs": [
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 2,
        "q": -3,
        "r": 2,
        "baseDirs": [
          0,
          1,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -3,
        "r": 3,
        "baseDirs": [
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 4,
        "q": -2,
        "r": -1,
        "baseDirs": [
          0,
          1,
          2,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -2,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2,
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -2,
        "r": 1,
        "baseDirs": [
          0,
          2,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": -2,
        "r": 2,
        "baseDirs": [
          0,
          3,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": -2,
        "r": 3,
        "baseDirs": [
          0,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": -1,
        "r": -2,
        "baseDirs": [
          2,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 10,
        "q": -1,
        "r": -1,
        "baseDirs": [
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": -1,
        "r": 1,
        "baseDirs": [
          0,
          1,
          2,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": -1,
        "r": 2,
        "baseDirs": [
          1,
          2,
          3,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": -1,
        "r": 3,
        "baseDirs": [
          0,
          3,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 0,
        "r": -3,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 0,
        "r": -2,
        "baseDirs": [
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 0,
        "r": -1,
        "baseDirs": [
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 0,
        "r": 0,
        "baseDirs": [
          1,
          3,
          5
        ],
        "rotation": 5,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 19,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          1,
          3,
          4,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 20,
        "q": 0,
        "r": 2,
        "baseDirs": [
          1,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 21,
        "q": 0,
        "r": 3,
        "baseDirs": [
          3,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 22,
        "q": 1,
        "r": -3,
        "baseDirs": [
          1
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 23,
        "q": 1,
        "r": -2,
        "baseDirs": [
          0,
          1,
          2,
          4,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 24,
        "q": 1,
        "r": -1,
        "baseDirs": [
          1,
          2,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 25,
        "q": 1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 26,
        "q": 1,
        "r": 1,
        "baseDirs": [
          2,
          3,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 27,
        "q": 1,
        "r": 2,
        "baseDirs": [
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 28,
        "q": 2,
        "r": -3,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 29,
        "q": 2,
        "r": -2,
        "baseDirs": [
          0,
          1,
          3,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 30,
        "q": 2,
        "r": -1,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 31,
        "q": 2,
        "r": 0,
        "baseDirs": [
          0,
          3,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 32,
        "q": 2,
        "r": 1,
        "baseDirs": [
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 33,
        "q": 3,
        "r": -3,
        "baseDirs": [
          2
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 34,
        "q": 3,
        "r": -2,
        "baseDirs": [
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 35,
        "q": 3,
        "r": -1,
        "baseDirs": [
          2
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 36,
        "q": 3,
        "r": 0,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0
    }
  },
  {
    "id": 47,
    "packId": 5,
    "packName": "Cosmic Mandala",
    "name": "Ethereal Harmony",
    "radius": 3,
    "parMoves": 69,
    "tiles": [
      {
        "id": 0,
        "q": -3,
        "r": 0,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -3,
        "r": 1,
        "baseDirs": [
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 2,
        "q": -3,
        "r": 2,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -3,
        "r": 3,
        "baseDirs": [
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 4,
        "q": -2,
        "r": -1,
        "baseDirs": [
          0
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 5,
        "q": -2,
        "r": 0,
        "baseDirs": [
          1,
          3,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -2,
        "r": 1,
        "baseDirs": [
          1,
          2,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": -2,
        "r": 2,
        "baseDirs": [
          1,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": -2,
        "r": 3,
        "baseDirs": [
          0,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": -1,
        "r": -2,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 10,
        "q": -1,
        "r": -1,
        "baseDirs": [
          0,
          2,
          3,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": -1,
        "r": 1,
        "baseDirs": [
          0,
          1,
          2,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": -1,
        "r": 2,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": -1,
        "r": 3,
        "baseDirs": [
          0,
          3,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 0,
        "r": -3,
        "baseDirs": [
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 16,
        "q": 0,
        "r": -2,
        "baseDirs": [
          0,
          1,
          2,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 0,
        "r": -1,
        "baseDirs": [
          1,
          3,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 0,
        "r": 0,
        "baseDirs": [
          3,
          4,
          5
        ],
        "rotation": 1,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 19,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          1,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 20,
        "q": 0,
        "r": 2,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 21,
        "q": 0,
        "r": 3,
        "baseDirs": [
          3,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 22,
        "q": 1,
        "r": -3,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 23,
        "q": 1,
        "r": -2,
        "baseDirs": [
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 24,
        "q": 1,
        "r": -1,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 25,
        "q": 1,
        "r": 0,
        "baseDirs": [
          1
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 26,
        "q": 1,
        "r": 1,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 27,
        "q": 1,
        "r": 2,
        "baseDirs": [
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 28,
        "q": 2,
        "r": -3,
        "baseDirs": [
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 29,
        "q": 2,
        "r": -2,
        "baseDirs": [
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 30,
        "q": 2,
        "r": -1,
        "baseDirs": [
          0,
          1,
          3,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 31,
        "q": 2,
        "r": 0,
        "baseDirs": [
          1,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 32,
        "q": 2,
        "r": 1,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 33,
        "q": 3,
        "r": -3,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 34,
        "q": 3,
        "r": -2,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 35,
        "q": 3,
        "r": -1,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 36,
        "q": 3,
        "r": 0,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0
    }
  },
  {
    "id": 48,
    "packId": 5,
    "packName": "Cosmic Mandala",
    "name": "Galaxy Spiral",
    "radius": 3,
    "parMoves": 66,
    "tiles": [
      {
        "id": 0,
        "q": -3,
        "r": 0,
        "baseDirs": [
          0,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -3,
        "r": 1,
        "baseDirs": [
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 2,
        "q": -3,
        "r": 2,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -3,
        "r": 3,
        "baseDirs": [
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 4,
        "q": -2,
        "r": -1,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -2,
        "r": 0,
        "baseDirs": [
          2,
          3,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -2,
        "r": 1,
        "baseDirs": [
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": -2,
        "r": 2,
        "baseDirs": [
          3,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": -2,
        "r": 3,
        "baseDirs": [
          0
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 9,
        "q": -1,
        "r": -2,
        "baseDirs": [
          0,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 10,
        "q": -1,
        "r": -1,
        "baseDirs": [
          0,
          1,
          2,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": -1,
        "r": 0,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": -1,
        "r": 1,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": -1,
        "r": 2,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": -1,
        "r": 3,
        "baseDirs": [
          3,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 0,
        "r": -3,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 0,
        "r": -2,
        "baseDirs": [
          2,
          3,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 0,
        "r": -1,
        "baseDirs": [
          3,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 0,
        "r": 0,
        "baseDirs": [
          3,
          5
        ],
        "rotation": 3,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 19,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          1,
          2,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 20,
        "q": 0,
        "r": 2,
        "baseDirs": [
          0,
          1,
          2,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 21,
        "q": 0,
        "r": 3,
        "baseDirs": [
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 22,
        "q": 1,
        "r": -3,
        "baseDirs": [
          0,
          2,
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 23,
        "q": 1,
        "r": -2,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 24,
        "q": 1,
        "r": -1,
        "baseDirs": [
          0,
          1,
          2,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 25,
        "q": 1,
        "r": 0,
        "baseDirs": [
          1,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 26,
        "q": 1,
        "r": 1,
        "baseDirs": [
          2,
          3,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 27,
        "q": 1,
        "r": 2,
        "baseDirs": [
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 28,
        "q": 2,
        "r": -3,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 29,
        "q": 2,
        "r": -2,
        "baseDirs": [
          1,
          3,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 30,
        "q": 2,
        "r": -1,
        "baseDirs": [
          1,
          3,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 31,
        "q": 2,
        "r": 0,
        "baseDirs": [
          0,
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 32,
        "q": 2,
        "r": 1,
        "baseDirs": [
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 33,
        "q": 3,
        "r": -3,
        "baseDirs": [
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 34,
        "q": 3,
        "r": -2,
        "baseDirs": [
          1
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 35,
        "q": 3,
        "r": -1,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 36,
        "q": 3,
        "r": 0,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0
    }
  },
  {
    "id": 49,
    "packId": 5,
    "packName": "Cosmic Mandala",
    "name": "Transcendent Web",
    "radius": 3,
    "parMoves": 69,
    "tiles": [
      {
        "id": 0,
        "q": -3,
        "r": 0,
        "baseDirs": [
          0,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -3,
        "r": 1,
        "baseDirs": [
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 2,
        "q": -3,
        "r": 2,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -3,
        "r": 3,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -2,
        "r": -1,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -2,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2,
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -2,
        "r": 1,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": -2,
        "r": 2,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": -2,
        "r": 3,
        "baseDirs": [
          0,
          3,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 9,
        "q": -1,
        "r": -2,
        "baseDirs": [
          0,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 10,
        "q": -1,
        "r": -1,
        "baseDirs": [
          0
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": -1,
        "r": 0,
        "baseDirs": [
          3,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": -1,
        "r": 1,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": -1,
        "r": 2,
        "baseDirs": [
          1,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": -1,
        "r": 3,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 0,
        "r": -3,
        "baseDirs": [
          0,
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 16,
        "q": 0,
        "r": -2,
        "baseDirs": [
          1,
          3,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 0,
        "r": -1,
        "baseDirs": [
          1,
          2,
          3,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 0,
        "r": 0,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 4,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 19,
        "q": 0,
        "r": 1,
        "baseDirs": [
          0,
          1,
          2,
          3,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 20,
        "q": 0,
        "r": 2,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 21,
        "q": 0,
        "r": 3,
        "baseDirs": [
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 22,
        "q": 1,
        "r": -3,
        "baseDirs": [
          0,
          1,
          2,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 23,
        "q": 1,
        "r": -2,
        "baseDirs": [
          2,
          4,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 24,
        "q": 1,
        "r": -1,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 25,
        "q": 1,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 26,
        "q": 1,
        "r": 1,
        "baseDirs": [
          1,
          3,
          4
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 27,
        "q": 1,
        "r": 2,
        "baseDirs": [
          2,
          3,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 28,
        "q": 2,
        "r": -3,
        "baseDirs": [
          1,
          2,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 29,
        "q": 2,
        "r": -2,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 30,
        "q": 2,
        "r": -1,
        "baseDirs": [
          0
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 31,
        "q": 2,
        "r": 0,
        "baseDirs": [
          0,
          3,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 32,
        "q": 2,
        "r": 1,
        "baseDirs": [
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 33,
        "q": 3,
        "r": -3,
        "baseDirs": [
          1
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 34,
        "q": 3,
        "r": -2,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 35,
        "q": 3,
        "r": -1,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 36,
        "q": 3,
        "r": 0,
        "baseDirs": [
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0
    }
  },
  {
    "id": 50,
    "packId": 5,
    "packName": "Cosmic Mandala",
    "name": "Cosmic Enlightenment",
    "radius": 3,
    "parMoves": 65,
    "tiles": [
      {
        "id": 0,
        "q": -3,
        "r": 0,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 1,
        "q": -3,
        "r": 1,
        "baseDirs": [
          0,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 2,
        "q": -3,
        "r": 2,
        "baseDirs": [
          0,
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 3,
        "q": -3,
        "r": 3,
        "baseDirs": [
          0,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 4,
        "q": -2,
        "r": -1,
        "baseDirs": [
          0,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 5,
        "q": -2,
        "r": 0,
        "baseDirs": [
          1,
          2,
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 6,
        "q": -2,
        "r": 1,
        "baseDirs": [
          3,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 7,
        "q": -2,
        "r": 2,
        "baseDirs": [
          2,
          3,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 8,
        "q": -2,
        "r": 3,
        "baseDirs": [
          3
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 9,
        "q": -1,
        "r": -2,
        "baseDirs": [
          1,
          2
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 10,
        "q": -1,
        "r": -1,
        "baseDirs": [
          1,
          3,
          4
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 11,
        "q": -1,
        "r": 0,
        "baseDirs": [
          1,
          2,
          4,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 12,
        "q": -1,
        "r": 1,
        "baseDirs": [
          0,
          1,
          2,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 13,
        "q": -1,
        "r": 2,
        "baseDirs": [
          1,
          4,
          5
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 14,
        "q": -1,
        "r": 3,
        "baseDirs": [
          0,
          4
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 15,
        "q": 0,
        "r": -3,
        "baseDirs": [
          1
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 16,
        "q": 0,
        "r": -2,
        "baseDirs": [
          0,
          4,
          5
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 17,
        "q": 0,
        "r": -1,
        "baseDirs": [
          2,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 18,
        "q": 0,
        "r": 0,
        "baseDirs": [
          2,
          5
        ],
        "rotation": 1,
        "isSource": true,
        "isResonator": false,
        "color": "gold"
      },
      {
        "id": 19,
        "q": 0,
        "r": 1,
        "baseDirs": [
          1,
          2,
          3
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 20,
        "q": 0,
        "r": 2,
        "baseDirs": [
          1,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 21,
        "q": 0,
        "r": 3,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 22,
        "q": 1,
        "r": -3,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 23,
        "q": 1,
        "r": -2,
        "baseDirs": [
          0,
          2,
          3,
          4,
          5
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 24,
        "q": 1,
        "r": -1,
        "baseDirs": [
          2
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 25,
        "q": 1,
        "r": 0,
        "baseDirs": [
          1
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 26,
        "q": 1,
        "r": 1,
        "baseDirs": [
          1,
          2,
          4,
          5
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 27,
        "q": 1,
        "r": 2,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 28,
        "q": 2,
        "r": -3,
        "baseDirs": [
          2,
          3
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 29,
        "q": 2,
        "r": -2,
        "baseDirs": [
          1,
          3
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 30,
        "q": 2,
        "r": -1,
        "baseDirs": [
          4,
          5
        ],
        "rotation": 2,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 31,
        "q": 2,
        "r": 0,
        "baseDirs": [
          0,
          1,
          2
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 32,
        "q": 2,
        "r": 1,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 1,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 33,
        "q": 3,
        "r": -3,
        "baseDirs": [
          1
        ],
        "rotation": 5,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 34,
        "q": 3,
        "r": -2,
        "baseDirs": [
          2,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      },
      {
        "id": 35,
        "q": 3,
        "r": -1,
        "baseDirs": [
          1
        ],
        "rotation": 4,
        "isSource": false,
        "isResonator": true,
        "color": "radiance"
      },
      {
        "id": 36,
        "q": 3,
        "r": 0,
        "baseDirs": [
          3,
          4
        ],
        "rotation": 3,
        "isSource": false,
        "isResonator": false,
        "color": "cyan"
      }
    ],
    "targetRotations": {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0
    }
  }
];

  return {
    PACKS,
    LEVELS
  };
});
