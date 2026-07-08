"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/beams/tokenization", label: "Tokenization" },
  { href: "/beams/screen-readers", label: "Screen Readers" },
  { href: "/beams/motor-accessibility", label: "Motor Accessibility" },
  { href: "/map", label: "More Topics" }
];

export default function Nav() {
    const pathname = usePathname();

    useEffect(() => {
      setOpen(false);
    }, [pathname]);
    const [open, setOpen] = useState(false);

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
              className="text-emerald-100 hover:text-white underline-offset-4 hover:underline transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden text-white text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 pb-2">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-emerald-100 hover:text-white text-lg">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}