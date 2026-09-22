"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function InspirationImage({ image, index }) {
  const figureRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: figureRef,
    offset: ["start end", "end start"],
  });
  const direction = index % 2 === 0 ? 1 : -1;
  const x = useTransform(scrollYProgress, [0, 0.48, 1], [direction * -38, 0, direction * 28]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [34, 0, -20]);

  return (
    <motion.figure
      className={`project-inspiration-image project-inspiration-image-${index + 1}`}
      ref={figureRef}
      style={prefersReducedMotion ? undefined : { x, y }}
    >
      <Image src={image[0]} alt={image[1]} fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 72vw, 760px" />
    </motion.figure>
  );
}

export function ProjectInspirationSScroll({ images }) {
  return (
    <div className="project-inspiration-scroll" aria-label="Kitchens and cabinetry project inspiration">
      {images.map((image, index) => <InspirationImage image={image} index={index} key={image[0]} />)}
    </div>
  );
}
