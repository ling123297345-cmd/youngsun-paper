// Update product main image paths in data.js
import { readFileSync, writeFileSync } from 'fs';

const DATA = 'D:/网站/youngsunpaper.com/src/data.js';

const UPDATES = {
  'grey-board': 'images/products/package-board/grey-board-main.jpg',
  'black-paper': 'images/products/package-board/black-paper-main.jpg',
  'color-card-paper': 'images/products/package-board/color-card-paper-main.jpg',
  'kraft-paper': 'images/products/package-board/kraft-paper-main.jpg',
  'c2s-art-board': 'images/products/package-board/c2s-art-board-main.jpg',
  'leather-paper': 'images/products/fancy-paper/leather-paper-main.jpg',
  'pearlescent-paper': 'images/products/fancy-paper/pearlescent-paper-main.jpg',
  'soft-touch-paper': 'images/products/fancy-paper/soft-touch-paper-main.jpg',
  'embossed-paper': 'images/products/fancy-paper/embossed-paper-main.jpg',
  'label-paper': 'images/products/fancy-paper/label-paper-main.jpg',
  'ncr-paper': 'images/products/culture-paper/ncr-paper-main.jpg',
  'a4-copy-paper': 'images/products/culture-paper/a4-copy-paper-main.jpg',
  'a4-thermal-paper': 'images/products/culture-paper/a4-thermal-paper-main.jpg',
  'thermal-paper-roll': 'images/products/culture-paper/thermal-paper-roll-main.jpg',
  'greaseproof-paper': 'images/products/food-packaging/greaseproof-paper-main.jpg',
  'silicone-coated-paper': 'images/products/food-packaging/silicone-coated-paper-main.jpg',
  'art-paper': 'images/products/culture-paper/art-paper-main.jpg',
};

let content = readFileSync(DATA, 'utf-8');
let count = 0;

for (const [id, newPath] of Object.entries(UPDATES)) {
  // Find the image: field after the product id
  const pattern = new RegExp(
    `(id:\\s*"${id}"[\\s\\S]*?image:\\s*)"[^"]*"`,
    'm'
  );
  const match = content.match(pattern);
  if (match) {
    content = content.replace(pattern, `$1"${newPath}"`);
    count++;
    console.log(`OK: ${id} → ${newPath}`);
  } else {
    console.log(`MISS: ${id} not found`);
  }
}

writeFileSync(DATA, content, 'utf-8');
console.log(`\nUpdated ${count} product images.`);
