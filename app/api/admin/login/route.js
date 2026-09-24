import { NextResponse } from "next/server";
import { createAdminSession, sessionCookie } from "../../../lib/gallery-auth";

export async function POST(request) {
  const { password } = await request.json();
  if (!process.env.GALLERY_ADMIN_PASSWORD || !process.env.GALLERY_ADMIN_SESSION_SECRET) return NextResponse.json({ error: "The editor is not configured yet." }, { status: 503 });
  if (password !== process.env.GALLERY_ADMIN_PASSWORD) return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  const response = NextResponse.json({ ok: true });
  response.cookies.set(sessionCookie(createAdminSession()));
  return response;
}
