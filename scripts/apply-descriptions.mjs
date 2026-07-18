// Apply YOUNGSUN product descriptions to data.js (v2)
import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const JSON_DIR = 'C:/Users/肖灵/Desktop/产品主图/YOUNGSUN_20_Product_Descriptions/YOUNGSUN_20_Product_Descriptions';
const DATA_FILE = 'D:/网站/youngsunpaper.com/src/data.js';

// Map JSON slugs to data.js IDs — null = skip, 'NEW' = add new product
const SLUG_MAP = {
  'grey-board': 'grey-board',
  'black-paper': 'black-paper',
  'color-card-paper': 'color-card-paper',
  'folding-box-board': 'folding-box-board',
  'c2s-high-bulk-bristol-board': null,          // skip — no matching product
  'duplex-board': 'duplex-board',
  'coated-kraft-back-board': 'NEW',              // CKB — add
  'laminated-grey-board': null,                  // SKIP — user says it's just grey-board variant
  'purple-core-playing-card-paper': null,        // SKIP — user wants removed
  'c2s-art-paper': 'art-paper',
  'woodfree-offset-paper': 'woodfree-paper',
  'copy-paper': 'copy-paper',
  'color-offset-paper': 'color-offset-paper',
  'kraft-paper': 'kraft-paper',
  'cupstock-board': 'cup-paper',
  'greaseproof-paper': 'greaseproof-paper',
  'mg-paper': 'NEW',                             // MG Paper — add
  'tracing-paper': 'tracing-paper',
  'lwc-paper': 'lwc-paper',
  'thermal-coating-base-paper': null,            // SKIP — user wants removed
};

let content = readFileSync(DATA_FILE, 'utf-8');
let updated = 0;
let misses = 0;
const newProducts = [];

const files = readdirSync(JSON_DIR).filter(f => f.match(/^\d{2}_.*\.json$/)).sort();

for (const file of files) {
  const json = JSON.parse(readFileSync(join(JSON_DIR, file), 'utf-8'));
  const p = json.product;
  const targetId = SLUG_MAP[p.slug];

  if (targetId === null) {
    console.log(`SKIP: ${p.slug} (${p.name})`);
    continue;
  }

  if (targetId === 'NEW') {
    console.log(`NEW: ${p.slug} — ${p.name} [${p.category}]`);
    newProducts.push(p);
    continue;
  }

  // Update tagline
  const tagRegex = new RegExp(`(id:\\s*"${targetId}"[\\s\\S]*?tagline:\\s*)("[^"]*")`, 'm');
  const tagMatch = content.match(tagRegex);
  if (tagMatch) {
    content = content.replace(tagRegex, `$1"${p.shortDescription.replace(/"/g, '\\"')}"`);
    updated++;
  } else {
    console.log(`  MISS tagline for: ${targetId}`);
    misses++;
  }

  // Update description
  const descRegex = new RegExp(`(id:\\s*"${targetId}"[\\s\\S]*?description:\\s*\n\\s*)("(?:[^"\\\\]|\\\\.)*")`, 'm');
  const descMatch = content.match(descRegex);
  if (descMatch) {
    content = content.replace(descRegex, `$1"${p.overview.replace(/"/g, '\\"').replace(/\$/g, '\\$')}"`);
    updated++;
  } else {
    console.log(`  MISS description for: ${targetId}`);
    misses++;
  }
}

writeFileSync(DATA_FILE, content, 'utf-8');
console.log(`\nDone! ${updated} fields updated, ${misses} misses.`);
console.log(`New products to add: ${newProducts.map(p => p.slug).join(', ')}`);
