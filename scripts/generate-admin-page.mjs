import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const dist = resolve(process.cwd(), "dist");
const sourcePath = resolve(dist, "index.html");
const adminDirectory = resolve(dist, "admin");
const adminPath = resolve(adminDirectory, "index.html");

let html = await readFile(sourcePath, "utf8");

html = html
  .replaceAll('href="./assets/', 'href="/assets/')
  .replaceAll('src="./assets/', 'src="/assets/')
  .replaceAll('href="./manifest.json"', 'href="/manifest.json"')
  .replaceAll('href="./apple-touch-icon.png"', 'href="/apple-touch-icon.png"')
  .replaceAll('href="./icon-48.png"', 'href="/icon-48.png"')
  .replace(/<link rel="canonical"[^>]*>/i, '<link rel="canonical" href="https://youngsunpaper.com/admin/" />')
  .replace(/<title>[^<]*<\/title>/i, "<title>YOUNGSUN PAPER 内容管理后台</title>")
  .replace("</head>", '  <meta name="robots" content="noindex,nofollow,noarchive" />\n</head>');

await mkdir(adminDirectory, { recursive: true });
await writeFile(adminPath, html, "utf8");

console.log("Generated secure /admin/ entry page with root asset paths.");
