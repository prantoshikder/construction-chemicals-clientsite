import type { Metadata } from "next";
import { PageHeader } from "@/components/layout";
import { Products, Subscribe } from "@/components/sections";
import { IMG, img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Construction chemicals catalogue — admixtures, grouts, anchors, waterproofing, coatings, flooring systems.",
};

const categories = [
  { name: "Admixtures", count: 12 },
  { name: "Grouts & Anchors", count: 9 },
  { name: "Waterproofing", count: 14 },
  { name: "Coatings", count: 11 },
  { name: "Flooring Systems", count: 10 },
  { name: "Sealants", count: 7 },
  { name: "Surface Treatment", count: 8 },
  { name: "Concrete Repair", count: 13 },
];

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Products"
        subtitle="A complete catalogue of construction chemicals for every stage of the build."
        bg={img(IMG.page.products, 1600)}
      />

      <section className="section bg-gray-50">
        <div className="container-x">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand">
              Browse By Category
            </span>
            <h2 className="section-title title-bar mt-2">Product Categories</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {categories.map((c) => (
              <a
                key={c.name}
                href="#catalogue"
                className="group border border-gray-200 bg-white p-5 text-center transition-all hover:border-brand hover:shadow-md"
              >
                <div className="text-2xl font-bold text-brand">{c.count}</div>
                <div className="mt-1 text-sm uppercase tracking-wide text-ink group-hover:text-brand">
                  {c.name}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div id="catalogue">
        <Products />
      </div>

      <Subscribe />
    </>
  );
}
