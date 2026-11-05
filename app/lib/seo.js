export const canonicalOrigin = "https://ridgepointremodeling.com";
export const defaultOpenGraphImage = [{
  url: "/images/ridgepoint-social-share.jpg",
  width: 1200,
  height: 630,
  alt: "Covered porch and exterior renovation by Ridge Point Remodeling & Carpentry",
}];

export function pageUrl(path = "/") {
  return new URL(path, canonicalOrigin).toString();
}
