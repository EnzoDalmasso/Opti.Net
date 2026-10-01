import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

export function Services() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-title"
      className="relative isolate overflow-hidden bg-ink py-24 text-white sm:py-28 lg:py-32"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -top-48 left-1/4 size-[36rem] rounded-full bg-teal/25 blur-3xl" />
        <div className="absolute right-[-12rem] bottom-[-14rem] size-[30rem] rounded-full bg-aqua/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.07)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,black,transparent)] bg-[size:22px_22px]" />
      </div>

      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="servicios-title"
            tone="light"
            eyebrow="Servicios"
            title={
              <>
                Te acompañamos <span className="text-aqua">antes, durante y después</span>
              </>
            }
            description="Elegir anteojos es sólo una parte. También cuidamos que estén bien adaptados, que te sientas cómodo y que te duren."
          />
          <ButtonLink
            href={getWhatsAppUrl({ kind: "custom", message: "¡Hola Optinet! Quería consultar por sus servicios." })}
            external
            variant="light"
            icon={<WhatsAppIcon size={17} className="text-teal" />}
            className="self-start lg:self-auto"
          >
            Consultar un servicio
          </ButtonLink>
        </div>

        <RevealGroup as="ul" className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
          {services.map(({ id, title, description, icon: Icon }) => (
            <RevealItem as="li" key={id}>
              <a
                href={getWhatsAppUrl({ kind: "service", serviceName: title })}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title}: consultar por WhatsApp`}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white/[0.04] p-7 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:bg-white/[0.08] hover:ring-aqua/40 sm:p-8 max-sm:p-6"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-20 -right-20 size-44 rounded-full bg-teal/0 blur-2xl transition-colors duration-700 group-hover:bg-teal/30"
                />
                <span className="relative flex size-12 items-center justify-center rounded-2xl sm:size-14 bg-gradient-to-br from-teal to-teal-strong text-white shadow-glow transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-105 group-hover:-rotate-6">
                  <Icon aria-hidden="true" className="size-6" strokeWidth={1.7} />
                </span>
                <h3 className="relative mt-5 font-display sm:mt-7 text-xl leading-snug font-semibold tracking-[-0.02em]">{title}</h3>
                <p className="relative mt-3 text-[0.9375rem] leading-relaxed text-white/65">{description}</p>
                <span className="relative mt-auto flex items-center gap-1.5 pt-5 text-sm sm:pt-6 font-semibold text-aqua">
                  Consultar
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
