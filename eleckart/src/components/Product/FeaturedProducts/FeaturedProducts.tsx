import { useEffect, useState } from "react";
import type { Product } from "../../../types/product";
import { getProducts } from "../../../services/productService";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom"

function FeaturedProducts() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        fetchProducts();
    }, []);

    const featuredProducts = products.filter(
        (product) => (product.isFeatured)
    );
    
    return (
        <section className="py-10">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Featured Products
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Top picks for you
                        </p>
                    </div>

                    <Link to="/products"
                        type="button"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                    >
                        View All →
                    </Link>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {featuredProducts.map((eachProductData) => (
                        <ProductCard
                            key={eachProductData._id}
                            product={eachProductData}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default FeaturedProducts