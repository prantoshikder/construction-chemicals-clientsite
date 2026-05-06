import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout";
import { Subscribe } from "@/components/sections";
import { posts } from "@/lib/data";
import { IMG, img, BLUR_DATA } from "@/lib/images";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Field tips, product notes and case studies from MCCEL engineers.",
};

const categories = [
  { name: "Repair", count: 8 },
  { name: "Waterproofing", count: 6 },
  { name: "Flooring", count: 5 },
  { name: "Retrofitting", count: 4 },
  { name: "Coatings", count: 7 },
  { name: "Sealants", count: 3 },
];

export default function BlogsPage() {
  return (
    <>
      <PageHeader
        title="Blogs"
        subtitle="Field tips, product notes and case studies from our engineers."
        bg={img(IMG.page.blogs, 1600)}
      />

      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((p) => (
              <article
                key={p.title}
                className="group overflow-hidden rounded-sm border border-gray-100 bg-white transition-shadow hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 33vw"
                    quality={70}
                  />
                  <span className="absolute left-3 top-3 bg-brand px-3 py-1 text-xs font-semibold uppercase text-white">
                    {p.cat}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-ink-mute">
                    <span>{p.date}</span>
                    <span className="h-1 w-1 rounded-full bg-ink-mute" />
                    <span>By {p.author}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-mute">{p.excerpt}</p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold uppercase text-brand"
                  >
                    Read More <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <aside className="space-y-8">
            <div className="bg-gray-50 p-5">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-ink">
                Search
              </h4>
              <input
                type="search"
                placeholder="Search posts…"
                className="w-full rounded-sm border border-gray-200 px-3 py-2 text-sm focus:border-brand focus:outline-none"
              />
            </div>

            <div className="bg-gray-50 p-5">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-ink">
                Categories
              </h4>
              <ul className="space-y-2">
                {categories.map((c) => (
                  <li key={c.name}>
                    <Link
                      href="#"
                      className="flex justify-between text-sm text-ink hover:text-brand"
                    >
                      <span>→ {c.name}</span>
                      <span className="text-ink-mute">({c.count})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand p-5 text-white">
              <h4 className="text-sm font-semibold uppercase tracking-widest">
                Need A Site Visit?
              </h4>
              <p className="mt-2 text-sm text-white/90">
                Tell us the structure and the problem — we&apos;ll send an engineer.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors hover:bg-ink-soft"
              >
                Contact Us
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Subscribe />
    </>
  );
}
