import React from 'react'
import { Products } from "../../../data/products"
import ProductCard from "../ProductCard/ProductCard"

function BestDeals() {
    const bestDeals = [...Products].sort(
        (productA, productB) =>
            productB.discount - productA.discount
    ).slice(0,4);
    return (
    <section className="py-10">
            <div className="mx-auto max-w-7xl px-4">

                {/* Section Header */}
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Best Deals
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Check out our best deals
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
                    {bestDeals.map((eachProductData) => (
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

export default BestDeals