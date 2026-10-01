import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/categories";
import { countByCategory, getProducts } from "@/lib/catalog";
import { cn } from "@/lib/utils";
import type { Category } from "@/types/catalog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { CategoryLink } from "@/components/products/CategoryLink";

/** Ubicación de cada tarjeta en la grilla "bento" de escritorio. */
const bentoLayout: Record<Category["id"], string> = {
  sol: "lg:col-span-5 lg:row-span-2",
  recetados: "lg:col-span-4",
  lentes: "lg:col-span-3",
  armazones: "lg:col-span-4",
  accesorios: "lg:col-span-3",
};

function CategoryCard({ category, count, featured }: { category: Category; count: number; featured: boolean }) {
  return (
    <CategoryLink
      categoryId={category.id}
      ariaLabel={`Ver ${category.name.toLowerCase()}`}
      className="group relative flex h-full flex-col justify-end overflow-hidden rounded-[1.75rem] bg-cloud shadow-soft transition-[box-shadow,translate] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:shadow-lift"
    >
      <Image
        src={category.image.src}
        alt={category.image.alt}
        fill
        sizes={featured ? "(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 80vw" : "(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 80vw"}
        style={{ objectPosition: category.image.position }}
        className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />

      <span className="absolute top-4 left-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-ink backdrop-blur-md">
        {count} {count === 1 ? "modelo" : "modelos"}
      </span>

      <div className="relative flex items-end justify-between gap-4 p-5 text-white sm:p-6">
        <div>
          <h3 className={cn("font-display leading-tight font-semibold tracking-[-0.02em]", featured ? "text-3xl sm:text-4xl" : "text-2xl")}>
            {category.name}
          </h3>
          <p className="mt-1.5 max-w-xs text-sm leading-snug text-white/75">{category.description}</p>
        </div>
        <span
          aria-hidden="true"
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-md transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:bg-white group-hover:text-teal"
        >
          <ArrowUpRight className="size-5 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-45" />
        </span>
      </div>
    </CategoryLink>
  );
}

export function Categories() {
  const counts = countByCategory(getProducts());

  return (
    <section id="categorias" aria-labelledby="categorias-title" className="py-24 sm:py-28 lg:py-32">
      <div className="container-site flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeading
          id="categorias-title"
          eyebrow="Categorías"
          title={
            <>
              Todo para tu vista, <span className="text-gradient-brand">en un solo lugar</span>
            </>
          }
        />
        <p className="max-w-sm text-base leading-relaxed text-muted lg:pb-2">
          Elegí una categoría para ver los modelos. Todos se pueden probar en el local, con asesoramiento.
        </p>
      </div>

      {/* Mobile: carrusel con scroll-snap. Tablet: 2 columnas. Desktop: grilla bento. */}
      <RevealGroup
        as="ul"
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-4 sm:scroll-px-8 sm:px-8 md:container-site md:grid md:auto-rows-[17rem] md:grid-cols-2 md:overflow-visible md:pb-0 lg:mt-14 lg:grid-flow-dense lg:auto-rows-[16.5rem] lg:grid-cols-12"
      >
        {categories.map((category, index) => {
          const featured = index === 0;
          return (
            <RevealItem
              as="li"
              key={category.id}
              className={cn(
                "aspect-[4/5] w-[78vw] max-w-xs shrink-0 snap-start md:aspect-auto md:w-auto md:max-w-none",
                featured && "md:row-span-2",
                bentoLayout[category.id],
              )}
            >
              <CategoryCard category={category} count={counts[category.id]} featured={featured} />
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
