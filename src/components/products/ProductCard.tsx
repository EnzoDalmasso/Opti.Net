import Image from "next/image";
import type { ProductWithBrand } from "@/types/catalog";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

interface ProductCardProps {
  product: ProductWithBrand;
  categoryName: string;
}

export function ProductCard({ product, categoryName }: ProductCardProps) {
  const whatsappUrl = getWhatsAppUrl({ kind: "product", productName: product.name, brandName: product.brand.name });

  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] bg-white p-2.5 shadow-soft ring-1 ring-line/60 transition-[box-shadow,translate] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:shadow-lift sm:p-3">
      <div className="relative aspect-square overflow-hidden rounded-[1.25rem] bg-mist">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="(min-width: 1280px) 20rem, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 50vw"
          style={{ objectPosition: product.image.position }}
          className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-x-2.5 top-2.5 flex items-start justify-between gap-2">
          <span className="rounded-full bg-white/90 px-2.5 py-1 text-[0.6875rem] font-semibold text-slate backdrop-blur-md">
            {categoryName}
          </span>
          {product.isNew && (
            <span className="rounded-full bg-teal px-2.5 py-1 text-[0.6875rem] font-semibold text-white shadow-glow">Nuevo</span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-1.5 pt-4 pb-1.5 sm:px-2">
        <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-teal uppercase">{product.brand.name}</p>
        <h3 className="mt-1 font-display text-lg leading-tight font-semibold tracking-[-0.02em] text-ink sm:text-xl">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-3 text-[0.8125rem] leading-relaxed text-muted sm:line-clamp-2 sm:text-sm">
          {product.description}
        </p>

        <ul className="mt-3 hidden flex-wrap gap-1.5 sm:flex" aria-label="Características">
          {product.features.map((feature) => (
            <li key={feature} className="rounded-full bg-mist px-2.5 py-1 text-xs font-medium text-slate">
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Consultar por ${product.name} de ${product.brand.name} por WhatsApp`}
            className="flex h-11 items-center justify-center gap-2 rounded-full bg-mist text-sm font-semibold text-ink ring-1 ring-line transition-all duration-300 ease-out group-hover:bg-teal group-hover:text-white group-hover:ring-teal active:scale-[0.98]"
          >
            <WhatsAppIcon size={16} />
            Consultar
          </a>
        </div>
      </div>
    </article>
  );
}
