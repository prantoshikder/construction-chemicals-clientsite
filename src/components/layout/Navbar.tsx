"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "bg-white shadow-md" : "bg-white/95"
      }`}
    >
      <div className="container-x flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-base font-bold text-white sm:h-12 sm:w-12 sm:text-lg">
            M
          </div>
          <div className="leading-tight">
            <div className="text-base font-bold text-ink sm:text-lg">MCCEL</div>
            <div className="hidden text-[11px] uppercase tracking-wider text-ink-mute xs:block sm:block">
              Construction Chemicals
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                  active ? "text-brand" : "text-ink hover:text-brand"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <button
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="p-2 text-ink lg:hidden"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t bg-white lg:hidden">
          <div className="container-x flex flex-col py-2">
            {links.map((l) => {
              const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`border-b border-gray-100 py-3 text-sm font-medium uppercase tracking-wide transition-colors last:border-b-0 ${
                    active ? "text-brand" : "text-ink hover:text-brand"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
