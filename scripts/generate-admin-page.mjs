import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const dist = resolve(process.cwd(), "dist");
const html = (await readFile(resolve(dist, "index.html"), "utf8"))
  .replaceAll('href="./assets/', 'href="/assets/')
  .replaceAll('src="./assets/', 'src="/assets/');
const scripts = [...html.matchAll(/<script\b[^>]*\bsrc="\/assets\/[^\"]+"[^>]*><\/script>/g)].map(([tag]) => tag);
const assets = [...html.matchAll(/<link\b[^>]*\bhref="\/assets\/[^\"]+"[^>]*>/g)].map(([tag]) => tag);
if (!scripts.length) throw new Error("Missing built application entry for the CMS.");

// The CMS gets its own shell without public trackers or inline scripts.
// GitHub Pages does not support custom response headers.
const csp = [
  "default-src 'none'", "script-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob: https://*.supabase.co",
  "connect-src 'self' https://*.supabase.co wss://*.supabase.co",
  "manifest-src 'self'", "worker-src 'none'", "frame-src 'none'",
  "object-src 'none'", "base-uri 'none'", "form-action 'self'",
].join("; ");
const output = `<!doctype html>
<html lang="zh-CN"><head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="Content-Security-Policy" content="${csp}" />
<meta name="referrer" content="no-referrer" />
<meta name="robots" content="noindex,nofollow,noarchive" />
<title>YOUNGSUN PAPER 内容管理后台</title>
<link rel="canonical" href="https://youngsunpaper.com/admin/" />
<link rel="icon" href="/icon-48.png" />
${assets.join("\n")}
${scripts.join("\n")}
</head><body><div id="root"></div></body></html>`;
await mkdir(resolve(dist, "admin"), { recursive: true });
await writeFile(resolve(dist, "admin/index.html"), output, "utf8");
console.log("Generated isolated /admin/ entry with CSP and no public analytics.");
