"use client";

import type { MouseEvent, ReactNode } from "react";
import type { CategoryId } from "@/types/catalog";
import { setCatalogFilter } from "@/lib/catalogFilter";
import { scrollToAnchor } from "@/lib/scroll";

interface CategoryLinkProps {
  categoryId: CategoryId;
  className?: string;
  ariaLabel: string;
  children: ReactNode;
}

/** Enlace a la grilla de productos que además aplica el filtro de la categoría. */
export function CategoryLink({ categoryId, className, ariaLabel, children }: CategoryLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setCatalogFilter(categoryId);
    scrollToAnchor("#productos");
  };

  return (
    <a href="#productos" onClick={handleClick} aria-label={ariaLabel} className={className}>
      {children}
    </a>
  );
}
