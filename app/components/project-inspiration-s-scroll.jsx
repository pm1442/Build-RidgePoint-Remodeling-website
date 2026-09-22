"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function InspirationImage({ image, index, imageCount, scrollYProgress }) {
  const prefersReducedMotion = useReducedMotion();
  const progress = useTransform(scrollYProgress, (value) => value * (imageCount - 1));
  const x = useTransform(progress, (value) => {
    const position = index - value;
    const lane = [-16, 15, -11, 16, -14][index] ?? 0;
    return `${lane + Math.sin(position * 1.45) * 9}vw`;
  });
  const y = useTransform(progress, (value) => `${(index - value) * 72}vh`);
  const opacity = useTransform(progress, (value) => {
    const distance = Math.abs(index - value);
    return Math.max(0, Math.min(1, 1 - Math.max(0, distance - 0.12) * 0.88));
  });
  const scale = useTransform(progress, (value) => Math.max(0.72, 1 - Math.abs(index - value) * 0.16));
  const filter = useTransform(progress, (value) => `blur(${Math.min(6, Math.max(0, Math.abs(index - value) - 0.08) * 5)}px)`);

  return (
    <motion.figure
      className="project-inspiration-image"
      style={prefersReducedMotion ? undefined : { x, y, opacity, scale, filter }}
    >
      <Image src={image[0]} alt={image[1]} fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 72vw, 760px" />
    </motion.figure>
  );
}

export function ProjectInspirationSScroll({ images }) {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className={`project-inspiration-train${prefersReducedMotion ? " is-reduced-motion" : ""}`} aria-label="Kitchens and cabinetry project inspiration" ref={sectionRef}>
      <div className="project-inspiration-train-stage">
        {images.map((image, index) => <InspirationImage image={image} index={index} imageCount={images.length} key={image[0]} scrollYProgress={scrollYProgress} />)}
      </div>
    </section>
  );
}
