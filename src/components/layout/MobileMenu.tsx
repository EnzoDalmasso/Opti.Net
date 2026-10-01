"use client";

import type { MouseEvent } from "react";
import * as m from "motion/react-m";
import { ArrowUpRight, MapPin } from "lucide-react";
import { business, navigation } from "@/config/business";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";

interface MobileMenuProps {
  activeId: string | null;
  onNavigate: (href: string) => void;
}

export function MobileMenu({ activeId, onNavigate }: MobileMenuProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    onNavigate(href);
  };

  return (
    <m.div
      id="menu-mobile"
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación"
      className="fixed inset-0 flex flex-col overflow-y-auto bg-white pt-[var(--header-height)] text-ink lg:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.25, delay: 0.1 } }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-aqua-soft blur-3xl"
      />

      <nav aria-label="Menú móvil" className="container-site relative flex flex-1 flex-col justify-center py-8">
        <m.ul
          className="flex flex-col gap-1"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
          }}
        >
          {navigation.map((item, index) => {
            const isActive = activeId === item.href.slice(1);
            return (
              <m.li
                key={item.href}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
                }}
              >
                <a
                  href={item.href}
                  onClick={(event) => handleClick(event, item.href)}
                  aria-current={isActive ? "location" : undefined}
                  data-autofocus={index === 0 ? "" : undefined}
                  className={cn(
                    "group flex items-center justify-between rounded-2xl px-4 py-3.5 transition-colors duration-300",
                    isActive ? "bg-aqua-soft" : "hover:bg-mist",
                  )}
                >
                  <span
                    className={cn(
                      "font-display text-[2rem] leading-none font-semibold tracking-[-0.03em]",
                      isActive && "text-teal-strong",
                    )}
                  >
                    {item.label}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-6 text-muted transition-transform duration-300 group-hover:rotate-45"
                  />
                </a>
              </m.li>
            );
          })}
        </m.ul>
      </nav>

      <m.div
        className="container-site relative flex flex-col gap-4 pb-[max(2rem,env(safe-area-inset-bottom))]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.35, ease: easeOut } }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
      >
        <ButtonLink href={getWhatsAppUrl()} external variant="brand" icon={<WhatsAppIcon size={18} />} className="w-full">
          Consultar por WhatsApp
        </ButtonLink>
        <div className="flex items-center justify-between gap-4 rounded-2xl bg-mist px-4 py-3 text-sm text-muted">
          <span className="flex items-center gap-2">
            <MapPin aria-hidden="true" className="size-4 text-teal" />
            {business.location.street}, {business.location.city}
          </span>
          <a
            href={business.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${business.instagram.handle}`}
            className="flex size-10 items-center justify-center rounded-full bg-white text-ink shadow-soft"
          >
            <InstagramIcon size={18} />
          </a>
        </div>
      </m.div>
    </m.div>
  );
}
