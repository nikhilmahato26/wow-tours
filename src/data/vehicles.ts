/**
 * Fleet data. Vehicle names, categories, transmission and rate tiers are exactly
 * as supplied. Seating capacity for individual premium vehicles was NOT supplied,
 * so it is deliberately omitted. Swap `image` values for real photos when available.
 */

export type VehicleCategory = "5-Seater" | "Premium" | "Adventure";

export type Vehicle = {
  slug: string;
  name: string;
  category: VehicleCategory;
  categoryLabel: string;
  /** Only shown where explicitly supplied. */
  transmission?: "Automatic";
  /** Availability highlight, shown as a badge. */
  highlight?: string;
  /** Rate tier label + starting price, only where a supplied price list applies. */
  rate?: { tier: string; from: string; per: string };
  image: string;
  alt: string;
};

const U = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

export const vehicles: Vehicle[] = [
  {
    slug: "swift",
    name: "Swift",
    category: "5-Seater",
    categoryLabel: "5-Seater Hatchback",
    rate: { tier: "5-Seater tariff", from: "₹1,500", per: "12 hrs / 150 KM" },
    image: 'https://www.marutiseva.com/assets/images/new-gen-swift/car-03.png',
    alt: "Compact 5-seater hatchback for self-drive rental in Hyderabad",
  },
  {
    slug: "baleno",
    name: "Baleno",
    category: "5-Seater",
    categoryLabel: "5-Seater Hatchback",
    rate: { tier: "5-Seater tariff", from: "₹1,500", per: "12 hrs / 150 KM" },
    image: 'https://media.zigcdn.com/media/model/2026/Mar/front-1-4-left-1397016432_930x620.jpg',
    alt: "Premium 5-seater hatchback available for self-drive hire",
  },
  {
    slug: "fronx",
    name: "Fronx",
    category: "5-Seater",
    categoryLabel: "5-Seater Crossover",
    rate: { tier: "5-Seater tariff", from: "₹1,500", per: "12 hrs / 150 KM" },
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuupQIPmcNnDQPNP1fe9cf-aWXV1uh4a3HeDV6SrhowOqJ8E3R8fPg8vyT&s=10',
    alt: "5-seater crossover for city and weekend self-drive rentals",
  },
  {
    slug: "automatic-fronx",
    name: "Automatic Fronx",
    category: "5-Seater",
    categoryLabel: "5-Seater Crossover",
    transmission: "Automatic",
    highlight: "Automatic Fronx available",
    rate: { tier: "5-Seater tariff", from: "₹1,500", per: "12 hrs / 150 KM" },
    image: 'https://goadriverentals.com/wp-content/uploads/2025/12/fronx.webp',
    alt: "Automatic transmission Fronx crossover for self-drive hire in Hyderabad",
  },
  {
    slug: "innova-crysta",
    name: "Innova Crysta",
    category: "Premium",
    categoryLabel: "Premium MPV",
    rate: { tier: "7-Seater tariff", from: "₹2,500", per: "12 hrs / 150 KM" },
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/222736/innova-crysta-2026-exterior-right-front-three-quarter.png?isig=0&q=80',
    alt: "Premium MPV for family trips and outstation self-drive rentals",
  },
  {
    slug: "fortuner",
    name: "Fortuner",
    category: "Premium",
    categoryLabel: "Premium SUV",
    rate: { tier: "7-Seater tariff", from: "₹2,500", per: "12 hrs / 150 KM" },
    image: 'https://gaadiwaadi.com/wp-content/uploads/2026/02/Next-Gen-Toyota-Fortuner-Rendered-1260x720.jpg',
    alt: "Premium full-size SUV for self-drive hire in Hyderabad",
  },
  {
    slug: "thar",
    name: "Thar",
    category: "Adventure",
    categoryLabel: "Adventure SUV",
    rate: { tier: "Thar tariff", from: "₹3,000", per: "12 hrs / 150 KM" },
    image: 'https://imgd.aeplcdn.com/642x336/n/cw/ec/204996/thar-2025-exterior-right-front-three-quarter-5.png?isig=0&q=80',
    alt: "Off-road ready adventure SUV for weekend and outstation self-drive trips",
  },
  {
    slug: "thar-roxx",
    name: "Thar Roxx",
    category: "Adventure",
    categoryLabel: "Adventure SUV",
    rate: { tier: "Thar Roxx tariff", from: "₹4,000", per: "12 hrs / 150 KM" },
    image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar-ROXX/11939/1778649951124/front-left-side-47.jpg?imwidth=420&impolicy=resize',
    alt: "5-door adventure SUV for premium self-drive road trips from Hyderabad",
  },
];

/** Options used by the booking form vehicle picker. */
export const vehicleOptions = vehicles.map((v) => v.name);
