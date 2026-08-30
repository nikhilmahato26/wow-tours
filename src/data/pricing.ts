/**
 * PRICE LIST - values are exactly as supplied by WOW SELF DRIVE CARS.
 * Do not change prices. Do not add per-kilometre charges, deposits, fuel policy,
 * ID requirements or cancellation terms - none were supplied.
 */

export type PriceSlot = {
  id: string;
  category: string;
  duration: "12 Hours" | "24 Hours";
  km: string;
  price: string;
  featured?: boolean;
};

export const priceSlots: PriceSlot[] = [
  { id: "5s-12", category: "5 Seater", duration: "12 Hours", km: "150 KM", price: "₹1,500" },
  { id: "5s-24", category: "5 Seater", duration: "24 Hours", km: "300 KM", price: "₹2,500" },

  { id: "innova-12", category: "Innova", duration: "12 Hours", km: "150 KM", price: "₹1,500" },
  { id: "innova-24", category: "Innova", duration: "24 Hours", km: "300 KM", price: "₹2,500" },

  { id: "7s-12", category: "7 Seater", duration: "12 Hours", km: "150 KM", price: "₹1,700" },
  { id: "7s-24", category: "7 Seater", duration: "24 Hours", km: "300 KM", price: "₹3,000" },

  { id: "crysta-12", category: "Crysta", duration: "12 Hours", km: "150 KM", price: "₹3,000" },
  { id: "crysta-24", category: "Crysta", duration: "24 Hours", km: "300 KM", price: "₹4,500" },

  { id: "type2-12", category: "Fortuner Type 2", duration: "12 Hours", km: "150 KM", price: "₹3,500" },
  { id: "type2-24", category: "Fortuner Type 2", duration: "24 Hours", km: "300 KM", price: "₹4,000" },

  { id: "type3-12", category: "Fortuner Type 3", duration: "12 Hours", km: "150 KM", price: "₹4,500" },
  { id: "type3-24", category: "Fortuner Type 3", duration: "24 Hours", km: "300 KM", price: "₹6,000" },

  { id: "thar-12", category: "Thar", duration: "12 Hours", km: "150 KM", price: "₹3,000" },
  { id: "thar-24", category: "Thar", duration: "24 Hours", km: "300 KM", price: "₹4,000" },

  { id: "roxx-12", category: "Thar Roxx", duration: "12 Hours", km: "150 KM", price: "₹4,000", featured: true },
  { id: "roxx-24", category: "Thar Roxx", duration: "24 Hours", km: "300 KM", price: "₹6,000", featured: true },
];

export const rentalOptions = [
  {
    id: "12h",
    title: "12 Hour Rental",
    detail: "150 KM options available for selected categories.",
    priceHint: "From ₹1,500",
  },
  {
    id: "24h",
    title: "24 Hour Rental",
    detail: "300 KM options available for selected categories.",
    priceHint: "From ₹2,500",
  },
  {
    id: "weekly",
    title: "Weekly Rental",
    detail: "Available. Contact for pricing.",
    priceHint: "Get a Quote",
  },
  {
    id: "monthly",
    title: "Monthly Rental",
    detail: "Available. Contact for pricing.",
    priceHint: "Get a Quote",
  },
  {
    id: "outstation",
    title: "Outstation Rental",
    detail: "Available. Enquire for details.",
    priceHint: "Enquire",
  },
] as const;

export const durationOptions = [
  "12 Hours",
  "24 Hours",
  "Weekly",
  "Monthly",
  "Outstation",
] as const;

export const rentalTypeOptions = ["Self Drive", "Outstation"] as const;
