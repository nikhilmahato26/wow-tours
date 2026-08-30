/**
 * Single source of truth for business information.
 * Every value here was supplied by WOW SELF DRIVE CARS. Do not invent additions.
 */

export const business = {
  name: "WOW SELF DRIVE CARS",
  shortName: "Wow Self Drive Cars",
  proprietor: "Osman Khan",
  proprietorUpper: "OSMAN KHAN",

  phone: "9676861843",
  phoneDisplay: "+91 96768 61843",
  phoneHref: "tel:+919676861843",

  email: "Khan.osman41@gmail.com",
  emailHref: "mailto:Khan.osman41@gmail.com",

  city: "Hyderabad",

  mapsUrl: "https://maps.app.goo.gl/TTCAR94ko8L9CUpcA?g_st=aw",
  // Generic Hyderabad embed. No exact street address was supplied, so none is shown.
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Hyderabad%2C%20Telangana&t=&z=11&ie=UTF8&iwloc=&output=embed",

  whatsappNumber: "919676861843",
  whatsappDefaultMessage:
    "Hello Wow Self Drive Cars, I would like to enquire about a self-drive car rental.",

  tagline: "Hyderabad's Best Self-Drive Car Rental",
  positioningPrimary: "Hyderabad's Best Car Rental Service in Our City",
  positioningSecondary: "Hyderabad's Best SELF-DRIVE Service",

  services: [
    "Self Drive Car Rental",
    "Car Rental",
    "Outstation Car Rental",
    "Weekly Car Rental",
    "Monthly Car Rental",
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Fleet", href: "/#fleet" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Rentals", href: "/#rentals" },
  { label: "Outstation", href: "/#outstation" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

/** Build a wa.me link with an encoded, pre-filled message. */
export function whatsappLink(message: string = business.whatsappDefaultMessage) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
