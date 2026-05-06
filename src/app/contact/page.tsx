import type { Metadata } from "next";
import { PageHeader } from "@/components/layout";
import { Contact } from "@/components/sections";
import { IMG, img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach Mount Construction Chemicals Engineering Limited — Dhaka office, phone, email.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Tell us the project, the problem and the timeline — we'll get an engineer on it."
        bg={img(IMG.page.contact, 1600)}
      />

      <Contact />

      <section className="bg-gray-50">
        <div className="container-x py-0">
          <div className="aspect-[16/6] w-full overflow-hidden">
            <iframe
              title="MCCEL location"
              src="https://www.google.com/maps?q=Dhaka%20Bangladesh&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
