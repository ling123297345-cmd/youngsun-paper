// ============================================================
// YOUNGSUN PAPER — Contact Form Handler
// Shared by Contact page and Home page forms
//
// Features:
//   - Web3Forms backend (free 250 submissions/month)
//   - Honeypot anti-spam
//   - Timestamp check (bots submit too fast)
//   - Google Analytics / Ads conversion tracking
//   - Success / error states with proper UI
// ============================================================

import { useState, useRef, useCallback } from "react";

// ── Config ──────────────────────────────────────────────────
// Replace with your Web3Forms access key after signing up at:
// https://web3forms.com (free, 250 submissions/month)
// If left as-is, falls back to FormSubmit.io
const WEB3FORMS_KEY = ""; // ← PUT YOUR WEB3FORMS ACCESS KEY HERE
const FORMSPREE_ENDPOINT = ""; // ← Or Formspree form ID (e.g. "xqkyaaab")
const FORM_ENDPOINT = WEB3FORMS_KEY
  ? "https://api.web3forms.com/submit"
  : FORMSPREE_ENDPOINT
    ? `https://formspree.io/f/${FORMSPREE_ENDPOINT}`
    : "https://formsubmit.co/ajax/Alice@yspaper.com";

const MIN_SUBMIT_TIME = 3000; // Minimum 3 seconds before submit (bot detection)

export function useContactForm(initialValues) {
  const [form, setForm] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  // ── Honeypot: hidden field that bots fill out ────────────
  const honeypotRef = useRef(null);
  const submitTimeRef = useRef(0);

  const handleChange = useCallback((e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setError("");

    // ── Anti-spam: Honeypot check ──────────────────────────
    if (honeypotRef.current && honeypotRef.current.value) {
      // Bot filled the honeypot field — silently "succeed" to not alert the bot
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      return;
    }

    // ── Anti-spam: Timestamp check ─────────────────────────
    const elapsed = Date.now() - submitTimeRef.current;
    if (elapsed < MIN_SUBMIT_TIME) {
      setError("Please wait a moment before submitting.");
      return;
    }

    setSending(true);

    try {
      // ── Build request body ────────────────────────────────
      const body = {
        name: form.name,
        email: form.email,
        company: form.company || "(not provided)",
        phone: form.phone || "(not provided)",
        product: form.product || "(not specified)",
        gsm: form.gsm || "",
        size: form.size || "",
        quantity: form.quantity || "",
        destination: form.destination || "",
        message: form.message,
        _subject: `New Inquiry from ${form.name || "Website Visitor"}: ${form.product || "Paper Products"}`,
        _captcha: "false",
        page_url: window.location.href,
      };

      // Add Web3Forms access key if configured
      if (WEB3FORMS_KEY) {
        body.access_key = WEB3FORMS_KEY;
      }

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm(initialValues);

        // ── Google Analytics / Ads conversion tracking ──────
        if (typeof window !== "undefined") {
          // GA4 event
          if (window.gtag) {
            window.gtag("event", "generate_lead", {
              event_category: "contact_form",
              event_label: form.product || "inquiry",
              value: 1,
            });
          }
          // Google Ads conversion (if configured)
          if (window.gtag_report_conversion) {
            window.gtag_report_conversion();
          }
          // Microsoft Clarity (already installed)
          if (window.clarity) {
            window.clarity("event", "contact_form_submit");
          }
        }

        setTimeout(() => setSubmitted(false), 6000);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(
          data.message ||
            "Failed to send message. Please email us directly at Alice@yspaper.com"
        );
      }
    } catch {
      setError("Network error. Please check your connection and try again, or email us at Alice@yspaper.com");
    }
    setSending(false);
  }, [form, initialValues]);

  const startTimer = useCallback(() => {
    submitTimeRef.current = Date.now();
  }, []);

  return {
    form,
    submitted,
    sending,
    error,
    honeypotRef,
    submitTimeRef: startTimer,
    handleChange,
    handleSubmit,
  };
}
