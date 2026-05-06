import type { Metadata } from "next";
import { PageHeader } from "@/components/layout";
import { Services, Subscribe } from "@/components/sections";
import { IMG, img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Concrete repair, retrofitting, industrial flooring, waterproofing, protective coatings and more — engineered solutions.",
};

const process = [
  {
    step: "01",
    title: "Site Inspection",
    desc: "On-site assessment of substrate, exposure and structural condition.",
  },
  {
    step: "02",
    title: "Engineering Solution",
    desc: "Tailored specification, materials list and method statement.",
  },
  {
    step: "03",
    title: "Surface Preparation",
    desc: "Mechanical and chemical prep to expose sound substrate.",
  },
  {
    step: "04",
    title: "Application & QA",
    desc: "Trained crews, batch tracking, in-process and final QA.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        subtitle="Engineered solutions covering every stage from substrate prep to final finish."
        bg={img(IMG.page.services, 1600)}
      />

      <Services />

      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand">
              How We Work
            </span>
            <h2 className="section-title title-bar mt-2">Our Process</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="relative border-l-4 border-brand bg-gray-50 p-6">
                <div className="absolute right-4 top-3 text-5xl font-bold text-brand/20">
                  {p.step}
                </div>
                <h3 className="font-semibold uppercase tracking-wide text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-mute">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Subscribe />
    </>
  );
}
