"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/origins", label: "Origins" },
  { href: "/map", label: "Accessibility Gaps" }
];

export default function Nav() {
    const pathname = usePathname();

    const [open, setOpen] = useState(false);

    useEffect(() => {
      setOpen(false);
    }, [pathname]);

  return (
    <nav className="fixed top-0 z-20 w-full bg-emerald-950/80 backdrop-blur-sm px-8 py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-bold text-white text-lg tracking-wide [font-family:var(--font-atkinson)]">
          The Unmapped
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href}
            aria-current={pathname === l.href ? "page" : undefined}
            className={`underline-offset-4 hover:underline transition-colors ${pathname === l.href ? "text-white underline" : "text-emerald-100 hover:text-white"}`}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden text-white text-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 pb-2">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`text-lg ${pathname === l.href ? "text-white underline underline-offset-4" : "text-emerald-100 hover:text-white"}`}>              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}