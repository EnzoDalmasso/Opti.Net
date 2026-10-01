import { MapPin } from "lucide-react";
import { business, navigation } from "@/config/business";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import { Logo } from "./Logo";

export function Footer() {
  const { instagram, location, whatsapp } = business;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="container-site py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-5">
            <a href="#inicio" className="inline-block rounded-lg">
              <span className="sr-only">Óptica Opti.net, volver al inicio</span>
              <Logo tone="light" />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {business.tagline} Anteojos recetados, lentes de sol, lentes de contacto y servicio técnico con atención
              personalizada.
            </p>
            <div className="mt-6 flex gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex size-11 items-center justify-center rounded-full bg-white/[0.07] ring-1 ring-white/10 transition-colors hover:bg-teal"
              >
                <WhatsAppIcon size={18} />
              </a>
              <a
                href={instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${instagram.handle}`}
                className="flex size-11 items-center justify-center rounded-full bg-white/[0.07] ring-1 ring-white/10 transition-colors hover:bg-teal"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          <nav aria-label="Enlaces rápidos" className="lg:col-span-3">
            <p className="text-xs font-semibold tracking-[0.14em] text-white/55 uppercase">Navegación</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm lg:grid-cols-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-white/70 transition-colors hover:text-aqua">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.14em] text-white/55 uppercase">Contacto</p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-aqua"
                >
                  <WhatsAppIcon size={16} className="text-aqua" />
                  {whatsapp.displayNumber}
                </a>
              </li>
              <li>
                <a
                  href={instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-aqua"
                >
                  <InstagramIcon size={16} className="text-aqua" />
                  {instagram.handle}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin aria-hidden="true" className="size-4 text-aqua" />
                {location.street}, {location.city}, {location.province}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. Todos los derechos reservados.
          </p>
          <p>
            {location.city}, {location.province} · Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
