export const canonicalOrigin = "https://ridgepointremodeling.com";

export function pageUrl(path = "/") {
  return new URL(path, canonicalOrigin).toString();
}
