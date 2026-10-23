"use client";

import { useState } from "react";
import { services, site } from "../lib/site-data";

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSent(false);
    setSubmitting(true);

    // Keep the form element before awaiting the request. React clears
    // event.currentTarget after the async boundary, which otherwise turns a
    // successful submission into a false error when we reset the form.
    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch("/api/quote-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          contact: data.get("contact"),
          projectType: data.get("projectType"),
          propertyLocation: data.get("propertyLocation"),
          details: data.get("details"),
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setError(result.error || `We could not send your request. Please call ${site.phoneDisplay}.`);
        return;
      }

      form.reset();
      setSent(true);
    } catch {
      setError(`We could not send your request. Please call ${site.phoneDisplay}.`);
    } finally {
      setSubmitting(false);
    }
  }

  return <form className="quote-form" onSubmit={handleSubmit}><label>Project type<select name="projectType" defaultValue=""><option value="">I am not sure yet</option>{services.map((service) => <option key={service.slug}>{service.name}</option>)}</select></label><label>Your name<input name="name" autoComplete="name" required /></label><label>Best phone or email<input name="contact" autoComplete="email" required /></label><label>Property city or address <span>(optional)</span><input name="propertyLocation" autoComplete="street-address" /></label><label>What would you like to improve?<textarea name="details" rows="5" required /></label><button className="button" type="submit" disabled={submitting}>{submitting ? "Sending..." : "Start the conversation"}</button><p className="form-note">Your information goes directly to Ridge Point so Jason can follow up. You can also call {site.phoneDisplay}.</p><p className="form-note">Please review our <a href="/privacy-policy">Privacy Policy</a> before sending your information.</p>{error && <p className="form-success" role="alert">{error}</p>}{sent && <p className="form-success" role="status">Thank you. You do not have to have every decision figured out before you start. Jason has your details and will be in touch to talk through what is not working and a practical next step for your home.</p>}</form>;
}
