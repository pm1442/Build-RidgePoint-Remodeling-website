import { PageFrame } from "../components/page-frame";
import { site } from "../lib/site-data";

export const metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for Ridge Point Remodeling & Carpentry.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsAndConditionsPage() {
  return (
    <PageFrame>
      <main className="shell legal-page">
        <p className="eyebrow">Ridge Point Remodeling & Carpentry</p>
        <h1>Terms and Conditions</h1>
        <p className="legal-updated">Last updated: September 25, 2026</p>
        <p>These Terms and Conditions govern your use of {site.url}. The website is operated by {site.legalName}, doing business as {site.name}. By using this website, you agree to these terms.</p>

        <section>
          <h2>Website information</h2>
          <p>This website provides general information about Ridge Point&apos;s remodeling, carpentry, cabinet installation, deck, flooring, siding, window, and related home-improvement services. Website content is for general informational purposes only. It is not engineering, architectural, legal, financial, or professional advice for a specific property.</p>
        </section>

        <section>
          <h2>Quotes, estimates, and project agreements</h2>
          <p>A website inquiry, phone call, message, consultation, estimate, or discussion does not create a contract, guarantee availability, reserve a start date, or obligate either party to proceed with work. Scope, pricing, materials, scheduling, permits, payment terms, warranties, and project-specific responsibilities are governed only by a separate written agreement signed by the appropriate parties.</p>
          <p>Project conditions, material availability, permitting requirements, site conditions, requested changes, and other circumstances may affect pricing, timing, or scope. Any estimate is subject to the terms and conditions stated in the applicable written agreement.</p>
        </section>

        <section>
          <h2>Acceptable use</h2>
          <p>You may use this website for lawful personal or business purposes related to evaluating Ridge Point&apos;s services. You may not interfere with the website, attempt to gain unauthorized access to any system or account, introduce malicious code, scrape or reproduce content at scale, misrepresent your identity, or use the site in violation of applicable law.</p>
        </section>

        <section>
          <h2>Intellectual property</h2>
          <p>Unless otherwise stated, the website&apos;s text, photographs, project descriptions, logos, design, and other content are owned by or licensed to Ridge Point and are protected by applicable intellectual-property laws. You may view and share links to the website for personal, noncommercial purposes. You may not copy, modify, republish, distribute, or use website content for commercial purposes without written permission.</p>
        </section>

        <section>
          <h2>Third-party links</h2>
          <p>The website may link to third-party services such as Facebook, Google Maps, or other websites. Those links are provided for convenience. Ridge Point does not control and is not responsible for third-party content, availability, privacy practices, terms, or services.</p>
        </section>

        <section>
          <h2>Disclaimer and limitation of liability</h2>
          <p>We work to keep the website accurate and available, but the website is provided on an "as is" and "as available" basis to the fullest extent permitted by law. We do not guarantee that website content is complete, current, error-free, uninterrupted, or suitable for a particular purpose.</p>
          <p>To the fullest extent permitted by law, Ridge Point will not be liable for indirect, incidental, special, consequential, or punitive damages arising from or related to your use of, or inability to use, this website. Nothing in these terms limits liability that cannot legally be limited.</p>
        </section>

        <section>
          <h2>Indemnification</h2>
          <p>To the extent permitted by law, you agree to defend, indemnify, and hold harmless Ridge Point, its owners, employees, and service providers from claims, liabilities, damages, and expenses arising from your misuse of this website or violation of these terms.</p>
        </section>

        <section>
          <h2>Governing law</h2>
          <p>These terms are governed by the laws of the State of Florida, without regard to conflict-of-law principles. Any dispute relating to the website will be handled in the state or federal courts with jurisdiction in Florida, unless applicable law requires otherwise.</p>
        </section>

        <section>
          <h2>Changes to these terms</h2>
          <p>We may update these Terms and Conditions from time to time. The updated version will be posted on this page with a revised last-updated date. Your continued use of the website after an update means you accept the revised terms.</p>
        </section>

        <section>
          <h2>Contact us</h2>
          <p><strong>{site.legalName}</strong><br />Doing business as {site.name}<br />{site.address}<br /><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a><br /><a href={`mailto:${site.email}`}>{site.email}</a></p>
        </section>
      </main>
    </PageFrame>
  );
}
