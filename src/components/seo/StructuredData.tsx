import { business } from "@/config/business";

/** Datos estructurados (schema.org) para buscadores. */
export function StructuredData() {
  const { location, whatsapp, instagram } = business;
  const data = {
    "@context": "https://schema.org",
    "@type": "Optician",
    name: business.name,
    url: business.siteUrl,
    image: `${business.siteUrl}/og-image.jpg`,
    description: business.seo.description,
    ...(whatsapp.isPlaceholder ? {} : { telephone: `+${whatsapp.number}` }),
    sameAs: [instagram.url],
    address: {
      "@type": "PostalAddress",
      streetAddress: location.street,
      addressLocality: location.city,
      addressRegion: location.province,
      addressCountry: "AR",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }}
    />
  );
}
