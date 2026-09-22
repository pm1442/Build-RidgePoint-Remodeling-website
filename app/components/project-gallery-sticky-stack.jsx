"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function StackImage({ image, index, imageCount, scrollYProgress }) {
  const prefersReducedMotion = useReducedMotion();
  const progress = useTransform(scrollYProgress, (value) => value * (imageCount - 1));
  const scale = useTransform(progress, (value) => {
    const nextImageDistance = value - index;
    return nextImageDistance <= 0 ? 1 : Math.max(0.91, 1 - nextImageDistance * 0.09);
  });
  const opacity = useTransform(progress, (value) => {
    const nextImageDistance = value - index;
    return nextImageDistance <= 0 ? 1 : Math.max(0.42, 1 - nextImageDistance * 0.58);
  });

  return (
    <div className={`project-gallery-stack-step project-gallery-stack-step-${index + 1}`} style={{ zIndex: index + 1 }}>
      <motion.figure style={prefersReducedMotion ? undefined : { scale, opacity }}>
        <Image src={image[0]} alt={image[1]} fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 72vw, 760px" />
      </motion.figure>
    </div>
  );
}

export function ProjectGalleryStickyStack({ images }) {
  const stackRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className={`project-gallery-sticky-stack${prefersReducedMotion ? " is-reduced-motion" : ""}`} aria-label="Bathrooms and finish work project inspiration" ref={stackRef}>
      {images.map((image, index) => <StackImage image={image} index={index} imageCount={images.length} key={image[0]} scrollYProgress={scrollYProgress} />)}
    </section>
  );
}
