"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function ProjectGalleryRail({ images, galleryName }) {
  const railRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible) setActiveIndex(Number(mostVisible.target.dataset.index));
      },
      { root: rail, threshold: [0.45, 0.7, 0.9] },
    );

    cardRefs.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const moveToImage = (index) => {
    cardRefs.current[index]?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "nearest", inline: "center" });
  };

  return <div className="project-gallery-rail-wrap">
    <div className="project-gallery-rail-stage">
      <div className="project-gallery-rail" ref={railRef} aria-label={`${galleryName} gallery`}>
        {images.map(([src, alt], index) => <motion.figure
          animate={prefersReducedMotion ? undefined : { opacity: activeIndex === index ? 1 : 0.55, scale: activeIndex === index ? 1 : 0.9 }}
          className="project-gallery-rail-card"
          data-index={index}
          key={src}
          ref={(element) => { cardRefs.current[index] = element; }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <Image src={src} alt={alt} fill sizes="(max-width: 720px) 86vw, 76vw" />
        </motion.figure>)}
      </div>
      <button aria-label={`View previous ${galleryName} image`} className="project-gallery-rail-nav project-gallery-rail-nav-previous" onClick={() => moveToImage((activeIndex - 1 + images.length) % images.length)} type="button"><span aria-hidden="true">←</span></button>
      <button aria-label={`View next ${galleryName} image`} className="project-gallery-rail-nav project-gallery-rail-nav-next" onClick={() => moveToImage((activeIndex + 1) % images.length)} type="button"><span aria-hidden="true">→</span></button>
    </div>
    <div className="project-gallery-rail-controls" aria-label={`${galleryName} gallery controls`}>
      {images.map(([, alt], index) => <button aria-current={activeIndex === index ? "true" : undefined} aria-label={`View ${alt}`} className={activeIndex === index ? "is-active" : ""} key={alt} onClick={() => moveToImage(index)} type="button" />)}
    </div>
  </div>;
}
