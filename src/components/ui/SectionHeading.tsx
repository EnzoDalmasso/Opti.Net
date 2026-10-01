import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  children?: ReactNode;
}

/** Encabezado de sección: etiqueta tipo "pill", título y bajada. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = "left",
  tone = "dark",
  className,
  children,
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <Reveal className={cn("flex flex-col gap-5", align === "center" && "items-center text-center", className)}>
      <p
        className={cn(
          "eyebrow inline-flex items-center gap-2 self-start rounded-full px-3.5 py-1.5",
          align === "center" && "self-center",
          isLight ? "bg-white/10 text-aqua ring-1 ring-white/15" : "bg-aqua-soft text-teal-strong",
        )}
      >
        <span aria-hidden="true" className={cn("size-1.5 rounded-full", isLight ? "bg-aqua" : "bg-teal")} />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "font-display text-[2.125rem] leading-[1.08] font-semibold tracking-[-0.03em] sm:text-5xl lg:text-[3.25rem]",
          isLight ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("max-w-xl text-base leading-relaxed sm:text-[1.0625rem]", isLight ? "text-white/70" : "text-muted")}>
          {description}
        </p>
      )}
      {children}
    </Reveal>
  );
}
