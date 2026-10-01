/**
 * Configuración central del negocio.
 *
 * Todo lo que identifica a Optinet (nombre, contacto, ubicación, horarios y
 * textos principales) vive acá. Los campos con `isPlaceholder: true` son datos
 * DEMO que todavía hay que confirmar con la óptica: el sitio los marca con la
 * etiqueta "A confirmar".
 */

export interface OpeningHours {
  days: string;
  hours: string;
}

export interface BusinessConfig {
  name: string;
  shortName: string;
  siteUrl: string;
  tagline: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  whatsapp: {
    /** Número internacional, sólo dígitos (ej. 549XXXXXXXXXX). */
    number: string;
    displayNumber: string;
    defaultMessage: string;
    isPlaceholder: boolean;
  };
  instagram: {
    handle: string;
    url: string;
    followersLabel: string;
  };
  location: {
    street: string;
    city: string;
    province: string;
    /** Consulta usada para el mapa embebido y "Cómo llegar". */
    mapsQuery: string;
  };
  hours: {
    schedule: OpeningHours[];
    note: string;
    isPlaceholder: boolean;
  };
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    image: { src: string; alt: string };
    /** Video decorativo opcional (corto y liviano). Si no se define, se usa la imagen. */
    video?: { mp4?: string; webm?: string };
  };
}

export const business: BusinessConfig = {
  name: "Optinet Óptica",
  shortName: "Optinet",
  // Reemplazar por el dominio definitivo (o la URL de Vercel) antes de publicar.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://optinet-optica.vercel.app",
  tagline: "Tu óptica de confianza en Las Parejas.",
  seo: {
    title: "Optinet Óptica | Anteojos, lentes de sol y cuidado visual en Las Parejas",
    description:
      "Optinet Óptica en Las Parejas, Santa Fe. Anteojos recetados, lentes de sol, armazones, lentes de contacto y accesorios con asesoramiento personalizado. Consultanos por WhatsApp.",
    keywords: [
      "óptica Las Parejas",
      "Optinet",
      "anteojos",
      "anteojos recetados",
      "lentes de sol",
      "armazones",
      "lentes de contacto",
      "óptica Santa Fe",
    ],
  },
  whatsapp: {
    // DEMO: reemplazar por el número real de la óptica (formato 549 + característica + número).
    number: "5493471000000",
    displayNumber: "+54 9 3471 00-0000",
    defaultMessage: "¡Hola Optinet! Quería hacer una consulta.",
    isPlaceholder: true,
  },
  instagram: {
    handle: "@optinetoptica",
    url: "https://www.instagram.com/optinetoptica/",
    followersLabel: "+2.000 seguidores",
  },
  location: {
    // Dirección publicada en la bio de Instagram.
    street: "Calle 22 Nº 910",
    city: "Las Parejas",
    province: "Santa Fe",
    mapsQuery: "Calle 22 910, Las Parejas, Santa Fe, Argentina",
  },
  hours: {
    // DEMO: horarios de referencia, confirmar con la óptica.
    schedule: [
      { days: "Lunes a viernes", hours: "8:30 – 12:30 · 16:30 – 20:30" },
      { days: "Sábados", hours: "9:00 – 12:30" },
    ],
    note: "Si venís a controlar tu vista, escribinos antes y te reservamos un horario.",
    isPlaceholder: true,
  },
  hero: {
    eyebrow: "Óptica en Las Parejas, Santa Fe",
    title: "Ver bien también es",
    highlight: "verse bien.",
    subtitle:
      "Anteojos recetados, lentes de sol y armazones elegidos con criterio. Te asesoramos con tiempo para que encuentres los que van con tu cara, tu receta y tu día a día.",
    image: {
      src: "/images/hero/hero.jpg",
      alt: "Mujer sonriendo con anteojos de armazón negro",
    },
  },
};

export const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
] as const;
