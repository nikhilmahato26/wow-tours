/**
 * Gallery images. These are stock placeholders grouped by category so the layout
 * is representative. Replace each `src` with a real WOW SELF DRIVE CARS photo -
 * keep the same `category` and update `alt` for SEO.
 */

export const galleryCategories = [
  "Cars",
  "SUVs",
  "Self Drive",
  "Road Trips",
  "Hyderabad",
  "Outstation",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
};

const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const galleryItems: GalleryItem[] = [
  { id: "g1", src: U("1503376780353-7e6692767b70"), alt: "Silver sedan available for self-drive rental in Hyderabad", category: "Cars" },
  { id: "g2", src: U("1494976388531-d1058494cdd8"), alt: "Premium car parked on a city street", category: "Cars" },
  { id: "g3", src: U("1552519507-da3b142c6e3d"), alt: "Sporty hatchback for weekend self-drive hire", category: "Cars" },
  { id: "g4", src: U("1533473359331-0135ef1b58bf"), alt: "Black SUV ready for an outstation trip", category: "SUVs" },
  { id: "g5", src: U("1544829099-b9a0c07fad1a"), alt: "Adventure SUV on a rural road", category: "SUVs" },
  { id: "g6", src: U("1568844293986-8d0400bd4745"), alt: "Full-size SUV for family self-drive rentals", category: "SUVs" },
  { id: "g7", src: U("1449965408869-eaa3f722e40d"), alt: "Open highway for a self-drive journey", category: "Road Trips" },
  { id: "g8", src: U("1470770903676-69b98201ea1c"), alt: "Winding mountain road on a weekend road trip", category: "Road Trips" },
  { id: "g9", src: U("1502877338535-766e1452684a"), alt: "Car on a scenic road trip route", category: "Road Trips" },
  { id: "g10", src: U("1549317661-bd32c8ce0db2"), alt: "Driver setting off in a self-drive rental car", category: "Self Drive" },
  { id: "g11", src: U("1519245659620-e859806a8d3b"), alt: "City roads around Hyderabad", category: "Hyderabad" },
  { id: "g12", src: U("1533106418989-88406c7cc8ca"), alt: "Driving through Hyderabad", category: "Hyderabad" },
  { id: "g13", src: U("1469854523086-cc02fe5d8800"), alt: "Long open road for an outstation self-drive rental", category: "Outstation" },
  { id: "g14", src: U("1502920917128-1aa500764cbd"), alt: "Countryside route for outstation travel", category: "Outstation" },
  { id: "g15", src: U("1511919884226-fd3cad34687c"), alt: "SUV parked for a self-drive adventure", category: "Self Drive" },
];
