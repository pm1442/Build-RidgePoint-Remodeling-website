import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ridgepointremodeling.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RidgePoint Remodeling & Carpentry | Lake Butler, FL",
    template: "%s | RidgePoint Remodeling & Carpentry",
  },
  description:
    "Kitchen, bath, cabinetry, carpentry, deck, siding, window, and flooring work for homeowners in Lake Butler and nearby North Florida communities.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "RidgePoint Remodeling & Carpentry",
    images: [{ url: "/images/ridgepoint-social-share.jpg", width: 1200, height: 630, alt: "Covered porch and exterior renovation by RidgePoint Remodeling & Carpentry" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/ridgepoint-social-share.jpg"] },
};

export const viewport = {
  themeColor: "#802931",
  colorScheme: "light dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
