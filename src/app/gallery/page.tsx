import type { Metadata } from "next";
import { PageHeader } from "@/components/layout";
import { Subscribe } from "@/components/sections";
import { GalleryFilter } from "@/components/sections/Gallery";
import { IMG, img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Project photos — concrete repair, retrofitting, flooring, waterproofing across Bangladesh.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="A look at projects we have delivered across industrial, commercial and infrastructure clients."
        bg={img(IMG.page.gallery, 1600)}
      />

      <section className="section bg-white">
        <div className="container-x">
          <GalleryFilter />
        </div>
      </section>

      <Subscribe />
    </>
  );
}
