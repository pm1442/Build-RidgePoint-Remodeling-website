"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const links = [
  ["/services", "Services"],
  ["/projects", "Projects"],
  ["/about", "About"],
  ["/areas-we-serve", "Service Area"],
  ["/contact", "Contact"],
];

export function MobileNav() {
  const menuRef = useRef(null);

  useEffect(() => {
    const closeWhenOutside = (event) => {
      if (menuRef.current?.open && !menuRef.current.contains(event.target)) menuRef.current.removeAttribute("open");
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") menuRef.current?.removeAttribute("open");
    };

    document.addEventListener("pointerdown", closeWhenOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeWhenOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeMenu = () => menuRef.current?.removeAttribute("open");

  return <details className="mobile-nav" ref={menuRef}>
    <summary>Menu</summary>
    <nav aria-label="Mobile navigation">
      {links.map(([href, label]) => <Link href={href} key={href} onClick={closeMenu}>{label}</Link>)}
    </nav>
  </details>;
}
