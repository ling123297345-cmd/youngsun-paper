import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const productImageDir = path.join(rootDir, "public", "images", "products");
const dataPath = path.join(rootDir, "src", "data.js");

const files = await findMainImages(productImageDir);
const replacements = [];
let originalBytes = 0;
let optimizedBytes = 0;

for (const inputPath of files) {
  const outputPath = inputPath.replace(/\.jpe?g$/i, ".webp");
  const inputStat = await fs.stat(inputPath);

  await sharp(inputPath)
    .rotate()
    .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 84, effort: 5 })
    .toFile(outputPath);

  const outputStat = await fs.stat(outputPath);
  originalBytes += inputStat.size;
  optimizedBytes += outputStat.size;

  const oldUrl = `/${path.relative(path.join(rootDir, "public"), inputPath).replaceAll(path.sep, "/")}`;
  replacements.push([oldUrl, oldUrl.replace(/\.jpe?g$/i, ".webp")]);
}

let dataSource = await fs.readFile(dataPath, "utf8");
for (const [oldUrl, newUrl] of replacements) {
  dataSource = dataSource.replaceAll(oldUrl, newUrl);
}
await fs.writeFile(dataPath, dataSource, "utf8");

const savedPercent = originalBytes
  ? Math.round((1 - optimizedBytes / originalBytes) * 100)
  : 0;

console.log(
  `Optimized ${files.length} product main images: ${formatMb(originalBytes)} MB -> ${formatMb(optimizedBytes)} MB (${savedPercent}% smaller).`,
);

async function findMainImages(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const matches = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      matches.push(...(await findMainImages(entryPath)));
    } else if (/-main\.jpe?g$/i.test(entry.name)) {
      matches.push(entryPath);
    }
  }

  return matches.sort();
}

function formatMb(bytes) {
  return (bytes / 1024 / 1024).toFixed(1);
}
