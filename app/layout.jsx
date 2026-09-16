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
    images: [{ url: "/images/ridgepoint-home-hero.png", alt: "RidgePoint Remodeling & Carpentry project" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/ridgepoint-home-hero.png"] },
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
