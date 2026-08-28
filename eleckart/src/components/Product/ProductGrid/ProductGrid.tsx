    import type { Product } from "../../../types/product";
    import ProductCard from "../ProductCard/ProductCard";

    interface ProductGridProps {
    products: Product[];
    }

    const ProductGrid = ({ products }: ProductGridProps) => {
    if (products.length === 0) {
        return (
        <div className="flex min-h-64 items-center justify-center rounded-lg border border-gray-200 bg-white">
            <p className="text-sm text-gray-500">
            No products found.
            </p>
        </div>
        );
    }

        return (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => {
                    return (
                        <ProductCard
                            key={product._id}
                            products={product}
                        />
                    );
                })}
            </div>
        );
    };

    export default ProductGrid;