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

  return <form className="quote-form" onSubmit={handleSubmit}><label>Project type<select name="projectType" defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.slug}>{service.name}</option>)}</select></label><label>Your name<input name="name" autoComplete="name" required /></label><label>Email or phone<input name="contact" autoComplete="email" required /></label><label>Project details<textarea name="details" rows="5" required /></label><button className="button" type="submit">Request a Quote</button><p className="form-note">Submitting opens a pre-filled email to Jason. If your device does not use an email app, call {site.phoneDisplay} instead.</p>{sent && <p className="form-success">Your email app should be opening with your quote request ready to send.</p>}</form>;
}
