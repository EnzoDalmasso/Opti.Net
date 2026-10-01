"use client";

import { useSyncExternalStore } from "react";
import type { CategoryId } from "@/types/catalog";

export type CatalogFilter = CategoryId | "destacados" | "todos";

/**
 * Store mínimo compartido entre las tarjetas de categoría y la grilla de
 * productos: elegir una categoría filtra los productos sin recargar la página.
 */
let current: CatalogFilter = "destacados";
const listeners = new Set<() => void>();

export function setCatalogFilter(next: CatalogFilter): void {
  if (next === current) return;
  current = next;
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useCatalogFilter(): CatalogFilter {
  return useSyncExternalStore(subscribe, () => current, () => "destacados");
}
