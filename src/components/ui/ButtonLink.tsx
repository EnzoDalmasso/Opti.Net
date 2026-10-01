import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "brand" | "outline" | "light" | "ghost-light" | "whatsapp";
type Size = "md" | "sm";

interface ButtonLinkProps extends Omit<ComponentPropsWithoutRef<"a">, "children"> {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Abre en otra pestaña con `rel` seguro. */
  external?: boolean;
  /** Ícono a la izquierda del texto. */
  icon?: ReactNode;
  /** Flecha animada a la derecha. */
  withArrow?: boolean;
}

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white shadow-soft hover:bg-slate hover:shadow-lift",
  brand: "bg-teal text-white shadow-glow hover:bg-teal-strong",
  outline: "border border-ink/15 bg-white/60 text-ink backdrop-blur-sm hover:border-ink/40 hover:bg-white",
  light: "bg-white text-ink shadow-soft hover:bg-aqua-soft",
  "ghost-light": "border border-white/30 text-white hover:border-white/70 hover:bg-white/10",
  whatsapp: "bg-whatsapp text-ink shadow-soft hover:brightness-95",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-sm sm:h-13 sm:px-7",
  sm: "h-10 px-4.5 text-[0.8125rem]",
};

/** Enlace con apariencia de botón. Todas las acciones del sitio navegan, por eso es un `<a>`. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  icon,
  withArrow = false,
  className,
  ...rest
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "group/btn inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full font-semibold whitespace-nowrap",
        "transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        variants[variant],
        sizes[size],
        className,
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {icon}
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-1"
        />
      )}
    </a>
  );
}
