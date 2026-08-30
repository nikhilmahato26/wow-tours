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
    image: U("1549317661-bd32c8ce0db2"),
    alt: "Compact 5-seater hatchback for self-drive rental in Hyderabad",
  },
  {
    slug: "baleno",
    name: "Baleno",
    category: "5-Seater",
    categoryLabel: "5-Seater Hatchback",
    rate: { tier: "5-Seater tariff", from: "₹1,500", per: "12 hrs / 150 KM" },
    image: U("1494976388531-d1058494cdd8"),
    alt: "Premium 5-seater hatchback available for self-drive hire",
  },
  {
    slug: "fronx",
    name: "Fronx",
    category: "5-Seater",
    categoryLabel: "5-Seater Crossover",
    rate: { tier: "5-Seater tariff", from: "₹1,500", per: "12 hrs / 150 KM" },
    image: U("1580273916550-e323be2ae537"),
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
    image: U("1552519507-da3b142c6e3d"),
    alt: "Automatic transmission Fronx crossover for self-drive hire in Hyderabad",
  },
  {
    slug: "innova-crysta",
    name: "Innova Crysta",
    category: "Premium",
    categoryLabel: "Premium MPV",
    rate: { tier: "7-Seater tariff", from: "₹2,500", per: "12 hrs / 150 KM" },
    image: U("1519641471654-76ce0107ad1b"),
    alt: "Premium MPV for family trips and outstation self-drive rentals",
  },
  {
    slug: "fortuner",
    name: "Fortuner",
    category: "Premium",
    categoryLabel: "Premium SUV",
    rate: { tier: "7-Seater tariff", from: "₹2,500", per: "12 hrs / 150 KM" },
    image: U("1605893477799-b99e3b8b93fe"),
    alt: "Premium full-size SUV for self-drive hire in Hyderabad",
  },
  {
    slug: "thar",
    name: "Thar",
    category: "Adventure",
    categoryLabel: "Adventure SUV",
    rate: { tier: "Thar tariff", from: "₹3,000", per: "12 hrs / 150 KM" },
    image: U("1533473359331-0135ef1b58bf"),
    alt: "Off-road ready adventure SUV for weekend and outstation self-drive trips",
  },
  {
    slug: "thar-roxx",
    name: "Thar Roxx",
    category: "Adventure",
    categoryLabel: "Adventure SUV",
    rate: { tier: "Thar Roxx tariff", from: "₹4,000", per: "12 hrs / 150 KM" },
    image: U("1544829099-b9a0c07fad1a"),
    alt: "5-door adventure SUV for premium self-drive road trips from Hyderabad",
  },
];

/** Options used by the booking form vehicle picker. */
export const vehicleOptions = vehicles.map((v) => v.name);
