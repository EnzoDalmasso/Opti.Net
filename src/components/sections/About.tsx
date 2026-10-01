import Image from "next/image";
import { MapPin } from "lucide-react";
import { business } from "@/config/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { LogoMark } from "@/components/layout/Logo";

const pillars = [
  {
    title: "Sin apuro",
    description: "Probate todos los armazones que quieras. Elegir bien lleva su tiempo y lo respetamos.",
  },
  {
    title: "Te explicamos todo",
    description: "Qué lente te conviene, por qué y cuánto vas a invertir. Sin letra chica ni sorpresas.",
  },
  {
    title: "Seguimos después",
    description: "Si algo te molesta o se afloja, pasás y lo ajustamos. Tus anteojos siguen siendo nuestros también.",
  },
];

export function About() {
  const { location } = business;

  return (
    <section id="nosotros" aria-labelledby="nosotros-title" className="overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="container-site grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
        {/* Collage de imágenes */}
        <Reveal className="relative mx-auto w-full max-w-lg lg:col-span-6 lg:max-w-none">
          <div className="relative ml-auto aspect-[4/5] w-[86%] overflow-hidden rounded-[2rem] bg-cloud shadow-lift">
            <Image
              src="/images/about/principal.jpg"
              alt="Anteojos de armazón transparente sobre una cartilla de letras para control visual"
              fill
              sizes="(min-width: 1024px) 40vw, 86vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-[-2rem] left-0 aspect-square w-[46%] overflow-hidden rounded-[1.75rem] border-[6px] border-white bg-cloud shadow-lift">
            <Image
              src="/images/about/detalle.jpg"
              alt="Vista de una cartilla optométrica a través de unos anteojos"
              fill
              sizes="(min-width: 1024px) 22vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute top-8 left-0 flex animate-float items-center gap-3 rounded-2xl bg-white/95 py-3 pr-5 pl-3 shadow-lift ring-1 ring-line/60 backdrop-blur-md sm:left-2">
            <span className="flex size-10 items-center justify-center rounded-xl bg-aqua-soft text-teal">
              <MapPin aria-hidden="true" className="size-5" strokeWidth={1.8} />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold text-ink">{location.street}</span>
              <span className="text-xs text-muted">
                {location.city}, {location.province}
              </span>
            </span>
          </div>
        </Reveal>

        {/* Texto */}
        <div className="lg:col-span-6 lg:pl-8">
          <SectionHeading
            id="nosotros-title"
            eyebrow="Sobre Optinet"
            title={
              <>
                Tu óptica de siempre, <span className="text-gradient-brand">acá a la vuelta</span>
              </>
            }
          />
          <Reveal className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-[1.0625rem]">
            <p>
              Somos una óptica de Las Parejas y trabajamos como nos gusta que nos atiendan: mirando a los ojos
              —literalmente—, escuchando qué necesitás y recomendando sólo lo que te sirve.
            </p>
            <p>
              En nuestro local de calle 22 vas a encontrar armazones recetados, anteojos de sol, lentes de contacto y
              una mano para todo lo que tus anteojos necesiten. Muchos de nuestros clientes vienen desde hace años, y
              eso es lo que más nos enorgullece.
            </p>
          </Reveal>

          <RevealGroup as="ul" className="mt-10 grid gap-3">
            {pillars.map((pillar, index) => (
              <RevealItem
                as="li"
                key={pillar.title}
                className="group flex gap-4 rounded-2xl p-4 ring-1 ring-line/70 transition-colors duration-300 hover:bg-mist"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-ink font-display text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-teal">
                  0{index + 1}
                </span>
                <span>
                  <span className="block font-display font-semibold text-ink">{pillar.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">{pillar.description}</span>
                </span>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-8 flex items-center gap-3 text-sm text-muted">
            <LogoMark className="size-8 text-ink" />
            <span>
              <span className="font-semibold text-ink">El equipo de Optinet</span> · {location.city}, {location.province}
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
