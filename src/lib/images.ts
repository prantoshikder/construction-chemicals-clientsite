const UNSPLASH = "https://images.unsplash.com";

export const img = (id: string, w = 1600, q = 75) =>
  `${UNSPLASH}/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const blurURL = (id: string) =>
  `${UNSPLASH}/${id}?auto=format&fit=crop&w=24&q=20&blur=50`;

export const BLUR_DATA =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiA5Ij48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iOSIgZmlsbD0iI2UyZThmMCIvPjwvc3ZnPg==";

export const IMG = {
  hero: {
    crane: "photo-1541888946425-d81bb19240f5",
    workers: "photo-1503387762-592deb58ef4e",
    pour: "photo-1504917595217-d4dc5ebe6122",
    warehouse: "photo-1565687981296-535f09db714e",
  },
  service: {
    concreteRepair: "photo-1581092918056-0c4c3acd3789",
    retrofitting: "photo-1590479773265-7464e5d48118",
    flooring: "photo-1581094794329-c8112a89af12",
    waterproofing: "photo-1606836591695-4d58a73eba1e",
    coatings: "photo-1503387837-b154d5074bd2",
    sealants: "photo-1504307651254-35680f356dfd",
    grouts: "photo-1530863506128-dc9eb5c3e0fc",
    surfaceTreatment: "photo-1772305595483-6b058aff40f9",
    polish: "photo-1771531072574-af6ed6b954c0",
    fairFace: "photo-1556909114-f6e7ad7d3136",
    admixtures: "photo-1581092580497-e0d23cbdf1dc",
  },
  team: {
    a: "photo-1560250097-0b93528c311a",
    b: "photo-1573497019940-1c28c88b4f3e",
    c: "photo-1612349317150-e413f6a5b16d",
    d: "photo-1500648767791-00dcc994a43e",
  },
  page: {
    about: "photo-1503387762-592deb58ef4e",
    services: "photo-1581094794329-c8112a89af12",
    products: "photo-1581092580497-e0d23cbdf1dc",
    gallery: "photo-1541888946425-d81bb19240f5",
    blogs: "photo-1504917595217-d4dc5ebe6122",
    contact: "photo-1486406146926-c627a92ad1ab",
  },
  about: "photo-1503387762-592deb58ef4e",
  stats: "photo-1541888946425-d81bb19240f5",
} as const;
