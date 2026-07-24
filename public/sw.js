// ============================================================
// YOUNGSUN PAPER — Service Worker
// Smart caching: offline access + always-fresh content
// ============================================================

const CACHE_VERSION = "ysp-v3";
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const IMAGE_CACHE = `${CACHE_VERSION}-images`;
const PAGE_CACHE = `${CACHE_VERSION}-pages`;

// ── Assets to precache on install ─────────────────────────
// These load instantly after first visit, even offline
const PRECACHE_URLS = [
  "/offline.html",
  "/",
  "/manifest.json",
  // App shell icons
  "/icon-48.png",
  "/icon-72.png",
  "/icon-96.png",
  "/icon-128.png",
  "/icon-144.png",
  "/icon-152.png",
  "/icon-167.png",
  "/icon-180.png",
  "/icon-192.png",
  "/icon-384.png",
  "/icon-512.png",
  "/maskable-192.png",
  "/maskable-512.png",
  "/apple-touch-icon.png",
  // Core images to show offline
  "/images/logo.png",
  "/images/hero/youngsun-paper-hero-banner-hd.png",
  "/images/products/fancy-paper/background-hangtag-section-clean.png",
];

// ── Install: precache core assets ─────────────────────────
self.addEventListener("install", (event) => {
  console.log("[SW] Installing — precaching core assets…");
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {
        console.log(`[SW] Caching ${PRECACHE_URLS.length} core files`);
        return cache.addAll(PRECACHE_URLS).catch((err) => {
          // Don't fail the whole install if a few files fail
          console.warn("[SW] Some precache files failed (non-critical):", err.message);
        });
      })
      .then(() => self.skipWaiting())
  );
});

// ── Activate: purge old caches ────────────────────────────
self.addEventListener("activate", (event) => {
  console.log("[SW] Activating — cleaning old caches…");
  event.waitUntil(
    caches
      .keys()
      .then((keys) => {
        return Promise.all(
          keys
            .filter((key) => !key.startsWith(CACHE_VERSION))
            .map((key) => {
              console.log(`[SW] Deleting old cache: ${key}`);
              return caches.delete(key);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

// ── Helper: is a request for a navigation (HTML page) ─────
function isNavigation(request) {
  return request.mode === "navigate";
}

// ── Helper: is an image request ───────────────────────────
function isImage(request) {
  return request.destination === "image";
}

// ── Helper: is a static asset (JS, CSS, fonts) ────────────
function isStaticAsset(request) {
  const dest = request.destination;
  return dest === "script" || dest === "style" || dest === "font";
}

// ── Fetch: smart routing ──────────────────────────────────
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Skip non-GET requests and browser extensions
  if (request.method !== "GET") return;

  // Skip chrome-extension:// and other non-http schemes
  const url = new URL(request.url);
  if (!url.protocol.startsWith("http")) return;

  // ── Navigation (HTML pages): Network-first, fallback to offline page ──
  if (isNavigation(request)) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache a copy for later offline use
          const clone = response.clone();
          caches.open(PAGE_CACHE).then((cache) => {
            cache.put(request, clone);
          });
          return response;
        })
        .catch(() => {
          // Try serving from cache
          return caches.match(request).then((cached) => {
            if (cached) return cached;
            // If it's a page request, show the offline page
            return caches.match("/offline.html");
          });
        })
    );
    return;
  }

  // ── Images: Cache-first (fastest + offline) ─────────────
  if (isImage(request)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const fetchPromise = fetch(request).then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(IMAGE_CACHE).then((cache) => {
              cache.put(request, clone);
            });
          }
          return response;
        });
        // Return cached immediately, update cache in background
        return cached || fetchPromise;
      })
    );
    return;
  }

  // ── Static assets (JS/CSS/fonts): Stale-while-revalidate ───
  if (isStaticAsset(request)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const fetchPromise = fetch(request).then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(STATIC_CACHE).then((cache) => {
              cache.put(request, clone);
            });
          }
          return response;
        });
        return cached || fetchPromise;
      })
    );
    return;
  }

  // ── Everything else (API, analytics, etc.): Network-only ──
  // We don't cache these — let them fail gracefully if offline
  event.respondWith(
    fetch(request).catch(() => {
      // For JSON/API requests, return a simple offline indicator
      if (request.headers.get("accept")?.includes("application/json")) {
        return new Response(JSON.stringify({ offline: true }), {
          status: 503,
          headers: { "Content-Type": "application/json" },
        });
      }
      // For other requests, just pass through the error
      return new Response("Offline — resource not cached", { status: 503 });
    })
  );
});

// ── Message handling ──────────────────────────────────────
// Allows the main page to request cache updates
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
  if (event.data && event.data.type === "CLEAR_CACHES") {
    caches.keys().then((keys) => {
      keys.forEach((key) => caches.delete(key));
    });
  }
});
