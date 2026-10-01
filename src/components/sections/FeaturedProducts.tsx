import { getProducts } from "@/lib/catalog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductExplorer } from "@/components/products/ProductExplorer";

export function FeaturedProducts() {
  const products = getProducts();

  return (
    <section id="productos" aria-labelledby="productos-title" className="bg-mist py-24 sm:py-28 lg:py-32">
      <div className="container-site">
        <SectionHeading
          id="productos-title"
          eyebrow="Productos"
          title={
            <>
              Elegí tus próximos <span className="text-gradient-brand">anteojos</span>
            </>
          }
          description="Una selección de lo que vas a encontrar en el local. Consultá por cualquier modelo y te respondemos por WhatsApp con disponibilidad y opciones."
        />
        <ProductExplorer products={products} />
      </div>
    </section>
  );
}
