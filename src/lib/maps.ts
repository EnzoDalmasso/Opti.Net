import { business } from "@/config/business";

const query = encodeURIComponent(business.location.mapsQuery);

/** Abre Google Maps con indicaciones hacia el local. */
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${query}`;

/** Mapa embebido sin API key (se carga en forma diferida). */
export const mapEmbedUrl = `https://maps.google.com/maps?q=${query}&z=16&output=embed`;
