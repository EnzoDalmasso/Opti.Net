import Image from "next/image";
import { HeartHandshake, ScanEye, Sun, Wrench } from "lucide-react";
import { business } from "@/config/business";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

const highlights = [
  { label: "Asesoramiento personalizado", icon: HeartHandshake },
  { label: "Control visual", icon: ScanEye },
  { label: "Ajustes y reparaciones", icon: Wrench },
];

/** Anillos concéntricos decorativos: evocan una lente / el iris del logo. */
function LensRings() {
  return (
    <svg
      viewBox="0 0 600 600"
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 left-1/2 -z-10 w-[135%] max-w-none -translate-x-1/2 -translate-y-1/2 text-teal"
    >
      <circle cx="300" cy="300" r="298" fill="none" stroke="currentColor" strokeOpacity="0.08" />
      <circle cx="300" cy="300" r="240" fill="none" stroke="currentColor" strokeOpacity="0.12" />
      <g className="origin-center animate-spin-slow">
        <circle cx="300" cy="300" r="270" fill="none" stroke="currentColor" strokeOpacity="0.28" strokeDasharray="2 10" strokeLinecap="round" strokeWidth="2" />
      </g>
    </svg>
  );
}

/**
 * Hero renderizado en el servidor: la imagen es el LCP y se precarga.
 * Las animaciones de entrada son CSS puro para no depender de JavaScript.
 */
export function Hero() {
  const { hero } = business;

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-mist pt-[calc(var(--header-height)+2rem)] pb-16 sm:pb-20 lg:flex lg:min-h-[100svh] lg:items-center lg:pt-[var(--header-height)] lg:pb-12"
    >
      {/* Fondo: brillos suaves en los tonos de la marca + grilla tenue. */}
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        <div className="absolute -top-40 -left-32 size-[34rem] rounded-full bg-aqua-soft blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-20%] size-[40rem] rounded-full bg-aqua/15 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(13_27_34/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(13_27_34/0.04)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] bg-[size:56px_56px]" />
      </div>

      <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6 xl:col-span-6">
          <p className="inline-flex animate-rise items-center gap-2.5 rounded-full bg-white px-3.5 py-2 text-[0.8125rem] font-medium text-slate shadow-soft ring-1 ring-line/70 [animation-delay:100ms]">
            <span aria-hidden="true" className="relative flex size-2">
              <span className="absolute inset-0 animate-ping-soft rounded-full bg-teal" />
              <span className="relative size-2 rounded-full bg-teal" />
            </span>
            {hero.eyebrow}
          </p>

          <h1
            id="hero-title"
            className="mt-7 animate-rise font-display text-[2.875rem] leading-[1.02] font-semibold tracking-[-0.045em] text-ink [animation-delay:220ms] sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]"
          >
            {hero.title} <span className="text-gradient-brand">{hero.highlight}</span>
          </h1>

          <p className="mt-6 max-w-xl animate-rise text-base leading-relaxed text-muted [animation-delay:340ms] sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex animate-rise flex-col gap-3 [animation-delay:460ms] sm:flex-row">
            <ButtonLink href="#productos" withArrow>
              Ver productos
            </ButtonLink>
            <ButtonLink href={getWhatsAppUrl()} external variant="outline" icon={<WhatsAppIcon size={18} className="text-whatsapp" />}>
              Consultar por WhatsApp
            </ButtonLink>
          </div>

          <ul className="mt-11 grid animate-rise grid-cols-1 gap-3 [animation-delay:600ms] min-[30rem]:grid-cols-3 sm:max-w-xl">
            {highlights.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-2.5 text-[0.8125rem] leading-snug font-medium text-slate">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-teal shadow-soft ring-1 ring-line/60">
                  <Icon aria-hidden="true" className="size-4" strokeWidth={1.8} />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:col-span-6 lg:max-w-none xl:pl-6">
          <LensRings />

          <div className="relative aspect-[4/5] animate-reveal-image overflow-hidden rounded-[2.5rem] bg-cloud shadow-lift lg:aspect-[5/6]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              preload
              fetchPriority="high"
              sizes="(min-width: 1024px) 45vw, (min-width: 640px) 32rem, 92vw"
              className="object-cover object-[center_30%]"
            />
            {hero.video && (
              <video
                className="absolute inset-0 size-full object-cover motion-reduce:hidden"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster={hero.image.src}
              >
                {hero.video.webm && <source src={hero.video.webm} type="video/webm" />}
                {hero.video.mp4 && <source src={hero.video.mp4} type="video/mp4" />}
              </video>
            )}
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
          </div>

          {/* Tarjetas flotantes */}
          <div className="absolute top-8 -left-3 animate-pop-in sm:-left-8 lg:-left-10">
            <div className="flex animate-float items-center gap-3 rounded-2xl bg-white/90 py-3 pr-4 pl-3 shadow-lift ring-1 ring-white backdrop-blur-md">
              <span className="flex size-10 items-center justify-center rounded-xl bg-aqua-soft text-teal">
                <Sun aria-hidden="true" className="size-5" strokeWidth={1.8} />
              </span>
              <span className="flex flex-col">
                <span className="text-[0.6875rem] font-semibold tracking-[0.12em] text-muted uppercase">Nueva temporada</span>
                <span className="text-sm font-semibold text-ink">Lentes de sol UV400</span>
              </span>
            </div>
          </div>

          <div className="absolute -right-2 bottom-10 animate-pop-in [animation-delay:1.45s] sm:-right-6 lg:-right-4 xl:-right-8">
            <div className="flex animate-float-delayed items-center gap-3 rounded-2xl bg-ink/90 py-3 pr-4 pl-3 text-white shadow-lift ring-1 ring-white/10 backdrop-blur-md">
              <span className="flex size-10 items-center justify-center rounded-xl bg-teal text-white">
                <ScanEye aria-hidden="true" className="size-5" strokeWidth={1.8} />
              </span>
              <span className="flex flex-col">
                <span className="text-[0.6875rem] font-semibold tracking-[0.12em] text-white/60 uppercase">Control visual</span>
                <span className="text-sm font-semibold">Pedí tu turno</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
