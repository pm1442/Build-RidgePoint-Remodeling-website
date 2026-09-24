"use client";

import { useEffect, useMemo, useState } from "react";

const emptyProject = { title: "", service: "", location: "Lake Butler, Florida", description: "", images: [] };

function readFiles(files, title, location) {
  return Promise.all(files.map((file) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve({ dataUrl: reader.result, alt: `${title} in ${location}` });
    reader.readAsDataURL(file);
  })));
}

export function AdminGalleryEditor() {
  const [project, setProject] = useState(emptyProject);
  const [projects, setProjects] = useState([]);
  const [files, setFiles] = useState([]);
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [mode, setMode] = useState("new");
  const selectedProject = useMemo(() => projects.find((item) => item.id === project.id), [project.id, projects]);

  const loadProjects = async () => {
    const response = await fetch("/api/admin/projects", { cache: "no-store" });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "The project gallery could not be loaded.");
    setProjects(data.projects);
  };

  useEffect(() => {
    if (!signedIn) return;
    setBusy(true);
    loadProjects().catch((error) => setMessage(error.message)).finally(() => setBusy(false));
  }, [signedIn]);

  const signIn = async (event) => {
    event.preventDefault(); setBusy(true); setMessage("");
    const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
    const data = await response.json(); setBusy(false);
    if (!response.ok) return setMessage(data.error);
    setSignedIn(true); setPassword("");
  };

  const startNewProject = () => { setMode("new"); setProject(emptyProject); setFiles([]); setMessage(""); };
  const editProject = (item) => { setMode("edit"); setProject({ ...item, images: item.images.map((image) => ({ ...image })) }); setFiles([]); setMessage(""); };

  const saveProject = async (event) => {
    event.preventDefault(); setBusy(true); setMessage("Preparing photos...");
    try {
      const newImages = await readFiles(files, project.title, project.location);
      const response = await fetch("/api/admin/projects", { method: mode === "new" ? "POST" : "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(mode === "new" ? { ...project, images: newImages } : { ...project, newImages }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "The project could not be saved.");
      await loadProjects(); setProject(mode === "new" ? emptyProject : data.project); setFiles([]);
      setMessage(mode === "new" ? "Project published. Vercel will deploy the updated gallery automatically." : "Project changes saved. Vercel will deploy the updated gallery automatically.");
    } catch (error) { setMessage(error.message); } finally { setBusy(false); }
  };

  const removeImage = (source) => {
    if (project.images.length === 1) return setMessage("A project needs at least one photo. Delete the project if you no longer want to show it.");
    setProject({ ...project, images: project.images.filter((image) => image.src !== source) });
  };

  const deleteProject = async () => {
    if (!selectedProject || !window.confirm(`Delete “${selectedProject.title}” from the gallery? This cannot be undone from the editor.`)) return;
    setBusy(true); setMessage("");
    try {
      const response = await fetch("/api/admin/projects", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: selectedProject.id }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "The project could not be deleted.");
      await loadProjects(); startNewProject(); setMessage("Project deleted. Vercel will deploy the updated gallery automatically.");
    } catch (error) { setMessage(error.message); } finally { setBusy(false); }
  };

  if (!signedIn) return <form className="admin-form" onSubmit={signIn}><label>Editor password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required autoComplete="current-password" /></label><button className="button" disabled={busy}>{busy ? "Signing in..." : "Sign in"}</button>{message && <p className="admin-message">{message}</p>}</form>;

  return <div className="admin-workspace">
    <div className="admin-toolbar"><button type="button" className="button button-small" onClick={startNewProject}>Add new project</button><span>{projects.length} project{projects.length === 1 ? "" : "s"} in gallery</span></div>
    <div className="admin-project-list" aria-label="Existing projects">{projects.map((item) => <button key={item.id} type="button" className={`admin-project-summary${project.id === item.id ? " is-active" : ""}`} onClick={() => editProject(item)}><img src={item.images[0]?.src} alt="" /><span><strong>{item.title}</strong><small>{item.location}</small></span></button>)}</div>
    <form className="admin-form" onSubmit={saveProject}>
      <h2>{mode === "new" ? "Add a project" : `Edit: ${project.title}`}</h2>
      <label>Project title<input value={project.title} onChange={(event) => setProject({ ...project, title: event.target.value })} required /></label>
      <label>Service type<input value={project.service} onChange={(event) => setProject({ ...project, service: event.target.value })} placeholder="Kitchen Remodel" required /></label>
      <label>City and state<input value={project.location} onChange={(event) => setProject({ ...project, location: event.target.value })} required /></label>
      <label>Short project description<textarea value={project.description} onChange={(event) => setProject({ ...project, description: event.target.value })} required /></label>
      {mode === "edit" && <div className="admin-image-deck"><h3>Photo deck</h3><p>Change the photo description for search context, or remove any photo from this project.</p>{project.images.map((image, index) => <div className="admin-image-row" key={image.src}><img src={image.src} alt="" /><label>Photo {index + 1} description<input value={image.alt} onChange={(event) => setProject({ ...project, images: project.images.map((item) => item.src === image.src ? { ...item, alt: event.target.value } : item) })} required /></label><button type="button" className="admin-text-button" onClick={() => removeImage(image.src)}>Remove</button></div>)}</div>}
      <label>{mode === "new" ? "Project photos" : "Add more photos"}<input type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={(event) => setFiles([...event.target.files])} required={mode === "new"} /></label>
      <p className="form-note">Choose the cover photo first. Use JPG, PNG, or WebP photos under 6 MB each.</p>
      <div className="admin-actions"><button className="button" disabled={busy}>{busy ? "Saving..." : mode === "new" ? "Publish project" : "Save changes"}</button>{mode === "edit" && <button type="button" className="admin-delete-button" onClick={deleteProject} disabled={busy}>Delete project</button>}</div>
      {message && <p className="admin-message">{message}</p>}
    </form>
  </div>;
}
