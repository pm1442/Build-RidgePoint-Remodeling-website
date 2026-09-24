import Link from "next/link";
import { AdminGalleryEditor } from "../components/admin-gallery-editor";

export const metadata = {
  title: "Gallery Editor",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <main className="admin-shell"><section className="admin-panel"><p className="eyebrow">Private workspace</p><h1>Gallery Editor</h1><p>This workspace is reserved for RidgePoint project updates and is intentionally excluded from search engines.</p><AdminGalleryEditor /><Link className="text-link" href="/projects">View public gallery</Link></section></main>;
}
