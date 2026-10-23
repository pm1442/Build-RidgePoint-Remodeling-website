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
          email: data.get("email"),
          phone: data.get("phone"),
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

  if (sent) {
    return <section className="quote-success" role="status" aria-live="polite">
      <p className="eyebrow">You are on your way</p>
      <h3>That is one thing off your mind.</h3>
      <p className="quote-success-lead">Your request is with Ridge Point. Jason will look over what you shared and reach out to talk it through.</p>
      <ol>
        <li><strong>You set the priorities.</strong> Tell us what matters most, even if you are still sorting it out.</li>
        <li><strong>We help make a plan.</strong> Jason will talk through what is realistic for your home and your budget.</li>
        <li><strong>You decide the next step.</strong> There is no pressure to have every answer today.</li>
      </ol>
      <p className="quote-success-callout">Want to talk sooner? Call <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>.</p>
    </section>;
  }

  return <form className="quote-form" onSubmit={handleSubmit}>
    <label>Project type<select name="projectType" defaultValue=""><option value="">I am not sure yet</option>{services.map((service) => <option key={service.slug}>{service.name}</option>)}</select></label>
    <label>Your name<input name="name" autoComplete="name" required /></label>
    <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
    <label>Best phone number<input name="phone" type="tel" autoComplete="tel" inputMode="tel" required /></label>
    <label>Property city or address <span>(optional)</span><input name="propertyLocation" autoComplete="street-address" /></label>
    <label>What would you like to improve?<textarea name="details" rows="5" required /></label>
    <button className="button" type="submit" disabled={submitting}>{submitting ? "Sending..." : "Start the conversation"}</button>
    <p className="form-note">Your information goes directly to Ridge Point so Jason can follow up. You can also call {site.phoneDisplay}.</p>
    <p className="form-note">Please review our <a href="/privacy-policy">Privacy Policy</a> before sending your information.</p>
    {error && <p className="form-success" role="alert">{error}</p>}
  </form>;
}
