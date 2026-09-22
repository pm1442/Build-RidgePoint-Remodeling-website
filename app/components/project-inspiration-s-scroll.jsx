"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

function InspirationImage({ image, index }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.figure
      className={`project-inspiration-image project-inspiration-image-${index + 1}`}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.58, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.22 }}
    >
      <Image src={image[0]} alt={image[1]} fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 72vw, 760px" />
    </motion.figure>
  );
}

export function ProjectInspirationSScroll({ images }) {
  return (
    <section className="project-inspiration-masonry" aria-label="Kitchens and cabinetry project inspiration">
      {images.map((image, index) => <InspirationImage image={image} index={index} key={image[0]} />)}
    </section>
  );
}
