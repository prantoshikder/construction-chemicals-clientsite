import Link from "next/link";

const services = [
  "Concrete Repair",
  "Retrofitting",
  "Industrial Flooring",
  "Waterproofing",
  "Protective Coatings",
  "Joint Sealants",
];

const links = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-gray-300">
      <div className="container-x grid gap-8 py-12 sm:gap-10 sm:py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-brand font-bold text-white">
              M
            </div>
            <div>
              <div className="text-lg font-bold text-white">MCCEL</div>
              <div className="text-[11px] uppercase tracking-widest text-gray-400">
                Construction Chemicals
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Mount Construction Chemicals Engineering Limited delivers complete construction-chemical
            solutions across Bangladesh — from substrate prep to final finish.
          </p>
          <div className="mt-5 flex gap-3">
            {["F", "T", "I", "L"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="grid h-9 w-9 place-items-center rounded-sm bg-white/10 text-sm text-white transition-colors hover:bg-brand"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-brand">
                  → {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Services
          </h4>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s}>
                <Link href="/services" className="transition-colors hover:text-brand">
                  → {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Contact
          </h4>
          <ul className="space-y-2 text-sm">
            <li>House 12, Road 5, Dhaka</li>
            <li>
              <a href="tel:+8801715403993" className="hover:text-brand">
                +880-1715-403993
              </a>
            </li>
            <li>
              <a href="mailto:info@mountbd.org" className="hover:text-brand">
                info@mountbd.org
              </a>
            </li>
            <li>www.mountbd.org</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-4 text-xs text-gray-400 sm:flex-row">
          <div>© {new Date().getFullYear()} MCCEL. All rights reserved.</div>
          <div>Built with Next.js & Tailwind CSS</div>
        </div>
      </div>
    </footer>
  );
}
