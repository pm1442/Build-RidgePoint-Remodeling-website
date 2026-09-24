import { NextResponse } from "next/server";
import { hasAdminSession } from "../../../lib/gallery-auth";

const repository = process.env.GITHUB_GALLERY_REPOSITORY || "pm1442/Build-RidgePoint-Remodeling-website";
const branch = process.env.GITHUB_GALLERY_BRANCH || "main";
const contentPath = "content/projects.json";

function github(path, options = {}) {
  return fetch(`https://api.github.com/repos/${repository}/contents/${path}`, { ...options, headers: { Accept: "application/vnd.github+json", Authorization: `Bearer ${process.env.GITHUB_GALLERY_TOKEN}`, "X-GitHub-Api-Version": "2022-11-28", ...options.headers } });
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 70);
}

export async function POST(request) {
  if (!hasAdminSession(request)) return NextResponse.json({ error: "Sign in is required." }, { status: 401 });
  if (!process.env.GITHUB_GALLERY_TOKEN) return NextResponse.json({ error: "GitHub publishing is not configured yet." }, { status: 503 });
  const { title, service, location, description, images = [] } = await request.json();
  if (![title, service, location, description].every((value) => typeof value === "string" && value.trim()) || !Array.isArray(images) || images.length === 0 || images.length > 10) return NextResponse.json({ error: "Add the project details and at least one photo." }, { status: 400 });
  const id = `${slugify(title)}-${Date.now().toString(36)}`;
  const savedImages = [];
  for (const [index, image] of images.entries()) {
    const match = /^data:(image\/(?:jpeg|png|webp));base64,(.+)$/.exec(image.dataUrl || "");
    if (!match || match[2].length > 8_000_000) return NextResponse.json({ error: "Use JPG, PNG, or WebP photos under 6 MB each." }, { status: 400 });
    const extension = match[1] === "image/jpeg" ? "jpg" : match[1].split("/")[1];
    const filename = `public/images/projects/${id}-${index + 1}.${extension}`;
    const upload = await github(filename, { method: "PUT", body: JSON.stringify({ message: `Add gallery photo for ${title}`, content: match[2], branch }) });
    if (!upload.ok) return NextResponse.json({ error: "GitHub could not save a photo. Check the token's Contents permission." }, { status: 502 });
    savedImages.push({ src: `/${filename.replace("public/", "")}`, alt: image.alt?.trim() || `${title} project photo ${index + 1}` });
  }
  const existingResponse = await github(contentPath, { headers: { "Cache-Control": "no-store" } });
  if (!existingResponse.ok) return NextResponse.json({ error: "GitHub could not read the project gallery." }, { status: 502 });
  const existing = await existingResponse.json();
  const projects = JSON.parse(Buffer.from(existing.content, "base64").toString("utf8"));
  projects.unshift({ id, service: service.trim(), title: title.trim(), location: location.trim(), description: description.trim(), images: savedImages });
  const update = await github(contentPath, { method: "PUT", body: JSON.stringify({ message: `Publish project: ${title}`, content: Buffer.from(`${JSON.stringify(projects, null, 2)}\n`).toString("base64"), sha: existing.sha, branch }) });
  if (!update.ok) return NextResponse.json({ error: "Photos were saved, but the gallery could not be updated. Please try again." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
