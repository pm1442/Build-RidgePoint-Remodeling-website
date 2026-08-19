import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ridgepointremodeling.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RidgePoint Remodeling & Carpentry | Lake Butler, FL",
    template: "%s | RidgePoint Remodeling & Carpentry",
  },
  description:
    "Home remodeling, cabinet sales and installation, finish carpentry, decks, flooring, siding, and windows for homeowners in Lake Butler and North Florida.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "RidgePoint Remodeling & Carpentry",
  },
};

export const viewport = {
  themeColor: "#6d2030",
  colorScheme: "light dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
