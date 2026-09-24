"use client";

import { useState } from "react";

const emptyProject = { title: "", service: "", location: "Lake Butler, Florida", description: "" };

export function AdminGalleryEditor() {
  const [project, setProject] = useState(emptyProject);
  const [files, setFiles] = useState([]);
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  const signIn = async (event) => {
    event.preventDefault(); setBusy(true); setMessage("");
    const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
    const data = await response.json(); setBusy(false);
    if (!response.ok) return setMessage(data.error);
    setSignedIn(true); setPassword("");
  };
  const publish = async (event) => {
    event.preventDefault(); setBusy(true); setMessage("Preparing photos...");
    const images = await Promise.all(files.map(async (file) => ({ dataUrl: await new Promise((resolve) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.readAsDataURL(file); }), alt: `${project.title} in ${project.location}` })));
    const response = await fetch("/api/admin/projects", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...project, images }) });
    const data = await response.json(); setBusy(false);
    if (!response.ok) return setMessage(data.error);
    setProject(emptyProject); setFiles([]); setMessage("Project published. Vercel will deploy the updated gallery automatically.");
  };
  if (!signedIn) return <form className="admin-form" onSubmit={signIn}><label>Editor password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required autoComplete="current-password" /></label><button className="button" disabled={busy}>{busy ? "Signing in..." : "Sign in"}</button>{message && <p className="admin-message">{message}</p>}</form>;
  return <form className="admin-form" onSubmit={publish}><label>Project title<input value={project.title} onChange={(event) => setProject({ ...project, title: event.target.value })} required /></label><label>Service type<input value={project.service} onChange={(event) => setProject({ ...project, service: event.target.value })} placeholder="Kitchen Remodel" required /></label><label>City and state<input value={project.location} onChange={(event) => setProject({ ...project, location: event.target.value })} required /></label><label>Short project description<textarea value={project.description} onChange={(event) => setProject({ ...project, description: event.target.value })} required /></label><label>Project photos<input type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={(event) => setFiles([...event.target.files])} required /></label><p className="form-note">Choose the cover photo first. Use JPG, PNG, or WebP photos under 6 MB each.</p><button className="button" disabled={busy}>{busy ? "Publishing..." : "Publish project"}</button>{message && <p className="admin-message">{message}</p>}</form>;
}
