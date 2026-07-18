// Apply 20 YOUNGSUN product descriptions to data.js
import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const JSON_DIR = 'C:/Users/肖灵/Desktop/产品主图/YOUNGSUN_20_Product_Descriptions/YOUNGSUN_20_Product_Descriptions';
const DATA_FILE = 'D:/网站/youngsunpaper.com/src/data.js';

// Map JSON slugs to data.js product IDs
const SLUG_MAP = {
  'grey-board': 'grey-board',
  'black-paper': 'black-paper',
  'color-card-paper': 'color-card-paper',
  'folding-box-board': 'folding-box-board',
  'c2s-high-bulk-bristol-board': 'c2s-art-board',
  'duplex-board': 'duplex-board',
  'coated-kraft-back-board': null,       // NEW - will add separately
  'laminated-grey-board': null,           // NEW
  'purple-core-playing-card-paper': null, // NEW
  'c2s-art-paper': 'art-paper',           // User added this ID
  'woodfree-offset-paper': 'woodfree-paper',
  'copy-paper': 'copy-paper',
  'color-offset-paper': 'color-offset-paper',
  'kraft-paper': 'kraft-paper',
  'cupstock-board': 'cup-paper',
  'greaseproof-paper': 'greaseproof-paper',
  'mg-paper': null,                       // NEW
  'tracing-paper': 'tracing-paper',
  'lwc-paper': 'lwc-paper',
  'thermal-coating-base-paper': null,     // NEW
};

let content = readFileSync(DATA_FILE, 'utf-8');
let updated = 0;
let missing = 0;
const newProducts = [];

const files = readdirSync(JSON_DIR).filter(f => f.match(/^\d{2}_.*\.json$/)).sort();

for (const file of files) {
  const json = JSON.parse(readFileSync(join(JSON_DIR, file), 'utf-8'));
  const p = json.product;
  const targetId = SLUG_MAP[p.slug];

  if (!targetId) {
    newProducts.push({ slug: p.slug, name: p.name, category: p.category, shortDescription: p.shortDescription, overview: p.overview });
    console.log(`NEW: ${p.slug} — ${p.name} [${p.category}]`);
    continue;
  }

  // Find the product block: id: "targetId" ... to the next product or end
  // We'll use a more robust approach: find the tagline and description after the id
  const idPattern = new RegExp(`(id:\\s*"${targetId}"[\\s\\S]*?tagline:\\s*)("[^"]*")`, 'm');
  const tagMatch = content.match(idPattern);
  if (tagMatch) {
    const newTagline = `"${p.shortDescription.replace(/"/g, '\\"')}"`;
    content = content.replace(idPattern, `$1${newTagline}`);
    updated++;
  } else {
    console.log(`  MISS tagline for: ${targetId}`);
    missing++;
  }

  // Update description: the long string after "description:\n"
  const descPattern = new RegExp(`(id:\\s*"${targetId}"[\\s\\S]*?description:\\s*\n\\s*)("(?:[^"\\\\]|\\\\.)*")`, 'm');
  const descMatch = content.match(descPattern);
  if (descMatch) {
    const newDesc = `"${p.overview.replace(/"/g, '\\"').replace(/\$/g, '\\$')}"`;
    content = content.replace(descPattern, `$1${newDesc}`);
    updated++;
  } else {
    console.log(`  MISS description for: ${targetId}`);
    missing++;
  }
}

writeFileSync(DATA_FILE, content, 'utf-8');
console.log(`\nDone! ${updated} fields updated, ${missing} misses.`);
console.log(`New products to add (${newProducts.length}):`);
newProducts.forEach(p => console.log(`  - ${p.slug}: ${p.name} [${p.category}]`));
