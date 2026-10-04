import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { initConversionTracking } from "./analytics.js";
import "./styles.css";

// Preserve old shared links while moving the Spanish site to crawlable /es/ URLs.
// A full navigation ensures crawlers and browsers load the Spanish pre-rendered HTML.
const initialUrl = new URL(window.location.href);
if (initialUrl.searchParams.get("lang") === "es" && !/^\/es(?:\/|$)/.test(initialUrl.pathname)) {
  initialUrl.searchParams.delete("lang");
  const query = initialUrl.searchParams.toString();
  const spanishPath = initialUrl.pathname === "/" ? "/es/" : `/es${initialUrl.pathname}`;
  window.location.replace(`${spanishPath}${query ? `?${query}` : ""}${initialUrl.hash}`);
}

// Static pages carry complete SEO tags for crawlers. Remove that server copy
// before React Helmet mounts so the browser DOM keeps one authoritative set.
[
  'meta[name="description"]',
  'link[rel="canonical"]',
  'link[rel="alternate"][hreflang]',
  'meta[property="og:title"]',
  'meta[property="og:description"]',
  'meta[property="og:url"]',
  'meta[property="og:image"]',
  'meta[property="og:locale"]',
  'meta[property="og:locale:alternate"]',
  'meta[name="twitter:title"]',
  'meta[name="twitter:description"]',
  'meta[name="twitter:image"]',
].forEach((selector) => document.querySelectorAll(selector).forEach((element) => element.remove()));

initConversionTracking();

// ── Render the application ──────────────────────────────────
const root = document.getElementById("root");
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ── PWA: Register Service Worker ────────────────────────────
if ("serviceWorker" in navigator) {
  // Small delay so the page renders first, then register SW
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js", { scope: "/" })
      .then((registration) => {
        console.log("[PWA] Service Worker registered:", registration.scope);

        // ── Check for SW updates ──────────────────────────
        registration.addEventListener("updatefound", () => {
          const installingWorker = registration.installing;
          if (!installingWorker) return;

          installingWorker.addEventListener("statechange", () => {
            if (
              installingWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              // New version available — notify the app
              console.log("[PWA] New version available. Refresh to update.");
              window.dispatchEvent(
                new CustomEvent("pwa-update-available", {
                  detail: { registration },
                })
              );
            }
          });
        });
      })
      .catch((err) => {
        console.warn("[PWA] Service Worker registration failed:", err.message);
      });

    // ── Handle updates pushed from the SW ─────────────────
    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (refreshing) return;
      refreshing = true;
      console.log("[PWA] Controller changed — reloading for update.");
      window.location.reload();
    });
  });
}
