import { BadgeCheck, Contact, HeartHandshake, ScanEye, Sparkles, Wrench } from "lucide-react";
import type { Service } from "@/types/catalog";

export const services: Service[] = [
  {
    id: "atencion",
    title: "Atención personalizada",
    description: "Te recibimos sin apuro, escuchamos qué necesitás y te acompañamos en cada paso.",
    icon: HeartHandshake,
  },
  {
    id: "asesoramiento",
    title: "Asesoramiento de imagen",
    description: "Te ayudamos a elegir el armazón según la forma de tu rostro, tu estilo y tu rutina.",
    icon: Sparkles,
  },
  {
    id: "control",
    title: "Control visual",
    description: "Revisamos cómo estás viendo y, si hace falta, te orientamos para tu consulta oftalmológica.",
    icon: ScanEye,
  },
  {
    id: "receta",
    title: "Anteojos con tu receta",
    description: "Armamos tus anteojos monofocales o multifocales con la receta de tu oftalmólogo.",
    icon: BadgeCheck,
  },
  {
    id: "contacto",
    title: "Adaptación de lentes de contacto",
    description: "Te enseñamos a colocarlos, cuidarlos y hacemos el seguimiento de la adaptación.",
    icon: Contact,
  },
  {
    id: "ajustes",
    title: "Ajustes y reparaciones",
    description: "Calibramos, cambiamos plaquetas y tornillos, y dejamos tus anteojos como nuevos.",
    icon: Wrench,
  },
];
