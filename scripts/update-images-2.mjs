import { readFileSync, writeFileSync } from 'fs';

const DATA = 'D:/网站/youngsunpaper.com/src/data.js';

const UPDATES = {
  'color-offset-paper': 'images/products/culture-paper/color-offset-paper-main.jpg',
  'copy-paper': 'images/products/culture-paper/copy-paper-main.jpg',
  'cup-paper': 'images/products/food-packaging/cup-paper-main.jpg',
  'duplex-board': 'images/products/package-board/duplex-board-main.jpg',
  'lwc-paper': 'images/products/culture-paper/lwc-paper-main.jpg',
  'pe-coated-paper': 'images/products/package-board/pe-coated-paper-main.jpg',
  'folding-box-board': 'images/products/package-board/folding-box-board-main.jpg',
  'tracing-paper': 'images/products/culture-paper/tracing-paper-main.jpg',
  'woodfree-paper': 'images/products/culture-paper/woodfree-paper-main.jpg',
  'art-paper': 'images/products/culture-paper/art-paper-main.jpg',
  'embossed-paper': 'images/products/fancy-paper/embossed-paper-main.jpg',
};

let content = readFileSync(DATA, 'utf-8');
let count = 0;

for (const [id, newPath] of Object.entries(UPDATES)) {
  const pattern = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?image:\\s*)"[^"]*"`, 'm');
  const match = content.match(pattern);
  if (match) {
    content = content.replace(pattern, `$1"${newPath}"`);
    count++;
    console.log(`OK: ${id}`);
  } else {
    console.log(`MISS: ${id}`);
  }
}

writeFileSync(DATA, content, 'utf-8');
console.log(`\nUpdated ${count} images.`);
