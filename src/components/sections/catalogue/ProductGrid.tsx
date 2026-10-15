import ProductCard, {
  type CatalogueProduct,
} from "./ProductCard";

type ProductGridProps = {
  products: CatalogueProduct[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-white/15 px-5 py-16 text-center">
        <h2 className="text-lg font-semibold text-white">
          No components found
        </h2>

        <p className="mt-2 text-sm leading-6 text-white/45">
          Try another search term or select a different category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}