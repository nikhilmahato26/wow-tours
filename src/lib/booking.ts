import { z } from "zod";
import { vehicleOptions } from "@/data/vehicles";
import { durationOptions, rentalTypeOptions } from "@/data/pricing";
import { business } from "@/data/business";

/** Local date as YYYY-MM-DD, matching the value of an <input type="date">. */
export function todayISO(): string {
  return new Date().toLocaleDateString("en-CA");
}

export const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{7,15}$/, "Enter a valid phone number"),
  vehicle: z.enum(vehicleOptions as [string, ...string[]], {
    errorMap: () => ({ message: "Select a vehicle" }),
  }),
  duration: z.enum(durationOptions as unknown as [string, ...string[]], {
    errorMap: () => ({ message: "Select a rental duration" }),
  }),
  pickupDate: z
    .string()
    .min(1, "Choose a pickup date")
    .refine((d) => d >= todayISO(), "Pickup date can't be in the past"),
  pickupTime: z.string().min(1, "Choose a pickup time"),
  rentalType: z.enum(rentalTypeOptions as unknown as [string, ...string[]], {
    errorMap: () => ({ message: "Select a rental type" }),
  }),
  message: z.string().trim().max(500, "Message is a little long").optional(),
});

export type BookingValues = z.infer<typeof bookingSchema>;

/** Format a booking enquiry as a readable WhatsApp message. */
export function buildBookingMessage(v: BookingValues): string {
  const lines = [
    "New booking enquiry - Wow Self Drive Cars",
    "",
    `Name: ${v.name}`,
    `Phone: ${v.phone}`,
    `Vehicle: ${v.vehicle}`,
    `Rental Duration: ${v.duration}`,
    `Pickup Date: ${v.pickupDate}`,
    `Pickup Time: ${v.pickupTime}`,
    `Rental Type: ${v.rentalType}`,
  ];
  if (v.message) lines.push(`Message: ${v.message}`);
  return lines.join("\n");
}

export function bookingWhatsappLink(v: BookingValues): string {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    buildBookingMessage(v),
  )}`;
}
