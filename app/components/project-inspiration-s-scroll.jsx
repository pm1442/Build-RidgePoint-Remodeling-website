"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function InspirationImage({ image, index }) {
  const imageRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const direction = index % 2 === 0 ? -1 : 1;
  const x = useTransform(scrollYProgress, [0, 0.52, 1], [`${direction * 54}px`, "0px", `${direction * -38}px`]);
  const y = useTransform(scrollYProgress, [0, 0.52, 1], [42, 0, -26]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.78, 1], [0.25, 1, 1, 0.44]);
  const scale = useTransform(scrollYProgress, [0, 0.52, 1], [0.9, 1, 0.94]);

  return (
    <motion.figure
      className={`project-inspiration-image project-inspiration-image-${index + 1}`}
      ref={imageRef}
      style={prefersReducedMotion ? undefined : { x, y, opacity, scale }}
    >
      <Image src={image[0]} alt={image[1]} fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 72vw, 760px" />
    </motion.figure>
  );
}

export function ProjectInspirationSScroll({ images }) {
  return (
    <section className="project-inspiration-s-gallery" aria-label="RidgePoint project inspiration gallery">
      {images.map((image, index) => <InspirationImage image={image} index={index} key={image[0]} />)}
    </section>
  );
}
