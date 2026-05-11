import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'public/images/logo.png');
const publicDir = join(root, 'public');

await mkdir(publicDir, { recursive: true });

const { width, height } = await sharp(source).metadata();
const size = Math.min(width, height);
const left = Math.floor((width - size) / 2);
const top = Math.floor((height - size) / 2);

const square = await sharp(source)
  .extract({ left, top, width: size, height: size })
  .toBuffer();

const outputs = [
  { name: 'favicon-32.png', size: 32 },
  { name: 'favicon-192.png', size: 192 },
  { name: 'favicon-512.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 },
];

for (const { name, size } of outputs) {
  await sharp(square)
    .resize(size, size, { fit: 'cover', kernel: 'lanczos3' })
    .png({ compressionLevel: 9 })
    .toFile(join(publicDir, name));
  console.log(`✓ ${name} (${size}×${size})`);
}

console.log('Favicons generated in public/');
