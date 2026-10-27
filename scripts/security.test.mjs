import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const read = (file) => readFile(new URL(`../${file}`, import.meta.url), "utf8");

test("CMS access migration fails closed for a missing role and invalid settings", async () => {
  const sql = await read("supabase/migrations/20261026193000_harden_cms_access.sql");
  assert.match(sql, /auth\.uid\(\)\) is null or public\.current_cms_role\(\) is distinct from 'admin'/);
  assert.match(sql, /errcode = '42501'/);
  assert.match(sql, /target_active is null/);
  assert.match(sql, /target_role <> 'admin' or not target_active/);
  assert.match(sql, /from public, anon/);
});

test("enrolled MFA is enforced by the database helpers, not only a browser screen", async () => {
  const sql = await read("supabase/migrations/20261026194000_enforce_enrolled_cms_mfa.sql");
  assert.match(sql, /auth\.mfa_factors/);
  assert.match(sql, /status = 'verified'/);
  assert.match(sql, /'aal2'/);
  assert.match(sql, /create or replace function public\.is_cms_user\(\)/);
  assert.match(sql, /select public\.cms_mfa_satisfied\(\) and exists/);
  const edge = await read("supabase/functions/trigger-publish/index.ts");
  assert.match(edge, /supabase\.rpc\("is_cms_user"\)/);
  assert.match(edge, /if \(accessError \|\| !hasCmsAccess\)/);
});

test("generated CMS shell contains no inline scripts or public trackers", async () => {
  const html = await read("dist/admin/index.html");
  assert.match(html, /Content-Security-Policy/);
  assert.match(html, /script-src 'self'/);
  assert.match(html, /base-uri 'none'/);
  assert.match(html, /noindex,nofollow,noarchive/);
  assert.match(html, /name="referrer" content="no-referrer"/);
  assert.doesNotMatch(html, /clarity\.ms|googletagmanager|onclick=/);
  const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)];
  assert.ok(scripts.length > 0);
  for (const [, attributes, body] of scripts) {
    assert.match(attributes, /src="\/assets\//);
    assert.equal(body.trim(), "");
  }
});

test("service worker does not intercept CMS, third-party or authorized requests", async () => {
  const listeners = {};
  vm.runInNewContext(await read("public/sw.js"), {
    self: { location: { origin: "https://youngsunpaper.com" }, addEventListener: (name, handler) => { listeners[name] = handler; } },
    URL, console,
  });
  for (const [url, authorized] of [
    ["https://youngsunpaper.com/admin/", false],
    ["https://youngsunpaper.com/es/admin/", false],
    ["https://project.supabase.co/rest/v1/products", false],
    ["https://youngsunpaper.com/private-data", true],
  ]) {
    let intercepted = false;
    listeners.fetch({ request: { url, method: "GET", headers: { has: () => authorized } }, respondWith: () => { intercepted = true; } });
    assert.equal(intercepted, false, url);
  }
});
