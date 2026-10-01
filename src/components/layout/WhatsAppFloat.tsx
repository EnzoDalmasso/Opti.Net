import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

/** Acceso permanente a WhatsApp. Sin JavaScript: la entrada se anima con CSS. */
export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      className="group fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 flex animate-pop-in items-center gap-3 sm:right-6 sm:bottom-6"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-white px-4 py-2 text-[0.8125rem] font-semibold text-ink opacity-0 shadow-lift ring-1 ring-line/60 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 sm:block">
        ¿Te ayudamos a elegir?
      </span>
      <span className="relative flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lift transition-transform duration-300 ease-out group-hover:scale-110">
        <span aria-hidden="true" className="absolute inset-0 animate-ping-soft rounded-full bg-whatsapp/40 [animation-duration:3s]" />
        <WhatsAppIcon size={26} className="relative" />
      </span>
    </a>
  );
}
