// ============================================================
// YOUNGSUN PAPER — PWA Icon Generator
// Generates all required icon sizes from the master SVG
// Uses sharp (already a project dependency)
// ============================================================

import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");
const svgPath = path.join(publicDir, "icon.svg");

if (!fs.existsSync(svgPath)) {
  console.error("❌ public/icon.svg not found. Create it first.");
  process.exit(1);
}

const svgBuffer = fs.readFileSync(svgPath);

// ── Icon sizes for all platforms ────────────────────────────
const sizes = [
  { name: "icon-48.png",  size: 48,  desc: "Small" },
  { name: "icon-72.png",  size: 72,  desc: "iOS (legacy)" },
  { name: "icon-96.png",  size: 96,  desc: "Android (legacy)" },
  { name: "icon-128.png", size: 128, desc: "Chrome Web Store" },
  { name: "icon-144.png", size: 144, desc: "Windows tile" },
  { name: "icon-152.png", size: 152, desc: "iOS (legacy)" },
  { name: "icon-167.png", size: 167, desc: "iOS iPad Pro" },
  { name: "icon-180.png", size: 180, desc: "iOS modern" },
  { name: "icon-192.png", size: 192, desc: "Android" },
  { name: "icon-384.png", size: 384, desc: "Android high-res" },
  { name: "icon-512.png", size: 512, desc: "Android / PWA" },
];

// ── Maskable icon (with safe zone padding) ──────────────────
const maskableSizes = [
  { name: "maskable-192.png", size: 192 },
  { name: "maskable-512.png", size: 512 },
];

// ── Generate standard icons ─────────────────────────────────
async function generateIcons() {
  console.log("🎨 Generating PWA icons from public/icon.svg …\n");

  for (const { name, size, desc } of sizes) {
    try {
      await sharp(svgBuffer)
        .resize(size, size)
        .png({ quality: 90 })
        .toFile(path.join(publicDir, name));
      console.log(`  ✅  ${name.padEnd(16)}  ${String(size).padStart(3)}×${String(size).padEnd(3)}px  — ${desc}`);
    } catch (err) {
      console.error(`  ❌  ${name} failed:`, err.message);
    }
  }

  console.log("\n🖼️  Standard icons complete.\n");

  // ── Generate maskable icons (with 80% safe zone) ──────────
  console.log("🛡️  Generating maskable icons (80% safe zone) …\n");

  // Build maskable SVG: canvas with padding so the content is within
  // the safe zone even after platform masking
  const maskableSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <!-- Maskable safe zone background: 512px canvas, icon content at 410px centered -->
  <rect width="512" height="512" rx="0" fill="#0f2b1a"/>
  <!-- Centered icon content scaled to 80% -->
  <g transform="translate(51.2, 51.2) scale(0.8)">
    <defs>
      <linearGradient id="mbg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#163825"/>
        <stop offset="100%" stop-color="#0f2b1a"/>
      </linearGradient>
      <radialGradient id="mglow" cx="0.5" cy="0.35" r="0.5">
        <stop offset="0%" stop-color="rgba(200,146,63,0.12)"/>
        <stop offset="100%" stop-color="rgba(200,146,63,0)"/>
      </radialGradient>
    </defs>
    <rect width="512" height="512" rx="96" fill="url(#mbg)"/>
    <rect width="512" height="512" rx="96" fill="url(#mglow)"/>
    <rect x="156" y="380" width="200" height="4" rx="2" fill="#c8923f" opacity="0.7"/>
    <text x="256" y="215" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="200" font-weight="bold" fill="#ffffff" letter-spacing="-2">Y</text>
    <text x="256" y="365" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="170" font-weight="bold" fill="#c8923f" letter-spacing="-2">P</text>
  </g>
</svg>`;

  for (const { name, size } of maskableSizes) {
    try {
      await sharp(Buffer.from(maskableSvg))
        .resize(size, size)
        .png({ quality: 90 })
        .toFile(path.join(publicDir, name));
      console.log(`  ✅  ${name.padEnd(16)}  ${String(size).padStart(3)}×${String(size).padEnd(3)}px  — maskable`);
    } catch (err) {
      console.error(`  ❌  ${name} failed:`, err.message);
    }
  }

  // ── Apple touch icon (no mask padding, just the icon) ─────
  try {
    await sharp(svgBuffer)
      .resize(180, 180)
      .png({ quality: 95 })
      .toFile(path.join(publicDir, "apple-touch-icon.png"));
    console.log("\n  ✅  apple-touch-icon.png   180×180px  — iOS home screen");
  } catch (err) {
    console.error("  ❌  apple-touch-icon.png failed:", err.message);
  }

  console.log("\n✅  All PWA icons generated successfully!\n");
  console.log("📁  Output: " + publicDir);
}

generateIcons().catch((err) => {
  console.error("❌  Icon generation failed:", err);
  process.exit(1);
});
