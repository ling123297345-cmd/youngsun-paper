import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

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
