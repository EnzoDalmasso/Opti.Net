import type { LucideIcon } from "lucide-react";

export interface ImageAsset {
  src: string;
  alt: string;
  /** `object-position` CSS para encuadrar la foto. */
  position?: string;
}

export type CategoryId = "sol" | "recetados" | "armazones" | "lentes" | "accesorios";

export interface Category {
  id: CategoryId;
  name: string;
  /** Nombre corto para los filtros. */
  shortName: string;
  description: string;
  image: ImageAsset;
}

export interface Brand {
  id: string;
  name: string;
}

/**
 * Producto de la vidriera. La estructura está pensada para poder
 * reemplazarse más adelante por datos de un catálogo real (CMS / API)
 * sin tocar los componentes.
 */
export interface Product {
  id: string;
  name: string;
  brandId: Brand["id"];
  categoryId: CategoryId;
  description: string;
  /** Detalles breves que se muestran como etiquetas. */
  features: string[];
  image: ImageAsset;
  isNew?: boolean;
  /** Si es `true` aparece en "Productos destacados". */
  featured?: boolean;
}

export interface ProductWithBrand extends Product {
  brand: Brand;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface InstagramPost {
  id: string;
  caption: string;
  image: ImageAsset;
}
