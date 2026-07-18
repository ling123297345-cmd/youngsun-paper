// Audit script: find all image references and check if files exist
import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { globSync } from 'fs';

// Simple recursive glob
function walk(dir, files = []) {
  if (!existsSync(dir)) return files;
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, files);
    else files.push(p);
  }
  return files;
}

const SRC = 'D:/网站/youngsunpaper.com/src';
const PUBLIC = 'D:/网站/youngsunpaper.com/public';
const DIST = 'D:/网站/youngsunpaper.com/dist';

// Find all image references in source files
const imgRefs = new Set();
const srcFiles = walk(SRC);

for (const f of srcFiles) {
  if (!f.endsWith('.js') && !f.endsWith('.jsx') && !f.endsWith('.css')) continue;
  const content = readFileSync(f, 'utf-8');
  // Match image paths: "images/..." or 'images/...'
  const patterns = [
    /"images\/[^"]+\.(png|jpg|jpeg|webp|svg|gif|ico)"/gi,
    /'images\/[^']+\.(png|jpg|jpeg|webp|svg|gif|ico)'/gi,
    /url\(['"]?(images\/[^)'"]+\.(png|jpg|jpeg|webp|svg|gif|ico))['"]?\)/gi,
  ];
  for (const pat of patterns) {
    let m;
    while ((m = pat.exec(content)) !== null) {
      imgRefs.add(m[1] || m[0].replace(/url\(['"]?/, '').replace(/['"]?\)/, ''));
    }
  }
}

// Also check image refs from data.js image and gallery fields specifically
console.log('=== Checking image references ===\n');

let missing = 0;
let found = 0;
const missingFiles = [];

for (const ref of [...imgRefs].sort()) {
  const publicPath = join(PUBLIC, ref);
  const distPath = join(DIST, ref);

  if (existsSync(publicPath) || existsSync(distPath)) {
    found++;
  } else {
    missing++;
    missingFiles.push(ref);
    console.log(`❌ MISSING: ${ref}`);
  }
}

console.log(`\n=== Summary ===`);
console.log(`Total references: ${imgRefs.size}`);
console.log(`Found: ${found}`);
console.log(`Missing: ${missing}`);

// Check for common issues
console.log(`\n=== Other Checks ===`);

// Check data.js product image references
const dataContent = readFileSync(join(SRC, 'data.js'), 'utf-8');
const imageMatches = dataContent.matchAll(/image:\s*"([^"]+)"/g);
let dataMissing = 0;
for (const m of imageMatches) {
  const p = join(PUBLIC, m[1]);
  if (!existsSync(p) && !existsSync(p.replace(/\.jpg$/, '.png'))) {
    console.log(`❌ Data image missing: ${m[1]}`);
    dataMissing++;
  }
}
if (dataMissing === 0) console.log('✅ All data.js image references OK');

// Check gallery images
const galleryMatches = dataContent.matchAll(/"src":\s*"([^"]+)"/g);
let galleryMissing = 0;
for (const m of galleryMatches) {
  const p = join(PUBLIC, m[1]);
  if (!existsSync(p)) {
    // Only report first few to avoid spam
    if (galleryMissing < 5) console.log(`❌ Gallery image missing: ${m[1]}`);
    galleryMissing++;
  }
}
if (galleryMissing === 0) console.log('✅ All gallery images OK');
else console.log(`❌ ${galleryMissing} gallery images missing`);

// Check favicon
if (!existsSync(join(PUBLIC, 'favicon.png'))) console.log('❌ favicon.png missing');
if (!existsSync(join(PUBLIC, 'favicon.svg'))) console.log('❌ favicon.svg missing');
if (!existsSync(join(PUBLIC, 'robots.txt'))) console.log('❌ robots.txt missing');
if (!existsSync(join(PUBLIC, 'sitemap.xml'))) console.log('❌ sitemap.xml missing');
