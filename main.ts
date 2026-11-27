import fs from 'node:fs';
import path from 'node:path';

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1048576;
const MAX_DIM = 1024;

function assertValidEntryPng(png: Buffer): { width: number; height: number } {
  if (png.byteLength < 24 || !png.subarray(0, 8).equals(PNG_SIGNATURE)) {
    throw new Error('entry.png is missing a valid PNG header');
  }
  if (png.byteLength > MAX_BYTES) {
    throw new Error(`entry.png exceeds ${MAX_BYTES} bytes (${png.byteLength})`);
  }
  const width = png.readUInt32BE(16);
  const height = png.readUInt32BE(20);
  if (width < 1 || height < 1 || width > MAX_DIM || height > MAX_DIM) {
    throw new Error(`entry.png dimensions ${width}x${height} exceed ${MAX_DIM}x${MAX_DIM}`);
  }
  return { width, height };
}

const sourcePath = path.resolve(import.meta.dirname, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destPath = path.join(outputDir, 'entry.png');

const png = fs.readFileSync(sourcePath);
const { width, height } = assertValidEntryPng(png);

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(destPath, png);

console.log(`Wrote ${png.byteLength} bytes (${width}x${height}) to ${destPath}`);
