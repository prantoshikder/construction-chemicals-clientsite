import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { BLUR_DATA } from "@/lib/images";

export default function Products() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Our Collection
          </span>
          <h2 className="section-title title-bar mt-2">Products</h2>
          <p className="mt-4 text-ink-mute">
            A complete catalogue of construction chemicals for every stage of the build.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.title}
              className="overflow-hidden rounded-sm border border-gray-100 transition-colors hover:border-brand"
            >
              <div className="relative h-44">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA}
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 33vw"
                  quality={70}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-ink-mute">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      {it}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/products"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold uppercase text-brand"
                >
                  View All <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
