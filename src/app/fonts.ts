import { Plus_Jakarta_Sans, Sora } from "next/font/google";

/** Sans geométrica para títulos: dialoga con las mayúsculas del logo. */
export const fontDisplay = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-brand-display",
});

/** Tipografía de lectura para textos y navegación. */
export const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-brand-sans",
});
