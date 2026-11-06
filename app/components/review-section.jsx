import Link from "next/link";

const reviews = [
  {
    quote: "Reasonably priced, professional, courteous, punctual, and dependable.",
    name: "Tiffany",
  },
  {
    quote: "You never have to worry that they are paying attention to detail and knowing the job is getting done correctly.",
    name: "Justin B.",
  },
  {
    quote: "Once they began work there was no babysitting. They just dug in and got it done.",
    name: "Mark P.",
  },
];

export function ReviewSection() {
  return (
    <section className="section reviews-section" id="reviews" aria-labelledby="reviews-heading">
      <div className="shell">
        <div className="reviews-heading">
          <div>
            <p className="eyebrow">From local homeowners</p>
            <h2 id="reviews-heading">The details matter when it is your home.</h2>
          </div>
          <p>Real feedback from homeowners who trusted Ridge Point with work in and around their homes.</p>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <figure className="review-card" key={review.name}>
              <blockquote>{review.quote}</blockquote>
              <figcaption>{review.name}<span>Google review</span></figcaption>
            </figure>
          ))}
        </div>
        <div className="reviews-action"><Link className="button" href="/contact">Request a Free Estimate</Link></div>
      </div>
    </section>
  );
}
