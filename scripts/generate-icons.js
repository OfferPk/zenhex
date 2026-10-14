/**
 * Generates valid PNG and SVG icons for ZenHex using Node built-in zlib & fs.
 * Zero external dependencies.
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function crc32(buf) {
  let table = new Int32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? -306674912 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c;
  }
  let crc = -1;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ -1) >>> 0;
}

function makePng(width, height, getPixelRgba) {
  const bytesPerPixel = 4;
  const scanlineLength = width * bytesPerPixel;
  const rawData = Buffer.alloc((scanlineLength + 1) * height);

  for (let y = 0; y < height; y++) {
    const scanlineOffset = y * (scanlineLength + 1);
    rawData[scanlineOffset] = 0;
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getPixelRgba(x, y, width, height);
      const pixelOffset = scanlineOffset + 1 + x * bytesPerPixel;
      rawData[pixelOffset] = r;
      rawData[pixelOffset + 1] = g;
      rawData[pixelOffset + 2] = b;
      rawData[pixelOffset + 3] = a;
    }
  }

  const idatData = zlib.deflateSync(rawData);

  function makeChunk(type, data) {
    const typeBuf = Buffer.from(type, 'ascii');
    const lenBuf = Buffer.alloc(4);
    lenBuf.writeUInt32BE(data.length, 0);
    const body = Buffer.concat([typeBuf, data]);
    const crcVal = crc32(body);
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crcVal, 0);
    return Buffer.concat([lenBuf, body, crcBuf]);
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const pngSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', idatData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([pngSignature, ihdrChunk, idatChunk, iendChunk]);
}

function renderZenHexIcon(x, y, width, height) {
  const nx = x / width;
  const ny = y / height;

  // Squircle rounded corners
  const cornerR = 0.22;
  const innerX = Math.abs(nx - 0.5) - (0.5 - cornerR);
  const innerY = Math.abs(ny - 0.5) - (0.5 - cornerR);
  if (innerX > 0 && innerY > 0) {
    const d = Math.sqrt(innerX * innerX + innerY * innerY);
    if (d > cornerR) return [0, 0, 0, 0];
  }

  // Deep dark obsidian gradient
  const distCenter = Math.sqrt((nx - 0.5) ** 2 + (ny - 0.5) ** 2);
  let bgR = Math.floor(8 + (16 - 8) * (1 - distCenter));
  let bgG = Math.floor(12 + (28 - 12) * (1 - distCenter));
  let bgB = Math.floor(20 + (44 - 20) * (1 - distCenter));

  let addedR = 0, addedG = 0, addedB = 0;

  // Center radiant lotus / core at (0.5, 0.5)
  if (distCenter < 0.08) {
    const intensity = 1 - (distCenter / 0.08);
    addedR += 250 * intensity;
    addedG += 255 * intensity;
    addedB += 255 * intensity;
  } else if (distCenter < 0.24) {
    const halo = Math.pow(1 - (distCenter / 0.24), 2);
    addedR += 0 * halo;
    addedG += 220 * halo;
    addedB += 254 * halo;
  }

  // Hexagonal spokes / conduits radiating outward to 6 points at 60 degree intervals
  const dx = nx - 0.5;
  const dy = ny - 0.5;
  const angle = Math.atan2(dy, dx);
  // Sector angle relative to nearest 60-degree axis
  const sector = (Math.PI / 3);
  const modAngle = Math.abs(((angle % sector) + sector + sector / 2) % sector - sector / 2);
  const distFromSpoke = distCenter * Math.sin(modAngle);

  if (distFromSpoke < 0.035 && distCenter >= 0.06 && distCenter <= 0.36) {
    const spokeGlow = 1 - (distFromSpoke / 0.035);
    addedR += 0;
    addedG += 220 * spokeGlow;
    addedB += 254 * spokeGlow;
  }

  // Outer 6 Sacred Rune Orbs at distance 0.34
  for (let i = 0; i < 6; i++) {
    const theta = (Math.PI / 3) * i;
    const ox = 0.5 + 0.34 * Math.cos(theta);
    const oy = 0.5 + 0.34 * Math.sin(theta);
    const od = Math.sqrt((nx - ox) ** 2 + (ny - oy) ** 2);
    if (od < 0.05) {
      const tint = 1 - (od / 0.05);
      addedR += 251 * tint;
      addedG += 191 * tint;
      addedB += 36 * tint; // Sacred golden rune glow
    }
  }

  const finalR = Math.min(255, bgR + Math.floor(addedR));
  const finalG = Math.min(255, bgG + Math.floor(addedG));
  const finalB = Math.min(255, bgB + Math.floor(addedB));

  return [finalR, finalG, finalB, 255];
}

const srcDir = path.join(__dirname, '..', 'src');
if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir, { recursive: true });
}

console.log('Generating icon-192.png...');
const icon192 = makePng(192, 192, renderZenHexIcon);
fs.writeFileSync(path.join(srcDir, 'icon-192.png'), icon192);

console.log('Generating icon-512.png...');
const icon512 = makePng(512, 512, renderZenHexIcon);
fs.writeFileSync(path.join(srcDir, 'icon-512.png'), icon512);

// Generate SVG favicon
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#142238"/>
      <stop offset="100%" stop-color="#080c14"/>
    </radialGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="512" height="512" rx="110" fill="url(#bgGlow)"/>
  
  <!-- Outer Hexagonal Frame -->
  <polygon points="256,66 430,166 430,366 256,466 82,366 82,166" fill="none" stroke="#1e293b" stroke-width="12"/>

  <!-- Glowing Radiant Radial Conduits -->
  <line x1="256" y1="256" x2="256" y2="76" stroke="#00f2fe" stroke-width="22" stroke-linecap="round" filter="url(#glow)"/>
  <line x1="256" y1="256" x2="412" y2="166" stroke="#00f2fe" stroke-width="22" stroke-linecap="round" filter="url(#glow)"/>
  <line x1="256" y1="256" x2="412" y2="346" stroke="#00f2fe" stroke-width="22" stroke-linecap="round" filter="url(#glow)"/>
  <line x1="256" y1="256" x2="256" y2="436" stroke="#00f2fe" stroke-width="22" stroke-linecap="round" filter="url(#glow)"/>
  <line x1="256" y1="256" x2="100" y2="346" stroke="#00f2fe" stroke-width="22" stroke-linecap="round" filter="url(#glow)"/>
  <line x1="256" y1="256" x2="100" y2="166" stroke="#00f2fe" stroke-width="22" stroke-linecap="round" filter="url(#glow)"/>

  <!-- Sacred Outer Runes -->
  <circle cx="256" cy="76" r="22" fill="#fbbf24" filter="url(#glow)"/>
  <circle cx="412" cy="166" r="22" fill="#fbbf24" filter="url(#glow)"/>
  <circle cx="412" cy="346" r="22" fill="#fbbf24" filter="url(#glow)"/>
  <circle cx="256" cy="436" r="22" fill="#fbbf24" filter="url(#glow)"/>
  <circle cx="100" cy="346" r="22" fill="#fbbf24" filter="url(#glow)"/>
  <circle cx="100" cy="166" r="22" fill="#fbbf24" filter="url(#glow)"/>

  <!-- Center Energy Core -->
  <circle cx="256" cy="256" r="46" fill="#ffffff" filter="url(#glow)"/>
  <circle cx="256" cy="256" r="24" fill="#00f2fe"/>
</svg>`;

fs.writeFileSync(path.join(srcDir, 'favicon.svg'), faviconSvg, 'utf8');
console.log('ZenHex icons generated successfully.');
