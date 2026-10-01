/** Desplaza hasta un ancla (`#id`) respetando la preferencia de movimiento reducido. */
export function scrollToAnchor(hash: string): void {
  const target = document.querySelector<HTMLElement>(hash);
  if (!target) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
  window.history.replaceState(null, "", hash);
}
