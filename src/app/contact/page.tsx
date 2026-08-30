import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Contact } from "@/components/Contact";
import { Location } from "@/components/Location";
import { Section, Container, SectionHeading } from "@/components/primitives";
import { BookingForm } from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Contact | Book a Self Drive Car in Hyderabad",
  description:
    "Contact Wow Self Drive Cars in Hyderabad. Call 9676861833, message on WhatsApp, or send a booking enquiry for a self-drive rental.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Book a Self Drive Car in Hyderabad"
        intro="Send your dates and preferred vehicle. We will confirm availability and the tariff."
      />
      <Contact />
      <Section tone="mist">
        <Container>
          <SectionHeading
            title="Send a Booking Enquiry"
            intro="Fill in the details and we will get back to you on WhatsApp."
          />
          <div className="mt-8 max-w-2xl">
            <BookingForm variant="onLight" />
          </div>
        </Container>
      </Section>
      <Location />
    </>
  );
}
