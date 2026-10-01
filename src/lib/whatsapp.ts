import { business } from "@/config/business";

type WhatsAppIntent =
  | { kind: "general" }
  | { kind: "product"; productName: string; brandName?: string }
  | { kind: "category"; categoryName: string }
  | { kind: "service"; serviceName: string }
  | { kind: "custom"; message: string };

/** Genera el texto predefinido según el motivo de la consulta. */
export function buildWhatsAppMessage(intent: WhatsAppIntent = { kind: "general" }): string {
  switch (intent.kind) {
    case "product": {
      const model = intent.brandName ? `${intent.productName} de ${intent.brandName}` : intent.productName;
      return `¡Hola Optinet! Vi en la web el modelo ${model} y quería consultar por disponibilidad.`;
    }
    case "category":
      return `¡Hola Optinet! Quería consultar por ${intent.categoryName.toLowerCase()}.`;
    case "service":
      return `¡Hola Optinet! Quería consultar por el servicio de ${intent.serviceName.toLowerCase()}.`;
    case "custom":
      return intent.message;
    case "general":
      return business.whatsapp.defaultMessage;
  }
}

/** URL de WhatsApp (wa.me) con el mensaje ya codificado. */
export function getWhatsAppUrl(intent?: WhatsAppIntent): string {
  const text = encodeURIComponent(buildWhatsAppMessage(intent));
  return `https://wa.me/${business.whatsapp.number}?text=${text}`;
}
