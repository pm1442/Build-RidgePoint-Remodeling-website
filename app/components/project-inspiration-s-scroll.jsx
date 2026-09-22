"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

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
  const viewportRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const scrollXProgress = useMotionValue(0);
  const hasMotion = !prefersReducedMotion;

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return undefined;

    const updateProgress = () => {
      const maxScroll = viewport.scrollWidth - viewport.clientWidth;
      scrollXProgress.set(maxScroll > 0 ? viewport.scrollLeft / maxScroll : 0);
    };

    const onWheel = (event) => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      const maxScroll = viewport.scrollWidth - viewport.clientWidth;
      const nextScroll = Math.min(maxScroll, Math.max(0, viewport.scrollLeft + event.deltaY));
      if (nextScroll !== viewport.scrollLeft) {
        event.preventDefault();
        viewport.scrollLeft = nextScroll;
      }
    };

    const observer = new ResizeObserver(updateProgress);
    observer.observe(viewport);
    viewport.addEventListener("scroll", updateProgress, { passive: true });
    viewport.addEventListener("wheel", onWheel, { passive: false });
    updateProgress();
    return () => {
      observer.disconnect();
      viewport.removeEventListener("scroll", updateProgress);
      viewport.removeEventListener("wheel", onWheel);
    };
  }, [scrollXProgress]);

  return (
    <section
      className="project-inspiration-train"
      aria-label="RidgePoint project inspiration gallery"
    >
      <div className="project-inspiration-train-stage">
        <div className={`project-inspiration-train-viewport${hasMotion ? "" : " is-static"}`} ref={viewportRef}>
          <motion.div className="project-inspiration-train-track">
            {images.map((image, index) => (
              <TrainImage image={image} index={index} count={images.length} scrollYProgress={scrollXProgress} hasMotion={hasMotion} key={image[0]} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
