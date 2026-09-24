"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function ProjectGalleryGrid({ galleries }) {
  const [selected, setSelected] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!selected) return undefined;
    const handleKeyboardNavigation = (event) => {
      if (event.key === "Escape") {
        setSelected(null);
      } else if (event.key === "ArrowLeft" && selected.images.length > 1) {
        event.preventDefault();
        setActiveIndex((index) => (index - 1 + selected.images.length) % selected.images.length);
      } else if (event.key === "ArrowRight" && selected.images.length > 1) {
        event.preventDefault();
        setActiveIndex((index) => (index + 1) % selected.images.length);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyboardNavigation);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyboardNavigation);
    };
  }, [selected]);

  const openProject = (project) => {
    setSelected(project);
    setActiveIndex(0);
  };

  const activeImage = selected?.images[activeIndex];
  const imageCount = selected?.images.length || 0;

  return (
    <>
      <div className="project-grid">
        {galleries.map((project) => (
          <button className="project-grid-card" type="button" onClick={() => openProject(project)} key={project.id}>
            <span className="project-grid-card-media"><Image src={project.images[0].src} alt={project.images[0].alt} fill sizes="(max-width: 720px) 100vw, (max-width: 980px) 50vw, 25vw" /></span>
            <span className="project-grid-card-content"><span className="project-grid-card-service">{project.service}</span><strong>{project.title}</strong><span className="project-grid-card-location">{project.location}</span><span className="project-grid-card-description">{project.description}</span><span className="project-grid-card-action">View project</span></span>
          </button>
        ))}
      </div>
      {selected && <div className="project-modal" role="dialog" aria-modal="true" aria-label={`${selected.title} project photos`}>
        <button className="project-modal-backdrop" type="button" aria-label="Close project viewer" onClick={() => setSelected(null)} />
        <div className="project-modal-panel"><div className="project-modal-header"><div><span>{selected.service}</span><h2>{selected.title}</h2><p>{selected.location}</p></div><button className="project-modal-close" type="button" onClick={() => setSelected(null)}>Close</button></div>
          <div className="project-modal-media"><Image src={activeImage.src} alt={activeImage.alt} fill sizes="(max-width: 900px) 94vw, 900px" /></div><p className="project-modal-description">{selected.description}</p>
          {imageCount > 1 && <><div className="project-modal-actions"><button type="button" onClick={() => setActiveIndex((activeIndex - 1 + imageCount) % imageCount)}>Previous photo</button><span>{activeIndex + 1} of {imageCount}</span><button type="button" onClick={() => setActiveIndex((activeIndex + 1) % imageCount)}>Next photo</button></div><div className="project-modal-thumbnails">{selected.images.map((image, index) => <button className={index === activeIndex ? "is-active" : ""} type="button" onClick={() => setActiveIndex(index)} key={image.src} aria-label={`View photo ${index + 1}`}><Image src={image.src} alt="" fill sizes="90px" /></button>)}</div></>}
        </div>
      </div>}
    </>
  );
}
