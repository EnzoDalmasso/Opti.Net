import type { Metadata, Viewport } from "next";
import { business } from "@/config/business";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { fontDisplay, fontSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: business.seo.title,
    template: `%s | ${business.name}`,
  },
  description: business.seo.description,
  keywords: business.seo.keywords,
  applicationName: business.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: business.name,
    title: business.seo.title,
    description: business.seo.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: business.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: business.seo.title,
    description: business.seo.description,
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#f4f8f9",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/**
 * Al cargar o recargar, la página siempre empieza arriba de todo: se desactiva
 * la restauración de scroll del navegador y se quita el `#seccion` de la URL
 * antes de que el navegador salte a esa sección.
 */
const scrollToTopOnLoad = `
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  window.scrollTo(0, 0);
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" data-scroll-behavior="smooth" className={`${fontDisplay.variable} ${fontSans.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: scrollToTopOnLoad }} />
      </head>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
