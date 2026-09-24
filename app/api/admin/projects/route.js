import { NextResponse } from "next/server";
import { hasAdminSession } from "../../../lib/gallery-auth";

const repository = process.env.GITHUB_GALLERY_REPOSITORY || "pm1442/Build-RidgePoint-Remodeling-website";
const branch = process.env.GITHUB_GALLERY_BRANCH || "main";
const contentPath = "content/projects.json";

function github(path, options = {}) {
  return fetch(`https://api.github.com/repos/${repository}/contents/${path}`, { ...options, headers: { Accept: "application/vnd.github+json", Authorization: `Bearer ${process.env.GITHUB_GALLERY_TOKEN}`, "X-GitHub-Api-Version": "2022-11-28", ...options.headers } });
}

function slugify(value) { return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 70); }
function hasDetails(project) { return [project.title, project.service, project.location, project.description].every((value) => typeof value === "string" && value.trim()); }
function sessionError(request) { return hasAdminSession(request) ? null : NextResponse.json({ error: "Sign in is required." }, { status: 401 }); }
function tokenError() { return process.env.GITHUB_GALLERY_TOKEN ? null : NextResponse.json({ error: "GitHub publishing is not configured yet." }, { status: 503 }); }

async function getProjects() {
  const response = await github(contentPath, { headers: { "Cache-Control": "no-store" } });
  if (!response.ok) throw new Error("GitHub could not read the project gallery.");
  const content = await response.json();
  return { projects: JSON.parse(Buffer.from(content.content, "base64").toString("utf8")), sha: content.sha };
}

async function saveProjects(projects, sha, message) {
  const response = await github(contentPath, { method: "PUT", body: JSON.stringify({ message, content: Buffer.from(`${JSON.stringify(projects, null, 2)}\n`).toString("base64"), sha, branch }) });
  if (!response.ok) throw new Error("GitHub could not update the project gallery. Please try again.");
}

async function saveNewImages(images, id, title) {
  if (!Array.isArray(images) || images.length > 10) throw new Error("Use no more than 10 photos at a time.");
  const saved = [];
  for (const [index, image] of images.entries()) {
    const match = /^data:(image\/(?:jpeg|png|webp));base64,(.+)$/.exec(image.dataUrl || "");
    if (!match || match[2].length > 8_000_000) throw new Error("Use JPG, PNG, or WebP photos under 6 MB each.");
    if (typeof image.alt !== "string" || !image.alt.trim()) throw new Error("Add a description for every photo. Each description becomes that photo's alt text.");
    const extension = match[1] === "image/jpeg" ? "jpg" : match[1].split("/")[1];
    const filename = `public/images/projects/${id}-${Date.now().toString(36)}-${index + 1}.${extension}`;
    const upload = await github(filename, { method: "PUT", body: JSON.stringify({ message: `Add gallery photo for ${title}`, content: match[2], branch }) });
    if (!upload.ok) throw new Error("GitHub could not save a photo. Check the token's Contents permission.");
    saved.push({ src: `/${filename.replace("public/", "")}`, alt: image.alt.trim() });
  }
  return saved;
}

export async function GET(request) {
  const denied = sessionError(request); if (denied) return denied;
  const missingToken = tokenError(); if (missingToken) return missingToken;
  try { return NextResponse.json({ projects: (await getProjects()).projects }); } catch (error) { return NextResponse.json({ error: error.message }, { status: 502 }); }
}

export async function POST(request) {
  const denied = sessionError(request); if (denied) return denied;
  const missingToken = tokenError(); if (missingToken) return missingToken;
  try {
    const project = await request.json();
    if (!hasDetails(project) || !Array.isArray(project.images) || project.images.length === 0) return NextResponse.json({ error: "Add the project details and at least one photo." }, { status: 400 });
    const id = `${slugify(project.title)}-${Date.now().toString(36)}`;
    const images = await saveNewImages(project.images, id, project.title);
    const { projects, sha } = await getProjects();
    const savedProject = { id, service: project.service.trim(), title: project.title.trim(), location: project.location.trim(), description: project.description.trim(), images };
    projects.unshift(savedProject); await saveProjects(projects, sha, `Publish project: ${savedProject.title}`);
    return NextResponse.json({ ok: true, project: savedProject });
  } catch (error) { return NextResponse.json({ error: error.message }, { status: 502 }); }
}

export async function PATCH(request) {
  const denied = sessionError(request); if (denied) return denied;
  const missingToken = tokenError(); if (missingToken) return missingToken;
  try {
    const update = await request.json();
    if (!update.id || !hasDetails(update) || !Array.isArray(update.images)) return NextResponse.json({ error: "Add the project details and keep at least one photo." }, { status: 400 });
    const { projects, sha } = await getProjects();
    const currentIndex = projects.findIndex((project) => project.id === update.id);
    if (currentIndex < 0) return NextResponse.json({ error: "That project could not be found." }, { status: 404 });
    const current = projects[currentIndex];
    const currentImages = new Map(current.images.map((image) => [image.src, image]));
    const keptImages = update.images.filter((image) => currentImages.has(image.src)).map((image) => ({ src: image.src, alt: image.alt?.trim() || currentImages.get(image.src).alt }));
    const newImages = await saveNewImages(update.newImages || [], current.id, update.title);
    const images = [...keptImages, ...newImages];
    if (images.length === 0) return NextResponse.json({ error: "Keep at least one photo, or delete the project." }, { status: 400 });
    const savedProject = { ...current, service: update.service.trim(), title: update.title.trim(), location: update.location.trim(), description: update.description.trim(), images };
    projects[currentIndex] = savedProject; await saveProjects(projects, sha, `Update project: ${savedProject.title}`);
    return NextResponse.json({ ok: true, project: savedProject });
  } catch (error) { return NextResponse.json({ error: error.message }, { status: 502 }); }
}

export async function DELETE(request) {
  const denied = sessionError(request); if (denied) return denied;
  const missingToken = tokenError(); if (missingToken) return missingToken;
  try {
    const { id } = await request.json();
    const { projects, sha } = await getProjects();
    const project = projects.find((item) => item.id === id);
    if (!project) return NextResponse.json({ error: "That project could not be found." }, { status: 404 });
    await saveProjects(projects.filter((item) => item.id !== id), sha, `Remove project: ${project.title}`);
    return NextResponse.json({ ok: true });
  } catch (error) { return NextResponse.json({ error: error.message }, { status: 502 }); }
}
