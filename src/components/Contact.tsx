import { Phone, Mail, MapPin, UserRound, Navigation, MessageCircle } from "lucide-react";
import { business, whatsappLink } from "@/data/business";
import { Section, Container } from "@/components/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { buttonClasses } from "@/components/ui/button";

export function Contact() {
  const rows = [
    { icon: UserRound, label: "Proprietor", value: business.proprietorUpper },
    { icon: Phone, label: "Phone", value: business.phone, href: business.phoneHref },
    { icon: Mail, label: "Email", value: business.email, href: business.emailHref },
    { icon: MapPin, label: "Location", value: business.city },
  ];

  return (
    <Section id="contact" tone="light">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-ink/10 bg-ink text-white">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-2">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                Book Your Self-Drive Car
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
                Call or message us with your dates and the vehicle you want. We will
                confirm availability and the tariff.
              </p>

              <p className="mt-6 text-lg font-bold text-white">{business.name}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="divide-y divide-white/10">
                {rows.map((r) => (
                  <li key={r.label} className="flex items-center gap-4 py-4">
                    <r.icon className="h-5 w-5 shrink-0 text-gold" strokeWidth={2} />
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-white/45">
                        {r.label}
                      </p>
                      {r.href ? (
                        <a href={r.href} className="text-base font-semibold hover:text-gold">
                          {r.value}
                        </a>
                      ) : (
                        <p className="text-base font-semibold">{r.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <a
                  href={business.phoneHref}
                  className={buttonClasses({ variant: "gold", size: "md" })}
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClasses({ variant: "outlineLight", size: "md" })}
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClasses({ variant: "outlineLight", size: "md" })}
                >
                  <Navigation className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
