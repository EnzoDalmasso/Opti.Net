import type { ReactNode } from "react";
import { Clock, MapPin, Navigation } from "lucide-react";
import { business } from "@/config/business";
import { directionsUrl, mapEmbedUrl } from "@/lib/maps";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";

function PlaceholderBadge() {
  return (
    <span className="ml-2 inline-flex rounded-full bg-amber-100 px-2 py-0.5 align-middle text-[0.625rem] font-semibold tracking-[0.1em] text-amber-800 uppercase">
      A confirmar
    </span>
  );
}

interface ContactCardProps {
  icon: ReactNode;
  label: string;
  children: ReactNode;
  className?: string;
}

function ContactCard({ icon, label, children, className }: ContactCardProps) {
  return (
    <RevealItem as="li" className={className}>
      <div className="flex h-full gap-4 rounded-[1.5rem] bg-white p-5 shadow-soft ring-1 ring-line/60 sm:p-6">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-aqua-soft text-teal">{icon}</span>
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">{label}</p>
          <div className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink">{children}</div>
        </div>
      </div>
    </RevealItem>
  );
}

const linkClass =
  "font-semibold underline decoration-line decoration-2 underline-offset-4 transition-colors hover:text-teal hover:decoration-teal";

export function Contact() {
  const { location, hours, whatsapp, instagram } = business;

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="bg-mist py-24 sm:py-28 lg:py-32">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <SectionHeading
            id="contacto-title"
            eyebrow="Contacto"
            title={
              <>
                Vení a vernos, <span className="text-gradient-brand">o escribinos</span>
              </>
            }
            description="Te esperamos en el local para probarte tus próximos anteojos. Si preferís, consultanos por WhatsApp y te respondemos a la brevedad."
          />

          <RevealGroup as="ul" className="mt-10 grid gap-3 sm:grid-cols-2">
            <ContactCard icon={<WhatsAppIcon size={20} />} label="WhatsApp">
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {whatsapp.displayNumber}
              </a>
              {whatsapp.isPlaceholder && <PlaceholderBadge />}
            </ContactCard>

            <ContactCard icon={<InstagramIcon size={20} />} label="Instagram">
              <a href={instagram.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {instagram.handle}
              </a>
            </ContactCard>

            <ContactCard icon={<MapPin aria-hidden="true" className="size-5" strokeWidth={1.8} />} label="Dirección" className="sm:col-span-2">
              <span className="font-semibold">{location.street}</span>
              <span className="text-muted">
                {" "}
                · {location.city}, {location.province}
              </span>
            </ContactCard>

            <ContactCard icon={<Clock aria-hidden="true" className="size-5" strokeWidth={1.8} />} label="Horarios" className="sm:col-span-2">
              <ul className="space-y-1">
                {hours.schedule.map((slot) => (
                  <li key={slot.days} className="flex flex-col sm:flex-row sm:gap-3">
                    <span className="font-semibold sm:w-36">{slot.days}</span>
                    <span className="text-slate">{slot.hours}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {hours.note}
                {hours.isPlaceholder && <PlaceholderBadge />}
              </p>
            </ContactCard>
          </RevealGroup>

          <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={getWhatsAppUrl()} external variant="brand" icon={<WhatsAppIcon size={18} />}>
              Escribinos por WhatsApp
            </ButtonLink>
            <ButtonLink
              href={directionsUrl}
              external
              variant="outline"
              icon={<Navigation aria-hidden="true" className="size-4" strokeWidth={1.8} />}
            >
              Cómo llegar
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-6" delay={0.1}>
          <div className="relative h-full min-h-[22rem] overflow-hidden rounded-[2rem] bg-cloud shadow-lift ring-1 ring-line/60 sm:min-h-[28rem]">
            <iframe
              title={`Mapa: ${business.name}, ${location.street}, ${location.city}`}
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full border-0 grayscale-[35%]"
            />
            <div className="pointer-events-none absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
              <div className="pointer-events-auto flex items-center justify-between gap-3 rounded-2xl bg-white/95 p-3 pl-4 shadow-lift backdrop-blur-md">
                <span className="flex min-w-0 items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal text-white">
                    <MapPin aria-hidden="true" className="size-5" strokeWidth={1.8} />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-ink">{business.name}</span>
                    <span className="block truncate text-xs text-muted">
                      {location.street}, {location.city}
                    </span>
                  </span>
                </span>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-teal"
                >
                  Abrir mapa
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
