// Generate missing blog article cover images
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const outDir = path.join(rootDir, "public", "images", "blog-articles");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const covers = [
  {
    filename: "black-paper-color-card-packaging-guide.jpg",
    title: "Black Paper &\nColor Card Guide",
    subtitle: "Premium Packaging",
    bg: "#1a1a1a",
    accent: "#c8923f",
    icon: "🎨",
    width: 800, height: 500
  },
  {
    filename: "cupstock-greaseproof-food-packaging-guide.jpg",
    title: "Cupstock &\nGreaseproof Paper",
    subtitle: "Food-Safe Packaging",
    bg: "#0f2b1a",
    accent: "#8fbc5a",
    icon: "🍽️",
    width: 800, height: 500
  },
  {
    filename: "sustainable-paper-fsc-compliance-guide.jpg",
    title: "Sustainable Paper &\nFSC Compliance",
    subtitle: "Environmental Standards",
    bg: "#163825",
    accent: "#7a9a6e",
    icon: "🌳",
    width: 800, height: 500
  },
  {
    filename: "paper-design-material-surface-texture-finish.png",
    title: "Paper as a\nDesign Material",
    subtitle: "Surface · Texture · Finish",
    bg: "#2d1b0e",
    accent: "#d4a858",
    icon: "✨",
    width: 800, height: 500
  },
];

async function generate() {
  console.log("🎨 Generating blog cover images…\n");
  for (const cov of covers) {
    // Escape XML special chars for SVG
    const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const lines = cov.title.split("\n");
    const y1 = lines.length > 1 ? 190 : 230;
    const y2 = y1 + 48;

    let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${cov.width}" height="${cov.height}" viewBox="0 0 ${cov.width} ${cov.height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${cov.bg}"/>
      <stop offset="100%" stop-color="${cov.bg}" stop-opacity="0.85"/>
    </linearGradient>
    <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${cov.accent}" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="${cov.accent}" stop-opacity="0.2"/>
    </linearGradient>
  </defs>
  <rect width="${cov.width}" height="${cov.height}" fill="url(#bg)"/>
  <!-- Decorative line -->
  <rect x="60" y="310" width="160" height="4" rx="2" fill="url(#line)"/>
  <!-- Icon -->
  <text x="60" y="140" font-family="Arial, sans-serif" font-size="64">${cov.icon}</text>
  <!-- Title line 1 -->
  <text x="60" y="${y1}" font-family="Georgia, 'Times New Roman', serif" font-size="34" font-weight="bold" fill="#ffffff">${esc(lines[0])}</text>`;

    if (lines.length > 1) {
      svg += `\n  <!-- Title line 2 -->
  <text x="60" y="${y2}" font-family="Georgia, 'Times New Roman', serif" font-size="34" font-weight="bold" fill="#ffffff">${esc(lines[1])}</text>`;
    }

    svg += `\n  <!-- Subtitle -->
  <text x="60" y="350" font-family="Arial, sans-serif" font-size="15" fill="${cov.accent}" font-weight="600" letter-spacing="2">${cov.subtitle}</text>
  <!-- Brand -->
  <text x="60" y="440" font-family="Arial, sans-serif" font-size="12" fill="rgba(255,255,255,0.35)" letter-spacing="1">YOUNGSUN PAPER</text>
</svg>`;

    const isJpg = cov.filename.endsWith(".jpg");
    try {
      const pipeline = sharp(Buffer.from(svg)).resize(cov.width, cov.height);
      if (isJpg) {
        await pipeline.jpeg({ quality: 85 }).toFile(path.join(outDir, cov.filename));
      } else {
        await pipeline.png({ quality: 85 }).toFile(path.join(outDir, cov.filename));
      }
      console.log(`  ✅  ${cov.filename}`);
    } catch (err) {
      console.error(`  ❌  ${cov.filename}: ${err.message}`);
    }
  }
  console.log("\n✅  Blog covers generated!");
}

generate().catch(err => { console.error(err); process.exit(1); });
