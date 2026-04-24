/**
 * HullSafe — Image Compression Script
 * Uses sharp (programmatic API) to compress raw KeelCrab photos.
 */
import sharp from 'sharp';
import { existsSync, mkdirSync, statSync, readdirSync } from 'fs';
import { join } from 'path';

const OUTPUT_DIR = 'public/images/keelcrab/optimised';
const MAX_WIDTH = 1600;
const QUALITY = 75;

const images = [
  // Diver-pack underwater shots
  { src: 'docs/keelcrab-pro-images/diver-pack/20230104_113642 - Copia.jpg', out: 'underwater-keelcrab-action-1.jpg' },
  { src: 'docs/keelcrab-pro-images/diver-pack/20230104_113657 - Copia.jpg', out: 'underwater-keelcrab-action-2.jpg' },
  { src: 'docs/keelcrab-pro-images/diver-pack/20230104_113730 - Copia.jpg', out: 'underwater-keelcrab-cleaning.jpg' },
  { src: 'docs/keelcrab-pro-images/diver-pack/20230104_113735 - Copia.jpg', out: 'underwater-keelcrab-closeup.jpg' },
  { src: 'docs/keelcrab-pro-images/diver-pack/20230104_113741 - Copia.jpg', out: 'underwater-keelcrab-hull.jpg' },
  { src: 'docs/keelcrab-pro-images/diver-pack/20230104_113811 - Copia.jpg', out: 'underwater-keelcrab-wide.jpg' },
  { src: 'docs/keelcrab-pro-images/diver-pack/20230104_113823 - Copia.jpg', out: 'underwater-keelcrab-detail.jpg' },
  
  // On-site marina operational shots
  { src: 'docs/keelcrab-pro-images/20230104_132708.jpg', out: 'marina-operation-setup.jpg' },
  { src: 'docs/keelcrab-pro-images/20230104_132721.jpg', out: 'marina-pontoon-wide.jpg' },
  { src: 'docs/keelcrab-pro-images/20230105_161720.jpg', out: 'marina-harbour-scene.jpg' },
  
  // Product/equipment detail shots  
  { src: 'docs/keelcrab-pro-images/KEELCRAB001257.jpg', out: 'keelcrab-equipment-detail.jpg' },
  { src: 'docs/keelcrab-pro-images/KEELCRAB001259.jpg', out: 'keelcrab-product-shot.jpg' },
  { src: 'docs/keelcrab-pro-images/KEELCRAB001261.jpg', out: 'keelcrab-brushes-detail.jpg' },
];

if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log(`\n=== HullSafe Image Compression ===`);
console.log(`Target: ≤150KB, ${MAX_WIDTH}px wide, JPEG quality ${QUALITY}\n`);

let successCount = 0;
let failCount = 0;

for (const img of images) {
  const inputPath = img.src;
  const outputPath = join(OUTPUT_DIR, img.out);
  
  if (!existsSync(inputPath)) {
    console.log(`❌ MISSING: ${inputPath}`);
    failCount++;
    continue;
  }
  
  const inputSize = statSync(inputPath).size;
  
  try {
    await sharp(inputPath)
      .resize(MAX_WIDTH, null, { withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(outputPath);
    
    const outputSize = statSync(outputPath).size;
    const reduction = ((1 - outputSize / inputSize) * 100).toFixed(1);
    const sizeKB = (outputSize / 1024).toFixed(0);
    const status = outputSize <= 180000 ? '✅' : '⚠️';
    console.log(`${status} ${img.out}: ${sizeKB}KB (${reduction}% reduction from ${(inputSize/1024/1024).toFixed(1)}MB)`);
    successCount++;
  } catch (err) {
    console.log(`❌ FAILED: ${img.out} — ${err.message}`);
    failCount++;
  }
}

console.log(`\n=== Results: ${successCount} compressed, ${failCount} failed ===\n`);

// List final sizes
console.log('Final file sizes:');
const files = readdirSync(OUTPUT_DIR).sort();
let totalKB = 0;
for (const f of files) {
  const size = statSync(join(OUTPUT_DIR, f)).size;
  const kb = size / 1024;
  totalKB += kb;
  console.log(`  ${f}: ${kb.toFixed(0)}KB`);
}
console.log(`\n  TOTAL: ${totalKB.toFixed(0)}KB (${(totalKB/1024).toFixed(1)}MB)`);
