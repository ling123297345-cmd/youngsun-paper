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
import { trackConversion } from "./analytics.js";

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
  const submitTimeRef = useRef(Date.now());
  const formStartedRef = useRef(false);

  const handleChange = useCallback((e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }, []);

  const setField = useCallback((name, value) => {
    setForm((previousForm) => ({ ...previousForm, [name]: value }));
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
      const isSampleRequest = form.inquiryType === "samples";
      const inquiryLabel = isSampleRequest ? "Sample Request" : "Quotation Request";
      const body = {
        inquiry_type: inquiryLabel,
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
        sample_policy: isSampleRequest
          ? "YOUNGSUN covers standard sample costs; the customer pays courier charges."
          : "Not applicable",
        _subject: `${inquiryLabel} from ${form.name || "Website Visitor"}: ${form.product || "Paper Products"}`,
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
          trackConversion(
            "generate_lead",
            {
              lead_type: isSampleRequest ? "sample_request_form" : "quote_request_form",
              form_location: window.location.pathname === "/" ? "homepage" : "contact_page",
              product_interest: form.product || "not_specified",
              value: 1,
            },
            {
              clarityEvent: "contact_form_submit",
              dedupeKey: `contact-form:${window.location.pathname}`,
              dedupeWindow: 5000,
            }
          );
          // Google Ads conversion (if configured)
          if (window.gtag_report_conversion) {
            window.gtag_report_conversion();
          }
        }

        submitTimeRef.current = Date.now();
        formStartedRef.current = false;
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
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    trackConversion(
      "inquiry_form_start",
      {
        form_name: "contact_inquiry",
        form_location: window.location.pathname === "/" ? "homepage" : "contact_page",
      },
      {
        clarityEvent: "contact_form_start",
        dedupeKey: `form-start:${window.location.pathname}`,
        dedupeWindow: 30000,
      }
    );
  }, []);

  return {
    form,
    submitted,
    sending,
    error,
    honeypotRef,
    submitTimeRef: startTimer,
    handleChange,
    setField,
    handleSubmit,
  };
}
