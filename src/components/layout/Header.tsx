"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import { navigation } from "@/config/business";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useDialogBehavior } from "@/hooks/useDialogBehavior";
import { scrollToAnchor } from "@/lib/scroll";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

const sectionIds = navigation.map((item) => item.href.slice(1));

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 64rem)");
    const closeOnDesktop = (event: MediaQueryListEvent) => event.matches && setIsMenuOpen(false);
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  useDialogBehavior(isMenuOpen, headerRef, closeMenu);

  const handleMobileNavigate = useCallback((href: string) => {
    setIsMenuOpen(false);
    // Espera a que se libere el bloqueo de scroll antes de desplazarse.
    window.setTimeout(() => scrollToAnchor(href), 60);
  }, []);

  const isFloating = isScrolled && !isMenuOpen;
  const whatsappUrl = getWhatsAppUrl();

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-40">
      <a
        href="#contenido"
        className="sr-only z-50 rounded-full bg-ink px-4 py-2 text-sm text-white focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        Saltar al contenido
      </a>

      <AnimatePresence>
        {isMenuOpen && <MobileMenu activeId={activeId} onNavigate={handleMobileNavigate} />}
      </AnimatePresence>

      <div
        className={cn(
          "relative transition-[padding] duration-500 ease-[var(--ease-out-expo)]",
          isFloating ? "px-3 pt-3 sm:px-5" : "px-0 pt-0",
        )}
      >
        <div
          className={cn(
            "mx-auto transition-all duration-500 ease-[var(--ease-out-expo)]",
            isFloating
              ? "max-w-[78rem] rounded-full border border-white/70 bg-white/80 shadow-soft backdrop-blur-xl"
              : "max-w-[82rem] border border-transparent",
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between gap-6 transition-[height,padding] duration-500 ease-[var(--ease-out-expo)]",
              isFloating ? "h-16 pr-2 pl-4 sm:pl-6" : "h-[var(--header-height)] px-5 sm:px-8 lg:px-10",
            )}
          >
            <a href="#inicio" className="rounded-lg">
              <span className="sr-only">Óptica Opti.net, ir al inicio</span>
              <Logo />
            </a>

            <nav aria-label="Principal" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {navigation.map((item) => {
                  const isActive = activeId === item.href.slice(1);
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        aria-current={isActive ? "location" : undefined}
                        className={cn(
                          "relative flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                          isActive ? "bg-aqua-soft text-teal-strong" : "text-slate/80 hover:bg-cloud hover:text-ink",
                        )}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <span className="hidden sm:block">
                <ButtonLink href={whatsappUrl} external size="sm" variant="brand" icon={<WhatsAppIcon size={16} />}>
                  WhatsApp
                </ButtonLink>
              </span>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Consultar por WhatsApp"
                className="flex size-11 items-center justify-center rounded-full bg-teal text-white shadow-glow sm:hidden"
              >
                <WhatsAppIcon size={18} />
              </a>

              <button
                type="button"
                onClick={() => setIsMenuOpen((open) => !open)}
                aria-expanded={isMenuOpen}
                aria-controls="menu-mobile"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                className="relative flex size-11 items-center justify-center rounded-full bg-ink text-white lg:hidden"
              >
                <span aria-hidden="true" className="relative block h-3 w-5">
                  <span
                    className={cn(
                      "absolute left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-500 ease-[var(--ease-out-expo)]",
                      isMenuOpen ? "top-[5px] rotate-45" : "top-0",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute right-0 h-0.5 rounded-full bg-current transition-all duration-500 ease-[var(--ease-out-expo)]",
                      isMenuOpen ? "top-[5px] w-5 -rotate-45" : "top-2.5 w-3",
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
