const PRODUCTION_HOSTS = new Set([
  "youngsunpaper.com",
  "www.youngsunpaper.com",
]);

const recentEvents = new Map();
const DEFAULT_DEDUPE_WINDOW = 1200;

export function isAnalyticsEnabled() {
  return (
    typeof window !== "undefined" &&
    PRODUCTION_HOSTS.has(window.location.hostname.toLowerCase())
  );
}

function getPageContext() {
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  const productIndex = pathParts.indexOf("products");

  return {
    page_path: window.location.pathname,
    page_title: document.title,
    product: productIndex >= 0 ? pathParts[productIndex + 1] || "products" : undefined,
  };
}

function cleanParameters(parameters) {
  return Object.fromEntries(
    Object.entries(parameters).filter(([, value]) => value !== undefined && value !== null && value !== "")
  );
}

export function trackConversion(
  eventName,
  parameters = {},
  { clarityEvent = eventName, dedupeKey = eventName, dedupeWindow = DEFAULT_DEDUPE_WINDOW } = {}
) {
  if (!isAnalyticsEnabled()) return false;

  const now = Date.now();
  const previousEventTime = recentEvents.get(dedupeKey) || 0;
  if (now - previousEventTime < dedupeWindow) return false;
  recentEvents.set(dedupeKey, now);

  const eventParameters = cleanParameters({
    event_category: "conversion",
    ...getPageContext(),
    ...parameters,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParameters);
  }

  if (typeof window.clarity === "function") {
    window.clarity("event", clarityEvent);
  }

  return true;
}

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getLinkLocation(element) {
  if (element.closest("header, nav")) return "header";
  if (element.closest("footer")) return "footer";
  if (element.closest(".floating-actions")) return "floating_button";
  if (element.closest("form")) return "form";
  return "page_content";
}

function getFileName(href) {
  try {
    const pathname = new URL(href, window.location.href).pathname;
    return decodeURIComponent(pathname.split("/").pop() || "download");
  } catch {
    return "download";
  }
}

function trackLinkInteraction(event) {
  const element = event.target.closest("a, button");
  if (!element) return;

  const explicitEvent = element.dataset.analyticsEvent;
  const linkLocation = getLinkLocation(element);
  const linkText = normalizeText(element.textContent || element.getAttribute("aria-label") || "");
  const href = element instanceof HTMLAnchorElement ? element.getAttribute("href") || "" : "";
  const normalizedHref = href.toLowerCase();
  const context = { link_location: linkLocation };

  if (explicitEvent) {
    trackConversion(explicitEvent, context, {
      dedupeKey: `${explicitEvent}:${window.location.pathname}:${href}`,
    });
    return;
  }

  if (/wa\.me|api\.whatsapp\.com|whatsapp:\/\//.test(normalizedHref)) {
    trackConversion("whatsapp_click", context, {
      dedupeKey: `whatsapp:${window.location.pathname}:${linkLocation}`,
    });
    return;
  }

  if (normalizedHref.startsWith("mailto:")) {
    trackConversion("email_click", context, {
      dedupeKey: `email:${window.location.pathname}:${linkLocation}`,
    });
    return;
  }

  if (normalizedHref.startsWith("tel:")) {
    trackConversion("phone_click", context, {
      dedupeKey: `phone:${window.location.pathname}:${linkLocation}`,
    });
    return;
  }

  if (element.hasAttribute("download") || normalizedHref.includes("/downloads/")) {
    const fileName = getFileName(href);
    trackConversion("resource_download", { ...context, file_name: fileName }, {
      clarityEvent: "file_download",
      dedupeKey: `download:${fileName}`,
    });
    return;
  }

  if (!normalizedHref.includes("/contact") && normalizedHref !== "#contact") return;

  if (/sample|muestra/.test(linkText)) {
    trackConversion("sample_request_click", context, {
      dedupeKey: `sample:${window.location.pathname}:${linkLocation}`,
    });
  } else if (/quote|quotation|cotizacion|recommendation|recomendacion|pricing|price/.test(linkText)) {
    trackConversion("quote_request_click", context, {
      dedupeKey: `quote:${window.location.pathname}:${linkLocation}`,
    });
  } else {
    trackConversion("contact_click", context, {
      dedupeKey: `contact:${window.location.pathname}:${linkLocation}`,
    });
  }
}

export function initConversionTracking() {
  if (!isAnalyticsEnabled() || window.__youngsunConversionTrackingInitialized) {
    return () => {};
  }

  window.__youngsunConversionTrackingInitialized = true;
  document.addEventListener("click", trackLinkInteraction, true);

  return () => {
    document.removeEventListener("click", trackLinkInteraction, true);
    window.__youngsunConversionTrackingInitialized = false;
  };
}
