import { createHmac, timingSafeEqual } from "node:crypto";

const COOKIE_NAME = "ridgepoint_gallery_admin";
const MAX_AGE_SECONDS = 60 * 60 * 12;

function signature(value) {
  return createHmac("sha256", process.env.GALLERY_ADMIN_SESSION_SECRET || "").update(value).digest("base64url");
}

export function createAdminSession() {
  const value = `${Date.now().toString(36)}.${crypto.randomUUID()}`;
  return `${value}.${signature(value)}`;
}

export function hasAdminSession(request) {
  const secret = process.env.GALLERY_ADMIN_SESSION_SECRET;
  if (!secret) return false;
  const cookie = request.headers.get("cookie")?.split("; ").find((item) => item.startsWith(`${COOKIE_NAME}=`))?.slice(COOKIE_NAME.length + 1);
  if (!cookie) return false;
  const pieces = cookie.split(".");
  const received = pieces.pop();
  const value = pieces.join(".");
  if (!received || !value || Date.now() - Number.parseInt(pieces[0], 36) > MAX_AGE_SECONDS * 1000) return false;
  const expected = signature(value);
  return received.length === expected.length && timingSafeEqual(Buffer.from(received), Buffer.from(expected));
}

export function sessionCookie(value) {
  return { name: COOKIE_NAME, value, httpOnly: true, sameSite: "strict", secure: process.env.NODE_ENV === "production", path: "/", maxAge: MAX_AGE_SECONDS };
}

export function clearSessionCookie() {
  return { name: COOKIE_NAME, value: "", httpOnly: true, sameSite: "strict", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 0 };
}
