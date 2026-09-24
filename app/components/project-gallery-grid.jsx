"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function getProjectDetails(gallery, image) {
  const featured = image[2];
  return {
    service: featured?.kicker || gallery.title,
    title: featured?.title || gallery.title,
    location: featured ? "Lake Butler, Florida" : "North Florida",
    description: featured?.detail || image[1],
  };
}

export function ProjectGalleryGrid({ galleries }) {
  const cards = galleries.flatMap((gallery) => gallery.images.map((image, imageIndex) => ({ gallery, image, imageIndex, details: getProjectDetails(gallery, image) })));
  const [selected, setSelected] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!selected) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelected(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selected]);

  const openProject = (card) => {
    setSelected(card);
    setActiveIndex(card.imageIndex);
  };

  const activeImage = selected?.gallery.images[activeIndex];
  const activeDetails = selected && getProjectDetails(selected.gallery, activeImage);
  const imageCount = selected?.gallery.images.length || 0;

  return (
    <>
      <div className="project-grid">
        {cards.map((card) => (
          <button className="project-grid-card" type="button" onClick={() => openProject(card)} key={card.image[0]}>
            <span className="project-grid-card-media"><Image src={card.image[0]} alt="" fill sizes="(max-width: 720px) 100vw, (max-width: 980px) 50vw, 25vw" /></span>
            <span className="project-grid-card-content"><span className="project-grid-card-service">{card.details.service}</span><strong>{card.details.title}</strong><span className="project-grid-card-location">{card.details.location}</span><span className="project-grid-card-description">{card.details.description}</span><span className="project-grid-card-action">View project</span></span>
          </button>
        ))}
      </div>
      {selected && <div className="project-modal" role="dialog" aria-modal="true" aria-label={`${activeDetails.title} project photos`}>
        <button className="project-modal-backdrop" type="button" aria-label="Close project viewer" onClick={() => setSelected(null)} />
        <div className="project-modal-panel">
          <div className="project-modal-header"><div><span>{activeDetails.service}</span><h2>{activeDetails.title}</h2><p>{activeDetails.location}</p></div><button className="project-modal-close" type="button" onClick={() => setSelected(null)}>Close</button></div>
          <div className="project-modal-media"><Image src={activeImage[0]} alt={activeImage[1]} fill sizes="(max-width: 900px) 94vw, 900px" /></div>
          <p className="project-modal-description">{activeDetails.description}</p>
          {imageCount > 1 && <><div className="project-modal-actions"><button type="button" onClick={() => setActiveIndex((activeIndex - 1 + imageCount) % imageCount)}>Previous photo</button><span>{activeIndex + 1} of {imageCount}</span><button type="button" onClick={() => setActiveIndex((activeIndex + 1) % imageCount)}>Next photo</button></div><div className="project-modal-thumbnails">{selected.gallery.images.map((image, index) => <button className={index === activeIndex ? "is-active" : ""} type="button" onClick={() => setActiveIndex(index)} key={image[0]} aria-label={`View photo ${index + 1}`}><Image src={image[0]} alt="" fill sizes="90px" /></button>)}</div></>}
        </div>
      </div>}
    </>
  );
}
