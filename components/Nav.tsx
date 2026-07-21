"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gaps } from "@/data/gaps";

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [gapsOpen, setGapsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const gapsBtnRef = useRef<HTMLButtonElement>(null);

  const live = gaps.filter((g) => g.href);

  // Close everything on navigation
  useEffect(() => {
    setMobileOpen(false);
    setGapsOpen(false);
  }, [pathname]);

  // Close the desktop dropdown on outside click or Escape
  useEffect(() => {
    if (!gapsOpen) return;
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setGapsOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setGapsOpen(false);
        gapsBtnRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [gapsOpen]);

  const linkClass = (active: boolean) =>
    `underline-offset-4 hover:underline transition-colors ${active ? "text-white underline" : "text-emerald-100 hover:text-white"}`;

  const gapsActive = pathname.startsWith("/gaps") || pathname === "/map";

  return (
    <nav className="fixed top-0 z-20 w-full bg-emerald-950/80 backdrop-blur-sm px-8 py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-bold text-white text-lg tracking-wide [font-family:var(--font-atkinson)]">
          The Unmapped
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/origins"
            aria-current={pathname === "/origins" ? "page" : undefined}
            className={linkClass(pathname === "/origins")}
          >
            Origins
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              ref={gapsBtnRef}
              onClick={() => setGapsOpen((o) => !o)}
              aria-expanded={gapsOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1 ${linkClass(gapsActive)}`}
            >
              Accessibility Gaps
              <span aria-hidden="true" className={`text-xs transition-transform ${gapsOpen ? "rotate-180" : ""}`}>
                ▾
              </span>
            </button>

            {gapsOpen && (
              <div className="absolute right-0 mt-3 w-64 rounded-xl border border-emerald-800 bg-emerald-950/95 backdrop-blur-sm p-2 shadow-xl">
                <Link
                  href="/map"
                  aria-current={pathname === "/map" ? "page" : undefined}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
                >
                  All gaps
                </Link>
                <div className="my-1 h-px bg-emerald-800" aria-hidden="true" />
                {live.map((g) => (
                  <Link
                    key={g.href}
                    href={g.href!}
                    aria-current={pathname === g.href ? "page" : undefined}
                    className={`block rounded-lg px-3 py-2 text-sm hover:bg-emerald-800 ${pathname === g.href ? "text-white" : "text-emerald-100"}`}
                  >
                    {g.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-white text-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 pb-2">
          <Link
            href="/origins"
            onClick={() => setMobileOpen(false)}
            aria-current={pathname === "/origins" ? "page" : undefined}
            className={`text-lg ${pathname === "/origins" ? "text-white underline underline-offset-4" : "text-emerald-100 hover:text-white"}`}
          >
            Origins
          </Link>
          <Link
            href="/map"
            onClick={() => setMobileOpen(false)}
            aria-current={pathname === "/map" ? "page" : undefined}
            className={`text-lg ${pathname === "/map" ? "text-white underline underline-offset-4" : "text-emerald-100 hover:text-white"}`}
          >
            Accessibility Gaps
          </Link>
          <ul className="mt-1 flex flex-col gap-2 border-l border-emerald-800 pl-4 list-none">
            {live.map((g) => (
              <li key={g.href}>
                <Link
                  href={g.href!}
                  onClick={() => setMobileOpen(false)}
                  aria-current={pathname === g.href ? "page" : undefined}
                  className={pathname === g.href ? "text-white" : "text-emerald-200 hover:text-white"}
                >
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}