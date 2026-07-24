// ============================================================
// YOUNGSUN PAPER — Partner Logo Generator
// Creates professional SVG logos for all partner companies
// then converts to PNG using sharp
// ============================================================

import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const outDir = path.join(rootDir, "public", "images", "partners");

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const logos = [
  // ── Mill Partners ──────────────────────────────
  {
    name: "partner-app",
    text: "APP",
    subtitle: "Sinar Mas",
    bgColor: "#00529B",  // Blue
    textColor: "#FFFFFF",
    subtitleColor: "#8CC63F", // Green accent
    width: 200, height: 80
  },
  {
    name: "partner-ninedragon",
    text: "NINE DRAGONS",
    subtitle: "PAPER",
    bgColor: "#CC0000",  // Red
    textColor: "#FFFFFF",
    subtitleColor: "#FFD700", // Gold accent
    width: 200, height: 80
  },
  {
    name: "partner-chenming",
    text: "晨鸣纸业",
    subtitle: "CHENMING PAPER",
    bgColor: "#006B3F",  // Green-blue
    textColor: "#FFFFFF",
    subtitleColor: "#00A86B",
    width: 200, height: 80
  },
  {
    name: "partner-bohui",
    text: "BOHUI",
    subtitle: "博汇纸业",
    bgColor: "#1A5276",  // Dark blue
    textColor: "#FFFFFF",
    subtitleColor: "#85C1E9",
    width: 200, height: 80
  },
  {
    name: "partner-sunpaper",
    text: "SUN PAPER",
    subtitle: "太阳纸业",
    bgColor: "#E67E22",  // Orange/sun
    textColor: "#FFFFFF",
    subtitleColor: "#FDEBD0",
    width: 200, height: 80
  },
  // ── Client Brands ─────────────────────────────
  {
    name: "client-nikon",
    text: "Nikon",
    subtitle: "",
    bgColor: "#FFE100",  // Nikon yellow
    textColor: "#000000",
    subtitleColor: "",
    width: 200, height: 80,
    fontStyle: "bold italic"
  },
  {
    name: "client-toyota",
    text: "TOYOTA",
    subtitle: "",
    bgColor: "#EB0A1E",  // Toyota red
    textColor: "#FFFFFF",
    subtitleColor: "",
    width: 200, height: 80
  },
  {
    name: "client-microsoft",
    text: "Microsoft",
    subtitle: "",
    bgColor: "#F25022",  // (will use gradient-like effect)
    textColor: "#737373",  // Gray text
    subtitleColor: "",
    width: 200, height: 80
  },
];

async function generateAll() {
  console.log("🎨 Generating partner/client logo images…\n");

  for (const logo of logos) {
    const fontSize = logo.text.length > 10 ? 14 : logo.text.length > 6 ? 18 : 22;
    const hasSub = logo.subtitle && logo.subtitle.length > 0;

    // Build SVG
    let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${logo.width}" height="${logo.height}" viewBox="0 0 ${logo.width} ${logo.height}">
  <rect width="${logo.width}" height="${logo.height}" rx="8" fill="${logo.bgColor}"/>
  <text x="${logo.width / 2}" y="${hasSub ? logo.height / 2 - 4 : logo.height / 2 + 7}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${fontSize}px" font-weight="700" fill="${logo.textColor}"${logo.fontStyle ? ` font-style="${logo.fontStyle}"` : ""}>${logo.text}</text>`;

    if (hasSub) {
      svgContent += `
  <text x="${logo.width / 2}" y="${logo.height / 2 + 20}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="13px" font-weight="600" fill="${logo.subtitleColor}" letter-spacing="1">${logo.subtitle}</text>`;
    }

    let skipClosing = false;

    // Microsoft special: 4-color squares
    if (logo.name === "client-microsoft") {
      skipClosing = true;
      svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${logo.width}" height="${logo.height}" viewBox="0 0 ${logo.width} ${logo.height}">
  <rect width="${logo.width}" height="${logo.height}" rx="8" fill="#FFFFFF" stroke="#E5E5E5" stroke-width="1"/>
  <!-- 4-color squares -->
  <rect x="28" y="24" width="14" height="14" fill="#F25022"/>
  <rect x="44" y="24" width="14" height="14" fill="#7FBA00"/>
  <rect x="28" y="40" width="14" height="14" fill="#00A4EF"/>
  <rect x="44" y="40" width="14" height="14" fill="#FFB900"/>
  <text x="90" y="50" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif" font-size="20px" font-weight="600" fill="#737373">Microsoft</text>
</svg>`;
    }

    // Nikon special: black on yellow, italic
    if (logo.name === "client-nikon") {
      skipClosing = true;
      svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${logo.width}" height="${logo.height}" viewBox="0 0 ${logo.width} ${logo.height}">
  <rect width="${logo.width}" height="${logo.height}" rx="8" fill="#FFE100"/>
  <rect x="12" y="20" width="4" height="40" fill="#000000"/>
  <text x="35" y="52" font-family="Arial, Helvetica, sans-serif" font-size="30px" font-weight="900" font-style="italic" fill="#000000">Nikon</text>
</svg>`;
    }

    // Toyota special
    if (logo.name === "client-toyota") {
      skipClosing = true;
      svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${logo.width}" height="${logo.height}" viewBox="0 0 ${logo.width} ${logo.height}">
  <rect width="${logo.width}" height="${logo.height}" rx="8" fill="#FFFFFF" stroke="#E5E5E5" stroke-width="1"/>
  <!-- Overlapping ovals -->
  <ellipse cx="60" cy="40" rx="28" ry="18" fill="none" stroke="#EB0A1E" stroke-width="4"/>
  <ellipse cx="70" cy="40" rx="28" ry="18" fill="none" stroke="#EB0A1E" stroke-width="4"/>
  <ellipse cx="80" cy="40" rx="28" ry="18" fill="none" stroke="#EB0A1E" stroke-width="4"/>
  <text x="145" y="50" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="20px" font-weight="700" fill="#EB0A1E" letter-spacing="2">TOYOTA</text>
</svg>`;
    }

    if (!skipClosing) svgContent += `\n</svg>`;

    const svgBuffer = Buffer.from(svgContent);

    // Save SVG source
    fs.writeFileSync(path.join(outDir, `${logo.name}.svg`), svgContent);

    // Convert to PNG
    try {
      await sharp(svgBuffer)
        .resize(logo.width, logo.height)
        .png()
        .toFile(path.join(outDir, `${logo.name}.png`));
      console.log(`  ✅  ${logo.name}.png  (${logo.width}×${logo.height})  — ${logo.text}`);
    } catch (err) {
      console.error(`  ❌  ${logo.name}.png failed:`, err.message);
    }
  }

  console.log("\n✅  All partner logos generated!");
  console.log("📁  Output: " + outDir);
}

generateAll().catch((err) => {
  console.error("❌  Failed:", err);
  process.exit(1);
});
