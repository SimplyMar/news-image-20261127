import { execFile } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

const rootDir = import.meta.dirname;
const htmlPath = path.join(rootDir, 'poster.html');
const outPath = path.join(rootDir, 'entry.png');
const tempPng = path.join(rootDir, 'render.tmp.png');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
};

function readPngDimensions(buf) {
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  if (buf.byteLength < 24 || !buf.subarray(0, 8).equals(sig)) {
    throw new Error('Output is not a valid PNG');
  }
  return {
    width: buf.readUInt32BE(16),
    height: buf.readUInt32BE(20),
  };
}

const server = http.createServer((req, res) => {
  const reqPath = (req.url || '/').split('?')[0];
  const fileName = reqPath === '/' ? 'poster.html' : reqPath.replace(/^\/+/, '');
  const fullPath = path.resolve(rootDir, fileName);
  if (!fullPath.startsWith(rootDir) || !fs.existsSync(fullPath)) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }
  const ext = path.extname(fullPath).toLowerCase();
  res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
  fs.createReadStream(fullPath).pipe(res);
});

await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const { port } = server.address();
const url = `http://127.0.0.1:${port}/poster.html`;

const pyScript = `
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1024, 'height': 1024}, device_scale_factor=1)
    page.goto(${JSON.stringify(url)}, wait_until='load', timeout=15000)
    page.screenshot(path=${JSON.stringify(tempPng)}, full_page=False)
    browser.close()
`;

try {
  await execFileAsync('python', ['-c', pyScript], { timeout: 25000 });
} finally {
  server.close();
}

let png = fs.readFileSync(tempPng);
const dims = readPngDimensions(png);
if (dims.width !== 1024 || dims.height !== 1024) {
  throw new Error(`Expected 1024x1024, got ${dims.width}x${dims.height}`);
}

if (png.byteLength > 500_000) {
  await execFileAsync('python', [
    '-c',
    `from PIL import Image; im = Image.open(${JSON.stringify(tempPng)}); im.save(${JSON.stringify(outPath)}, format='PNG', optimize=True, compress_level=9)`,
  ]);
  fs.unlinkSync(tempPng);
} else {
  fs.renameSync(tempPng, outPath);
}

const finalPng = fs.readFileSync(outPath);
const finalDims = readPngDimensions(finalPng);
console.log(`Rendered ${outPath}: ${finalDims.width}x${finalDims.height}, ${finalPng.byteLength} bytes`);
