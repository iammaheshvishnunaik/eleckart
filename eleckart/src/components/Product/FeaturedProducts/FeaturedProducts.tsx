import React from 'react'
import { Products } from "../../../data/products";
import ProductCard from "../ProductCard/ProductCard";

function FeaturedProducts() {
    const featuredProducts = Products.filter(
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

                    <button
                        type="button"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                    >
                        View All →
                    </button>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {featuredProducts.map((eachProductData) => (
                        <ProductCard
                            key={eachProductData._id}
                            products={eachProductData}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default FeaturedProducts