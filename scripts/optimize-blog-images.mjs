import { readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const dataPath = path.join(root, "src", "blogData.js");
const imageDirectory = path.join(root, "public", "images", "blog-articles");
const sustainableReplacement = process.argv[2] ? path.resolve(process.argv[2]) : null;
const sustainableFilename = "sustainable-paper-fsc-compliance-guide.jpg";

const source = await readFile(dataPath, "utf8");
const imageReferences = [
  ...new Set(
    [...source.matchAll(/image:\s*"\/images\/blog-articles\/([^"]+)"/g)].map(
      (match) => match[1],
    ),
  ),
];

if (imageReferences.length === 0) {
  throw new Error("No Blog article image references were found.");
}

let originalBytes = 0;
let optimizedBytes = 0;

for (const filename of imageReferences) {
  const input =
    filename === sustainableFilename && sustainableReplacement
      ? sustainableReplacement
      : path.join(imageDirectory, filename);
  const outputFilename = filename.replace(/\.(?:jpe?g|png)$/i, ".webp");
  const output = path.join(imageDirectory, outputFilename);
  const inputStats = await stat(input);

  await sharp(input)
    .rotate()
    .resize(1280, 800, {
      fit: "cover",
      position: "centre",
      withoutEnlargement: true,
    })
    .webp({ quality: 82, effort: 5, smartSubsample: true })
    .toFile(output);

  const outputStats = await stat(output);
  originalBytes += inputStats.size;
  optimizedBytes += outputStats.size;
  console.log(
    `${filename} -> ${outputFilename} (${Math.round(outputStats.size / 1024)} KB)`,
  );
}

const updatedSource = source.replace(
  /(image:\s*"\/images\/blog-articles\/[^"]+)\.(?:jpe?g|png)(")/gi,
  "$1.webp$2",
);

if (updatedSource !== source) {
  await writeFile(dataPath, updatedSource, "utf8");
}

const savedPercent = Math.round((1 - optimizedBytes / originalBytes) * 100);
console.log(
  `Optimized ${imageReferences.length} Blog images: ${Math.round(originalBytes / 1024 / 1024)} MB -> ${(
    optimizedBytes /
    1024 /
    1024
  ).toFixed(1)} MB (${savedPercent}% smaller).`,
);
