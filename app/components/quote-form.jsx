"use client";

import { useState } from "react";
import { services, site } from "../lib/site-data";

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Quote request: ${data.get("projectType") || "Home improvement project"}`;
    const body = [`Name: ${data.get("name") || ""}`, `Email or phone: ${data.get("contact") || ""}`, `Project type: ${data.get("projectType") || ""}`, "", "Project details:", data.get("details") || ""].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return <form className="quote-form" onSubmit={handleSubmit}><label>Project type<select name="projectType" defaultValue=""><option value="">I am not sure yet</option>{services.map((service) => <option key={service.slug}>{service.name}</option>)}</select></label><label>Your name<input name="name" autoComplete="name" required /></label><label>Best phone or email<input name="contact" autoComplete="email" required /></label><label>What would you like to improve?<textarea name="details" rows="5" required /></label><button className="button" type="submit">Start the conversation</button><p className="form-note">This prepares a message with your details. Send it to reach Jason. If email is not set up on your device, call {site.phoneDisplay} instead.</p><p className="form-note">Please review our <a href="/privacy-policy">Privacy Policy</a> before sending your information.</p>{sent && <p className="form-success">Your message is ready. Once you send it, Jason will have the details needed to follow up about your project.</p>}</form>;
}
