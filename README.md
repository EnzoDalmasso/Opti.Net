# Optinet Óptica — Demo web

Vidriera digital (no e-commerce) para **Optinet Óptica**, Las Parejas, Santa Fe.
Construida con Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Motion y Lucide.
Todas las consultas se derivan a WhatsApp con un mensaje ya armado según el producto o servicio.

## Scripts

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción (sitio 100 % estático)
npm run lint
npm run typecheck
```

## Diseño: de CentroOptico a Optinet

Se tomó de CentroOptico la **estructura** (secciones, configuración central, datos separados,
componentes `Reveal`, botones como enlaces, WhatsApp con mensajes por intención, SEO y
accesibilidad), pero la **identidad visual es otra**:

| | CentroOptico | Optinet |
| --- | --- | --- |
| Concepto | Editorial / boutique cálida | Óptica moderna, clara y cercana |
| Paleta | Marfil, tinta y bronce | Blanco/niebla, gris tinta y **turquesa del logo** |
| Tipografía | Serif (Cormorant) + Manrope | Sans geométrica (Sora) + Plus Jakarta Sans |
| Formas | Esquinas casi rectas, líneas finas | Bordes muy redondeados, cards con sombra suave, píldoras |
| Hero | Foto a pantalla completa, oscura | Hero claro dividido, anillos tipo lente y tarjetas flotantes |
| Categorías | Grilla editorial | Grilla "bento" que filtra los productos al hacer clic |
| Servicios | Lista con divisores | Sección oscura con cards de vidrio |
| Header | Barra que se vuelve sólida | Barra que se transforma en "píldora" flotante |

Los colores salen del logo de Instagram (gris oscuro "OPTI" + turquesa ".NET" y el ojo).

## Dónde se edita cada cosa

| Qué | Archivo |
| --- | --- |
| Nombre, WhatsApp, Instagram, dirección, horarios, textos del hero, SEO | `src/config/business.ts` |
| Productos de la vidriera | `src/data/products.ts` (imágenes en `public/images/products/`) |
| Marcas | `src/data/brands.ts` |
| Categorías | `src/data/categories.ts` |
| Servicios | `src/data/services.ts` |
| Grilla de Instagram | `src/data/instagram.ts` |
| Mensajes de WhatsApp | `src/lib/whatsapp.ts` |
| Colores y tipografías | variables en `src/app/globals.css` y `src/app/fonts.ts` |

## Estructura

```
src/
  app/            layout, página, estilos globales, fuentes, SEO (robots, sitemap, manifest, ícono)
  config/         datos del negocio
  data/           productos, marcas, categorías, servicios, Instagram (datos, no componentes)
  types/          tipos del catálogo
  lib/            WhatsApp, mapas, acceso a productos, filtro compartido, animaciones
  hooks/          sección activa del menú, comportamiento accesible de diálogos
  components/
    layout/       Header, MobileMenu, Footer, Logo, botón flotante de WhatsApp
    sections/     Hero, Categories, FeaturedProducts, Services, About, InstagramFeed, Contact
    products/     ProductCard, ProductExplorer (filtros), CategoryLink
    ui/           ButtonLink, SectionHeading, Reveal, íconos de marca
    seo/          datos estructurados (schema.org Optician)
```

**Catálogo real a futuro:** los componentes sólo consumen `getProducts()` de `src/lib/catalog.ts`.
Para conectar una API o CMS alcanza con cambiar esa función respetando el tipo `Product`.

## Datos DEMO a confirmar con la óptica

- **WhatsApp**: número de ejemplo (`isPlaceholder: true`); el sitio muestra la etiqueta "A confirmar".
  Cargar el número real en `business.ts` y poner `isPlaceholder: false`.
- **Horarios**: de referencia, también marcados "A confirmar".
- **Dirección**: Calle 22 Nº 910, Las Parejas (tomada de la bio de Instagram). El mapa ya apunta ahí.
- **Productos y marcas**: ficticios, sólo para la demo.
- **Imágenes**: fotos de stock de Unsplash (licencia Unsplash), ilustrativas. Ideal reemplazarlas por fotos
  reales del local y de los productos.
- **Video del hero**: opcional. Agregar un `.mp4`/`.webm` corto y liviano en `public/` y completar `hero.video`
  en `business.ts` (se carga con `preload="none"` y usa la foto como póster).

## Deploy en Vercel

1. Subir el proyecto a un repositorio de GitHub.
2. En Vercel: *Add New → Project* e importar el repositorio (Next.js se detecta solo, sin configuración extra).
3. Opcional: definir la variable `NEXT_PUBLIC_SITE_URL` con el dominio final para que canonical,
   Open Graph, sitemap y robots usen la URL correcta (ver `.env.example`).

También se puede publicar desde la terminal con `npx vercel`.
