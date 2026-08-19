import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ridgepointremodeling.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RidgePoint Remodeling & Carpentry | Lake Butler, FL",
    template: "%s | RidgePoint Remodeling & Carpentry",
  },
  description:
    "Kitchen and bathroom remodeling, custom carpentry, cabinet installation, and deck building for homeowners in North Central Florida.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "RidgePoint Remodeling & Carpentry",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
