"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function ProjectGalleryRail({ images, galleryName }) {
  const railRef = useRef(null);
  const cardRefs = useRef([]);
  const activeRailIndexRef = useRef(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeRailIndex, setActiveRailIndex] = useState(1);
  const prefersReducedMotion = useReducedMotion();
  const loopedImages = [images.at(-1), ...images, images[0]];

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible) {
          setActiveIndex(Number(mostVisible.target.dataset.logicalIndex));
          const railIndex = Number(mostVisible.target.dataset.railIndex);
          activeRailIndexRef.current = railIndex;
          setActiveRailIndex(railIndex);
        }
      },
      { root: rail, threshold: [0.45, 0.7, 0.9] },
    );

    cardRefs.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    cardRefs.current[1]?.scrollIntoView({ behavior: "auto", block: "nearest", inline: "center" });
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return undefined;

    const normalizeLoopPosition = () => {
      if (activeRailIndexRef.current === 0) {
        cardRefs.current[images.length]?.scrollIntoView({ behavior: "auto", block: "nearest", inline: "center" });
      }
      if (activeRailIndexRef.current === images.length + 1) {
        cardRefs.current[1]?.scrollIntoView({ behavior: "auto", block: "nearest", inline: "center" });
      }
    };

    rail.addEventListener("scrollend", normalizeLoopPosition);
    return () => rail.removeEventListener("scrollend", normalizeLoopPosition);
  }, [images.length]);

  const moveToRailIndex = (index) => {
    cardRefs.current[index]?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "nearest", inline: "center" });
  };

  const moveToImage = (index) => {
    moveToRailIndex(index + 1);
  };

  const movePrevious = () => {
    moveToRailIndex(activeRailIndex <= 1 ? 0 : activeRailIndex - 1);
  };

  const moveNext = () => {
    moveToRailIndex(activeRailIndex >= images.length ? images.length + 1 : activeRailIndex + 1);
  };

  return <div className="project-gallery-rail-wrap">
    <div className="project-gallery-rail-stage">
      <div className="project-gallery-rail" ref={railRef} aria-label={`${galleryName} gallery`}>
        {loopedImages.map(([src, alt], railIndex) => {
          const logicalIndex = (railIndex - 1 + images.length) % images.length;
          const isClone = railIndex === 0 || railIndex === images.length + 1;

          return <motion.figure
          animate={prefersReducedMotion ? undefined : { opacity: activeIndex === logicalIndex ? 1 : 0.55, scale: activeIndex === logicalIndex ? 1 : 0.9 }}
          className="project-gallery-rail-card"
          data-logical-index={logicalIndex}
          data-rail-index={railIndex}
          key={`${src}-${railIndex}`}
          ref={(element) => { cardRefs.current[railIndex] = element; }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <Image src={src} alt={isClone ? "" : alt} fill sizes="(max-width: 720px) 86vw, 76vw" />
        </motion.figure>;
        })}
      </div>
      <button aria-label={`View previous ${galleryName} image`} className="project-gallery-rail-nav project-gallery-rail-nav-previous" onClick={movePrevious} type="button"><span aria-hidden="true">←</span></button>
      <button aria-label={`View next ${galleryName} image`} className="project-gallery-rail-nav project-gallery-rail-nav-next" onClick={moveNext} type="button"><span aria-hidden="true">→</span></button>
    </div>
    <div className="project-gallery-rail-controls" aria-label={`${galleryName} gallery controls`}>
      {images.map(([, alt], index) => <button aria-current={activeIndex === index ? "true" : undefined} aria-label={`View ${alt}`} className={activeIndex === index ? "is-active" : ""} key={alt} onClick={() => moveToImage(index)} type="button" />)}
    </div>
  </div>;
}
