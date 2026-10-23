"use client";

import { useState } from "react";
import { site } from "../lib/site-data";

const projectChoices = [
  ["Kitchen Remodeling", "Kitchen remodeling"],
  ["Bathroom Remodeling", "Bathroom remodeling"],
  ["Cabinet Sales and Installation", "Cabinets or countertops"],
  ["Custom Carpentry", "Carpentry or trim work"],
  ["Deck Building", "Deck or porch"],
  ["Flooring, Siding, and Windows", "Flooring, siding, windows, or doors"],
  ["Other Home Improvement", "A repair or a few smaller projects"],
  ["Not Sure Yet", "I am not sure yet"],
];

const painChoices = [
  "It is worn out, damaged, or needs attention",
  "It does not work well for our family anymore",
  "I am tired of putting it off",
  "I want it finished correctly",
  "I need help figuring out what makes sense",
];

const goalChoices = [
  "Safer and working the way it should",
  "More useful space and storage",
  "Updated and easier to enjoy",
  "Ready for family, guests, or a new season",
  "A practical plan that respects our budget",
  "I would like Jason's advice",
];

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({ projectType: "", painPoint: "", goal: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function choose(field, value, nextStep) {
    setAnswers((current) => ({ ...current, [field]: value }));
    setStep(nextStep);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    const form = event.currentTarget;
    const data = new FormData(form);
    const additionalNotes = String(data.get("details") || "").trim();
    const details = [
      `What is not working: ${answers.painPoint}`,
      `What matters most: ${answers.goal}`,
      ...(additionalNotes ? [`Additional notes: ${additionalNotes}`] : []),
    ].join("\n");

    try {
      const response = await fetch("/api/quote-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          projectType: answers.projectType,
          propertyLocation: data.get("propertyLocation"),
          details,
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

  return <form className="quote-form quote-form-guided" onSubmit={handleSubmit}>
    <div className="quote-progress" aria-label={`Step ${step} of 4`}>
      <span>{step === 1 ? "Start here · Step 1 of 4" : `Step ${step} of 4`}</span>
      <div><i style={{ width: `${step * 25}%` }} /></div>
    </div>

    {step === 1 && <fieldset className="quote-question"><legend>What needs attention at your home?</legend><p>Pick the closest fit. You can explain the rest in a minute.</p><div className="quote-choice-grid">{projectChoices.map(([value, label]) => <button className="quote-choice" type="button" key={value} onClick={() => choose("projectType", value, 2)}>{label}<span>›</span></button>)}</div></fieldset>}
    {step === 2 && <fieldset className="quote-question"><legend>What has been bothering you about it?</legend><p>This helps us understand the problem before we call.</p><div className="quote-choice-grid">{painChoices.map((choice) => <button className="quote-choice" type="button" key={choice} onClick={() => choose("painPoint", choice, 3)}>{choice}<span>›</span></button>)}</div><button className="quote-back" type="button" onClick={() => setStep(1)}>← Back</button></fieldset>}
    {step === 3 && <fieldset className="quote-question"><legend>When this is handled, what matters most?</legend><p>There is no wrong answer. Choose what would make the biggest difference.</p><div className="quote-choice-grid">{goalChoices.map((choice) => <button className="quote-choice" type="button" key={choice} onClick={() => choose("goal", choice, 4)}>{choice}<span>›</span></button>)}</div><button className="quote-back" type="button" onClick={() => setStep(2)}>← Back</button></fieldset>}
    {step === 4 && <section className="quote-contact-step" aria-labelledby="quote-contact-heading"><p className="eyebrow">You are in the driver&apos;s seat</p><h3 id="quote-contact-heading">You have already taken the hard first step.</h3><p>Tell us where to reach you. Jason will help sort out a practical next step—no pressure and no need to have every answer yet.</p><label>Your name<input name="name" autoComplete="name" required /></label><label>Email address<input name="email" type="email" autoComplete="email" required /></label><label>Best phone number<input name="phone" type="tel" autoComplete="tel" inputMode="tel" required /></label><label>Project city or address <span>(optional)</span><input name="propertyLocation" autoComplete="street-address" /></label><label>Anything else you want Jason to know? <span>(optional)</span><textarea name="details" rows="4" placeholder="A few words are plenty." /></label><button className="button" type="submit" disabled={submitting}>{submitting ? "Sending..." : "Let’s talk through it"}</button><p className="form-note">No pressure. No obligation. Just a clear conversation about what makes sense for your home.</p><p className="form-note">Please review our <a href="/privacy-policy">Privacy Policy</a> before sending your information.</p>{error && <p className="form-success" role="alert">{error}</p>}<button className="quote-back" type="button" onClick={() => setStep(3)}>← Back</button></section>}
  </form>;
}
