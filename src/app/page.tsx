import {
  About,
  Blogs,
  Clients,
  Contact,
  Gallery,
  Hero,
  Products,
  Services,
  Stats,
  Subscribe,
  Testimonials,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Products />
      <Gallery />
      <Testimonials />
      <Blogs />
      <Clients />
      <Subscribe />
      <Contact />
    </>
  );
}
