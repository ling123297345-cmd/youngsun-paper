import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(rootDir, "public");
const logoPath = path.join(publicDir, "images", "logo.png");
const mark = await sharp(logoPath)
  .extract({ left: 0, top: 0, width: 373, height: 373 })
  .png()
  .toBuffer();

const sizes = [48, 72, 96, 128, 144, 152, 167, 180, 192, 384, 512];

for (const size of sizes) {
  await writeIcon(`icon-${size}.png`, size, 0.06, { r: 250, g: 250, b: 248, alpha: 1 });
}

await writeIcon("favicon.png", 512, 0.06, { r: 250, g: 250, b: 248, alpha: 1 });
await writeIcon("apple-touch-icon.png", 180, 0.08, { r: 250, g: 250, b: 248, alpha: 1 });
await writeIcon("maskable-192.png", 192, 0.18, { r: 250, g: 250, b: 248, alpha: 1 });
await writeIcon("maskable-512.png", 512, 0.18, { r: 250, g: 250, b: 248, alpha: 1 });

console.log("Generated YOUNGSUN brand icons from the official round logo mark.");

async function writeIcon(filename, size, paddingRatio, background) {
  const padding = Math.round(size * paddingRatio);
  const markSize = size - padding * 2;
  const resizedMark = await sharp(mark)
    .resize(markSize, markSize, { fit: "contain" })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background,
    },
  })
    .composite([{ input: resizedMark, left: padding, top: padding }])
    .png({ compressionLevel: 9, palette: size <= 192 })
    .toFile(path.join(publicDir, filename));
}
