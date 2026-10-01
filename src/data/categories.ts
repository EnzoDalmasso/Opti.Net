import type { Category } from "@/types/catalog";

export const categories: Category[] = [
  {
    id: "sol",
    name: "Anteojos de sol",
    shortName: "Sol",
    description: "Protección UV400 y modelos de temporada para todos los estilos.",
    image: {
      src: "/images/categories/sol.jpg",
      alt: "Mujer con anteojos de sol negros estilo cat-eye",
      position: "center 30%",
    },
  },
  {
    id: "recetados",
    name: "Anteojos recetados",
    shortName: "Recetados",
    description: "Armamos tus anteojos con la receta de tu oftalmólogo.",
    image: {
      src: "/images/categories/recetados.jpg",
      alt: "Mujer con anteojos recetados de armazón fino",
      position: "center 25%",
    },
  },
  {
    id: "armazones",
    name: "Armazones",
    shortName: "Armazones",
    description: "Acetato, metal y diseños livianos para probar en el local.",
    image: {
      src: "/images/categories/armazones.jpg",
      alt: "Exhibidor iluminado con armazones de anteojos",
    },
  },
  {
    id: "lentes",
    name: "Lentes",
    shortName: "Lentes",
    description: "Lentes de contacto, multifocales y filtros especiales.",
    image: {
      src: "/images/categories/lentes.jpg",
      alt: "Estuche y accesorios para lentes de contacto",
    },
  },
  {
    id: "accesorios",
    name: "Accesorios",
    shortName: "Accesorios",
    description: "Estuches, cordones, paños y kits de limpieza.",
    image: {
      src: "/images/categories/accesorios.jpg",
      alt: "Dos anteojos de sol junto a su estuche",
    },
  },
];

export const getCategory = (id: Category["id"]) => categories.find((category) => category.id === id);
