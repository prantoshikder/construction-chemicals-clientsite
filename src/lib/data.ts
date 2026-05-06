import { IMG, img } from "./images";

export type Service = { title: string; img: string; desc: string };
export type Product = { title: string; img: string; items: string[] };
export type Post = {
  title: string;
  img: string;
  cat: string;
  date: string;
  author?: string;
  excerpt: string;
};
export type Stat = { value: string; label: string };
export type Shot = { src: string; cat: string };
export type Slide = { img: string; title: string; sub: string };
export type Testimonial = {
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
};

export const heroSlides: Slide[] = [
  {
    img: img(IMG.hero.crane),
    title: "Complete Solution For Construction",
    sub: "Concrete repair, retrofitting, waterproofing & protective coatings under one roof.",
  },
  {
    img: img(IMG.hero.workers),
    title: "Trusted Construction Chemicals",
    sub: "Engineered products that deliver durability and long service life.",
  },
  {
    img: img(IMG.hero.pour),
    title: "Industrial Strength. Field Proven.",
    sub: "From bridges to high-rises — we strengthen what matters.",
  },
  {
    img: img(IMG.hero.warehouse),
    title: "Built To Last",
    sub: "Skilled engineers, quality materials, on-site precision.",
  },
];

export const services: Service[] = [
  {
    title: "Concrete Repair & Renovation",
    img: img(IMG.service.concreteRepair, 1200),
    desc: "Restore strength and durability to aging or damaged concrete structures with engineered repair systems.",
  },
  {
    title: "Retrofitting",
    img: img(IMG.service.retrofitting, 1200),
    desc: "Upgrade existing buildings, bridges and marine structures to meet modern load and safety requirements.",
  },
  {
    title: "Industrial Flooring",
    img: img(IMG.service.flooring, 1200),
    desc: "Epoxy, PU and hardener-based floors built for heavy traffic, chemicals and hygiene-critical environments.",
  },
  {
    title: "Water Proofing",
    img: img(IMG.service.waterproofing, 1200),
    desc: "Cementitious, polyurethane and bituminous membranes that keep structures dry for the long term.",
  },
  {
    title: "Protective Coatings",
    img: img(IMG.service.coatings, 1200),
    desc: "Coatings that defend steel and concrete from corrosion, abrasion and aggressive chemical exposure.",
  },
  {
    title: "Joint Sealants",
    img: img(IMG.service.sealants, 1200),
    desc: "Epoxy, PU and fire-rated sealants for expansion joints, control joints and structural movement.",
  },
  {
    title: "Grouts & Anchors",
    img: img(IMG.service.grouts, 1200),
    desc: "High-strength non-shrink grouts and chemical anchors for machine bases and structural fixings.",
  },
  {
    title: "Surface Treatments",
    img: img(IMG.service.surfaceTreatment, 1200),
    desc: "Hardeners, curing compounds and water-repellent coatings that extend concrete service life.",
  },
  {
    title: "Polish Concrete",
    img: img(IMG.service.polish, 1200),
    desc: "Mechanically polished concrete in cream, salt-and-pepper and aggregate-exposed finishes.",
  },
];

export const products: Product[] = [
  {
    title: "Admixtures",
    img: img(IMG.service.admixtures, 1200),
    items: ["Plasticizers", "Super Plasticizers", "Hyper Plasticizers", "Water Proofing Admixture"],
  },
  {
    title: "Grouts & Anchors",
    img: img(IMG.service.grouts, 1200),
    items: ["Cementitious Grouts", "Epoxy Grouts", "Chemical Anchors", "Free-flow Grouts"],
  },
  {
    title: "Waterproofing",
    img: img(IMG.service.waterproofing, 1200),
    items: [
      "Cementitious System",
      "Polyurethane System",
      "Bituminous Membrane",
      "Self-adhesive Membrane",
    ],
  },
  {
    title: "Coatings",
    img: img(IMG.service.coatings, 1200),
    items: ["Epoxy Resin", "Coal-tar Epoxy", "Hygienic Coating", "Water Repellent"],
  },
  {
    title: "Flooring Systems",
    img: img(IMG.service.flooring, 1200),
    items: ["Epoxy Flooring", "PU Flooring", "Floor Hardener", "Polished Concrete"],
  },
  {
    title: "Fair Face Work",
    img: img(IMG.service.fairFace, 1200),
    items: ["Fair-face Concrete", "Fair-face Mortar", "Skim Coat", "Form Release Agent"],
  },
];

export const posts: Post[] = [
  {
    title: "Why Concrete Repair Beats Demolition Every Time",
    img: img(IMG.service.concreteRepair, 1200),
    cat: "Repair",
    date: "Mar 12, 2024",
    author: "Engr. Rashed",
    excerpt:
      "Targeted repair restores load capacity at a fraction of the cost — when you choose the right materials and method.",
  },
  {
    title: "Choosing The Right Waterproofing System",
    img: img(IMG.service.waterproofing, 1200),
    cat: "Waterproofing",
    date: "Feb 28, 2024",
    author: "Engr. Mahmud",
    excerpt:
      "Cementitious vs. polyurethane vs. bituminous — a quick guide to picking the system your structure actually needs.",
  },
  {
    title: "Industrial Floors That Survive Real-World Abuse",
    img: img(IMG.service.flooring, 1200),
    cat: "Flooring",
    date: "Feb 14, 2024",
    author: "Engr. Sabbir",
    excerpt:
      "Heavy traffic, hot wash-downs, chemical spills — what to specify so your floor outlasts the warranty.",
  },
  {
    title: "Retrofitting Old RCC: A Pragmatic Playbook",
    img: img(IMG.service.retrofitting, 1200),
    cat: "Retrofitting",
    date: "Jan 30, 2024",
    author: "Engr. Tahsin",
    excerpt:
      "FRP wrap, jacketing, externally bonded plates — when each technique earns its place on the drawing.",
  },
  {
    title: "Protective Coatings For Coastal Structures",
    img: img(IMG.service.coatings, 1200),
    cat: "Coatings",
    date: "Jan 12, 2024",
    author: "Engr. Rashed",
    excerpt:
      "Salt, humidity and UV destroy unprotected steel in years. The coating system that buys decades.",
  },
  {
    title: "Joint Sealants: Don't Pick The Wrong Chemistry",
    img: img(IMG.service.sealants, 1200),
    cat: "Sealants",
    date: "Dec 18, 2023",
    author: "Engr. Mahmud",
    excerpt:
      "PU, silicone or epoxy — substrate movement and exposure decide. Get this wrong and the joint fails first.",
  },
];

export const stats: Stat[] = [
  { value: "250+", label: "Projects Completed" },
  { value: "1.2K+", label: "Total Tasks Completed" },
  { value: "85+", label: "In House Professionals" },
  { value: "180+", label: "Really Happy Clients" },
];

export const galleryShots: Shot[] = [
  { src: img(IMG.hero.crane, 1400), cat: "Site Work" },
  { src: img(IMG.service.concreteRepair, 1200), cat: "Repair" },
  { src: img(IMG.service.flooring, 1200), cat: "Flooring" },
  { src: img(IMG.hero.workers, 1200), cat: "Site Work" },
  { src: img(IMG.service.retrofitting, 1200), cat: "Retrofitting" },
  { src: img(IMG.hero.pour, 1400), cat: "Repair" },
  { src: img(IMG.service.waterproofing, 1200), cat: "Waterproofing" },
  { src: img(IMG.service.grouts, 1200), cat: "Retrofitting" },
  { src: img(IMG.service.surfaceTreatment, 1200), cat: "Repair" },
  { src: img(IMG.service.polish, 1200), cat: "Flooring" },
  { src: img(IMG.service.sealants, 1200), cat: "Waterproofing" },
  { src: img(IMG.service.coatings, 1200), cat: "Coatings" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Mizanur Rahman",
    role: "Project Director",
    company: "Akij Group",
    rating: 5,
    quote:
      "MCCEL handled the structural retrofitting of our textile facility on a tight shutdown window. The team mobilised fast, finished two days ahead of schedule and the floors are still flawless three years on.",
  },
  {
    name: "Farhana Karim",
    role: "Senior Civil Engineer",
    company: "BSRM",
    rating: 5,
    quote:
      "Their waterproofing system stopped a chronic basement leak that two previous contractors couldn't solve. Documentation and on-site QC were exactly what we expect from a tier-one partner.",
  },
  {
    name: "Tanvir Hossain",
    role: "Head of Maintenance",
    company: "Bashundhara",
    rating: 5,
    quote:
      "From the initial site survey to the final polished concrete handover, communication was crisp and pricing was transparent. Easily our preferred construction chemicals supplier now.",
  },
  {
    name: "Sadia Ahmed",
    role: "Construction Manager",
    company: "Square",
    rating: 5,
    quote:
      "We trusted MCCEL with the protective coating of a new pharmaceutical plant. Surface preparation, application and dry-time documentation were textbook — audit passed first time.",
  },
  {
    name: "Rezaul Karim",
    role: "Procurement Lead",
    company: "Pran-RFL",
    rating: 4,
    quote:
      "Reliable supply, consistent batch quality and engineers who actually visit the site when something is unusual. That combination is rare in this market.",
  },
];

export const clients: string[] = [
  "BRAC",
  "Akij Group",
  "Square",
  "BSRM",
  "Beximco",
  "Pran-RFL",
  "Bashundhara",
  "City Group",
  "Meghna Group",
  "Walton",
  "PHP",
  "ACI",
];
