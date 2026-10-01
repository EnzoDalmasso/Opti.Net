"use client";

import { MessageCircleQuestion } from "lucide-react";
import { categories } from "@/data/categories";
import { setCatalogFilter, useCatalogFilter, type CatalogFilter } from "@/lib/catalogFilter";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import type { CategoryId, ProductWithBrand } from "@/types/catalog";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { ProductCard } from "./ProductCard";

const filters: Array<{ id: CatalogFilter; label: string }> = [
  { id: "destacados", label: "Destacados" },
  ...categories.map((category) => ({ id: category.id, label: category.shortName })),
  { id: "todos", label: "Ver todo" },
];

const categoryNames = Object.fromEntries(categories.map((category) => [category.id, category.shortName])) as Record<
  CategoryId,
  string
>;

function applyFilter(products: ProductWithBrand[], filter: CatalogFilter): ProductWithBrand[] {
  if (filter === "todos") return products;
  if (filter === "destacados") return products.filter((product) => product.featured);
  return products.filter((product) => product.categoryId === filter);
}

export function ProductExplorer({ products }: { products: ProductWithBrand[] }) {
  const activeFilter = useCatalogFilter();
  const visible = applyFilter(products, activeFilter);

  return (
    <>
      <div
        role="toolbar"
        aria-label="Filtrar productos"
        className="no-scrollbar -mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {filters.map((filter) => {
          const isActive = filter.id === activeFilter;
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setCatalogFilter(filter.id)}
              className={cn(
                "h-10 shrink-0 rounded-full px-4.5 text-sm font-semibold transition-all duration-300",
                isActive
                  ? "bg-ink text-white shadow-soft"
                  : "bg-white text-slate ring-1 ring-line hover:bg-mist hover:text-ink",
              )}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {visible.length} productos
      </p>

      {/* La `key` reinicia la animación escalonada al cambiar de filtro. */}
      <RevealGroup
        key={activeFilter}
        as="ul"
        staggerChildren={0.06}
        className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4"
      >
        {visible.map((product) => (
          <RevealItem as="li" key={product.id}>
            <ProductCard product={product} categoryName={categoryNames[product.categoryId]} />
          </RevealItem>
        ))}

        <RevealItem as="li" className="col-span-full">
          <div className="relative flex flex-col gap-6 overflow-hidden rounded-[1.75rem] bg-ink p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div aria-hidden="true" className="absolute -top-20 left-1/3 size-64 rounded-full bg-teal/40 blur-3xl" />
            <div className="relative flex items-start gap-4 sm:items-center sm:gap-5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-aqua ring-1 ring-white/15">
                <MessageCircleQuestion aria-hidden="true" className="size-6" strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="font-display text-xl leading-tight font-semibold tracking-[-0.02em] sm:text-2xl">
                  ¿Buscás otro modelo?
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/65 sm:text-[0.9375rem]">
                  En el local tenemos muchos más. Contanos qué te gusta y te mandamos opciones por WhatsApp.
                </p>
              </div>
            </div>
            <ButtonLink
              href={getWhatsAppUrl({ kind: "custom", message: "¡Hola Optinet! Estoy buscando un modelo de anteojos, ¿me pasan opciones?" })}
              external
              variant="brand"
              icon={<WhatsAppIcon size={17} />}
              className="relative self-stretch sm:self-auto"
            >
              Pedir opciones
            </ButtonLink>
          </div>
        </RevealItem>
      </RevealGroup>
    </>
  );
}
