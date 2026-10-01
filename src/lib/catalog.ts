import { brands } from "@/data/brands";
import { products } from "@/data/products";
import type { CategoryId, ProductWithBrand } from "@/types/catalog";

const brandById = new Map(brands.map((brand) => [brand.id, brand]));

/**
 * Capa de acceso a los productos. Hoy lee datos locales; el día de mañana
 * puede consultar una API o CMS sin que cambien los componentes.
 */
export function getProducts(): ProductWithBrand[] {
  return products.flatMap((product) => {
    const brand = brandById.get(product.brandId);
    return brand ? [{ ...product, brand }] : [];
  });
}

export function countByCategory(items: ProductWithBrand[]): Record<CategoryId, number> {
  const counts: Record<CategoryId, number> = { sol: 0, recetados: 0, armazones: 0, lentes: 0, accesorios: 0 };
  for (const item of items) counts[item.categoryId] += 1;
  return counts;
}
