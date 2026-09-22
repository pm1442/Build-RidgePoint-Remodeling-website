"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

function useCompactViewport() {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 720px)");
    const update = () => setIsCompact(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return isCompact;
}

function TrainImage({ image, index, count, scrollYProgress, hasMotion }) {
  const centerPoint = count > 1 ? index / (count - 1) : 0;
  const scale = useTransform(scrollYProgress, (progress) => Math.max(0.72, 1 - Math.abs(progress - centerPoint) * 0.62));
  const opacity = useTransform(scrollYProgress, (progress) => Math.max(0.24, 1 - Math.abs(progress - centerPoint) * 2.1));
  const filter = useTransform(scrollYProgress, (progress) => `blur(${Math.min(4, Math.abs(progress - centerPoint) * 28)}px)`);

  return (
    <motion.figure
      className="project-inspiration-train-card"
      style={hasMotion ? { scale, opacity, filter } : undefined}
    >
      <Image src={image[0]} alt={image[1]} fill sizes="(max-width: 720px) 84vw, (max-width: 1100px) 60vw, 760px" />
    </motion.figure>
  );
}

export function ProjectInspirationSScroll({ images }) {
  const galleryRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const isCompact = useCompactViewport();
  const [travelDistance, setTravelDistance] = useState(0);
  const hasMotion = !prefersReducedMotion && !isCompact;
  const { scrollYProgress } = useScroll({ target: galleryRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -travelDistance]);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!hasMotion || !viewport || !track) return undefined;

    const updateTravelDistance = () => {
      setTravelDistance(Math.max(0, track.scrollWidth - viewport.clientWidth));
    };

    const observer = new ResizeObserver(updateTravelDistance);
    observer.observe(viewport);
    observer.observe(track);
    updateTravelDistance();
    return () => {
      observer.disconnect();
    };
  }, [hasMotion, images.length]);

  return (
    <section
      className={`project-inspiration-train${hasMotion ? "" : " is-static"}`}
      aria-label="RidgePoint project inspiration gallery"
      ref={galleryRef}
      style={{ "--train-scroll-distance": `${travelDistance}px` }}
    >
      <div className="project-inspiration-train-stage">
        <div className={`project-inspiration-train-viewport${hasMotion ? "" : " is-static"}`} ref={viewportRef}>
          <motion.div className="project-inspiration-train-track" ref={trackRef} style={hasMotion ? { x } : undefined}>
            {images.map((image, index) => (
              <TrainImage image={image} index={index} count={images.length} scrollYProgress={scrollYProgress} hasMotion={hasMotion} key={image[0]} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
