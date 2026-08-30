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
  transmission?: "Automatic" | "Manual";
  /** Availability highlight, shown as a badge. */
  highlight?: string;
  /** Rate tier label + starting prices. */
  rate?: { tier: string; from: string; per: string; from24?: string; per24?: string };
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
    rate: { tier: "5-Seater tariff", from: "₹1,500", per: "12 hrs", from24: "₹2,500", per24: "24 hrs" },
    image: 'https://www.autovista.in/assets/img/new_cars_colour_variants/swift-colour-solid-fire-red.jpg',
    alt: "Compact 5-seater hatchback for self-drive rental in Hyderabad",
  },
  {
    slug: "baleno",
    name: "Baleno",
    category: "5-Seater",
    categoryLabel: "5-Seater Hatchback",
    rate: { tier: "5-Seater tariff", from: "₹1,500", per: "12 hrs", from24: "₹2,500", per24: "24 hrs" },
    image: 'https://imgd.aeplcdn.com/642x336/n/cw/ec/102663/baleno-exterior-right-front-three-quarter-69.png?isig=0&q=80',
    alt: "Premium 5-seater hatchback available for self-drive hire",
  },
  {
    slug: "fronx",
    name: "Fronx",
    category: "5-Seater",
    categoryLabel: "5-Seater Crossover",
    rate: { tier: "5-Seater tariff", from: "₹1,500", per: "12 hrs", from24: "₹2,500", per24: "24 hrs" },
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
    rate: { tier: "5-Seater tariff", from: "₹1,500", per: "12 hrs", from24: "₹2,500", per24: "24 hrs" },
    image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/147329/maruti-suzuki-fronx-left-front-three-quarter2.jpeg?isig=0&wm=0',
    alt: "Automatic transmission Fronx crossover for self-drive hire in Hyderabad",
  },
  {
    slug: "seltos-manual",
    name: "Kia Seltos Manual",
    category: "5-Seater",
    categoryLabel: "5-Seater SUV",
    transmission: "Manual",
    rate: { tier: "5-Seater tariff", from: "₹1,500", per: "12 hrs", from24: "₹2,500", per24: "24 hrs" },
    image: 'https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/192817/seltos-exterior-left-front-three-quarter-65.jpeg?isig=0&q=80',
    alt: "Kia Seltos manual transmission available for self-drive hire in Hyderabad",
  },
  {
    slug: "seltos-automatic",
    name: "Kia Seltos Automatic",
    category: "5-Seater",
    categoryLabel: "5-Seater SUV",
    transmission: "Automatic",
    highlight: "Automatic Seltos",
    rate: { tier: "5-Seater tariff", from: "₹1,500", per: "12 hrs", from24: "₹2,500", per24: "24 hrs" },
    image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Seltos/13094/1778328978290/front-left-side-47.jpg',
    alt: "Automatic Kia Seltos SUV for premium self-drive rentals",
  },
  {
    slug: "ertiga",
    name: "Suzuki Ertiga",
    category: "Premium",
    categoryLabel: "7-Seater MPV",
    rate: { tier: "7-Seater tariff", from: "₹2,500", per: "12 hrs", from24: "₹4,000", per24: "24 hrs" },
    image: 'https://imgd.aeplcdn.com/1280x720/n/c6es93a_1572125.jpg?q=80',
    alt: "Suzuki Ertiga 7-seater MPV available for self-drive rental in Hyderabad",
  },
  {
    slug: "xl6",
    name: "Maruti XL6",
    category: "Premium",
    categoryLabel: "Premium MPV",
    rate: { tier: "7-Seater tariff", from: "₹2,500", per: "12 hrs", from24: "₹4,000", per24: "24 hrs" },
    image: 'https://imgd.aeplcdn.com/600x600/n/cw/ec/120705/maruti-suzuki-xl6-right-front-three-quarter0.jpeg?isig=0&wm=0',
    alt: "Maruti Suzuki XL6 premium 6/7-seater MPV available for self-drive hire",
  },
  {
    slug: "innova",
    name: "Innova",
    category: "Premium",
    categoryLabel: "7-Seater MPV",
    rate: { tier: "Innova tariff", from: "₹1,500", per: "12 hrs", from24: "₹2,500", per24: "24 hrs" },
    image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Toyota-Innova/1174/1544523709266/front-left-side-47.jpg',
    alt: "Toyota Innova 7-seater MPV available for self-drive rental in Hyderabad",
  },
  {
    slug: "innova-crysta",
    name: "Innova Crysta",
    category: "Premium",
    categoryLabel: "Premium MPV",
    rate: { tier: "Crysta tariff", from: "₹3,000", per: "12 hrs", from24: "₹4,500", per24: "24 hrs" },
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/222736/innova-crysta-2026-exterior-right-front-three-quarter.png?isig=0&q=80',
    alt: "Premium MPV for family trips and outstation self-drive rentals",
  },
  {
    slug: "fortuner-type-2",
    name: "Fortuner Type 2",
    category: "Premium",
    categoryLabel: "Premium SUV",
    rate: { tier: "Fortuner Type 2 tariff", from: "₹3,500", per: "12 hrs", from24: "₹4,000", per24: "24 hrs" },
    image: 'https://autoretails.com/wp-content/uploads/Fortuner-front-ty2.jpg',
    alt: "Premium full-size SUV for self-drive hire in Hyderabad",
  },
  {
    slug: "fortuner-type-3",
    name: "Fortuner Type 3",
    category: "Premium",
    categoryLabel: "Premium SUV",
    rate: { tier: "Fortuner Type 3 tariff", from: "₹4,500", per: "12 hrs", from24: "₹6,000", per24: "24 hrs" },
    image: 'https://5.imimg.com/data5/ECOM/Default/2024/2/391255557/BK/LP/RD/5183134/legender-500x500.jpg',
    alt: "Premium full-size SUV for self-drive hire in Hyderabad",
  },
  {
    slug: "thar",
    name: "Thar",
    category: "Adventure",
    categoryLabel: "Adventure SUV",
    rate: { tier: "Thar tariff", from: "₹3,000", per: "12 hrs", from24: "₹4,000", per24: "24 hrs" },
    image: 'https://imgd.aeplcdn.com/642x336/n/cw/ec/204996/thar-2025-exterior-right-front-three-quarter-5.png?isig=0&q=80',
    alt: "Off-road ready adventure SUV for weekend and outstation self-drive trips",
  },
  {
    slug: "thar-roxx",
    name: "Thar Roxx",
    category: "Adventure",
    categoryLabel: "Adventure SUV",
    rate: { tier: "Thar Roxx tariff", from: "₹4,000", per: "12 hrs", from24: "₹6,000", per24: "24 hrs" },
    image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar-ROXX/11939/1778649951124/front-left-side-47.jpg?imwidth=420&impolicy=resize',
    alt: "5-door adventure SUV for premium self-drive road trips from Hyderabad",
  },
];

/** Options used by the booking form vehicle picker. */
export const vehicleOptions = vehicles.map((v) => v.name);
