import { cn } from "@/lib/utils";

interface LogoProps {
  tone?: "dark" | "light";
  className?: string;
}

/** Isotipo: un ojo con iris en anillos, inspirado en la marca de Optinet. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <path
        d="M3 20c4.6-7.4 10.3-11 17-11s12.4 3.6 17 11c-4.6 7.4-10.3 11-17 11S7.6 27.4 3 20Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="20" r="7.2" fill="var(--brand-teal)" />
      <circle cx="20" cy="20" r="7.2" fill="none" stroke="var(--brand-aqua)" strokeWidth="1.4" strokeDasharray="3 2.2" />
      <circle cx="20" cy="20" r="3" fill="currentColor" />
      <circle cx="22.4" cy="17.6" r="1.3" fill="#fff" />
    </svg>
  );
}

/** Logotipo: isotipo + "ÓPTICA OPTI.NET". */
export function Logo({ tone = "dark", className }: LogoProps) {
  const isLight = tone === "light";

  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className={cn("size-9 shrink-0", isLight ? "text-white" : "text-ink")} />
      <span aria-hidden="true" className="flex flex-col leading-none">
        <span className={cn("text-[0.5625rem] font-semibold tracking-[0.42em]", isLight ? "text-white/60" : "text-muted")}>
          ÓPTICA
        </span>
        <span className="mt-1 font-display text-[1.3125rem] font-bold tracking-[-0.02em]">
          <span className={isLight ? "text-white" : "text-ink"}>OPTI</span>
          <span className={isLight ? "text-aqua" : "text-teal"}>.NET</span>
        </span>
      </span>
    </span>
  );
}
