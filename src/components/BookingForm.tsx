"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { bookingSchema, type BookingValues, bookingWhatsappLink, todayISO } from "@/lib/booking";
import { vehicleOptions } from "@/data/vehicles";
import { durationOptions, rentalTypeOptions } from "@/data/pricing";
import { Input, Select, Textarea, Label, FieldError } from "@/components/ui/form-fields";
import { Button, buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BookingForm({
  variant = "onDark",
  className,
}: {
  variant?: "onDark" | "onLight";
  className?: string;
}) {
  const [sent, setSent] = useState<BookingValues | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      vehicle: "",
      duration: "",
      pickupDate: "",
      pickupTime: "",
      rentalType: "Self Drive",
      message: "",
    } as unknown as BookingValues,
  });

  async function onSubmit(values: BookingValues) {
    // Backend hook-up point: POST `values` to an API route here when ready.
    // await fetch("/api/booking", { method: "POST", body: JSON.stringify(values) });
    const link = bookingWhatsappLink(values);
    setSent(values);
    window.open(link, "_blank", "noopener,noreferrer");
  }

  if (sent) {
    return (
      <div
        className={cn(
          "rounded-2xl border p-8 text-center",
          variant === "onDark"
            ? "border-white/15 bg-white/5 text-white"
            : "border-ink/10 bg-white text-ink",
          className,
        )}
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold" strokeWidth={1.5} />
        <h3 className="mt-4 text-xl font-bold">Enquiry ready</h3>
        <p className={cn("mt-2 text-sm", variant === "onDark" ? "text-white/70" : "text-graphite/70")}>
          We opened WhatsApp with your booking details for {sent.vehicle}. If it did not
          open, tap the button below.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3">
          <a
            href={bookingWhatsappLink(sent)}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses({ variant: "gold", size: "md" })}
          >
            <MessageCircle className="h-4 w-4" /> Open WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              reset();
              setSent(null);
            }}
            className={cn(
              "text-xs font-semibold uppercase tracking-wide underline underline-offset-4",
              variant === "onDark" ? "text-white/60" : "text-graphite/60",
            )}
          >
            New enquiry
          </button>
        </div>
      </div>
    );
  }

  const dark = variant === "onDark";
  const minDate = todayISO();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "rounded-2xl border p-5 sm:p-6",
        dark ? "border-white/15 bg-white/6" : "border-ink/10 bg-white shadow-xl shadow-ink/5",
        className,
      )}
      noValidate
    >
      <div className="mb-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
          Quick Booking
        </p>
        <h3 className={cn("mt-1 text-lg font-extrabold", dark ? "text-white" : "text-ink")}>
          Check availability
        </h3>
      </div>

      <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <Label className={dark ? "text-white/60" : undefined} htmlFor="bf-name">
            Name
          </Label>
          <Input id="bf-name" placeholder="Your full name" {...register("name")} />
          <FieldError>{errors.name?.message}</FieldError>
        </div>

        <div className="sm:col-span-1">
          <Label className={dark ? "text-white/60" : undefined} htmlFor="bf-phone">
            Phone Number
          </Label>
          <Input
            id="bf-phone"
            inputMode="tel"
            placeholder="10-digit mobile"
            {...register("phone")}
          />
          <FieldError>{errors.phone?.message}</FieldError>
        </div>

        <div className="sm:col-span-1">
          <Label className={dark ? "text-white/60" : undefined} htmlFor="bf-vehicle">
            Vehicle
          </Label>
          <Select id="bf-vehicle" defaultValue="" {...register("vehicle")}>
            <option value="" disabled>
              Select a vehicle
            </option>
            {vehicleOptions.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </Select>
          <FieldError>{errors.vehicle?.message}</FieldError>
        </div>

        <div className="sm:col-span-1">
          <Label className={dark ? "text-white/60" : undefined} htmlFor="bf-duration">
            Rental Duration
          </Label>
          <Select id="bf-duration" defaultValue="" {...register("duration")}>
            <option value="" disabled>
              Select duration
            </option>
            {durationOptions.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </Select>
          <FieldError>{errors.duration?.message}</FieldError>
        </div>

        <div className="sm:col-span-1">
          <Label className={dark ? "text-white/60" : undefined} htmlFor="bf-date">
            Pickup Date
          </Label>
          <Input id="bf-date" type="date" min={minDate} {...register("pickupDate")} />
          <FieldError>{errors.pickupDate?.message}</FieldError>
        </div>

        <div className="sm:col-span-1">
          <Label className={dark ? "text-white/60" : undefined} htmlFor="bf-time">
            Pickup Time
          </Label>
          <Input id="bf-time" type="time" {...register("pickupTime")} />
          <FieldError>{errors.pickupTime?.message}</FieldError>
        </div>

        <div className="sm:col-span-2">
          <Label className={dark ? "text-white/60" : undefined} htmlFor="bf-type">
            Rental Type
          </Label>
          <Select id="bf-type" {...register("rentalType")}>
            {rentalTypeOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
          <FieldError>{errors.rentalType?.message}</FieldError>
        </div>

        <div className="sm:col-span-2">
          <Label className={dark ? "text-white/60" : undefined} htmlFor="bf-message">
            Message
          </Label>
          <Textarea
            id="bf-message"
            rows={2}
            className="h-20"
            placeholder="Pickup area, extra questions, anything else"
            {...register("message")}
          />
          <FieldError>{errors.message?.message}</FieldError>
        </div>
      </div>

      <Button
        type="submit"
        variant="gold"
        size="lg"
        className="mt-5 w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Checking
          </>
        ) : (
          "Check Availability"
        )}
      </Button>
      <p className={cn("mt-3 text-center text-[11px]", dark ? "text-white/45" : "text-graphite/50")}>
        Sends your details to us on WhatsApp. No payment now.
      </p>
    </form>
  );
}
