// Fix all image paths to use absolute paths
import { readFileSync, writeFileSync } from 'fs';

const DATA = 'D:/网站/youngsunpaper.com/src/data.js';
const BLOG = 'D:/网站/youngsunpaper.com/src/blogData.js';

function fixPaths(file) {
  let content = readFileSync(file, 'utf-8');
  // Fix image: "images/..." → image: "/images/..."
  content = content.replace(/image:\s*"(images\/[^"]+)"/g, 'image: "/$1"');
  // Fix gallery src: "images/..." → "/images/..."
  content = content.replace(/"src":\s*"(images\/[^"]+)"/g, '"src": "/$1"');
  // Fix blog post content links that use images/
  // Also fix any url() references
  writeFileSync(file, content, 'utf-8');
}

fixPaths(DATA);
fixPaths(BLOG);

console.log('Fixed image paths in data.js and blogData.js to absolute paths');

// Quick verify
const d = readFileSync(DATA, 'utf-8');
const b = readFileSync(BLOG, 'utf-8');
const dRel = (d.match(/image:\s*"images\//g) || []).length;
const bRel = (b.match(/image:\s*"images\//g) || []).length;
console.log(`Remaining relative paths: data.js=${dRel}, blogData.js=${bRel}`);
